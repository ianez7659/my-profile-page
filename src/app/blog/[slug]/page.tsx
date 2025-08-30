import Link from "next/link";
import { getPostBySlug } from "@/lib/blog";
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

  const { content } = await compileMDX({
    source: post.content,
    components: {
      Callout,
      MarkdownWrapper,
    },
  });

  return (
    <main className="max-w-4xl mx-auto px-4 md:px-6 py-16 text-gray-100 bg-[#1e3a8a] rounded-xl">
      <Link
        href="/blog"
        className="inline-flex items-center gap-2 text-lg text-white hover:text-blue-300 mb-6"
      >
        <ArrowLeft size={25} />
        Back to Blog
      </Link>
      <h1 className="text-3xl font-bold mb-4">{post.meta.title}</h1>
      <p className="text-sm text-gray-100 mb-8">{post.meta.date}</p>

      {post.meta.tags?.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-8">
          {post.meta.tags.map((tag: string) => (
            <span
              key={tag}
              className="inline-block bg-gray-500 text-sm text-gray-100 px-2 py-1 rounded"
            >
              #{tag}
            </span>
          ))}
        </div>
      )}

      <article className="prose prose-md">{content}</article>
    </main>
  );
}
