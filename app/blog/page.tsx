import Link from "next/link";
import { getAllPostsMeta } from "@/lib/blog";
import { formatDate } from "@/lib/utils";
import { FiCpu, FiPenTool } from "react-icons/fi";

export const metadata = {
  title: "Blogs",
  description: "All blog posts.",
};

export default function BlogIndexPage() {
  const posts = getAllPostsMeta();

  return (
    <main className="min-h-screen pt-28 pb-16">
      <div className="container">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            Blogs
          </h1>
          <p className="mt-3 text-slate-400">
            Notes on building, learning, and shipping.
          </p>
        </div>

        {posts.length > 0 ? (
          <div className="mt-10 grid gap-5">
            {posts.map((p) => (
              <Link
                key={p.slug}
                href={`/blog/${p.slug}`}
                className="group rounded-2xl border border-slate-800/70 bg-slate-900/30 hover:bg-slate-900/50 transition p-6"
              >
                <div className="flex items-center justify-between gap-4">
                  <h2 className="text-xl md:text-2xl font-semibold group-hover:text-blue-300 transition">
                    {p.title}
                  </h2>
                  <span className="text-xs text-slate-400 whitespace-nowrap">
                    {formatDate(p.date)}
                  </span>
                </div>
                <p className="mt-2 text-slate-400">{p.excerpt}</p>
                <div className="mt-4 flex items-center gap-3 text-xs text-slate-500">
                  <span>{p.readingTime}</span>
                  {p.tags?.length ? <span>•</span> : null}
                  {p.tags?.slice(0, 4).map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-slate-800 px-2 py-1"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="mt-20 flex flex-col items-center justify-center text-center p-12 rounded-3xl border border-dashed border-slate-800/50 bg-slate-900/10">
            <div className="relative mb-6">
              <div className="absolute inset-0 bg-blue-500 blur-2xl opacity-20 rounded-full" />
              <div className="relative bg-slate-900 p-4 rounded-full border border-slate-800">
                <FiCpu className="text-4xl text-blue-400" />
              </div>
            </div>

            <h3 className="text-xl font-bold text-slate-200 mb-2">
              404: Thoughts Not Found
            </h3>
            <p className="text-slate-400 max-w-md mx-auto leading-relaxed">
              Learning things <br />
            </p>
          </div>
        )}
      </div>
    </main>
  );
}
