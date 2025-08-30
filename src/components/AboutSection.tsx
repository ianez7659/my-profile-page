"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import Button from "./Button";

export default function HeroSection() {
  return (
    <section id="about" className="scroll-mt-20 py-16 px-4 text-white">
      <div className="flex flex-col items-center">
        <h2 className="text-2xl md:text-4xl text-center">
          Welcome to my portfolio website.
        </h2>
        <p className="text-lg md:text-xl leading-relaxed mt-6 max-w-4xl">
          <Image
            src="/images/Ian-2D.webp"
            alt="Ian Lee"
            width={100}
            height={100}
            className="rounded-full float-left mr-4 mb-2"
          />
          My name is Ian Hyun Kyu Lee from Seoul, Korea. I'm a enthusiastic web
          developer who always hope to change the net world in the future. If
          you want to know more about me, please do not hegitate to press the
          button below. I'm always looking for new opportunities to grow and
          learn. I'm also open to collaboration and new projects. If you are
          interested in seeing my projects and technical blogs, please press the
          buttons below.
        </p>
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
