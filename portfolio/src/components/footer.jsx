import React from "react";

const Footer = () => {
  return (
    <footer className="bricolage-grotesque-500 bg-white text-black p-4 sm:p-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center max-w-7xl mx-auto space-y-4 sm:space-y-0">
        {/* Version Section */}
        <div className="flex flex-col">
          <span className="text-[10px] sm:text-xs uppercase tracking-wider text-gray-500 font-medium mb-1">
            VERSION
          </span>
          <span className="text-sm sm:text-lg font-semibold">
            2025 ©Edition
          </span>
        </div>

        {/* Socials Section */}
        <div className="flex flex-col">
          <span className="text-[10px] sm:text-xs uppercase tracking-wider text-gray-500 font-medium mb-2">
            SOCIALS
          </span>
          <div className="flex flex-wrap gap-2 sm:space-x-4 text-[12px] sm:text-base font-medium">
            <a href="#" className="footer-link">LinkedIn</a>
            <a href="#" className="footer-link">GitHub</a>
            <a href="#" className="footer-link">Instagram</a>
            <a href="#" className="footer-link">YouTube</a>
            <a href="#" className="footer-link">Discord</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
