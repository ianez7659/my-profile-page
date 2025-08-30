import React from "react";
import Link from "next/link";

interface ButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "outline";
  className?: string;
}

export default function Button({
  href,
  children,
  variant = "primary",
  className = "",
}: ButtonProps) {
  const base =
    "w-36 md:w-48 px-4 py-3 rounded text-lg text-center rounded-lg transition";
  const variants = {
    primary: "bg-black text-white hover:bg-gray-800",
    outline:
      "border-2 border-white text-white hover:border-red-600 hover:bg-red-600 hover:text-white",
  };

  const fullClass = `${base} ${variants[variant]} ${className}`;

  return (
    <Link href={href} className={fullClass}>
      {children}
    </Link>
  );
}
