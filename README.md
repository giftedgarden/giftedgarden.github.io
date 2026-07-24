# Gifted Garden website

A warm, mobile-first enrollment funnel for Gifted Garden in Lomita Village, San Diego. The public journey is designed to move prospective families toward requesting a tour or joining the waitlist.

## Current status

- Responsive single-page enrollment journey
- Clear Tour, Waitlist, and Question email-preparation paths
- Native keyboard-accessible FAQ
- Curated, web-optimized photographs of real Gifted Garden program moments
- Draft privacy notice and separate marketing consent
- Search-friendly title and description
- Public search indexing enabled for the verified production release
- Owner-confirmed legal name, license number, classification, capacity, operating calendar, full-time first-shift schedule, negotiated extended/weekend care, tuition contact language, and identified payment fees
- Direct link to the official California CDSS Facility Search
- Owner-approved website photographs
- Public transportation boundary: negotiable pickup and drop-off for schools within five miles of the program location
- Detailed operating policies remain in the physical family handbook supplied to enrolled parents
- Tour and question forms prepare structured emails in the visitor’s own email app
- No third-party form processor receives the form details; nothing is sent until the visitor presses Send
- Verified operating facts are tracked in `PROJECT_BRIEF.md`

## Ongoing owner review

The Product Owner must verify and document:

1. Ages served, schedule qualifications, and current openings
2. Negotiated 24-hour, weekend, and school-transportation availability
3. Provider CPR/first-aid status, background-check details, and additional training
4. Included services and any registration, deposit, supply, field-trip, or annual fees
5. Closure list and license facts whenever operations change
6. Meals, allergies, rest, illness, and family-supplied items
7. Tour expectations, response times, and exact-location process
8. Military fee-assistance and subsidy participation
9. Authorized texting, calling hours, voicemail expectations, response time, and existing-family channel
10. Long-term form, scheduling, analytics, retention, deletion, and consent workflows if the email-based approach is replaced
11. New photographs and written permissions before they are added
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
