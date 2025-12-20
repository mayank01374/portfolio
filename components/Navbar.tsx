"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const getHref = (id: string, isPage = false) => {
    if (isPage) return `/${id}`;
    if (pathname === "/") return `#${id}`;
    return `/#${id}`;
  };

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Resume", href: getHref("resume") },
    { label: "Achievements", href: getHref("achievements") },
    { label: "CP", href: getHref("cp") },

    { label: "Projects", href: getHref("projects", true) },
    { label: "Blog", href: getHref("blog", true) },
  ];

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled ? "py-3" : "py-6"
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div
          className={cn(
            "flex items-center justify-between rounded-full border border-slate-800/60 px-6 py-3 transition-all duration-300",
            scrolled
              ? "bg-slate-950/80 backdrop-blur-md shadow-lg"
              : "bg-slate-950/20 backdrop-blur-sm"
          )}
        >
          <Link href="/" className="text-lg font-bold tracking-tight">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Mk.
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-slate-400 hover:text-blue-400 transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <a
            href="/resume.pdf"
            download
            className="md:hidden text-sm text-blue-400 font-medium"
          >
            Resume
          </a>
        </div>
      </div>
    </header>
  );
}
