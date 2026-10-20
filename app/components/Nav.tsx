"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const links = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Resources", href: "#resources" },
  { label: "Community", href: "#community" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-cream/80 backdrop-blur-md shadow-[0_1px_0_rgba(0,0,0,0.06)]" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-14">
        <a href="#home" className="flex items-center gap-2.5 font-semibold tracking-tight text-bark">
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
        </a>

        <ul className="hidden items-center gap-10 text-[15px] text-bark md:flex">
          {links.map((l, i) => (
            <li key={l.href}>
              <a
                href={l.href}
                className={`relative transition-opacity hover:opacity-100 ${
                  i === 0 ? "font-semibold" : "opacity-70"
                }`}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="inline-flex items-center rounded-full bg-bark px-5 py-2.5 text-sm font-medium text-cream shadow-[0_4px_14px_rgba(0,0,0,0.18)] transition-transform hover:-translate-y-0.5"
        >
          Contact Us
        </a>
      </div>
    </motion.nav>
  );
}
