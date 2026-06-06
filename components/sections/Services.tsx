"use client";

import { Globe, Server, Layers } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { FadeUp } from "@/components/shared/FadeUp";
import { SectionLabel } from "@/components/shared/SectionLabel";

const SERVICES = [
  {
    icon: Globe,
    title: "Web Applications",
    description:
      "Custom web apps and internal tools built around your exact workflow — not an off-the-shelf template patched to fit.",
  },
  {
    icon: Server,
    title: "API & Backend Systems",
    description:
      "Fast, reliable backends — REST APIs, third-party integrations, automation, and data pipelines that hold up under real load.",
  },
  {
    icon: Layers,
    title: "MVP & Product Builds",
    description:
      "Got an idea? We scope, design, build, and deploy your product end to end — so you can go from concept to live without hiring a team.",
  },
];

export function Services() {
  return (
    <section id="services" className="py-24 px-6">
      <div className="mx-auto max-w-6xl">
        <FadeUp>
          <SectionLabel label="What We Build" />
        </FadeUp>

        {/* Asymmetric grid — card 2 offset right on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {SERVICES.map((service, i) => (
            <FadeUp key={service.title} delay={0.1 * i}>
              <Card
                className="rounded-[2px] border-[var(--border)] bg-[var(--card)] hover:-translate-y-1 transition-transform duration-300 ease-out"
              >
                <CardContent className="p-6 pt-8">
                  <service.icon
                    className="h-8 w-8 mb-5"
                    style={{ color: "var(--accent)" }}
                    aria-hidden="true"
                  />
                  <h3
                    className="text-lg font-semibold text-[var(--foreground)] mb-3"
                    style={{ fontFamily: "var(--font-sans)" }}
                  >
                    {service.title}
                  </h3>
                  <p
                    className="text-sm leading-relaxed text-[var(--muted-foreground)]"
                    style={{ fontFamily: "var(--font-sans)" }}
                  >
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
