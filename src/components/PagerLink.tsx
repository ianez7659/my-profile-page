import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

type Props = {
  href: string;
  /** Course marker above the title, e.g. "NEXT ON THE COURSE" or "PREVIOUS". */
  label: string;
  title: string;
  direction: "prev" | "next";
  /**
   * row: label and title on one side, arrow opposite — a single full-width pager.
   * stack: label above title, aligned to the direction — a two-up pager.
   */
  layout?: "row" | "stack";
};

/**
 * The link that keeps a detail page from being a dead end.
 * Shared by the next-project pager and the previous/next post pair.
 *
 * Hovering lifts it one step up the brightness ladder — ground to panel, then the
 * headlight glow — and runs the section-heading red rule along its edge.
 */
export default function PagerLink({
  href,
  label,
  title,
  direction,
  layout = "row",
}: Props) {
  const Arrow = direction === "prev" ? ArrowLeft : ArrowRight;
  const alignRight = layout === "stack" && direction === "next";

  return (
    <Link
      href={href}
      className={`group relative overflow-hidden block border border-[#1e3a8a] rounded-xl px-6 py-5 md:px-8 md:py-6 text-white transition-[background-color,box-shadow,transform] duration-300 hover:bg-[#1e3a8a] hover:shadow-[0_0_44px_4px_rgba(59,91,217,0.45)] hover:-translate-y-0.5 focus-visible:bg-[#1e3a8a] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white motion-reduce:transition-none motion-reduce:hover:translate-y-0 ${
        alignRight ? "text-right" : ""
      } ${layout === "row" ? "flex items-center justify-between gap-6" : ""}`}
    >
      <span className="block">
        <span
          className={`flex items-center gap-2 font-audiowide text-[11px] tracking-[0.3em] text-gray-400 mb-2 transition-colors duration-300 group-hover:text-white group-focus-visible:text-white ${
            alignRight ? "justify-end" : ""
          }`}
        >
          {direction === "prev" && <Arrow size={14} aria-hidden />}
          {label}
          {direction === "next" && layout === "stack" && (
            <Arrow size={14} aria-hidden />
          )}
        </span>

        <span className="block text-lg md:text-xl font-semibold leading-snug">
          {title}
        </span>
      </span>

      {layout === "row" && (
        <Arrow
          size={24}
          aria-hidden
          className="shrink-0 text-red-500 transition-transform duration-300 group-hover:translate-x-2 group-focus-visible:translate-x-2 motion-reduce:transition-none motion-reduce:group-hover:translate-x-0"
        />
      )}

      {/* The same red rule the section headings carry, run along the edge on approach. */}
      <span
        aria-hidden
        className={`absolute inset-x-0 bottom-0 h-[4px] bg-red-600 scale-x-0 transition-transform duration-500 group-hover:scale-x-100 group-focus-visible:scale-x-100 motion-reduce:transition-none ${
          direction === "prev" ? "origin-right" : "origin-left"
        }`}
      />
    </Link>
  );
}
