import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Github, Mail, ExternalLink } from "lucide-react"
import { featuredProjects } from "@/lib/projects-data"
import { blogPosts } from "@/lib/blog-data"

const skills = [
  { label: "JavaScript / TypeScript", mono: true },
  { label: "React / Next.js", mono: true },
  { label: "Vue 3", mono: true },
  { label: "Tailwind CSS", mono: true },
  { label: "Kotlin / Android", mono: true },
  { label: "Supabase / SQL", mono: true },
  { label: "Figma / UI/UX", mono: false },
  { label: "Git / AWS", mono: true },
]

export default function HomePage() {
  const latestPosts = blogPosts.slice(0, 3)

  return (
    <div className="mx-auto max-w-5xl px-6 py-20 flex flex-col gap-24">

      {/* Hero */}
      <section className="flex flex-col gap-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
        <div className="flex flex-col gap-2">
          <p className="text-sm font-mono text-primary">Hello, I'm</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
            Pham Le Bao Tran
          </h1>
          <p className="text-xl sm:text-2xl text-muted-foreground font-light">
            Software Developer
          </p>
        </div>

        <p className="max-w-xl text-base text-muted-foreground leading-relaxed">
          Aspiring Software Developer specialising in web application development and UI/UX design,
          with hands-on experience delivering full-stack and frontend projects. Based in Melbourne, VIC.
        </p>

        <div className="flex flex-wrap items-center gap-3">
          <Button asChild size="sm" className="gradient-bg text-primary-foreground hover:opacity-90 transition-opacity">
            <Link href="/projects">
              View Projects
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button asChild size="sm" variant="outline">
            <Link href="/about">About Me</Link>
          </Button>
          <Button asChild size="sm" variant="ghost" className="text-muted-foreground hover:text-foreground">
            <a href="https://github.com/plebaotrn" target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-4 w-4" />
              GitHub
            </a>
          </Button>
          <Button asChild size="sm" variant="ghost" className="text-muted-foreground hover:text-foreground">
            <a href="mailto:phamtran2082005@gmail.com">
              <Mail className="mr-2 h-4 w-4" />
              Email
            </a>
          </Button>
        </div>
      </section>

      {/* Skills */}
      <section className="flex flex-col gap-4 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-150">
        <h2 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Skills</h2>
        <div className="flex flex-wrap gap-2">
          {skills.map((s) => (
            <span
              key={s.label}
              className={`px-3 py-1.5 text-xs rounded-md border border-border bg-muted text-foreground ${s.mono ? "font-mono" : ""}`}
            >
              {s.label}
            </span>
          ))}
        </div>
      </section>

      {/* Featured Projects */}
      <section className="flex flex-col gap-6 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200">
        <div className="flex items-center justify-between">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Featured Projects</h2>
          <Link href="/projects" className="text-xs text-primary hover:underline flex items-center gap-1">
            All projects <ArrowRight className="h-3 w-3" />
          </Link>
        </div>

        <div className="flex flex-col divide-y divide-border border border-border rounded-lg overflow-hidden">
          {featuredProjects.map((project) => (
            <div key={project.id} className="p-5 bg-card hover:bg-muted/40 transition-colors duration-200 group">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                <div className="flex flex-col gap-1 flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-sm font-semibold text-foreground">{project.title}</span>
                    <span className="text-xs text-muted-foreground">—</span>
                    <span className="text-xs text-muted-foreground">{project.subtitle}</span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-1.5 mt-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="px-2 py-0.5 text-xs font-mono bg-muted text-muted-foreground rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex items-center gap-2 flex-shrink-0">
                  <span className="text-xs text-muted-foreground whitespace-nowrap">{project.period}</span>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                    aria-label="GitHub"
                  >
                    <Github className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Latest Posts */}
      <section className="flex flex-col gap-6 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
        <div className="flex items-center justify-between">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Latest Posts</h2>
          <Link href="/blog" className="text-xs text-primary hover:underline flex items-center gap-1">
            All posts <ArrowRight className="h-3 w-3" />
          </Link>
        </div>

        <div className="flex flex-col divide-y divide-border border border-border rounded-lg overflow-hidden">
          {latestPosts.map((post) => (
            <Link
              key={post.id}
              href={`/blog/${post.id}`}
              className="p-5 bg-card hover:bg-muted/40 transition-colors duration-200 group flex items-start justify-between gap-4"
            >
              <div className="flex flex-col gap-1 flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono text-primary">{post.category}</span>
                </div>
                <p className="text-sm font-medium text-foreground group-hover:text-primary transition-colors duration-200">
                  {post.title}
                </p>
                <p className="text-xs text-muted-foreground line-clamp-1">{post.description}</p>
              </div>
              <div className="flex flex-col items-end gap-1 flex-shrink-0">
                <span className="text-xs text-muted-foreground whitespace-nowrap">{post.readTime}</span>
                <ExternalLink className="h-3.5 w-3.5 text-muted-foreground group-hover:text-primary transition-colors duration-200" />
              </div>
            </Link>
          ))}
        </div>
      </section>

    </div>
  )
}
