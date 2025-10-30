import React, { useEffect } from "react";
import Splash from "./components/nurui/splash-cursor.jsx";
import Home from "./pages/Home";
import ProjectsPage from "./pages/Project.jsx";
import AboutMe from "./pages/about.jsx";
import Testimonial from "./pages/Testimonial.jsx";
import Contact from "./pages/Contact.jsx";
import Foot from "./components/footer.jsx";
import Lenis from "lenis";
import "lenis/dist/lenis.css";

const App = () => {
  useEffect(() => {
    // Initialize Lenis
    const lenis = new Lenis({
      duration: 1.2, // adjust scroll smoothness
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
    });

    // Update loop
    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);

    // Optional: handle scroll events
    lenis.on("scroll", (e) => {
      // console.log(e)
    });

    // Cleanup on unmount
    return () => {
      lenis.destroy();
    };
  }, []);

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
  );
};

export default App;
