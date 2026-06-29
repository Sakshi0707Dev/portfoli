const skills = [
  { name: 'React', icon: '⚛' },
  { name: 'Node.js', icon: '🟢' },
  { name: 'Express', icon: '⚡' },
  { name: 'MongoDB', icon: '🍃' },
  { name: 'PostgreSQL', icon: '🐘' },
  { name: 'MySQL', icon: '🐬' },
  { name: 'Git', icon: '🔀' },
  { name: 'TypeScript', icon: '📘' },
  { name: 'JavaScript', icon: '📜' },
]

export default function Skills() {
  return (
    <div className="marquee-container">
      <div className="marquee">
        {[...skills, ...skills, ...skills].map((skill, i) => (
          <span key={i} className="skill-pill">
            <span className="skill-icon">{skill.icon}</span>
            <span className="skill-name">{skill.name}</span>
          </span>
        ))}
      </div>
    </div>
  )
}
