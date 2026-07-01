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
        <a href="mailto:sakshi.gaikwad@email.com" className="contact-link-btn">
          <svg className="contact-link-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="4" width="20" height="16" rx="2" />
            <path d="M22 4L12 13 2 4" />
          </svg>
          Email
        </a>
        <a href="https://github.com/Sakshi0707Dev" target="_blank" rel="noopener noreferrer" className="contact-link-btn">
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
