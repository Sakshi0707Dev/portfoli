const experiences = [
  {
    role: 'Full Stack Developer Intern',
    company: 'Tech Company',
    duration: 'Jan 2025 - Present',
    type: 'present',
    logo: '💼',
    bullets: [
      'Built and maintained RESTful APIs using Java Spring Boot',
      'Developed responsive UI components with React',
      'Collaborated with cross-functional teams on feature delivery',
    ],
  },
  {
    role: 'Web Development Intern',
    company: 'Digital Agency',
    duration: 'Jun 2024 - Dec 2024',
    type: 'past',
    logo: '🌐',
    bullets: [
      'Created dynamic web applications using the MERN stack',
      'Implemented authentication and authorization flows',
      'Optimized database queries for improved performance',
    ],
  },
]

export default function Experience() {
  return (
    <div className="exp-timeline-container">
      <div className="exp-timeline-line" />
      {experiences.map((exp, i) => (
        <div key={i} className="exp-timeline-item">
          <div className={`exp-timeline-dot ${exp.type}`} />
          <div className="exp-card">
            <div className="exp-header">
              <div className="exp-header-left">
                <div className="exp-logo">{exp.logo}</div>
                <div className="exp-company-info">
                  <div className="exp-company-row">
                    <span className="exp-company-name">{exp.company}</span>
                  </div>
                  <div className="exp-role-text">{exp.role}</div>
                </div>
              </div>
              <div className="exp-header-right">
                <div className={`exp-status-badge ${exp.type}`}>
                  <span className={`exp-status-dot ${exp.type}`}>●</span>
                  <span>{exp.type === 'present' ? 'Present' : 'Past'}</span>
                </div>
                <div className="exp-meta">{exp.duration}</div>
              </div>
            </div>
            <div className="exp-details">
              <ul className="exp-bullets">
                {exp.bullets.map((b, j) => (
                  <li key={j}>{b}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
