// DEL-BOY® site behaviour: mobile menu, phone slideshow, reveals, contact form. No dependencies.
(() => {
  const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;

  // ── Mobile menu ───────────────────────────────
  const toggle = document.querySelector(".menu-toggle");
  const nav = document.getElementById("site-nav");
  if (toggle && nav) {
    const setOpen = (open, returnFocus) => {
      toggle.setAttribute("aria-expanded", String(open));
      toggle.querySelector(".menu-label").textContent = open ? "Close" : "Menu";
      nav.classList.toggle("is-open", open);
      if (!open && returnFocus) toggle.focus();
    };
    toggle.addEventListener("click", () => setOpen(toggle.getAttribute("aria-expanded") !== "true"));
    nav.addEventListener("click", (e) => { if (e.target.closest("a")) setOpen(false); });
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && toggle.getAttribute("aria-expanded") === "true") setOpen(false, true);
    });
    document.addEventListener("click", (e) => {
      if (nav.classList.contains("is-open") && !e.target.closest(".site-header")) setOpen(false);
    });
    matchMedia("(min-width: 860px)").addEventListener("change", () => setOpen(false));
  }

  // ── Phone: entry + screen slideshow ───────────
  const stage = document.querySelector("[data-phone]");
  if (stage) {
    requestAnimationFrame(() => requestAnimationFrame(() => stage.classList.add("is-in")));
    const screens = [...stage.querySelectorAll(".screen")];
    const dots = [...document.querySelectorAll("[data-go]")];
    const playBtn = document.querySelector("[data-toggle]");
    let i = 0, timer = null, userPaused = reduce, inView = true;

    const show = (n) => {
      i = (n + screens.length) % screens.length;
      screens.forEach((s, k) => { s.classList.toggle("is-active", k === i); s.setAttribute("aria-hidden", String(k !== i)); });
      dots.forEach((d, k) => d.setAttribute("aria-pressed", String(k === i)));
    };
    const stop = () => { clearInterval(timer); timer = null; };
    const run = () => {
      stop();
      if (!userPaused && inView && !document.hidden && screens.length > 1) timer = setInterval(() => show(i + 1), 6500);
    };
    const syncBtn = () => {
      if (!playBtn) return;
      playBtn.setAttribute("aria-pressed", String(userPaused));
      playBtn.querySelector(".visually-hidden").textContent = userPaused ? "Play screen slideshow" : "Pause screen slideshow";
    };

    dots.forEach((d) => d.addEventListener("click", () => { show(+d.dataset.go); userPaused = true; syncBtn(); stop(); }));
    if (playBtn && screens.length > 1) {
      playBtn.hidden = false;
      playBtn.addEventListener("click", () => { userPaused = !userPaused; syncBtn(); run(); });
      syncBtn();
    }
    document.addEventListener("visibilitychange", run);
    new IntersectionObserver(([e]) => { inView = e.isIntersecting; run(); }).observe(stage);
    // First screen stays a little longer before the sequence starts
    setTimeout(run, 1200);
  }

  // ── Hero entrance, pointer tilt, live feed ──
  const hero = document.querySelector("[data-hero]");
  if (hero) {
    requestAnimationFrame(() => requestAnimationFrame(() => hero.classList.add("is-ready")));
    document.querySelectorAll("[data-hero]").forEach((el) =>
      new IntersectionObserver(([e]) => el.classList.toggle("is-off", !e.isIntersecting)).observe(el));

    const tilt = hero.querySelector("[data-tilt]");
    if (tilt && !reduce && matchMedia("(hover: hover) and (pointer: fine)").matches) {
      let raf = 0;
      hero.addEventListener("pointermove", (e) => {
        if (raf) return;
        raf = requestAnimationFrame(() => {
          raf = 0;
          const r = hero.getBoundingClientRect();
          const x = (e.clientX - r.left) / r.width - 0.5, y = (e.clientY - r.top) / r.height - 0.5;
          tilt.style.transform = `perspective(1200px) rotateY(${(x * 12).toFixed(2)}deg) rotateX(${(-y * 8).toFixed(2)}deg)`;
        });
      });
      hero.addEventListener("pointerleave", () => { tilt.style.transform = ""; });
    }

    // Preview-only illustrative feed: a new job slides in at the top every few seconds (FLIP for the rest)
    const feed = hero.querySelector("[data-feed]");
    if (feed && !reduce) {
      const pool = [["Dog walking", "Pets", "#2F9E8F"], ["Car wash", "Home", "#1C7ED6"], ["Ironing help", "Home", "#C2255C"], ["Leaflet drop", "Events", "#E8590C"], ["Furniture move", "Home", "#5F3DC4"], ["Bin cleaning", "Home", "#2B8A3E"]];
      const ease = "cubic-bezier(0.23, 1, 0.32, 1)";
      let k = 0;
      setInterval(() => {
        if (document.hidden || hero.classList.contains("is-off") || !feed.closest(".screen.is-active")) return;
        const cards = [...feed.children];
        const tops = cards.map((c) => c.getBoundingClientRect().top);
        const [title, cat, col] = pool[k++ % pool.length];
        const el = cards[0].cloneNode(true);
        el.classList.add("is-new");
        el.querySelector(".mock-ico").style.background = col;
        el.querySelector("b").textContent = title;
        el.querySelector("i").textContent = cat + " · Just now";
        el.querySelector(".mock-new")?.remove();
        const pill = document.createElement("span"); pill.className = "mock-new"; pill.textContent = "New";
        el.insertBefore(pill, el.querySelector(".mock-chev"));
        cards.forEach((c) => { c.classList.remove("is-new"); c.querySelector(".mock-new")?.remove(); });
        feed.prepend(el);
        cards.forEach((c, i) => {
          const dy = tops[i] - c.getBoundingClientRect().top;
          if (dy) c.animate([{ transform: `translateY(${dy}px)` }, { transform: "none" }], { duration: 550, easing: ease });
        });
        const last = feed.lastElementChild;
        if (feed.children.length > 6) last.animate([{ opacity: 1 }, { opacity: 0 }], { duration: 250, easing: "ease-out" }).onfinish = () => last.remove();
      }, 2600);
    }
  }

  // ── Highlights carousel: buttons step one card, progress follows scroll ──
  document.querySelectorAll("[data-carousel]").forEach((root) => {
    const track = root.querySelector(".hl-track");
    const prev = root.querySelector("[data-prev]"), next = root.querySelector("[data-next]");
    const bar = root.querySelector(".hl-progress span");
    const step = () => track.firstElementChild.getBoundingClientRect().width + parseFloat(getComputedStyle(track).columnGap || 16);
    const sync = () => {
      const max = track.scrollWidth - track.clientWidth;
      prev.disabled = track.scrollLeft <= 2;
      next.disabled = track.scrollLeft >= max - 2;
      const visible = track.clientWidth / track.scrollWidth;
      bar.style.setProperty("--p", max > 0 ? (visible + (1 - visible) * (track.scrollLeft / max)).toFixed(3) : 1);
    };
    const go = (dir) => track.scrollBy({ left: dir * step(), behavior: reduce ? "auto" : "smooth" });
    prev.addEventListener("click", () => go(-1));
    next.addEventListener("click", () => go(1));
    track.addEventListener("scroll", () => requestAnimationFrame(sync), { passive: true });
    addEventListener("resize", sync);
    sync();
  });

  // ── Gentle reveals ────────────────────────────
  const reveals = document.querySelectorAll(".reveal");
  if (!reduce && "IntersectionObserver" in window) {
    const io = new IntersectionObserver((entries) => entries.forEach((e) => {
      if (e.isIntersecting) { e.target.classList.add("is-visible"); io.unobserve(e.target); }
    }), { rootMargin: "0px 0px -8% 0px" });
    reveals.forEach((el) => io.observe(el));
  } else reveals.forEach((el) => el.classList.add("is-visible"));

  // ── Contact form ──────────────────────────────
  const form = document.querySelector("[data-form]");
  if (form) {
    const status = form.querySelector(".form-status");
    const btn = form.querySelector("button[type=submit]");
    const rules = {
      name: (v) => v.trim() ? "" : "Enter your name.",
      email: (v) => !v.trim() ? "Enter your email address." : /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim()) ? "" : "Enter an email address like name@example.com.",
      message: (v) => v.trim().length >= 10 ? "" : "Enter a message of at least 10 characters.",
    };
    const check = (field) => {
      const msg = rules[field.name](field.value);
      const err = document.getElementById(field.id + "-err");
      field.setAttribute("aria-invalid", String(Boolean(msg)));
      if (msg) field.setAttribute("aria-describedby", err.id); else field.removeAttribute("aria-describedby");
      err.textContent = msg; err.hidden = !msg;
      return !msg;
    };
    const fields = [...form.querySelectorAll("input[name=name], input[name=email], textarea[name=message]")];
    fields.forEach((f) => f.addEventListener("blur", () => { if (f.value) check(f); }));

    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      status.className = "form-status"; status.textContent = "";
      const bad = fields.filter((f) => !check(f));
      if (bad.length) { bad[0].focus(); status.classList.add("err"); status.textContent = "Please fix the highlighted fields."; return; }
      if (form.hasAttribute("data-disabled")) { status.classList.add("err"); status.textContent = "Preview only: the form isn't connected yet. Please use the email address above."; return; }
      btn.disabled = true; btn.textContent = "Sending…";
      try {
        const res = await fetch(form.action, { method: "POST", body: new FormData(form), headers: { Accept: "application/json" } });
        if (!res.ok) throw new Error(res.status);
        form.reset();
        status.classList.add("ok"); status.textContent = "Thanks — your message has been sent. We'll reply by email.";
      } catch {
        status.classList.add("err"); status.textContent = "Sorry, your message couldn't be sent. Please email us directly instead.";
      } finally {
        btn.disabled = false; btn.textContent = "Send message";
      }
    });
  }
})();
