---
layout: page.njk
pageClass: legal
permalink: /privacy/
title: "Privacy and cookies | DEL-BOY®"
description: "How DEL-BOY® handles personal data on this website and in the DEL-BOY® iPhone app, and how we use cookies."
heading: "Privacy notice"
---

{% if site.legal.privacyApproved %}
<p class="meta">Last updated: {{ site.legal.privacyUpdated }}</p>

<!-- PASTE THE APPROVED PRIVACY WORDING BELOW THIS LINE, then set legal.privacyApproved to true in src/_data/site.json -->

{% elif build.preview %}
<div class="draft-note"><strong>Draft structure for review — not legal advice and not for publication.</strong> Each section needs approved wording from the client or their legal adviser. Items in [brackets] need confirming.</div>

## Who we are
DEL-BOY® is operated by [{{ site.company.name }}, company number {{ site.company.number }}, {{ site.company.address }}]. We are the controller of the personal data described here. Contact: [{{ site.supportEmail }}]. [Data Protection Officer or ICO registration number, if applicable.]

## This website
- **Hosting:** the site is hosted on Cloudflare Pages. Cloudflare processes technical data such as IP address and browser information to deliver and protect the site. [Retention, lawful basis — legitimate interests.]
- **Contact form:** if you use the form we receive your name, email address and message through [form provider]. We use this only to reply. [Retention period. Lawful basis. Provider location / international transfers.]
- **Email:** if you email us we keep the correspondence to deal with your request. [Retention.]
- **Analytics:** none at launch.

## The DEL-BOY® app
[To be completed from the current app build:]
- Account data collected at sign-up [fields]
- Job posts and job details you create
- Location data [whether collected, precise or approximate, when, and the iOS permission prompt]
- Other device permissions [camera, photos, notifications]
- Messages, payments or identity checks [only if the app offers them]
- Service providers [hosting, authentication, crash reporting, push notifications]
- Purposes and lawful bases for each
- Retention periods
- International transfers and safeguards
- How to delete your account [in-app route required by Apple]

## Your rights
Under UK data protection law you have rights to access, correct, delete, restrict or object to the use of your personal data, and to data portability. To use these rights email [{{ site.supportEmail }}]. You can also complain to the Information Commissioner's Office (ico.org.uk).

## Changes to this notice
[How changes are notified.] Last updated: [date].

{% else %}
<p>Our full privacy notice is being finalised and will be published here before the DEL-BOY® app launches. If you have a question about your personal data now, email <a href="mailto:{{ site.supportEmail }}">{{ site.supportEmail }}</a>.</p>
{% endif %}

<h2 id="cookies" tabindex="-1">Cookies</h2>

This website does not use advertising cookies, analytics or tracking. We do not set any cookies of our own, so there is no cookie banner.

Our hosting provider, Cloudflare, may set strictly necessary security cookies to protect the site from abuse. These do not track you across other websites. {% if site.form.action %}When you send the contact form, our form provider ({{ site.form.provider }}) may also set strictly necessary cookies to process your message and prevent spam.{% endif %}

If we ever add optional cookies, we will ask for your permission first and update this section.
