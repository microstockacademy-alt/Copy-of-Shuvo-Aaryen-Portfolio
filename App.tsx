import React, { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { Sidebar } from './components/Sidebar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Resume } from './components/Resume';
import { Portfolio } from './components/Portfolio';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { SectionId } from './types';
import { X, Smile, ArrowUp } from 'lucide-react';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<SectionId>('home');
  const [showEndPopup, setShowEndPopup] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const hasTriggeredRef = useRef(false);

  // Handle scroll spy to update active section and detect bottom scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'resume', 'portfolio', 'testimonials', 'contact'];
      
      // Update active section logic
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

      // Detect if scrolled to bottom
      // Check if user is near the bottom (within 50px)
      const scrollPosition = window.innerHeight + window.scrollY;
      const documentHeight = document.documentElement.scrollHeight;
      
      if (!hasTriggeredRef.current && scrollPosition >= documentHeight - 50) {
        hasTriggeredRef.current = true;
        setShowEndPopup(true);
      }

      // Toggle scroll to top button
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
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

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
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
             <p>&copy; 2025 Shuvo Aaryen — All Rights Reserved</p>
             <p className="mt-2">Designed by Shuvo Aaryen</p>
          </footer>
        </main>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={handleScrollToTop}
        className={`fixed bottom-8 right-8 z-40 p-3 bg-yellow-500 text-black rounded-full shadow-[0_0_20px_rgba(234,179,8,0.4)] transition-all duration-500 transform hover:scale-110 hover:-translate-y-1 ${
          showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
        }`}
        aria-label="Scroll to top"
      >
        <ArrowUp size={24} strokeWidth={2.5} />
      </button>

      {/* Yellow Popup on Scroll to Bottom */}
      {showEndPopup && createPortal(
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-300">
          <div className="bg-yellow-500 rounded-2xl p-8 shadow-[0_0_50px_rgba(234,179,8,0.5)] flex flex-col items-center gap-4 max-w-sm w-full relative transform scale-100 animate-in zoom-in-95 duration-300">
            <button 
              onClick={() => setShowEndPopup(false)}
              className="absolute top-4 right-4 text-black/40 hover:text-black transition-colors"
              aria-label="Close"
            >
              <X size={24} />
            </button>
            
            <Smile size={48} className="text-black" strokeWidth={1.5} />
            
            <div className="text-center">
              <h3 className="text-2xl font-bold text-black uppercase tracking-wider mb-2">
                Thanks For Your Patience!
              </h3>
              <p className="text-black/80 font-medium">
                I hope you enjoyed viewing my portfolio.
              </p>
            </div>

            <button 
              onClick={() => setShowEndPopup(false)}
              className="mt-2 px-8 py-2 bg-black text-yellow-500 font-bold rounded-full hover:scale-105 transition-transform"
            >
              CLOSE
            </button>
          </div>
        </div>,
        document.body
      )}
    </div>
  );
};

export default App;