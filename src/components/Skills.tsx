"use client";

import { Card } from "@/components/ui/Card";
import { Code2, Database, Layout, Server, Terminal, Wrench } from "lucide-react";

const skillCategories = [
  {
    title: "Frontend",
    icon: Layout,
    skills: ["HTML", "CSS", "JavaScript", "Next.js", "TailwindCSS", "Framer Motion", "React"],
  },
  {
    title: "Backend",
    icon: Server,
    skills: ["Node.js", "Express", "NestJS", "REST APIs", "GraphQL"],
  },
  {
    title: "Database",
    icon: Database,
    skills: ["MongoDB", "PostgreSQL", "Supabase", "Prisma", "Neon"],
  },
  {
    title: "DevOps & Tools",
    icon: Wrench,
    skills: ["Git", "GitHub", "Vercel", "Docker", "CI/CD"],
  },
  {
    title: "Languages",
    icon: Code2,
    skills: ["TypeScript", "JavaScript", "Python", "SQL"],
  },
  {
    title: "Other",
    icon: Terminal,
    skills: ["Agile", "System Design", "Testing", "UI/UX Principles"],
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-20 relative">
      <div className="container">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-ink mb-4">Technical Arsenal</h2>
          <p className="text-mist max-w-2xl mx-auto">
            A comprehensive suite of tools and technologies I use to build scalable, production-ready applications.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, index) => (
            <Card key={category.title} delay={index * 0.1} className="h-full">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-xl bg-teal/10 text-teal">
                  <category.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-ink">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 text-xs font-medium rounded-full bg-white/5 text-mist border border-white/5 hover:border-teal/30 hover:text-teal transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
