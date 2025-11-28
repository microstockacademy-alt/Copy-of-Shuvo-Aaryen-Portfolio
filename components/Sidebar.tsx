import React from 'react';
import { Home, User, FileText, Grid, MessageSquare, Mail } from 'lucide-react';
import { NavItem, SectionId } from '../types';

interface SidebarProps {
  activeSection: SectionId;
  onNavigate: (id: SectionId) => void;
}

const navItems: NavItem[] = [
  { id: 'home', label: 'HOME', icon: <Home size={20} /> },
  { id: 'about', label: 'ABOUT ME', icon: <User size={20} /> },
  { id: 'resume', label: 'RESUME', icon: <FileText size={20} /> },
  { id: 'portfolio', label: 'PORTFOLIO', icon: <Grid size={20} /> },
  { id: 'testimonials', label: 'TESTIMONIALS', icon: <MessageSquare size={20} /> },
  { id: 'contact', label: 'CONTACT', icon: <Mail size={20} /> },
];

export const Sidebar: React.FC<SidebarProps> = ({ activeSection, onNavigate }) => {
  return (
    <aside className="fixed left-0 top-0 h-full w-20 md:w-64 z-50 bg-black/60 backdrop-blur-md border-r border-white/10 flex flex-col justify-between py-8 transition-all duration-300">
      
      {/* Brand / Logo Area */}
      <div className="px-4 md:px-8 mb-8 text-center md:text-left">
        <div className="w-10 h-10 md:w-12 md:h-12 bg-yellow-500 rounded-full flex items-center justify-center font-bold text-black text-xl mb-2 mx-auto md:mx-0">
          SA
        </div>
        <h1 className="hidden md:block text-xl font-bold tracking-wider">AARYEN</h1>
        <p className="hidden md:block text-xs text-gray-400 mt-1">Portfolio</p>
      </div>

      {/* Navigation Links */}
      <nav className="flex-1 flex flex-col justify-center w-full">
        <ul className="space-y-2">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <li key={item.id} className="relative group">
                <button
                  onClick={() => onNavigate(item.id)}
                  className={`w-full flex items-center px-4 md:px-8 py-3 transition-all duration-300 group-hover:bg-white/5
                    ${isActive ? 'text-yellow-500' : 'text-gray-400 hover:text-white'}`}
                >
                  <span className={`mr-0 md:mr-4 ${isActive ? 'scale-110' : 'scale-100'} transition-transform`}>
                    {item.icon}
                  </span>
                  <span className="hidden md:block text-sm font-medium tracking-wide">
                    {item.label}
                  </span>
                  
                  {/* Active Indicator Line */}
                  {isActive && (
                    <span className="absolute left-0 top-0 bottom-0 w-1 bg-yellow-500 shadow-[0_0_10px_rgba(234,179,8,0.5)]"></span>
                  )}
                </button>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Footer / Social Placeholder */}
      <div className="px-4 md:px-8 text-center md:text-left">
        <p className="hidden md:block text-[10px] text-gray-600 uppercase tracking-widest">
          &copy; 2024 Shuvo Aaryen
        </p>
      </div>
    </aside>
  );
};