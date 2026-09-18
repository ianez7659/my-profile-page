import { getAllPosts, PostMeta } from "@/lib/blog";
import Button from "@/components/Button";
import LandingSection from "@/components/LandingSection";
import SectionHeading from "@/components/SectionHeading";
import BlogPostCard from "@/components/BlogPostCard";

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
            <BlogPostCard key={post.slug} post={post} />
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
