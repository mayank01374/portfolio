import Link from "next/link";
import Image from "next/image";
import SectionShell from "@/components/SectionShell";
import type { BlogPostMeta } from "@/lib/blog";
import { formatDate } from "@/lib/utils";

export default function BlogSection({ posts }: { posts: BlogPostMeta[] }) {
  return (
    <SectionShell
      id="blogs"
      title="Latest Blogs"
      subtitle="Short, practical write-ups — mostly about building and debugging."
      className="bg-slate-950"
    >
      <div className="grid md:grid-cols-3 gap-6">
        {posts.map((p) => (
          <article
            key={p.slug}
            className="group rounded-2xl border border-slate-800/70 bg-slate-900/30 overflow-hidden hover:bg-slate-900/50 transition"
          >
            <Link href={`/blog/${p.slug}`} className="block">
              <div className="relative h-44 w-full">
                {p.coverImage ? (
                  <Image
                    src={p.coverImage}
                    alt={p.title}
                    fill
                    className="object-cover opacity-90 group-hover:opacity-100 transition"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                ) : (
                  <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/50 via-slate-900/20 to-purple-900/30" />
                )}
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between gap-3 text-xs text-slate-400">
                  <span>{formatDate(p.date)}</span>
                  <span>{p.readingTime}</span>
                </div>
                <h3 className="mt-2 text-lg font-semibold group-hover:text-blue-300 transition">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm text-slate-400 line-clamp-3">
                  {p.excerpt}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tags?.slice(0, 3).map((t) => (
                    <span
                      key={t}
                      className="text-xs rounded-full border border-slate-800 px-3 py-1 text-slate-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          </article>
        ))}
      </div>

      <div className="mt-10 text-center">
        <Link
          href="/blog"
          className="inline-flex items-center justify-center rounded-full bg-blue-600 px-7 py-3 font-medium hover:bg-blue-700 transition"
        >
          View all posts
        </Link>
      </div>
    </SectionShell>
  );
}
