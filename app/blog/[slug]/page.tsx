import type { Metadata } from "next";
import Image from "next/image";
// Removed duplicate Navbar/Footer imports
import { getAllPostSlugs, getPostBySlug } from "@/lib/blog";
import { formatDate } from "@/lib/utils";
import { notFound } from "next/navigation";
import { siteConfig } from "@/data/portfolio";

export async function generateStaticParams() {
  return getAllPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  // Await params if using Next.js 15 (though usually params is a promise in the latest types, standard access often works in 14/15 depending on config. Assuming consistent with your current setup.)
  const resolvedParams = await Promise.resolve(params);
  const post = await getPostBySlug(resolvedParams.slug);
  if (!post) return {};

  const title = post.frontmatter.title;
  const description = post.frontmatter.excerpt || siteConfig.description;

  return {
    title,
    description,
    alternates: { canonical: `/blog/${resolvedParams.slug}` },
    openGraph: {
      title,
      description,
      url: `/blog/${resolvedParams.slug}`,
      type: "article",
      images: post.frontmatter.coverImage ? [post.frontmatter.coverImage] : [],
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const resolvedParams = await Promise.resolve(params); // Safe handling for Next 15
  const post = await getPostBySlug(resolvedParams.slug);
  if (!post) notFound();

  const { frontmatter } = post;

  return (
    // Removed 'bg-slate-950'
    <main className="min-h-screen">
      {/* Navbar is in layout.tsx */}
      <article className="pt-28 pb-16">
        <div className="container">
          <div className="mx-auto max-w-3xl">
            <div className="flex items-center gap-3 text-sm text-slate-400">
              <span>{formatDate(frontmatter.date)}</span>
              <span>•</span>
              <span>{post.readingTime}</span>
            </div>

            <h1 className="mt-3 text-4xl md:text-5xl font-bold tracking-tight">
              {frontmatter.title}
            </h1>

            {frontmatter.coverImage ? (
              <div className="mt-8 overflow-hidden rounded-2xl border border-slate-800/70">
                <Image
                  src={frontmatter.coverImage}
                  alt={frontmatter.title}
                  width={1400}
                  height={700}
                  className="h-auto w-full"
                  priority
                />
              </div>
            ) : null}

            <div
              className="prose prose-invert mt-10 max-w-none prose-headings:scroll-mt-28 prose-a:text-blue-300 prose-code:text-slate-200 prose-pre:border prose-pre:border-slate-800/70 prose-pre:bg-slate-900/40"
              dangerouslySetInnerHTML={{ __html: post.contentHtml }}
            />

            {frontmatter.tags?.length ? (
              <div className="mt-10 flex flex-wrap gap-2">
                {frontmatter.tags.map((t) => (
                  <span
                    key={t}
                    className="text-xs rounded-full border border-slate-800 px-3 py-1 text-slate-300"
                  >
                    {t}
                  </span>
                ))}
              </div>
            ) : null}
          </div>
        </div>
      </article>
      {/* Footer is in layout.tsx */}
    </main>
  );
}
