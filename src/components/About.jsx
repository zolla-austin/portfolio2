import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Code2, Palette, Zap, Users } from 'lucide-react'

const traits = [
  { icon: Code2, label: 'Clean Code', desc: 'Well-structured, maintainable, and scalable codebases.' },
  { icon: Palette, label: 'End-to-End', desc: 'Complete ownership from data layer to interface.' },
  { icon: Zap, label: 'Performance First', desc: 'Optimized APIs, queries, interfaces, and UX.' },
  { icon: Users, label: 'User-Centric', desc: 'Products built around real human interactions.' },
]

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="about" className="py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent/6 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="section-label">// About Me</span>
          <h2 className="heading-section mt-3">
            Building complete products<br />
            <span className="text-muted italic font-normal">that last.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <p className="text-body-lg mb-6">
              I'm Zolla Austine, a Software Engineer and Full-Stack Developer based in Lagos, Nigeria, who specializes in building complete web applications, from backend architecture and database design to high-performance, user-friendly interfaces. I believe great products live at the intersection of engineering rigor and design sensibility.
            </p>
            <p className="text-body-lg mb-10">
              My focus is on writing well-structured, scalable code that not only looks good but performs well under real-world conditions. Whether it's a landing page, a SaaS dashboard, or a full e-commerce platform, I bring the same attention to detail to every project.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {traits.map(({ icon: Icon, label, desc }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.08 }}
                  className="group p-4 card-surface hover:border-accent/30 hover:bg-surface transition-all duration-300"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center">
                      <Icon size={15} className="text-accent" />
                    </div>
                    <h3 className="heading-card text-sm">{label}</h3>
                  </div>
                  <p className="text-caption">{desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="rounded-3xl border border-border bg-card p-8 relative overflow-hidden shadow-card">
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-accent to-transparent" />

              <div className="flex items-center gap-2 mb-6">
                <div className="w-2 h-2 rounded-full bg-rose" />
                <div className="w-2 h-2 rounded-full bg-yellow-400" />
                <div className="w-2 h-2 rounded-full bg-teal" />
                <span className="ml-2 text-caption font-mono tracking-wider">about.js</span>
              </div>

              <p className="text-caption font-mono mb-4">// What drives my work</p>

              <div className="space-y-4 text-body text-sm">
                <p>
                  Passionate about crafting digital experiences that are{' '}
                  <span className="text-emphasis">fast</span>,{' '}
                  <span className="text-emphasis">accessible</span>, and{' '}
                  <span className="text-emphasis">delightful</span> to use.
                </p>
                <p>
                  From database schemas and APIs to responsive interfaces and deployment, I own the
                  full application lifecycle — always with the end user in mind.
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-border">
                <p className="text-body text-sm italic">
                  "Code is poetry when it's clean, purposeful,
                  and built with the end-user in mind."
                </p>
                <span className="text-caption text-accent mt-2 block">— Zolla Austine</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
