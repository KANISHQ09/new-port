import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect } from "react";
import LocomotiveScroll from "locomotive-scroll";

const Index = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO at TechCorp",
      content:
        "This product completely transformed how we handle our workflow. The team's productivity increased by 300% in just two months!",
      avatar: "SJ",
    },
    {
      name: "Michael Chen",
      role: "Product Manager",
      content:
        "I've tried countless solutions, but nothing comes close to this. The intuitive design and powerful features are unmatched.",
      avatar: "MC",
    },
    {
      name: "Emily Rodriguez",
      role: "Designer at Creative Co",
      content:
        "As a designer, I appreciate beautiful interfaces. This exceeds all expectations. It's both stunning and incredibly functional.",
      avatar: "ER",
    },
    {
      name: "David Kim",
      role: "CTO at StartupXYZ",
      content:
        "The integration process was seamless. We were up and running in minutes. Our entire team loves using it every day.",
      avatar: "DK",
    },
    {
      name: "Jessica Martinez",
      role: "Marketing Director",
      content:
        "Finally, a tool that actually delivers on its promises! The ROI has been phenomenal and customer support is outstanding.",
      avatar: "JM",
    },
    {
      name: "Thomas Anderson",
      role: "Founder at InnovateLab",
      content:
        "Game-changing doesn't even begin to describe it. This has become an essential part of our daily operations.",
      avatar: "TA",
    },
  ];

  const scrollContainer = useRef(null);
  const scrollRef = useRef(null);

  // Initialize Locomotive Scroll (desktop only)
  useEffect(() => {
    if (window.innerWidth > 768) {
      const scroll = new LocomotiveScroll({
        el: scrollContainer.current,
        smooth: true,
        smartphone: { smooth: true },
        tablet: { smooth: true },
        lerp: 0.08,
      });
      return () => scroll.destroy();
    }
  }, []);

  // Framer Motion Scroll Tracking
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start end", "end start"],
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);

  return (
    <div ref={scrollContainer} data-scroll-container>
      <div
        ref={scrollRef}
        data-scroll-section
        className="testi mt-10"
      >
        <h2 className="bbh-sans-bartle-regular text-4xl text-center text-white mb-12">
          What People Say
        </h2>

        {/* Desktop: Animated horizontal scroll */}
        <div className="hidden md:block relative overflow-hidden py-10 text-white">
          <motion.div style={{ x }} className="flex gap-8 px-8">
            {[...testimonials, ...testimonials].map((t, i) => (
              <motion.div
                key={i}
                className="min-w-[300px] max-w-[360px] bg-card border border-border rounded-2xl p-8"
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              >
                <p className="text-foreground mb-6 text-lg leading-relaxed">
                  “{t.content}”
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full from-primary to-accent flex items-center justify-center text-white font-bold text-lg shadow-glow">
                    {t.avatar}
                  </div>
                  <div>
                    <h3 className="font-semibold">{t.name}</h3>
                    <p className="text-sm">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Mobile/Tablet: Grid layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:hidden text-white">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="w-full bg-card border border-border rounded-2xl p-6 shadow-lg
              hover:shadow-[0_0_60px_rgba(167,139,250,0.6)] hover:border-primary/50 transition-all duration-200"
            >
              <p className="text-foreground mb-4 text-base leading-relaxed">
                “{t.content}”
              </p>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full from-primary to-accent flex items-center justify-center text-white font-bold text-sm shadow-glow">
                  {t.avatar}
                </div>
                <div>
                  <h3 className="font-semibold">{t.name}</h3>
                  <p className="text-sm">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;
