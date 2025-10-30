import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import avatar from "../assets/avatar.jpeg";

gsap.registerPlugin(ScrollTrigger);

const AboutMe = () => {
    const aboutRef = useRef(null);

    useEffect(() => {
        const element = aboutRef.current;

        gsap.fromTo(
            element,
            { scale: 0.2, opacity: 0 },
            {
                scale: 1,
                opacity: 1,
                duration: 1,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: element,
                    start: "top bottom",
                    end: "bottom bottom",
                    scrub: true,
                    toggleActions: "play reverse play reverse",
                },
            }
        );
    }, []);

    return (
        <section
            ref={aboutRef}
            className="min-h-screen flex justify-center items-center bg-white text-black px-4 sm:px-8 py-16"
        >
            <div className="max-w-6xl flex flex-col md:flex-row items-center gap-10 bg-white p-6 md:p-10 border-t-4 border-gray-300 shadow-lg rounded-2xl">
                {/* Left side image */}
                <div className="w-full md:w-1/2 flex justify-center">
                    <img
                        src={avatar}
                        alt="About Illustration"
                        className="w-full max-w-[400px] rounded-2xl shadow-md object-cover"
                    />
                </div>

                {/* Right side text */}
                <div className="w-full md:w-1/2 text-gray-800 space-y-4 text-center md:text-left">
                    <h2 className="bbh-sans-bartle-regular text-3xl sm:text-4xl font-semibold">
                        Who We Are
                    </h2>
                    <p className="text-base sm:text-lg leading-relaxed">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                        volutpat est ut dui aliquet, quis tristique lectus mattis. Sed nec
                        magna vel orci feugiat blandit. Praesent laoreet justo in mauris
                        congue, in fringilla ligula tincidunt.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;
