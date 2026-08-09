import resume from '../assets/Sakshi_Gaikwad_Resume.pdf'

const CDN = 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons'

export default function Contact() {
  return (
    <div className="contact-me-card">
      <h3 className="contact-me-title">Get in Touch</h3>
      <p className="contact-me-description">
        I'm always open to new opportunities, collaborations, and interesting projects.
        Feel free to reach out!
      </p>
      <div className="contact-links">
        <a href={resume} target="_blank" rel="noopener noreferrer" className="contact-link-btn">
          <svg className="contact-link-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
            <polyline points="14 2 14 8 20 8" />
            <line x1="16" y1="13" x2="8" y2="13" />
            <line x1="16" y1="17" x2="8" y2="17" />
          </svg>
          Resume
        </a>
        <a href="mailto:sakshi.gaikwad@email.com" className="contact-link-btn">
          <svg className="contact-link-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="4" width="20" height="16" rx="2" />
            <path d="M22 4L12 13 2 4" />
          </svg>
          Email
        </a>
        <a href="https://github.com/SakshiGaikwad05" target="_blank" rel="noopener noreferrer" className="contact-link-btn">
          <img src={`${CDN}/github/github-original.svg`} alt="GitHub" width={16} height={16} style={{ filter: 'var(--icon-filter)' }} />
          GitHub
        </a>
        <a href="https://www.linkedin.com/in/sakshi-gaikwad-1606s2005" target="_blank" rel="noopener noreferrer" className="contact-link-btn">
          <img src={`${CDN}/linkedin/linkedin-original.svg`} alt="LinkedIn" width={16} height={16} style={{ filter: 'var(--icon-filter)' }} />
          LinkedIn
        </a>
      </div>
    </div>
  )
}
