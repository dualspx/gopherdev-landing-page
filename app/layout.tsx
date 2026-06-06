import type { Metadata } from "next";
import { DM_Mono, Instrument_Serif, IBM_Plex_Sans } from "next/font/google";
import "./globals.css";

const dmMono = DM_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "GopherLogic — Custom Software Consultancy",
  description:
    "We build the system your business actually needs. Independent software consultancy based in Malaysia — architecture, development, and deployment end to end.",
  openGraph: {
    title: "GopherLogic — Custom Software Consultancy",
    description:
      "We build the system your business actually needs. Architecture, development, and deployment — end to end.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`dark ${dmMono.variable} ${instrumentSerif.variable} ${ibmPlexSans.variable}`}
    >
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
