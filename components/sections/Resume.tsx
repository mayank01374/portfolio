import SectionShell from "@/components/SectionShell";
import { workExperience, education } from "@/data/portfolio";
import { FiDownload } from "react-icons/fi";
import Image from "next/image";

export function Resume() {
  return (
    <SectionShell
      id="resume"
      title="Experience & Education"
      subtitle="My academic journey and professional career."
    >
      <div className="mx-auto max-w-5xl">
        <div className="flex justify-center mb-12">
          <a
            href="/resume.pdf"
            download="My_Resume.pdf"
            className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-full font-medium transition-all shadow-lg shadow-blue-900/20"
          >
            <FiDownload /> Download Resume
          </a>
        </div>

        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <h3 className="mb-8 text-2xl font-bold text-slate-200 flex items-center gap-2">
              <span className="text-blue-500">#</span> Work Experience
            </h3>
            <div className="border-l border-slate-800 pl-8 space-y-12">
              {workExperience.map((item) => (
                <TimelineItem
                  key={item.id}
                  title={item.role}
                  subtitle={item.company}
                  date={`${item.startDate} - ${item.endDate}`}
                  desc={item.desc}
                  logo={item.logo}
                />
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-8 text-2xl font-bold text-slate-200 flex items-center gap-2">
              <span className="text-purple-500">#</span> Education
            </h3>
            <div className="border-l border-slate-800 pl-8 space-y-12">
              {education.map((item) => (
                <TimelineItem
                  key={item.id}
                  title={item.degree}
                  subtitle={item.institution}
                  date={`${item.startDate} - ${item.endDate}`}
                  desc={item.desc}
                  logo={item.logo}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </SectionShell>
  );
}

function TimelineItem({ title, subtitle, date, desc, logo }: any) {
  return (
    <div className="relative group">
      <div className="absolute -left-[39px] top-2 h-3.5 w-3.5 rounded-full border-2 border-slate-950 bg-slate-600 transition-colors group-hover:bg-blue-500" />
      <div className="flex flex-col sm:flex-row gap-4 items-start">
        {logo && (
          <div className="relative h-12 w-12 flex-none rounded-md bg-white overflow-hidden border border-slate-700/50">
            <Image
              src={logo}
              alt={subtitle}
              fill
              className="object-contain p-1"
            />
          </div>
        )}
        <div className="flex-1">
          <h4 className="text-lg font-semibold text-slate-100 leading-tight mb-1">
            {title}
          </h4>
          <div className="text-slate-400 font-medium text-sm mb-2">
            {subtitle}
          </div>
          <span className="inline-block text-xs font-mono text-slate-500 bg-slate-900/50 px-2 py-0.5 rounded border border-slate-800 mb-3">
            {date}
          </span>
          <p className="text-slate-400 leading-relaxed text-sm text-justify">
            {desc}
          </p>
        </div>
      </div>
    </div>
  );
}
