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
    <LandingSection id="blog" variant="band">
      <div className="max-w-5xl mx-auto">
        <SectionHeading index="04">Blog</SectionHeading>

        <div className="space-y-6">
          {posts.map((post) => (
            <Link
              key={post.slug}
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
            className="hover:bg-[#1e1b4b] hover:border-[#1e1b4b]"
          >
            View All Posts
          </Button>
        </div>
      </div>
    </LandingSection>
  );
}
