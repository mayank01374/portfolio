import Hero from "@/components/Hero";
import { Achievements } from "@/components/sections/Achievements";
import { CompetitiveProgramming } from "@/components/sections/CompetitiveProgramming";
import { Resume } from "@/components/sections/Resume";

export default function Home() {
  return (
    <main className="relative">
      <Hero />

      <Resume />

      <Achievements />

      <CompetitiveProgramming />
    </main>
  );
}
