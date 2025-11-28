import React, { useState, useEffect } from 'react';
import { Sidebar } from './components/Sidebar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Resume } from './components/Resume';
import { Portfolio } from './components/Portfolio';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { SectionId } from './types';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<SectionId>('home');

  // Handle scroll spy to update active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'resume', 'portfolio', 'testimonials', 'contact'];
      
      // We want to find the section that is currently most visible
      for (const id of sections) {
        const element = document.getElementById(id);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Check if section is approximately in view (top third of screen)
          if (rect.top >= -200 && rect.top <= 400) {
            setActiveSection(id as SectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: SectionId) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen bg-[#0a0a0a] text-white overflow-hidden font-sans selection:bg-yellow-500 selection:text-black">
      
      {/* Background Ambience / Glow Effects */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {/* Large orange/red glow top left */}
        <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-orange-600/20 rounded-full blur-[120px] opacity-40 animate-pulse"></div>
        {/* Yellow glow bottom right */}
        <div className="absolute bottom-[-10%] right-[-10%] w-[40vw] h-[40vw] bg-yellow-600/10 rounded-full blur-[100px] opacity-30"></div>
        {/* Center slight gradient */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.02)_0%,transparent_70%)]"></div>
        
        {/* Grain overlay for texture */}
        <div className="absolute inset-0 opacity-[0.03]" style={{backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")'}}></div>
      </div>

      <div className="flex relative z-10">
        <Sidebar activeSection={activeSection} onNavigate={scrollToSection} />
        
        <main className="flex-1 ml-20 md:ml-64 w-full min-h-screen">
          <Hero />
          <About />
          <Resume />
          <Portfolio />
          <Testimonials />
          <Contact />
          
          <footer className="py-8 text-center text-gray-600 text-sm border-t border-white/5 mx-4 md:mx-12">
             <p>Designed with React, Tailwind & ❤️</p>
          </footer>
        </main>
      </div>
    </div>
  );
};

export default App;