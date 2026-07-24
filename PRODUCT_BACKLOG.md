# Gifted Garden product backlog

Updated July 23, 2026 after a cross-functional Sparkle Shield Bros review and owner fact-check.

## Implementation update — July 23, 2026

Implemented without requiring new owner facts:

- Removed unverified assistance-program claims; retained only the reported active military fee-assistance pathway with careful eligibility language.
- Added the owner-confirmed licensed facility name, classification, California license number, licensed capacity, and active/good-standing statement.
- Added a direct link to the official California CDSS Facility Search while preserving the private-address policy.
- Published the Monday–Friday hours, closure calendar, tuition contact approach, and identified late/returned-payment fees.
- Published carefully qualified transportation information for negotiable school pickup and drop-off within five miles.
- Replaced the part-time language with the approved full-time first shift: Monday–Friday, 6:00 AM–4:30 PM.
- Added owner-approved language for negotiable 24-hour/weekend care and school pickup/drop-off within five miles.
- Restored a minimal waitlist request path as one of the website’s two primary conversion goals.
- Recorded the owner’s approval to publish all currently selected photographs and the decision to keep detailed policies in physical family handbooks.
- Kept the waitlist request minimal: a prepared email, no sensitive records, and clear no-guarantee wording.
- Added direct mobile navigation to Program, Cost, Provider, Safety, FAQ, and Tour.
- Added referral-source choices to inquiry emails and a privacy-conscious page-sharing tool.
- Added an automatically aging availability message, clearer age/schedule qualification language, and a visible review date.
- Strengthened the practical family guide, privacy summary, address-protection language, and accessible form status messaging.

Still blocked or only partially complete: remaining parts of GG-101, GG-103, GG-104, GG-105, GG-106, GG-108, GG-109, GG-111, GG-113, parts of GG-114, Google Business Profile/QR work in GG-116, hosted analytics in GG-118, account monitoring in GG-119, and language research in GG-120.

## Product objective

Enroll three additional children by August 31, 2026 through a trustworthy, privacy-conscious website and free local discovery channels.

## Primary audience decision

The primary audience is **a parent or guardian who lives or works near Lomita Village/92114, is comparing near-term child care for a child from birth through age five, and values dependable small-group care from an experienced, highly educated provider**.

Their core decision is: **Can I trust this provider, does the care fit my child, schedule, and budget, and what should I do next?**

High-value segments within the primary audience:

- Working families who need care within the 6:00 AM–4:30 PM window.
- Military-connected families.
- Families using child-care subsidies, alternative-payment programs, or vouchers.

Secondary audiences:

- Families planning a later start or considering a waitlist.
- Referral partners, caseworkers, military family-support staff, and community organizations.
- Families seeking before- or after-school care, once eligible ages and transportation boundaries are confirmed.

Existing families are not the primary audience for this marketing site and should receive a separate, verified communication channel.

## What the team believes is already strong

- “Where every child blooms” is memorable and emotionally appropriate.
- Location, ages, capacity, provider credentials, openings, and hours appear early.
- Authentic photographs show learning, friendship, movement, and community experiences.
- Dionne Panton’s portrait, M.S. credential, and experience provide a strong human trust signal.
- The maximum group size of six is positioned as a meaningful advantage.
- The full home address remains private until a tour is confirmed.
- Tour, call, waitlist, and question paths are clearly separated.
- The mobile action bar keeps the main conversion actions available.
- Forms minimize data, distinguish contact from marketing consent, and warn against sending sensitive records.

## Definition of done

A story is done only when its owner-provided facts are verified, its acceptance criteria pass, its content works on mobile and desktop, and no new private or sensitive family information is exposed.

## P0 — Public-launch and enrollment blockers

### GG-101 — Publish one verified program fact sheet

**User story:** As a prospective parent, I want every important program statement to be current and verified so I can trust the site and decide whether care fits.

**Acceptance criteria:**

- The owner approves the legal business name/DBA, license type and number, licensed capacity, accepted ages, operating days, hours, published full-time schedule, negotiated-care language, transportation boundary, tuition approach, routine fees, closures, and current openings.
- Openings include any age or schedule qualifications and a visible last-reviewed date.
- The same facts appear consistently in the hero, practical details, FAQ, forms, metadata, and business profiles.
- Public pages contain no “pending,” “to be confirmed,” “draft,” or conflicting claims.

**Dependencies:** Owner documents, rate sheet, schedule matrix, closure calendar, current roster/age composition.

### GG-102 — Verify each assistance-program claim

**User story:** As a family using child-care assistance, I want to see only payment pathways that Gifted Garden can currently process.

**Acceptance criteria:**

- CalWORKs, YMCA Alternative Payments, CDA, Child Care Aware of America military assistance, Crystal Stairs, and California Tribal TANF are individually verified by the owner or removed.
- Copy distinguishes Gifted Garden’s provider participation from the agency’s family eligibility, authorization, funding, and benefit decisions.
- Each verified program has an owner and verification date.
- Families are not asked to email benefit documents or sensitive eligibility information.

**Dependencies:** Current participation or approval evidence for all six programs and approved public wording.

### GG-103 — Make tour requests reliably deliverable

**User story:** As a parent, I want to know that my tour request was received without depending on an installed email application.

**Acceptance criteria:**

- An approved, secure form or scheduling service delivers requests to a monitored business-controlled inbox.
- The parent receives an on-screen acknowledgement and, when supported, a confirmation email.
- Accessible errors identify the affected field and preserve valid input.
- Ten tests across iPhone, Android, and desktop reach the monitored inbox within five minutes.
- Phone and mailto remain available as fallbacks, with clear “prepared” versus “sent” language.
- No medical, custody, financial, identity, immunization, or benefit records are collected.

**Dependencies:** Vendor decision, privacy/retention decision, monitored inbox owner and backup.

### GG-104 — Establish a response and tour workflow

**User story:** As a parent who contacts Gifted Garden, I want to know when I will hear back and what happens before a visit.

**Acceptance criteria:**

- The site publishes an achievable response window, calling hours, voicemail expectations, and authorized text policy.
- The owner receives a notification and records each lead’s status without storing unnecessary child information.
- A tour confirmation template covers date/time, duration, whether the child attends, rescheduling, cancellation, and next steps.
- The complete address and arrival instructions are shared only after the request is reviewed and the appointment is confirmed.
- Existing-family and emergency communication channels are distinct from new-family inquiries.

**Dependencies:** Owner service-level commitment, calendar workflow, tour policy, authorized text/call rules.

### GG-105 — Publish verifiable trust and safety facts

**User story:** As a parent, I want to validate the program and provider before entrusting my child to care.

**Acceptance criteria:**

- The verified licensed business name and license number are displayed where appropriate without defeating the home-address privacy policy.
- Degree and experience wording matches owner-approved records.
- CPR/first-aid, background/clearance, emergency-preparedness, supervision, authorized-release, infant-rest, illness, water-play, and outing statements appear only when documented.
- No access-control details, door codes, attendance patterns, or security-sensitive routines are disclosed.

**Dependencies:** License document, credentials, training records, current handbook, owner approval.

### GG-106 — Complete the privacy and image-permission gate

**User story:** As a family, I want to understand how inquiry data and identifiable photographs are handled.

**Acceptance criteria:**

- The final notice identifies the responsible business/contact, fields collected, purposes, recipients, email or form-provider role, retention/deletion, marketing unsubscribe, security limits, effective date, and change handling.
- Written website/marketing releases exist for every identifiable child and adult.
- Every image is stripped of location metadata and reviewed for address, access, attendance, medical, or document clues.
- Community-outing, water-play, and home/yard photographs receive explicit owner approval for public use.

**Dependencies:** Privacy contact, retention schedule, photo inventory, signed releases. Professional review may be advisable.

### GG-107 — Govern the waitlist before offering it publicly

**User story:** As a future-care parent, I want to understand what joining the waitlist means and how my information will be handled.

**Acceptance criteria:**

- The public request collects only basic contact, child age, desired start month, and schedule interest.
- The page states that a waitlist request does not reserve or guarantee a space.
- The request is prepared in the parent’s email app and is not sent until the parent presses Send.
- A named owner can follow up, retrieve, update, and remove waitlist requests consistently.

**Dependencies:** Internal waitlist follow-up and email-retention practice.

### GG-108 — Complete the public-release switch

**User story:** As a visitor, I want to see a finished official business website rather than an internal review prototype.

**Acceptance criteria:**

- GG-101 through GG-107 pass.
- The owner-review banner, prototype footer, draft labels, and internal verification notes are removed.
- The business controls the repository, domain, hosting, email, forms, analytics, and recovery methods with at least two authorized administrators.
- The stable production domain, canonical URL, sitemap, robots rules, metadata, and child-care/local-business structured data use verified facts.
- `index, follow` is enabled only after the release gate passes.
- Contact facts match the verified Google Business Profile and other official profiles exactly.

**Dependencies:** All earlier P0 stories, production-domain decision, business-profile ownership.

## P1 — Parent decision journey and conversion

### GG-109 — Publish complete tuition and schedule choices

**User story:** As a parent comparing providers, I want to understand cost and schedule fit before requesting a tour.

**Acceptance criteria:**

- The full-time first-shift schedule, negotiable 24-hour/weekend-care language, operating days, tuition contact approach, routine fees, and included services are published.
- Five representative parents can find cost and schedule information within 30 seconds.

### GG-110 — Clarify each age path

**User story:** As a parent, I want to understand how care fits my child’s developmental stage.

**Acceptance criteria:**

- Infant, toddler, and preschool sections state exact eligible ages, typical activities, feeding/rest expectations, toileting approach, school-readiness goals, supplies, and schedule availability.
- Unsupported educational or developmental claims are excluded.

### GG-111 — Clarify before- and after-school care

**User story:** As a school-age family, I want to know exactly what before- or after-school care includes.

**Acceptance criteria:**

- Eligible ages, schools or service boundaries, transportation, pickup/drop-off responsibility, schedule, and price are explicit.
- If those facts cannot be verified, the public claim and form choices are removed.

### GG-112 — Shorten the mobile decision path

**User story:** As a mobile visitor, I want to reach cost, provider, safety, program, FAQ, and tour information without scrolling through the entire page.

**Acceptance criteria:**

- Mobile navigation links directly to Program, Cost, Provider, Safety, FAQ, and Tour.
- The primary “Request a Tour” action is visible without scrolling and requires no more than one action to reach the request form.
- The fixed action bar does not obscure content at 320, 390, or 430 pixels wide.
- A representative parent can complete the tour request in under three minutes.

### GG-113 — Add authentic social proof

**User story:** As a cautious parent, I want to hear from other families before arranging a visit.

**Acceptance criteria:**

- At least three permission-backed testimonials are displayed without identifying children unnecessarily.
- Active Google/Yelp profiles are linked when available.
- No rating, award, or “top-rated” claim appears without a verifiable source and date.

### GG-114 — Publish a practical family guide

**User story:** As a busy parent, I want daily-life information in one place so I can plan realistically.

**Acceptance criteria:**

- Accessible HTML covers the sample schedule, meals/snacks, allergy approach, family-supplied items, rest, illness/return-to-care, closures, potty learning, communication, and payment basics.
- Key information is not available only as an image or PDF.
- The guide shows its last-reviewed date.

### GG-115 — Meet accessibility and mobile performance targets

**User story:** As a parent using a phone or assistive technology, I want to complete the enrollment journey independently and quickly.

**Acceptance criteria:**

- Keyboard, VoiceOver/Safari, TalkBack/Chrome, 200% zoom, 320-pixel reflow, reduced motion, forced colors, and form errors have no critical blockers.
- Hero media is appropriately sized and below-fold images remain lazy-loaded.
- Production mobile LCP is below 2.5 seconds under representative conditions.

### GG-116 — Create a local referral and discovery path

**User story:** As a nearby family or referral partner, I want to find and share Gifted Garden easily.

**Acceptance criteria:**

- A verified Google Business Profile uses privacy-safe home-business settings and consistent name, phone, hours, and website details.
- A shareable URL, QR code, and concise referral message are available.
- Referral sources use fixed options such as family/friend, Google, military, subsidy agency, community partner, and other.
- At least five approved authentic photographs appear on the business profile.

## P2 — Sustainable operations and learning

### GG-117 — Keep availability and public facts fresh

**User story:** As a parent, I want availability information to be credible whenever I visit.

**Acceptance criteria:**

- A named owner reviews availability weekly and hours, tuition, policies, and FAQ monthly.
- The availability date is visible and automatically hidden or flagged after seven days without review.
- A full program replaces the tour CTA with an accurate waitlist or future-care path.

### GG-118 — Measure the funnel without family data

**User story:** As the owner, I want to understand which paths generate qualified inquiries without exposing family information.

**Acceptance criteria:**

- Analytics record only fixed events such as Call Selected, Tour Started, Tour Submitted, Waitlist Started, and Assistance Link Selected.
- No name, email, phone, child age, free text, benefit information, or mailto body enters analytics.
- Visits, inquiries, tours, and enrollments are reviewed monthly.

### GG-119 — Monitor ownership and reliability

**User story:** As the owner, I want critical website and inquiry systems to remain available and recoverable.

**Acceptance criteria:**

- Two authorized administrators and recovery methods are documented for the repository, domain, hosting, email, forms, and analytics.
- Uptime, broken-link, and inquiry-delivery checks notify a monitored business account.
- Assistance participation is rechecked quarterly or after an agency notice.

### GG-120 — Validate language demand before expanding

**User story:** As a nearby family whose preferred language may not be English, I want to know whether I can understand and communicate with the program.

**Acceptance criteria:**

- At least ten representative families or referral partners are asked about preferred-language needs.
- If the agreed threshold is met, professionally reviewed translations cover the homepage, key policies, and tour journey.
- The site never implies that the provider speaks a language that has not been verified.

## Recommended delivery sequence

### Sprint 1 — Trust and operational truth

GG-101 through GG-107. Do not make the site public until these stories pass.

### Sprint 2 — Public release and parent decision support

GG-108 through GG-114, starting with price/schedule clarity and reliable local discovery.

### Sprint 3 — Quality, measurement, and sustainable ownership

GG-115 through GG-120.

## Remaining Product Owner questions blocking public release

Resolved July 23: licensed facility name, classification, license number, capacity, resident-child count, owner-confirmed license status, operating days and hours, closure calendar, full-time first shift, negotiable 24-hour/weekend care, tuition contact approach, three payment-fee types, five-mile transportation boundary, handbook-only policy approach, and permission to publish the selected photographs.

1. Are there registration, deposit, supply, field-trip, annual, or other fees in addition to late pickup, late payment, and returned-payment charges?
2. Which provider credentials and safety qualifications can be documented publicly?
3. Can each named assistance program be verified individually?
4. What response-time promise, calling hours, texting rules, and tour workflow can the owner sustain?
5. What internal waitlist follow-up and record-retention practice will the owner use?
6. Will the owner approve a secure hosted form later, or keep mailto as the primary workflow?
