export interface BlogPost {
  id: number
  slug: string
  title: string
  description: string
  date: string
  readTime: string
  category: string
  image: string
  likes: number
  comments: number
  content: string[]
  tags: string[]
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    slug: "getting-started-with-modern-web-design",
    title: "Getting Started with Modern Web Design",
    description:
      "Learn the fundamentals of creating beautiful, responsive websites with modern design principles and best practices.",
    date: "March 15, 2024",
    readTime: "5 min read",
    category: "Design",
    image: "/modern-web-design-colorful-gradient.jpg",
    likes: 42,
    comments: 8,
    tags: ["Design", "CSS", "UI/UX"],
    content: [
      "Modern web design has evolved dramatically over the past decade. What once required complex Flash animations and table-based layouts now relies on elegant CSS, semantic HTML, and powerful JavaScript frameworks that make the web faster and more accessible for everyone.",
      "The foundation of any great web design starts with understanding your users. Before writing a single line of code, spend time thinking about who will visit your site and what they need to accomplish. This user-first mindset will guide every decision — from color choices to navigation structure.",
      "Color theory plays a massive role in modern design. Gradient themes, like the ones used throughout this blog, can add depth and visual interest without overwhelming the user. The key is balance: use gradients as accents rather than backgrounds for large text areas, ensuring readability is never sacrificed for aesthetics.",
      "Typography is equally important. Choose 2–3 fonts at most — a heading font, a body font, and optionally a monospace font for code. Tools like Google Fonts and Fontsource make it easy to embed high-quality typefaces. Pair a bold, expressive heading font with a clean, readable body font for maximum impact.",
      "Finally, embrace whitespace. Many beginners feel the urge to fill every pixel, but empty space gives your content room to breathe and guides the viewer's eye to what matters most. A well-spaced layout feels premium and professional, while a cluttered one feels overwhelming regardless of how beautiful the individual elements are.",
    ],
  },
  {
    id: 2,
    slug: "the-power-of-gradient-themes",
    title: "The Power of Gradient Themes",
    description:
      "Discover how gradient color schemes can transform your user interface and create stunning visual experiences.",
    date: "March 12, 2024",
    readTime: "4 min read",
    category: "UI/UX",
    image: "/gradient-colors-abstract-design.jpg",
    likes: 38,
    comments: 12,
    tags: ["UI/UX", "Color Theory", "CSS"],
    content: [
      "Gradients have made a triumphant comeback in modern design. After years of flat design dominance, designers and users alike craved more depth and visual richness — and gradients delivered exactly that. When used thoughtfully, they add a sense of dimensionality and personality to any interface.",
      "The most effective gradient palettes follow a simple rule: pick two or three harmonious colors that are adjacent or complementary on the color wheel. Blue-to-pink gradients, like the one powering this blog, are popular because they evoke creativity, imagination, and energy while remaining visually soft enough for extended reading sessions.",
      "Modern CSS makes gradient implementation simpler than ever. Linear gradients, radial gradients, and conic gradients give you fine control over direction and spread. Combine them with CSS custom properties (variables) and you can build an entire theme system where a single change cascades across hundreds of components instantly.",
      "One pro tip: use gradients on borders and backgrounds of cards, buttons, and decorative elements rather than on body text. For text, gradient fills (using background-clip: text) work beautifully for headlines but should be used sparingly so they retain their visual impact.",
    ],
  },
  {
    id: 3,
    slug: "smooth-animations-in-web-development",
    title: "Smooth Animations in Web Development",
    description:
      "Master the art of creating delightful micro-interactions and animations that enhance user engagement.",
    date: "March 10, 2024",
    readTime: "6 min read",
    category: "Development",
    image: "/animation-motion-design-colorful.jpg",
    likes: 56,
    comments: 15,
    tags: ["Animation", "CSS", "JavaScript", "UX"],
    content: [
      "Animation is one of the most powerful tools in a web developer's toolkit — and one of the most misused. Done right, animations guide attention, provide feedback, and make interfaces feel alive and responsive. Done wrong, they distract, annoy, and slow down the user experience.",
      "The golden rule of web animation is 'less is more'. A subtle 200ms fade-in on page load, a gentle scale effect on hover, a smooth color transition on a button — these micro-interactions add up to an experience that feels polished and professional without ever demanding the user's conscious attention.",
      "CSS transitions are your first tool. They're GPU-accelerated, performant, and require minimal code. Transitioning the transform and opacity properties is especially efficient since these can be handled by the compositor thread without triggering layout or paint operations. This is the secret to silky 60fps animations.",
      "For more complex sequences, CSS animations with @keyframes give you full control over multi-step effects. Libraries like Framer Motion (React) and GSAP take this further, offering spring physics, scroll-linked animations, and entrance/exit choreography that would be painfully complex to hand-code.",
      "Always respect the prefers-reduced-motion media query. Some users experience motion sickness or have vestibular disorders that make animations harmful. Wrapping your CSS animations in a media query check ensures your site is inclusive and accessible to all visitors.",
    ],
  },
  {
    id: 4,
    slug: "building-responsive-layouts",
    title: "Building Responsive Layouts",
    description: "A comprehensive guide to creating layouts that work perfectly across all devices and screen sizes.",
    date: "March 8, 2024",
    readTime: "7 min read",
    category: "Development",
    image: "/responsive-design-mobile-desktop.jpg",
    likes: 45,
    comments: 10,
    tags: ["Responsive", "CSS Grid", "Flexbox", "Mobile-First"],
    content: [
      "Responsive design is no longer optional — it's the baseline expectation. With over 60% of web traffic now coming from mobile devices, a site that doesn't adapt to different screen sizes is a site that's failing more than half its visitors before they even read a single word.",
      "The mobile-first approach flips the traditional design process on its head. Instead of designing for desktop and then scaling down, you start with the smallest screen and progressively enhance the layout for larger viewports. This forces you to prioritize content and strip away anything non-essential — constraints that actually improve the final design.",
      "CSS Grid and Flexbox are your two primary layout tools. Flexbox excels at one-dimensional layouts — rows or columns of items that need to align and distribute space. Grid shines for two-dimensional layouts where you need precise control over both axes. Modern responsive layouts often combine both: Grid for the overall page structure, Flexbox for individual components.",
      "Tailwind CSS's responsive prefixes make this workflow incredibly efficient. Prefixing any utility with sm:, md:, lg:, or xl: applies it only at that breakpoint and above. A simple grid class becomes grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 — a fully responsive three-column grid in a single class string.",
      "Test early and often on real devices. Browser developer tools are invaluable for quick checks, but they don't perfectly simulate touch interactions, actual pixel densities, or the performance of lower-end hardware. Using services like BrowserStack or maintaining a small collection of test devices reveals issues that simulators miss.",
    ],
  },
  {
    id: 5,
    slug: "dark-mode-best-practices",
    title: "Dark Mode Best Practices",
    description: "Implementing dark mode the right way with proper color contrast and accessibility considerations.",
    date: "March 5, 2024",
    readTime: "5 min read",
    category: "Design",
    image: "/dark-mode-interface-design.jpg",
    likes: 51,
    comments: 9,
    tags: ["Dark Mode", "Accessibility", "CSS Variables", "Design Systems"],
    content: [
      "Dark mode has become a must-have feature for modern applications. Beyond its aesthetic appeal, dark mode reduces eye strain in low-light environments, extends battery life on OLED displays, and is a genuine accessibility preference for many users. Implementing it well, however, requires more care than simply inverting colors.",
      "The most common mistake is treating dark mode as a pure color inversion. Dark backgrounds should use dark grays (like #1a1a2e or #252525) rather than pure black, which creates harsh contrast that's actually harder to read. Similarly, text in dark mode should be off-white (#fafafa or #e5e7eb) rather than pure white for the same reason.",
      "CSS custom properties (variables) are the cleanest architecture for theming. Define your entire color palette as variables on :root for light mode, then override them in a [data-theme='dark'] selector or via the prefers-color-scheme media query. Every component automatically inherits the correct colors without a single conditional style.",
      "Shadows behave differently in dark mode. Elevation and depth — which light mode communicates with drop shadows — become almost invisible against dark backgrounds. Instead, use lighter background fills to indicate elevation: a card that's slightly lighter than the page background sits visually 'above' it even without a shadow.",
      "Give users control. While prefers-color-scheme detects the OS-level preference, always provide a manual toggle so users can override it on your site specifically. Store this preference in localStorage so it persists across sessions. The next-themes library handles all of this elegantly with a few lines of setup.",
    ],
  },
  {
    id: 6,
    slug: "typography-in-modern-design",
    title: "Typography in Modern Design",
    description: "Understanding how to choose and use fonts effectively to create hierarchy and improve readability.",
    date: "March 1, 2024",
    readTime: "4 min read",
    category: "Design",
    image: "/typography-fonts-design.jpg",
    likes: 33,
    comments: 6,
    tags: ["Typography", "Fonts", "Design", "Readability"],
    content: [
      "Typography is the silent workhorse of design. When it's done well, users don't notice it at all — they simply read comfortably and absorb information effortlessly. When it's done poorly, it creates friction at every step: text that's too small, line lengths that are too long, or fonts that don't match the brand personality all erode the user's trust.",
      "Font pairing is an art, but there are reliable formulas to start with. Pairing a serif heading font with a sans-serif body font creates a classic, elegant feel (think editorial and news sites). Two sans-serif fonts at different weights — one geometric, one humanist — feels modern and clean, which suits tech products well. The most important rule: don't pair two fonts that are too similar, as they'll compete without adding contrast.",
      "Line height (leading) and line length (measure) dramatically affect readability. Body text reads best at a line height of 1.5–1.7× the font size. Lines should contain 60–75 characters for optimal reading speed — significantly wider and the eye struggles to track back to the start of the next line; too narrow and the constant line breaks disrupt reading flow.",
      "Type scale creates visual hierarchy. Rather than choosing font sizes arbitrarily, use a modular scale — a consistent ratio applied to a base size. The 1.250 (Major Third) and 1.333 (Perfect Fourth) scales are popular choices that produce harmonious heading sizes from h1 down to body text. Tools like Typescale.com make this straightforward.",
    ],
  },
]

export function getBlogPost(id: string | number): BlogPost | undefined {
  const numId = typeof id === "string" ? parseInt(id, 10) : id
  return blogPosts.find((post) => post.id === numId)
}
