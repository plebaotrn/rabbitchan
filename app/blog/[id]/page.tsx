import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, ArrowRight, Clock, Heart, MessageCircle, Tag } from "lucide-react"
import { blogPosts, getBlogPost } from "@/lib/blog-data"
import type { Metadata } from "next"

interface Props {
  params: Promise<{ id: string }>
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ id: String(post.id) }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params
  const post = getBlogPost(id)
  if (!post) return { title: "Post Not Found | Rabbit Chan" }
  return {
    title: `${post.title} | Rabbit Chan`,
    description: post.description,
  }
}

export default async function BlogPostPage({ params }: Props) {
  const { id } = await params
  const post = getBlogPost(id)

  if (!post) notFound()

  const currentIndex = blogPosts.findIndex((p) => p.id === post.id)
  const prevPost = currentIndex > 0 ? blogPosts[currentIndex - 1] : null
  const nextPost = currentIndex < blogPosts.length - 1 ? blogPosts[currentIndex + 1] : null

  return (
    <div className="flex flex-col">
      {/* Hero image */}
      <div className="relative h-64 sm:h-80 lg:h-96 w-full overflow-hidden">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 gradient-bg opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
      </div>

      <div className="mx-auto max-w-3xl w-full px-4 lg:px-8 -mt-16 relative z-10 pb-24">
        {/* Back */}
        <div className="mb-8">
          <Button asChild variant="ghost" size="sm" className="hover:gradient-bg hover:text-primary-foreground transition-all duration-300">
            <Link href="/blog">
              <ArrowLeft className="mr-2 h-4 w-4" />
              All Posts
            </Link>
          </Button>
        </div>

        {/* Meta */}
        <div className="mb-6 flex flex-wrap items-center gap-3">
          <span className="px-3 py-1 text-xs font-semibold rounded-full gradient-bg text-primary-foreground">
            {post.category}
          </span>
          <span className="flex items-center gap-1.5 text-sm text-muted-foreground">
            <Clock className="h-4 w-4" />
            {post.readTime}
          </span>
          <span className="text-sm text-muted-foreground">{post.date}</span>
        </div>

        {/* Title */}
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl mb-6 text-balance leading-tight">
          {post.title}
        </h1>

        {/* Author */}
        <div className="flex items-center gap-3 mb-8 pb-8 border-b border-border/40">
          <div className="relative h-10 w-10 rounded-full gradient-bg p-0.5 flex-shrink-0">
            <div className="h-full w-full rounded-full overflow-hidden bg-background">
              <Image
                src="/anime-girl-avatar-rabbit-chan-yuriko.jpg"
                alt="Rabbit Chan"
                width={40}
                height={40}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
          <div>
            <p className="text-sm font-semibold">Rabbit Chan</p>
            <p className="text-xs text-muted-foreground">@plebaotrn • Yuriko</p>
          </div>
          <div className="ml-auto flex items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-1.5">
              <Heart className="h-4 w-4" />
              <span>{post.likes}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <MessageCircle className="h-4 w-4" />
              <span>{post.comments}</span>
            </div>
          </div>
        </div>

        {/* Content */}
        <article className="prose prose-neutral dark:prose-invert max-w-none mb-12">
          {post.content.map((paragraph, index) => (
            <p key={index} className="text-foreground/80 leading-relaxed mb-6 text-base sm:text-lg">
              {paragraph}
            </p>
          ))}
        </article>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-12 pb-12 border-b border-border/40">
          <span className="flex items-center gap-1.5 text-sm text-muted-foreground mr-1">
            <Tag className="h-4 w-4" />
            Tags:
          </span>
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 text-xs font-medium rounded-full bg-muted text-muted-foreground hover:gradient-bg hover:text-primary-foreground transition-all duration-300 cursor-default"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Navigation */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 mb-12">
          {prevPost ? (
            <Card className="group hover:scale-[1.02] hover:shadow-md transition-all duration-300">
              <CardContent className="p-4">
                <Link href={`/blog/${prevPost.id}`} className="block">
                  <p className="text-xs text-muted-foreground mb-1 flex items-center gap-1">
                    <ArrowLeft className="h-3 w-3" /> Previous post
                  </p>
                  <p className="text-sm font-semibold group-hover:gradient-text transition-all duration-300 line-clamp-2">
                    {prevPost.title}
                  </p>
                </Link>
              </CardContent>
            </Card>
          ) : (
            <div />
          )}

          {nextPost ? (
            <Card className="group hover:scale-[1.02] hover:shadow-md transition-all duration-300">
              <CardContent className="p-4">
                <Link href={`/blog/${nextPost.id}`} className="block text-right">
                  <p className="text-xs text-muted-foreground mb-1 flex items-center gap-1 justify-end">
                    Next post <ArrowRight className="h-3 w-3" />
                  </p>
                  <p className="text-sm font-semibold group-hover:gradient-text transition-all duration-300 line-clamp-2">
                    {nextPost.title}
                  </p>
                </Link>
              </CardContent>
            </Card>
          ) : (
            <div />
          )}
        </div>

        {/* Back to blog CTA */}
        <div className="text-center">
          <Button
            asChild
            size="lg"
            className="gradient-bg text-primary-foreground hover:scale-105 hover:shadow-lg transition-all duration-300"
          >
            <Link href="/blog">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to All Posts
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
