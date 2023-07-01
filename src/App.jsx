import './App.css'
import { useState } from 'react'
import Header from './components/header/Header'
import About from './components/about/About'
import Certificates from './components/certificates/Certificates'
import Contact from './components/contact/Contact'
import HiThere from './components/hi-there/HiThere'
import Projects from './components/projects/Projects'
import HeaderResponsive from './components/header-responsive/HeaderResponsive'

function App() {
  const [isOpenResponsiveMenu, setIsOpenResponsiveMenu] = useState(false)

  const closeResponsiveMenu = () => {
    setIsOpenResponsiveMenu(false)
  }

  return (
    <div className='app'>
      <HeaderResponsive closeResponsiveMenu={closeResponsiveMenu} isOpenResponsiveMenu={isOpenResponsiveMenu} />
      <Header setIsOpenResponsiveMenu={setIsOpenResponsiveMenu} />
      <HiThere />
      <About />
      <Projects />
      <Certificates />
      <Contact />
    </div >
  )
}

export default App