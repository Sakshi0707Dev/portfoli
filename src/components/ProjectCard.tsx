import { motion } from 'framer-motion'
import { AlertTriangle, Monitor, Lock } from 'lucide-react'
import type { Project } from '../types'
import BrowserMockup from './BrowserMockup'
import TechBadge from './TechBadge'
import ProjectLinks from './ProjectLinks'

interface ProjectCardProps {
  project: Project
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.div
      className="project-card"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -4 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
    >
      <BrowserMockup src={project.image} alt={`Screenshot of ${project.title}`} />

      <div className="project-details">
        {project.label && (
          <span className="project-label">{project.label}</span>
        )}

        <div className="project-header-row">
          <h3 className="project-title">{project.title}</h3>
          <ProjectLinks live={project.live} github={project.github} />
        </div>

        {(project.demoWarning || project.isUnderDevelopment || project.isPrivate) && (
          <div className="project-warnings">
            {project.demoWarning && (
              <div className="demo-warning-container yellow">
                <AlertTriangle size={14} />
                <div className="demo-warning-tooltip">
                  <p>Live demo might not work properly</p>
                  <p>Check GitHub for code and setup instructions</p>
                </div>
              </div>
            )}
            {project.isUnderDevelopment && (
              <div className="demo-warning-container green">
                <Monitor size={14} />
                <div className="demo-warning-tooltip">
                  <p>Functionality might not work properly</p>
                  <p>Currently Building This Project, So its Under Development</p>
                </div>
              </div>
            )}
            {project.isPrivate && (
              <div className="demo-warning-container green">
                <Lock size={14} />
                <div className="demo-warning-tooltip">
                  <p>This is a private Project</p>
                  <p>Github Repo/ Code is not available for this project</p>
                </div>
              </div>
            )}
          </div>
        )}

        <p className="project-desc">{project.description}</p>

        {project.features && project.features.length > 0 && (
          <ul className="project-features">
            {project.features.map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>
        )}

        <div className="project-tech">
          {project.tech.map((tech) => (
            <TechBadge key={tech} label={tech} />
          ))}
        </div>
      </div>
    </motion.div>
  )
}
