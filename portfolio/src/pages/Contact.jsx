import React, { useState } from "react";
import avatar from "../assets/avatar.jpeg";
import { RiInstagramLine, RiTwitterLine, RiLinkedinLine } from "react-icons/ri";
import { FaGithub, FaYoutube, FaDiscord } from "react-icons/fa";

export default function ContactHero() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    organization: "",
    services: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div
      id="contact"
      className="bricolage-grotesque-500 min-h-screen bg-black text-white flex justify-center items-center px-6 md:px-10 font-sans"
    >
      <div className="flex flex-col-reverse md:flex-row w-full max-w-6xl mx-auto pt-16 gap-16">
        {/* LEFT SIDE — Heading + Form */}
        <div className="md:w-2/3 w-full flex flex-col items-start text-left">
          {/* Heading with border */}
          <div className="w-full mb-12 pb-4 border-b border-gray-600">
            <h1 className="text-5xl md:text-7xl leading-tight text-gray-100">
              Let's start a<br />project together
            </h1>
          </div>

          {/* FORM */}
          <form className="w-full mb-5">
            {/* 01 Name */}
            <div className="flex items-center mb-6">
              <span className="text-gray-500 font-mono text-lg mr-4">01</span>
              <label className="text-2xl font-light" htmlFor="name">
                What's your name?
              </label>
            </div>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="John Doe *"
              className="bg-transparent border-b-2 border-gray-700 text-lg md:text-xl w-full px-2 py-3 focus:outline-none placeholder-gray-400 text-gray-200 mb-10"
              required
              value={form.name}
              onChange={handleChange}
            />

            {/* 02 Email */}
            <div className="flex items-center mb-6">
              <span className="text-gray-500 font-mono text-lg mr-4">02</span>
              <label className="text-2xl font-light" htmlFor="email">
                What's your email?
              </label>
            </div>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="john@doe.com *"
              className="bg-transparent border-b-2 border-gray-700 text-lg md:text-xl w-full px-2 py-3 focus:outline-none placeholder-gray-400 text-gray-200 mb-10"
              required
              value={form.email}
              onChange={handleChange}
            />

            {/* 03 Organization */}
            <div className="flex items-center mb-6">
              <span className="text-gray-500 font-mono text-lg mr-4">03</span>
              <label className="text-2xl font-light" htmlFor="organization">
                What's the name of your organization?
              </label>
            </div>
            <input
              id="organization"
              name="organization"
              type="text"
              placeholder="Your company name"
              className="bg-transparent border-b-2 border-gray-700 text-lg md:text-xl w-full px-2 py-3 focus:outline-none placeholder-gray-400 text-gray-200 mb-10"
              required
              value={form.organization}
              onChange={handleChange}
            />

            {/* 04 Services */}
            <div className="flex items-center mb-6">
              <span className="text-gray-500 font-mono text-lg mr-4">04</span>
              <label className="text-2xl font-light" htmlFor="services">
                What services are you looking for?
              </label>
            </div>
            <input
              id="services"
              name="services"
              type="text"
              placeholder="Web Design, Web Development ..."
              className="bg-transparent border-b-2 border-gray-700 text-lg md:text-xl w-full px-2 py-3 focus:outline-none placeholder-gray-400 text-gray-200 mb-10"
              required
              value={form.services}
              onChange={handleChange}
            />

            {/* 05 Message */}
            <div className="flex items-center mb-6">
              <span className="text-gray-500 font-mono text-lg mr-4">05</span>
              <label className="text-2xl font-light" htmlFor="message">
                Your message
              </label>
            </div>
            <textarea
              id="message"
              name="message"
              placeholder="Hello Kanishq, can you help me with ... *"
              className="bg-transparent border-b-2 border-gray-700 text-lg md:text-xl w-full px-2 py-3 focus:outline-none placeholder-gray-400 text-gray-200"
              required
              rows={4}
              value={form.message}
              onChange={handleChange}
            />

            <button
              type="submit"
              className="mt-8 border-2 border-gray-700 cursor-pointer font-bold py-3 px-10 rounded transition duration-200 ease-in-out hover:shadow-[0_0_40px_10px_rgba(128,128,128,0.6)] hover:bg-white hover:text-black"
            >
              Send it!
            </button>
          </form>
        </div>

        {/* RIGHT SIDE — Avatar + Contact Info */}
        <div className="md:w-1/3 w-full flex flex-col pt-10 justify-start mb-12 md:mb-0">
          {/* Avatar */}
          <div className="w-36 h-36 rounded-full overflow-hidden bg-gray-700 mb-10 mx-auto md:mx-0">
            <img
              src={avatar}
              alt="Kanishq"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Contact Details */}
          <h3 className="uppercase text-gray-400 text-base font-bold mb-2 tracking-wide text-center md:text-left">
            Contact Details
          </h3>
          <div className="text-center md:text-left">
            <a
              href="mailto:kanishq0309@gmail.com"
              className="block text-xl text-white hover:underline"
            >
              kanishq0309@gmail.com
            </a>
            <a
              href="tel:+91627847430"
              className="block text-xl text-white mt-2 hover:underline"
            >
              +91 7987453645
            </a>
          </div>

          {/* Socials */}
          <h2 className="uppercase text-gray-400 text-base font-bold mt-10 mb-2 tracking-wide text-center md:text-left">
            Socials
          </h2>
          <div className="flex justify-center md:justify-start items-center gap-7 mt-2 text-2xl">
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition"
            >
              <RiLinkedinLine />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition"
            >
              <RiInstagramLine />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition"
            >
              <FaYoutube />
            </a>
            <a
              href="https://discord.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition"
            >
              <FaDiscord />
            </a>
          </div>

          {/* Resume Button */}
          <div className="flex justify-center md:justify-start">
            <a
              href="/resume.pdf"
              download
              className="mt-10 text-2xl border-2 border-gray-700 cursor-pointer p-3 rounded transition duration-100 ease-in-out hover:bg-white hover:text-black"
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
