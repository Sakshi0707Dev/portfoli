import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { MapPin, Clock, X, Mail, FileText } from 'lucide-react'
import profileImg from '../assets/portf.jpg'
import resume from '../assets/Sakshi_Gaikwad_Resume.pdf'
import ThemeToggle from './ThemeToggle'

const GITHUB_ICON = 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg'

const btnBase = [
  'inline-flex items-center gap-2 px-3 py-[4px] rounded-[6px]',
  'text-[12px] font-[\'Figtree\'] font-medium',
  'border-none no-underline min-h-[28px]',
  'transition-all',
].join(' ')

export default function Hero() {
  const [time, setTime] = useState('')

  useEffect(() => {
    setTime(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' }))
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' }))
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  const highlight = (text, words) => {
    const parts = text.split(new RegExp(`(${words.join('|')})`, 'g'))
    return parts.map((part, i) =>
      words.includes(part)
        ? <span key={i} className="font-semibold" style={{ color: 'var(--text-primary)' }}>{part}</span>
        : <span key={i} style={{ color: 'var(--text-zinc-400)' }}>{part}</span>
    )
  }

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="max-w-[700px] mx-auto px-[18px] pt-[60px]"
    >
      {/* Avatar + Profile Info row */}
      <div className="flex flex-col md:flex-row md:items-center gap-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="relative shrink-0 mx-auto md:mx-0"
        >
          <div className="relative w-[132px] h-[132px]">
            <img
              src={profileImg}
              alt="Sakshi Gaikwad"
              className="w-full h-full rounded-2xl object-cover border-4 shadow-lg"
              style={{ borderColor: 'var(--bg-avatar-border)' }}
            />
            <div className="absolute top-2 right-2">
              <ThemeToggle />
            </div>
          </div>
        </motion.div>

        {/* Profile Info - only name, username, status, meta */}
        <div className="flex-1 text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col gap-[6px]"
          >
            <h1 className="font-['Figtree'] font-bold text-[1.5rem] leading-tight" style={{ color: 'var(--text-primary)' }}>
              Sakshi Gaikwad <span className="inline-block">✨</span>
            </h1>

            <a
              href="https://x.com/SakshiML_20"
              target="_blank"
              rel="noopener noreferrer"
              className="font-['JetBrains_Mono'] text-[.85rem] transition-colors no-underline"
              style={{ color: 'var(--text-zinc-400)' }}
              onMouseEnter={e => e.target.style.color = 'var(--text-zinc-500)'}
              onMouseLeave={e => e.target.style.color = 'var(--text-zinc-400)'}
            >
              @SakshiML_20
            </a>

            <p className="font-['Figtree'] text-[.85rem] font-semibold underline underline-offset-4" style={{ color: 'var(--text-primary)', textDecorationColor: 'var(--border-subtle)' }}>
              Currently Building AI Automation Solutions
            </p>

            <div className="flex items-center justify-center md:justify-start gap-1 font-['JetBrains_Mono'] text-[.8rem] mt-[2px]" style={{ color: 'var(--text-zinc-400)' }}>
              <MapPin size={12} />
              <span>India</span>
              <span className="mx-[8px]" style={{ color: 'var(--text-zinc-600)' }}>•</span>
              <Clock size={12} />
              <span className="tabular-nums">{time}</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bio - full width below */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.25 }}
        className="font-['Figtree'] text-[16px] leading-[1.7] mt-4 max-w-[700px]"
        style={{ color: 'var(--text-zinc-400)', whiteSpace: 'pre-line' }}
      >
        {highlight(
          "Hi, I'm Sakshi Gaikwad 👋\nPassionate about building, writing, and turning ideas into products.\nI love creating AI-powered solutions that solve real-world problems.\nOpen to freelance work, internships, and collaborations.",
          ['AI-powered']
        )}
      </motion.p>

      {/* Buttons - full width below bio */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="flex flex-wrap items-center gap-2 mt-[32px] justify-center md:justify-start"
      >
            <a
          href="https://x.com/SakshiML_20"
          target="_blank"
          rel="noopener noreferrer"
          className={btnBase}
          style={{
            background: 'var(--bg-surface)',
            color: 'var(--text-primary)',
            boxShadow: 'var(--shadow-btn)',
          }}
        >
          <X size={14} />
          <span>DM</span>
        </a>

            <a
          href="mailto:sakshig1606@gmail.com"
          className={btnBase}
          style={{
            background: 'var(--bg-surface)',
            color: 'var(--text-primary)',
            boxShadow: 'var(--shadow-btn)',
          }}
        >
          <Mail size={14} />
          <span>Email</span>
        </a>

        <a
          href="https://github.com/SakshiGaikwad05"
          target="_blank"
          rel="noopener noreferrer"
          className={btnBase}
          style={{
            background: 'var(--bg-surface)',
            color: 'var(--text-primary)',
            boxShadow: 'var(--shadow-btn)',
          }}
        >
          <img src={GITHUB_ICON} alt="GitHub" width={14} height={14} style={{ filter: 'var(--icon-filter)' }} />
        </a>

        <a
          href={resume}
          target="_blank"
          rel="noopener noreferrer"
          className={btnBase}
          style={{
            background: 'var(--bg-surface)',
            color: 'var(--text-primary)',
            boxShadow: 'var(--shadow-btn)',
          }}
        >
          <FileText size={14} />
        </a>
      </motion.div>
    </motion.section>
  )
}
