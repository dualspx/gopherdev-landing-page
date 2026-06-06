"use client";

import { FadeUp } from "@/components/shared/FadeUp";
import { SectionLabel } from "@/components/shared/SectionLabel";

const STEPS = [
  {
    number: "01",
    label: "Scope",
    description:
      "We talk through what you need, define the requirements, and agree on a realistic plan.",
  },
  {
    number: "02",
    label: "Design",
    description:
      "Architecture, data model, and UI wireframe — before a single line of production code is written.",
  },
  {
    number: "03",
    label: "Build",
    description:
      "Iterative development with regular updates — no black box, no surprises.",
  },
  {
    number: "04",
    label: "Ship",
    description:
      "Deployed, monitored, and handed over with documentation — not just a zip file.",
  },
];

export function Process() {
  return (
    <section className="py-24 px-6">
      <div className="mx-auto max-w-6xl">
        <FadeUp>
          <SectionLabel label="How It Works" />
        </FadeUp>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {STEPS.map((step, i) => (
            <FadeUp key={step.number} delay={0.1 * i}>
              <div>
                {/* Top accent bar */}
                <div className="flex items-center mb-6" aria-hidden="true">
                  <div
                    className="h-[2px] w-8 flex-shrink-0"
                    style={{ backgroundColor: "var(--accent)" }}
                  />
                  <div
                    className="h-px flex-1"
                    style={{ backgroundColor: "var(--border)" }}
                  />
                </div>

                {/* Number */}
                <span
                  className="block text-5xl sm:text-6xl font-normal text-[var(--accent)] leading-none mb-4"
                  style={{ fontFamily: "var(--font-mono)" }}
                >
                  {step.number}
                </span>

                {/* Content */}
                <h4
                  className="text-base font-semibold text-[var(--foreground)] mb-2"
                  style={{ fontFamily: "var(--font-sans)" }}
                >
                  {step.label}
                </h4>
                <p
                  className="text-sm leading-relaxed text-[var(--muted-foreground)]"
                  style={{ fontFamily: "var(--font-sans)" }}
                >
                  {step.description}
                </p>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
