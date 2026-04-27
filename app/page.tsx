import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Sparkles, Heart, Pen, BookOpen, Star, Rocket, Github, Code } from "lucide-react"
import Image from "next/image"
import { featuredProjects } from "@/lib/projects-data"
import { blogPosts } from "@/lib/blog-data"

export default function HomePage() {
  const latestPosts = blogPosts.slice(0, 3)

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 gradient-bg opacity-10" />
        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:py-32 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-8 animate-in fade-in slide-in-from-bottom-4 duration-1000">
              <div className="relative h-24 w-24 rounded-full gradient-bg p-1 hover:scale-110 transition-transform duration-300">
                <Image
                  src="/avatar.jpg"
                  alt="Rabbit Chan"
                  width={96}
                  height={96}
                  className="rounded-full object-cover"
                />
                <div className="absolute -bottom-1 -right-1 h-8 w-8 rounded-full gradient-bg flex items-center justify-center">
                  <Star className="h-4 w-4 text-primary-foreground fill-current" />
                </div>
              </div>
            </div>
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl mb-6 animate-in fade-in slide-in-from-bottom-4 duration-1000">
              <span className="gradient-text text-balance">Hey, I'm plebaotrn!</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-150">
              Also known as <span className="font-semibold gradient-text">Yuriko</span> — a designer & developer.
              This is where I share the projects I build, the things I learn, and the ideas I care about.
            </p>
            <div className="mt-10 flex items-center justify-center gap-4 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-300">
              <Button
                asChild
                size="lg"
                className="gradient-bg text-primary-foreground hover:scale-105 hover:shadow-lg transition-all duration-300 group"
              >
                <Link href="/projects">
                  <Rocket className="mr-2 h-4 w-4" />
                  See My Projects
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="hover:scale-105 hover:border-primary transition-all duration-300 bg-transparent"
              >
                <Link href="/blog">Read the Blog</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-8 bg-muted/30 border-y border-border/40">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <p className="text-3xl font-bold gradient-text">6+</p>
              <p className="text-sm text-muted-foreground">Projects shipped</p>
            </div>
            <div>
              <p className="text-3xl font-bold gradient-text">6</p>
              <p className="text-sm text-muted-foreground">Blog posts</p>
            </div>
            <div>
              <p className="text-3xl font-bold gradient-text">∞</p>
              <p className="text-sm text-muted-foreground">Ideas in progress</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="flex items-end justify-between mb-12">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <div className="h-8 w-1 rounded-full gradient-bg" />
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                  Featured <span className="gradient-text">Projects</span>
                </h2>
              </div>
              <p className="text-muted-foreground ml-4 pl-3">Things I've built and shipped</p>
            </div>
            <Button
              asChild
              variant="ghost"
              className="hidden sm:flex hover:gradient-bg hover:text-primary-foreground transition-all duration-300"
            >
              <Link href="/projects">
                All projects <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {featuredProjects.map((project, index) => (
              <Card
                key={project.id}
                className="group hover:scale-[1.02] hover:shadow-xl transition-all duration-300 gradient-border overflow-hidden animate-in fade-in slide-in-from-bottom-4"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative h-40 w-full overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={600}
                    height={400}
                    className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 gradient-bg opacity-20 group-hover:opacity-30 transition-opacity duration-300" />
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 text-xs font-semibold rounded-full gradient-bg text-primary-foreground">
                      {project.category}
                    </span>
                  </div>
                </div>
                <CardHeader className="pb-2">
                  <CardTitle className="group-hover:gradient-text transition-all duration-300 text-base">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="leading-relaxed text-sm line-clamp-2">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span key={tag} className="px-2 py-0.5 rounded text-xs bg-muted text-muted-foreground">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <Button asChild size="sm" variant="ghost" className="h-8 px-3 text-xs flex-1">
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-1.5 h-3.5 w-3.5" />
                        Code
                      </a>
                    </Button>
                    <Button asChild size="sm" className="h-8 px-3 text-xs flex-1 gradient-bg text-primary-foreground">
                      <Link href="/projects">Details</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-8 sm:hidden text-center">
            <Button asChild variant="outline" className="hover:gradient-bg hover:text-primary-foreground transition-all duration-300">
              <Link href="/projects">
                All projects <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Latest Blog Posts */}
      <section className="py-24 bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="flex items-end justify-between mb-12">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <div className="h-8 w-1 rounded-full gradient-bg" />
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                  Latest <span className="gradient-text">Posts</span>
                </h2>
              </div>
              <p className="text-muted-foreground ml-4 pl-3">Devlogs, tutorials, and more</p>
            </div>
            <Button
              asChild
              variant="ghost"
              className="hidden sm:flex hover:gradient-bg hover:text-primary-foreground transition-all duration-300"
            >
              <Link href="/blog">
                All posts <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {latestPosts.map((post, index) => (
              <Card
                key={post.id}
                className="group hover:scale-[1.02] hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-4"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative h-40 w-full overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    width={600}
                    height={400}
                    className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 gradient-bg opacity-20 group-hover:opacity-30 transition-opacity duration-300" />
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 text-xs font-semibold rounded-full gradient-bg text-primary-foreground">
                      {post.category}
                    </span>
                  </div>
                </div>
                <CardHeader className="pb-2">
                  <CardTitle className="group-hover:gradient-text transition-all duration-300 text-base text-balance">
                    {post.title}
                  </CardTitle>
                  <CardDescription className="text-sm leading-relaxed line-clamp-2">
                    {post.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="mt-auto">
                  <Button
                    asChild
                    variant="ghost"
                    size="sm"
                    className="w-full group/btn hover:gradient-bg hover:text-primary-foreground transition-all duration-300"
                  >
                    <Link href={`/blog/${post.id}`}>
                      Read More
                      <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About / Features */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl gradient-text mb-4">What You'll Find Here</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              A mix of projects, tutorials, and personal thoughts on design and development
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <Card className="group hover:scale-105 hover:shadow-xl transition-all duration-300 gradient-border">
              <CardHeader>
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg gradient-bg text-primary-foreground group-hover:rotate-12 transition-transform duration-300">
                  <Rocket className="h-6 w-6" />
                </div>
                <CardTitle className="group-hover:gradient-text transition-all duration-300">
                  Project Showcases
                </CardTitle>
                <CardDescription>Detailed writeups of apps, tools, and experiments I've built</CardDescription>
              </CardHeader>
            </Card>

            <Card className="group hover:scale-105 hover:shadow-xl transition-all duration-300 gradient-border">
              <CardHeader>
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg gradient-bg text-primary-foreground group-hover:rotate-12 transition-transform duration-300">
                  <Pen className="h-6 w-6" />
                </div>
                <CardTitle className="group-hover:gradient-text transition-all duration-300">
                  Devlogs & Tutorials
                </CardTitle>
                <CardDescription>How I build things — the process, the challenges, and the lessons</CardDescription>
              </CardHeader>
            </Card>

            <Card className="group hover:scale-105 hover:shadow-xl transition-all duration-300 gradient-border">
              <CardHeader>
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg gradient-bg text-primary-foreground group-hover:rotate-12 transition-transform duration-300">
                  <Heart className="h-6 w-6" />
                </div>
                <CardTitle className="group-hover:gradient-text transition-all duration-300">Design & Craft</CardTitle>
                <CardDescription>Thoughts on beautiful UI, typography, animation, and color</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <Card className="gradient-bg text-primary-foreground overflow-hidden relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/20 group-hover:to-black/30 transition-all duration-500" />
            <CardContent className="relative p-12 text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4 text-balance">
                Want to See What I've Built?
              </h2>
              <p className="text-lg mb-8 text-primary-foreground/90 max-w-2xl mx-auto leading-relaxed">
                Head to my Projects page for the full showcase, or browse the blog for deeper dives.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button
                  asChild
                  size="lg"
                  variant="secondary"
                  className="hover:scale-105 hover:shadow-lg transition-all duration-300 group/btn"
                >
                  <Link href="/projects">
                    <Rocket className="mr-2 h-4 w-4" />
                    Browse Projects
                    <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground/10 hover:scale-105 transition-all duration-300"
                >
                  <a href="https://github.com/plebaotrn" target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" />
                    GitHub
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
