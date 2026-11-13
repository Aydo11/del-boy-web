---
layout: home.njk
pageClass: home
title: "DEL-BOY® | Instant Jobs. Instant Pay."
description: "The one app for hustle. Find jobs, connect with bosses and cash out instantly. Switch between worker and boss on the go."

# ───────────────────────────────────────────────────────────────
# HOMEPAGE CONTENT — edit the text between the quotes.
# See EDITING.md for help. Keep the indentation (spaces) the same.
# ───────────────────────────────────────────────────────────────

hero:
  theme: "red"          # "red" or "light"
  eyebrow: "The one app for hustle"
  headline: "Instant jobs.<br><span class=\"accent\">Instant pay.</span>"
  text: "Find jobs, connect with bosses and cash out instantly. Switch between worker and boss on the go to post jobs and make money."

# Swipeable highlight cards under the hero. icon: bolt, pound, search, plus or check.
highlights:
  title: "Why DEL-BOY®"
  items:
    - icon: bolt
      title: "Instant jobs"
      text: "Pick up local jobs the second they pop up on the live map."
    - icon: pound
      title: "Instant pay"
      text: "Finish the job, lock in your earnings and cash out straight away."
    - icon: shield
      title: "100% HMRC compliant"
      text: "Worker and employer deductions are built into the system."
    - icon: percent
      title: "Flat 10% fee"
      text: "Other platforms charge up to 30%. We're transparent on every transaction."
    - icon: home
      title: "Owned by the grafter"
      text: "Local and known in every neighbourhood. Unlike corporate entities."

# App screens shown in the animated phone and the walkthrough.
# image: path to an APPROVED screenshot in src/assets/img/screens/ (portrait, 9:19.5).
# mock:  preview-only illustration used until real screenshots arrive. Never shown in production.
screens:
  - id: map
    image: ""
    mock: map
    title: "Live map"
    caption: "Go online and watch jobs pop up near you the moment they're posted."
    alt: "DEL-BOY® live map showing jobs and people nearby"
  - id: browse
    image: ""
    mock: browse
    title: "Browse jobs"
    caption: "See every instant job in one list and pick the ones that suit you."
    alt: "DEL-BOY® app screen showing a list of available jobs"
  - id: details
    image: ""
    mock: details
    title: "Check the details"
    caption: "Open a job to read what's involved before you decide."
    alt: "DEL-BOY® app screen showing the details of one job"
  - id: post
    image: ""
    mock: post
    title: "Post a job"
    caption: "Describe what you need done and add the details."
    alt: "DEL-BOY® app screen for creating a new job post"

audiences:
  - id: find-work
    label: "For DEL-BOY"
    title: "Find work"
    text: "Open the live map, hustle nearby jobs and build your reputation with local businesses."
    screen: map
    link: "#how-it-works"
    linkText: "Here's how hustling works"
  - id: post-a-job
    label: "For DEL-MAN"
    title: "Post a job"
    text: "Get the job done faster by a local worker trusted by your neighbourhood."
    screen: post
    link: "#steps-posters"
    linkText: "How to post a job"

# Three steps for each audience. PREVIEW WORDING — replace with the exact steps from the app.
steps:
  workers:
    - title: "Browse jobs"
      text: "Open DEL-BOY® and look through the quick jobs on offer."
    - title: "Check the details"
      text: "Tap a job to see what's involved and whether it suits you."
    - title: "Take the next step"
      text: "Follow the prompts in the app to go ahead."
  posters:
    - title: "Describe the work"
      text: "Say what you need doing in a few words."
    - title: "Add the details"
      text: "Fill in the information the app asks for."
    - title: "Follow up in the app"
      text: "Keep track of your job from your account."

walkthrough:
  title: "See DEL-BOY® in action"
  text: "A quick look at the screens you'll use most."

# Short questions on the homepage. Fuller answers live on the Support page (support.md).
faqTitle: "Instant questions"
faqs:
  - q: "When will the DEL-BOY® app be available on iOS and Android?"
    a: "DEL-BOY® is launching exclusively on the App Store first, then on Google Play soon."
  - q: "What areas does DEL-BOY® currently cover?"
    a: "We're active across London, the West Midlands, Cumbria, South Wales, the North East and surrounding regional corridors, connecting local bosses directly with trusted workers."
  - q: "How do I get help with the app?"
    a: "Visit our [Support page](/support/) or email us — we're happy to help."
  - q: "Can I use DEL-BOY® to post a job?"
    a: "Yes — DEL-BOY® is for people who need someone for a job as well as people looking for work. See [how posting works](#steps-posters)."

# WhatsApp community section (link and QR come from site.json → whatsapp)
community:
  title: "Join the DEL-BOY® community"
  text: "Local bosses and workers swapping tips on how to make every job easier. Jump into the WhatsApp group."
  button: "Join the WhatsApp group"

final:
  title: "Ready when you are."
  text: "Get DEL-BOY® on your iPhone and start hustling."
---
