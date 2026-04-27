import Link from "next/link"
import { Github, ExternalLink, ArrowUpRight } from "lucide-react"
import { projects } from "@/lib/projects-data"

export const metadata = {
  title: "Projects | Pham Le Bao Tran",
  description: "A showcase of projects built by Pham Le Bao Tran — full-stack web apps, mobile apps, and more.",
}

const statusStyles: Record<string, string> = {
  completed: "text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 border-emerald-200 dark:border-emerald-800",
  "in-progress": "text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/40 border-amber-200 dark:border-amber-800",
  archived: "text-muted-foreground bg-muted border-border",
}

const statusLabels: Record<string, string> = {
  completed: "Completed",
  "in-progress": "In progress",
  archived: "Archived",
}

export default function ProjectsPage() {
  const featured = projects.filter((p) => p.featured)
  const others = projects.filter((p) => !p.featured)

  return (
    <div className="mx-auto max-w-5xl px-6 py-20 flex flex-col gap-16">

      {/* Header */}
      <section className="flex flex-col gap-3 animate-in fade-in slide-in-from-bottom-4 duration-700">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">Projects</h1>
        <p className="text-base text-muted-foreground max-w-xl leading-relaxed">
          A collection of things I've built — from full-stack web apps and mobile applications to
          frontend experiments and design tools.
        </p>
      </section>

      {/* Featured */}
      <section className="flex flex-col gap-6 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100">
        <h2 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Featured</h2>

        <div className="flex flex-col gap-4">
          {featured.map((project) => (
            <div
              key={project.id}
              className="group border border-border rounded-lg bg-card hover:border-primary/40 transition-colors duration-200 overflow-hidden"
            >
              {/* Accent bar */}
              <div className="h-0.5 w-full bg-primary" />

              <div className="p-6 flex flex-col gap-4">
                {/* Top row */}
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                  <div className="flex flex-col gap-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="text-base font-semibold text-foreground">{project.title}</h3>
                      <span className="text-muted-foreground text-sm">—</span>
                      <span className="text-sm text-muted-foreground">{project.subtitle}</span>
                    </div>
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-xs font-mono text-primary">{project.category}</span>
                      <span className="text-muted-foreground text-xs">·</span>
                      <span className="text-xs text-muted-foreground">{project.period}</span>
                      <span
                        className={`px-2 py-0.5 text-xs rounded border font-medium ${statusStyles[project.status]}`}
                      >
                        {statusLabels[project.status]}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 flex-shrink-0">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-foreground transition-colors duration-200 flex items-center gap-1.5 text-xs"
                    >
                      <Github className="h-4 w-4" />
                      Code
                    </a>
                    {project.demoUrl && project.demoUrl !== "#" && (
                      <Link
                        href={project.demoUrl}
                        className="text-muted-foreground hover:text-foreground transition-colors duration-200 flex items-center gap-1.5 text-xs"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Demo
                      </Link>
                    )}
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm text-muted-foreground leading-relaxed">{project.description}</p>

                {/* Role label */}
                <div className="flex items-center gap-1.5">
                  <span className="text-xs text-muted-foreground">Role:</span>
                  <span className="text-xs font-medium text-foreground">{project.role}</span>
                </div>

                {/* Bullets */}
                <ul className="flex flex-col gap-1.5">
                  {project.bullets.map((b, i) => (
                    <li key={i} className="text-sm text-muted-foreground leading-relaxed flex gap-2">
                      <span className="text-primary mt-1.5 flex-shrink-0 text-xs">▸</span>
                      {b}
                    </li>
                  ))}
                </ul>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 text-xs font-mono bg-muted text-muted-foreground rounded border border-border"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Other projects */}
      <section className="flex flex-col gap-6 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200">
        <h2 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Other Work</h2>

        <div className="flex flex-col divide-y divide-border border border-border rounded-lg overflow-hidden">
          {others.map((project) => (
            <div
              key={project.id}
              className="p-5 bg-card hover:bg-muted/40 transition-colors duration-200"
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                <div className="flex flex-col gap-2 flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-sm font-semibold text-foreground">{project.title}</span>
                    <span className="text-muted-foreground text-xs">—</span>
                    <span className="text-xs text-muted-foreground">{project.subtitle}</span>
                    <span
                      className={`px-2 py-0.5 text-xs rounded border font-medium ${statusStyles[project.status]}`}
                    >
                      {statusLabels[project.status]}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span key={tag} className="px-2 py-0.5 text-xs font-mono bg-muted text-muted-foreground rounded border border-border">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex items-center gap-3 flex-shrink-0">
                  <span className="text-xs text-muted-foreground">{project.period}</span>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                    aria-label="GitHub"
                  >
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  )
}
