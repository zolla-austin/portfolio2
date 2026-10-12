import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const technologyGroups = [
  {
    name: 'Frontend',
    technologies: [
      { name: 'HTML5', logo: '/logos/html5.svg' },
      { name: 'CSS3', logo: '/logos/css3.svg' },
      { name: 'JavaScript', logo: '/logos/javascript.svg' },
      { name: 'TypeScript', logo: '/logos/typescript.svg' },
      { name: 'React', logo: '/logos/react.svg' },
      { name: 'React Native', logo: '/logos/react-native.svg' },
      { name: 'Next.js', logo: '/logos/nextjs.svg' },
      { name: 'Tailwind CSS', logo: '/logos/tailwindcss.svg' },
    ],
  },
  {
    name: 'Backend',
    technologies: [
      { name: 'Node.js', logo: '/logos/nodejs.svg' },
      { name: 'Express', logo: '/logos/express.svg' },
      { name: 'Laravel', logo: '/logos/laravel.svg' },
      { name: 'PostgreSQL', logo: '/logos/postgresql.svg' },
      { name: 'REST API' },
    ],
  },
  {
    name: 'Other',
    technologies: [
      { name: 'Git', logo: '/logos/git.svg' },
      { name: 'GitHub', logo: '/logos/github.svg' },
    ],
  },
]

function RestApiIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="w-10 h-10 text-primary transition-transform duration-300 group-hover:scale-110"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      aria-hidden="true"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3.5M16 7V3.5M6.5 7h11v4.5a5.5 5.5 0 0 1-11 0V7z" />
      <path strokeLinecap="round" d="M12 17v3.5" />
    </svg>
  )
}

export default function TechStack() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

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
                {group.technologies.map((tool, i) => (
                  <motion.div
                    key={tool.name}
                    initial={{ opacity: 0, y: 24 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{
                      duration: 0.45,
                      delay: groupIndex * 0.1 + i * 0.05,
                      ease: 'easeOut',
                    }}
                    className="group flex flex-col items-center justify-center gap-3 p-5 md:p-6 card-surface hover:scale-105 hover:shadow-card-hover transition-all duration-300 cursor-default"
                  >
                    {tool.name === 'REST API' ? (
                      <RestApiIcon />
                    ) : (
                      <img
                        src={tool.logo}
                        alt=""
                        width="40"
                        height="40"
                        className="w-10 h-10 transition-transform duration-300 group-hover:scale-110"
                      />
                    )}
                    <span className="text-sm text-primary text-center leading-tight">
                      {tool.name}
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
