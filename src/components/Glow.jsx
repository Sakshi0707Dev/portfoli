'use client'

import { useMousePosition } from '../hooks/useMousePosition'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export default function Glow() {
  const { x, y } = useMousePosition()
  const gx = useSpring(x, { stiffness: 200, damping: 40 })
  const gy = useSpring(y, { stiffness: 200, damping: 40 })

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-0 hidden md:block"
      style={{ x: gx, y: gy }}
    >
      <div className="w-[600px] h-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/[0.015] blur-[120px]" />
    </motion.div>
  )
}
