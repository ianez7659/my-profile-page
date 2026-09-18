"use client";

import type { PostMeta } from "@/lib/blog";
import { useBlogContext } from "@/contexts/BlogContext";

const CATEGORIES = ["All", "Projects", "Hobby/Interests", "News"];

/** Hobby and Interests are two tags the reader thinks of as one category. */
const TAGS_FOR_CATEGORY: Record<string, string[]> = {
  "Hobby/Interests": ["Hobby", "Interests"],
};

export function tagsForCategory(category: string): string[] | undefined {
  if (category === "All") return undefined;
  return TAGS_FOR_CATEGORY[category] ?? [category];
}

/**
 * The category rail. A vertical rail on desktop, the same rail turned on its side
 * and scrolled on mobile. The active entry lights up: a Mist surface carrying Ink Navy,
 * held by the 4px red bar. Mist rather than white, because white in this system means a
 * card, and the rail is a control sitting beside real cards. Never a red label, which
 * cannot carry contrast here.
 */
export default function CategoryRail({ posts }: { posts: PostMeta[] }) {
  const { selectedCategory, setSelectedCategory } = useBlogContext();

  const countFor = (category: string) => {
    const tags = tagsForCategory(category);
    if (!tags) return posts.length;
    return posts.filter((post) => post.tags.some((tag) => tags.includes(tag)))
      .length;
  };

  return (
    <nav aria-label="Post categories" className="md:w-52 md:shrink-0">
      <span className="block font-audiowide text-xs tracking-[0.35em] text-gray-400 mb-3 md:mb-5">
        CATEGORIES
      </span>

      {/* The fade tells a phone there is more rail past the edge. */}
      <div className="relative after:pointer-events-none after:absolute after:inset-y-0 after:right-0 after:w-10 after:bg-gradient-to-l after:from-[#1e1b4b] md:after:hidden">
        <div className="flex overflow-x-auto border-b border-white/15 -mx-4 px-4 md:mx-0 md:px-0 md:flex-col md:overflow-visible md:border-b-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {CATEGORIES.map((category) => {
            const active = selectedCategory === category;
            return (
              <button
                key={category}
                type="button"
                aria-current={active ? "true" : undefined}
                onClick={() => setSelectedCategory(category)}
                className={`shrink-0 flex items-center gap-2 whitespace-nowrap min-h-[44px] px-4 border-b-4 rounded-t-md transition-colors md:w-full md:justify-between md:pl-4 md:pr-3 md:border-b-0 md:border-l-4 md:rounded-t-none md:rounded-r-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white ${
                  active
                    ? "border-red-600 bg-gray-100 text-blue-950 font-semibold"
                    : "border-transparent text-gray-100 hover:bg-white/10 hover:text-white"
                }`}
              >
                <span>{category}</span>
                <span
                  className={`text-sm ${
                    active ? "text-gray-600" : "text-gray-400"
                  }`}
                >
                  {countFor(category)}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
