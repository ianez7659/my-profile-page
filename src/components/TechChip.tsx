/**
 * Single source for tech-stack chips across landing, project list, and project detail.
 * Follows DESIGN.md `chip-tech`: Red Wash background, Signal Red Deep text, 6px radius.
 */
export default function TechChip({ children }: { children: React.ReactNode }) {
  return (
    <span className="bg-red-100 text-red-700 text-sm font-medium px-2 py-1 rounded-md">
      {children}
    </span>
  );
}
