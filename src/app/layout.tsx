import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import { MotionLayoutWrapper } from "@/components/MotionLayoutWrapper";

export const metadata: Metadata = {
  title: "Ian Lee | Portfolio",
  description: "Welcome to my developer portfolio website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
          crossOrigin="anonymous"
        />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Audiowide&family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
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
