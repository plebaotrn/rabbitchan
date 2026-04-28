import Image from "next/image"
import { MapPin, Mail, Github, Linkedin, GraduationCap, Briefcase, Award, Globe, Code, Layers, Wrench, Palette, Cpu } from "lucide-react"
import { ScrollReveal } from "@/components/scroll-reveal"

export const metadata = {
  title: "About | Pham Le Bao Tran",
  description: "Software Developer. Swinburne University of Technology. Bachelor of Computer Science.",
}

const skillGroups = [
  {
    label: "Languages",
    icon: <Code className="h-4 w-4" />,
    color: "skill-blue",
    items: ["JavaScript", "TypeScript", "C#", "Kotlin", "HTML", "CSS", "SQL"],
  },
  {
    label: "Frameworks",
    icon: <Layers className="h-4 w-4" />,
    color: "skill-purple",
    items: ["Vue 3", "React", "Next.js", "Tailwind CSS", "Bootstrap 5"],
  },
  {
    label: "Tools & Platforms",
    icon: <Wrench className="h-4 w-4" />,
    color: "skill-teal",
    items: ["Git", "AWS", "Supabase", "VS Code", "Android Studio", "Vite"],
  },
  {
    label: "Design",
    icon: <Palette className="h-4 w-4" />,
    color: "skill-pink",
    items: ["Figma", "Canva", "Adobe Premiere"],
  },
  {
    label: "Methods",
    icon: <Cpu className="h-4 w-4" />,
    color: "skill-emerald",
    items: ["OOP", "UI/UX Design", "Unit Testing", "Agile"],
  },
]

const experience = [
  {
    role: "Software Trainee",
    org: "SkillSpar",
    period: "2024 – 2025",
    type: "Internship",
    bullets: [
      "Developed and maintained frontend features using professional coding standards.",
      "Participated in planning, development, and review stages across the full software lifecycle.",
    ],
  },
  {
    role: "Participant",
    org: "RMIT GenAI Hackathon 2025",
    period: "Oct 2025",
    type: "Competition",
    bullets: [
      "Competed at RMIT Vietnam Campus, building GenAI-powered solutions under time constraints.",
    ],
  },
  {
    role: "Media Designer",
    org: "Chromatique Club",
    period: "2024 – 2025",
    type: "Volunteer",
    bullets: [
      "Produced visual content for social media campaigns ensuring brand consistency.",
      "Managed post-production for video and graphic design deliverables.",
    ],
  },
  {
    role: "Media Designer",
    org: "YACP Journey Project",
    period: "2022",
    type: "Volunteer",
    bullets: ["Delivered design assets under tight deadlines in a cross-functional team."],
  },
]

const certifications = [
  { name: "Cisco CCNA", detail: "Intro to Networks & Switching, Routing, Wireless Essentials", year: "2024" },
  { name: "Microsoft Office Specialist (MOS)", detail: "Excel 2016 & Word 2016", year: "2023" },
]

const languages = [
  { name: "Vietnamese", level: "Native", pct: 100, color: "#ef4444" },
  { name: "English", level: "Proficient", pct: 85, color: "#3b82f6" },
  { name: "Japanese", level: "Beginner", pct: 20, color: "#f59e0b" },
]

const typeColors: Record<string, string> = {
  Internship: "bg-indigo-100 text-indigo-700 dark:bg-indigo-900/40 dark:text-indigo-300",
  Competition: "bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300",
  Volunteer: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300",
}

export default function AboutPage() {
  return (
    <div className="flex flex-col">

      {/* ── Hero ────────────────────────────────────────── */}
      <section className="relative mx-auto max-w-5xl w-full px-6 pt-20 pb-16 section-fade overflow-hidden">
        <div className="about-hero-blob-1" />
        <div className="about-hero-blob-2" />

        <div className="relative flex flex-col sm:flex-row items-center sm:items-start gap-10">
          {/* Photo */}
          <div className="flex-shrink-0">
            <div className="about-avatar-wrap">
              <div className="relative h-44 w-44 sm:h-52 sm:w-52 rounded-2xl overflow-hidden shadow-2xl">
                <Image src="/profile.jpg" alt="Pham Le Bao Tran" fill className="object-cover object-top" priority />
              </div>
            </div>
          </div>

          {/* Text */}
          <div className="flex flex-col gap-4 text-center sm:text-left flex-1">
            <div>
              <p className="text-xs font-mono text-primary tracking-widest uppercase mb-2">Portfolio · Resume</p>
              <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">Pham Le Bao Tran</h1>
              <p className="text-lg text-muted-foreground mt-1 font-light">Software Developer</p>
            </div>

            <div className="flex flex-wrap justify-center sm:justify-start gap-x-5 gap-y-2 text-sm text-muted-foreground">
              <span className="flex items-center gap-1.5">
                <MapPin className="h-4 w-4 text-primary/70" />
                Footscray, VIC · Ho Chi Minh City, VN
              </span>
              <a
                href="mailto:phamtran2082005@gmail.com"
                className="flex items-center gap-1.5 hover:text-primary transition-colors link-underline"
              >
                <Mail className="h-4 w-4" /> phamtran2082005@gmail.com
              </a>
            </div>

            <div className="flex justify-center sm:justify-start gap-3">
              <a
                href="https://github.com/plebaotrn"
                target="_blank" rel="noopener noreferrer"
                className="social-icon social-github"
                aria-label="GitHub"
              >
                <Github className="h-4 w-4" />
              </a>
              <a
                href="https://www.linkedin.com/in/le-bao-tran-pham-016987325/"
                target="_blank" rel="noopener noreferrer"
                className="social-icon social-linkedin"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href="mailto:phamtran2082005@gmail.com"
                className="social-icon social-email"
                aria-label="Email"
              >
                <Mail className="h-4 w-4" />
              </a>
            </div>

            <div className="mt-2 p-4 rounded-xl border border-border bg-card/60 backdrop-blur-sm">
              <p className="text-sm text-muted-foreground leading-relaxed">
                Aspiring Software Developer specialising in web application development and UI/UX design,
                with hands-on experience delivering full-stack and frontend projects. Eager to contribute
                technical skills and creative problem-solving to a dynamic team in the tech industry.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Skills ──────────────────────────────────────── */}
      <section className="mx-auto max-w-5xl w-full px-6 py-14 flex flex-col gap-8">
        <ScrollReveal>
          <div className="flex items-center gap-3">
            <h2 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Skills</h2>
            <div className="flex-1 h-px bg-border" />
          </div>
        </ScrollReveal>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillGroups.map((group, i) => (
            <ScrollReveal key={group.label} delay={i * 80}>
              <div className="skill-group-card flex flex-col gap-3 p-5 rounded-2xl border border-border bg-card h-full">
                <div className="flex items-center gap-2">
                  <span className={`skill-group-icon ${group.color}`}>{group.icon}</span>
                  <p className="text-sm font-semibold text-foreground">{group.label}</p>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {group.items.map((item) => (
                    <span key={item} className={`skill-pill ${group.color} px-2.5 py-1 text-xs font-mono rounded-full border`}>
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* ── Education ───────────────────────────────────── */}
      <section className="border-t border-border bg-muted/30">
        <div className="mx-auto max-w-5xl w-full px-6 py-14 flex flex-col gap-8">
          <ScrollReveal>
            <div className="flex items-center gap-3">
              <h2 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Education</h2>
              <div className="flex-1 h-px bg-border" />
            </div>
          </ScrollReveal>
          <ScrollReveal>
            <div className="edu-card flex items-start gap-5 p-6 rounded-2xl border border-border bg-card shadow-sm">
              <div className="edu-icon-wrap flex-shrink-0">
                <GraduationCap className="h-5 w-5 text-primary" />
              </div>
              <div className="flex flex-col gap-2 flex-1">
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                  <p className="text-base font-semibold text-foreground">Swinburne University of Technology</p>
                  <p className="text-xs text-muted-foreground font-mono bg-muted px-2 py-0.5 rounded-full self-start">May 2024 – 2027</p>
                </div>
                <p className="text-sm text-foreground/80">Bachelor of Computer Science — Software Development</p>
                <p className="text-xs text-muted-foreground mt-0.5 leading-relaxed">
                  Started at Vietnam Campus · Transferred to Melbourne Hawthorn Campus, Feb 2026
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Experience ──────────────────────────────────── */}
      <section className="mx-auto max-w-5xl w-full px-6 py-14 flex flex-col gap-8">
        <ScrollReveal>
          <div className="flex items-center gap-3">
            <h2 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Experience</h2>
            <div className="flex-1 h-px bg-border" />
          </div>
        </ScrollReveal>
        <div className="relative flex flex-col gap-0">
          {/* Timeline line */}
          <div className="absolute left-[22px] top-6 bottom-6 w-px bg-gradient-to-b from-primary/50 via-border to-transparent hidden sm:block" />

          {experience.map((exp, i) => (
            <ScrollReveal key={`${exp.org}-${exp.period}`} delay={i * 90}>
              <div className="exp-card flex gap-5 p-5 sm:pl-14 relative group">
                {/* Timeline dot */}
                <div className="hidden sm:flex absolute left-4 top-7 w-[17px] h-[17px] rounded-full border-2 border-primary bg-background items-center justify-center z-10">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary group-hover:scale-125 transition-transform duration-200" />
                </div>

                <div className="flex flex-col gap-3 flex-1 p-5 rounded-2xl border border-border bg-card shadow-sm group-hover:border-primary/30 transition-colors duration-200">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                    <div className="flex flex-col gap-1">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="text-sm font-semibold text-foreground">{exp.role}</span>
                        <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${typeColors[exp.type]}`}>{exp.type}</span>
                      </div>
                      <span className="text-sm text-primary/80 font-medium">{exp.org}</span>
                    </div>
                    <p className="text-xs text-muted-foreground font-mono bg-muted px-2 py-0.5 rounded-full self-start flex-shrink-0">{exp.period}</p>
                  </div>
                  <ul className="flex flex-col gap-1.5">
                    {exp.bullets.map((b, j) => (
                      <li key={j} className="text-sm text-muted-foreground leading-relaxed flex gap-2">
                        <span className="text-primary mt-1.5 flex-shrink-0 text-xs">▸</span>
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* ── Certifications & Languages ──────────────────── */}
      <section className="border-t border-border bg-muted/30">
        <div className="mx-auto max-w-5xl w-full px-6 py-14">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">

            {/* Certifications */}
            <div className="flex flex-col gap-6">
              <ScrollReveal>
                <div className="flex items-center gap-3">
                  <h2 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Certifications</h2>
                  <div className="flex-1 h-px bg-border" />
                </div>
              </ScrollReveal>
              <div className="flex flex-col gap-3">
                {certifications.map((cert, i) => (
                  <ScrollReveal key={cert.name} delay={i * 80}>
                    <div className="cert-card flex items-start gap-4 p-5 rounded-2xl border border-border bg-card shadow-sm">
                      <div className="cert-icon-wrap flex-shrink-0">
                        <Award className="h-4 w-4 text-amber-500" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-start justify-between gap-2">
                          <p className="text-sm font-semibold text-foreground">{cert.name}</p>
                          <span className="text-xs font-mono text-muted-foreground bg-muted px-1.5 py-0.5 rounded flex-shrink-0">{cert.year}</span>
                        </div>
                        <p className="text-xs text-muted-foreground mt-0.5 leading-relaxed">{cert.detail}</p>
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>

            {/* Languages */}
            <div className="flex flex-col gap-6">
              <ScrollReveal>
                <div className="flex items-center gap-3">
                  <h2 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Languages</h2>
                  <div className="flex-1 h-px bg-border" />
                </div>
              </ScrollReveal>
              <div className="flex flex-col gap-3">
                {languages.map((lang, i) => (
                  <ScrollReveal key={lang.name} delay={i * 80}>
                    <div className="lang-card flex flex-col gap-2.5 p-5 rounded-2xl border border-border bg-card shadow-sm">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Globe className="h-4 w-4 text-muted-foreground" />
                          <p className="text-sm font-semibold text-foreground">{lang.name}</p>
                        </div>
                        <span className="text-xs font-mono text-muted-foreground">{lang.level}</span>
                      </div>
                      <div className="h-1.5 w-full bg-muted rounded-full overflow-hidden">
                        <div
                          className="h-full rounded-full lang-bar"
                          style={{ width: `${lang.pct}%`, background: lang.color }}
                        />
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  )
}
