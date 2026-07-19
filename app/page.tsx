const programCards = [
  {
    tag: "Infant care",
    title: "A calm, responsive beginning",
    copy: "Age range, feeding support, and care schedule must be confirmed before publication.",
  },
  {
    tag: "Toddler care",
    title: "Room to move, wonder, and connect",
    copy: "Daily routines and potty-learning expectations must be confirmed before publication.",
  },
  {
    tag: "Preschool",
    title: "Playful preparation for what comes next",
    copy: "Enrollment ages, learning practices, and attendance options must be confirmed before publication.",
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

const faqs = [
  ["What ages does Gifted Garden accept?", "Infant, toddler, and preschool care are represented in this prototype. Exact ages and eligibility must be confirmed before publication."],
  ["What are the hours?", "Operating days, opening and closing times, holidays, and closure dates are awaiting owner confirmation."],
  ["Do you offer full-time or part-time care?", "Schedule options are being finalized. Families will be able to compare verified choices here before requesting a tour."],
  ["How much is tuition?", "Gifted Garden will publish a current tuition approach and complete fee summary before launch. No price is being advertised until it is verified."],
  ["Do you have openings?", "Availability changes by age and schedule. The live site will show an owner-reviewed status and update date. Placement is never guaranteed until admission is complete."],
  ["Are meals and snacks provided?", "Meal, snack, allergy, and family-supplied item policies must be confirmed. Medical records should never be sent through this website."],
  ["Does my child need to be potty trained?", "The program’s potty-learning policy will be stated here in plain language once confirmed."],
  ["How do rest and sick-child policies work?", "The daily rest routine and illness/return-to-care rules will be summarized here. Complete policies are reviewed during enrollment."],
  ["Is Gifted Garden licensed?", "The exact legal program type, business name, license status, and any publishable license number must be verified before launch."],
  ["Do you accept subsidies or military fee assistance?", "Military families are warmly welcomed. Current subsidy and fee-assistance participation must be confirmed directly and will never be presented as military endorsement."],
  ["How do tours work?", "Submit a request with a preferred time. Gifted Garden will review it before confirming a visit and sharing arrival details. A request or tour does not reserve a space."],
  ["How does the waitlist work?", "The live site will explain any fee, update timing, and lawful priority factors. Joining a waitlist will not guarantee placement or a numbered position."],
];

function LeafMark({ small = false }: { small?: boolean }) {
  return (
    <span className={small ? "leaf-mark small" : "leaf-mark"} aria-hidden="true">
      <span />
      <span />
      <i />
    </span>
  );
}

function DemoNotice() {
  return (
    <div className="prototype-notice" role="note">
      <strong>Local prototype</strong>
      <span>Sample content only. Business details and forms are not yet active.</span>
    </div>
  );
}

function EnrollmentForm({ kind }: { kind: "tour" | "waitlist" | "question" }) {
  const isTour = kind === "tour";
  const isWaitlist = kind === "waitlist";
  const title = isTour ? "Request a tour" : isWaitlist ? "Join the waitlist" : "Ask a question";
  const button = isTour ? "Tour form setup pending" : isWaitlist ? "Waitlist form setup pending" : "Inquiry form setup pending";

  return (
    <form className="enrollment-form" aria-labelledby={`${kind}-form-title`}>
      <div className="form-heading">
        <span className="eyebrow">{isTour ? "Care needed soon" : isWaitlist ? "Planning ahead" : "Need clarity first"}</span>
        <h3 id={`${kind}-form-title`}>{title}</h3>
        <p>
          {isTour
            ? "Tell us what care you need and when you would like to visit. Requests are reviewed before a time is confirmed."
            : isWaitlist
              ? "Share your timing and flexibility. Joining will not guarantee placement or a specific position."
              : "Send a short enrollment question. Urgent or existing-family communication should use the program’s verified direct channel."}
        </p>
      </div>

      <div className="form-grid">
        <label>
          Parent or guardian name <span aria-hidden="true">*</span>
          <input name={`${kind}-parent-name`} autoComplete="name" required />
        </label>
        <label>
          Email address <span aria-hidden="true">*</span>
          <input type="email" name={`${kind}-email`} autoComplete="email" inputMode="email" required />
        </label>
        {kind !== "question" && (
          <>
            <label>
              Phone number <span aria-hidden="true">*</span>
              <input type="tel" name={`${kind}-phone`} autoComplete="tel" inputMode="tel" required />
            </label>
            <label>
              Child’s age or birth month/year <span aria-hidden="true">*</span>
              <input name={`${kind}-age`} placeholder="Example: 2 years, or March 2024" required />
            </label>
            <label>
              Desired start date <span aria-hidden="true">*</span>
              <input type="month" name={`${kind}-start`} required />
            </label>
            <label>
              Schedule needed <span aria-hidden="true">*</span>
              <select name={`${kind}-schedule`} defaultValue="" required>
                <option value="" disabled>Select a schedule</option>
                <option>Full-time</option>
                <option>Part-time</option>
                <option>Not sure yet</option>
              </select>
            </label>
          </>
        )}
        {isTour && (
          <label className="full-field">
            Preferred tour day or time
            <input name="tour-preference" placeholder="Example: Tuesday after 4:00 PM" />
          </label>
        )}
        {isWaitlist && (
          <label className="full-field">
            What flexibility do you have?
            <textarea name="waitlist-flexibility" rows={3} placeholder="Start date, days, or hours that could flex" />
          </label>
        )}
        {kind === "question" && (
          <label className="full-field">
            Your question <span aria-hidden="true">*</span>
            <textarea name="question" rows={4} required />
          </label>
        )}
      </div>

      <label className="check-row">
        <input type="checkbox" name={`${kind}-contact-consent`} />
        <span>I understand Gifted Garden may contact me only about this request. This is not marketing consent.</span>
      </label>
      <label className="check-row">
        <input type="checkbox" name={`${kind}-marketing-consent`} />
        <span>Optional: I would like occasional program or availability updates. I can unsubscribe at any time.</span>
      </label>
      <p className="privacy-hint">
        Do not include medical, custody, financial, identification, benefit, or emergency information. Read the <a href="#privacy">privacy notice</a>.
      </p>
      <button className="button button-primary full-button" type="submit" disabled aria-disabled="true">
        {button}
      </button>
      <p className="form-status">A secure form provider, response workflow, retention policy, and verified contact fallback must be approved before this form is activated.</p>
    </form>
  );
}

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to main content</a>
      <DemoNotice />
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Gifted Garden home">
          <LeafMark small />
          <span>Gifted Garden</span>
        </a>
        <nav aria-label="Primary navigation">
          <a href="#program">Program</a>
          <a href="#families">Families</a>
          <a href="#safety">Safety</a>
          <a href="#tuition">Tuition</a>
          <a href="#faq">FAQ</a>
          <a href="#contact">Contact</a>
        </nav>
        <a className="button button-small button-primary header-cta" href="#tour">Request a Tour</a>
      </header>

      <main id="main">
        <section className="hero" id="top" aria-labelledby="hero-title">
          <div className="hero-art" aria-hidden="true">
            <span className="sun" />
            <span className="hill hill-one" />
            <span className="hill hill-two" />
            <span className="sprout sprout-one" />
            <span className="sprout sprout-two" />
            <span className="sprout sprout-three" />
          </div>
          <div className="hero-copy">
            <span className="eyebrow">Child care in Lomita Village · San Diego, CA 92114</span>
            <h1 id="hero-title">A thoughtful place for children to <em>learn, play, and grow.</em></h1>
            <p className="hero-lede">Gifted Garden is creating a warm path for families seeking infant, toddler, and preschool care. Exact ages and program details will be owner-verified before launch.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#tour">Request a Tour</a>
              <a className="button button-secondary" href="#waitlist">Join the Waitlist</a>
            </div>
            <p className="location-note">Located in Lomita Village in San Diego—not Lomita, California.</p>
          </div>
          <aside className="hero-card" aria-label="Program details awaiting verification">
            <LeafMark />
            <span className="eyebrow">Before publication</span>
            <h2>The essentials will be easy to verify.</h2>
            <ul>
              <li><span>Program type</span><strong>To be confirmed</strong></li>
              <li><span>Ages served</span><strong>To be confirmed</strong></li>
              <li><span>Hours</span><strong>To be confirmed</strong></li>
              <li><span>License information</span><strong>To be confirmed</strong></li>
            </ul>
          </aside>
        </section>

        <section className="trust-strip" aria-label="Key program information">
          <div><span>Location</span><strong>Lomita Village, San Diego</strong></div>
          <div><span>Program</span><strong>Infant through preschool prototype</strong></div>
          <div><span>Availability</span><strong>Owner update required</strong></div>
          <div><span>Next step</span><strong>Request a conversation or tour</strong></div>
        </section>

        <section className="section intro" id="program" aria-labelledby="philosophy-title">
          <div className="section-heading">
            <span className="eyebrow">Our philosophy</span>
            <h2 id="philosophy-title">Every child brings something worth nurturing.</h2>
          </div>
          <div className="intro-copy">
            <p className="large-copy">At Gifted Garden, the name is intended to celebrate each child’s interests, strengths, and ways of learning—not to suggest selective admission, diagnostic testing, or guaranteed academic advancement.</p>
            <p>The final philosophy will connect those values to observable daily practices such as play, stories, creativity, movement, outdoor exploration, and social-emotional support.</p>
          </div>
        </section>

        <section className="section soft-section" aria-labelledby="fit-title">
          <div className="section-heading centered">
            <span className="eyebrow">Program fit</span>
            <h2 id="fit-title">Find the care path that fits your child.</h2>
            <p>These program labels come from the earlier concept. Exact age ranges, capacity, schedules, and requirements remain publication blockers.</p>
          </div>
          <div className="card-grid">
            {programCards.map((card, index) => (
              <article className="program-card" key={card.tag}>
                <span className="card-number">0{index + 1}</span>
                <span className="eyebrow">{card.tag}</span>
                <h3>{card.title}</h3>
                <p>{card.copy}</p>
              </article>
            ))}
          </div>
          <div className="inline-note"><strong>Potty learning:</strong> The program’s expectation will be explained here in plain language once confirmed.</div>
        </section>

        <section className="section day-section" aria-labelledby="day-title">
          <div className="day-intro">
            <span className="eyebrow">A sample day</span>
            <h2 id="day-title">Familiar rhythms, with room to explore.</h2>
            <p>This is an experience outline—not a published timetable. Times, meals, rest, outdoor routines, and age-specific adjustments must be confirmed.</p>
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

        <section className="section gallery-section" aria-labelledby="gallery-title">
          <div className="section-heading">
            <span className="eyebrow">The environment</span>
            <h2 id="gallery-title">See the real space before you decide.</h2>
            <p>Current, permission-cleared photographs of the actual Gifted Garden environment will replace these labeled placeholders. Stock images will not be presented as the facility.</p>
          </div>
          <div className="gallery-grid" aria-label="Photo plan for the actual program environment">
            {["Welcome & arrival", "Learning & creativity", "Indoor play", "Meals & routines", "Rest space", "Outdoor play"].map((label, index) => (
              <div className={`photo-placeholder photo-${index + 1}`} key={label}>
                <LeafMark small />
                <span>Future authentic photo</span>
                <strong>{label}</strong>
              </div>
            ))}
          </div>
        </section>

        <section className="provider-section" aria-labelledby="provider-title">
          <div className="provider-portrait" role="img" aria-label="Provider photograph placeholder">
            <div className="portrait-shape" aria-hidden="true" />
            <span>Verified provider photo</span>
          </div>
          <div className="provider-copy">
            <span className="eyebrow">Meet the provider</span>
            <h2 id="provider-title">Care begins with the person families trust.</h2>
            <p>The owner or lead provider’s professional name, role, experience, education, CPR/first-aid status, background-check information, and approved photograph must be supplied before publication.</p>
            <blockquote>“We will replace this space with a factual provider introduction—not a fabricated testimonial or unsupported credential.”</blockquote>
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
          <p className="safety-footnote">Specific procedures must be verified before publication and will never expose access-control details, attendance patterns, or children’s schedules.</p>
        </section>

        <section className="section details-section" id="tuition" aria-labelledby="details-title">
          <div className="section-heading">
            <span className="eyebrow">Practical details</span>
            <h2 id="details-title">The facts families need to make a real decision.</h2>
          </div>
          <div className="details-grid">
            <article><span>01</span><h3>Hours & schedules</h3><p>Days, hours, holidays, closures, and full-time or part-time options are pending owner confirmation.</p></article>
            <article><span>02</span><h3>Tuition & fees</h3><p>The owner will choose an exact price, starting price, range, or “request current tuition” approach and disclose routine fees.</p></article>
            <article><span>03</span><h3>Availability</h3><p>The live status will distinguish openings, limited openings, and waitlist by age, with an owner and last-reviewed date.</p></article>
          </div>
          <div className="decision-row">
            <div><strong>Need care soon?</strong><span>Request a tour and availability conversation.</span><a href="#tour">Request a Tour</a></div>
            <div><strong>Planning ahead?</strong><span>Join the appropriate future-care pipeline.</span><a href="#waitlist">Join the Waitlist</a></div>
            <div><strong>Still deciding?</strong><span>Ask a short, non-sensitive question first.</span><a href="#contact">Ask a Question</a></div>
          </div>
        </section>

        <section className="military-section" id="families" aria-labelledby="military-title">
          <div>
            <span className="eyebrow">Military-connected families</span>
            <h2 id="military-title">A warm welcome—and straightforward answers.</h2>
          </div>
          <div>
            <p>Gifted Garden welcomes military families and understands the need for clarity about timing, schedules, location, availability, and benefits.</p>
            <p><strong>Fee-assistance participation is being verified.</strong> The site will not claim MCCYN or MCCYN-PLUS approval until documentation is confirmed, and it will never imply endorsement by the U.S. Department of Defense or a military branch.</p>
            <a className="text-link" href="https://www.childcareaware.org/fee-assistancerespite/military-families/" rel="noreferrer">Review official military child-care assistance information <span aria-hidden="true">↗</span></a>
          </div>
        </section>

        <section className="section enrollment-section" aria-labelledby="enrollment-title">
          <div className="section-heading centered">
            <span className="eyebrow">Enrollment</span>
            <h2 id="enrollment-title">A clear path from first question to next step.</h2>
          </div>
          <ol className="steps-list">
            <li><span>1</span><h3>Check the basics</h3><p>Review ages, hours, tuition, availability, and location.</p></li>
            <li><span>2</span><h3>Choose your path</h3><p>Tour for near-term care; waitlist for later plans.</p></li>
            <li><span>3</span><h3>Visit and ask</h3><p>Meet the provider and review routines and policies.</p></li>
            <li><span>4</span><h3>Enroll securely</h3><p>Provide sensitive records later through an approved system.</p></li>
          </ol>
          <p className="center-note">A tour request, visit, or waitlist entry does not reserve or guarantee a space.</p>
        </section>

        <section className="form-section" id="tour" aria-labelledby="tour-section-title">
          <div className="form-section-copy">
            <span className="eyebrow">Primary next step</span>
            <h2 id="tour-section-title">Come see whether Gifted Garden feels right.</h2>
            <p>Tour length, child attendance guidance, identification requirements, response time, cancellation process, and exact-location workflow must be confirmed before this form goes live.</p>
            <ul>
              <li>Requests are reviewed before confirmation.</li>
              <li>A requested time is not booked until confirmed.</li>
              <li>Exact arrival details may be withheld until review.</li>
              <li>A tour does not reserve an enrollment space.</li>
            </ul>
          </div>
          <EnrollmentForm kind="tour" />
        </section>

        <section className="form-section alternate" id="waitlist" aria-labelledby="waitlist-section-title">
          <div className="form-section-copy">
            <span className="eyebrow">For future care</span>
            <h2 id="waitlist-section-title">Plan ahead without false promises.</h2>
            <p>The waitlist’s cost, update timing, withdrawal process, and lawful priority factors must be confirmed. Gifted Garden will not promise a numbered position unless it can be maintained accurately.</p>
            <ul>
              <li>Placement is never guaranteed.</li>
              <li>Age-group capacity and schedule fit may matter.</li>
              <li>Families will have a clear update or withdrawal path.</li>
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

        <section className="location-section" aria-labelledby="location-title">
          <div className="map-card" aria-hidden="true">
            <span className="map-road road-one" />
            <span className="map-road road-two" />
            <span className="map-dot"><LeafMark small /></span>
            <strong>Lomita Village</strong>
            <small>San Diego · 92114</small>
          </div>
          <div>
            <span className="eyebrow">Location</span>
            <h2 id="location-title">Child care in Lomita Village, San Diego.</h2>
            <p>Gifted Garden serves families in Lomita Village and the surrounding San Diego area. If the program is home-based, the complete address and arrival instructions will be shared only after a tour request is reviewed and confirmed.</p>
            <p className="inline-note"><strong>Directions link:</strong> A privacy-safe, verified destination must be approved before publication.</p>
          </div>
        </section>

        <section className="contact-section" id="contact" aria-labelledby="contact-title">
          <div className="contact-copy">
            <span className="eyebrow">Contact</span>
            <h2 id="contact-title">A short question is a good place to start.</h2>
            <p>The business phone, authorized text number, email, calling hours, voicemail expectations, and existing-family contact path must be verified before launch.</p>
            <div className="contact-placeholder">
              <span>Phone & text</span><strong>To be confirmed</strong>
              <span>Email</span><strong>To be confirmed</strong>
              <span>Response time</span><strong>To be confirmed</strong>
            </div>
            <p>Do not use a website form, email, or text for emergencies or sensitive child information.</p>
          </div>
          <EnrollmentForm kind="question" />
        </section>

        <section className="privacy-section" id="privacy" aria-labelledby="privacy-title">
          <span className="eyebrow">Plain-language privacy notice · draft</span>
          <h2 id="privacy-title">Collect less. Explain clearly. Protect family information.</h2>
          <div className="privacy-columns">
            <div><h3>What the forms will collect</h3><p>Only the limited parent contact, child age or birth month/year, timing, schedule, and request information shown above—solely to respond and evaluate program fit.</p></div>
            <div><h3>What not to send</h3><p>Never submit medical, immunization, custody, identification, Social Security, financial, benefit, or emergency information through this website.</p></div>
            <div><h3>What must be approved</h3><p>The form provider, recipients, retention and deletion process, privacy contact, analytics choice, and exact consent language must be documented before activation.</p></div>
          </div>
          <p className="privacy-bottom">No analytics are enabled in this prototype. Operational contact consent will remain separate from optional, unselected marketing consent. Effective and last-updated dates will be added when the policy is approved.</p>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-brand"><LeafMark small /><strong>Gifted Garden</strong><span>Lomita Village · San Diego, CA 92114</span></div>
        <div className="footer-links">
          <a href="#program">Program</a><a href="#safety">Safety</a><a href="#tuition">Tuition</a><a href="#faq">FAQ</a><a href="#privacy">Privacy</a>
        </div>
        <p>Local prototype for owner review. Not ready for public enrollment.</p>
      </footer>

      <nav className="mobile-actions" aria-label="Mobile enrollment actions">
        <a href="#tour">Tour</a>
        <a href="#contact">Call</a>
        <a href="#waitlist">Waitlist</a>
      </nav>

    </>
  );
}
