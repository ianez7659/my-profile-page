"use client";

type Variant = "plain" | "cardBlue";

type Props = {
  id?: string;
  /** plain: full-width padding only. cardBlue: rounded blue panel with horizontal inset (matches Skills/Blog). */
  variant?: Variant;
  children: React.ReactNode;
  className?: string;
};

/**
 * Shared vertical rhythm and max-width for landing sections (non-hero).
 */
export default function LandingSection({
  id,
  variant = "plain",
  children,
  className = "",
}: Props) {
  const variants: Record<Variant, string> = {
    // text-white: body uses --foreground (dark); plain sections sit on dark bg like Hero
    plain: "py-16 md:py-20 px-4 text-white",
    cardBlue:
      "mx-4 md:mx-6 lg:mx-auto my-2 rounded-xl bg-[#1e3a8a] py-16 md:py-20 px-4 text-gray-100 max-w-[min(100%,calc(100vw-2rem))] lg:max-w-7xl",
  };

  return (
    <section id={id} className={`scroll-mt-20 w-full ${variants[variant]} ${className}`}>
      <div className="max-w-6xl mx-auto w-full">{children}</div>
    </section>
  );
}
