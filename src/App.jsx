import Stars from './components/Stars'
import SectionTitle from './components/SectionTitle'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <div className="home-container" style={{ width: '100%', maxWidth: '100vw' }}>
      <Stars />

      <div style={{ marginTop: 40 }}>
        <Hero />
      </div>

      <div className="standard-container" style={{ marginTop: 48 }}>
        <SectionTitle>Skills</SectionTitle>
        <Skills />
      </div>

      <div style={{ marginTop: 48 }}>
        <SectionTitle>Projects</SectionTitle>
        <Projects />
      </div>

      <div className="standard-container" style={{ marginTop: 48 }}>
        <SectionTitle>Contact</SectionTitle>
        <Contact />
      </div>

      <Footer />
    </div>
  )
}

export default App
