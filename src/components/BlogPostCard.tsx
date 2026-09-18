import Link from "next/link";
import type { PostMeta } from "@/lib/blog";

type Props = {
  post: PostMeta;
  /** Tags to mark as the active filter. Undefined on the landing, where nothing filters. */
  activeTags?: string[];
};

/**
 * One blog post, identical on the landing and on /blog.
 * Renders a Link, never an li, and carries no margin: spacing belongs to the list.
 */
export default function BlogPostCard({ post, activeTags }: Props) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group flex flex-col sm:flex-row sm:gap-6 border border-gray-200 rounded-xl p-6 bg-white shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
    >
      {/* Date rail: the post's marker, not a footnote under the title. */}
      <div className="shrink-0 sm:w-24 sm:border-r sm:border-gray-200 sm:pr-6">
        <span className="block text-lg font-semibold text-blue-950 leading-tight">
          {new Date(post.date).toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
          })}
        </span>
        <span className="block text-sm text-gray-500">
          {new Date(post.date).getFullYear()}
        </span>
      </div>

      <div className="flex flex-col mt-4 sm:mt-0">
        <h2 className="text-xl font-semibold text-blue-950 group-hover:underline">
          {post.title}
        </h2>

        <div className="flex flex-wrap gap-2 mt-3">
          {post.tags.map((tag: string) => (
            <span
              key={tag}
              className={
                activeTags?.includes(tag)
                  ? "bg-red-600 text-[11px] text-white px-2 py-0.5 rounded-full font-medium"
                  : "bg-gray-200/70 text-[11px] text-gray-700 px-2 py-0.5 rounded-full font-medium"
              }
            >
              #{tag}
            </span>
          ))}
        </div>

        <p className="text-sm text-gray-700 mt-3 line-clamp-2">
          {post.excerpt}
        </p>
      </div>
    </Link>
  );
}
