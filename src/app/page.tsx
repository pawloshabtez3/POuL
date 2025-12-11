import Link from "next/link";
import Image from "next/image";

const skills = [
  {
    title: "Frontend",
    items: ["HTML", "CSS", "JavaScript", "Next.js", "TailwindCSS", "shadcn UI patterns"]
  },
  {
    title: "Backend & APIs",
    items: ["Node.js", "Express", "NestJS"]
  },
  {
    title: "Databases & Storage",
    items: ["MongoDB", "Neon", "Supabase"]
  },
  {
    title: "DevOps & Tools",
    items: ["Vercel", "Git", "CI/CD"]
  },
  {
    title: "Other",
    items: ["Python (scripting, small services)"]
  }
];

const projects = [
  {
    name: "Travel Inspiration Lake",
    url: "https://travel-inspiration-lake.vercel.app/explore",
    description:
      "Curated travel exploration app that helps users discover destinations, visualize inspiration boards, and explore itineraries with a clean UI.",
    features: [
      "Dynamic exploration page with destination highlights",
      "Saveable inspiration boards and quick links to itineraries",
      "Interactive search and filtering"
    ],
    stack: "Next.js, TailwindCSS, Node.js, MongoDB, Vercel",
    contribution:
      "End-to-end frontend UI, client routing, backend integration, data model design for inspiration boards, performant search filters."
  },
  {
    name: "Budget Phi One",
    url: "https://budget-phi-one.vercel.app",
    description:
      "Lightweight personal finance app for tracking budgets, categorizing expenses, and visualizing monthly trends.",
    features: [
      "Add and categorize expenses quickly",
      "Monthly budget targets and progress indicators",
      "Simple spending trend visualizations"
    ],
    stack: "React/Next.js, TailwindCSS, Node.js/Express, Supabase (PostgreSQL), Vercel",
    contribution:
      "Core budgeting flows, expense categorization logic, frontend visualizations, backend endpoints, persistent storage integration."
  },
  {
    name: "Fin Buddy",
    url: "https://fin-buddy1234.vercel.app",
    description:
      "Financial assistant web app with quick insights, calculators, and recommendations for short-term decisions.",
    features: [
      "Financial calculators (savings, loan, amortization)",
      "Quick insights and actionable suggestions",
      "Clean dashboard for at-a-glance metrics"
    ],
    stack: "Next.js, Node.js, MongoDB/Neon, TailwindCSS, Vercel",
    contribution:
      "Implemented calculators and dashboard metrics, responsive UI components, backend computation endpoints."
  }
];

const services = [
  {
    title: "Full-Stack Development",
    detail: "Design and build complete web applications from prototype to production. Frontend, backend, database design, and deployment."
  },
  {
    title: "API Integrations & Backend Services",
    detail: "Build and document REST/GraphQL APIs, integrate third-party services, and implement secure authentication flows."
  },
  {
    title: "Web App Optimization & Maintenance",
    detail: "Performance tuning, deployment configuration (Vercel), and ongoing maintenance to keep apps stable and fast."
  }
];

const certifications = [
  {
    title: "Youth and Peacebuilding - PTP.2025.22.UPD",
    issuer: "UNITAR (United Nations Institute for Training and Research)",
    date: "June 5, 2025",
    image: "/cert-unitar.jpg",
    alt: "UNITAR certificate for Youth and Peacebuilding awarded to Pawlos Habtemariam Fisehatsion"
  }
];

export default function HomePage() {
  return (
    <main>
      <header className="container pt-10 flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <span className="badge">Full-Stack Developer</span>
          <span className="text-sm text-ink/70">Production-ready web experiences</span>
        </div>
        <div className="flex items-center gap-3">
          <Link href="#projects" className="button-ghost">
            View Projects
          </Link>
          <Link href="mailto:pawloshabtez@gmail.com" className="button-primary">
            Contact
          </Link>
        </div>
      </header>

      <section className="container" id="hero">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr] items-center">
          <div className="space-y-6">
            <p className="text-sm uppercase tracking-[0.2em] text-ink/60">Futuristic. Reliable. Super-clean.</p>
            <h1 className="text-4xl leading-tight md:text-5xl font-bold text-ink">
              Pawlos Habtemariam Fisehatsion
              <span className="block text-ink/70 text-xl md:text-2xl mt-2">Full-Stack Developer</span>
            </h1>
            <p className="text-lg text-ink/75">
              I build modern web apps end-to-end with production thinking: clear architecture, fast frontends, robust backends, and a bias for shipping.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="#projects" className="button-primary">
                Explore Work
              </Link>
              <Link href="#contact" className="button-ghost">
                Let&apos;s Collaborate
              </Link>
            </div>
          </div>
          <div className="card space-y-4">
            <h3 className="text-xl font-semibold text-ink">Core Capabilities</h3>
            <ul className="space-y-2 text-ink/80">
              <li>• Production-ready UIs with Next.js + Tailwind</li>
              <li>• Scalable APIs with Node.js, Express, NestJS</li>
              <li>• Data modeling with MongoDB, Neon, Supabase</li>
              <li>• Deployment and iteration on Vercel, CI/CD</li>
            </ul>
            <div className="flex gap-3 pt-2 text-sm text-ink/70">
              <span className="badge">18 months experience</span>
              <span className="badge">Available for roles & freelance</span>
            </div>
          </div>
        </div>
      </section>

      <section className="container" id="about">
        <div className="section-header">
          <div>
            <h2 className="section-title">About Me</h2>
            <p className="section-subtitle">
              Full-stack developer focused on clarity, performance, and future-proof architecture—from interactive UIs to scalable APIs.
            </p>
          </div>
        </div>
        <div className="card text-ink/80 leading-relaxed space-y-4">
          <p>
            I take ownership of features from design through deployment and value clean code, thoughtful UX, and repeatable engineering patterns. I enjoy turning product ideas into polished, usable apps and stay current with modern frameworks and deployment platforms.
          </p>
          <p>
            Outside of building, I explore ways to keep apps fast, secure, and easy to iterate on so teams can move quickly without sacrificing quality.
          </p>
        </div>
      </section>

      <section className="container" id="skills">
        <div className="section-header">
          <div>
            <h2 className="section-title">Skills</h2>
            <p className="section-subtitle">Stacks and tools I use to ship reliable products.</p>
          </div>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill) => (
            <div key={skill.title} className="card">
              <h3 className="text-lg font-semibold text-ink mb-3">{skill.title}</h3>
              <ul className="text-ink/80 space-y-1">
                {skill.items.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="container" id="projects">
        <div className="section-header">
          <div>
            <h2 className="section-title">Projects</h2>
            <p className="section-subtitle">Selected builds demonstrating end-to-end delivery.</p>
          </div>
        </div>
        <div className="space-y-6">
          {projects.map((project) => (
            <div key={project.name} className="card">
              <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <h3 className="text-xl font-semibold text-ink">{project.name}</h3>
                    <Link href={project.url} className="button-ghost" target="_blank" rel="noreferrer">
                      View Live
                    </Link>
                  </div>
                  <p className="text-ink/80">{project.description}</p>
                </div>
              </div>
              <div className="mt-4 grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <p className="text-sm font-semibold text-ink">Key features</p>
                  <ul className="text-ink/80 space-y-1">
                    {project.features.map((feature) => (
                      <li key={feature}>• {feature}</li>
                    ))}
                  </ul>
                </div>
                <div className="space-y-2">
                  <p className="text-sm font-semibold text-ink">Tech stack</p>
                  <p className="text-ink/80">{project.stack}</p>
                  <p className="text-sm font-semibold text-ink">My contribution</p>
                  <p className="text-ink/80">{project.contribution}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="container" id="services">
        <div className="section-header">
          <div>
            <h2 className="section-title">Services</h2>
            <p className="section-subtitle">
              Available for full-time roles and freelance projects—focused on production-grade delivery.
            </p>
          </div>
        </div>
        <div className="grid-cards">
          {services.map((service) => (
            <div key={service.title} className="card">
              <h3 className="text-lg font-semibold text-ink">{service.title}</h3>
              <p className="text-ink/80 mt-2">{service.detail}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container" id="certifications">
        <div className="section-header">
          <div>
            <h2 className="section-title">Certifications</h2>
            <p className="section-subtitle">Recognitions that back my craft.</p>
          </div>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {certifications.map((cert) => (
            <div key={cert.title} className="card space-y-4">
              <div className="space-y-1">
                <h3 className="text-lg font-semibold text-ink">{cert.title}</h3>
                <p className="text-ink/70">{cert.issuer}</p>
                <p className="text-sm text-ink/60">Awarded: {cert.date}</p>
              </div>
              <div className="overflow-hidden rounded-xl border border-ink/10 bg-white/80">
                <Image
                  src={cert.image}
                  alt={cert.alt}
                  width={1280}
                  height={900}
                  className="h-auto w-full object-contain"
                  priority
                />
              </div>
            </div>
          ))}
        </div>
        <p className="mt-4 text-sm text-ink/60">
          Place the certificate image at <code>/public/cert-unitar.jpg</code> to display it on the site.
        </p>
      </section>

      <section className="container" id="contact">
        <div className="card text-center space-y-4">
          <p className="badge mx-auto">Let&apos;s build</p>
          <h2 className="text-3xl font-bold text-ink">Interested in working together?</h2>
          <p className="text-ink/75 max-w-2xl mx-auto">
            Send a note describing your project, scope, and timeline. I&apos;ll respond with availability and a proposal.
          </p>
          <div className="flex justify-center gap-4">
            <Link href="mailto:pawloshabtez@gmail.com" className="button-primary">
              Email Pawlos
            </Link>
            <Link href="https://github.com/pawloshabtez3" className="button-ghost" target="_blank" rel="noreferrer">
              GitHub Profile
            </Link>
          </div>
        </div>
      </section>

      <footer className="container pb-12 text-center text-sm text-ink/70">
        <p>Building super-clean, futuristic web experiences — ready for production.</p>
      </footer>
    </main>
  );
}
