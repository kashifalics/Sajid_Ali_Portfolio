"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";
import { profile, whatsappHref } from "@/data/profile";
import { Container } from "@/components/ui/Container";
import { DynamicTitle } from "@/components/hero/DynamicTitle";
import { HeroOrbit } from "@/components/hero/HeroOrbit";
import { LinkedInIcon, WhatsAppIcon } from "@/components/ui/icons";

export function Hero() {
  const shouldReduceMotion = useReducedMotion();

  const containerVariants = {
    hidden: {},
    show: {
      transition: shouldReduceMotion
        ? {}
        : { staggerChildren: 0.12, delayChildren: 0.05 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 18 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0 : 0.6,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  };

  return (
    <section id="home" className="relative z-10 scroll-mt-28 pt-32 pb-16 md:pb-20">
      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="max-w-xl"
          >
            <motion.span variants={itemVariants} className="section-label">
              {profile.eyebrow}
            </motion.span>

            <motion.h1
              variants={itemVariants}
              className="mt-6 text-3xl font-bold tracking-tight text-balance sm:text-4xl lg:text-5xl"
            >
              <span className="text-fg-muted">Hi, I&apos;m</span>
              <br />
              <span className="text-fg">{profile.name}</span>
            </motion.h1>

            <motion.div variants={itemVariants} className="mt-4">
              <DynamicTitle />
            </motion.div>

            <motion.p variants={itemVariants} className="text-body mt-2 max-w-lg">
              {profile.summary}
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="mt-8 flex items-center gap-3"
            >
              <span className="h-px w-8 bg-accent/60" />
              <span className="text-xs font-semibold tracking-[0.2em] text-fg-faint uppercase">
                <span className="text-gold">{profile.yearsExperience}</span> Years
                of Experience
              </span>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              <a
                href="#work"
                className="group inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-fg transition-all hover:-translate-y-0.5 hover:shadow-[0_8px_20px_-4px_rgba(0,0,0,0.5)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
              >
                View Selected Work
                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-0.5"
                />
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Open ${profile.name}'s LinkedIn profile in a new tab`}
                className="inline-flex items-center gap-2 rounded-full border border-hairline-strong px-6 py-3 text-sm font-semibold text-fg transition-all hover:-translate-y-0.5 hover:border-accent hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
              >
                <LinkedInIcon className="h-4 w-4" />
                LinkedIn Profile
              </a>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2"
            >
              <a
                href={`mailto:${profile.email}`}
                className="flex items-center gap-2 text-sm text-fg-muted transition-colors hover:text-accent"
              >
                <Mail size={15} aria-hidden="true" />
                Email
              </a>
              {whatsappHref ? (
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-fg-muted transition-colors hover:text-accent"
                >
                  <WhatsAppIcon className="h-[15px] w-[15px]" />
                  WhatsApp
                </a>
              ) : null}
            </motion.div>
          </motion.div>

          <HeroOrbit />
        </div>
      </Container>
    </section>
  );
}
