'use client'

import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import { useMousePosition } from '../hooks/useMousePosition'

export default function Cursor() {
  const { x, y } = useMousePosition()
  const [hovering, setHovering] = useState(false)
  const cursorX = useSpring(x, { stiffness: 500, damping: 28 })
  const cursorY = useSpring(y, { stiffness: 500, damping: 28 })

  useEffect(() => {
    const onOver = () => setHovering(true)
    const onOut = () => setHovering(false)
    for (const el of document.querySelectorAll('a, button, [data-cursor]')) {
      el.addEventListener('mouseenter', onOver)
      el.addEventListener('mouseleave', onOut)
    }
    return () => {
      for (const el of document.querySelectorAll('a, button, [data-cursor]')) {
        el.removeEventListener('mouseenter', onOver)
        el.removeEventListener('mouseleave', onOut)
      }
    }
  }, [])

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-[9999] hidden md:block"
      style={{ x: cursorX, y: cursorY }}
    >
      <div
        className={`rounded-full bg-white mix-blend-difference transition-all duration-200 ${
          hovering ? 'w-8 h-8 -translate-x-4 -translate-y-4' : 'w-3 h-3 -translate-x-1.5 -translate-y-1.5'
        }`}
      />
    </motion.div>
  )
}
