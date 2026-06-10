"use client";

import { useState } from "react";
import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { FadeUp } from "@/components/shared/FadeUp";
import { SectionLabel } from "@/components/shared/SectionLabel";

type Status = "idle" | "loading" | "success" | "error";

export function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [project, setProject] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, project }),
      });

      if (!res.ok) throw new Error();

      setStatus("success");
      setName("");
      setEmail("");
      setProject("");
    } catch {
      setStatus("error");
    }
  };

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
          {status === "success" ? (
            <div className="max-w-xl rounded-[2px] border border-[var(--accent)] bg-[var(--accent)]/5 px-6 py-8">
              <p
                className="text-base text-[var(--foreground)] mb-1"
                style={{ fontFamily: "var(--font-serif)", fontStyle: "italic" }}
              >
                Message sent.
              </p>
              <p
                className="text-sm text-[var(--muted-foreground)]"
                style={{ fontFamily: "var(--font-sans)" }}
              >
                Thanks — I&apos;ll get back to you within 24 hours.
              </p>
              <button
                onClick={() => setStatus("idle")}
                className="mt-4 font-mono text-xs uppercase tracking-[0.15em] text-[var(--accent)] hover:underline underline-offset-4"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                Send another
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="max-w-xl space-y-6">
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
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
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
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
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
                  value={project}
                  onChange={(e) => setProject(e.target.value)}
                  required
                  className="rounded-[2px] border-[var(--border)] bg-transparent text-[var(--foreground)] placeholder:text-[var(--muted-foreground)] focus-visible:ring-[var(--accent)] focus-visible:ring-offset-0 resize-none font-sans text-sm"
                  style={{ fontFamily: "var(--font-sans)" }}
                />
              </div>

              {status === "error" && (
                <p
                  className="text-sm text-red-400"
                  style={{ fontFamily: "var(--font-sans)" }}
                >
                  Something went wrong. Try emailing directly below.
                </p>
              )}

              <Button
                type="submit"
                disabled={status === "loading"}
                className="w-full sm:w-auto rounded-[2px] bg-[var(--accent)] text-[var(--accent-foreground)] hover:bg-[var(--accent)]/90 disabled:opacity-50 font-mono text-xs uppercase tracking-[0.12em] px-8 py-5 h-auto"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                {status === "loading" ? "Sending..." : "Send Message"}
              </Button>
            </form>
          )}
        </FadeUp>

        <FadeUp delay={0.3}>
          <a
            href="mailto:swkgopherdev@gmail.com"
            className="inline-flex items-center gap-2 mt-8 font-mono text-sm text-[var(--accent)] hover:underline underline-offset-4"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            <Mail className="h-4 w-4" />
            swkgopherdev@gmail.com
          </a>
        </FadeUp>
      </div>
    </section>
  );
}
