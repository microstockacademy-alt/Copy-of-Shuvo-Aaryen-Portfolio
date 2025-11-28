import React from 'react';
import { SectionContainer } from './SectionContainer';
import { Camera, Palette, Globe, Layers } from 'lucide-react';

const stats = [
  { value: '15+', label: 'Years Experience' },
  { value: '350+', label: 'Completed Projects' },
  { value: '45K', label: 'Followers' },
];

const services = [
  { icon: <Palette className="text-yellow-500" size={24} />, title: 'Brand Identity', desc: 'Logo, Color Palette, Typography' },
  { icon: <Globe className="text-yellow-500" size={24} />, title: 'Web Design', desc: 'UI/UX, Responsive, Interactive' },
  { icon: <Camera className="text-yellow-500" size={24} />, title: 'Photography', desc: 'Portrait, Product, Lifestyle' },
  { icon: <Layers className="text-yellow-500" size={24} />, title: 'Art Direction', desc: 'Concept, Strategy, Supervision' },
];

export const About: React.FC = () => {
  return (
    <SectionContainer id="about" title="ABOUT ME">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        
        {/* Left Column: Bio & Stats */}
        <div className="space-y-8">
          <div>
            <h3 className="text-2xl font-semibold text-white mb-4">
              I'm <span className="text-yellow-500">Shuvo Aaryen</span>, Graphic Designer & Photographer
            </h3>
            <p className="text-gray-400 leading-relaxed">
              I have a passion for creating clean, modern, and minimal designs that communicate a strong visual message. 
              My journey began over a decade ago, transitioning from traditional art to digital media. 
              I believe in the power of visual storytelling to elevate brands and connect with audiences on a deeper level.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-4">
            {stats.map((stat, index) => (
              <div key={index} className="p-4 rounded-xl bg-black/40 border border-white/5 backdrop-blur-sm text-center hover:border-yellow-500/30 transition-colors">
                <div className="text-2xl md:text-3xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-xs text-yellow-500 uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
          
          <div className="p-6 bg-yellow-500/10 rounded-xl border border-yellow-500/20">
            <p className="italic text-gray-300 border-l-4 border-yellow-500 pl-4">
              "Design is not just what it looks like and feels like. Design is how it works."
            </p>
          </div>
        </div>

        {/* Right Column: Services */}
        <div>
          <h4 className="text-xl font-bold text-white mb-6 uppercase tracking-wider">What I Do?</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {services.map((service, index) => (
              <div key={index} className="group p-6 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-yellow-500/30 transition-all duration-300">
                <div className="mb-4 p-3 bg-black/40 w-fit rounded-lg group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h5 className="text-lg font-bold text-white mb-2">{service.title}</h5>
                <p className="text-sm text-gray-400">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </SectionContainer>
  );
};