"use client";

import { Mail, Github, Linkedin } from "lucide-react";
import ResumeButton from "@/components/ResumeButton";
import LandingSection from "@/components/LandingSection";
import SectionHeading from "@/components/SectionHeading";

export default function ContactSection() {
  return (
    <LandingSection id="contact" variant="plain" className="text-gray-100">
      <div className="max-w-3xl mx-auto text-center">
        <SectionHeading>Contacts</SectionHeading>
        <p className="text-xl text-gray-100 mb-6">
          Feel free to reach out to me for any questions or opportunities!
        </p>

        <div className="flex justify-center gap-6  text-2xl mb-6">
          <a
            href="mailto:ianez7659@gmail.com"
            className="hover:opacity-80"
            aria-label="email"
          >
            <Mail size={28} className="hover:text-red-500" />
          </a>
          <a
            href="https://github.com/ianez7659"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80"
            aria-label="github"
          >
            <Github size={28} className="hover:text-red-500" />
          </a>
          <a
            href="https://www.linkedin.com/in/ianhklee/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80"
            aria-label="linkedin"
          >
            <Linkedin size={28} className="hover:text-red-500" />
          </a>
        </div>

        <ResumeButton className="mt-8" />

      </div>
    </LandingSection>
  );
}
