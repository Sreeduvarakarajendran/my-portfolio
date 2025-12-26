import React, { useState } from "react";
import { GoPaperAirplane } from "react-icons/go";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#hero" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  const handleScroll = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
    setIsOpen(false); 
  };

  return (
    <nav className="w-full shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-6 md:px-10">
        <div className="h-16 flex items-center justify-between">

        
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="flex items-center gap-3 text-[#7400b8] font-bold text-2xl hover:opacity-80 transition"
          >
            <GoPaperAirplane className="text-3xl" />
            <span className="hidden sm:block">SreeDev</span>
          </a>

         
          <ul className="hidden md:flex items-center gap-10 text-lg font-semibold text-[#7400b8]">
            {navLinks.map((link) => (
              <li key={link.name}>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    handleScroll(link.href);
                  }}
                  className="hover:text-[#5f0099] transition-colors duration-200"
                >
                  {link.name}
                </button>
              </li>
            ))}
          </ul>

         
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-3xl text-[#7400b8] focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>

       
        {isOpen && (
          <ul className="md:hidden py-6 space-y-4 text-lg font-semibold text-[#7400b8] border-t border-gray-200 bg-white">
            {navLinks.map((link) => (
              <li key={link.name}>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    handleScroll(link.href);
                  }}
                  className="block w-full text-left py-2 hover:text-[#5f0099] transition-colors duration-200"
                >
                  {link.name}
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;