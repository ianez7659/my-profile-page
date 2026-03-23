"use client";

type Props = {
  children: React.ReactNode;
  /** Slightly wider underline on hover (default: w-24) */
  underlineHoverClass?: string;
};

/**
 * Consistent section title + red accent line for landing page sections.
 */
export default function SectionHeading({
  children,
  underlineHoverClass = "group-hover:w-24",
}: Props) {
  return (
    <h2
      className={`group text-3xl md:text-4xl font-medium mb-10 md:mb-12 font-audiowide relative text-center`}
    >
      {children}
      <span
        className={`block mx-auto mt-2 h-[4px] w-10 bg-red-600 rounded transition-all duration-500 ${underlineHoverClass}`}
      />
    </h2>
  );
}
