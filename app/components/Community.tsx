import Reveal from "./Reveal";

const testimonials = [
  { quote: "For the first time in years, I felt understood instead of judged.", name: "Maya R.", tag: "Member, 8 months" },
  { quote: "The 3am check-ins got me through my hardest nights. Truly.", name: "Daniel K.", tag: "Member, 1 year" },
  { quote: "It's gentle here. No one is trying to fix you — they just show up.", name: "Priya S.", tag: "Member, 5 months" },
  { quote: "I came for support and stayed for the friendships.", name: "Tomás L.", tag: "Member, 2 years" },
  { quote: "Small daily rituals from the group genuinely changed my mornings.", name: "Aisha M.", tag: "Member, 7 months" },
  { quote: "A soft landing on the days the world feels too loud.", name: "Erik V.", tag: "Member, 4 months" },
];

function Card({ quote, name, tag }: { quote: string; name: string; tag: string }) {
  return (
    <figure className="w-[340px] shrink-0 rounded-3xl border border-bark/8 bg-cream p-7">
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" className="text-sage">
        <path
          d="M10 7H6a2 2 0 00-2 2v4a2 2 0 002 2h2v-3M20 7h-4a2 2 0 00-2 2v4a2 2 0 002 2h2v-3"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <blockquote className="mt-4 font-display text-lg leading-snug text-bark">
        “{quote}”
      </blockquote>
      <figcaption className="mt-5 text-sm">
        <span className="font-semibold text-bark">{name}</span>
        <span className="text-stone"> · {tag}</span>
      </figcaption>
    </figure>
  );
}

export default function Community() {
  const row = [...testimonials, ...testimonials];
  return (
    <section id="community" className="overflow-hidden bg-fern py-28 text-cream">
      <div className="mx-auto max-w-7xl px-6 md:px-14">
        <Reveal>
          <span className="text-sm font-medium uppercase tracking-[0.2em] text-sage">
            Our community
          </span>
        </Reveal>
        <Reveal delay={1}>
          <h2 className="mt-4 max-w-2xl font-display text-4xl font-semibold leading-tight md:text-5xl">
            Thousands of people, holding space for each other.
          </h2>
        </Reveal>
        <Reveal delay={2}>
          <div className="mt-8 flex flex-wrap gap-x-12 gap-y-4 text-cream/80">
            <Stat value="24k+" label="members" />
            <Stat value="180+" label="support circles" />
            <Stat value="98%" label="feel less alone" />
          </div>
        </Reveal>
      </div>

      <div className="marquee-pause mt-16 flex w-full overflow-hidden">
        <div className="animate-marquee flex gap-6 pr-6">
          {row.map((t, i) => (
            <Card key={i} {...t} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <span className="font-display text-3xl font-semibold text-cream">{value}</span>{" "}
      <span className="text-sm">{label}</span>
    </div>
  );
}
