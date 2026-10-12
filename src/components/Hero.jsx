import { motion } from 'framer-motion'
import { MapPin, ArrowDown } from 'lucide-react'
import profilePhoto from '../assets/profile.png'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] },
})

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden pt-20"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-30 theme-grid"
          style={{ backgroundSize: '72px 72px' }}
        />
        <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] rounded-full bg-accent/10 blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-teal/8 blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10 w-full py-12 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <motion.div {...fadeUp(0.1)} className="flex items-center gap-2 mb-7">
              <span className="badge-pill">
                <MapPin size={11} className="text-teal" />
                Based in Lagos, Nigeria
              </span>
              <span className="w-2 h-2 rounded-full bg-teal animate-pulse" />
              <span className="text-sm text-muted">Open to work</span>
            </motion.div>

            <motion.h1
              {...fadeUp(0.18)}
              className="heading-display text-5xl sm:text-6xl xl:text-7xl leading-none mb-4"
            >
              Zolla
              <br />
              <span className="relative">
                Austine
                <svg
                  className="absolute -bottom-2 left-0 w-full h-2 overflow-visible"
                  preserveAspectRatio="none"
                  viewBox="0 0 200 8"
                >
                  <path
                    d="M0 6 Q50 1 100 5 Q150 9 200 3"
                    fill="none"
                    stroke="var(--accent)"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </motion.h1>

            <motion.p
              {...fadeUp(0.26)}
              className="font-display text-xl sm:text-2xl text-accent tracking-tight mt-5 mb-6"
            >
              Software Engineer | Full-Stack Developer
            </motion.p>

            <motion.p
              {...fadeUp(0.32)}
              className="text-body-lg max-w-lg mb-10"
            >
              I build fast, scalable, end-to-end web applications, from database and API design
              to polished, user-focused interfaces, using React, Next.js, Node.js/Express,
              PostgreSQL, and React Native.
            </motion.p>

            <motion.div {...fadeUp(0.4)} className="flex flex-wrap gap-4">
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-accent flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm tracking-wide hover:-translate-y-1 active:translate-y-0 shadow-lg shadow-accent/25"
              >
                ✦ Hire Me
              </button>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 40 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-accent/30 via-transparent to-teal/20 blur-2xl scale-110 animate-glow-pulse" />

              <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-[380px] lg:h-[380px] rounded-full overflow-hidden border-4 border-border shadow-card">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-teal/5 z-10 pointer-events-none" />

                <img
                  src={profilePhoto}
                  alt="Zolla Austine – Software Engineer"
                  className="w-full h-full object-cover object-center"
                  onError={(e) => {
                    e.target.style.display = 'none'
                    e.target.parentElement.classList.add('photo-fallback')
                  }}
                />

                <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-surface to-card opacity-0 photo-fallback:opacity-100 transition-opacity">
                  <div className="w-24 h-24 rounded-full bg-accent/20 border border-accent/30 flex items-center justify-center mb-4">
                    <span className="font-display font-black text-3xl text-accent">ZA</span>
                  </div>
                  <span className="text-muted text-sm">Add your photo as</span>
                  <code className="text-accent text-xs mt-1">src/assets/profile.png</code>
                </div>
              </div>

              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -left-8 top-1/4 bg-card border border-border rounded-xl px-4 py-3 shadow-card-hover backdrop-blur-sm"
              >
                <div className="text-caption mb-0.5">Primary Stack</div>
                <div className="flex items-center gap-2">
                  <span className="text-accent text-sm">React</span>
                  <span className="text-primary/20">+</span>
                  <span className="text-teal text-sm">Node.js</span>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="absolute -right-6 bottom-1/4 bg-card border border-border rounded-xl px-4 py-3 shadow-card-hover backdrop-blur-sm"
              >
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-teal animate-pulse" />
                  <span className="text-caption text-primary/80">Available Now</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="flex justify-center mt-16"
        >
          <button
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            className="flex flex-col items-center gap-2 text-muted hover:text-primary transition-colors group"
          >
            <span className="text-sm tracking-widest uppercase">Scroll</span>
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ArrowDown size={16} className="group-hover:text-accent transition-colors" />
            </motion.div>
          </button>
        </motion.div>
      </div>
    </section>
  )
}
