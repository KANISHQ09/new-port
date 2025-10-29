import React from 'react'
import Splash from './components/nurui/splash-cursor.jsx'
import Home from './pages/Home'
import ProjectsPage from './pages/Project.jsx'
import AboutMe from './pages/About.jsx'
import Testimonial from './pages/Testimonial.jsx'
import Contact from './pages/Contact.jsx'
import Foot from './components/footer.jsx'
import LocomotiveScroll from 'locomotive-scroll';
import Footer from './components/footer.jsx'

const App = () => {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <div>
      <Splash />
      <Home />
      <ProjectsPage />
      <AboutMe />
      <Testimonial />
      <Contact />
      <Foot />
    </div>
  )
}

export default App
