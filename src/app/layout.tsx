import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap"
});

export const metadata: Metadata = {
  title: "Pawlos Habtemariam Fisehatsion | Full-Stack Developer",
  description:
    "Portfolio of Pawlos Habtemariam Fisehatsion — Full-Stack Developer building futuristic, reliable, and clean web experiences with modern tools.",
  metadataBase: new URL("https://example.com"),
  openGraph: {
    title: "Pawlos Habtemariam Fisehatsion | Full-Stack Developer",
    description:
      "Futuristic, reliable, and super-clean web experiences — built with modern tools and production thinking.",
    url: "https://example.com",
    siteName: "Pawlos Habtemariam Fisehatsion",
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Pawlos Habtemariam Fisehatsion | Full-Stack Developer",
    description:
      "Futuristic, reliable, and super-clean web experiences — built with modern tools and production thinking."
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={spaceGrotesk.variable}>
      <body>{children}</body>
    </html>
  );
}
