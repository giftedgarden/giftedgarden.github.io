"use client";

import { useState } from "react";
import type { FormEvent } from "react";

type FormKind = "tour" | "question";

const destination = "giftedgarden1@gmail.com";

const formCopy = {
  tour: {
    eyebrow: "Care needed soon",
    title: "Request a tour",
    intro: "Tell us what care you need and when you would like to visit. Requests are reviewed before a time is confirmed.",
    button: "Prepare Tour Request Email",
    subject: "Gifted Garden Tour Request",
  },
  question: {
    eyebrow: "Need clarity first",
    title: "Ask a question",
    intro: "Prepare a short enrollment question. Urgent or existing-family communication should use the program’s verified direct channel.",
    button: "Prepare Question Email",
    subject: "Question for Gifted Garden",
  },
} as const;

function field(data: FormData, name: string) {
  const value = data.get(name);
  return typeof value === "string" ? value.trim() : "";
}

function checked(data: FormData, name: string) {
  return data.get(name) === "on" ? "Yes" : "No";
}

export function EnrollmentForm({ kind }: { kind: FormKind }) {
  const [prepared, setPrepared] = useState(false);
  const copy = formCopy[kind];
  const isTour = kind === "tour";
  const isQuestion = kind === "question";

  function prepareEmail(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const lines = [
      copy.subject,
      "",
      `Parent or guardian: ${field(data, "parent-name")}`,
      `Email: ${field(data, "email")}`,
      `Phone: ${field(data, "phone") || "Not provided"}`,
      `Preferred contact: ${field(data, "preferred-contact")}`,
      `How they heard about Gifted Garden: ${field(data, "referral-source")}`,
    ];

    if (!isQuestion) {
      lines.push(
        `Child’s age or birth month/year: ${field(data, "child-age")}`,
        `Desired start: ${field(data, "desired-start")}`,
        `Schedule needed: ${field(data, "schedule")}`,
      );
    }

    if (isTour) lines.push(`Preferred tour day/time: ${field(data, "tour-preference") || "No preference provided"}`);
    if (isQuestion) lines.push("", "Question:", field(data, "question"));

    lines.push(
      "",
      "Operational contact consent: Yes",
      `Optional marketing updates: ${checked(data, "marketing-consent")}`,
      "",
      "I understand that this email does not confirm a tour, reserve a space, or guarantee placement.",
    );

    const mailto = `mailto:${destination}?subject=${encodeURIComponent(copy.subject)}&body=${encodeURIComponent(lines.join("\n"))}`;
    setPrepared(true);
    window.location.assign(mailto);
  }

  return (
    <form className="enrollment-form" aria-labelledby={`${kind}-form-title`} onSubmit={prepareEmail}>
      <div className="form-heading">
        <span className="eyebrow">{copy.eyebrow}</span>
        <h3 id={`${kind}-form-title`}>{copy.title}</h3>
        <p>{copy.intro}</p>
      </div>

      <div className="form-grid">
        <label>
          Parent or guardian name <span aria-hidden="true">*</span>
          <input name="parent-name" autoComplete="name" required />
        </label>
        <label>
          Email address <span aria-hidden="true">*</span>
          <input type="email" name="email" autoComplete="email" inputMode="email" required />
        </label>
        <label>
          Phone number {isQuestion ? "(optional)" : <span aria-hidden="true">*</span>}
          <input type="tel" name="phone" autoComplete="tel" inputMode="tel" required={!isQuestion} />
        </label>
        <label>
          Preferred contact <span aria-hidden="true">*</span>
          <select name="preferred-contact" defaultValue="" required>
            <option value="" disabled>Select a contact method</option>
            <option>Email</option>
            <option>Phone call</option>
          </select>
        </label>

        <label className="full-field">
          How did you hear about Gifted Garden? <span aria-hidden="true">*</span>
          <select name="referral-source" defaultValue="" required>
            <option value="" disabled>Select one</option>
            <option>Family or friend</option>
            <option>Google search or map</option>
            <option>Military family resource</option>
            <option>Child-care assistance agency</option>
            <option>Community partner</option>
            <option>Other</option>
          </select>
        </label>

        {!isQuestion && (
          <>
            <label>
              Child’s age or birth month/year <span aria-hidden="true">*</span>
              <input name="child-age" placeholder="Example: 2 years, or March 2024" required />
            </label>
            <label>
              Desired start date <span aria-hidden="true">*</span>
              <input type="month" name="desired-start" required />
            </label>
            <label className="full-field">
              Schedule needed <span aria-hidden="true">*</span>
              <select name="schedule" defaultValue="" required>
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
        {isQuestion && (
          <label className="full-field">
            Your question <span aria-hidden="true">*</span>
            <textarea name="question" rows={4} required />
          </label>
        )}
      </div>

      <label className="check-row">
        <input type="checkbox" name="contact-consent" required />
        <span>I agree that Gifted Garden may contact me about this request. This is not marketing consent. <span aria-hidden="true">*</span></span>
      </label>
      <label className="check-row">
        <input type="checkbox" name="marketing-consent" />
        <span>Optional: I would like occasional program or availability updates. I can unsubscribe at any time.</span>
      </label>
      <p className="privacy-hint">
        Do not include medical, custody, financial, identification, benefit, or emergency information. Read the <a href="#privacy">privacy notice</a>.
      </p>
      <button className="button button-primary full-button" type="submit">{copy.button}</button>
      <p className={prepared ? "form-status prepared" : "form-status"} role="status" aria-live="polite">
        {prepared
          ? "Your email app should be open with a prepared message. Your request is not sent until you review it and press Send."
          : `Selecting this button opens your email app with a prepared message to ${destination}. Nothing is sent automatically.`}
      </p>
      <p className="direct-fallback">Email app did not open? <a href={`mailto:${destination}`}>Email Gifted Garden directly</a> or call <a href="tel:+16196461029">(619) 646-1029</a>.</p>
    </form>
  );
}
