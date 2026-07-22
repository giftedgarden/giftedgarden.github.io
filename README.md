# Gifted Garden website

A warm, mobile-first enrollment funnel for Gifted Garden in Lomita Village, San Diego. This owner-review version is privately published and ready to test, but is intentionally hidden from search engines.

## Current status

- Responsive single-page enrollment journey
- Clear Tour, Waitlist, and Question paths
- Native keyboard-accessible FAQ
- Curated, web-optimized photographs of real Gifted Garden program moments
- Draft privacy notice and separate marketing consent
- Search-friendly title and description
- Search indexing disabled while facts and workflows remain unverified
- Tour, waitlist, and question forms prepare structured emails in the visitor’s own email app
- No third-party form processor receives the form details; nothing is sent until the visitor presses Send
- Verified operating facts are tracked in `PROJECT_BRIEF.md`

## Review before public launch

The Product Owner must verify and document:

1. Legal program type, business name/DBA, license status, and publishable license number
2. Ages served, potty-learning policy, capacity, and any current openings
3. Provider CPR/first-aid status, background-check details, and additional training
4. Days, hours, schedules, holidays, and closures
5. Tuition approach, included services, and all routine fees
6. Meals, allergies, rest, illness, and family-supplied items
7. Tour expectations, waitlist rules, response times, and exact-location process
8. Military fee-assistance and subsidy participation
9. Authorized texting, calling hours, voicemail expectations, response time, and existing-family channel
10. Long-term form, scheduling, analytics, retention, deletion, and consent workflows if the email-based approach is replaced
11. Authentic environment photographs and written permissions
12. Official Yelp, Google, social, directions, custom domain, and canonical URLs

Do not add a street address to the page, metadata, maps, image metadata, or structured data until the owner has made and documented the privacy decision.

## Update guide

Primary content is in `app/page.tsx`; site styling is in `app/globals.css`; title and social metadata are in `app/layout.tsx`.

When business facts change:

- Availability: review at least weekly whenever openings are advertised.
- Hours, tuition, fees, and policy summaries: review monthly and whenever operations change.
- FAQ: review monthly against real family questions.
- Photos and testimonials: publish only with documented permission.
- Forms: test successful, invalid, duplicate, spam, and failure paths on a recurring schedule.

Before each public release, run the project test, check keyboard access and mobile reflow, validate links and structured data, and confirm that no secrets or family submissions are present in Git history.

## Local development

```bash
npm install
npm run dev
npm test
```

The project is designed for a business-controlled GitHub repository. At least two authorized administrators, recovery methods, billing ownership, and least-privilege contractor access should be documented before launch.
