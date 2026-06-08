"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";
import { FadeUp } from "@/components/shared/FadeUp";
import { SectionLabel } from "@/components/shared/SectionLabel";

const COMMANDS = [
  {
    label: "Linux / macOS",
    lang: "bash",
    command: "curl gopherlogic.dev/resume.sh | bash",
  },
  {
    label: "Windows (PowerShell)",
    lang: "powershell",
    command: "iwr gopherlogic.dev/resume.ps1 | iex",
  },
];

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);

  const copy = () => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      onClick={copy}
      className="flex items-center gap-1.5 text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors"
      aria-label="Copy command"
    >
      {copied ? (
        <Check className="h-3.5 w-3.5 text-[var(--accent)]" />
      ) : (
        <Copy className="h-3.5 w-3.5" />
      )}
      <span
        className="text-xs uppercase tracking-[0.15em]"
        style={{ fontFamily: "var(--font-mono)" }}
      >
        {copied ? "Copied" : "Copy"}
      </span>
    </button>
  );
}

export function TryIt() {
  return (
    <section className="py-24 px-6">
      <div className="mx-auto max-w-6xl">
        <FadeUp>
          <SectionLabel label="Try It" />
        </FadeUp>

        <FadeUp delay={0.1}>
          <h2
            className="text-3xl sm:text-4xl leading-[1.1] tracking-tight text-[var(--foreground)] mb-4"
            style={{ fontFamily: "var(--font-serif)", fontStyle: "italic" }}
          >
            View my resume in your terminal.
          </h2>
        </FadeUp>

        <FadeUp delay={0.15}>
          <p
            className="text-sm text-[var(--muted-foreground)] mb-10"
            style={{ fontFamily: "var(--font-sans)" }}
          >
            Run the command for your platform — no browser needed.
          </p>
        </FadeUp>

        <div className="flex flex-col gap-4 max-w-xl">
          {COMMANDS.map((item, i) => (
            <FadeUp key={item.label} delay={0.2 + i * 0.1}>
              <div>
                <span
                  className="block text-xs uppercase tracking-[0.2em] text-[var(--muted-foreground)] mb-2"
                  style={{ fontFamily: "var(--font-mono)" }}
                >
                  {item.label}
                </span>
                <div className="flex items-center justify-between rounded-[2px] bg-[#0d0d0d] border border-[var(--border)] px-5 py-4">
                  <code
                    className="text-sm text-[var(--foreground)]"
                    style={{ fontFamily: "var(--font-mono)" }}
                  >
                    <span style={{ color: "var(--accent)" }}>$ </span>
                    {item.command}
                  </code>
                  <CopyButton text={item.command} />
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
