"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { FadeUp } from "@/components/shared/FadeUp";

const TECH = ["Go", "React", "PostgreSQL", "Docker", "Kubernetes", "Cloudflare"];

export function Hero() {
  return (
    <section className="flex min-h-screen items-center px-6 pt-24 pb-16">
      <div className="mx-auto w-full max-w-6xl">
        <div className="max-w-3xl">
          <FadeUp>
            <h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight text-[var(--foreground)] mb-8"
              style={{ fontFamily: "var(--font-serif)", fontStyle: "italic" }}
            >
              We build the system your business actually needs.
            </h1>
          </FadeUp>

          <FadeUp delay={0.15}>
            <p
              className="text-base sm:text-lg text-[var(--muted-foreground)] max-w-xl leading-relaxed mb-10"
              style={{ fontFamily: "var(--font-sans)" }}
            >
              Not a template. Not a freelancer who disappears. A reliable
              technical partner who scopes, builds, and ships — end to end.
            </p>
          </FadeUp>

          <FadeUp delay={0.25}>
            <div className="flex items-center gap-4 mb-12">
              <Button
                variant="outline"
                asChild
                className="rounded-[2px] border-[var(--accent)] text-[var(--accent)] hover:bg-[var(--accent)] hover:text-[var(--accent-foreground)] font-mono text-xs uppercase tracking-[0.12em] px-6 py-5 h-auto"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                <Link href="#work">
                  See our work
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                className="rounded-[2px] bg-[var(--accent)] text-[var(--accent-foreground)] hover:bg-[var(--accent)]/90 font-mono text-xs uppercase tracking-[0.12em] px-6 py-5 h-auto"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                <Link href="#contact">Get in touch</Link>
              </Button>
            </div>
          </FadeUp>

          <FadeUp delay={0.35}>
            <div className="flex flex-wrap gap-2">
              {TECH.map((tech) => (
                <Badge
                  key={tech}
                  variant="secondary"
                  className="rounded-[2px] font-mono text-xs text-[var(--muted-foreground)] border border-[var(--border)] bg-transparent px-3 py-1"
                  style={{ fontFamily: "var(--font-mono)" }}
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
