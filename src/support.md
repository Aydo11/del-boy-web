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
      - q: "When will the DEL-BOY® app be available on iOS and Android?"
        a: "DEL-BOY® is launching exclusively on the App Store first, then on Google Play soon."
      - q: "What areas does DEL-BOY® currently cover?"
        a: "We're active across London, the West Midlands, Cumbria, South Wales, the North East and surrounding regional corridors, connecting local bosses directly with trusted workers."
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
      - q: "Can workers be paid in cash?"
        a: "Yes, for instant delivery jobs. Businesses can hand the worker's pay over in cash at pickup, while the platform fee is paid by card in advance when the job is posted."
      - q: "Do jobs come with perks?"
        a: "Many do. Businesses can offer perks such as uniform, meals or staff accommodation, and you'll see them on the job before you apply."
  - title: "Technical issues"
    items:
      - q: "The app isn't working properly."
        a: "Make sure you have the latest version of DEL-BOY® and of iOS, then close and reopen the app. If the problem continues, email us with your iPhone model, iOS version and a short description of what happened."
---

<section aria-labelledby="contact-title" class="contact-card">
  <h2 id="contact-title">Contact us</h2>
  <p>Email <a class="email-link" href="mailto:{{ site.supportEmail }}">{{ site.supportEmail }}</a> and the DEL-BOY® team will get back to you.</p>
  {% if site.whatsapp.number %}<p>Or <a href="https://wa.me/{{ site.whatsapp.number }}" rel="noopener">message us on WhatsApp</a>.</p>{% endif %}
  {% if site.whatsapp.groupUrl %}<p>Join the conversation with local bosses and workers in our <a href="{{ site.whatsapp.groupUrl }}" rel="noopener">WhatsApp community group</a>.</p>{% endif %}
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
