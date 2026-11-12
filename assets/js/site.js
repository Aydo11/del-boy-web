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
      if (!userPaused && inView && !document.hidden && screens.length > 1) timer = setInterval(() => show(i + 1), 4200);
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
