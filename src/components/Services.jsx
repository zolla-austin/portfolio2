import { useRef } from 'react'
import { useInView, motion } from 'framer-motion'
import ServiceCard from './ServiceCard'

const services = [
  {
    icon: '💻',
    title: 'Web Development',
    description: 'Custom, performant full-stack web apps built with modern frameworks and clean architecture.',
    accent: '#6c63ff',
  },
  {
    icon: '🗄️',
    title: 'API & Database Design',
    description: 'Secure APIs, scalable backend architecture, and reliable relational database design.',
    accent: '#60a5fa',
  },
  {
    icon: '🛍️',
    title: 'E-Commerce Solutions',
    description: 'Full-featured stores with product management, cart systems, and secure payment integrations.',
    accent: '#2dd4bf',
  },
  {
    icon: '📱',
    title: 'Responsive Design',
    description: 'Pixel-perfect experiences from mobile to ultrawide. Mobile-first, fluid, adaptive layouts.',
    accent: '#fb7185',
  },
  {
    icon: '⚡',
    title: 'Performance Optimisation',
    description: 'Code splitting, lazy loading, image optimisation, and caching strategies for blazing speed.',
    accent: '#fbbf24',
  },
  {
    icon: '🎨',
    title: 'UI/UX Implementation',
    description: 'Pixel-perfect Figma-to-code translation with smooth micro-interactions and animations.',
    accent: '#a78bfa',
  },
  {
    icon: '🔧',
    title: 'Website Maintenance',
    description: 'Ongoing updates, bug fixes, and feature additions to keep your product running flawlessly.',
    accent: '#34d399',
  },
]

export default function Services() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="services" className="py-24 lg:py-32 bg-surface relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-20 pointer-events-none theme-dots"
        style={{ backgroundSize: '28px 28px' }}
      />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="section-label">// Services</span>
          <h2 className="heading-section mt-3">What I offer</h2>
          <p className="text-body max-w-xl mx-auto mt-5">
            Everything your digital product needs — from first line of code to post-launch polish.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  )
}
