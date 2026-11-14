---
layout: page.njk
pageClass: legal
permalink: /privacy/
templateEngineOverride: njk
title: "Privacy Notice & DBS Policy | DEL-BOY®"
description: "How GAME-BOY TECHNOLOGY LTD handles personal data across the DEL-BOY® websites and app, our cookies, and our DBS data policy."
heading: "Privacy notice"
---
{#- Approved wording supplied by the client, 14 November 2026. Edit the text between the tags; keep the tags as they are. -#}
<p class="meta"><strong>Last updated:</strong> {{ site.legal.privacyUpdated }} · Applies to www.del-boy.com, www.del-boy.co.uk and the DEL-BOY® mobile app</p>
<nav class="doc-jump" aria-label="On this page"><a href="#privacy-notice">Privacy notice</a><a href="#cookies">Cookies</a><a href="#dbs-policy">DBS policy</a></nav>

<article id="privacy-notice">
<h2>1. The short version</h2>
<p>When you use <strong>DEL-BOY®</strong>, you trust us with your personal data. We take that seriously — no faff, no hidden agendas, and no selling your details to third parties.</p>
<p>This Privacy Notice explains how <strong>{{ site.company.name }}</strong> (registered in England &amp; Wales, company number {{ site.company.number }}) collects, uses, shares and protects your information across our websites (www.del-boy.com and www.del-boy.co.uk) and the DEL-BOY mobile app.</p>
<p>We operate in strict compliance with the <strong>UK General Data Protection Regulation (UK GDPR)</strong> and the <strong>Data Protection Act 2018</strong>, and we are registered with the Information Commissioner’s Office (ICO).</p>
<div class="info-card"><ul>
<li><strong>Data controller:</strong> {{ site.company.name }}</li>
<li><strong>Registered office / correspondence address:</strong> {{ site.company.address }}</li>
<li><strong>ICO registration reference:</strong> {{ site.company.ico }}</li>
<li><strong>Data protection contact:</strong> <a href="mailto:{{ site.supportEmail }}">{{ site.supportEmail }}</a></li>
</ul></div>

<h2>2. Who this notice applies to</h2>
<p>This notice covers everyone using the DEL-BOY ecosystem across the UK:</p>
<ul>
<li><strong>DEL-MAN:</strong> independent shops, hospitality venues and commercial businesses dispatching goods or booking shifts.</li>
<li><strong>DEL-BOY:</strong> self-employed delivery partners, couriers and shift drivers fulfilling drops via the app.</li>
<li><strong>Recipients &amp; end customers:</strong> individuals receiving deliveries dispatched by our DEL-MAN partners.</li>
<li><strong>Website visitors:</strong> anyone browsing www.del-boy.com or www.del-boy.co.uk.</li>
</ul>

<h2>3. What personal data we collect</h2>
<p>Just like major on-demand logistics platforms, we need specific information to match jobs, route drivers, verify compliance, protect courier safety and process instant payouts fairly.</p>
<h3>A. Information you give us directly</h3>
<ul>
<li><strong>Account &amp; profile details:</strong> full name, email address, UK mobile number, business name, company registration number, and residential or commercial postcodes.</li>
<li><strong>Identity &amp; vetting documents (DEL-BOY partners):</strong>
<ul>
<li><strong>Photo ID:</strong> government-issued photographic identification (e.g. passport or driving licence) uploaded for manual verification.</li>
<li><strong>Right to work:</strong> GOV.UK online share codes and immigration/work status checks in compliance with UK Right to Work rules for online matching services.</li>
<li><strong>DVLA driving licence &amp; vehicle checks:</strong> GOV.UK driving licence share codes, vehicle registration numbers (VRM), vehicle make/model/fuel type, and automated DVLA vehicle tax and MOT status checks.</li>
<li><strong>DBS certificates (criminal record data):</strong> Basic Disclosure and Barring Service (DBS) certificate uploads reviewed manually where required for specific commercial or vulnerable-recipient shifts. <em>(Criminal offence/DBS data is governed under Article 10 UK GDPR and our <a href="#dbs-policy">Appropriate Policy Document</a> below.)</em></li>
<li><strong>Insurance &amp; tax compliance:</strong> hire &amp; reward / commercial vehicle insurance certificates and sole-trader / National Insurance tax status declarations.</li>
</ul></li>
<li><strong>Banking &amp; payout details (processed via Stripe):</strong> UK sort codes, account numbers, payment card details, and VAT or sole-trader billing details. <em>(Full card numbers and sensitive banking credentials are collected and tokenised directly by <strong>Stripe</strong> — we do not store full payment card numbers on our own servers.)</em></li>
<li><strong>Support, ratings &amp; communications:</strong> star ratings, job feedback, safety check-in responses, messages, call logs, and records when you get in touch with our UK support team.</li>
</ul>
<h3>B. Information collected automatically when you use DEL-BOY</h3>
<ul>
<li><strong>Live geolocation, speed &amp; dwell-time telemetry:</strong> when a DEL-BOY partner is online and active on a shift or drop, the app collects real-time GPS coordinates, velocity (speed), acceleration curves and route progress. We use this to:
<ul>
<li>match nearby jobs and calculate accurate delivery ETAs;</li>
<li>compare estimated travel times against actual delivery times;</li>
<li>detect unexpected prolonged stops (“dwell time”) during an active drop so the app can trigger an automated welfare prompt checking that you are safe and okay.</li>
</ul></li>
<li><strong>Bluetooth &amp; vehicle-mode connection signals:</strong> during active shifts, the app checks device connection states (such as active Bluetooth connections to in-car audio systems or vehicle kits) alongside live speed profiles. This helps verify that DEL-BOY partners registered on bicycle accounts are not using uninsured motor vehicles — keeping the platform fair, safe and road-legal. <em>(We do not record or store your personal Bluetooth device names or contacts.)</em></li>
<li><strong>Transaction &amp; shift history:</strong> logs of accepted jobs, pickup/drop-off timestamps, DEL-MAN fees, DEL-BOY earnings, Stripe transfer IDs and instant payout records.</li>
<li><strong>Device &amp; technical diagnostics:</strong> IP address, device model, operating system, app version and crash diagnostics to keep the platform running smoothly.</li>
</ul>
<h3>C. Information from official registries &amp; third-party partners</h3>
<ul>
<li><strong>GOV.UK, DVLA &amp; Companies House lookups:</strong> official verification outputs confirming driving licence entitlements, vehicle tax/MOT status (e.g. taxed vs. SORN), Right to Work status via GOV.UK share codes, and UK company registration details.</li>
<li><strong>Payment &amp; payout confirmations (Stripe):</strong> confirmation of settled DEL-MAN charges, instant DEL-BOY payouts, and identity/KYC verification checks required by Stripe for financial compliance.</li>
</ul>

<h2>4. How &amp; why we use your data (lawful bases)</h2>
<p>Under UK data protection law, we must have a valid legal reason (“lawful basis”) every time we process your data.</p>
<div class="table-wrap"><table>
<thead><tr><th scope="col">What we do</th><th scope="col">Data involved</th><th scope="col">UK GDPR lawful basis</th></tr></thead>
<tbody>
<tr><td><strong>Create &amp; manage your DEL-MAN or DEL-BOY account</strong></td><td>Account, profile &amp; company data</td><td>Performance of a contract</td></tr>
<tr><td><strong>Verify photo ID, right to work, DVLA licence, tax/MOT &amp; hire &amp; reward insurance</strong></td><td>Vetting documents, GOV.UK share codes &amp; DVLA vehicle data</td><td>Legal obligation / legitimate interests (road safety &amp; compliance)</td></tr>
<tr><td><strong>Review DBS certificates for eligible commercial/sensitive shifts</strong></td><td>DBS certificate uploads</td><td>Substantial public interest / legal &amp; regulatory compliance (DPA 2018 Schedule 1)</td></tr>
<tr><td><strong>Match DEL-MAN orders with nearby DEL-BOY partners &amp; track live drops</strong></td><td>Geolocation, account, ratings &amp; shift data</td><td>Performance of a contract</td></tr>
<tr><td><strong>Trigger automated safety check-ins during prolonged stops</strong></td><td>Geolocation, speed &amp; dwell-time data</td><td>Vital interests / legitimate interests (courier safety)</td></tr>
<tr><td><strong>Verify transport mode (bicycle vs. motor vehicle) &amp; prevent uninsured driving</strong></td><td>Bluetooth connection signals, speed &amp; vehicle data</td><td>Legitimate interests / legal obligation</td></tr>
<tr><td><strong>Process DEL-MAN billing &amp; instant DEL-BOY payouts via Stripe</strong></td><td>Banking, transaction &amp; account data</td><td>Performance of a contract / legal obligation</td></tr>
<tr><td><strong>Prevent payment fraud, money laundering &amp; account sharing</strong></td><td>Technical, identity &amp; Stripe transaction data</td><td>Legal obligation / legitimate interests</td></tr>
<tr><td><strong>Comply with HMRC tax reporting &amp; statutory audits</strong></td><td>Transaction, banking &amp; identity data</td><td>Legal obligation</td></tr>
<tr><td><strong>Resolve delivery disputes &amp; provide customer support</strong></td><td>Communications, geolocation &amp; shift data</td><td>Performance of a contract / legitimate interests</td></tr>
</tbody>
</table></div>

<h2 id="cookies" tabindex="-1">5. Cookies &amp; website tracking</h2>
<p>Unlike most tech platforms that follow you around the internet, we keep things refreshingly straightforward across both www.del-boy.com and www.del-boy.co.uk:</p>
<ul>
<li><strong>Zero tracking or ad cookies:</strong> our websites do not use advertising cookies, behavioural analytics or cross-site trackers. Because we do not set any cookies of our own, we don’t bother you with a cookie pop-up banner.</li>
<li><strong>Essential security cookies:</strong> our hosting and network providers (<strong>Cloudflare</strong> and <strong>Netlify</strong>) may place strictly necessary security cookies to shield our websites from bots and malicious attacks. These never track you across other websites.</li>
<li><strong>Future updates:</strong> if we ever introduce optional cookies, we will ask for your clear permission first and update this notice before anything changes.</li>
</ul>

<h2>6. Who we share your data with</h2>
<p>We never sell, rent or trade your personal data. We only share what is strictly necessary to keep deliveries moving, couriers safe and payments flowing:</p>
<ul>
<li><strong>Stripe (payment &amp; payout processing):</strong> we use <strong>Stripe Payments UK, Ltd.</strong> to process DEL-MAN charges, manage Stripe Connect accounts for DEL-BOY partners, run anti-fraud/AML checks and execute instant DEL-BOY payouts. Your payment data is governed by Stripe’s own Privacy Policy (<a href="https://stripe.com/gb/privacy" rel="noopener">stripe.com/gb/privacy</a>).</li>
<li><strong>Between DEL-MAN, DEL-BOY &amp; recipients:</strong> when a job is accepted, the DEL-MAN venue and recipient see the assigned DEL-BOY partner’s name, verified badge status, rating, live map location and contact relay details; the DEL-BOY partner sees the pickup/drop-off addresses and delivery notes.</li>
<li><strong>Emergency contacts or UK emergency services:</strong> if a prolonged stop triggers a safety alert that goes unanswered and indicates a potential medical emergency or road traffic collision, we may share live geolocation data with emergency services.</li>
<li><strong>Official UK verification sources:</strong> GOV.UK (Right to Work and DVLA driver/vehicle status checks) and Companies House (business verification).</li>
<li><strong>Core cloud &amp; mapping infrastructure:</strong> secure cloud hosting (including <strong>Cloudflare</strong> and <strong>Netlify</strong>) and real-time navigation/mapping APIs.</li>
<li><strong>UK authorities &amp; law enforcement:</strong> HMRC, the Home Office, the police, courts or regulators where we are legally required to disclose information.</li>
</ul>

<h2>7. Automated decision-making &amp; dispatch</h2>
<p>To keep wait times low and earnings fair, DEL-BOY uses automated systems to match jobs, run initial DVLA vehicle tax/MOT status checks, screen payment risks alongside Stripe, and flag operational anomalies (such as unusual route delays or speed/Bluetooth mismatches indicating vehicle misuse).</p>
<ul>
<li><strong>Human review &amp; no automated permanent bans:</strong> photo ID, DBS certificates and hire &amp; reward insurance documents are reviewed manually by our compliance team. Automated flags never result in an automatic permanent account deactivation — any compliance review is assessed by a human team member, and you always have the right to request a human review or appeal any decision.</li>
</ul>

<h2>8. How long we keep your data</h2>
<p>We don’t hoard data forever. We retain records only as long as needed:</p>
<ul>
<li><strong>Active accounts &amp; vetting records:</strong> kept for as long as your DEL-MAN or DEL-BOY account remains active. Right to Work audit records are retained for <strong>2 years</strong> after your engagement ends, in line with UK Home Office requirements.</li>
<li><strong>DBS certificate records:</strong> once manually verified, we record the verification outcome and date and permanently delete uploaded DBS certificate images within <strong>6 months</strong> (and typically within 30 days), in line with the DBS Code of Practice.</li>
<li><strong>Financial, Stripe, VAT &amp; HMRC records:</strong> kept for <strong>6 years</strong> from the end of the relevant financial year, as required under UK company and tax law.</li>
<li><strong>Live GPS, speed &amp; Bluetooth telemetry:</strong> high-precision route, speed and connection telemetry is anonymised or purged shortly after a drop is settled, unless needed to investigate a safety incident, insurance claim or compliance breach.</li>
</ul>

<h2>9. Security &amp; international data transfers</h2>
<p>We protect your data using industry-standard encryption (in transit and at rest), PCI-DSS compliant payment handling via Stripe, strict access controls for sensitive vetting documents, and secure authentication. Your data is primarily stored and processed within the UK and the European Economic Area (EEA). Where a trusted infrastructure or payment partner (such as Stripe) transfers data internationally, we ensure legally approved safeguards — such as the <strong>UK International Data Transfer Agreement (IDTA)</strong> or UK-US Data Bridge adequacy rules — are in place.</p>

<h2>10. Your UK privacy rights</h2>
<p>Under UK GDPR, you are in the driving seat regarding your personal data. You have the right to:</p>
<ol>
<li><strong>Access your data:</strong> ask for a copy of the personal data we hold about you (a Subject Access Request).</li>
<li><strong>Correct mistakes:</strong> ask us to fix inaccurate or incomplete details.</li>
<li><strong>Request erasure (“right to be forgotten”):</strong> ask us to delete your data where there is no legal reason for us to keep it.</li>
<li><strong>Restrict or object to processing:</strong> tell us to pause or stop using your data where we rely on legitimate interests.</li>
<li><strong>Data portability:</strong> request your data in a machine-readable format to move elsewhere.</li>
</ol>
<p>To exercise any of these rights, email <a href="mailto:{{ site.supportEmail }}">{{ site.supportEmail }}</a> or write to <strong>{{ site.company.name }}, {{ site.company.address }}</strong>. We will respond within <strong>one calendar month</strong>.</p>

<h2>11. Questions &amp; complaints</h2>
<p>Got a question about how your data is handled? Contact our team first at <a href="mailto:{{ site.supportEmail }}">{{ site.supportEmail }}</a> and we will do our best to sort it promptly.</p>
<p>If you remain unhappy with our response, you have the right to complain to the UK’s independent data protection regulator, the <strong>Information Commissioner’s Office (ICO)</strong>, where we are registered under reference <strong>{{ site.company.ico }}</strong>:</p>
<div class="info-card"><ul>
<li><strong>Website:</strong> <a href="https://ico.org.uk" rel="noopener">ico.org.uk</a></li>
<li><strong>Helpline:</strong> 0303 123 1113</li>
<li><strong>Address:</strong> Wycliffe House, Water Lane, Wilmslow, Cheshire, SK9 5AF</li>
</ul></div>
</article>

<hr class="policy-divider">

<article id="dbs-policy" tabindex="-1">
<p class="eyebrow">DPA 2018 Schedule 1 compliance</p>
<h2 class="policy-title">Appropriate Policy Document: criminal offence &amp; DBS data</h2>
<p class="meta"><strong>Effective date:</strong> 14 November 2026 · <strong>Review date:</strong> 14 November 2027 · <strong>ICO ref:</strong> {{ site.company.ico }}</p>

<h3>1. Purpose of this policy</h3>
<p>Under <strong>Article 10 of the UK General Data Protection Regulation (UK GDPR)</strong> and <strong>Schedule 1, Part 4 of the Data Protection Act 2018 (DPA 2018)</strong>, organisations that process criminal conviction and offence data (including Disclosure and Barring Service [DBS] certificates) must maintain an <strong>Appropriate Policy Document (APD)</strong>.</p>
<p>This policy sets out how <strong>{{ site.company.name }}</strong> lawfully, securely and fairly processes DBS certificates submitted by independent contractors (<strong>DEL-BOY</strong> partners) during onboarding and compliance checks on the DEL-BOY platform.</p>

<h3>2. Scope &amp; what data we process</h3>
<ul>
<li><strong>Who it applies to:</strong> independent contractors (DEL-BOY delivery partners, couriers and shift workers) opting into or completing deliveries and shifts that require verified background screening.</li>
<li><strong>Data collected:</strong>
<ul>
<li>uploaded photographic/scanned images of Basic DBS certificates (and, where legally applicable for specific regulated contracts, Standard/Enhanced certificates);</li>
<li>certificate issue date, certificate reference number, applicant full name, and verification status (APPROVED, NOT STARTED or REJECTED).</li>
</ul></li>
<li><strong>How it is collected:</strong> submitted voluntarily by the DEL-BOY partner via the encrypted verification module inside the DEL-BOY mobile app.</li>
</ul>

<h3>3. Lawful basis &amp; Schedule 1 conditions for processing</h3>
<p>We only process DBS certificate data where we have both a valid <strong>Article 6 lawful basis</strong> and a specific <strong>Schedule 1 DPA 2018 condition</strong>.</p>
<h4>A. Article 6 lawful bases (UK GDPR)</h4>
<ul>
<li><strong>Article 6(1)(f) — legitimate interests:</strong> ensuring the safety, trust and security of DEL-MAN venues, commercial clients and end recipients — particularly for high-value consignments, sensitive deliveries (such as pharmacies, care facilities or age-restricted goods) and on-site hospitality shifts.</li>
<li><strong>Article 6(1)(b) — performance of a contract:</strong> fulfilling contractual vetting requirements requested by specific DEL-MAN partners before dispatching a contractor to their premises.</li>
</ul>
<h4>B. Schedule 1 conditions (Data Protection Act 2018)</h4>
<ul>
<li><strong>Schedule 1, Part 2, Paragraph 10 — preventing or detecting unlawful acts:</strong> screening against relevant unspent convictions (such as theft, fraud or violent offences) to protect merchants, customers and goods in transit.</li>
<li><strong>Schedule 1, Part 2, Paragraph 18 — safeguarding of children and individuals at risk:</strong> verifying suitability where deliveries or shifts involve hospitals, care homes, schools or vulnerable recipients.</li>
</ul>

<h3>4. Procedures for securing compliance with UK GDPR principles</h3>
<ul>
<li><strong>Lawfulness, fairness &amp; transparency:</strong> DEL-BOY partners are informed via our in-app onboarding screen and this Privacy Notice before uploading a DBS certificate. All uploaded DBS certificates are <strong>reviewed manually</strong> by trained compliance personnel — we never use automated algorithms to reject a contractor based on a DBS upload. We comply strictly with the <strong>Rehabilitation of Offenders Act 1974</strong> and disregard spent convictions.</li>
<li><strong>Purpose limitation:</strong> DBS data is used strictly to verify contractor suitability and award verified profile status on the DEL-BOY platform. It is never used for marketing or profiling, or shared with unauthorised third parties.</li>
<li><strong>Data minimisation:</strong> we only request a DBS check where relevant to platform safety or specific DEL-MAN requirements. DEL-MAN venues and end recipients <strong>never</strong> see the contents of a contractor’s DBS certificate — they only see whether a contractor holds verified platform status.</li>
<li><strong>Accuracy:</strong> contractors submit their own official certificates directly via the app. If a contractor obtains an updated DBS certificate or believes a verification decision was made in error, they can request a manual re-review via <a href="mailto:{{ site.supportEmail }}">{{ site.supportEmail }}</a>.</li>
<li><strong>Storage limitation (retention &amp; deletion):</strong> in line with the <strong>DBS Code of Practice</strong>, uploaded certificate photos/scans are permanently deleted from our encrypted storage <strong>within 6 months</strong> of manual verification (and typically within 30 days once verified). After deletion, we keep only a minimal compliance audit record showing the date verified, check type and outcome.</li>
<li><strong>Integrity &amp; confidentiality (security):</strong> all DBS uploads are encrypted in transit (TLS 1.3) and at rest (AES-256). Access to the manual review queue is restricted by role-based access control (RBAC) and multi-factor authentication (MFA) to authorised compliance officers only.</li>
</ul>

<h3>5. Policy governance &amp; review</h3>
<div class="info-card"><ul>
<li><strong>Policy owner:</strong> Mr Kamruz Zaman, Chief Executive Officer, {{ site.company.name }}</li>
<li><strong>Review cycle:</strong> this Appropriate Policy Document is reviewed annually and retained for the duration of our processing of criminal offence data plus <strong>6 months</strong> after such processing ceases, as required under <strong>Schedule 1, Part 4, Paragraph 41 of the Data Protection Act 2018</strong>.</li>
</ul></div>
</article>
