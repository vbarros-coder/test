export default function Footer() {
  const groups = [
    { title: "Explore", links: ["Home", "About Us", "Resources", "Community"] },
    { title: "Support", links: ["Get help now", "Crisis lines", "FAQ", "Contact"] },
    { title: "Company", links: ["Our mission", "Careers", "Privacy", "Terms"] },
  ];
  return (
    <footer className="bg-bark px-6 py-16 text-cream/80 md:px-14">
      <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-[1.5fr_repeat(3,1fr)]">
        <div>
          <div className="flex items-center gap-2.5 font-semibold text-cream">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path
                d="M3 6 L7 18 L10.5 9 L12 12 L13.5 9 L17 18 L21 6"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="text-lg">Wellora</span>
          </div>
          <p className="mt-4 max-w-xs text-sm leading-relaxed">
            A safe space for mental health support. You don&apos;t have to do
            this alone.
          </p>
        </div>
        {groups.map((g) => (
          <div key={g.title}>
            <h4 className="text-sm font-semibold text-cream">{g.title}</h4>
            <ul className="mt-4 space-y-2.5 text-sm">
              {g.links.map((l) => (
                <li key={l}>
                  <a href="#" className="transition-colors hover:text-cream">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="mx-auto mt-14 max-w-7xl border-t border-cream/15 pt-6 text-sm text-cream/60">
        © {new Date().getFullYear()} Wellora. If you are in crisis, please
        contact your local emergency services.
      </div>
    </footer>
  );
}
