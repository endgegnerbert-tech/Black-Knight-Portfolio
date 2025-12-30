import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

// 📋 SEO-Informationen für deine Website
export const metadata: Metadata = {
  metadataBase: new URL("https://black-knight.dev"), // Für Produktion auf deiner Domain
  title: "Black Knight Portfolio",
  description:
    "Black Knight Portfolio - Junior Developer from Munich. Building innovative web apps with AI tools and modern tech.",
  keywords: ["Portfolio", "Webentwicklung", "Next.js", "TypeScript"],
  openGraph: {
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Black Knight Portfolio - Junior Developer",
      },
    ],
  },
  icons: {
    icon: "/favicon.png",
  },
};

// 🏛️ ROOT LAYOUT - Das Grundgerüst deiner Website
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body className="antialiased">
        {/* �� Hier werden deine Seiten geladen */}
        {children}
        <Analytics />
      </body>
    </html>
  );
}
