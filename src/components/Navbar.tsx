"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const navItems = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!mounted) {
    return (
      <header className="fixed top-0 left-0 right-0 z-50 py-6 bg-transparent">
        <div className="container flex items-center justify-between">
          <Link href="/" className="text-xl font-bold tracking-tighter text-ink">
            PH<span className="text-teal">.</span>
          </Link>
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-mist hover:text-teal transition-colors relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-teal transition-all group-hover:w-full" />
              </Link>
            ))}
            <Link
              href="/resume.pdf"
              target="_blank"
              className="px-4 py-2 text-sm font-semibold text-obsidian bg-teal rounded-full hover:bg-teal-dim transition-colors"
            >
              Resume
            </Link>
          </nav>
        </div>
      </header>
    );
  }

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled ? "bg-obsidian/80 backdrop-blur-md border-b border-white/5 py-4" : "py-6 bg-transparent"
      )}
    >
      <div className="container flex items-center justify-between">
        <Link href="/" className="text-xl font-bold tracking-tighter text-ink">
          PH<span className="text-teal">.</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-mist hover:text-teal transition-colors relative group"
            >
              {item.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-teal transition-all group-hover:w-full" />
            </Link>
          ))}
          <Link
            href="/resume.pdf"
            target="_blank"
            className="px-4 py-2 text-sm font-semibold text-obsidian bg-teal rounded-full hover:bg-teal-dim transition-colors"
          >
            Resume
          </Link>
        </nav>
      </div>
    </motion.header>
  );
}

