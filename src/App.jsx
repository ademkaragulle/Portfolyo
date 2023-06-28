import './App.css'
import Header from './components/header/Header'
import About from './components/about/About'
import Certificates from './components/certificates/Certificates'
import Contact from './components/contact/Contact'
import HiThere from './components/hi-there/HiThere'
import Projects from './components/projects/Projects'

function App() {

  return (
    <div className='app'>
      <Header />
      <HiThere />
      <About />
      <Projects />
      <Certificates />
      <Contact />
    </div>
  )
}

export default App
