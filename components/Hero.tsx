// "use client";

// import Image from "next/image";
// import Typewriter from "typewriter-effect";
// import { motion } from "framer-motion";
// import { personalInfo } from "@/data/portfolio";
// import Link from "next/link";

// export default function Hero() {
//   return (
//     <section
//       id="home"
//       className="relative min-h-screen flex items-center justify-center"
//     >
//       <div className="container relative z-10 pt-28 pb-20">
//         <div className="mx-auto max-w-3xl text-center">
//           <motion.div
//             initial={{ opacity: 0, y: 16 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             className="mx-auto w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden border border-slate-700/70 shadow-2xl"
//           >
//             <Image
//               src="/photo2.jpg"
//               alt={`${personalInfo.name} profile photo`}
//               width={256}
//               height={256}
//               className="w-full h-full object-cover"
//               priority
//             />
//           </motion.div>

//           <motion.p
//             initial={{ opacity: 0, y: 10 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.08 }}
//             className="mt-6 text-slate-400"
//           >
//             Hi, I&apos;m
//           </motion.p>

//           <motion.h1
//             initial={{ opacity: 0, y: 10 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.12 }}
//             className="mt-2 text-5xl md:text-7xl font-bold tracking-tight"
//           >
//             <span className="bg-gradient-to-r from-blue-200 via-slate-100 to-purple-200 bg-clip-text text-transparent">
//               {personalInfo.name}
//             </span>
//           </motion.h1>

//           <motion.div
//             initial={{ opacity: 0, y: 10 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.18 }}
//             className="mt-5 text-xl sm:text-2xl md:text-3xl font-mono text-blue-300 h-[44px]"
//           >
//             <Typewriter
//               options={{
//                 strings: personalInfo.role,
//                 autoStart: true,
//                 loop: true,
//                 delay: 60,
//                 deleteSpeed: 28,
//               }}
//             />
//           </motion.div>

//           {/* <motion.p
//             initial={{ opacity: 0, y: 10 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.24 }}
//             className="mt-6 text-slate-300/90 max-w-2xl mx-auto leading-relaxed"
//           >
//             {personalInfo.bio}
//           </motion.p> */}

//           <motion.div
//             initial={{ opacity: 0, y: 10 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.3 }}
//             className="mt-10 flex flex-wrap items-center justify-center gap-3"
//           >
//             {personalInfo.socials.map((s) => (
//               <Link
//                 key={s.url}
//                 href={s.url}
//                 target="_blank"
//                 rel="noreferrer"
//                 className="inline-flex items-center gap-2 rounded-full border border-slate-800 bg-slate-900/50 px-5 py-3 text-sm text-slate-200 hover:bg-blue-600 hover:border-blue-500 hover:text-white transition-all duration-300 hover:scale-105"
//               >
//                 <s.icon className="text-lg" />
//                 <span>{s.label}</span>
//               </Link>
//             ))}
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, y: 10 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.36 }}
//             className="mt-10"
//           >
//             <Link
//               href="/blog"
//               className="inline-flex items-center justify-center rounded-full bg-blue-600 px-7 py-3 font-medium hover:bg-blue-700 transition hover:scale-105 text-white"
//             >
//               Read latest posts
//             </Link>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import Image from "next/image";
import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";
import { personalInfo } from "@/data/portfolio";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center"
    >
      <div className="container relative z-10 pt-28 pb-20">
        <div className="mx-auto max-w-6xl flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="relative w-30 h-30 md:w-36 md:h-36 flex-shrink-0 rounded-full overflow-hidden border-4 border-slate-700/50 shadow-2xl"
          >
            <Image
              src="/photo2.png"
              alt={`${personalInfo.name} profile photo`}
              fill
              className="object-cover"
              priority
            />
          </motion.div>

          <div className="text-center md:text-left">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-6 md:mt-0 text-slate-400 font-medium text-lg"
            >
              Hi, I&apos;m
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-2 text-5xl md:text-7xl font-bold tracking-tight"
            >
              <span className="bg-gradient-to-r from-blue-200 via-slate-100 to-purple-200 bg-clip-text text-transparent">
                {personalInfo.name}
              </span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-4 text-xl sm:text-2xl md:text-3xl font-mono text-blue-300 h-[40px] md:h-[48px]"
            >
              <Typewriter
                options={{
                  strings: personalInfo.role,
                  autoStart: true,
                  loop: true,
                  delay: 60,
                  deleteSpeed: 28,
                }}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-8 flex flex-wrap items-center justify-center md:justify-start gap-4"
            >
              {personalInfo.socials.map((s) => (
                <Link
                  key={s.url}
                  href={s.url}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-slate-800 bg-slate-900/50 px-5 py-3 text-sm text-slate-200 hover:bg-blue-600 hover:border-blue-500 hover:text-white transition-all duration-300 hover:scale-105"
                >
                  <s.icon className="text-lg" />
                  <span>{s.label}</span>
                </Link>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-8"
            >
              <Link
                href="/blog"
                className="inline-flex items-center justify-center rounded-full bg-blue-600 px-7 py-3 font-medium hover:bg-blue-700 transition hover:scale-105 text-white shadow-lg shadow-blue-900/20"
              >
                Read latest posts
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
