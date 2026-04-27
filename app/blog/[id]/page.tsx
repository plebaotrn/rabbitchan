import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, ArrowRight, Clock, Tag } from "lucide-react"
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
  if (!post) return { title: "Post Not Found | Pham Le Bao Tran" }
  return {
    title: `${post.title} | Pham Le Bao Tran`,
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
    <div className="mx-auto max-w-3xl px-6 py-20 flex flex-col gap-12">

      {/* Back */}
      <Link
        href="/blog"
        className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 w-fit"
      >
        <ArrowLeft className="h-4 w-4" />
        All posts
      </Link>

      {/* Header */}
      <header className="flex flex-col gap-4 animate-in fade-in slide-in-from-bottom-4 duration-700">
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-xs font-mono text-primary">{post.category}</span>
          <span className="text-muted-foreground text-xs">·</span>
          <span className="text-xs text-muted-foreground">{post.date}</span>
          <span className="text-muted-foreground text-xs">·</span>
          <span className="flex items-center gap-1 text-xs text-muted-foreground">
            <Clock className="h-3.5 w-3.5" />
            {post.readTime}
          </span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground leading-tight">
          {post.title}
        </h1>

        <p className="text-base text-muted-foreground leading-relaxed">{post.description}</p>

        {/* Author */}
        <div className="flex items-center gap-2 pt-2 border-t border-border">
          <div className="h-7 w-7 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
            <span className="text-xs font-semibold text-primary-foreground">P</span>
          </div>
          <div>
            <p className="text-xs font-medium text-foreground">Pham Le Bao Tran</p>
            <p className="text-xs text-muted-foreground font-mono">@plebaotrn</p>
          </div>
        </div>
      </header>

      {/* Content */}
      <article className="flex flex-col gap-5 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100">
        {post.content.map((paragraph, index) => (
          <p key={index} className="text-base text-foreground/80 leading-relaxed">
            {paragraph}
          </p>
        ))}
      </article>

      {/* Tags */}
      <div className="flex flex-wrap items-center gap-2 pt-4 border-t border-border">
        <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
          <Tag className="h-3.5 w-3.5" />
          Tags:
        </span>
        {post.tags.map((tag) => (
          <span
            key={tag}
            className="px-2.5 py-1 text-xs font-mono bg-muted text-muted-foreground rounded border border-border"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Prev / Next */}
      <nav className="grid grid-cols-2 gap-4 pt-4 border-t border-border">
        {prevPost ? (
          <Link
            href={`/blog/${prevPost.id}`}
            className="group flex flex-col gap-1 p-4 border border-border rounded-lg bg-card hover:border-primary/40 hover:bg-muted/40 transition-all duration-200"
          >
            <span className="flex items-center gap-1 text-xs text-muted-foreground">
              <ArrowLeft className="h-3 w-3" /> Previous
            </span>
            <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors duration-200 line-clamp-2">
              {prevPost.title}
            </span>
          </Link>
        ) : (
          <div />
        )}

        {nextPost ? (
          <Link
            href={`/blog/${nextPost.id}`}
            className="group flex flex-col gap-1 p-4 border border-border rounded-lg bg-card hover:border-primary/40 hover:bg-muted/40 transition-all duration-200 text-right"
          >
            <span className="flex items-center justify-end gap-1 text-xs text-muted-foreground">
              Next <ArrowRight className="h-3 w-3" />
            </span>
            <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors duration-200 line-clamp-2">
              {nextPost.title}
            </span>
          </Link>
        ) : (
          <div />
        )}
      </nav>

    </div>
  )
}
