import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { getMetadata } from "@/lib/seo";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
});

export const metadata: Metadata = getMetadata({
  title: "Napoli Catering Co. | Authentic Neapolitan Sourdough Pizza Bases",
  description: "Handmade in Naples. Preservative-free. Ambient sourdough pizza bases designed for professional kitchens and hospitality operators in the Netherlands.",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} antialiased bg-background text-zinc-900`}
      >
        <Navbar />
        <div className="pt-32">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
