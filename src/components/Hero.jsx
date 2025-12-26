import React from 'react';
import assets from '../assets';

const Hero = () => {
  return (
    <section className="relative min-h-[650px] "> 
      <div className="container mx-auto px-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-center min-h-[650px]">
        
        
        <div className="flex flex-col justify-center space-y-8 py-10 md:py-0 text-center md:text-left">
          <div className="space-y-6">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-white font-playfair">
             Hi, I’m a tech-driven{' '}
              <span className="text-[#7400b8]">Fullstack Developer</span>
            </h1>
            <p className="text-gray-300 text-base sm:text-lg lg:max-w-[500px] mx-auto md:mx-0">
             I deliver high-quality web applications by combining clean development practices with performance-focused and user-centric design. </p>
          </div>

  
          <div className="flex justify-center md:justify-start">
  <a
    href="/resumeSree.pdf"
    target="_blank"
    rel="noopener noreferrer"
    className="px-8 py-4 bg-[#7400b8] text-white font-semibold rounded-lg
               hover:bg-[#5f0099] transition duration-300 shadow-lg
               transform hover:scale-105 inline-block"
  >
    View Resume
  </a>
</div>

        </div>

       
        <div className="flex justify-center items-center">
          <img
            src={assets.hero}
            alt="Gym hero illustration"
            className="w-full max-w-[350px] sm:max-w-[450px] md:max-w-[550px] lg:max-w-[700px] drop-shadow-2xl object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;