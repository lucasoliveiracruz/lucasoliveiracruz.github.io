import Home from '../components/Home'
import About from '../components/About'
import Career from '../components/Career'
import Projects from '../components/Projects'
import Contact from '../components/Contact'

export default function Page() {
  return (
    <main className="min-h-screen bg-gray-100">
      <Home />
      <About />
      <Career />
      <Projects />
      <Contact />
    </main>
  )
}

