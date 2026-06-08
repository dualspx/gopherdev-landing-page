"use client";

import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { FadeUp } from "@/components/shared/FadeUp";
import { SectionLabel } from "@/components/shared/SectionLabel";

const PROJECTS = [
  {
    name: "MalaysiaMapNews",
    description:
      "A real-time map-based news aggregator for Malaysia — built solo, from architecture to deployment. Production-grade full-stack system handling real traffic.",
    stack: ["Go", "React", "PostgreSQL", "Docker", "Cloudflare"],
    url: "https://malaysiamapnews.com",
    visual: "terminal" as const,
  },
  {
    name: "PaceAsia",
    description:
      "Landing page for a PR and communications agency — clean, fast, and built to convert. Scoped, designed, and shipped end to end.",
    stack: ["Next.js", "Tailwind CSS", "Docker", "Cloudflare"],
    url: "https://paceasia.my",
    visual: "highlights" as const,
  },
];

const HIGHLIGHTS = [
  { label: "Industry", value: "PR & Communications" },
  { label: "Type", value: "Marketing Landing Page" },
  { label: "Delivery", value: "Design → Deploy" },
  { label: "Status", value: "Live" },
];

export function Work() {
  return (
    <section id="work" className="py-24 px-6">
      <div className="mx-auto max-w-6xl">
        <FadeUp>
          <SectionLabel label="Work" />
        </FadeUp>

        <div className="space-y-6">
          {PROJECTS.map((project, i) => (
            <FadeUp key={project.name} delay={0.1 * (i + 1)}>
              <Card className="rounded-[2px] border-[var(--border)] bg-[var(--card)] overflow-hidden">
                <CardContent className="p-0">
                  <div className="grid grid-cols-1 lg:grid-cols-2">
                    {/* Left — project info */}
                    <div className="p-8 lg:p-10 border-b lg:border-b-0 lg:border-r border-[var(--border)] flex flex-col justify-between">
                      <div>
                        <h3
                          className="text-2xl sm:text-3xl font-semibold text-[var(--foreground)] mb-4"
                          style={{ fontFamily: "var(--font-sans)" }}
                        >
                          {project.name}
                        </h3>
                        <p
                          className="text-sm leading-relaxed text-[var(--muted-foreground)] mb-6 max-w-sm"
                          style={{ fontFamily: "var(--font-sans)" }}
                        >
                          {project.description}
                        </p>
                        <div className="flex flex-wrap gap-2 mb-8">
                          {project.stack.map((t) => (
                            <Badge
                              key={t}
                              variant="secondary"
                              className="rounded-[2px] font-mono text-xs text-[var(--muted-foreground)] border border-[var(--border)] bg-transparent px-3 py-1"
                              style={{ fontFamily: "var(--font-mono)" }}
                            >
                              {t}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <Button
                        variant="outline"
                        asChild
                        className="w-fit rounded-[2px] border-[var(--accent)] text-[var(--accent)] hover:bg-[var(--accent)] hover:text-[var(--accent-foreground)] font-mono text-xs uppercase tracking-[0.12em] px-5 py-4 h-auto"
                        style={{ fontFamily: "var(--font-mono)" }}
                      >
                        <Link
                          href={project.url}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          View Project
                          <ExternalLink className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>

                    {/* Right — visual panel */}
                    <div className="p-8 lg:p-10 flex items-center">
                      {project.visual === "terminal" ? (
                        <div className="w-full">
                          <pre className="w-full overflow-x-auto rounded-[2px] bg-[#0d0d0d] border border-[var(--border)] p-5 text-xs leading-relaxed">
                            <code
                              className="block"
                              style={{ fontFamily: "var(--font-mono)" }}
                            >
                              <span style={{ color: "var(--accent)" }}>$ </span>
                              <span style={{ color: "var(--foreground)" }}>
                                curl https://api.malaysiamapnews.com/articles?lat=3.14&lng=101.68
                              </span>
                              {"\n"}
                              <span style={{ color: "var(--muted-foreground)" }}>
                                {"{"}
                                {"\n"}
                              </span>
                              <span style={{ color: "var(--muted-foreground)" }}>
                                {"  "}&quot;articles&quot;: [{"\n"}
                              </span>
                              <span style={{ color: "var(--muted-foreground)" }}>
                                {"    "}{"{"}{"\n"}
                              </span>
                              <span style={{ color: "var(--muted-foreground)" }}>
                                {"      "}&quot;id&quot;: &quot;
                              </span>
                              <span style={{ color: "#e0d5b0" }}>a1b2c3</span>
                              <span style={{ color: "var(--muted-foreground)" }}>
                                &quot;,{"\n"}
                              </span>
                              <span style={{ color: "var(--muted-foreground)" }}>
                                {"      "}&quot;title&quot;: &quot;
                              </span>
                              <span style={{ color: "#e0d5b0" }}>
                                Flood warning issued for Klang Valley
                              </span>
                              <span style={{ color: "var(--muted-foreground)" }}>
                                &quot;,{"\n"}
                              </span>
                              <span style={{ color: "var(--muted-foreground)" }}>
                                {"      "}&quot;source&quot;: &quot;
                              </span>
                              <span style={{ color: "#e0d5b0" }}>Malaysiakini</span>
                              <span style={{ color: "var(--muted-foreground)" }}>
                                &quot;,{"\n"}
                              </span>
                              <span style={{ color: "var(--muted-foreground)" }}>
                                {"      "}&quot;coordinates&quot;: {`{`} &quot;lat&quot;:{" "}
                              </span>
                              <span style={{ color: "#7aa6da" }}>3.14</span>
                              <span style={{ color: "var(--muted-foreground)" }}>
                                , &quot;lng&quot;:{" "}
                              </span>
                              <span style={{ color: "#7aa6da" }}>101.68</span>
                              <span style={{ color: "var(--muted-foreground)" }}>
                                {" }"},{`\n`}
                              </span>
                              <span style={{ color: "var(--muted-foreground)" }}>
                                {"      "}&quot;published_at&quot;: &quot;
                              </span>
                              <span style={{ color: "#e0d5b0" }}>
                                2024-11-01T08:30:00Z
                              </span>
                              <span style={{ color: "var(--muted-foreground)" }}>
                                &quot;{"\n"}
                              </span>
                              <span style={{ color: "var(--muted-foreground)" }}>
                                {"    "}{"}"}{"\n"}
                              </span>
                              <span style={{ color: "var(--muted-foreground)" }}>
                                {"  "}],{`\n`}
                              </span>
                              <span style={{ color: "var(--muted-foreground)" }}>
                                {"  "}&quot;total&quot;:{" "}
                              </span>
                              <span style={{ color: "#7aa6da" }}>142</span>
                              {`\n`}
                              <span style={{ color: "var(--muted-foreground)" }}>
                                {"}"}
                              </span>
                            </code>
                          </pre>
                          <p
                            className="mt-3 text-xs text-[var(--muted-foreground)]"
                            style={{ fontFamily: "var(--font-mono)" }}
                          >
                            <span style={{ color: "var(--accent)" }}>// </span>
                            the api is not yet live, stay tuned!
                          </p>
                        </div>
                      ) : (
                        <div className="w-full space-y-4">
                          {HIGHLIGHTS.map((item) => (
                            <div
                              key={item.label}
                              className="flex items-center justify-between py-3 border-b border-[var(--border)] last:border-0"
                            >
                              <span
                                className="text-xs uppercase tracking-[0.2em] text-[var(--muted-foreground)]"
                                style={{ fontFamily: "var(--font-mono)" }}
                              >
                                {item.label}
                              </span>
                              <span
                                className="text-sm text-[var(--foreground)]"
                                style={{ fontFamily: "var(--font-sans)" }}
                              >
                                {item.value}
                              </span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </FadeUp>
          ))}
        </div>

        <FadeUp delay={0.3}>
          <p
            className="mt-6 text-sm text-[var(--muted-foreground)]"
            style={{ fontFamily: "var(--font-sans)" }}
          >
            More projects available on request.
          </p>
        </FadeUp>
      </div>
    </section>
  );
}
