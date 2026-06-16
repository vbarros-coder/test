"use client";

import { useState } from "react";

type Status = "idle" | "loading" | "ok" | "error";

export default function JoinForm({ compact = false }: { compact?: boolean }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [feedback, setFeedback] = useState("");

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setFeedback("");
    try {
      const res = await fetch("/api/join", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email }),
      });
      const data = await res.json();
      if (res.ok) {
        setStatus("ok");
        setFeedback(data.message ?? "You're in.");
        setName("");
        setEmail("");
      } else {
        setStatus("error");
        setFeedback(data.error ?? "Something went wrong.");
      }
    } catch {
      setStatus("error");
      setFeedback("Network error — please try again.");
    }
  }

  return (
    <form onSubmit={onSubmit} className="w-full max-w-md">
      <div
        className={`flex flex-col gap-3 ${
          compact ? "sm:flex-row" : "sm:flex-row sm:items-center"
        }`}
      >
        {!compact && (
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name"
            aria-label="Your name"
            className="w-full rounded-full border border-bark/15 bg-white/80 px-5 py-3 text-bark outline-none ring-sage/40 transition focus:ring-2"
          />
        )}
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@email.com"
          aria-label="Email address"
          className="w-full rounded-full border border-bark/15 bg-white/80 px-5 py-3 text-bark outline-none ring-sage/40 transition focus:ring-2"
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="shrink-0 rounded-full bg-bark px-7 py-3 font-medium text-cream shadow-[0_12px_28px_rgba(0,0,0,0.25)] transition-transform hover:-translate-y-0.5 disabled:opacity-60"
        >
          {status === "loading" ? "Joining…" : "Join Today"}
        </button>
      </div>
      {compact && (
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your name"
          aria-label="Your name"
          className="mt-3 w-full rounded-full border border-bark/15 bg-white/80 px-5 py-3 text-bark outline-none ring-sage/40 transition focus:ring-2"
        />
      )}
      {feedback && (
        <p
          className={`mt-3 text-sm ${
            status === "ok" ? "text-fern" : "text-red-700"
          }`}
          role="status"
        >
          {feedback}
        </p>
      )}
    </form>
  );
}
