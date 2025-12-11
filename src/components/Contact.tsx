"use client";

import { motion } from "framer-motion";
import { Mail, Github } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";

export function Contact() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-gradient-to-t from-teal/10 to-transparent blur-[100px] pointer-events-none" />

      <div className="container relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={mounted ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto space-y-8"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-ink">
            Ready to start your <br />
            <span className="text-gradient">next project?</span>
          </h2>

          <p className="text-lg text-mist">
            I&apos;m currently available for freelance projects and full-time roles.
            Let&apos;s discuss how I can help your team ship better software.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link
              href="mailto:pawloshabtez@gmail.com"
              className="w-full sm:w-auto px-8 py-4 bg-teal text-obsidian font-bold rounded-full hover:bg-teal-dim transition-all hover:scale-105 flex items-center justify-center gap-2"
            >
              <Mail className="w-5 h-5" />
              Say Hello
            </Link>
            <Link
              href="https://github.com/pawloshabtez3"
              target="_blank"
              className="w-full sm:w-auto px-8 py-4 bg-white/5 border border-white/10 text-ink font-semibold rounded-full hover:bg-white/10 transition-all hover:scale-105 flex items-center justify-center gap-2"
            >
              <Github className="w-5 h-5" />
              GitHub
            </Link>
          </div>
        </motion.div>
      </div>

      <footer className="container mt-20 pt-8 border-t border-white/5 text-center text-sm text-mist">
        <p>© 2025 Pawlos Habtemariam. Built with Next.js & Tailwind.</p>
      </footer>
    </section>
  );
}

