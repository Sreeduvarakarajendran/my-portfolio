import React from "react";
import { FiGithub, FiLinkedin, FiArrowUpRight } from "react-icons/fi";

const FooterStayConnected = () => {
  return (
    <section className="w-full min-h-screen flex items-center justify-center px-6 py-12">
      <div className="max-w-4xl mx-auto text-center space-y-12">
        {/* Main Heading with Gradient Text */}
        <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold leading-tight">
          <span className="bg-gradient-to-r from-white via-purple-300 to-purple-500 bg-clip-text text-transparent">
            Let's stay
          </span>
          <br />
          <span className="bg-gradient-to-r from-white via-purple-400 to-purple-600 bg-clip-text text-transparent">
            connected.
          </span>
        </h1>

        {/* Subtext */}
        <p className="text-gray-400 text-lg sm:text-xl md:text-2xl">
          Hope to see you later!
        </p>

       
        <div className="my-16">
          <div className="inline-block p-6 rounded-full bg-gradient-to-r from-teal-400 to-cyan-400 blur-xl opacity-50"></div>
          <div className="relative -mt-16">
            <div className="text-6xl animate-pulse">✦</div> 
          </div>
        </div>

        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          
          <a
            href="#hero" // Change to your portfolio/home link
            className="px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white font-medium text-lg hover:bg-white/20 hover:border-white/40 transition-all duration-300 flex items-center gap-3"
          >
            Work
            <FiArrowUpRight className="text-xl" />
          </a>

          {/* LinkedIn Button */}
          <a
            href="https://www.linkedin.com/in/sreeduvaraka-rajendran-b78356375" // Replace with your LinkedIn
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white font-medium text-lg hover:bg-white/20 hover:border-white/40 transition-all duration-300 flex items-center gap-3"
          >
            <FiLinkedin className="text-xl" />
            LinkedIn
          </a>

          <a
            href="https://github.com/Sreeduvarakarajendran/sreeduvarakarajendran.git" 
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white font-medium text-lg hover:bg-white/20 hover:border-white/40 transition-all duration-300 flex items-center gap-3"
          >
            <FiGithub className="text-xl" />
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default FooterStayConnected;