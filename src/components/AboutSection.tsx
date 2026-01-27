"use client";

import Image from "next/image";
import { ChevronDown } from "lucide-react";
import Button from "./Button";

export default function HeroSection() {
  return (
    <section id="about" className="scroll-mt-20 py-16 px-4 text-white">
      <div className="flex flex-col items-center">
        <h2 className="text-3xl md:text-4xl text-center">
          Welcome to my portfolio website.
        </h2>
        <div className="flex items-start gap-4 mt-6 max-w-4xl">
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
    </section>
  );
}
