import { personalInfo } from "@/data/portfolio";

export default function Footer() {
  return (
    <footer id="contact" className="py-12">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-semibold">Let’s talk</h2>
          <p className="mt-2 text-slate-400">
            For collaborations or opportunities, reach out via email.
          </p>

          <a
            href={`mailto:${personalInfo.email}`}
            className="mt-6 inline-flex items-center justify-center rounded-full bg-slate-900/40 border border-slate-800 px-7 py-3 font-medium hover:bg-slate-900/70 transition"
          >
            {personalInfo.email}
          </a>

          <p className="mt-8 text-xs text-slate-600">
            © {new Date().getFullYear()} {personalInfo.name}. Built with Next.js
            & Tailwind.
          </p>
        </div>
      </div>
    </footer>
  );
}
