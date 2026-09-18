import Link from "next/link";
import { getPostBySlug, getAdjacentPosts } from "@/lib/blog";
import PagerLink from "@/components/PagerLink";
import { compileMDX } from "next-mdx-remote/rsc";
import { notFound } from "next/navigation";
import Callout from "@/components/Callout";
import MarkdownWrapper from "@/components/MarkDownWrapper";
import { ArrowLeft } from "lucide-react";

interface Props {
  params: Promise<{ slug: string }>;
}

export default async function BlogDetailPage({ params }: Props) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) return notFound();

  const { previous, next } = getAdjacentPosts(slug);

  const { content } = await compileMDX({
    source: post.content,
    components: {
      Callout,
      MarkdownWrapper,
    },
    options: {
      parseFrontmatter: false,
    },
  });

  return (
    <main className="max-w-3xl mx-auto px-4 md:px-6 py-16 text-gray-100">
      <Link
        href="/blog"
        className="inline-flex items-center gap-2 text-lg text-white hover:text-red-500 transition-colors mb-6 rounded-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
      >
        <ArrowLeft size={25} />
        Back to Blog
      </Link>
      <h1 className="text-3xl font-bold mb-3">{post.meta.title}</h1>
      <span className="block h-[4px] w-10 bg-red-600 rounded mb-4" />
      <p className="text-sm text-gray-400 mb-8">{post.meta.date}</p>

      {post.meta.tags?.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-8">
          {post.meta.tags.map((tag: string) => (
            <span
              key={tag}
              className="inline-block bg-gray-100/15 text-[11px] text-gray-100 px-2.5 py-0.5 rounded-full font-medium"
            >
              #{tag}
            </span>
          ))}
        </div>
      )}

      <article className="prose prose-md">{content}</article>

      {(previous || next) && (
        <nav aria-label="More posts">
          <hr className="border-0 h-px bg-white/20 my-10" />
          <div className="grid gap-6 sm:grid-cols-2">
            {previous ? (
              <PagerLink
                href={`/blog/${previous.slug}`}
                label="PREVIOUS"
                title={previous.title}
                direction="prev"
                layout="stack"
              />
            ) : (
              <span aria-hidden />
            )}
            {next && (
              <PagerLink
                href={`/blog/${next.slug}`}
                label="NEXT"
                title={next.title}
                direction="next"
                layout="stack"
              />
            )}
          </div>
        </nav>
      )}
    </main>
  );
}
