import { EnrollmentForm } from "./EnrollmentForm";
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
    copy: "With a licensed capacity of six children, the setting is intentionally personal and gives each child more room for individual attention.",
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
    copy: "Gifted Garden closes for Martin Luther King Jr. Day, Memorial Day, Juneteenth, Independence Day, Labor Day, Veterans Day, Thanksgiving Day, the day after Thanksgiving, and December 24–January 1.",
    status: "Monday–Friday care calendar",
  },
  {
    label: "Family handbook",
    title: "Review expectations clearly",
    copy: "Health, release, rest, illness, payment, and communication policies are discussed before a family commits to care.",
    status: "Reviewed during enrollment",
  },
];

const availability = {
  short: "1 current opening",
  detail: "The owner reports one current opening under the existing Small Family Child Care Home license. Fit depends on age, schedule, and completion of admission.",
  reviewed: "July 23, 2026",
};

const expansion = {
  status: "Planned expansion · CDSS approval pending",
  title: "Interested in a future opening? Join the expansion interest list.",
  detail: "Gifted Garden is completing an expansion project and plans to seek CDSS approval for a Large Family Child Care Home license. Additional capacity is not yet licensed or guaranteed, but families may share their interest now.",
};

const licensing = {
  legalName: "Dionne Panton Family Child Care",
  classification: "Small Family Child Care Home",
  licenseNumber: "376628431",
  capacity: "6 children",
  facilitySearchUrl: "https://cdss.ca.gov/inforesources/community-care-licensing/facility-search-welcome",
};

const profileLinks = {
  google: "https://share.google/S2uAsv1C6g9qcipQH",
  yelp: "https://www.yelp.com/biz/gifted-garden-san-diego",
  instagram: "https://www.instagram.com/gifted_garden",
  facebook: "https://www.facebook.com/GiftedGardenChildCare",
};

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
  ["What are the hours?", "Gifted Garden’s published full-time first shift is Monday through Friday from 6:00 AM–4:30 PM. Twenty-four-hour and weekend care may be negotiated as needed. Scheduled closures include Martin Luther King Jr. Day, Memorial Day, Juneteenth, Independence Day, Labor Day, Veterans Day, Thanksgiving Day, the day after Thanksgiving, and December 24–January 1."],
  ["What schedule is offered?", "The public schedule is full-time first shift, Monday through Friday from 6:00 AM–4:30 PM. Twenty-four-hour and weekend care may be negotiated as needed. Complete schedule terms are provided in the family handbook."],
  ["How much is tuition?", "Contact Gifted Garden for current tuition information. Depending on the family agreement, additional charges may apply for late pickup, late payment, and returned payments."],
  ["Do you have openings?", "The owner reports one current opening under Gifted Garden’s existing Small Family Child Care Home license, last reviewed July 23, 2026. Fit depends on the child’s age, schedule, and completion of admission; a space is not guaranteed until admission is complete."],
  ["What is the expansion interest list?", "Gifted Garden is completing an expansion project and plans to seek CDSS approval for a Large Family Child Care Home license. Interested parents may join the list for additional spots that could become available after the project and licensing process are complete. Joining does not guarantee approval, a completion date, added capacity, or placement."],
  ["Do you offer before- and after-school care or transportation?", "Pickup and drop-off transportation may be negotiated for schools within a five-mile radius of Gifted Garden’s location. Availability depends on the school, timing, and family agreement and must be confirmed before enrollment."],
  ["Where can I review program policies?", "Detailed meal, rest, illness, release, payment, transportation, and other operating policies are provided in Gifted Garden’s physical family handbook and reviewed with enrolled parents."],
  ["Is Gifted Garden licensed?", "Yes. The currently licensed facility name is Dionne Panton Family Child Care, classified as a Small Family Child Care Home, California license number 376628431, with a licensed capacity of six. The owner confirms that the current license is active and in good standing. The planned Large Family Child Care Home expansion is not yet licensed or approved; families can consult the linked California CDSS Facility Search."],
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

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ChildCare",
    name: "Gifted Garden",
    legalName: licensing.legalName,
    url: "https://giftedgarden.github.io/",
    telephone: "+1-619-646-1029",
    email: "giftedgarden1@gmail.com",
    slogan: "Where every child blooms.",
    description: "Licensed Small Family Child Care Home serving children from birth through age 5 in Lomita Village, San Diego.",
    image: [
      "https://giftedgarden.github.io/images/friendships.jpg",
      "https://giftedgarden.github.io/images/dionne-panton.jpg",
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "San Diego",
      addressRegion: "CA",
      postalCode: "92114",
      addressCountry: "US",
    },
    areaServed: {
      "@type": "Place",
      name: "Lomita Village and surrounding San Diego communities",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "06:00",
        closes: "16:30",
      },
    ],
    priceRange: "Contact for current tuition",
    sameAs: Object.values(profileLinks),
    identifier: {
      "@type": "PropertyValue",
      propertyID: "California child-care license",
      value: licensing.licenseNumber,
    },
    founder: {
      "@type": "Person",
      name: "Dionne Panton",
      jobTitle: "Child-care provider",
      description: "M.S. in Early Childhood Education with seven years of professional child-care experience.",
    },
  };

  return (
    <>
      <a className="skip-link" href="#main">Skip to main content</a>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }}
      />
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Gifted Garden home">
          <Image
            src="/brand/gifted-garden-horizontal.webp"
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
          <a href="#reviews">Reviews</a>
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
        <a href="#reviews">Reviews</a>
        <a href="#faq">FAQ</a>
        <a href="#tour">Tour</a>
        <a href="#waitlist">Waitlist</a>
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
              <a className="button button-secondary" href="#waitlist">Join the Waitlist</a>
            </div>
            <p className="location-note">Full-time first shift: Monday–Friday · 6:00 AM–4:30 PM · Complete address shared after a tour is confirmed.</p>
          </div>
          <aside className="hero-card" aria-label="Gifted Garden program highlights">
            <div className="hero-photo">
              <Image
                src="/images/friendships.jpg"
                alt="Three children smiling and sharing a group hug at Gifted Garden"
                fill
                unoptimized
                priority
                sizes="(max-width: 1050px) 80vw, 34vw"
              />
              <span className="hero-mascot-badge" aria-hidden="true">
                <Image
                  src="/brand/gifted-garden-elephant.webp"
                  alt=""
                  width={1254}
                  height={1254}
                  unoptimized
                />
                <i>✦</i>
              </span>
            </div>
            <span className="eyebrow">At a glance</span>
            <h2>Personal care, grounded in early-childhood expertise.</h2>
            <ul>
              <li><span>Small group</span><strong>Licensed capacity: 6</strong></li>
              <li><span>California license</span><strong>{licensing.licenseNumber}</strong></li>
              <li><span>Provider</span><strong>M.S. Early Childhood Education</strong></li>
              <li><span>Experience</span><strong>7 years</strong></li>
              <li><span>Availability</span><strong>{availability.short}</strong></li>
            </ul>
          </aside>
        </section>

        <section className="trust-strip" aria-label="Key program information">
          <div><span>Program type</span><strong>{licensing.classification}</strong></div>
          <div><span>Ages & first shift</span><strong>Birth–5 · Mon–Fri · 6:00 AM–4:30 PM</strong></div>
          <div><span>Current availability</span><strong>{availability.short} · Reviewed {availability.reviewed}</strong></div>
          <div><span>Owner-reported support</span><strong>Military fee-assistance status: active</strong></div>
        </section>

        <section className="expansion-banner" id="expansion" aria-labelledby="expansion-title">
          <div className="expansion-copy">
            <span className="eyebrow">{expansion.status}</span>
            <h2 id="expansion-title">{expansion.title}</h2>
            <p>{expansion.detail}</p>
          </div>
          <div className="expansion-facts">
            <div><span>Available now</span><strong>1 opening under the current Small Family Child Care Home license</strong></div>
            <div><span>Future capacity</span><strong>Subject to project completion and CDSS licensing approval</strong></div>
            <a className="button button-primary" href="#waitlist">Join the Expansion Interest List</a>
          </div>
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
            <p>Gifted Garden serves children from birth through age 5 in a Small Family Child Care Home with a licensed capacity of 6.</p>
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

        <section className="section review-section" id="reviews" aria-labelledby="reviews-title">
          <div className="section-heading centered">
            <span className="eyebrow">Independent profiles</span>
            <h2 id="reviews-title">See Gifted Garden where families already look.</h2>
            <p>Visit Gifted Garden’s public business and social profiles for another view of the program. Ratings and review text are intentionally not copied here, so families can read the current source directly.</p>
          </div>
          <div className="profile-links" aria-label="Gifted Garden public profiles">
            <a href={profileLinks.google} target="_blank" rel="noopener noreferrer"><span>Business profile</span><strong>Google</strong><small>View the current listing ↗</small></a>
            <a href={profileLinks.yelp} target="_blank" rel="noopener noreferrer"><span>Business profile</span><strong>Yelp</strong><small>View the current listing ↗</small></a>
            <a href={profileLinks.instagram} target="_blank" rel="noopener noreferrer"><span>Program updates</span><strong>Instagram</strong><small>@gifted_garden ↗</small></a>
            <a href={profileLinks.facebook} target="_blank" rel="noopener noreferrer"><span>Program updates</span><strong>Facebook</strong><small>Gifted Garden Child Care ↗</small></a>
          </div>
          <div className="review-next-step">
            <div><span className="eyebrow">The most useful next step</span><h3>Meet Dionne and see the care environment yourself.</h3></div>
            <a className="button button-primary" href="#tour">Request a Tour</a>
          </div>
        </section>

        <section className="section safety-section" id="safety" aria-labelledby="safety-title">
          <div className="section-heading centered light-heading">
            <span className="eyebrow">Trust & safety</span>
            <h2 id="safety-title">Clear routines. Thoughtful care. Honest expectations.</h2>
              <p>Detailed operating policies are maintained in Gifted Garden’s physical family handbook and shared with enrolled parents. No child-care setting can promise that illness, injury, or emergencies will never occur.</p>
          </div>
          <div className="safety-grid">
            {safetyItems.map(([title, copy]) => (
              <article key={title}><span aria-hidden="true">✓</span><h3>{title}</h3><p>{copy}</p></article>
            ))}
          </div>
          <div className="license-card">
            <div>
              <span className="eyebrow">California child-care license</span>
              <h3>{licensing.legalName}</h3>
              <dl>
                <div><dt>Classification</dt><dd>{licensing.classification}</dd></div>
                <div><dt>License number</dt><dd>{licensing.licenseNumber}</dd></div>
                <div><dt>Licensed capacity</dt><dd>{licensing.capacity}</dd></div>
                <div><dt>Owner-confirmed status</dt><dd>Active and in good standing</dd></div>
              </dl>
              <p>The owner reports that no resident children currently count toward the licensed capacity. Families should review current licensing information and visit the program before enrolling.</p>
            </div>
            <a className="button button-secondary" href={licensing.facilitySearchUrl} target="_blank" rel="noopener noreferrer">
              Search California CDSS records <span aria-hidden="true">↗</span>
            </a>
          </div>
          <p className="safety-footnote">The complete handbook is intentionally not published on this marketing website. Enrolled families receive and review the applicable policies directly.</p>
        </section>

        <section className="section details-section" id="tuition" aria-labelledby="details-title">
          <div className="section-heading">
            <span className="eyebrow">Practical details</span>
            <h2 id="details-title">The facts families need to make a real decision.</h2>
          </div>
          <div className="details-grid">
            <article><span>01</span><h3>Full-time first shift</h3><p>Monday–Friday, 6:00 AM–4:30 PM. Twenty-four-hour and weekend care may be negotiated as needed. Complete schedule terms are provided in the family handbook.</p></article>
            <article><span>02</span><h3>Tuition & fees</h3><p>Contact Gifted Garden for current tuition information. Additional charges may apply for late pickup, late payment, and returned payments.</p></article>
            <article><span>03</span><h3>School transportation</h3><p>Pickup and drop-off may be negotiated for schools within a five-mile radius of Gifted Garden’s location. Service depends on the school, timing, and family agreement.</p></article>
          </div>
          <div className="decision-row">
            <div><strong>Need care soon?</strong><span>Ask whether the one current opening fits your child and schedule.</span><a href="#tour">Request a Tour</a></div>
            <div><strong>Planning ahead?</strong><span>Express interest in additional spots planned after expansion and CDSS approval.</span><a href="#waitlist">Join the Interest List</a></div>
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
          <p className="guide-reviewed">Family guide last reviewed July 23, 2026. Ask for the current handbook before enrollment.</p>
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
            <a className="button button-secondary" href="https://www.childcareaware.org/fee-assistancerespite/military-families/" rel="noopener noreferrer">Visit official program information <span aria-hidden="true">↗</span></a>
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
            <li><span>2</span><h3>Share your timing</h3><p>Request a tour for the current opening or join the expansion interest list for future capacity.</p></li>
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
              <li>Meet Dionne and see the learning and play environment.</li>
              <li>Discuss your child’s age, schedule, transportation needs, and current availability.</li>
              <li>Ask about tuition and the family handbook before making a decision.</li>
              <li>A requested time is not booked until Gifted Garden confirms it.</li>
              <li>A tour does not reserve an enrollment space.</li>
            </ul>
          </div>
          <EnrollmentForm kind="tour" />
        </section>

        <section className="form-section alternate" id="waitlist" aria-labelledby="waitlist-section-title">
          <div className="form-section-copy">
            <span className="eyebrow">One current opening · expansion interest welcome</span>
            <h2 id="waitlist-section-title">Join the current or expansion interest list.</h2>
            <p>Share your preferred start month and care needs. Choose whether you are interested in the current opening, future spots planned after expansion and CDSS approval, or both.</p>
            <ul>
              <li>The current Small Family Child Care Home license has one owner-reported opening as of {availability.reviewed}.</li>
              <li>Additional capacity requires project completion and CDSS approval of a Large Family Child Care Home license.</li>
              <li>An interest-list request does not reserve or guarantee a current or future space.</li>
              <li>No expansion completion date or added capacity is promised.</li>
              <li>Placement depends on availability, age, schedule, and program fit.</li>
              <li>Do not send medical, custody, financial, or benefit records.</li>
            </ul>
          </div>
          <EnrollmentForm kind="waitlist" />
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

        <section className="closing-cta" aria-labelledby="closing-cta-title">
          <div>
            <span className="eyebrow">Ready when your family is</span>
            <h2 id="closing-cta-title">Take the next step toward care that stays personal.</h2>
            <p>Tour for the current opening, join the expansion interest list for future capacity, or call with one quick question.</p>
          </div>
          <div className="closing-actions">
            <a className="button button-primary" href="#tour">Request a Tour</a>
            <a className="button button-secondary" href="#waitlist">Join the Waitlist</a>
            <a className="text-call" href="tel:+16196461029">Call (619) 646-1029</a>
          </div>
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
            <p className="inline-note"><strong>Transportation area:</strong> Pickup and drop-off may be negotiated for schools within five miles of the program’s location.</p>
          </div>
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
            <div><h3>What the forms collect</h3><p>Only the limited parent contact, child age or birth month/year, timing, schedule, and request information shown above—solely to respond and evaluate program fit.</p></div>
            <div><h3>What not to send</h3><p>Never submit medical, immunization, custody, identification, Social Security, financial, benefit, or emergency information through this website.</p></div>
            <div><h3>How email preparation works</h3><p>The form prepares a draft in the parent’s own email application. Gifted Garden receives nothing until the parent reviews the message and presses Send.</p></div>
          </div>
          <p className="privacy-bottom">No external form processor or analytics provider receives these form details. The parent’s email provider processes the message only after they choose Send. Gifted Garden requests permission only to respond to that inquiry.</p>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-brand">
          <Image
            src="/brand/gifted-garden-horizontal.webp"
            alt="Gifted Garden Childcare Service"
            width={1774}
            height={575}
            unoptimized
          />
          <span>Lomita Village · San Diego, CA 92114</span>
        </div>
        <div className="footer-links">
          <a href="#program">Program</a><a href="#reviews">Reviews</a><a href="#safety">Safety</a><a href="#tuition">Tuition</a><a href="#faq">FAQ</a><a href="#privacy">Privacy</a>
        </div>
        <p>Where every child blooms · Last reviewed July 23, 2026</p>
      </footer>

      <nav className="mobile-actions" aria-label="Mobile enrollment actions">
        <a href="#tour">Tour</a>
        <a href="tel:+16196461029">Call</a>
        <a href="#waitlist">Waitlist</a>
      </nav>

    </>
  );
}
