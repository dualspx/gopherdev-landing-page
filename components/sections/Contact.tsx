"use client";

import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { FadeUp } from "@/components/shared/FadeUp";
import { SectionLabel } from "@/components/shared/SectionLabel";

export function Contact() {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="mx-auto max-w-6xl">
        <FadeUp>
          <SectionLabel label="Get In Touch" />
        </FadeUp>

        <FadeUp delay={0.1}>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl leading-[1.1] tracking-tight text-[var(--foreground)] mb-4"
            style={{ fontFamily: "var(--font-serif)", fontStyle: "italic" }}
          >
            Let&apos;s build something.
          </h2>
        </FadeUp>

        <FadeUp delay={0.15}>
          <p
            className="text-sm text-[var(--muted-foreground)] mb-12"
            style={{ fontFamily: "var(--font-sans)" }}
          >
            Describe your project and we&apos;ll get back to you within 24 hours.
          </p>
        </FadeUp>

        <FadeUp delay={0.2}>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="max-w-xl space-y-6"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label
                  className="block font-mono text-xs uppercase tracking-[0.25em] text-[var(--muted-foreground)]"
                  style={{ fontFamily: "var(--font-mono)" }}
                  htmlFor="name"
                >
                  Name
                </label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Your name"
                  className="rounded-[2px] border-[var(--border)] bg-transparent text-[var(--foreground)] placeholder:text-[var(--muted-foreground)] focus-visible:ring-[var(--accent)] focus-visible:ring-offset-0 h-12 font-sans text-sm"
                  style={{ fontFamily: "var(--font-sans)" }}
                />
              </div>
              <div className="space-y-2">
                <label
                  className="block font-mono text-xs uppercase tracking-[0.25em] text-[var(--muted-foreground)]"
                  style={{ fontFamily: "var(--font-mono)" }}
                  htmlFor="email"
                >
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="you@company.com"
                  className="rounded-[2px] border-[var(--border)] bg-transparent text-[var(--foreground)] placeholder:text-[var(--muted-foreground)] focus-visible:ring-[var(--accent)] focus-visible:ring-offset-0 h-12 font-sans text-sm"
                  style={{ fontFamily: "var(--font-sans)" }}
                />
              </div>
            </div>

            <div className="space-y-2">
              <label
                className="block font-mono text-xs uppercase tracking-[0.25em] text-[var(--muted-foreground)]"
                style={{ fontFamily: "var(--font-mono)" }}
                htmlFor="project"
              >
                Tell us about your project
              </label>
              <Textarea
                id="project"
                rows={5}
                placeholder="What are you building? What do you need?"
                className="rounded-[2px] border-[var(--border)] bg-transparent text-[var(--foreground)] placeholder:text-[var(--muted-foreground)] focus-visible:ring-[var(--accent)] focus-visible:ring-offset-0 resize-none font-sans text-sm"
                style={{ fontFamily: "var(--font-sans)" }}
              />
            </div>

            <Button
              type="submit"
              className="w-full sm:w-auto rounded-[2px] bg-[var(--accent)] text-[var(--accent-foreground)] hover:bg-[var(--accent)]/90 font-mono text-xs uppercase tracking-[0.12em] px-8 py-5 h-auto"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              Send Message
            </Button>
          </form>
        </FadeUp>

        <FadeUp delay={0.3}>
          <a
            href="mailto:hello@gopherlogic.dev"
            className="inline-flex items-center gap-2 mt-8 font-mono text-sm text-[var(--accent)] hover:underline underline-offset-4"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            <Mail className="h-4 w-4" />
            hello@gopherlogic.dev
          </a>
        </FadeUp>
      </div>
    </section>
  );
}
