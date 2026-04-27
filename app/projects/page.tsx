import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink, Rocket, Code, Sparkles } from "lucide-react"
import { projects, featuredProjects } from "@/lib/projects-data"

const statusColors: Record<string, string> = {
  completed: "bg-green-500/20 text-green-600 dark:text-green-400",
  "in-progress": "bg-yellow-500/20 text-yellow-600 dark:text-yellow-400",
  archived: "bg-gray-500/20 text-gray-500",
}

const statusLabels: Record<string, string> = {
  completed: "Completed",
  "in-progress": "In Progress",
  archived: "Archived",
}

export const metadata = {
  title: "Projects | Rabbit Chan",
  description: "A showcase of projects built by plebaotrn (Yuriko) — web apps, design systems, and more.",
}

export default function ProjectsPage() {
  const otherProjects = projects.filter((p) => !p.featured)

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="relative overflow-hidden bg-muted/30">
        <div className="absolute inset-0 gradient-bg opacity-5" />
        <div className="relative mx-auto max-w-7xl px-4 py-24 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full border border-border/60 bg-background/60 backdrop-blur-sm text-sm text-muted-foreground animate-in fade-in slide-in-from-bottom-4 duration-700">
              <Rocket className="h-4 w-4 text-primary" />
              Things I've built
            </div>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl mb-6 animate-in fade-in slide-in-from-bottom-4 duration-1000">
              <span className="gradient-text text-balance">My Projects</span>
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-150">
              A collection of things I've designed, built, and shipped — from web apps and design systems to fun experiments.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="flex items-center gap-3 mb-12">
            <div className="h-8 w-1 rounded-full gradient-bg" />
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
              Featured <span className="gradient-text">Projects</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {featuredProjects.map((project, index) => (
              <Card
                key={project.id}
                className="group hover:scale-[1.02] hover:shadow-xl transition-all duration-300 gradient-border flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-4"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={600}
                    height={400}
                    className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 gradient-bg opacity-20 group-hover:opacity-30 transition-opacity duration-300" />
                  <div className="absolute top-4 left-4 flex gap-2">
                    <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full gradient-bg text-primary-foreground">
                      {project.category}
                    </span>
                    <span className={`inline-block px-3 py-1 text-xs font-semibold rounded-full ${statusColors[project.status]}`}>
                      {statusLabels[project.status]}
                    </span>
                  </div>
                </div>

                <CardHeader>
                  <div className="flex items-start justify-between gap-2">
                    <CardTitle className="group-hover:gradient-text transition-all duration-300 text-balance">
                      {project.title}
                    </CardTitle>
                    <span className="text-xs text-muted-foreground mt-1 flex-shrink-0">{project.year}</span>
                  </div>
                  <CardDescription className="leading-relaxed">{project.description}</CardDescription>
                </CardHeader>

                <CardContent className="mt-auto space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium bg-muted text-muted-foreground"
                      >
                        <Code className="h-3 w-3" />
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    <Button
                      asChild
                      size="sm"
                      variant="outline"
                      className="flex-1 hover:gradient-bg hover:text-primary-foreground hover:border-transparent transition-all duration-300"
                    >
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" />
                        Code
                      </a>
                    </Button>
                    {project.demoUrl !== "#" ? (
                      <Button
                        asChild
                        size="sm"
                        className="flex-1 gradient-bg text-primary-foreground hover:opacity-90 transition-all duration-300"
                      >
                        <Link href={project.demoUrl}>
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Live Demo
                        </Link>
                      </Button>
                    ) : (
                      <Button size="sm" disabled className="flex-1" variant="secondary">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Demo
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Other Projects */}
      <section className="py-12 pb-24 bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="flex items-center gap-3 mb-12">
            <div className="h-8 w-1 rounded-full gradient-bg" />
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
              Other <span className="gradient-text">Work</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {otherProjects.map((project, index) => (
              <Card
                key={project.id}
                className="group hover:scale-[1.02] hover:shadow-lg transition-all duration-300 animate-in fade-in slide-in-from-bottom-4"
                style={{ animationDelay: `${index * 80}ms` }}
              >
                <CardHeader>
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <div className="flex gap-2">
                      <span className="inline-block px-2.5 py-0.5 text-xs font-semibold rounded-full gradient-bg text-primary-foreground">
                        {project.category}
                      </span>
                      <span className={`inline-block px-2.5 py-0.5 text-xs font-semibold rounded-full ${statusColors[project.status]}`}>
                        {statusLabels[project.status]}
                      </span>
                    </div>
                    <span className="text-xs text-muted-foreground flex-shrink-0">{project.year}</span>
                  </div>
                  <CardTitle className="group-hover:gradient-text transition-all duration-300 text-lg">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="leading-relaxed text-sm">{project.description}</CardDescription>
                </CardHeader>

                <CardContent className="space-y-4">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 rounded text-xs bg-muted text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 3 && (
                      <span className="px-2 py-0.5 rounded text-xs bg-muted text-muted-foreground">
                        +{project.tags.length - 3}
                      </span>
                    )}
                  </div>

                  <div className="flex gap-2">
                    <Button asChild size="sm" variant="ghost" className="h-8 px-3 text-xs">
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-1.5 h-3.5 w-3.5" />
                        Code
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="mx-auto max-w-4xl px-4 lg:px-8">
          <Card className="gradient-bg text-primary-foreground overflow-hidden relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/20 group-hover:to-black/30 transition-all duration-500" />
            <CardContent className="relative p-12 text-center">
              <Sparkles className="h-10 w-10 mx-auto mb-4 text-primary-foreground/80" />
              <h2 className="text-3xl font-bold tracking-tight mb-4 text-balance">
                Interested in Collaborating?
              </h2>
              <p className="text-lg mb-8 text-primary-foreground/90 max-w-xl mx-auto leading-relaxed">
                I'm always open to interesting projects and new ideas. Check out my blog for deeper dives into the work, or reach out directly.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" variant="secondary" className="hover:scale-105 transition-all duration-300">
                  <Link href="/blog">Read the Blog</Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground/10 hover:scale-105 transition-all duration-300"
                >
                  <a href="https://github.com/plebaotrn" target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" />
                    GitHub Profile
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
