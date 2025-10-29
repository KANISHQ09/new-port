import React, { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  // Smooth scroll to section
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false); // close mobile menu after click
    }
  };

  return (
    <nav className="bricolage-grotesque-500 z-50 text-white absolute p-10 w-full flex justify-between items-center bg-black/70">
      {/* Logo / hover box */}
      <div className="hover-box"></div>

      {/* Desktop Tabs */}
      <div className="hidden md:flex gap-8 tabs">
        <button onClick={() => scrollToSection('work')}>Work</button>
        <button onClick={() => scrollToSection('about')}>About</button>
        <button onClick={() => scrollToSection('contact')}>Contact</button>
      </div>

      {/* Hamburger Menu Icon */}
      <div className="md:hidden cursor-pointer" onClick={toggleMenu}>
        {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
      </div>

      {/* Mobile Menu */}
      <div
        className={`absolute top-full left-0 w-full bg-black flex flex-col items-center gap-6 overflow-hidden transition-all duration-500 ease-in-out md:hidden ${
          isOpen ? 'max-h-96 py-6' : 'max-h-0'
        }`}
      >
        <button onClick={() => scrollToSection('work')} className="hover:animate-shake">Work</button>
        <button onClick={() => scrollToSection('about')} className="hover:animate-shake">About</button>
        <button onClick={() => scrollToSection('contact')} className="hover:animate-shake">Contact</button>
      </div>
    </nav>
  );
};

export default Navbar;
