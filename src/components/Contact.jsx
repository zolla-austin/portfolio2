import { useRef } from 'react'
import { useInView, motion } from 'framer-motion'
import { Mail, Phone, MapPin } from 'lucide-react'
import { siGithub, siInstagram, siX } from 'simple-icons'

const linkedInPath = 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z'

const socials = [
  { path: siGithub.path, label: 'GitHub', href: 'https://github.com/zolla-austin', color: '#FFFFFF' },
  { path: linkedInPath, label: 'LinkedIn', href: 'https://www.linkedin.com/in/zolla-austine-9b02a5376', color: '#0A66C2' },
  { path: siInstagram.path, label: 'Instagram', href: 'https://www.instagram.com/zollaaustin?igsh=M3F6ZDlyOHdsYWFx', color: '#E4405F' },
  { path: siX.path, label: 'X', href: '#', color: '#FFFFFF' },
]

export default function Contact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="contact" className="py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-accent/8 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="section-label">// Contact</span>
          <h2 className="heading-section mt-3">
            Let's build something<br />
            <span className="text-accent font-normal">great together.</span>
          </h2>
          <p className="text-body max-w-lg mx-auto mt-5">
            Have a project in mind or want to collaborate? Reach out — I respond within 24 hours.
          </p>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="space-y-6"
          >
            {[
              { icon: Mail, label: 'Email', value: 'austinezolla@gmail.com', href: 'mailto:austinezolla@gmail.com' },
              { icon: Phone, label: 'Phone', value: '07041793529', href: 'tel:07041793529' },
              { icon: MapPin, label: 'Location', value: 'Lagos, Nigeria', href: null },
            ].map(({ icon: Icon, label, value, href }) => (
              <div
                key={label}
                className="flex items-center gap-4 p-5 card-surface hover:border-accent/25 transition-all duration-300 group"
              >
                <div className="w-11 h-11 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/15 transition-colors">
                  <Icon size={18} className="text-accent" />
                </div>
                <div>
                  <p className="text-caption uppercase tracking-widest mb-0.5">{label}</p>
                  {href ? (
                    <a href={href} className="text-primary/85 text-base hover:text-accent transition-colors">
                      {value}
                    </a>
                  ) : (
                    <p className="text-primary/85 text-base">{value}</p>
                  )}
                </div>
              </div>
            ))}

            <div className="pt-4">
              <p className="text-caption uppercase tracking-widest mb-4">Follow Me</p>
              <div className="flex gap-3">
                {socials.map(({ path, label, href, color }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    {...(href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                    className="w-11 h-11 rounded-xl bg-card flex items-center justify-center transition-all duration-300"
                    style={{ border: `1.5px solid ${color}` }}
                  >
                    <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
                      <path d={path} fill={color} />
                    </svg>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
