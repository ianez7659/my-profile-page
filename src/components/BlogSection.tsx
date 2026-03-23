import Link from "next/link";
import { getAllPosts, PostMeta } from "@/lib/blog";
import Button from "@/components/Button";
import LandingSection from "@/components/LandingSection";
import SectionHeading from "@/components/SectionHeading";

export default function BlogSection() {
  const posts: PostMeta[] = getAllPosts()
    .sort((a, b) => (a.date < b.date ? 1 : -1))
    .slice(0, 2);
  return (
    <LandingSection id="blog" variant="cardBlue">
      <div className="max-w-5xl mx-auto">
        <SectionHeading>Blog</SectionHeading>

        <div className="space-y-6">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group flex flex-col border border-gray-200 rounded-xl p-4 bg-white hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
            >
              <div className="group border border-gray-400 rounded-xl p-6 bg-white shadow-md hover:shadow-lg transition hover:-translate-y-1">
                <h2 className="text-xl font-semibold text-blue-950 group-hover:underline">
                  {post.title}
                </h2>
                <p className="text-sm text-gray-500 mt-1">
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
                      className="bg-gray-200/70 text-[11px] text-gray-700 px-2 py-0.5 rounded-full font-medium"
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
    </LandingSection>
  );
}
