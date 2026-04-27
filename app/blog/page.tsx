import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Clock, Heart, MessageCircle } from "lucide-react"
import Image from "next/image"
import { blogPosts } from "@/lib/blog-data"

export const metadata = {
  title: "Blog | Rabbit Chan",
  description: "Insights, tutorials, and devlogs about design, web development, and creative projects by plebaotrn.",
}

export default function BlogPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-muted/30">
        <div className="absolute inset-0 gradient-bg opacity-5" />
        <div className="relative mx-auto max-w-7xl px-4 py-24 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl mb-6 animate-in fade-in slide-in-from-bottom-4 duration-1000">
              <span className="gradient-text text-balance">Blog</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-150">
              Devlogs, tutorials, and stories from my journey through design and development.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post, index) => (
              <Card
                key={post.id}
                className="group hover:scale-[1.02] hover:shadow-xl transition-all duration-300 gradient-border flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-4"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    width={600}
                    height={400}
                    className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 gradient-bg opacity-20 group-hover:opacity-30 transition-opacity duration-300" />
                  <div className="absolute top-4 left-4">
                    <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full gradient-bg text-primary-foreground">
                      {post.category}
                    </span>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="group-hover:gradient-text transition-all duration-300 text-balance">
                    {post.title}
                  </CardTitle>
                  <CardDescription className="leading-relaxed">{post.description}</CardDescription>
                </CardHeader>
                <CardContent className="mt-auto">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="relative h-8 w-8 rounded-full gradient-bg p-0.5 flex-shrink-0">
                      <div className="h-full w-full rounded-full overflow-hidden bg-background">
                        <Image
                          src="/anime-girl-avatar-rabbit-chan-yuriko.jpg"
                          alt="Rabbit Chan"
                          width={32}
                          height={32}
                          className="h-full w-full object-cover"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-sm font-semibold">Rabbit Chan</span>
                      <span className="text-xs text-muted-foreground">@plebaotrn</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-1 hover:text-primary transition-colors duration-300 cursor-pointer">
                        <Heart className="h-4 w-4" />
                        <span>{post.likes}</span>
                      </div>
                      <div className="flex items-center gap-1 hover:text-primary transition-colors duration-300 cursor-pointer">
                        <MessageCircle className="h-4 w-4" />
                        <span>{post.comments}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-1 text-xs">
                      <Clock className="h-3.5 w-3.5" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  <Button
                    asChild
                    variant="ghost"
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

      {/* Newsletter Section */}
      <section className="py-24 bg-muted/30">
        <div className="mx-auto max-w-4xl px-4 lg:px-8">
          <Card className="gradient-bg text-primary-foreground overflow-hidden relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/20 group-hover:to-black/30 transition-all duration-500" />
            <CardContent className="relative p-12 text-center">
              <h2 className="text-3xl font-bold tracking-tight mb-4 text-balance">Stay in the Loop</h2>
              <p className="text-lg mb-8 text-primary-foreground/90 max-w-2xl mx-auto leading-relaxed">
                Get notified when I publish new devlogs, tutorials, or project updates.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg bg-background text-foreground border-2 border-transparent focus:border-secondary focus:outline-none transition-all duration-300"
                />
                <Button
                  size="lg"
                  variant="secondary"
                  className="hover:scale-105 hover:shadow-lg transition-all duration-300 whitespace-nowrap"
                >
                  Subscribe
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
