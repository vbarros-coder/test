"use client";

import { useEffect, useState } from "react";
import Reveal from "./Reveal";
import type { Resource } from "@/app/lib/resources";

export default function Resources() {
  const [items, setItems] = useState<Resource[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let active = true;
    fetch("/api/resources")
      .then((r) => r.json())
      .then((d) => {
        if (active) {
          setItems(d.resources ?? []);
          setLoading(false);
        }
      })
      .catch(() => active && setLoading(false));
    return () => {
      active = false;
    };
  }, []);

  return (
    <section id="resources" className="bg-cream px-6 py-28 md:px-14">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <Reveal>
              <span className="text-sm font-medium uppercase tracking-[0.2em] text-sage">
                Resources
              </span>
            </Reveal>
            <Reveal delay={1}>
              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight text-bark md:text-5xl">
                Words for the hard days.
              </h2>
            </Reveal>
          </div>
          <Reveal delay={2}>
            <a
              href="#resources"
              className="rounded-full border border-bark/15 px-5 py-2.5 text-sm font-medium text-bark transition-colors hover:bg-bark hover:text-cream"
            >
              Browse all articles
            </a>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {loading
            ? Array.from({ length: 6 }).map((_, i) => (
                <div
                  key={i}
                  className="h-56 animate-pulse rounded-3xl bg-bark/5"
                />
              ))
            : items.map((r, i) => (
                <Reveal key={r.slug} delay={i % 3}>
                  <article className="group flex h-full flex-col rounded-3xl border border-bark/8 bg-white/70 p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(63,92,67,0.12)]">
                    <span
                      className="inline-flex w-fit items-center rounded-full px-3 py-1 text-xs font-medium"
                      style={{ backgroundColor: `${r.accent}22`, color: r.accent }}
                    >
                      {r.category}
                    </span>
                    <h3 className="mt-4 font-display text-xl font-semibold leading-snug text-bark">
                      {r.title}
                    </h3>
                    <p className="mt-2 flex-1 text-[15px] leading-relaxed text-stone">
                      {r.excerpt}
                    </p>
                    <div className="mt-5 flex items-center justify-between text-sm text-stone">
                      <span>{r.readingTime}</span>
                      <span className="inline-flex items-center gap-1 font-medium text-fern transition-transform group-hover:translate-x-1">
                        Read
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                          <path
                            d="M5 12h14M13 6l6 6-6 6"
                            stroke="currentColor"
                            strokeWidth="1.8"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                    </div>
                  </article>
                </Reveal>
              ))}
        </div>
      </div>
    </section>
  );
}
