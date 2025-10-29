import { useEffect, useRef } from "react";
import { useScroll } from "framer-motion";
import Lenis from "@studio-freight/lenis";
import Card from "../components/Card.jsx";
import LocomotiveScroll from 'locomotive-scroll';

const projects = [
  {
    id: 1,
    title: "Matthias Leidinger",
    description:
      "Originally hailing from Austria, Berlin-based photographer Matthias Leindinger is a young creative brimming with talent and ideas.",
    image: "",
    accentColor: "#BBACAF",
  },
  {
    id: 2,
    title: "Clément Chapillon",
    description:
      "This is a story on the border between reality and imaginary, about the contradictory feelings that the insularity of a rocky, arid, and wild territory provokes—so French photographer Clément Chapillon describes his latest highly captivating project.",
    image: "",
    accentColor: "#977F6D",
  },
  {
    id: 3,
    title: "Zissou",
    description:
      "Though he views photography as a medium for storytelling, Zissou's images don't insist on a narrative. Both crisp and ethereal, they're encoded with an ambiguity—a certain tension—that lets the viewer find their own story within them.",
    image: "",
    accentColor: "#C2491D",
  },
  {
    id: 4,
    title: "Urban Perspectives",
    description:
      "Capturing the essence of modern cities through a unique lens. These photographs reveal hidden beauty in everyday moments, transforming ordinary scenes into extraordinary visual experiences.",
    image: "",
    accentColor: "#D97E3A",
  },
];

export default function ProjectsPage() {
    const locomotiveScroll = new LocomotiveScroll();
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  return (
    <main ref={containerRef} id="work" className="relative bg-black flex flex-col items-center min-h-screen">
      {/* Fixed heading */}
      <h1 className="bbh-sans-bartle-regular text-5xl font-bold text-white z-50 m-20">
        MY WORK
      </h1>

      {/* Projects container */}
      <div className="w-full max-w-6xl flex flex-col items-center">
        {projects.map((project, index) => {
          const targetScale = 1 - (projects.length - index) * 0.05;
          return (
            <Card
              key={project.id}
              project={project}
              index={index}
              scrollYProgress={scrollYProgress}
              range={[index * 0.1, 1]}
              targetScale={targetScale}
            />
          );
        })}
      </div>
      <div id="about"></div>
    </main>
  );
}
