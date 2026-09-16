import { Mail, Github, Linkedin } from "lucide-react";
import ResumeButton from "@/components/ResumeButton";
import LandingSection from "@/components/LandingSection";
import SectionHeading from "@/components/SectionHeading";

const EMAIL = "ianez7659@gmail.com";

export default function ContactSection() {
  return (
    <LandingSection id="contact" variant="plain" className="text-gray-100">
      <div className="max-w-3xl mx-auto text-center">
        <SectionHeading>Contacts</SectionHeading>
        <p className="text-xl text-gray-100 mb-8">
          Feel free to reach out to me for any questions or opportunities!
        </p>

        {/* The address itself, not just an icon: this is the page's closing action. */}
        <a
          href={`mailto:${EMAIL}`}
          className="inline-block text-xl md:text-2xl text-white underline underline-offset-8 decoration-red-600 decoration-2 hover:text-red-500 transition-colors duration-300 rounded-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
        >
          {EMAIL}
        </a>

        <div className="flex justify-center gap-6 text-2xl mt-8 mb-10">
          <a
            href={`mailto:${EMAIL}`}
            className="hover:opacity-80 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white rounded-sm"
            aria-label="email"
          >
            <Mail size={28} className="hover:text-red-500" />
          </a>
          <a
            href="https://github.com/ianez7659"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white rounded-sm"
            aria-label="github"
          >
            <Github size={28} className="hover:text-red-500" />
          </a>
          <a
            href="https://www.linkedin.com/in/ianhklee/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white rounded-sm"
            aria-label="linkedin"
          >
            <Linkedin size={28} className="hover:text-red-500" />
          </a>
        </div>

        <ResumeButton />
      </div>
    </LandingSection>
  );
}
