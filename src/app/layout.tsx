import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

// 📋 SEO-Informationen für deine Website
export const metadata: Metadata = {
  title: "Black Knight Portfolio",
  description: "Portfolio von Einar - Creative Developer aus Deutschland",
  keywords: ["Portfolio", "Webentwicklung", "Next.js", "TypeScript"],
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
        {/* 🎯 Hier werden deine Seiten geladen */}
        {children}
        <Analytics />
      </body>
    </html>
  );
}
