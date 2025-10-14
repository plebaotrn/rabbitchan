"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { ThemeToggle } from "./theme-toggle"
import { Menu, X } from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Blog", href: "/blog" },
]

export function Header() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8">
        <div className="flex lg:flex-1 items-center gap-3">
          <Link href="/" className="group -m-1.5 p-1.5 flex items-center gap-3">
            <div className="relative h-10 w-10 rounded-full gradient-bg p-0.5 group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
              <div className="h-full w-full rounded-full bg-background flex items-center justify-center overflow-hidden">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/rabbit-chan-logo-ASiXvvv2jzi2y0M2g3g4a07Sbr1700.jpg"
                  alt="Rabbit Chan Logo"
                  width={40}
                  height={40}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold gradient-text group-hover:scale-105 transition-transform duration-300">
                Rabbit Chan
              </span>
              <span className="text-xs text-muted-foreground">@plebaotrn</span>
            </div>
          </Link>
        </div>

        <div className="flex lg:hidden gap-2">
          <ThemeToggle />
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="hover:scale-110 transition-transform duration-300"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        <div className="hidden lg:flex lg:gap-x-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`relative text-sm font-medium transition-all duration-300 hover:scale-105 ${
                pathname === item.href ? "text-primary" : "text-foreground/60 hover:text-foreground"
              }`}
            >
              {item.name}
              {pathname === item.href && (
                <span className="absolute -bottom-1 left-0 right-0 h-0.5 gradient-bg animate-in slide-in-from-left duration-300" />
              )}
            </Link>
          ))}
        </div>

        <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:items-center lg:gap-4">
          <div className="relative h-8 w-8 rounded-full gradient-bg p-0.5 hover:scale-110 transition-transform duration-300 cursor-pointer flex-shrink-0">
            <div className="h-full w-full rounded-full overflow-hidden bg-background">
              <Image
                src="/rabbit-chan-logo.jpg"
                alt="Rabbit Chan Avatar"
                width={32}
                height={32}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
          <ThemeToggle />
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden animate-in slide-in-from-top duration-300">
          <div className="space-y-1 px-4 pb-4 pt-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block rounded-lg px-3 py-2 text-base font-medium transition-all duration-300 hover:scale-105 ${
                  pathname === item.href
                    ? "gradient-bg text-primary-foreground"
                    : "text-foreground/60 hover:bg-muted hover:text-foreground"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
