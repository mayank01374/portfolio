import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/data/portfolio";

// UI Components
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SpotlightBackground from "@/components/SpotlightBackground"; // Ensure you created this file

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.shortTitle}`,
  },
  description: siteConfig.description,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "/",
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.shortTitle,
  },
  twitter: {
    card: "summary_large_image",
    creator: siteConfig.twitter,
    title: siteConfig.title,
    description: siteConfig.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${mono.variable} scroll-smooth`} // Added scroll-smooth
    >
      <body className="bg-slate-950 text-slate-200 antialiased selection:bg-blue-500/30">
        {/* 1. Global Background Effect */}
        <SpotlightBackground />

        {/* 2. Global Navbar (Persistent across pages) */}
        <Navbar />

        {/* 3. Main Content Wrapper */}
        {/* 'relative z-10' ensures content sits ABOVE the background */}
        <div className="relative z-10 flex flex-col min-h-screen">
          {children}
        </div>

        {/* 4. Global Footer */}
        <Footer />
      </body>
    </html>
  );
}
