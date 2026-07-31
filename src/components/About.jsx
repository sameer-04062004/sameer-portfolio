import React from 'react';
import stackImage from '../assets/about/sameer-avatar.png';
import { aboutContent } from '../data/portfolioData';

// Tech stack SVG icons rendered inline for crisp rendering
const PythonIcon = () => (
  <div className="flex flex-col items-center gap-2">
    <svg className="w-16 h-16 md:w-20 md:h-20" viewBox="0 0 128 128">
      <path fill="#3776AB" d="M63.4 0c-5.4 0-10.5.5-15 1.3-13.3 2.4-15.7 7.3-15.7 16.4v12h31v4H23.1c-9.2 0-17.2 5.5-19.7 16-2.9 12 -3 19.6 0 32.2 2.2 9.3 7.6 16 16.8 16h10.9V83.5c0-10.5 9.1-19.7 19.7-19.7h31c8.8 0 15.9-7.2 15.9-16V17.7c0-8.5-7.2-15-15.9-16.4C77.5.5 70.4 0 63.4 0z"/>
      <path fill="#FFD43B" d="M64.6 128c5.4 0 10.5-.5 15-1.3 13.3-2.4 15.7-7.3 15.7-16.4v-12h-31v-4h56.6c9.2 0 17.2-5.5 19.7-16 2.9-12 3-19.6 0-32.2-2.2-9.3-7.6-16-16.8-16h-10.9v16.6c0 10.5-9.1 19.7-19.7 19.7h-31c-8.8 0-15.9 7.2-15.9 16v26.9c0 8.5 7.2 15 15.9 16.4 4.9.8 12 1.3 18.4 1.3z" transform="translate(-14 -14)"/>
    </svg>
    <span className="text-xs font-bold text-white/70 uppercase tracking-wider">Python</span>
  </div>
);

const TensorFlowIcon = () => (
  <div className="flex flex-col items-center gap-2">
    <svg className="w-16 h-16 md:w-20 md:h-20" viewBox="0 0 128 128">
      <path fill="#FF6F00" d="M63.7 0L11 30v67.9l16.9 9.8V40l35.8-20.7z"/>
      <path fill="#FF6F00" d="M63.7 0v19.3L99.5 40v57.7l-19.9 11.5V40h-16v78.6l16.9 9.8 35.8-20.7V30z" opacity="0.7"/>
      <path fill="#FF6F00" d="M47.7 30.3v67.9l16 9.2V21.1z" opacity="0.9"/>
    </svg>
    <span className="text-xs font-bold text-white/70 uppercase tracking-wider">TensorFlow</span>
  </div>
);

const PyTorchIcon = () => (
  <div className="flex flex-col items-center gap-2">
    <svg className="w-16 h-16 md:w-20 md:h-20" viewBox="0 0 128 128">
      <path fill="#EE4C2C" d="M89.6 34.7l-6.5 6.5c10.6 10.6 10.6 27.7 0 38.3-10.6 10.6-27.7 10.6-38.3 0-10.6-10.6-10.6-27.7 0-38.3l19.7-19.7 2.4-2.4V0L44.2 22.7C29.5 37.4 29.5 61.2 44.2 75.9c14.7 14.7 38.5 14.7 53.2 0 14.7-14.7 14.7-38.5 0-53.2z"/>
      <circle fill="#EE4C2C" cx="83.5" cy="22.5" r="6"/>
    </svg>
    <span className="text-xs font-bold text-white/70 uppercase tracking-wider">PyTorch</span>
  </div>
);

const About = () => {
  return (
    <section id="about" className="bg-[#ff2a2a] pt-20 pb-40 px-6 md:px-12 w-full relative overflow-hidden font-sans">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-16 items-start">
        
        {/* Left Side: ID Badge and Skills */}
        <div className="flex flex-col items-center w-full md:w-[350px] shrink-0 mt-12 md:mt-0">
          
          <div data-aos="drop-bounce" className="relative flex justify-center w-full">
            {/* Lanyard string */}
            <div className="absolute -top-32 left-1/2 w-3 h-40 bg-black transform -translate-x-1/2 shadow-inner z-0"></div>
            {/* Lanyard clip */}
            <div className="absolute -top-6 left-1/2 w-6 h-12 bg-gray-300 rounded border border-gray-400 transform -translate-x-1/2 z-10 shadow-[0_2px_10px_rgba(0,0,0,0.3)]"></div>
            
            {/* Badge Card */}
            <div className="bg-gray-900 w-full max-w-[280px] rounded-2xl p-3 shadow-[0_20px_40px_rgba(0,0,0,0.4)] relative z-20 transform -rotate-3 hover:rotate-0 transition-transform duration-500">
              {/* Cutout Hole */}
              <div className="absolute -top-3 left-1/2 w-16 h-6 bg-gray-900 rounded-t-xl transform -translate-x-1/2 flex justify-center items-center">
                <div className="w-8 h-2 bg-black/30 rounded-full shadow-inner"></div>
              </div>
              {/* Image Container */}
              <div className="w-full aspect-[3/4] overflow-hidden rounded-xl bg-gray-800 border-2 border-transparent">
                <img 
                  src={stackImage} 
                  alt="Muhammad Sameer — AI & Machine Learning Engineer" 
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>
          </div>

        </div>

        {/* Right Side: Info Content */}
        <div data-aos="fade-left" data-aos-delay="200" className="flex-1 text-white mt-8 md:mt-0 relative z-20">
          
          <h2 className="text-4xl md:text-5xl font-black text-black mb-4">{aboutContent.heading}</h2>
          <p 
            className="text-lg font-bold mb-12 leading-relaxed max-w-3xl text-red-50"
            dangerouslySetInnerHTML={{ __html: aboutContent.bio }}
          />

          {/* Horizontal Skills Row */}
          <div className="flex items-center gap-10 mt-8">
            <div data-aos="zoom-in" data-aos-delay="300" className="hover:scale-110 transition-transform duration-300 cursor-pointer drop-shadow-2xl">
              <PythonIcon />
            </div>
            <div data-aos="zoom-in" data-aos-delay="450" className="hover:scale-110 transition-transform duration-300 cursor-pointer drop-shadow-2xl">
              <TensorFlowIcon />
            </div>
            <div data-aos="zoom-in" data-aos-delay="600" className="hover:scale-110 transition-transform duration-300 cursor-pointer drop-shadow-2xl">
              <PyTorchIcon />
            </div>
          </div>

        </div>
      </div>

      {/* Torn paper divider at bottom */}
      <div className="absolute bottom-0 left-0 w-full pointer-events-none z-30 transform translate-y-1">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-12 md:h-20 fill-white">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.62,189.5,99.8,242.79,81.82,282.88,63.6,321.39,56.44Z"></path>
        </svg>
      </div>

      {/* Decorative stars */}
      <div className="absolute top-10 right-10 md:right-20 text-black opacity-30 animate-pulse">
        <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0l2.5 8.5L23 12l-8.5 2.5L12 23l-2.5-8.5L1 12l8.5-2.5z"/></svg>
      </div>
      <div className="absolute bottom-32 left-4 md:left-20 text-black opacity-30 animate-pulse" style={{ animationDelay: '1s' }}>
        <svg className="w-20 h-20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0l2.5 8.5L23 12l-8.5 2.5L12 23l-2.5-8.5L1 12l8.5-2.5z"/></svg>
      </div>
    </section>
  );
};

export default About;
