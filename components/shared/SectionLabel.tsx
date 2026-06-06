import { cn } from "@/lib/utils";

interface SectionLabelProps {
  label: string;
  className?: string;
}

export function SectionLabel({ label, className }: SectionLabelProps) {
  return (
    <div className={cn("flex items-center gap-3 mb-12", className)}>
      <span
        className="block h-px w-6 flex-shrink-0"
        style={{ backgroundColor: "var(--accent)" }}
        aria-hidden="true"
      />
      <span
        className="font-mono text-xs uppercase tracking-[0.25em] text-[var(--muted-foreground)]"
        style={{ fontFamily: "var(--font-mono)" }}
      >
        {label}
      </span>
    </div>
  );
}
