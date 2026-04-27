import Link from "next/link"
import { ArrowRight, Clock } from "lucide-react"
import { blogPosts } from "@/lib/blog-data"

export const metadata = {
  title: "Blog | Pham Le Bao Tran",
  description: "Devlogs, tutorials, and thoughts on web development and UI/UX design.",
}

export default function BlogPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-20 flex flex-col gap-12">

      {/* Header */}
      <section className="flex flex-col gap-3 animate-in fade-in slide-in-from-bottom-4 duration-700">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">Blog</h1>
        <p className="text-base text-muted-foreground max-w-xl leading-relaxed">
          Devlogs, tutorials, and thoughts on web development, UI/UX design, and software engineering.
        </p>
      </section>

      {/* Posts */}
      <section className="animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100">
        <div className="flex flex-col divide-y divide-border border border-border rounded-lg overflow-hidden">
          {blogPosts.map((post) => (
            <Link
              key={post.id}
              href={`/blog/${post.id}`}
              className="group p-5 bg-card hover:bg-muted/40 transition-colors duration-200 flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3"
            >
              <div className="flex flex-col gap-1.5 flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono text-primary">{post.category}</span>
                  <span className="text-muted-foreground text-xs">·</span>
                  <span className="text-xs text-muted-foreground">{post.date}</span>
                </div>
                <p className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors duration-200">
                  {post.title}
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
                  {post.description}
                </p>
                <div className="flex flex-wrap gap-1.5 mt-1">
                  {post.tags.slice(0, 3).map((tag) => (
                    <span key={tag} className="px-2 py-0.5 text-xs font-mono bg-muted text-muted-foreground rounded border border-border">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex sm:flex-col items-center sm:items-end gap-2 flex-shrink-0">
                <span className="flex items-center gap-1 text-xs text-muted-foreground">
                  <Clock className="h-3.5 w-3.5" />
                  {post.readTime}
                </span>
                <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 transition-all duration-200" />
              </div>
            </Link>
          ))}
        </div>
      </section>

    </div>
  )
}
