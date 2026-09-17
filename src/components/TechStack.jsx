import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  SiHtml5,
  SiCss,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiGit,
  SiGithub,
  SiSupabase,
  SiPostgresql,
  SiAngular,
  SiNodedotjs,
  SiExpress,
  SiPhp,
  SiLaravel,
} from 'react-icons/si'
import { TbBrandReactNative } from 'react-icons/tb'
import { useTheme } from '../contexts/ThemeContext'

const technologyGroups = [
  {
    name: 'Frontend',
    technologies: [
      { name: 'HTML5', icon: SiHtml5, color: '#E34F26' },
      { name: 'CSS3', icon: SiCss, color: '#1572B6' },
      { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
      { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
      { name: 'React', icon: SiReact, color: '#61DAFB' },
      { name: 'React Native', icon: TbBrandReactNative, color: '#087EA4' },
      { name: 'Next.js', icon: SiNextdotjs, themeAdaptive: true },
      { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
      { name: 'Angular', icon: SiAngular, color: '#DD0031' },
    ],
  },
  {
    name: 'Backend',
    technologies: [
      { name: 'Node.js', icon: SiNodedotjs, color: '#5FA04E' },
      { name: 'Express', icon: SiExpress, themeAdaptive: true },
      { name: 'PHP', icon: SiPhp, color: '#777BB4' },
      { name: 'Laravel', icon: SiLaravel, color: '#FF2D20' },
      { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1' },
      { name: 'Supabase', icon: SiSupabase, color: '#3FCF8E' },
    ],
  },
  {
    name: 'Tools',
    technologies: [
      { name: 'Git', icon: SiGit, color: '#F05032' },
      { name: 'GitHub', icon: SiGithub, themeAdaptive: true },
    ],
  },
]

export default function TechStack() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const { isDark } = useTheme()
  const adaptiveColor = isDark ? '#f0f0f8' : '#181717'

  return (
    <section id="tech-stack" className="py-24 lg:py-32 bg-surface relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-20 pointer-events-none theme-dots"
        style={{ backgroundSize: '28px 28px' }}
      />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="section-label">// Tech Stack</span>
          <h2 className="heading-section mt-3">Tools I build with</h2>
          <p className="text-body max-w-xl mx-auto mt-5">
            A curated set of technologies I use to craft fast, scalable, and user-focused applications.
          </p>
        </motion.div>

        <div className="space-y-12">
          {technologyGroups.map((group, groupIndex) => (
            <div key={group.name}>
              <h3 className="section-label mb-5 text-center md:text-left">// {group.name}</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-5">
                {group.technologies.map(({ name, icon: Icon, color, themeAdaptive }, i) => (
                  <motion.div
                    key={name}
                    initial={{ opacity: 0, y: 24 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{
                      duration: 0.45,
                      delay: groupIndex * 0.1 + i * 0.05,
                      ease: 'easeOut',
                    }}
                    className="group flex flex-col items-center justify-center gap-3 p-5 md:p-6 card-surface hover:scale-105 hover:shadow-card-hover transition-all duration-300 cursor-default"
                  >
                    <Icon
                      size={40}
                      className="transition-transform duration-300 group-hover:scale-110"
                      style={{ color: themeAdaptive ? adaptiveColor : color }}
                    />
                    <span className="text-sm text-primary text-center leading-tight">
                      {name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
