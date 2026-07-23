import { EnrollmentForm } from "./EnrollmentForm";
import { ReferralTools } from "./ReferralTools";
import Image from "next/image";

const programCards = [
  {
    tag: "Birth & infant care",
    title: "A calm, responsive beginning",
    copy: "A small-group setting gives infants room for responsive care, gentle sensory discovery, connection, and age-appropriate floor play.",
    points: ["Responsive, relationship-based care", "Gentle sensory and movement experiences", "Individual routines discussed with each family"],
  },
  {
    tag: "Toddler care",
    title: "Room to move, wonder, and connect",
    copy: "Toddlers are supported as they build language, confidence, coordination, friendships, and everyday independence through play.",
    points: ["Stories, music, movement, and conversation", "Creative and hands-on exploration", "Patient support for growing independence"],
  },
  {
    tag: "Preschool through age 5",
    title: "Playful preparation for what comes next",
    copy: "Preschoolers practice early literacy, problem-solving, fine-motor skills, cooperation, and curiosity through guided and child-led experiences.",
    points: ["Early literacy and school-readiness practice", "Building, art, nature, and discovery", "Social-emotional growth in a small group"],
  },
];

const reasons = [
  {
    title: "A genuinely small group",
    copy: "With a licensed capacity of six children, the setting is intentionally personal and gives each child room to be known.",
  },
  {
    title: "An educated, experienced provider",
    copy: "Dionne Panton holds an M.S. in Early Childhood Education and brings seven years of professional child-care experience.",
  },
  {
    title: "Learning woven into real life",
    copy: "Stories, creative work, movement, outdoor discovery, friendships, and practical skills all have a place in the day.",
  },
  {
    title: "A home-like place to belong",
    copy: "Children can learn and play in a close-knit environment designed around connection, steady rhythms, and growing independence.",
  },
];

const dayItems = [
  ["Welcome", "Arrival, connection, and child-led play"],
  ["Explore", "Stories, creativity, movement, and guided discovery"],
  ["Together", "Meals or snacks, conversation, and everyday routines"],
  ["Outside", "Fresh air, active play, and nature-based noticing"],
  ["Rest", "Nap, rest, or quiet time based on age and need"],
  ["Reconnect", "Afternoon play, reflection, and family pickup"],
];

const safetyItems = [
  ["Arrival & release", "Children are released only through the program’s approved handoff process."],
  ["Preparedness", "Emergency, illness, and return-to-care policies are reviewed with families before enrollment."],
  ["Active care", "Supervision, sanitation, and outdoor routines are designed around children’s ages and needs."],
  ["Family communication", "Families receive clear updates through the program’s verified communication process."],
];

const planningItems = [
  {
    label: "Daily rhythm",
    title: "Know how the day flows",
    copy: "The sample rhythm above covers arrival, exploration, shared routines, outdoor time, rest, and afternoon reconnection.",
    status: "Available now",
  },
  {
    label: "Meals & supplies",
    title: "Ask what is provided",
    copy: "Meal, snack, allergy, infant-feeding, and family-supplied item details are reviewed directly before enrollment.",
    status: "Review before enrollment",
  },
  {
    label: "Calendar",
    title: "Plan around closures",
    copy: "Ask for the current operating calendar, planned closures, and schedule-change notice practices before choosing care.",
    status: "Request the current calendar",
  },
  {
    label: "Family handbook",
    title: "Review expectations clearly",
    copy: "Health, release, rest, illness, payment, and communication policies are discussed before a family commits to care.",
    status: "Reviewed during enrollment",
  },
];

const availabilityReviewed = new Date("2026-07-18T12:00:00-07:00");

function currentAvailability() {
  const ageInDays = Math.floor((Date.now() - availabilityReviewed.getTime()) / 86_400_000);
  return ageInDays <= 7
    ? { short: "Up to 3 spaces open", detail: "Up to 3 spaces may be available, depending on each child’s age and requested schedule." }
    : { short: "Contact for availability", detail: "Availability changes. Contact Gifted Garden for the current age and schedule fit." };
}

const galleryPhotos = [
  {
    src: "/images/friendships.jpg",
    alt: "Three children smiling and sharing a group hug indoors",
    eyebrow: "Belonging",
    title: "Friendships grow here",
    className: "featured",
  },
  {
    src: "/images/storytime.jpg",
    alt: "Two children sitting together and exploring picture books",
    eyebrow: "Early literacy",
    title: "Stories shared together",
    className: "wide",
  },
  {
    src: "/images/early-learning.jpg",
    alt: "A child concentrating while practicing letter formation",
    eyebrow: "Guided discovery",
    title: "Learning through practice",
    className: "",
  },
  {
    src: "/images/creative-building.jpg",
    alt: "A child building a large colorful structure with magnetic tiles",
    eyebrow: "Creative play",
    title: "Big ideas take shape",
    className: "",
  },
  {
    src: "/images/life-skills.jpg",
    alt: "A child practicing buttons, buckles, snaps, and a zipper",
    eyebrow: "Independence",
    title: "Everyday skills, patiently practiced",
    className: "",
  },
  {
    src: "/images/outdoor-movement.jpg",
    alt: "A smiling child riding a red tricycle outdoors",
    eyebrow: "Active play",
    title: "Room to move",
    className: "",
  },
  {
    src: "/images/nature-discovery.jpg",
    alt: "A child holding two yellow flowers during outdoor exploration",
    eyebrow: "Nature",
    title: "Small wonders, closely noticed",
    className: "",
  },
  {
    src: "/images/water-play.jpg",
    alt: "A smiling child enjoying supervised water play",
    eyebrow: "Sensory play",
    title: "Joyful ways to explore",
    className: "",
  },
  {
    src: "/images/community-outing.jpg",
    alt: "A group of children gathered together during a supervised community outing",
    eyebrow: "Community",
    title: "Adventures beyond the playroom",
    className: "wide",
  },
];

const faqs = [
  ["What ages does Gifted Garden accept?", "Gifted Garden serves children from birth through age 5, including infant, toddler, and preschool stages."],
  ["What are the hours?", "Care hours are 6:00 AM–4:30 PM. Ask about operating days, holidays, and planned closures when you inquire."],
  ["Do you offer full-time or part-time care?", "Ask which full-time and part-time schedules currently fit your child’s age and desired start date."],
  ["How much is tuition?", "Request current tuition and a complete fee summary so you can compare the schedule, included services, and routine fees that apply to your family."],
  ["Do you have openings?", "Up to 3 spaces were reported available on July 18, 2026. Openings depend on age and schedule fit and are not guaranteed until admission is complete."],
  ["Are meals and snacks provided?", "Ask what meals, snacks, infant feeding supplies, and other items are provided or family-supplied. Do not send medical records through this website."],
  ["Does my child need to be potty trained?", "Ask how Gifted Garden supports potty learning for your child’s age and stage."],
  ["How do rest and sick-child policies work?", "Rest and quiet time are part of the sample daily rhythm. Complete illness, return-to-care, and rest policies are reviewed directly with families."],
  ["Is Gifted Garden licensed?", "Gifted Garden is a family home child-care program with a reported capacity of 6. The legal license details will be added after owner verification."],
  ["Do you accept military fee assistance?", "Gifted Garden reports active military fee-assistance status. The administering organization determines family eligibility, authorization, funding, and benefit amounts."],
  ["How do tours work?", "Submit a request with a preferred time. Gifted Garden will review it before confirming a visit and sharing arrival details. A request or tour does not reserve a space."],
];

function LavenderMark({ small = false }: { small?: boolean }) {
  return (
    <span className={small ? "lavender-mark small" : "lavender-mark"} aria-hidden="true">
      <i />
      <i />
      <i />
      <i />
      <i />
    </span>
  );
}

function DemoNotice() {
  return (
    <div className="prototype-notice" role="note">
      <strong>Owner review</strong>
      <span>This private review remains excluded from search results while owner-supplied policies and public-release details are completed.</span>
    </div>
  );
}

export default function Home() {
  const availability = currentAvailability();

  return (
    <>
      <a className="skip-link" href="#main">Skip to main content</a>
      <DemoNotice />
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Gifted Garden home">
          <Image
            src="/brand/gifted-garden-horizontal.png"
            alt="Gifted Garden Childcare Service"
            width={1774}
            height={575}
            unoptimized
            priority
          />
        </a>
        <nav aria-label="Primary navigation">
          <a href="#program">Program</a>
          <a href="#tuition">Cost</a>
          <a href="#provider">Provider</a>
          <a href="#safety">Safety</a>
          <a href="#faq">FAQ</a>
          <a href="#tour">Tour</a>
        </nav>
        <div className="header-actions">
          <a className="header-phone" href="tel:+16196461029" aria-label="Call Gifted Garden at 619-646-1029">Call (619) 646-1029</a>
          <a className="button button-small button-primary header-cta" href="#tour">Request a Tour</a>
        </div>
      </header>

      <nav className="mobile-section-nav" aria-label="Browse Gifted Garden information">
        <a href="#program">Program</a>
        <a href="#tuition">Cost</a>
        <a href="#provider">Provider</a>
        <a href="#safety">Safety</a>
        <a href="#faq">FAQ</a>
        <a href="#tour">Tour</a>
      </nav>

      <main id="main">
        <section className="hero" id="top" aria-labelledby="hero-title">
          <div className="hero-art" aria-hidden="true">
            <span className="sun" />
            <span className="garden-arch garden-arch-one" />
            <span className="garden-arch garden-arch-two" />
            <span className="lavender-field lavender-field-one" />
            <span className="lavender-field lavender-field-two" />
          </div>
          <div className="hero-copy">
            <span className="eyebrow">Child care in Lomita Village · San Diego, CA 92114</span>
            <h1 id="hero-title">Where every child <em>blooms.</em></h1>
            <p className="hero-lede">Family home child care for children from birth through age 5, led by Dionne Panton, M.S. in Early Childhood Education. A small group makes room for care that stays personal.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#tour">Request a Tour</a>
              <a className="button button-secondary" href="tel:+16196461029">Call (619) 646-1029</a>
            </div>
            <p className="location-note">Open 6:00 AM–4:30 PM · Complete address shared after a tour is confirmed.</p>
          </div>
          <aside className="hero-card" aria-label="Gifted Garden program highlights">
            <div className="mascot-stage">
              <Image
                src="/brand/gifted-garden-elephant.png"
                alt=""
                width={1254}
                height={1254}
                unoptimized
                priority
              />
              <span className="brand-sparkle" aria-hidden="true">✦</span>
            </div>
            <span className="eyebrow">At a glance</span>
            <h2>Personal care, grounded in early-childhood expertise.</h2>
            <ul>
              <li><span>Small group</span><strong>Capacity of 6</strong></li>
              <li><span>Provider</span><strong>M.S. Early Childhood Education</strong></li>
              <li><span>Experience</span><strong>7 years</strong></li>
              <li><span>Availability</span><strong>{availability.short}</strong></li>
            </ul>
          </aside>
        </section>

        <section className="trust-strip" aria-label="Key program information">
          <div><span>Licensed setting</span><strong>Family home child care</strong></div>
          <div><span>Ages & hours</span><strong>Birth–5 · 6:00 AM–4:30 PM</strong></div>
          <div><span>Current availability</span><strong>{availability.short}</strong></div>
          <div><span>Family support</span><strong>Active military fee assistance</strong></div>
        </section>

        <section className="section proof-section" id="why" aria-labelledby="why-title">
          <div className="section-heading">
            <span className="eyebrow">Why Gifted Garden</span>
            <h2 id="why-title">The advantages of care that stays personal.</h2>
            <p>Families deserve more than broad promises. These are the qualities that shape the Gifted Garden experience.</p>
          </div>
          <div className="reason-grid">
            {reasons.map((reason, index) => (
              <article key={reason.title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{reason.title}</h3>
                <p>{reason.copy}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section soft-section" id="program" aria-labelledby="fit-title">
          <div className="section-heading centered">
            <span className="eyebrow">Program fit</span>
            <h2 id="fit-title">Find the care path that fits your child.</h2>
            <p>Gifted Garden serves children from birth through age 5 in a small family home child-care setting with a licensed capacity of 6.</p>
          </div>
          <div className="card-grid">
            {programCards.map((card, index) => (
              <article className="program-card" key={card.tag}>
                <span className="card-number">0{index + 1}</span>
                <span className="eyebrow">{card.tag}</span>
                <h3>{card.title}</h3>
                <p>{card.copy}</p>
                <ul>
                  {card.points.map((point) => <li key={point}>{point}</li>)}
                </ul>
              </article>
            ))}
          </div>
          <div className="inline-note"><strong>Individual routines matter:</strong> Feeding, rest, potty learning, supplies, and attendance needs are discussed directly with each family before enrollment.</div>
        </section>

        <section className="section day-section" aria-labelledby="day-title">
          <div className="day-intro">
            <span className="eyebrow">A sample day</span>
            <h2 id="day-title">Familiar rhythms, with room to explore.</h2>
            <p>This representative rhythm shows how the day can flow. Exact timing and routines adjust for children’s ages and needs and are reviewed with families during enrollment.</p>
          </div>
          <ol className="day-list">
            {dayItems.map(([title, copy], index) => (
              <li key={title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <div><h3>{title}</h3><p>{copy}</p></div>
              </li>
            ))}
          </ol>
        </section>

        <section className="section gallery-section" id="gallery" aria-labelledby="gallery-title">
          <div className="section-heading">
            <span className="eyebrow">The environment</span>
            <h2 id="gallery-title">A closer look at how children spend their days.</h2>
            <p>Follow the story from friendship and early literacy to creative building, practical skills, outdoor movement, nature, and community experiences.</p>
          </div>
          <div className="gallery-grid" aria-label="Gifted Garden program moments">
            {galleryPhotos.map((photo) => (
              <figure className={`gallery-card ${photo.className}`} key={photo.src}>
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  unoptimized
                  sizes={photo.className === "wide" ? "(max-width: 760px) 100vw, 66vw" : "(max-width: 760px) 50vw, 34vw"}
                />
                <figcaption>
                  <span>{photo.eyebrow}</span>
                  <strong>{photo.title}</strong>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section className="provider-section" id="provider" aria-labelledby="provider-title">
          <div className="provider-portrait">
            <Image
              src="/images/dionne-panton.jpg"
              alt="Dionne Panton, Gifted Garden child-care provider"
              fill
              unoptimized
              sizes="(max-width: 1050px) 100vw, 45vw"
            />
            <span>Meet Dionne Panton</span>
          </div>
          <div className="provider-copy">
            <span className="eyebrow">Meet the provider</span>
            <h2 id="provider-title">Care begins with the person families trust.</h2>
            <p>Dionne Panton is the child-care provider at Gifted Garden. She holds a Master of Science in Early Childhood Education and has worked as a child-care professional for seven years.</p>
            <p className="provider-principle"><strong>The Gifted Garden difference:</strong> a close-knit setting where care, learning, and family communication can stay personal.</p>
          </div>
        </section>

        <section className="section safety-section" id="safety" aria-labelledby="safety-title">
          <div className="section-heading centered light-heading">
            <span className="eyebrow">Trust & safety</span>
            <h2 id="safety-title">Clear routines. Thoughtful care. Honest expectations.</h2>
            <p>Complete health, safety, emergency, and release policies are reviewed during enrollment. No child-care setting can promise that illness, injury, or emergencies will never occur.</p>
          </div>
          <div className="safety-grid">
            {safetyItems.map(([title, copy]) => (
              <article key={title}><span aria-hidden="true">✓</span><h3>{title}</h3><p>{copy}</p></article>
            ))}
          </div>
          <p className="safety-footnote">Detailed policies are reviewed directly with families and will never expose access-control details, attendance patterns, or children’s schedules.</p>
        </section>

        <section className="section details-section" id="tuition" aria-labelledby="details-title">
          <div className="section-heading">
            <span className="eyebrow">Practical details</span>
            <h2 id="details-title">The facts families need to make a real decision.</h2>
          </div>
          <div className="details-grid">
            <article><span>01</span><h3>Hours & schedules</h3><p>Care hours are 6:00 AM–4:30 PM. Ask which operating days and full- or part-time schedules fit your child’s age and desired start date.</p></article>
            <article><span>02</span><h3>Tuition & fees</h3><p>Request current tuition and a complete fee summary, including what is provided and which routine fees apply.</p></article>
            <article><span>03</span><h3>Availability</h3><p>{availability.detail} Status last reviewed July 18, 2026; placement remains subject to program fit and completed admission.</p></article>
          </div>
          <div className="decision-row">
            <div><strong>Need care soon?</strong><span>Request a tour and availability conversation.</span><a href="#tour">Request a Tour</a></div>
            <div><strong>Planning ahead?</strong><span>Ask about a future start date without sharing sensitive records.</span><a href="#contact">Ask About Future Care</a></div>
            <div><strong>Still deciding?</strong><span>Ask a short, non-sensitive question first.</span><a href="#contact">Ask a Question</a></div>
          </div>
        </section>

        <section className="section planning-section" aria-labelledby="planning-title">
          <div className="section-heading centered">
            <span className="eyebrow">Plan with confidence</span>
            <h2 id="planning-title">Practical answers for everyday family life.</h2>
            <p>Use this guide to prepare for a useful first conversation. Exact family policies are reviewed directly before enrollment.</p>
          </div>
          <div className="planning-grid">
            {planningItems.map((item) => (
              <article key={item.title}>
                <span className="eyebrow">{item.label}</span>
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
                <strong>{item.status}</strong>
              </article>
            ))}
          </div>
          <p className="guide-reviewed">Family guide last reviewed July 22, 2026. Ask for the current handbook before enrollment.</p>
        </section>

        <section className="assistance-section" id="families" aria-labelledby="assistance-title">
          <div className="section-heading centered">
            <span className="eyebrow">Help paying for child care</span>
            <h2 id="assistance-title">Support for military-connected families.</h2>
            <p>Gifted Garden reports active military fee-assistance status. Families are welcome to ask about enrollment and the provider-processing steps.</p>
          </div>
          <div className="assistance-feature">
            <div>
              <span className="eyebrow">Reported status: active</span>
              <h3>Military fee assistance</h3>
              <p>Ask Gifted Garden whether the current opening and schedule fit your family before beginning an authorization or provider-change process.</p>
            </div>
            <a className="button button-secondary" href="https://www.childcareaware.org/fee-assistancerespite/military-families/" rel="noreferrer">Visit official program information <span aria-hidden="true">↗</span></a>
          </div>
          <p className="assistance-note"><strong>Important:</strong> Provider participation does not guarantee family eligibility, funding, authorization, or a particular benefit amount. The administering organization makes those decisions. Do not send benefit documents through this website.</p>
        </section>

        <section className="section enrollment-section" aria-labelledby="enrollment-title">
          <div className="section-heading centered">
            <span className="eyebrow">Enrollment</span>
            <h2 id="enrollment-title">A clear path from first question to next step.</h2>
          </div>
          <ol className="steps-list">
            <li><span>1</span><h3>Check the basics</h3><p>Review ages, hours, tuition, availability, and location.</p></li>
            <li><span>2</span><h3>Share your timing</h3><p>Request a tour for near-term care or ask about a future start.</p></li>
            <li><span>3</span><h3>Visit and ask</h3><p>Meet the provider and review routines and policies.</p></li>
            <li><span>4</span><h3>Enroll securely</h3><p>Provide sensitive records later through an approved system.</p></li>
          </ol>
          <p className="center-note">A tour request or visit does not reserve or guarantee a space.</p>
        </section>

        <section className="form-section" id="tour" aria-labelledby="tour-section-title">
          <div className="form-section-copy">
            <span className="eyebrow">Primary next step</span>
            <h2 id="tour-section-title">Come see whether Gifted Garden feels right.</h2>
            <p>Complete the form to prepare a structured email to Gifted Garden. The complete address remains private until a tour is reviewed and confirmed.</p>
            <ul>
              <li>Requests are reviewed before confirmation.</li>
              <li>A requested time is not booked until confirmed.</li>
              <li>Exact arrival details may be withheld until review.</li>
              <li>A tour does not reserve an enrollment space.</li>
            </ul>
          </div>
          <EnrollmentForm kind="tour" />
        </section>

        <section className="section faq-section" id="faq" aria-labelledby="faq-title">
          <div className="section-heading">
            <span className="eyebrow">Frequently asked questions</span>
            <h2 id="faq-title">Resolve the basics before you call.</h2>
          </div>
          <div className="faq-list">
            {faqs.map(([question, answer]) => (
              <details key={question}>
                <summary>{question}<span aria-hidden="true">+</span></summary>
                <p>{answer}</p>
              </details>
            ))}
          </div>
          <a className="button button-secondary" href="#contact">Still have a question?</a>
        </section>

        <section className="location-section" aria-labelledby="location-title">
          <div className="map-card" aria-hidden="true">
            <span className="map-road road-one" />
            <span className="map-road road-two" />
            <span className="map-dot"><LavenderMark small /></span>
            <strong>Lomita Village</strong>
            <small>San Diego · 92114</small>
          </div>
          <div>
            <span className="eyebrow">Location</span>
            <h2 id="location-title">Child care in Lomita Village, San Diego.</h2>
            <p>Gifted Garden serves families in Lomita Village and the surrounding San Diego area. To protect the privacy and safety of this family home child-care program, the complete address and arrival instructions are shared only after a tour request is reviewed and the appointment is confirmed.</p>
            <p className="inline-note"><strong>Directions link:</strong> A privacy-safe, verified destination must be approved before publication.</p>
          </div>
        </section>

        <section className="section referral-section" aria-labelledby="referral-title">
          <div className="referral-brand-layout">
            <div className="section-heading">
              <span className="eyebrow">Share Gifted Garden</span>
              <h2 id="referral-title">Know a family looking for small-group care?</h2>
              <p>Send them this review link and a short, privacy-conscious introduction. The link will continue to work after the final public-release decision.</p>
            </div>
            <Image
              className="decorative-seal"
              src="/brand/gifted-garden-seal.png"
              alt="Gifted Garden Childcare Service decorative garden seal"
              width={1254}
              height={1254}
              unoptimized
            />
          </div>
          <ReferralTools />
        </section>

        <section className="contact-section" id="contact" aria-labelledby="contact-title">
          <div className="contact-copy">
            <span className="eyebrow">Contact</span>
            <h2 id="contact-title">A short question is a good place to start.</h2>
            <p>Call or email Gifted Garden with a brief enrollment question. For urgent matters or existing-family communication, use the direct channel already provided by the program.</p>
            <div className="contact-placeholder">
              <span>Business phone</span><strong><a href="tel:+16196461029">(619) 646-1029</a></strong>
              <span>Email</span><strong><a href="mailto:giftedgarden1@gmail.com">giftedgarden1@gmail.com</a></strong>
              <span>Tour address</span><strong>Shared after confirmation</strong>
            </div>
            <p>Do not use a website form, email, or text for emergencies or sensitive child information.</p>
          </div>
          <EnrollmentForm kind="question" />
        </section>

        <section className="privacy-section" id="privacy" aria-labelledby="privacy-title">
          <span className="eyebrow">Plain-language privacy summary</span>
          <h2 id="privacy-title">Collect less. Explain clearly. Protect family information.</h2>
          <div className="privacy-columns">
            <div><h3>What the forms collect</h3><p>Only the limited parent contact, child age or birth month/year, timing, schedule, referral source, and request information shown above—solely to respond and evaluate program fit.</p></div>
            <div><h3>What not to send</h3><p>Never submit medical, immunization, custody, identification, Social Security, financial, benefit, or emergency information through this website.</p></div>
            <div><h3>How email preparation works</h3><p>The form prepares a draft in the parent’s own email application. Gifted Garden receives nothing until the parent reviews the message and presses Send.</p></div>
          </div>
          <p className="privacy-bottom">No external form processor or analytics provider receives these form details. The parent’s email provider processes the message after they choose Send. Operational contact consent remains separate from optional, unselected marketing consent.</p>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-brand">
          <Image
            src="/brand/gifted-garden-horizontal.png"
            alt="Gifted Garden Childcare Service"
            width={1774}
            height={575}
            unoptimized
          />
          <span>Lomita Village · San Diego, CA 92114</span>
        </div>
        <div className="footer-links">
          <a href="#program">Program</a><a href="#safety">Safety</a><a href="#tuition">Tuition</a><a href="#faq">FAQ</a><a href="#privacy">Privacy</a>
        </div>
        <p>Private owner-review version · Last reviewed July 22, 2026</p>
      </footer>

      <nav className="mobile-actions" aria-label="Mobile enrollment actions">
        <a href="#tour">Tour</a>
        <a href="tel:+16196461029">Call</a>
        <a href="#tuition">Cost</a>
      </nav>

    </>
  );
}
