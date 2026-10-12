import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

const categoryOrder = ['Frontend', 'Backend', 'Database', 'Mobile', 'Other']

export default function TechStack() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [tools, setTools] = useState([])
  const [status, setStatus] = useState('loading')

  useEffect(() => {
    const controller = new AbortController()

    fetch('/api/tools', { signal: controller.signal })
      .then(async (response) => {
        if (!response.ok) throw new Error('Request failed')
        const body = await response.json()
        if (!Array.isArray(body?.data)) throw new Error('Invalid response')
        setTools(body.data)
        setStatus('ready')
      })
      .catch((error) => {
        if (error.name === 'AbortError') return
        setStatus('error')
      })

    return () => controller.abort()
  }, [])

  const groups = categoryOrder
    .map((name) => ({
      name,
      technologies: tools.filter((tool) => tool.category === name),
    }))
    .filter((group) => group.technologies.length > 0)

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

        {status === 'loading' && (
          <p className="text-body text-center">Loading tools...</p>
        )}

        {status === 'error' && (
          <p className="text-body text-center">Couldn't load tools right now.</p>
        )}

        {status === 'ready' && (
          <div className="space-y-12">
            {groups.map((group, groupIndex) => (
              <div key={group.name}>
                <h3 className="section-label mb-5 text-center md:text-left">// {group.name}</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-5">
                  {group.technologies.map((tool, i) => (
                    <motion.div
                      key={tool.id}
                      initial={{ opacity: 0, y: 24 }}
                      animate={inView ? { opacity: 1, y: 0 } : {}}
                      transition={{
                        duration: 0.45,
                        delay: groupIndex * 0.1 + i * 0.05,
                        ease: 'easeOut',
                      }}
                      className="group flex flex-col items-center justify-center gap-3 p-5 md:p-6 card-surface hover:scale-105 hover:shadow-card-hover transition-all duration-300 cursor-default"
                    >
                      <img
                        src={tool.logo}
                        alt={tool.name}
                        width="24"
                        height="24"
                        className="w-6 h-6 transition-transform duration-300 group-hover:scale-110"
                      />
                      <span className="text-sm text-primary text-center leading-tight">
                        {tool.name}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
