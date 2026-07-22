"use client";

import { useState } from "react";

const referralMessage = "Gifted Garden offers small-group family home child care for children from birth through age 5 in Lomita Village, San Diego. Learn about the provider, program, and tour process:";

export function ReferralTools() {
  const [status, setStatus] = useState("");

  async function share() {
    const payload = { title: "Gifted Garden Child Care", text: referralMessage, url: window.location.href };

    try {
      if (navigator.share) {
        await navigator.share(payload);
        setStatus("The share menu opened.");
        return;
      }

      await navigator.clipboard.writeText(`${referralMessage} ${window.location.href}`);
      setStatus("Referral message and link copied.");
    } catch (error) {
      if ((error as DOMException).name !== "AbortError") {
        setStatus("Sharing was not available. Copy the page address from your browser.");
      }
    }
  }

  return (
    <div className="referral-card">
      <p>{referralMessage}</p>
      <button className="button button-primary" type="button" onClick={share}>Share this page</button>
      <p className="share-status" role="status" aria-live="polite">{status}</p>
    </div>
  );
}
