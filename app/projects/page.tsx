import SectionShell from "@/components/SectionShell";
import { projects } from "@/data/portfolio";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import Image from "next/image";

export const metadata = {
  title: "Projects | Your Name",
  description: "Showcase of my latest work and side projects.",
};

export default function ProjectsPage() {
  return (
    // Removed 'bg-slate-950'
    <main className="min-h-screen pt-20">
      <SectionShell
        id="projects"
        title="Projects"
        subtitle="Things I've built to solve problems."
      >
        <div className="mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative flex flex-col bg-slate-900/50 border border-slate-800 rounded-xl overflow-hidden hover:border-slate-600 transition-all hover:shadow-2xl hover:shadow-blue-900/20"
            >
              <div className="relative h-48 w-full overflow-hidden bg-slate-950">
                {project.image ? (
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                ) : (
                  <div className="flex h-full items-center justify-center text-slate-700 bg-slate-900">
                    <span className="text-sm font-mono">No Preview</span>
                  </div>
                )}
              </div>

              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-xl font-bold text-slate-100 mb-2">
                  {project.title}
                </h3>
                <p className="text-slate-400 text-sm mb-4 flex-1 leading-relaxed">
                  {project.desc}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs font-medium text-blue-300 bg-blue-500/10 border border-blue-500/20 px-2 py-1 rounded"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4 mt-auto pt-4 border-t border-slate-800">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors"
                    >
                      <FiGithub className="text-lg" /> Code
                    </a>
                  )}
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors"
                    >
                      <FiExternalLink className="text-lg" /> Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </SectionShell>
    </main>
  );
}
