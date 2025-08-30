// import Link from "next/link";
import { getAllPosts } from "@/lib/blog";
// import { Rss } from "lucide-react";
import BlogSidebar from "@/components/BlogSidebar";
import BlogContent from "@/components/BlogContent";
import { BlogProvider } from "@/contexts/BlogContext";

export default function BlogListPage() {
  const posts = getAllPosts();

  const sortedPosts = posts.sort((a, b) => {
    return b.slug.localeCompare(a.slug);
  });

  return (
    <BlogProvider>
      <div className="flex">
        <BlogSidebar posts={posts} />
        {/* Main contents*/}
        <main className="flex-1 py-12 px-4 md:ml-0">
          <BlogContent posts={sortedPosts} />
        </main>
      </div>
    </BlogProvider>
  );
}
