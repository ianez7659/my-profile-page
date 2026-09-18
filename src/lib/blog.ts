import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDir = path.join(process.cwd(), "src/content/blog");

export type PostMeta = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  tags: string[];
};

export function getAllPosts() {
  const files = fs.readdirSync(postsDir);

  return files.map((filename) => {
    const slug = filename.replace(".mdx", "");
    const filePath = path.join(postsDir, filename);
    const content = fs.readFileSync(filePath, "utf-8");
    const { data } = matter(content);

    return {
      slug,
      title: data.title,
      date: data.date,
      excerpt: data.excerpt,
      tags: data.tags ?? [],
    };
  });
}

export async function getPostBySlug(slug: string) {
  const filePath = path.join(postsDir, `${slug}.mdx`);
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { content, data } = matter(fileContent);

  return {
    slug,
    content,
    meta: data,
  };
}

/**
 * Newest first. The list page and the post pager both read this, so the order a
 * reader sees in the list is the order "previous" and "next" walk.
 */
export function getPostsNewestFirst(): PostMeta[] {
  return getAllPosts().sort((a, b) => b.slug.localeCompare(a.slug));
}

/** The posts either side of `slug`: previous is the older one, next the newer. */
export function getAdjacentPosts(slug: string) {
  const posts = getPostsNewestFirst();
  const index = posts.findIndex((post) => post.slug === slug);
  if (index === -1) return { previous: null, next: null };
  return {
    previous: posts[index + 1] ?? null,
    next: posts[index - 1] ?? null,
  };
}
