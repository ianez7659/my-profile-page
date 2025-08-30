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
