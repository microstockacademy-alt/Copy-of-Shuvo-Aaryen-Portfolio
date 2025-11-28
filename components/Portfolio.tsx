import React, { useState, useEffect } from 'react';
import { SectionContainer } from './SectionContainer';
import { Project } from '../types';
import { Plus, ArrowDown, Monitor, Image as ImageIcon, Copyright } from 'lucide-react';

const projects: Project[] = [
  // Existing projects
  { id: 1, title: 'Modern Branding', category: 'Graphic Design', image: 'https://i.postimg.cc/g2PBn9vZ/sa.jpg' },
  { id: 2, title: 'Minimalist Web', category: 'Web Design', image: 'https://i.postimg.cc/GpgQP6sX/ryan.jpg' },
  { id: 3, title: 'Urban Portrait', category: 'Photography', image: 'https://i.postimg.cc/8CYRfWq6/media.jpg' },
  { id: 4, title: 'Product Showcase', category: 'Web Design', image: 'https://i.postimg.cc/gjW63K4S/fd.jpg' },
  { id: 5, title: 'Abstract Art', category: 'Graphic Design', image: 'https://i.postimg.cc/c4xt9pJv/gel.jpg' },
  { id: 6, title: 'Nature Light', category: 'Photography', image: 'https://i.postimg.cc/Dw9fWwxS/an.jpg' },
  // New projects
  { id: 7, title: 'Creative Campaign', category: 'Graphic Design', image: 'https://i.postimg.cc/Ss2W0Cf0/1735651034810.jpg' },
  { id: 8, title: 'Social Media Post', category: 'Graphic Design', image: 'https://i.postimg.cc/MKWvV1fq/1735651042345.jpg' },
  { id: 9, title: 'Brand Identity', category: 'Graphic Design', image: 'https://i.postimg.cc/V6QN6tPx/1735651039866.jpg' },
  { id: 10, title: 'Digital Flyer', category: 'Graphic Design', image: 'https://i.postimg.cc/NfJfXSw7/1735651051635.jpg' },
  { id: 11, title: 'Event Poster', category: 'Graphic Design', image: 'https://i.postimg.cc/VvsmrBG9/1735651157736.jpg' },
  { id: 12, title: 'Marketing Asset', category: 'Graphic Design', image: 'https://i.postimg.cc/NfzBFX1p/1735651143210.jpg' },
  { id: 13, title: 'Visual Concept', category: 'Graphic Design', image: 'https://i.postimg.cc/PxTk9Qkc/1735651137991.jpg' },
  { id: 14, title: 'Promo Material', category: 'Graphic Design', image: 'https://i.postimg.cc/gcMPthBP/1735651155534.jpg' },
  { id: 15, title: 'Art Direction', category: 'Graphic Design', image: 'https://i.postimg.cc/C1FWmMGg/1735651222726.jpg' },
  { id: 16, title: 'Design Layout', category: 'Graphic Design', image: 'https://i.postimg.cc/xTWhB3vF/1735651149383.jpg' },
];

const categories = ['All', 'Graphic Design', 'Web Design', 'Photography'];
const PROJECTS_PER_PAGE = 6;

export const Portfolio: React.FC = () => {
  const [filter, setFilter] = useState('All');
  const [visibleCount, setVisibleCount] = useState(PROJECTS_PER_PAGE);
  const [aspectRatio, setAspectRatio] = useState<'video' | 'original'>('video');

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.category === filter);

  const visibleProjects = filteredProjects.slice(0, visibleCount);
  const hasMore = visibleCount < filteredProjects.length;
  const isMasonry = aspectRatio === 'original';

  // Reset visible count when filter changes
  useEffect(() => {
    setVisibleCount(PROJECTS_PER_PAGE);
  }, [filter]);

  const handleLoadMore = () => {
    setVisibleCount(prev => prev + PROJECTS_PER_PAGE);
  };

  return (
    <SectionContainer id="portfolio" title="PORTFOLIO">
      
      {/* Controls Header */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
        {/* Filter Menu */}
        <div className="flex flex-wrap gap-4 justify-center md:justify-start">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 border 
                ${filter === cat 
                  ? 'bg-yellow-500 border-yellow-500 text-black shadow-[0_0_15px_rgba(234,179,8,0.4)]' 
                  : 'bg-transparent border-white/20 text-gray-400 hover:text-white hover:border-white'}`}
            >
              {cat.toUpperCase()}
            </button>
          ))}
        </div>

        {/* View Toggle */}
        <div className="flex bg-white/5 p-1 rounded-lg border border-white/10 shrink-0">
          <button
             onClick={() => setAspectRatio('video')}
             className={`flex items-center gap-2 px-3 py-2 rounded-md transition-all text-sm font-medium
               ${aspectRatio === 'video' ? 'bg-yellow-500 text-black shadow-sm' : 'text-gray-400 hover:text-white hover:bg-white/5'}`}
             title="16:9 Grid View"
          >
             <Monitor size={18} />
             <span className="hidden sm:inline">16:9</span>
          </button>
          <button
             onClick={() => setAspectRatio('original')}
             className={`flex items-center gap-2 px-3 py-2 rounded-md transition-all text-sm font-medium
               ${aspectRatio === 'original' ? 'bg-yellow-500 text-black shadow-sm' : 'text-gray-400 hover:text-white hover:bg-white/5'}`}
             title="Original Size View"
          >
             <ImageIcon size={18} />
             <span className="hidden sm:inline">Original</span>
          </button>
        </div>
      </div>

      {/* Grid / Masonry Layout */}
      <div className={
        isMasonry 
          ? "columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6" 
          : "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
      }>
        {visibleProjects.map((project, index) => (
          <div 
            key={project.id} 
            className={`group relative rounded-xl overflow-hidden cursor-pointer animate-in fade-in zoom-in duration-500 fill-mode-both w-full
              ${isMasonry ? 'break-inside-avoid mb-6' : 'aspect-video'}`}
            style={{ animationDelay: `${index % PROJECTS_PER_PAGE * 100}ms` }}
          >
            <img 
              src={project.image} 
              alt={project.title} 
              className={`w-full transition-transform duration-700 group-hover:scale-110 block
                ${isMasonry ? 'h-auto' : 'h-full object-cover'}`} 
            />
            
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4">
              <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 text-center">
                <h4 className="text-xl font-bold text-white mb-2">{project.title}</h4>
                <p className="text-yellow-500 text-sm tracking-widest uppercase">{project.category}</p>
                <button className="mt-4 w-10 h-10 rounded-full bg-white/10 hover:bg-yellow-500 hover:text-black text-white flex items-center justify-center transition-colors mx-auto">
                  <Plus size={20} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Load More Button */}
      {hasMore && (
        <div className="mt-12 flex justify-center">
          <button 
            onClick={handleLoadMore}
            className="group px-8 py-3 bg-white/5 border border-white/10 rounded-full text-white font-medium hover:bg-yellow-500 hover:text-black hover:border-yellow-500 transition-all duration-300 flex items-center gap-2"
          >
            Load More Designs
            <ArrowDown size={18} className="group-hover:translate-y-1 transition-transform" />
          </button>
        </div>
      )}
      
      {!hasMore && filteredProjects.length > 0 && (
         <div className="mt-16 pt-8 border-t border-white/5 flex items-center justify-center text-gray-500 text-sm">
           <Copyright size={14} className="mr-2" />
           <span className="tracking-widest uppercase">All rights reserved 2025</span>
         </div>
      )}
    </SectionContainer>
  );
};