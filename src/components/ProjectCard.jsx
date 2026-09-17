import { motion } from 'framer-motion'
import { Github, ExternalLink, Lightbulb, Trophy } from 'lucide-react'

export default function ProjectCard({ project, index, inView }) {
  const {
    title,
    description,
    challengeSolution,
    achievements,
    tags,
    bgClass,
    icon,
    github,
    demo,
    badge,
  } = project

  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, delay: index * 0.12, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="group relative rounded-3xl border border-border bg-card overflow-hidden shadow-card hover:border-accent/20 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-card-hover flex flex-col"
    >
      <div className={`relative h-52 flex-shrink-0 flex items-center justify-center overflow-hidden ${bgClass}`}>
        <div
          className="absolute inset-0 opacity-20 theme-grid"
          style={{ backgroundSize: '32px 32px' }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card/60 via-transparent to-transparent" />

        <span className="text-6xl relative z-10 drop-shadow-2xl group-hover:scale-110 transition-transform duration-500">
          {icon}
        </span>

        <span className="absolute top-4 right-4 text-xs px-2.5 py-1 rounded-full overlay-badge border backdrop-blur-sm">
          {badge}
        </span>
      </div>

      <div className="p-6 flex flex-col flex-1">
        <h3 className="heading-card text-lg tracking-tight mb-2 group-hover:text-accent transition-colors duration-300">
          {title}
        </h3>
        <p className="text-body text-sm mb-5">{description}</p>

        <div className="mb-5 rounded-xl border border-border bg-surface/50 p-4">
          <div className="flex items-center gap-2 mb-2">
            <Lightbulb size={14} className="text-accent flex-shrink-0" />
            <span className="section-label text-[0.65rem]">Challenge & Solution</span>
          </div>
          <p className="text-body text-sm leading-relaxed">{challengeSolution}</p>
        </div>

        <div className="mb-6">
          <div className="flex items-center gap-2 mb-3">
            <Trophy size={14} className="text-teal flex-shrink-0" />
            <span className="section-label text-[0.65rem]">Key Achievements</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {achievements.map((item) => (
              <span
                key={item}
                className="text-caption px-3 py-1.5 rounded-full border border-border bg-card hover:border-accent/30 hover:bg-accent/5 hover:text-primary transition-all duration-300 cursor-default"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap gap-1.5 mb-6">
          {tags.map((tag) => (
            <span
              key={tag}
              className="text-caption px-2.5 py-1 rounded-lg bg-accent/8 border border-accent/15 text-accent"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-3 pt-4 border-t border-border mt-auto">
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-caption text-muted hover:text-primary transition-colors duration-300 group/link"
            >
              <Github size={14} className="group-hover/link:text-accent transition-colors" />
              GitHub
            </a>
          )}
          {github && demo && <span className="text-primary/20 text-xs">|</span>}
          {demo && (
            <a
              href={demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-caption text-accent hover:text-primary transition-colors duration-300 group/link"
            >
              <ExternalLink size={14} />
              Live Demo
            </a>
          )}
        </div>
      </div>
    </motion.article>
  )
}
