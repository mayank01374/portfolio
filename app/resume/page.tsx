import { Resume } from "@/components/sections/Resume";

export const metadata = {
  title: "Resume | Your Name",
};

export default function ResumePage() {
  return (
    <main className="min-h-screen pt-20">
      <Resume />
    </main>
  );
}
