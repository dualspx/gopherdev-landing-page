import { Separator } from "@/components/ui/separator";

export function Footer() {
  return (
    <footer className="px-6 py-8">
      <div className="mx-auto max-w-6xl">
        <Separator className="mb-8 bg-[var(--border)]" />

        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
          <span
            className="font-mono text-sm text-[var(--foreground)]"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            GopherLogic
          </span>

          <span
            className="text-xs text-[var(--muted-foreground)]"
            style={{ fontFamily: "var(--font-sans)" }}
          >
            &copy; {new Date().getFullYear()} &mdash; Built with Go &amp; Next.js
          </span>
        </div>
      </div>
    </footer>
  );
}
