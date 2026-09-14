import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: 'swap',
});

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Safezone | Comfort. Protection. Confidence.",
  description: "Thoughtfully designed personal hygiene and wellness solutions for everyday life. Experience comfort and confidence with Safezone.",
};

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { ScrollToTop } from "@/components/ui/ScrollToTop";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${sora.variable} scroll-smooth`}>
      <body className="antialiased selection:bg-sage selection:text-white flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow pt-[80px] md:pt-[100px]">
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
        <ScrollToTop />
      </body>
    </html>
  );
}
