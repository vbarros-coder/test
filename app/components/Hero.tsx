"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import JoinForm from "./JoinForm";

const ease = [0.22, 1, 0.36, 1] as const;

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  // Parallax: content drifts up and fades as you scroll past the hero
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section
      id="home"
      ref={ref}
      className="relative min-h-[760px] w-full overflow-hidden bg-[#b8c7b2]"
    >
      {/* Animated forest background */}
      <div
        className="hero-kenburns absolute -inset-[4%] bg-cover bg-[center_55%]"
        style={{ backgroundImage: "url('/forest-hero.jpg')" }}
      />
      <div
        className="hero-fog-a pointer-events-none absolute -inset-[20%]"
        style={{
          background:
            "radial-gradient(50% 40% at 30% 45%, rgba(236,240,233,0.55) 0%, rgba(236,240,233,0) 60%), radial-gradient(60% 50% at 50% 70%, rgba(214,224,210,0.4) 0%, rgba(214,224,210,0) 65%)",
        }}
      />
      <div
        className="hero-fog-b pointer-events-none absolute -inset-[20%] mix-blend-screen"
        style={{
          background:
            "radial-gradient(45% 35% at 70% 55%, rgba(225,232,222,0.45) 0%, rgba(225,232,222,0) 60%)",
        }}
      />
      <div
        className="hero-glow pointer-events-none absolute bottom-[14%] left-1/2 h-[34%] w-[42%] -translate-x-1/2 blur-md"
        style={{
          background:
            "radial-gradient(ellipse 50% 50% at 50% 50%, rgba(255,244,214,0.55) 0%, rgba(255,236,190,0.28) 35%, rgba(255,230,170,0) 70%)",
        }}
      />
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 55% at 50% 38%, rgba(230,232,225,0.85) 0%, rgba(220,225,215,0.55) 45%, rgba(180,195,175,0.15) 75%, rgba(0,0,0,0) 100%)",
        }}
      />

      {/* Content */}
      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative z-10 mx-auto flex max-w-4xl flex-col items-center px-6 pt-44 pb-28 text-center"
      >
        <motion.span
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-bark/15 bg-white/50 px-4 py-1.5 text-sm text-bark backdrop-blur"
        >
          <span className="h-2 w-2 rounded-full bg-sage" />
          You don&apos;t have to do this alone
        </motion.span>

        <h1 className="font-display text-5xl font-semibold leading-[1.04] tracking-tight text-bark md:text-7xl">
          {["A Safe Space for", "Mental Health Support"].map((line, i) => (
            <span key={line} className="block overflow-hidden">
              <motion.span
                initial={{ y: "110%" }}
                animate={{ y: "0%" }}
                transition={{ duration: 0.9, delay: 0.1 + i * 0.12, ease }}
                className="block"
              >
                {line}
              </motion.span>
            </span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5, ease }}
          className="mt-7 max-w-xl text-[17px] leading-relaxed text-bark/80"
        >
          Connect with people who understand your challenges and receive
          encouragement throughout your recovery journey.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.65, ease }}
          className="mt-10 flex justify-center"
        >
          <JoinForm />
        </motion.div>
      </motion.div>
    </section>
  );
}
