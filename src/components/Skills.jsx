const CDN = 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons'

const skills = [
  { name: 'React', icon: `${CDN}/react/react-original.svg` },
  { name: 'Node.js', icon: `${CDN}/nodejs/nodejs-original.svg` },
  { name: 'Express', icon: `${CDN}/express/express-original.svg` },
  { name: 'MongoDB', icon: `${CDN}/mongodb/mongodb-original.svg` },
  { name: 'PostgreSQL', icon: `${CDN}/postgresql/postgresql-original.svg` },
  { name: 'MySQL', icon: `${CDN}/mysql/mysql-original.svg` },
  { name: 'Git', icon: `${CDN}/git/git-original.svg` },
  { name: 'TypeScript', icon: `${CDN}/typescript/typescript-original.svg` },
  { name: 'JavaScript', icon: `${CDN}/javascript/javascript-original.svg` },
]

export default function Skills() {
  return (
    <div className="marquee-container">
      <div className="marquee">
        {[...skills, ...skills, ...skills].map((skill, i) => (
          <span key={i} className="skill-pill">
            <span className="skill-icon"><img src={skill.icon} alt={skill.name} width={18} height={18} /></span>
            <span className="skill-name">{skill.name}</span>
          </span>
        ))}
      </div>
    </div>
  )
}
