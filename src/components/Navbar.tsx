"use client";

import Link from "next/link";
import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Home", href: "/#home" },
  { label: "About", href: "/#about" },
  { label: "Skills", href: "/#skills" },
  { label: "Projects", href: "/#projects" },
  { label: "Blog", href: "/#blog" },
  { label: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
      setMenuOpen(false);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close the menu when clicking outside of the menu
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    };

    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]);

  return (
    <nav className="sticky top-0 z-50 bg-black text-white shadow-md transition-all duration-300">
      <div className="max-w-6xl mx-auto px-4 py-6 flex justify-between items-center relative">
        <Link href="/#home" className="flex items-center gap-3">
          <Image
            src="/images/Ian-2D.webp"
            alt="Ian Lee"
            width={48}
            height={48}
            className="rounded-full transition-transform duration-300 hover:scale-110"
          />
          <div className="flex flex-col">
            <h1 className="text-2xl font-bold transition-all duration-300">Ian Lee</h1>
            <span 
              className={`text-md md:text-lg text-red-600 transition-all duration-300 overflow-hidden ${
                isScrolled ? "max-h-6 opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              Passionate web developer
            </span>
          </div>
        </Link>

        {/* Mobile toggle button */}
        <button
          className="md:hidden z-50"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Desktop nav */}
        <ul className="hidden md:flex gap-6 text-lg">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link href={item.href} className="hover:text-[#ffdd40]">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile nav with slide down animation */}
      <div
        ref={menuRef}
        className={`absolute top-4/5 left-0 w-full md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          menuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="bg-black/70 px-4 py-4 flex flex-col text-center text-xl gap-4">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                onClick={() => setMenuOpen(false)} // Close when cliked
                className="hover:text-[#ffdd40]"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
