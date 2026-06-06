"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Circle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { href: "#work", label: "Work" },
  { href: "#services", label: "Services" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-colors duration-200",
        scrolled ? "bg-[var(--background)]/95 backdrop-blur-sm" : "bg-transparent"
      )}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link
          href="/"
          className="font-mono text-lg tracking-tight text-[var(--foreground)] hover:text-[var(--accent)] transition-colors"
          style={{ fontFamily: "var(--font-mono)" }}
        >
          GopherLogic
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <Button
              key={link.href}
              variant="ghost"
              asChild
              className="font-mono text-xs uppercase tracking-[0.15em] text-[var(--muted-foreground)] hover:text-[var(--foreground)] hover:bg-transparent p-0 h-auto"
            >
              <Link href={link.href}>{link.label}</Link>
            </Button>
          ))}

          <Badge
            variant="outline"
            className="font-mono text-xs rounded-[2px] border-[var(--border)] bg-transparent text-[var(--muted-foreground)] px-3 py-1 gap-2"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            <Circle
              className="h-2 w-2 fill-[#4ade80] text-[#4ade80]"
              aria-hidden="true"
            />
            Available for projects
          </Badge>
        </div>

        {/* Mobile hamburger */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden text-[var(--muted-foreground)] hover:text-[var(--foreground)] hover:bg-transparent"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </nav>

      {/* Mobile nav panel */}
      {mobileOpen && (
        <div className="md:hidden bg-[var(--background)]/98 backdrop-blur-sm border-b border-[var(--border)] px-6 pb-6 pt-2">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block font-mono text-sm uppercase tracking-[0.15em] text-[var(--muted-foreground)] hover:text-[var(--foreground)] py-3 transition-colors"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-3">
            <Badge
              variant="outline"
              className="font-mono text-xs rounded-[2px] border-[var(--border)] bg-transparent text-[var(--muted-foreground)] px-3 py-1 gap-2"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              <Circle
                className="h-2 w-2 fill-[#4ade80] text-[#4ade80]"
                aria-hidden="true"
              />
              Available for projects
            </Badge>
          </div>
        </div>
      )}

      {/* Separator on scroll */}
      <Separator
        className={cn(
          "transition-opacity duration-300",
          scrolled ? "opacity-100" : "opacity-0"
        )}
      />
    </header>
  );
}
