import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-slate-950 flex items-center justify-center px-6">
      <div className="max-w-md text-center">
        <h1 className="text-3xl font-bold">Page not found</h1>
        <p className="mt-2 text-slate-400">
          The page you’re looking for doesn’t exist.
        </p>
        <Link
          href="/"
          className="inline-flex mt-6 items-center justify-center rounded-full bg-blue-600 px-6 py-3 font-medium hover:bg-blue-700 transition"
        >
          Go home
        </Link>
      </div>
    </main>
  );
}
