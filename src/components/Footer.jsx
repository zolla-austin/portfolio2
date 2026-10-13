import { Heart } from 'lucide-react'

const links = ['About', 'Tech Stack', 'Projects', 'Services', 'Contact']

export default function Footer() {
  const scrollTo = (id) => {
    const sectionId = id.toLowerCase().replace(/\s+/g, '-')
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="border-t border-border py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <div className="font-display font-black text-xl tracking-tight mb-1 text-primary">
              Z<span className="text-accent">.</span>
              <span className="text-muted text-sm ml-1">Austine</span>
            </div>
            <p className="text-caption">Software Engineer · Lagos, Nigeria</p>
          </div>

          <ul className="flex items-center gap-6">
            {links.map((link) => (
              <li key={link}>
                <button
                  onClick={() => scrollTo(link)}
                  className="nav-link"
                >
                  {link}
                </button>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3 rounded-2xl border border-border bg-card px-3.5 py-2.5">
            <div className="relative flex h-10 w-10 shrink-0 items-center justify-center">
              <span className="absolute inset-0 rounded-full border border-accent/35" />
              <span className="absolute inset-[5px] rounded-full border border-teal/40" />
              <span className="font-display text-xs font-black tracking-tight text-primary">ZA</span>
            </div>
            <div className="text-left leading-tight">
              <p className="flex items-center gap-1.5 text-sm text-primary">
                <span className="h-1.5 w-1.5 rounded-full bg-teal animate-pulse" />
                Open for work
              </p>
              <p className="text-caption">Let’s build something.</p>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-caption text-muted/60">
            © {new Date().getFullYear()} Zolla Austine. All rights reserved.
          </p>
          <p className="text-caption text-muted/60 flex items-center gap-1.5">
            Built with <Heart size={11} className="text-rose" fill="currentColor" /> using React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  )
}
