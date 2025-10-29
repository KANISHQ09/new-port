import Spline from "@splinetool/react-spline";
import Navbar from "../components/navbar.jsx";
import "remixicon/fonts/remixicon.css";
import React, { useEffect, useRef, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';

const marqueeText = " - Kanishq";
const texts = Array(10).fill(marqueeText).join('');

const Home = () => {
    const controls = useAnimation();
    const lastScrollY = useRef(window.scrollY);
    const [direction, setDirection] = useState("left");

    useEffect(() => {
        const handleScroll = () => {
            const currentY = window.scrollY;
            if (currentY > lastScrollY.current) {
                setDirection("left");
            } else if (currentY < lastScrollY.current) {
                setDirection("right");
            }
            lastScrollY.current = currentY;
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        // Animate marquee depending on direction
        if (direction === "left") {
            controls.start({
                x: ['0%', '-50%'],
                transition: {
                    duration: 35,
                    repeat: Infinity,
                    ease: "linear"
                }
            });
        } else {
            controls.start({
                x: ['-50%', '0%'],
                transition: {
                    duration: 35,
                    repeat: Infinity,
                    ease: "linear"
                }
            });
        }
    }, [direction, controls]);

    return (
        <>
            <Navbar />
            <div className='bg-black text-white h-screen relative'>
                <Spline scene="https://prod.spline.design/1kF6rYZTE4QlcmJi/scene.splinecode" />
                <div className='location flex absolute top-1/2 pl-10 pr-5 py-5 gap-5 bg-white rounded-r-full'>
                    <h3 className="bricolage-grotesque-500 text-black text-base leading-tight">
                        Located <br /> in <br /> India
                    </h3>

                    {/* Rotating Globe */}
                    <div className="bg-gray-900 rotate-45 h-15 w-15 rounded-full text-3xl flex justify-center items-center">
                        <i className="ri-global-line text-white animate-spin-slow -rotate-45"></i>
                    </div>
                </div>
                <div className='free flex flex-col absolute top-[45%] right-10 gap-5'>
                    <i className="ri-arrow-right-down-line text-3xl"></i>
                    <h2 className="bricolage-grotesque-500 text-4xl font-light leading-snug">
                        Freelance
                        <br />
                        Designer & Developer
                    </h2>
                </div>
                <div className="name absolute top-[60%] mt-14 text-white overflow-hidden w-full">
                    <motion.div
                        className="flex whitespace-nowrap"
                        animate={controls}
                        style={{ display: 'inline-block' }}
                    >
                        <h1 className="bbh-sans-bartle-regular text-[10vw] tracking-tight whitespace-nowrap">
                            {texts}
                        </h1>
                    </motion.div>
                </div>
            </div >
        </>
    )
}

export default Home
