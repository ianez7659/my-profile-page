"use client";

import type { PostMeta } from "@/lib/blog";
import BlogPostCard from "@/components/BlogPostCard";
import { useBlogContext } from "@/contexts/BlogContext";

interface BlogContentProps {
  posts: PostMeta[];
}

export default function BlogContent({ posts }: BlogContentProps) {
  const { selectedCategory } = useBlogContext();

  // A category maps to the tags it selects; the card only marks what it is handed.
  const activeTags =
    selectedCategory === "All"
      ? undefined
      : selectedCategory === "Hobby/Interests"
      ? ["Hobby", "Interests"]
      : [selectedCategory];

  const filteredPosts = activeTags
    ? posts.filter((post) => post.tags.some((tag) => activeTags.includes(tag)))
    : posts;

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl text-white mb-6">Blog</h1>

      {selectedCategory !== "All" && (
        <div className="mb-6">
          <p className="text-white text-lg">
            Showing posts tagged with: <span className="text-red-500 font-semibold">{selectedCategory}</span>
          </p>
        </div>
      )}

      <ul className="space-y-8">
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
