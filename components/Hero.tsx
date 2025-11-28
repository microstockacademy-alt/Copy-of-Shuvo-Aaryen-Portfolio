import React from 'react';
import { SectionContainer } from './SectionContainer';
import { ArrowRight, Camera, PenTool, Monitor } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <SectionContainer id="home" className="flex items-center">
      <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16 w-full h-full justify-between">
        
        {/* Text Column */}
        <div className="flex-1 text-center lg:text-left z-10">
          <div className="inline-block px-4 py-1 mb-6 border border-yellow-500/30 rounded-full bg-yellow-500/10 backdrop-blur-sm">
            <span className="text-yellow-500 text-sm font-semibold tracking-widest uppercase">Available for work</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
            MY NAME IS <br />
            <span className="text-yellow-500 drop-shadow-[0_0_15px_rgba(234,179,8,0.3)]">SHUVO AARYEN</span>
          </h1>
          
          <h2 className="text-xl md:text-2xl text-gray-300 font-light tracking-wide mb-8 flex items-center justify-center lg:justify-start gap-3">
             <PenTool size={20} className="text-yellow-500" />
             GRAPHIC DESIGNER 
             <span className="text-gray-600">/</span>
             <Camera size={20} className="text-yellow-500" />
             PHOTOGRAPHER
          </h2>
          
          <p className="text-gray-400 text-lg leading-relaxed max-w-lg mx-auto lg:mx-0 mb-10">
            I craft clean, modern designs and capture moments that tell a story. With over 15 years of experience, I bring a unique blend of technical skill and creative vision to every project.
          </p>
          
          <a href="#about" className="group relative inline-flex items-center justify-center px-8 py-4 bg-yellow-500 text-black font-bold text-sm tracking-widest uppercase rounded-full overflow-hidden transition-transform hover:scale-105 hover:shadow-[0_0_20px_rgba(234,179,8,0.4)]">
            <span className="relative z-10 mr-2">More About Me</span>
            <ArrowRight size={18} className="relative z-10 transition-transform group-hover:translate-x-1" />
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
          </a>
        </div>

        {/* Image Column */}
        <div className="flex-1 relative w-full max-w-md lg:max-w-full">
          <div className="relative rounded-2xl overflow-hidden aspect-[4/5] border border-white/10 shadow-2xl group">
             {/* Image Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10"></div>
            
            <img 
              src="https://i.postimg.cc/q724Fz3Y/1745486993760.jpg" 
              alt="Shuvo Aaryen Portrait" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            
            {/* Floating badge */}
            <div className="absolute bottom-6 left-6 z-20 flex gap-4">
              <div className="w-12 h-12 bg-black/50 backdrop-blur-md rounded-full flex items-center justify-center border border-white/10 text-yellow-500">
                <Monitor size={24} />
              </div>
              <div className="w-12 h-12 bg-black/50 backdrop-blur-md rounded-full flex items-center justify-center border border-white/10 text-yellow-500">
                <Camera size={24} />
              </div>
            </div>
          </div>
          
          {/* Decorative Elements behind image */}
          <div className="absolute -z-10 top-10 -right-10 w-full h-full border-2 border-yellow-500/20 rounded-2xl hidden lg:block"></div>
        </div>
        
      </div>
    </SectionContainer>
  );
};