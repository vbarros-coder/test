import Reveal from "./Reveal";

const features = [
  {
    title: "Peer support groups",
    body: "Small, moderated circles where you can speak freely with people walking a similar path.",
    icon: "M4 18c2-4 6-6 8-6s6 2 8 6M12 3v3M7 7l-1.5-1.5M17 7l1.5-1.5",
  },
  {
    title: "Guided self-care",
    body: "Gentle, science-backed exercises for grounding, sleep, and managing difficult days.",
    icon: "M12 21s-7-4.5-7-10a4 4 0 017-2.6A4 4 0 0119 11c0 5.5-7 10-7 10z",
  },
  {
    title: "Always available",
    body: "A calm community that's here at 3pm or 3am — whenever the weight feels heavy.",
    icon: "M12 7v5l3 2M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
  },
  {
    title: "Private by design",
    body: "Share as much or as little as you like. Your story stays yours, always.",
    icon: "M6 11V8a6 6 0 1112 0v3M5 11h14v9H5z",
  },
];

export default function Features() {
  return (
    <section id="about" className="relative bg-cream px-6 py-28 md:px-14">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-2xl">
          <Reveal>
            <span className="text-sm font-medium uppercase tracking-[0.2em] text-sage">
              How we help
            </span>
          </Reveal>
          <Reveal delay={1}>
            <h2 className="mt-4 font-display text-4xl font-semibold leading-tight text-bark md:text-5xl">
              Support that meets you{" "}
              <span className="italic text-fern">where you are</span>.
            </h2>
          </Reveal>
          <Reveal delay={2}>
            <p className="mt-5 text-lg text-stone">
              No diagnosis required, no pressure to perform. Just a warm,
              understanding space built around your wellbeing.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f, i) => (
            <Reveal key={f.title} delay={i}>
              <div className="group h-full rounded-3xl border border-bark/8 bg-white/70 p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(63,92,67,0.12)]">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sage/15 text-fern transition-colors group-hover:bg-sage/25">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path
                      d={f.icon}
                      stroke="currentColor"
                      strokeWidth="1.7"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h3 className="mt-5 font-display text-xl font-semibold text-bark">
                  {f.title}
                </h3>
                <p className="mt-2 text-[15px] leading-relaxed text-stone">
                  {f.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
