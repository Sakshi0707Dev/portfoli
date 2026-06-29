import type { Project } from '../types'
import gkkImg from '../assets/gkk.jpeg.png'
import choImg from '../assets/cho.png'

export const projects: Project[] = [
  {
    title: 'Gawande Krushi Kendra',
    description:
      'A modern full-stack e-commerce platform for an agricultural business featuring product browsing, cart management, responsive UI, and a seamless shopping experience.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'JavaScript', 'Tailwind CSS'],
    github: 'https://github.com/Sakshi0707Dev/gawande-krushi-kendra',
    live: 'https://www.gawandekrushikendra.store/',
    image: gkkImg,
    label: 'ECOMMERCE',
    features: [
      'Product browsing with categories',
      'Shopping cart management',
      'Admin dashboard',
      'Responsive design',
      'Secure checkout flow',
    ],
  },
  {
    title: 'Cafe Hide Out',
    description:
      'A modern and responsive restaurant website featuring an elegant landing page, interactive menu showcase, responsive design, and a premium user experience.',
    tech: ['React', 'JavaScript', 'Tailwind CSS', 'Vite', 'Framer Motion'],
    github: 'https://github.com/Sakshi0707Dev/cafe-hide-out',
    live: 'https://cafe-hide-out.vercel.app/',
    image: choImg,
    label: 'RESTAURANT',
    features: [
      'Interactive menu showcase',
      'Elegant landing page',
      'Responsive layout',
      'Smooth animations',
      'Premium UI/UX',
    ],
  },
]
