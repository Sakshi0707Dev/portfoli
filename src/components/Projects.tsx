import { ArrowUpRight } from 'lucide-react'
import { projects } from '../data/projects'
import ProjectCard from './ProjectCard'

export default function Projects() {
  return (
    <div className="project-section">
      {projects.map((project) => (
        <ProjectCard key={project.title} project={project} />
      ))}
      <div className="view-all-projects right-side">
        <a
          href="https://github.com/SakshiGaikwad05"
          target="_blank"
          rel="noopener noreferrer"
          className="view-all-btn"
        >
          View All Projects
          <ArrowUpRight size={16} className="arrow-icon" />
        </a>
      </div>
    </div>
  )
}
