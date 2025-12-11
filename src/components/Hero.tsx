"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Github, Mail } from "lucide-react";
import { useState, useEffect } from "react";

export function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-teal/20 blur-[100px] rounded-full pointer-events-none" />

      <div className="container relative z-10 grid gap-12 md:grid-cols-2 items-center">
        <motion.div
          initial="hidden"
          animate={mounted ? "visible" : "hidden"}
          variants={containerVariants}
          className="space-y-6"
        >
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal/10 border border-teal/20 text-teal text-xs font-bold uppercase tracking-wider">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-teal"></span>
            </span>
            Available for work
          </motion.div>

          <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-bold tracking-tight text-ink leading-[1.1]">
            Building <br />
            <span className="text-gradient">Digital Future</span>
          </motion.h1>

          <motion.p variants={itemVariants} className="text-lg text-mist max-w-lg leading-relaxed">
            I&apos;m Pawlos Habtemariam, a Full-Stack Developer crafting high-performance web experiences with modern technologies. Focused on clean code and intuitive design.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
            <Link
              href="#projects"
              className="group inline-flex items-center gap-2 px-6 py-3 bg-teal text-obsidian font-bold rounded-full hover:bg-teal-dim transition-all hover:scale-105"
            >
              View Work
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="mailto:pawloshabtez@gmail.com"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 text-ink font-semibold rounded-full hover:bg-white/10 transition-all hover:scale-105"
            >
              Contact Me
            </Link>
          </motion.div>

          <motion.div variants={itemVariants} className="flex items-center gap-6 pt-4">
            <Link href="https://github.com/pawloshabtez3" target="_blank" className="text-mist hover:text-teal transition-colors">
              <Github className="w-6 h-6" />
            </Link>
            <Link href="mailto:pawloshabtez@gmail.com" className="text-mist hover:text-teal transition-colors">
              <Mail className="w-6 h-6" />
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={mounted ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative hidden md:block"
        >
          <div className="relative z-10 glass-panel p-8 rounded-2xl animate-float">
            <div className="space-y-4">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-teal to-blue-600 flex items-center justify-center text-xl font-bold text-white">
                  PH
                </div>
                <div>
                  <h3 className="font-bold text-ink">Pawlos Habtemariam</h3>
                  <p className="text-xs text-teal">Full-Stack Developer</p>
                </div>
              </div>
              <div className="space-y-2">
                <div className="h-2 w-3/4 bg-white/10 rounded-full" />
                <div className="h-2 w-full bg-white/10 rounded-full" />
                <div className="h-2 w-5/6 bg-white/10 rounded-full" />
              </div>
              <div className="pt-4 grid grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-black/20 border border-white/5">
                  <div className="text-2xl font-bold text-teal">1.5+</div>
                  <div className="text-xs text-mist">Years Exp.</div>
                </div>
                <div className="p-4 rounded-xl bg-black/20 border border-white/5">
                  <div className="text-2xl font-bold text-gold">10+</div>
                  <div className="text-xs text-mist">Projects</div>
                </div>
              </div>
            </div>
          </div>
          {/* Decorative elements */}
          <div className="absolute -top-10 -right-10 w-32 h-32 bg-gold/20 blur-3xl rounded-full" />
          <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-teal/20 blur-3xl rounded-full" />
        </motion.div>
      </div>
    </section>
  );
}

