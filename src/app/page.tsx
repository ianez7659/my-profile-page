import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsPreview from "@/components/SkillsSection";
import ProjectSection from "@/components/ProjectSection";
import BlogSection from "@/components/BlogSection";
import ContactSection from "@/components/ContactSection";
// import { ChevronDown } from "lucide-react";
// import Link from "next/link";
// import Button from "@/components/Button";

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <SkillsPreview />
      <ProjectSection />
      <BlogSection />
      <ContactSection />
    </main>
  );
}
