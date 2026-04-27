import { MapPin, Mail, Github, Linkedin, GraduationCap, Briefcase, Award } from "lucide-react"

export const metadata = {
  title: "About | Pham Le Bao Tran",
  description: "Software Developer based in Melbourne. Swinburne University, Bachelor of Computer Science.",
}

const skillGroups = [
  {
    label: "Languages",
    items: ["JavaScript", "TypeScript", "C#", "Kotlin", "HTML", "CSS", "SQL"],
  },
  {
    label: "Frameworks",
    items: ["Vue 3", "React", "Next.js", "Tailwind CSS", "Bootstrap 5"],
  },
  {
    label: "Tools & Platforms",
    items: ["Git", "AWS", "Supabase", "VS Code", "Android Studio", "Vite"],
  },
  {
    label: "Design",
    items: ["Figma", "Canva", "Adobe Premiere"],
  },
  {
    label: "Methods",
    items: ["OOP", "UI/UX Design", "Unit Testing", "Agile"],
  },
]

const experience = [
  {
    role: "Software Trainee",
    org: "SkillSpar",
    period: "2024 – 2025",
    bullets: [
      "Developed and maintained frontend features using professional coding standards, adapting quickly to internal systems and project workflows.",
      "Gained end-to-end understanding of software project lifecycles, participating in planning, development, and review stages.",
    ],
  },
  {
    role: "Participant",
    org: "RMIT GenAI Hackathon 2025",
    period: "Oct 2025",
    bullets: [
      "Competitive hackathon at RMIT Vietnam Campus focused on building innovative solutions using Generative AI technologies within a time-constrained environment.",
    ],
  },
  {
    role: "Media Designer",
    org: "Chromatique Club",
    period: "2024 – 2025",
    bullets: [
      "Produced high-quality visual content for social media, ensuring brand consistency across campaigns.",
      "Managed post-production for digital assets including video editing and graphic design deliverables.",
    ],
  },
  {
    role: "Media Designer",
    org: "YACP Journey Project",
    period: "2022",
    bullets: [
      "Delivered creative design assets under tight deadlines while coordinating with a cross-functional team.",
    ],
  },
]

const certifications = [
  {
    name: "Cisco CCNA",
    detail: "Intro to Networks & Switching, Routing, Wireless Essentials",
  },
  {
    name: "Microsoft Office Specialist (MOS)",
    detail: "Excel 2016 & Word 2016",
  },
]

const languages = [
  { name: "English", level: "Proficient" },
  { name: "Vietnamese", level: "Native" },
  { name: "Japanese", level: "Beginner" },
]

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-20 flex flex-col gap-16">

      {/* Header */}
      <section className="flex flex-col gap-5 animate-in fade-in slide-in-from-bottom-4 duration-700">
        <div className="flex flex-col gap-1">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
            Pham Le Bao Tran
          </h1>
          <p className="text-lg text-muted-foreground">Software Developer</p>
        </div>

        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
          <span className="flex items-center gap-1.5">
            <MapPin className="h-4 w-4" />
            Footscray, VIC 3011, Australia
          </span>
          <a href="mailto:phamtran2082005@gmail.com" className="flex items-center gap-1.5 hover:text-foreground transition-colors">
            <Mail className="h-4 w-4" />
            phamtran2082005@gmail.com
          </a>
          <a href="https://github.com/plebaotrn" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-foreground transition-colors">
            <Github className="h-4 w-4" />
            github.com/plebaotrn
          </a>
          <a href="https://linkedin.com/in/plebaotrn" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-foreground transition-colors">
            <Linkedin className="h-4 w-4" />
            LinkedIn
          </a>
        </div>

        <p className="max-w-2xl text-base text-muted-foreground leading-relaxed">
          Aspiring Software Developer specialising in web application development and UI/UX design,
          with hands-on experience delivering full-stack and frontend projects. Eager to contribute
          technical skills and creative problem-solving to a dynamic team in the Australian tech industry.
        </p>
      </section>

      <hr className="border-border" />

      {/* Skills */}
      <section className="flex flex-col gap-6 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100">
        <h2 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Skills</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillGroups.map((group) => (
            <div key={group.label} className="flex flex-col gap-2">
              <p className="text-xs font-medium text-foreground">{group.label}</p>
              <div className="flex flex-wrap gap-1.5">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="px-2.5 py-1 text-xs font-mono bg-muted text-muted-foreground rounded border border-border"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <hr className="border-border" />

      {/* Education */}
      <section className="flex flex-col gap-6 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-150">
        <h2 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Education</h2>
        <div className="flex items-start gap-4 p-5 border border-border rounded-lg bg-card">
          <div className="mt-0.5 flex-shrink-0">
            <GraduationCap className="h-5 w-5 text-primary" />
          </div>
          <div className="flex flex-col gap-1">
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
              <p className="text-sm font-semibold text-foreground">Swinburne University of Technology</p>
              <p className="text-xs text-muted-foreground font-mono">May 2024 – 2027</p>
            </div>
            <p className="text-sm text-muted-foreground">Bachelor of Computer Science — Software Development</p>
            <p className="text-xs text-muted-foreground">Melbourne Hawthorn Campus · Transferred Feb 2026</p>
          </div>
        </div>
      </section>

      <hr className="border-border" />

      {/* Experience */}
      <section className="flex flex-col gap-6 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200">
        <h2 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Experience</h2>
        <div className="flex flex-col gap-4">
          {experience.map((exp) => (
            <div key={`${exp.org}-${exp.period}`} className="flex items-start gap-4 p-5 border border-border rounded-lg bg-card">
              <div className="mt-0.5 flex-shrink-0">
                <Briefcase className="h-4 w-4 text-muted-foreground" />
              </div>
              <div className="flex flex-col gap-2 flex-1 min-w-0">
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                  <div>
                    <span className="text-sm font-semibold text-foreground">{exp.role}</span>
                    <span className="text-sm text-muted-foreground"> · {exp.org}</span>
                  </div>
                  <p className="text-xs text-muted-foreground font-mono flex-shrink-0">{exp.period}</p>
                </div>
                <ul className="flex flex-col gap-1.5">
                  {exp.bullets.map((b, i) => (
                    <li key={i} className="text-sm text-muted-foreground leading-relaxed flex gap-2">
                      <span className="text-primary mt-1.5 flex-shrink-0 text-xs">▸</span>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      <hr className="border-border" />

      {/* Certifications & Languages */}
      <section className="grid grid-cols-1 sm:grid-cols-2 gap-10 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-250">
        <div className="flex flex-col gap-4">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Certifications</h2>
          <div className="flex flex-col gap-3">
            {certifications.map((cert) => (
              <div key={cert.name} className="flex items-start gap-3 p-4 border border-border rounded-lg bg-card">
                <Award className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm font-medium text-foreground">{cert.name}</p>
                  <p className="text-xs text-muted-foreground mt-0.5">{cert.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Languages</h2>
          <div className="flex flex-col gap-3">
            {languages.map((lang) => (
              <div key={lang.name} className="flex items-center justify-between p-4 border border-border rounded-lg bg-card">
                <p className="text-sm font-medium text-foreground">{lang.name}</p>
                <span className="text-xs font-mono text-muted-foreground">{lang.level}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  )
}
