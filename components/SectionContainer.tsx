import React from 'react';

interface SectionContainerProps {
  id: string;
  children: React.ReactNode;
  className?: string;
  title?: string;
}

export const SectionContainer: React.FC<SectionContainerProps> = ({ id, children, className = '', title }) => {
  return (
    <section id={id} className={`min-h-screen flex flex-col justify-center py-16 md:py-24 px-4 md:px-12 relative ${className}`}>
      <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 md:p-12 shadow-2xl relative z-10 overflow-hidden">
        {/* Subtle internal gradient glow */}
        <div className="absolute -top-32 -right-32 w-64 h-64 bg-yellow-500/10 rounded-full blur-3xl pointer-events-none"></div>
        
        {title && (
          <div className="mb-12 border-b border-white/10 pb-4">
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight relative inline-block">
              {title}
              <span className="absolute -bottom-4 left-0 w-16 h-1 bg-yellow-500 rounded-full"></span>
            </h2>
          </div>
        )}
        {children}
      </div>
    </section>
  );
};