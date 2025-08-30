"use client";

import { Mail, Github, Linkedin } from "lucide-react";

export default function ContactSection() {
  return (
    <section id="contact" className="py-16 scroll-mt-16 text-gray-100">
      <div className="max-w-3xl mx-auto px-4 text-center">
        <h2 className="group text-3xl md:text-4xl font-medium mb-12 font-audiowide relative text-center">
          Contacts
          <span className="block mx-auto mt-2 h-[4px] w-10 bg-red-600 rounded transition-all duration-500 group-hover:w-24" />
        </h2>
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
            href="https://linkedin.com/in/yourname"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80"
            aria-label="linkedin"
          >
            <Linkedin size={28} className="hover:text-red-500" />
          </a>
        </div>

      </div>
    </section>
  );
}
