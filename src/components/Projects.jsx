import { useRef } from 'react'
import { useInView } from 'framer-motion'
import { motion } from 'framer-motion'
import ProjectCard from './ProjectCard'

const projects = [
  {
    title: 'EasyShop',
    description:
      'A full-stack e-commerce platform covering the storefront, product browsing, and the core shopping flow, built end-to-end from the database and API to the user interface.',
    tags: ['React', 'Node.js', 'Express', 'PostgreSQL'],
  },
  {
    title: 'VIEK Client Management',
    description:
      'A client management application built for VIEK Tech Company. I diagnosed and fixed a set of production-style issues across the frontend and backend, then hardened the app for real use.',
    tags: ['React', 'Vite', 'Node.js', 'Express', 'JWT', 'bcrypt'],
  },
  {
    title: 'ZWallet',
    description:
      'A digital wallet product in the style of a modern fintech app, with a transaction ledger, wallet funding through Paystack, account login, KYC verification tiers, bank transfers, and bill payments.',
    tags: ['Next.js', 'TypeScript', 'PostgreSQL', 'Paystack'],
    highlights: [
      'Transaction ledger design',
      'Paystack wallet funding',
      'KYC tiers and bill payments',
    ],
  },
  {
    title: 'Emperor',
    description:
      'A luxury product catalog site for perfumes, suits, and T-shirts, with a focus on clean presentation and a premium feel.',
    tags: ['React', 'Netlify'],
  },
]

const viekGroups = [
  {
    title: 'Frontend stability',
    items: [
      'Fixed a blank screen caused by an unconfigured React build plugin and an undefined data state during the first render.',
      'Added a shared request handler for status, JSON parsing, network errors, and cancelled requests, and stopped stale responses from overwriting newer filter results.',
      'Separated loading for clients and projects so changing one filter no longer reloads unrelated data.',
    ],
  },
  {
    title: 'Data integrity',
    items: [
      'Corrected type mismatches between URL parameters and numeric IDs that broke client deletion and project filtering.',
      'Replaced length-based ID generation with a monotonic counter.',
      "Cascade-deleted a client's projects when the client is removed.",
    ],
  },
  {
    title: 'Security',
    items: [
      'Stored passwords as bcrypt hashes, excluded password data from API responses, and replaced a forgeable placeholder token with signed, one-hour JWTs in HttpOnly, SameSite cookies.',
      'Restricted CORS to the configured frontend origin and added login rate limiting with generic error messages.',
      'Added server-side validation for trimmed input, types, email format, length limits, duplicate emails, and numeric IDs, with sanitized JSON errors for malformed requests and unknown routes.',
    ],
  },
  {
    title: 'Quality and testing',
    items: [
      'Added an automated API test covering login, sessions, validation, filtering, deletion, CORS, and rate limiting.',
      'Moved the API URL into an environment variable and confirmed the production build succeeds.',
    ],
  },
]

export default function Projects() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="projects" className="py-24 lg:py-32 relative">
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-teal/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <span className="section-label">// Selected Work</span>
          <h2 className="heading-section mt-3">Selected Work</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} inView={inView} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16"
        >
          <span className="section-label">// VIEK Client Management</span>
          <h3 className="heading-section mt-3 text-3xl md:text-4xl">
            VIEK Client Management: What I Fixed
          </h3>
          <p className="text-body max-w-3xl mt-5">
            I received a client management app with a blank page, broken data loading, and security gaps. I reproduced each issue, fixed it, and tested the full workflow.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-10">
            {viekGroups.map((group) => (
              <div key={group.title} className="p-6 card-surface">
                <h4 className="heading-card text-base mb-4">{group.title}</h4>
                <ul className="space-y-3 text-body text-sm list-disc pl-5">
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <p className="text-body text-sm mt-8 max-w-3xl">
            Next steps for production include a persistent database, HTTPS, token revocation, and centralized logging.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
