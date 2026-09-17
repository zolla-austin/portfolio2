import { useRef } from 'react'
import { useInView } from 'framer-motion'
import { motion } from 'framer-motion'
import ProjectCard from './ProjectCard'

const projects = [
  {
    title: 'EasyShop — Full-Stack E-Commerce Platform',
    description:
      'An end-to-end commerce platform with a Next.js storefront, Express API, PostgreSQL database, Paystack payments, admin dashboard, and a React Native rider delivery app.',
    challengeSolution:
      'Built the complete shopping and delivery workflow, connecting customers, administrators, payments, and riders through secure APIs and live GPS tracking.',
    achievements: [
      'End-to-End Commerce Flow',
      'Paystack Integration',
      'Admin Dashboard',
      'Live Rider GPS Tracking',
    ],
    tags: ['Next.js', 'Express', 'PostgreSQL', 'Paystack', 'React Native'],
    bgClass: 'bg-gradient-to-br from-[#0d0a2e] via-[#120e45] to-[#0a1a3e]',
    icon: '🛒',
    badge: 'Full-Stack',
    github: 'https://github.com/zolla-austin/EasyShop',
  },
  {
    title: 'Emperor — Luxury Product Catalog',
    description:
      'A refined catalog experience for perfumes, suits, and T-shirts, with a redesigned product grid and a direct WhatsApp-based ordering and payment flow.',
    challengeSolution:
      'Simplified product discovery and purchasing by pairing a polished, responsive catalog with a familiar WhatsApp conversion journey.',
    achievements: [
      'Redesigned Product Grid',
      'WhatsApp Ordering',
      'Streamlined Payment Flow',
      'Responsive Catalog',
    ],
    tags: ['Product Catalog', 'WhatsApp Ordering', 'Responsive Design'],
    bgClass: 'bg-gradient-to-br from-[#0a1628] via-[#0d1f3d] to-[#061224]',
    icon: '👑',
    badge: 'Luxury Commerce',
    demo: 'https://emperor001.netlify.app/',
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
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14"
        >
          <div>
            <span className="section-label">// Featured Work</span>
            <h2 className="heading-section mt-3">
              Projects I've<br />
              <span className="text-muted italic font-normal">shipped.</span>
            </h2>
          </div>
          <p className="text-body max-w-sm text-sm md:text-right">
            Real-world commerce products built across web, mobile, APIs, databases, payments, and delivery workflows.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  )
}
