import SectionShell from "@/components/SectionShell";
import { competitiveProgramming } from "@/data/portfolio";
import { FiExternalLink, FiCode } from "react-icons/fi";
import Image from "next/image"; // Import Image component

export function CompetitiveProgramming() {
  return (
    <SectionShell
      id="cp"
      title="Competitive Programming"
      subtitle="Problem solving across various platforms."
    >
      <div className="mx-auto max-w-4xl grid gap-6 md:grid-cols-3">
        {competitiveProgramming.map((item) => (
          <a
            key={item.id}
            href={item.link}
            target="_blank"
            rel="noreferrer"
            className="group relative overflow-hidden rounded-xl border border-slate-800 bg-slate-900/50 p-6 hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10"
          >
            <div className="flex items-center justify-between mb-4">
              {/* Check if logo exists, otherwise fallback to FiCode */}
              {item.logo ? (
                <div className="relative h-8 w-8 overflow-hidden rounded">
                  <Image
                    src={item.logo}
                    alt={item.platform}
                    fill
                    className="object-contain"
                  />
                </div>
              ) : (
                <FiCode className="text-2xl text-blue-400" />
              )}

              <FiExternalLink className="text-slate-500 group-hover:text-blue-400 transition-colors" />
            </div>

            <h3 className="text-lg font-bold text-slate-100">
              {item.platform}
            </h3>

            <div className="mt-4 space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-slate-400">Max Rating</span>
                <span className="font-mono text-blue-300">{item.rating}</span>
              </div>
              {item.rank && (
                <div className="flex justify-between text-sm">
                  <span className="text-slate-400">Rank</span>
                  <span className="font-mono text-green-300">{item.rank}</span>
                </div>
              )}
            </div>
          </a>
        ))}
      </div>
    </SectionShell>
  );
}
