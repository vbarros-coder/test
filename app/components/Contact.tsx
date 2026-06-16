"use client";

import { useState } from "react";
import Reveal from "./Reveal";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "ok" | "error">("idle");
  const [feedback, setFeedback] = useState("");

  function update(key: keyof typeof form) {
    return (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm((f) => ({ ...f, [key]: e.target.value }));
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      setStatus(res.ok ? "ok" : "error");
      setFeedback(res.ok ? data.message : data.error);
      if (res.ok) setForm({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
      setFeedback("Network error — please try again.");
    }
  }

  return (
    <section id="contact" className="bg-cream px-6 py-28 md:px-14">
      <div className="mx-auto grid max-w-6xl gap-14 lg:grid-cols-2 lg:gap-20">
        <div>
          <Reveal>
            <span className="text-sm font-medium uppercase tracking-[0.2em] text-sage">
              Contact us
            </span>
          </Reveal>
          <Reveal delay={1}>
            <h2 className="mt-4 font-display text-4xl font-semibold leading-tight text-bark md:text-5xl">
              Reach out. We&apos;re listening.
            </h2>
          </Reveal>
          <Reveal delay={2}>
            <p className="mt-5 max-w-md text-lg text-stone">
              Whether you have a question, need guidance, or just want to say
              hello — there&apos;s a real person on the other side.
            </p>
          </Reveal>
          <Reveal delay={3}>
            <div className="mt-8 space-y-3 text-bark">
              <p className="flex items-center gap-3">
                <span className="text-sage">✉</span> hello@wellora.community
              </p>
              <p className="flex items-center gap-3">
                <span className="text-sage">⟡</span> Crisis support is available 24/7
              </p>
            </div>
          </Reveal>
        </div>

        <Reveal delay={1}>
          <form
            onSubmit={onSubmit}
            className="rounded-3xl border border-bark/8 bg-white/70 p-7 md:p-9"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Name">
                <input
                  required
                  value={form.name}
                  onChange={update("name")}
                  className="input"
                  placeholder="Your name"
                />
              </Field>
              <Field label="Email">
                <input
                  required
                  type="email"
                  value={form.email}
                  onChange={update("email")}
                  className="input"
                  placeholder="you@email.com"
                />
              </Field>
            </div>
            <div className="mt-4">
              <Field label="Message">
                <textarea
                  required
                  rows={4}
                  value={form.message}
                  onChange={update("message")}
                  className="input resize-none"
                  placeholder="How can we support you?"
                />
              </Field>
            </div>
            <button
              type="submit"
              disabled={status === "loading"}
              className="mt-6 w-full rounded-full bg-bark px-7 py-3.5 font-medium text-cream transition-transform hover:-translate-y-0.5 disabled:opacity-60"
            >
              {status === "loading" ? "Sending…" : "Send message"}
            </button>
            {feedback && (
              <p
                className={`mt-4 text-sm ${status === "ok" ? "text-fern" : "text-red-700"}`}
                role="status"
              >
                {feedback}
              </p>
            )}
          </form>
        </Reveal>
      </div>

      <style>{`
        .input {
          width: 100%;
          border-radius: 0.9rem;
          border: 1px solid rgba(43,42,38,0.15);
          background: rgba(255,255,255,0.8);
          padding: 0.7rem 1rem;
          color: #2b2a26;
          outline: none;
          transition: box-shadow 0.2s;
        }
        .input:focus { box-shadow: 0 0 0 2px rgba(124,154,126,0.5); }
        .input::placeholder { color: rgba(107,106,99,0.6); }
      `}</style>
    </section>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-medium text-bark">{label}</span>
      {children}
    </label>
  );
}
