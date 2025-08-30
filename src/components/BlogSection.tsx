// "use client";

import Link from "next/link";
import { getAllPosts, PostMeta } from "@/lib/blog";
import Button from "@/components/Button";

export default function BlogSection() {
  const posts: PostMeta[] = getAllPosts()
    .sort((a, b) => (a.date < b.date ? 1 : -1))
    .slice(0, 2);
  return (
    <section
      id="blog"
      className="py-16 mx-4 rounded-xl bg-[#1e3a8a] scroll-mt-16"
    >
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-center">
          <div className=" w-full group px-4 py-2 my-6 rounded transition-colors duration-300 text-white hover:bg-[#1e3a8a] hover:text-white text-center">
            <h2 className="text-3xl md:text-4xl font-medium font-audiowide">
              Blog
            </h2>
            <span className="block mx-auto mt-2 h-[4px] w-10 bg-red-500 rounded transition-all duration-500 group-hover:w-24" />
          </div>
        </div>

        <div className="space-y-6">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group flex flex-col border border-gray-200 dark:border-neutral-700 rounded-xl p-4 bg-white dark:bg-neutral-900 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
            >
              <div className="group border border-gray-400 rounded-xl p-6 bg-white dark:bg-neutral-900 shadow-md hover:shadow-lg transition hover:-translate-y-1">
                <h2 className="text-xl font-semibold text-blue-950 dark:text-white group-hover:underline">
                  {post.title}
                </h2>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                  {new Date(post.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}
                </p>

                <div className="flex flex-wrap gap-2 mt-2">
                  {post.tags.map((tag: string) => (
                    <span
                      key={tag}
                      className="bg-gray-200/70 dark:bg-neutral-700/60 text-[11px] text-gray-700 dark:text-gray-300 px-2 py-0.5 rounded-full font-medium"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                <p className="text-sm text-gray-700 dark:text-gray-300 mt-3 line-clamp-2">
                  {post.excerpt}
                </p>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-10">

          <Button
            href="/blog"
            variant="outline"
            className="hover:bg-[#1e1b4b] hover:border-[##1e1b4b]"
          >
            View All Posts
          </Button>
        </div>
      </div>
    </section>
  );
}
