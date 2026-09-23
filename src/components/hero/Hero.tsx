"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, ExternalLink, Mail } from "lucide-react";
import { profile, whatsappHref } from "@/data/profile";
import { Container } from "@/components/ui/Container";
import { HeroPortrait } from "@/components/hero/HeroPortrait";
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
    <section className="relative z-10 pt-32 pb-16 md:pb-20">
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
              className="mt-6 text-4xl font-bold tracking-tight text-balance sm:text-5xl lg:text-6xl"
            >
              {profile.name}
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="mt-3 text-xl leading-snug font-medium text-accent sm:text-2xl"
            >
              Solutions Architect
              <br />
              &amp; Senior Full-Stack Engineer
            </motion.p>

            <motion.p variants={itemVariants} className="text-body mt-5 max-w-lg">
              {profile.summary}
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="mt-8 flex items-center gap-3"
            >
              <span className="h-px w-8 bg-accent/60" />
              <span className="text-xs font-semibold tracking-[0.2em] text-fg-faint uppercase">
                <span className="text-fg">{profile.yearsExperience}</span> Years
                of Experience
              </span>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="mt-10 flex flex-wrap items-center gap-3.5"
            >
              <Link
                href="/work"
                className="group inline-flex items-center gap-2 rounded-md bg-fg px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-accent focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
              >
                View Selected Work
                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-0.5"
                />
              </Link>
              <Link
                href="/experience"
                className="group inline-flex items-center gap-2 rounded-md border border-hairline-strong bg-surface px-6 py-3.5 text-sm font-semibold text-fg transition-colors hover:border-accent hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
              >
                Explore Experience
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

          <HeroPortrait />
        </div>
      </Container>
    </section>
  );
}
