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
