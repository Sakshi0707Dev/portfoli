import { Moon, Sun } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className="w-7 h-7 rounded-full flex items-center justify-center cursor-pointer border-none transition-all duration-300"
      style={{
        background: 'var(--bg-surface)',
        border: '1px solid var(--border-subtle)',
        boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
      }}
    >
      {theme === 'dark' ? (
        <Sun size={13} style={{ color: 'var(--text-zinc-400)' }} />
      ) : (
        <Moon size={13} style={{ color: 'var(--text-zinc-400)' }} />
      )}
    </button>
  )
}
