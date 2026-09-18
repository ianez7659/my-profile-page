import { getPostsNewestFirst } from "@/lib/blog";
import CategoryRail from "@/components/CategoryRail";
import BlogContent from "@/components/BlogContent";
import { BlogProvider } from "@/contexts/BlogContext";

export const metadata = {
  title: "Blog",
  description:
    "Posts on front-end work, MDX and animation experiments, and the projects behind this portfolio.",
};

export default function BlogListPage() {
  const posts = getPostsNewestFirst();

  return (
    <BlogProvider>
      <main className="max-w-6xl mx-auto px-4 py-12 md:py-16 text-white">
        <div className="flex flex-col md:flex-row gap-8 md:gap-14">
          <CategoryRail posts={posts} />
          <div className="flex-grow min-w-0">
            <BlogContent posts={posts} />
          </div>
        </div>
      </main>
    </BlogProvider>
  );
}
