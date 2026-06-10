"use client";

import { FadeUp } from "@/components/shared/FadeUp";
import { SectionLabel } from "@/components/shared/SectionLabel";

export function About() {
  return (
    <section className="py-24 px-6">
      <div className="mx-auto max-w-6xl">
        <FadeUp>
          <SectionLabel label="About" />
        </FadeUp>

        <FadeUp delay={0.1}>
          <div
            className="border-l-2 pl-6 max-w-2xl"
            style={{ borderColor: "var(--accent)" }}
          >
            <p
              className="text-base sm:text-lg text-[var(--muted-foreground)] leading-relaxed mb-4"
              style={{ fontFamily: "var(--font-sans)" }}
            >
              Independent software consultant based in Selangor or Sarawak, Malaysia.
              I build custom software end to end — backend systems, web apps,
              cloud infrastructure, and data pipelines.
            </p>
            <p
              className="text-base sm:text-lg text-[var(--muted-foreground)] leading-relaxed"
              style={{ fontFamily: "var(--font-sans)" }}
            >
              Not a portfolio of side projects — real production systems
              shipped, maintained, and trusted by paying users. You get depth
              and ownership, not handoff chaos.
            </p>
          </div>
        </FadeUp>

        <FadeUp delay={0.2}>
          <div
            className="mt-12 flex flex-col sm:flex-row gap-6 sm:gap-12"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            <span className="text-xs uppercase tracking-[0.2em] text-[var(--muted-foreground)]">
              Go · React · Next.js · PostgreSQL
            </span>
            <span className="text-xs uppercase tracking-[0.2em] text-[var(--muted-foreground)]">
              Docker · Kubernetes · Cloudflare
            </span>
            <span className="text-xs uppercase tracking-[0.2em] text-[var(--muted-foreground)]">
              Python · R · Machine Learning · AI · Data Analysis
            </span>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
