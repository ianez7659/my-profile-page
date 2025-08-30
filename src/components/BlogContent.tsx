"use client";

import Link from "next/link";
import { Rss } from "lucide-react";
import { useBlogContext } from "@/contexts/BlogContext";

interface BlogContentProps {
  posts: Array<{
    slug: string;
    title: string;
    date: string;
    excerpt: string;
    tags: string[];
  }>;
}

export default function BlogContent({ posts }: BlogContentProps) {
  const { selectedCategory } = useBlogContext();

  // Filter posts by selected category
  const filteredPosts = selectedCategory === "All" 
    ? posts 
    : selectedCategory === "Hobby/Interests"
    ? posts.filter(post => post.tags.includes("Hobby") || post.tags.includes("Interests"))
    : posts.filter(post => post.tags.includes(selectedCategory));

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl md:text-6xl text-white mb-6 flex items-center gap-2">
        <Rss size={48} className="text-red-500" /> Blog
      </h1>

      {selectedCategory !== "All" && (
        <div className="mb-6">
          <p className="text-white text-lg">
            Showing posts tagged with: <span className="text-red-500 font-semibold">{selectedCategory}</span>
          </p>
        </div>
      )}

      <ul className="space-y-8 bg-[#1e3a8a] rounded-xl p-6">
        {filteredPosts.length > 0 ? (
          filteredPosts.map((post) => (
            <li key={post.slug}>
              <Link href={`/blog/${post.slug}`}>
                <div className="group bg-white dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-700 rounded-xl p-4 shadow-md hover:shadow-xl transition-transform duration-300 hover:-translate-y-1">
                  <div className="border border-neutral-400 dark:border-neutral-700 rounded-lg p-4">
                    <h2 className="text-xl font-bold text-blue-900 dark:text-white group-hover:text-red-500 transition-colors duration-300">
                      {post.title}
                    </h2>

                    <p className="text-sm text-blue-800 dark:text-gray-400 mt-1">
                      {new Date(post.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </p>

                    <div className="flex flex-wrap gap-2 mt-3">
                      {post.tags.map((tag: string) => (
                        <span
                          key={tag}
                          className={`text-[11px] px-2 py-0.5 rounded-full font-medium ${
                            (selectedCategory === "Hobby/Interests" && (tag === "Hobby" || tag === "Interests")) ||
                            tag === selectedCategory
                              ? "bg-red-500 text-white" 
                              : "bg-red-100 text-red-700 dark:bg-neutral-800 dark:text-red-400"
                          }`}
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>

                    <p className="text-sm text-gray-800 dark:text-gray-300 mt-4 line-clamp-2">
                      {post.excerpt}
                    </p>
                  </div>
                </div>
              </Link>
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
