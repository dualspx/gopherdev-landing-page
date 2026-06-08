# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # start dev server on http://localhost:3000
npm run build     # static export to out/ (requires output: "export" in next.config.mjs)
npm run lint      # ESLint
```

There are no tests. The build output is a fully static site (`out/`) served by nginx via Docker.

## Architecture

Single-page Next.js 14 (App Router) landing site for GopherLogic, a software consultancy. All routes are statically exported — no server-side logic.

**Page composition** (`app/page.tsx`): assembles `Navbar → Hero → Services → Work → Process → About → Contact → Footer` in order.

**Styling system**: Tailwind CSS + shadcn/ui components. Design tokens live as CSS variables in `app/globals.css` (background, foreground, accent `#c8963e`, border, etc.). The Tailwind config maps `bg-background`, `text-foreground`, etc. directly to these variables. Always use `var(--token)` in inline styles or `text-[var(--token)]` in Tailwind classes — never hardcode colours.

**Fonts**: Three Google Fonts loaded via `next/font` in `layout.tsx` and exposed as CSS variables: `--font-mono` (DM Mono), `--font-serif` (Instrument Serif), `--font-sans` (IBM Plex Sans). Apply them via `style={{ fontFamily: "var(--font-serif)" }}` or the `.font-mono` / `.font-serif` / `.font-sans` utility classes.

**Animations**: All scroll-reveal animations use the `<FadeUp>` wrapper (`components/shared/FadeUp.tsx`), which uses Framer Motion and respects `prefers-reduced-motion`.

**Section labels**: Use `<SectionLabel label="..." />` for the accent-line + uppercase mono label pattern at the top of each section.

## Deployment

The Dockerfile builds a static export and copies `out/` into an nginx image using `nginx.conf`. The `NEXT_PUBLIC_SITE_URL` build arg sets the site URL at build time. Update the production `docker-compose.yml` to reference this image.
