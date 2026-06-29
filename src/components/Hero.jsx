import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { MapPin, Clock, Moon, X, Mail, FileText } from 'lucide-react'
import profileImg from '../assets/portf.jpg'

function GithubIcon({ size = 14, className = '' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
  )
}

const btnBase = [
  'inline-flex items-center gap-2 px-3 py-[4px] rounded-[6px]',
  'bg-[#1a1b1c] text-white text-[12px] font-[\'Figtree\'] font-medium',
  'border-none no-underline min-h-[28px]',
  'shadow-[0_32px_64px_-16px_rgba(0,0,0,0.4),0_16px_32px_-8px_rgba(0,0,0,0.4),0_8px_16px_-4px_rgba(0,0,0,0.25),0_4px_8px_-2px_rgba(0,0,0,0.25),0_-8px_16px_-1px_rgba(0,0,0,0.2),0_2px_4px_-1px_rgba(0,0,0,0.25),0_0_0_1px_#000,inset_0_0_0_1px_rgba(255,255,255,0.08),inset_0_1px_rgba(255,255,255,0.2)]',
  'hover:bg-[#1a1b1cc7] transition-all',
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
        ? <span key={i} className="font-semibold text-white">{part}</span>
        : <span key={i} className="text-zinc-400">{part}</span>
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
              className="w-full h-full rounded-2xl object-cover border-4 border-[#0a0a0b] shadow-lg"
            />
            <div className="absolute top-2 right-2 w-6 h-6 bg-zinc-900 border border-white/10 rounded-full flex items-center justify-center">
              <Moon size={12} className="text-zinc-400" />
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
            <h1 className="font-['Figtree'] font-bold text-[1.5rem] text-white leading-tight">
              Sakshi Gaikwad <span className="inline-block">✨</span>
            </h1>

            <a
              href="https://x.com/SakshiML_20"
              target="_blank"
              rel="noopener noreferrer"
              className="font-['JetBrains_Mono'] text-[.85rem] text-zinc-400 hover:text-zinc-200 transition-colors no-underline"
            >
              @SakshiML_20
            </a>

            <p className="font-['Figtree'] text-[.85rem] text-white font-semibold underline underline-offset-4 decoration-white/30">
              Currently Building AI Automation Solutions
            </p>

            <div className="flex items-center justify-center md:justify-start gap-1 font-['JetBrains_Mono'] text-[.8rem] text-zinc-400 mt-[2px]">
              <MapPin size={12} />
              <span>India</span>
              <span className="text-zinc-600 mx-[8px]">•</span>
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
        className="font-['Figtree'] text-[16px] leading-[1.7] mt-4 text-zinc-400 max-w-[700px]"
      >
        {highlight(
          "Hi! I'm a Full Stack Developer passionate about building modern web applications, AI-powered automation tools, and scalable backend systems. I enjoy solving real-world problems using React, TypeScript, Node.js, Python, Express, MongoDB, and modern AI technologies. I'm always learning, building, and improving.",
          ['Full Stack Developer', 'React', 'TypeScript', 'Node.js', 'Python', 'Express', 'MongoDB', 'AI']
        )}
      </motion.p>

      {/* Buttons - full width below bio */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="flex flex-wrap items-center gap-2 mt-[32px] justify-center md:justify-start"
      >
            <a href="https://x.com/SakshiML_20" target="_blank" rel="noopener noreferrer" className={btnBase}>
          <X size={14} />
          <span>DM</span>
        </a>

        <span className="font-['JetBrains_Mono'] text-[12px] text-[#a0aec0] font-semibold rotate-[-16deg] mx-[4px]">/</span>

            <a href="mailto:sakshig1606@gmail.com" className={btnBase}>
          <Mail size={14} />
          <span>Email Me</span>
        </a>

        <a href="https://github.com/Sakshi0707Dev" target="_blank" rel="noopener noreferrer" className={btnBase}>
          <GithubIcon size={14} />
        </a>

        <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className={btnBase}>
          <FileText size={14} />
        </a>
      </motion.div>
    </motion.section>
  )
}
