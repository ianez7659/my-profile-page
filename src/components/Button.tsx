import React from "react";
import Link from "next/link";

interface ButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "outline";
  /** fixed: standalone nav buttons (9rem / md 12rem). auto: sits next to ResumeButton, same metrics. */
  size?: "fixed" | "auto";
  className?: string;
}

export default function Button({
  href,
  children,
  variant = "primary",
  size = "fixed",
  className = "",
}: ButtonProps) {
  const base =
    "rounded-lg text-center transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white";
  const sizes = {
    fixed: "w-36 md:w-48 px-4 py-3 text-lg",
    auto: "inline-flex items-center justify-center gap-2 px-6 py-3 font-medium",
  };
  const variants = {
    primary: "bg-black text-white hover:bg-gray-800",
    outline:
      "border-2 border-white text-white hover:border-red-600 hover:bg-red-600 hover:text-white",
  };

  const fullClass = `${base} ${sizes[size]} ${variants[variant]} ${className}`;

  return (
    <Link href={href} className={fullClass}>
      {children}
    </Link>
  );
}
