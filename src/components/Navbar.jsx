import { useActiveSection } from '../hooks/useActiveSection'
import { useScrollProgress } from '../hooks/useScrollProgress'
import { motion } from 'framer-motion'

const links = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const active = useActiveSection()
  const progress = useScrollProgress()

  return (
    <>
      <div className="fixed top-0 left-0 h-[2px] z-[60] bg-white/10" style={{ width: `${progress}%`, transition: 'width 0.1s linear' }} />

      <nav className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between rounded-2xl border border-white/[0.06] bg-black/60 backdrop-blur-xl px-6 py-3">
          <a href="#home" className="text-white font-bold text-lg tracking-tight select-none">
            SG
          </a>

          <div className="hidden md:flex items-center gap-1">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`relative px-3 py-2 text-sm font-medium rounded-lg transition-colors duration-200 ${
                  active === link.href.slice(1)
                    ? 'text-white'
                    : 'text-zinc-500 hover:text-zinc-300'
                }`}
              >
                {link.label}
                {active === link.href.slice(1) && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute inset-0 bg-white/[0.06] rounded-lg -z-10"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            ))}
          </div>

          <a
            href="#contact"
            className="text-sm font-medium text-white bg-white/[0.08] hover:bg-white/[0.12] border border-white/10 px-4 py-2 rounded-xl transition-all duration-200"
          >
            Resume
          </a>
        </div>
      </nav>
    </>
  )
}
