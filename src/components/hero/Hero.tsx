"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, ExternalLink, Mail } from "lucide-react";
import { profile, whatsappHref } from "@/data/profile";
import { Container } from "@/components/ui/Container";
import { HeroPortrait } from "@/components/hero/HeroPortrait";
import { HeroNetwork } from "@/components/hero/HeroNetwork";
import { DynamicRole } from "@/components/hero/DynamicRole";
import { HeroIndex } from "@/components/hero/HeroIndex";
import { LinkedInIcon, WhatsAppIcon } from "@/components/ui/icons";
import { useSafeReducedMotion } from "@/hooks/useSafeReducedMotion";

export function Hero() {
  const shouldReduceMotion = useSafeReducedMotion();
  const heroRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const contentY = useTransform(scrollYProgress, [0, 1], [0, -22]);
  const portraitY = useTransform(scrollYProgress, [0, 1], [0, -34]);

  const [nameFirst, ...nameRest] = profile.name.split(" ");
  const nameSecond = nameRest.join(" ");

  const containerVariants = {
    hidden: {},
    show: {
      transition: shouldReduceMotion
        ? {}
        : { staggerChildren: 0.12, delayChildren: 0.55 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 16 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0 : 0.55,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  };

  const lineVariants = {
    hidden: { y: shouldReduceMotion ? 0 : "100%" },
    show: {
      y: 0,
      transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative z-10 overflow-hidden pt-24 pb-12 md:pt-28 md:pb-16 lg:pt-32 lg:pb-20"
    >
      <HeroNetwork />

      <Container className="relative w-full">
        <motion.div
          style={shouldReduceMotion ? undefined : { y: contentY }}
          className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10"
        >
          <div className="max-w-xl">
            <motion.span
              initial={shouldReduceMotion ? false : { opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: shouldReduceMotion ? 0 : 0.1 }}
              className="section-label"
            >
              {profile.eyebrow}
            </motion.span>

            <h1 className="mt-5 text-5xl leading-[0.95] font-bold tracking-tight sm:text-6xl lg:text-7xl">
              <span className="block overflow-hidden">
                <motion.span
                  variants={lineVariants}
                  initial="hidden"
                  animate="show"
                  transition={{ delay: shouldReduceMotion ? 0 : 0.25 }}
                  className="block"
                >
                  {nameFirst}
                </motion.span>
              </span>
              <span className="block overflow-hidden">
                <motion.span
                  variants={lineVariants}
                  initial="hidden"
                  animate="show"
                  transition={{ delay: shouldReduceMotion ? 0 : 0.35 }}
                  className="block text-accent"
                >
                  {nameSecond}
                </motion.span>
              </span>
            </h1>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="show"
            >
              <motion.div variants={itemVariants}>
                <DynamicRole />
              </motion.div>

              <motion.p variants={itemVariants} className="text-body mt-5 max-w-lg">
                {profile.summary}
              </motion.p>

              <motion.div
                variants={itemVariants}
                className="mt-8 flex flex-wrap items-center gap-3"
              >
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-2 rounded-md bg-cta px-6 py-3.5 text-sm font-semibold text-cta-fg transition-colors hover:bg-accent hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
                >
                  Book a Consultation
                  <ArrowRight
                    size={16}
                    className="transition-transform group-hover:translate-x-0.5"
                  />
                </Link>
                <Link
                  href="/work"
                  className="group inline-flex items-center gap-2 rounded-md border border-hairline-strong bg-surface px-6 py-3.5 text-sm font-semibold text-fg transition-colors hover:border-accent hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
                >
                  View Selected Work
                  <ArrowRight
                    size={16}
                    className="transition-transform group-hover:translate-x-0.5"
                  />
                </Link>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2"
              >
                <a
                  href={`mailto:${profile.email}`}
                  className="inline-flex items-center gap-2 text-sm text-fg-muted transition-colors hover:text-accent"
                >
                  <Mail size={15} aria-hidden="true" />
                  Email Sajid
                </a>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Open ${profile.name}'s LinkedIn profile in a new tab`}
                  className="inline-flex items-center gap-2 text-sm text-fg-muted transition-colors hover:text-accent"
                >
                  <LinkedInIcon className="h-[15px] w-[15px]" />
                  LinkedIn
                  <ExternalLink size={11} aria-hidden="true" className="opacity-60" />
                </a>
                {whatsappHref ? (
                  <a
                    href={whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-fg-muted transition-colors hover:text-accent"
                  >
                    <WhatsAppIcon className="h-[15px] w-[15px]" />
                    WhatsApp
                  </a>
                ) : null}
              </motion.div>
            </motion.div>
          </div>

          <motion.div style={shouldReduceMotion ? undefined : { y: portraitY }}>
            <HeroPortrait />
          </motion.div>
        </motion.div>

        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: shouldReduceMotion ? 0 : 1.3, ease: [0.16, 1, 0.3, 1] }}
        >
          <HeroIndex />
        </motion.div>
      </Container>
    </section>
  );
}
