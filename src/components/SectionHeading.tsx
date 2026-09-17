type Props = {
  children: React.ReactNode;
  /** Course marker, e.g. "01". Audiowide, muted — it numbers the scroll, it does not shout. */
  index?: string;
  /** Slightly wider underline on hover (default: w-24) */
  underlineHoverClass?: string;
};

/**
 * Consistent section title + red accent line for landing page sections.
 */
export default function SectionHeading({
  children,
  index,
  underlineHoverClass = "group-hover:w-24",
}: Props) {
  return (
    <h2
      className={`group text-3xl md:text-4xl font-medium mb-10 md:mb-12 font-audiowide relative text-center`}
    >
      {index && (
        <span className="block text-sm tracking-[0.35em] text-gray-400 mb-3">
          {index}
        </span>
      )}
      {children}
      <span
        className={`block mx-auto mt-2 h-[4px] w-10 bg-red-600 rounded transition-all duration-500 ${underlineHoverClass}`}
      />
    </h2>
  );
}
