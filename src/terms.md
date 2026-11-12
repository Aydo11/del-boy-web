---
layout: page.njk
pageClass: legal
permalink: /terms/
title: "Terms of use | DEL-BOY®"
description: "The terms that apply when you use the DEL-BOY® app and website."
heading: "Terms of use"
---

{% if site.legal.termsApproved %}
<p class="meta">Effective from: {{ site.legal.termsUpdated }}</p>

<!-- PASTE THE APPROVED TERMS BELOW THIS LINE, then set legal.termsApproved to true in src/_data/site.json -->

{% elif build.preview %}
<div class="draft-note"><strong>Draft structure for review — not legal advice and not for publication.</strong> The client or their legal adviser must supply the approved wording for each heading below.</div>

## About these terms
[Who the terms are between: {{ site.company.name }} and the user. Effective date. How to contact us.]

## Who can use DEL-BOY®
[Eligibility: minimum age, UK residency, right-to-work requirements where relevant.]

## Our role
[Whether DEL-BOY® is a platform connecting people, and what it is and is not responsible for. Whether it is a party to any job arrangement.]

## People looking for work
[Rules for workers. Status — self-employed or otherwise.]

## People posting jobs
[Rules for job posters. Prohibited jobs. Accuracy of posts.]

## Fees and payments
[Only if the app charges fees or processes payments.]

## Cancellations and disputes
[Process, if applicable.]

## Your account
[Account security, suspension and closure.]

## App Store terms (EULA)
[Confirm whether Apple's Standard Licensed Application End User License Agreement applies or a custom EULA is used, and the approved wording to reference it.]

## Liability, governing law
[Limitations of liability. Governing law: England and Wales.]

{% else %}
<p>The terms of use for DEL-BOY® are being finalised and will be published here before the app launches. Questions? Email <a href="mailto:{{ site.supportEmail }}">{{ site.supportEmail }}</a>.</p>
{% endif %}
