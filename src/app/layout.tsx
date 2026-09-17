import type { Metadata } from "next";
import { Audiowide, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import { MotionLayoutWrapper } from "@/components/MotionLayoutWrapper";

// Self-hosted by Next: one request each, no render-blocking @import or <link>.
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

const audiowide = Audiowide({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-audiowide-src",
  display: "swap",
});

const SITE_URL = "https://my-profile-page.vercel.app";
const SITE_NAME = "Ian Lee | Portfolio";
const SITE_DESCRIPTION =
  "Web developer in Vancouver, BC building production-ready web applications with React, Next.js, Node, and PostgreSQL.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_NAME,
    template: "%s | Ian Lee",
  },
  description: SITE_DESCRIPTION,
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${audiowide.variable}`}>
      <body className="text-white">
        <Navbar />
        <main className="min-h-screen">
          <MotionLayoutWrapper>{children}</MotionLayoutWrapper>
        </main>
        <ScrollToTopButton />
        <Footer />
      </body>
    </html>
  );
}
