"use client";

import { Card } from "@/components/ui/Card";
import { ExternalLink, Github } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const projects = [
  {
    name: "Travel Inspiration Lake",
    url: "https://travel-inspiration-lake.vercel.app/explore",
    description:
      "Curated travel exploration app that helps users discover destinations, visualize inspiration boards, and explore itineraries with a clean UI.",
    tags: ["Next.js", "TailwindCSS", "MongoDB"],
    features: ["Dynamic exploration", "Inspiration boards", "Interactive search"],
  },
  {
    name: "Budget Phi One",
    url: "https://budget-phi-one.vercel.app",
    description:
      "Lightweight personal finance app for tracking budgets, categorizing expenses, and visualizing monthly trends.",
    tags: ["Next.js", "Supabase", "Recharts"],
    features: ["Expense tracking", "Budget targets", "Trend visualization"],
  },
  {
    name: "Fin Buddy",
    url: "https://fin-buddy1234.vercel.app",
    description:
      "Financial assistant web app with quick insights, calculators, and recommendations for short-term decisions.",
    tags: ["Next.js", "Node.js", "Calculators"],
    features: ["Financial calculators", "Quick insights", "Dashboard metrics"],
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-20 bg-charcoal/30">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-ink mb-4">Featured Projects</h2>
            <p className="text-mist max-w-xl">
              A selection of projects that demonstrate my ability to solve real-world problems with code.
            </p>
          </div>
          <Link
            href="https://github.com/pawloshabtez3"
            target="_blank"
            className="hidden md:flex items-center gap-2 text-teal hover:text-white transition-colors"
          >
            View all on GitHub <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <Card key={project.name} delay={index * 0.1} className="flex flex-col h-full group">
              <div className="mb-6 flex items-start justify-between">
                <div className="p-3 rounded-full bg-teal/10 text-teal group-hover:bg-teal group-hover:text-obsidian transition-colors">
                  <Github className="w-6 h-6" />
                </div>
                <Link
                  href={project.url}
                  target="_blank"
                  className="p-2 text-mist hover:text-white transition-colors"
                >
                  <ExternalLink className="w-5 h-5" />
                </Link>
              </div>

              <h3 className="text-xl font-bold text-ink mb-3 group-hover:text-teal transition-colors">
                {project.name}
              </h3>

              <p className="text-mist text-sm leading-relaxed mb-6 flex-grow">
                {project.description}
              </p>

              <div className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-xs font-medium text-teal">
                      #{tag}
                    </span>
                  ))}
                </div>
                <div className="pt-4 border-t border-white/5">
                  <ul className="space-y-1">
                    {project.features.slice(0, 2).map((feature) => (
                      <li key={feature} className="text-xs text-mist flex items-center gap-2">
                        <span className="w-1 h-1 rounded-full bg-teal" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-8 text-center md:hidden">
          <Link
            href="https://github.com/pawloshabtez3"
            target="_blank"
            className="inline-flex items-center gap-2 text-teal hover:text-white transition-colors"
          >
            View all on GitHub <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

import { ArrowRight } from "lucide-react";
