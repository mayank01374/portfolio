import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import readingTime from "reading-time";
import { remark } from "remark";
import html from "remark-html";
import gfm from "remark-gfm";

export type BlogFrontmatter = {
  title: string;
  date: string; // ISO string recommended
  excerpt: string;
  tags?: string[];
  coverImage?: string;
};

export type BlogPostMeta = BlogFrontmatter & {
  slug: string;
  readingTime: string;
};

const BLOG_DIR = path.join(process.cwd(), "content", "blog");

export function getAllPostSlugs(): string[] {
  if (!fs.existsSync(BLOG_DIR)) return [];
  return fs
    .readdirSync(BLOG_DIR)
    .filter((f) => f.endsWith(".md"))
    .map((f) => f.replace(/\.md$/, ""));
}

export function getAllPostsMeta(): BlogPostMeta[] {
  const slugs = getAllPostSlugs();
  const posts = slugs
    .map((slug) => {
      const fullPath = path.join(BLOG_DIR, `${slug}.md`);
      const raw = fs.readFileSync(fullPath, "utf-8");
      const { data, content } = matter(raw);
      const fm = data as Partial<BlogFrontmatter>;

      const stats = readingTime(content);
      return {
        slug,
        title: fm.title ?? slug,
        date: fm.date ?? "1970-01-01",
        excerpt: fm.excerpt ?? "",
        tags: fm.tags ?? [],
        coverImage: fm.coverImage,
        readingTime: stats.text,
      };
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return posts;
}

export async function getPostBySlug(slug: string) {
  const fullPath = path.join(BLOG_DIR, `${slug}.md`);
  if (!fs.existsSync(fullPath)) return null;

  const raw = fs.readFileSync(fullPath, "utf-8");
  const { data, content } = matter(raw);
  const fm = data as Partial<BlogFrontmatter>;

  const processed = await remark().use(gfm).use(html).process(content);
  const contentHtml = processed.toString();

  const stats = readingTime(content);

  const frontmatter: BlogFrontmatter = {
    title: fm.title ?? slug,
    date: fm.date ?? "1970-01-01",
    excerpt: fm.excerpt ?? "",
    tags: fm.tags ?? [],
    coverImage: fm.coverImage,
  };

  return {
    slug,
    frontmatter,
    contentHtml,
    readingTime: stats.text,
  };
}
