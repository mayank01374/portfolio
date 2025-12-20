import SectionShell from "@/components/SectionShell";
import { achievements } from "@/data/portfolio";

export function Achievements() {
  return (
    <SectionShell
      id="achievements"
      title="Achievements"
      subtitle="Highlights and milestones I’m proud of."
      // REMOVED: className="bg-slate-950"
    >
      <div className="grid md:grid-cols-2 gap-6">
        {achievements.map((a) => (
          <div
            key={a.id}
            className="rounded-2xl border border-slate-800/70 bg-slate-900/30 p-6 hover:bg-slate-900/50 transition"
          >
            <div className="flex items-start justify-between gap-4">
              <h3 className="text-xl font-semibold text-blue-300">{a.title}</h3>
              <span className="text-xs text-slate-400">{a.date}</span>
            </div>
            <p className="mt-2 text-slate-300/90">{a.description}</p>
          </div>
        ))}
      </div>
    </SectionShell>
  );
}
