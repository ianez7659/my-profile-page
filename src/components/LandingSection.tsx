type Variant = "plain" | "band";

type Props = {
  id?: string;
  /** plain: sits directly on the ground. band: full-bleed Panel Blue block (Skills/Blog). */
  variant?: Variant;
  children: React.ReactNode;
  className?: string;
};

/**
 * Shared vertical rhythm and max-width for landing sections (non-hero).
 * Both variants span the full viewport width; the inner column controls content width.
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
    band: "bg-[#1e3a8a] py-16 md:py-20 px-4 text-gray-100",
  };

  return (
    <section id={id} className={`scroll-mt-20 w-full ${variants[variant]} ${className}`}>
      <div className="max-w-6xl mx-auto w-full">{children}</div>
    </section>
  );
}
