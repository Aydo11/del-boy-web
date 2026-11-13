---
layout: page.njk
pageClass: release-notes
permalink: /release-notes/
title: "Release notes | DEL-BOY®"
description: "What's new in the DEL-BOY® app, and what's coming next."
heading: "Release notes"
intro: "What's new in DEL-BOY®, newest first."

# Add a new release at the TOP of this list. status: "installed" marks the current version.
releases:
  - version: "Pre-release"
    date: "November 2026"
    status: "installed"
    title: "Minor fixes"
    notes:
      - "Stability and performance improvements."

# Features in development. Shown as "Coming soon" — move them into a release once they ship.
roadmap:
  - title: "Roadside assistance"
    text: "Drivers on a job can request help in the app, and nearby DEL-BOY® users can step in straight away."
  - title: "Accessories"
    text: "Buy thermal delivery bags and other kit from a built-in store."
  - title: "Badges"
    text: "Earn badges that show you're verified, such as a DVLA driving licence check."
---

<div class="releases">
{% for r in releases %}
<article class="release{% if r.status == 'installed' %} is-current{% endif %}">
  <div class="release-meta">
    {% if r.status == "installed" %}<span class="release-tag">Currently installed</span>{% endif %}
    <span class="release-version">{{ r.version }}</span>
    <span class="release-date">{{ r.date }}</span>
  </div>
  <h2>{{ r.title }}</h2>
  <ul>{% for n in r.notes %}<li>{{ n }}</li>{% endfor %}</ul>
</article>
{% endfor %}
</div>

<h2 id="coming-soon">Coming soon</h2>
<div class="roadmap">
{% for f in roadmap %}
<article class="roadmap-item">
  <span class="release-tag soon">In development</span>
  <h3>{{ f.title }}</h3>
  <p>{{ f.text }}</p>
</article>
{% endfor %}
</div>
