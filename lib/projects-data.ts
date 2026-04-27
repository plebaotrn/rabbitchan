export interface Project {
  id: number
  title: string
  description: string
  longDescription: string
  image: string
  tags: string[]
  category: string
  githubUrl: string
  demoUrl: string
  status: "completed" | "in-progress" | "archived"
  year: string
  featured: boolean
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Rabbit Chan Blog",
    description:
      "A personal project blog built with Next.js 15, React 19, and Tailwind CSS featuring gradient themes, dark mode, custom cursor, and background music.",
    longDescription:
      "This is the site you're looking at right now! Built from the ground up with modern web technologies to create a beautiful, interactive blogging experience. Features include a custom carrot cursor, click particle effects, a music player widget, smooth animations, and a full dark/light mode system.",
    image: "/creative-design-workspace-colorful-gradient.jpg",
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "shadcn/ui"],
    category: "Web App",
    githubUrl: "https://github.com/plebaotrn/rabbitchan",
    demoUrl: "/",
    status: "completed",
    year: "2024",
    featured: true,
  },
  {
    id: 2,
    title: "Anime Tracker",
    description:
      "A full-stack anime watchlist app to track series, progress, and ratings with a clean, minimal UI inspired by MyAnimeList.",
    longDescription:
      "An application for tracking anime series with features like episode progress tracking, custom ratings, watchlist management, and seasonal charts. Integrates with the Jikan API to pull anime metadata automatically.",
    image: "/animation-motion-design-colorful.jpg",
    tags: ["React", "Node.js", "MongoDB", "Jikan API"],
    category: "Full Stack",
    githubUrl: "https://github.com/plebaotrn",
    demoUrl: "#",
    status: "in-progress",
    year: "2024",
    featured: true,
  },
  {
    id: 3,
    title: "Gradient Design System",
    description:
      "A reusable component library built on Tailwind CSS with a blue-pink gradient design language, dark mode support, and full TypeScript types.",
    longDescription:
      "A custom design system extracted from personal projects, offering a consistent gradient-based visual identity. Includes buttons, cards, badges, forms, and navigation components — all with built-in dark mode and accessibility support.",
    image: "/gradient-colors-abstract-design.jpg",
    tags: ["TypeScript", "Tailwind CSS", "shadcn/ui", "Storybook"],
    category: "Design System",
    githubUrl: "https://github.com/plebaotrn",
    demoUrl: "#",
    status: "completed",
    year: "2024",
    featured: true,
  },
  {
    id: 4,
    title: "Responsive Portfolio",
    description:
      "A minimal, fast personal portfolio website showcasing work, skills, and contact information with fluid responsive layouts.",
    longDescription:
      "A clean, single-page portfolio designed for maximum performance. Uses Next.js static generation for near-instant page loads, with subtle entrance animations and a mobile-first responsive grid. Scored 98+ on Lighthouse across all categories.",
    image: "/responsive-design-mobile-desktop.jpg",
    tags: ["Next.js", "CSS Grid", "Framer Motion"],
    category: "Portfolio",
    githubUrl: "https://github.com/plebaotrn",
    demoUrl: "#",
    status: "completed",
    year: "2023",
    featured: false,
  },
  {
    id: 5,
    title: "Dark Mode UI Kit",
    description:
      "A Figma & code UI kit focused on dark interface design with carefully crafted color ramps, elevation tokens, and component states.",
    longDescription:
      "A comprehensive dark mode design kit created to solve the most common pitfalls of dark UI — harsh black backgrounds, invisible shadows, and low-contrast text. Ships with a Figma library and matching React components with CSS variable tokens.",
    image: "/dark-mode-interface-design.jpg",
    tags: ["Figma", "React", "CSS Variables", "Design Tokens"],
    category: "Design",
    githubUrl: "https://github.com/plebaotrn",
    demoUrl: "#",
    status: "completed",
    year: "2023",
    featured: false,
  },
  {
    id: 6,
    title: "Typography Explorer",
    description:
      "An interactive tool for exploring font pairings, type scales, and modular spacing — designed for designers and developers.",
    longDescription:
      "A browser-based tool that lets you experiment with Google Fonts pairings, modular type scales, and line-height/spacing values in real time. Export your configuration as CSS variables or a Tailwind config snippet to drop straight into your project.",
    image: "/typography-fonts-design.jpg",
    tags: ["React", "Google Fonts API", "CSS", "TypeScript"],
    category: "Tool",
    githubUrl: "https://github.com/plebaotrn",
    demoUrl: "#",
    status: "archived",
    year: "2023",
    featured: false,
  },
]

export const featuredProjects = projects.filter((p) => p.featured)
