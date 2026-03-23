"use client";

import Image from "next/image";
import { ChevronDown } from "lucide-react";
import Button from "./Button";
import LandingSection from "./LandingSection";
import SectionHeading from "./SectionHeading";

export default function AboutSection() {
  return (
    <LandingSection id="about" variant="plain">
      <div className="flex flex-col items-center">
        <SectionHeading underlineHoverClass="group-hover:w-36">
          About
        </SectionHeading>
        <p className="text-xl md:text-2xl text-center mb-8 max-w-3xl">
          Welcome to my portfolio website.
        </p>
        <div className="flex items-start gap-4 mt-2 max-w-4xl w-full">
          <div className="text-lg md:text-xl leading-relaxed">
            <Image
              src="/images/Ian-2D.webp"
              alt="Ian Lee"
              width={100}
              height={100}
              className="rounded-full float-left mr-4 mb-2"
            />
            <p className="mb-4">
              Web developer focused on building production-ready web applications,
              with strong experience in front-end development and hands-on experience
              across backend features such as authentication, APIs, and databases.
            </p>

            <p className="mb-4">
              I&apos;ve worked on real client and personal projects across the full development
              lifecycle — from designing responsive UIs and interactive experiences
              to implementing authentication, admin dashboards, and deployment.
            </p>

            <p>
              My background in game programming shapes how I approach UI development,
              with particular attention to interaction, performance, and usability.
            </p>
          </div>
        </div>
        <ChevronDown size={48} className="text-red-600 animate-bounce mt-6" />
        <div className="flex flex-row sm:flex-row gap-4 mt-8">
          <Button href="/projects" variant="outline">
            Projects
          </Button>
          <Button href="/blog" variant="outline">
            Blog
          </Button>
        </div>
      </div>
    </LandingSection>
  );
}
