---
layout: page.njk
pageClass: support
permalink: /support/
title: "DEL-BOY® Support | Help, FAQs and contact"
description: "Get help with the DEL-BOY® app. Answers to common questions and how to contact the DEL-BOY® team."
heading: "DEL-BOY® Support"
intro: "Questions about downloading the app, your account or a job? We're here to help."

# FAQs — grouped. Add, remove or edit questions here. Answers can use **bold** and [links](/privacy/).
faqGroups:
  - title: "Getting started"
    items:
      - q: "How do I download DEL-BOY® on iPhone?"
        a: "DEL-BOY® is launching on the App Store soon. When it's live, use the App Store badge on our homepage or search for DEL-BOY® in the App Store on your iPhone."
      - q: "Is DEL-BOY® available on Android?"
        a: "Android is coming soon."
      - q: "Who is DEL-BOY® for?"
        a: "People looking for quick jobs, and people who need someone for a job."
  - title: "Your account"
    items:
      - q: "I can't sign in. What should I do?"
        a: "Check you're using the same details you signed up with. If you're still stuck, email us from the address linked to your account and we'll help."
      - q: "How do I delete my account?"
        a: "Email us from the address linked to your account and ask for it to be deleted. See our [Privacy notice](/privacy/) for what happens to your data."
  - title: "Jobs"
    items:
      - q: "Can I use DEL-BOY® to post a job?"
        a: "Yes. DEL-BOY® is for people who need someone for a job as well as people looking for work."
      - q: "Where do I see a job's details?"
        a: "Tap any job in the app to open its details."
  - title: "Technical issues"
    items:
      - q: "The app isn't working properly."
        a: "Make sure you have the latest version of DEL-BOY® and of iOS, then close and reopen the app. If the problem continues, email us with your iPhone model, iOS version and a short description of what happened."
---

<section aria-labelledby="contact-title" class="contact-card">
  <h2 id="contact-title">Contact us</h2>
  <p>Email <a class="email-link" href="mailto:{{ site.supportEmail }}">{{ site.supportEmail }}</a> and the DEL-BOY® team will get back to you.</p>
  <p class="hint">Please don't include passwords or payment card details in your message.</p>

  {% if site.form.action or build.preview %}
  {% if not site.form.action %}<p class="draft-note">Preview only — the form isn't connected to a form provider yet, so it won't send. The email address above works.</p>{% endif %}
  <form class="contact-form" action="{{ site.form.action or '#' }}" method="post" novalidate data-form {% if not site.form.action %}data-disabled{% endif %}>
    <div class="field">
      <label for="cf-name">Your name</label>
      <input id="cf-name" name="name" type="text" autocomplete="name" required maxlength="100">
      <p class="field-error" id="cf-name-err" hidden></p>
    </div>
    <div class="field">
      <label for="cf-email">Email address</label>
      <input id="cf-email" name="email" type="email" autocomplete="email" required maxlength="200">
      <p class="field-error" id="cf-email-err" hidden></p>
    </div>
    <div class="field">
      <label for="cf-message">Message</label>
      <textarea id="cf-message" name="message" rows="5" required maxlength="3000"></textarea>
      <p class="field-error" id="cf-message-err" hidden></p>
    </div>
    <input type="text" name="_gotcha" tabindex="-1" autocomplete="off" class="hp" aria-hidden="true">
    <p class="hint">We use your details only to reply to you. See our <a href="/privacy/">Privacy notice</a>.</p>
    <button class="btn" type="submit">Send message</button>
    <p class="form-status" role="status" aria-live="polite"></p>
  </form>
  {% endif %}
</section>

<h2>Business enquiries</h2>
<p>For partnerships, press or business enquiries, email <a href="mailto:{{ site.businessEmail }}">{{ site.businessEmail }}</a>.</p>

<h2>Frequently asked questions</h2>
{% for g in faqGroups %}
<h3>{{ g.title }}</h3>
<div class="faq-list">
{% for f in g.items %}
<details class="faq">
  <summary>{{ f.q }}</summary>
  <div class="faq-a"><p>{{ f.a | mdi | safe }}</p></div>
</details>
{% endfor %}
</div>
{% endfor %}

<h2>Company details</h2>
<p>{% if site.company.verified %}DEL-BOY® is operated by {{ site.company.name }}, company number {{ site.company.number }}, {{ site.company.jurisdiction | lower }}. Registered office: {{ site.company.address }}.{% else %}See the footer of this page.{% endif %}</p>
<p><a href="/privacy/">Privacy notice</a> · <a href="/terms/">Terms of use</a></p>
