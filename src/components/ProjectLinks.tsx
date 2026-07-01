import { ExternalLink } from 'lucide-react'

interface ProjectLinksProps {
  live: string
  github: string
}

export default function ProjectLinks({ live, github }: ProjectLinksProps) {
  return (
    <div className="project-link-icons">
      <a href={live} target="_blank" rel="noopener noreferrer" className="project-btn">
        <ExternalLink size={15} />
        Live
      </a>
      <a href={github} target="_blank" rel="noopener noreferrer" className="project-btn">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" alt="GitHub" width={15} height={15} style={{ filter: 'var(--icon-filter)' }} />
        GitHub
      </a>
    </div>
  )
}
