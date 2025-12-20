import { FiGithub, FiLinkedin, FiTwitter, FiMail } from "react-icons/fi";

export const siteConfig = {
  url: "https://mayank.com",
  title: "Mayank | Portfolio",
  shortTitle: "Mayank",
  description:
    "Personal website with projects, achievements, and blogs. Built with Next.js, TypeScript, and Tailwind.",
  twitter: "@",
};

export const personalInfo = {
  name: "Mayank",
  role: ["Developer", "Student", "Builder"],
  bio: "",
  location: "Bengaluru, India",
  email: "mayankiitg35@gmail.com",
  socials: [
    { icon: FiGithub, label: "GitHub", url: "https://github.com/mayank01374" },
    { icon: FiLinkedin, label: "LinkedIn", url: "https://www.linkedin.com/in/mayankiitg35/" },
    { icon: FiTwitter, label: "X", url: "https://x.com/" },
    { icon: FiMail, label: "Email", url: "mailto:mayankiitg35@gmail.com" }
  ],
};

export const achievements = [
  {
    id: 1,
    title: "Reliance Foundation Scholar",
    description: "Awarded Scholarship of Rs 0.2 million by the Reliance Foundation in recognition of my academic achievements",
    date: "2023",
  },
  {
    id: 2,
    title: "JEE Adv 2022",
    description: "Secured an All India Rank of 2379 among 0.15 million candidates",
    date: "2022",
  },
  {
    id: 3,
    title: "JEE Main 2022",
    description: "Secured an All India Rank of 4346 among 0.9 million candidates",
    date: "2022",
  },
  {
    id: 4,
    title: "NTSE Stage - I",
    description: "Qualified NTSE Stage - I and was awarded Rs 10k by DSERT, Karnataka",
    date: "2019",
  },
  {
    id: 5,
    title: "KVPY",
    description: "Qualified KVPY Aptitude Test and was interviewed at IISc, Bengaluru",
    date: "2020",
  },
];

export const workExperience = [
  {
    id: 1,
    company: "Dept of EEE, IITG",
    role: "Research Intern",
    startDate: "May 2025",
    endDate: "Jun 2025",
    desc: "Built responsive dashboards, improved Core Web Vitals by 40%, and migrated legacy code to React 18.",
    logo: "/logos/iitg.png",
  },
  
];

export const education = [
  {
    id: 1,
    institution: "B.Tech in Electronics and Electrical Engineering",
    degree: "Indian Institute of Technology, Guwahati (IITG)",
    startDate: "2022",
    endDate: "2026",
    desc: "",
    logo: "/logos/iitg.png",
  }
  
];


export const projects = [
  {
  id: 1,
  title: "Secret Sharer",
  desc: "A zero-knowledge platform for secure data sharing via one-time links, featuring true end-to-end encryption. Secrets are encrypted client-side with AES-256-CBC, ensuring the server never accesses plaintext data. Includes self-destruction, password protection, and audit logging within a modern, animated UI.",
  tech: ["Next.js", "Node.js", "TypeScript", "PostgreSQL", "Redis", "Tailwind CSS", "Docker", "CryptoJS"],
  link: "https://github.com/mayank01374/secret-sharer",
  github: "https://github.com/mayank01374/secret-sharer",
  image: "/projects/secret-sharer.png",
},
  
    {
  id: 2, 
  title: "TestPilot",
  desc: "An AI-powered unit testing sandbox that automates test generation and execution across multiple programming languages using the Groq API. It streamlines development by integrating with GitHub to analyze pull requests and post real-time validation results directly to the repository.",
  tech: [
  "Next.js",
  "React",
  "TypeScript",
  "Bootstrap",
  "Groq SDK",
  "Docker",
 
],
  link: "https://github.com/mayank01374/testpilot", 
  github: "https://github.com/mayank01374/testpilot",
  image: "/projects/testp.png",
},
{
  id: 3, 
  title: "Airline Management App",
  desc: "A comprehensive MERN stack application enabling real-time flight search, secure bookings, and live status tracking through a responsive interface. It leverages Firebase Authentication and RESTful APIs to provide a seamless, full-stack travel management solution.",
  tech: [
  "React.js",
  "Node.js",
  "Express.js",
  "MongoDB",
  "Firebase Authentication",
  "Google OAuth",
  
],
  link: "https://github.com/mayank01374/Airline-Management", 
  github: "https://github.com/mayank01374/Airline-Management",
  image: "/projects/airline.png",
},

  
];


export const competitiveProgramming = [
  {
    id: 1,
    platform: "LeetCode",
    rating: "1865",
    rank: "Knight",
    link: "https://leetcode.com/mayankiitg35/",
    logo: "/logos/leetcode.png",
  },
  {
    id: 2,
    platform: "CodeForces",
    rating: "1485",
    rank: "Specialist",
    link: "https://codeforces.com/profile/Mr_WW",
    logo: "/logos/codeforces.png",
  },
  {
    id: 3,
    platform: "CodeChef",
    rating: "1651",
    rank: "3 Star (Div 2)",
    link: "https://www.codechef.com/users/mr_w_w",
    logo: "/logos/codechef.jpg",
  },
];

