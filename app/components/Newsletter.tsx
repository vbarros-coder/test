"use client";

import { useState } from "react";
import Reveal from "./Reveal";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "ok" | "error">("idle");
  const [feedback, setFeedback] = useState("");

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      setStatus(res.ok ? "ok" : "error");
      setFeedback(res.ok ? data.message : data.error);
      if (res.ok) setEmail("");
    } catch {
      setStatus("error");
      setFeedback("Network error — please try again.");
    }
  }

  return (
    <section className="bg-sage/15 px-6 py-24 md:px-14">
      <Reveal>
        <div className="mx-auto max-w-3xl rounded-[2rem] bg-bark px-8 py-14 text-center text-cream md:px-16">
          <h2 className="font-display text-3xl font-semibold leading-tight md:text-4xl">
            A gentle note in your inbox each week.
          </h2>
          <p className="mx-auto mt-3 max-w-md text-cream/70">
            Reflections, grounding practices, and reminders that you&apos;re
            doing better than you think.
          </p>
          <form
            onSubmit={onSubmit}
            className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row"
          >
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@email.com"
              aria-label="Email address"
              className="w-full rounded-full bg-cream/10 px-5 py-3 text-cream placeholder:text-cream/50 outline-none ring-sage/50 transition focus:ring-2"
            />
            <button
              type="submit"
              disabled={status === "loading"}
              className="shrink-0 rounded-full bg-cream px-7 py-3 font-medium text-bark transition-transform hover:-translate-y-0.5 disabled:opacity-60"
            >
              {status === "loading" ? "…" : "Subscribe"}
            </button>
          </form>
          {feedback && (
            <p
              className={`mt-4 text-sm ${status === "ok" ? "text-sage" : "text-red-300"}`}
              role="status"
            >
              {feedback}
            </p>
          )}
        </div>
      </Reveal>
    </section>
  );
}
