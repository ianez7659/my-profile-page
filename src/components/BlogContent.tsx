"use client";

import type { PostMeta } from "@/lib/blog";
import BlogPostCard from "@/components/BlogPostCard";
import SectionHeading from "@/components/SectionHeading";
import { tagsForCategory } from "@/components/CategoryRail";
import { useBlogContext } from "@/contexts/BlogContext";

interface BlogContentProps {
  posts: PostMeta[];
}

export default function BlogContent({ posts }: BlogContentProps) {
  const { selectedCategory } = useBlogContext();

  const activeTags = tagsForCategory(selectedCategory);

  const filteredPosts = activeTags
    ? posts.filter((post) => post.tags.some((tag) => activeTags.includes(tag)))
    : posts;

  return (
    <div>
      {/* The heading carries the count, so the rail's selection needs no second announcement. */}
      <SectionHeading
        as="h1"
        index={`${selectedCategory.toUpperCase()} · ${String(
          filteredPosts.length
        ).padStart(2, "0")}`}
      >
        Blog
      </SectionHeading>

      <ul className="space-y-6">
        {filteredPosts.length > 0 ? (
          filteredPosts.map((post) => (
            <li key={post.slug}>
              <BlogPostCard post={post} activeTags={activeTags} />
            </li>
          ))
        ) : (
          <li className="text-center py-8">
            <p className="text-white text-lg">No posts found for this category.</p>
          </li>
        )}
      </ul>
    </div>
  );
}
