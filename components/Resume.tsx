import React from 'react';
import { SectionContainer } from './SectionContainer';

interface ResumeItem {
  year: string;
  title: string;
  subtitle: string;
  description: string;
}

const education: ResumeItem[] = [
  {
    year: '2015 - 2017',
    title: 'Master in Graphic Design',
    subtitle: 'Royal College of Art, London',
    description: 'Specialized in visual communication and branding strategies. Graduated with distinction.'
  },
  {
    year: '2011 - 2015',
    title: 'Bachelor of Fine Arts',
    subtitle: 'University of Arts, Philadelphia',
    description: 'Foundation in traditional art techniques, photography, and digital illustration.'
  }
];

const experience: ResumeItem[] = [
  {
    year: '2020 - Present',
    title: 'Senior UX/UI Designer',
    subtitle: 'Creative Agency, New York',
    description: 'Leading a team of designers to deliver high-impact web and mobile applications for Fortune 500 clients.'
  },
  {
    year: '2017 - 2020',
    title: 'Freelance Photographer',
    subtitle: 'Worldwide',
    description: 'Collaborated with lifestyle brands and travel magazines to capture compelling visual narratives.'
  },
   {
    year: '2016 - 2017',
    title: 'Junior Designer',
    subtitle: 'Tech Startup, San Francisco',
    description: 'Designed marketing collateral and assisted in the rebranding of key products.'
  }
];

const TimelineItem: React.FC<{ item: ResumeItem; last: boolean }> = ({ item, last }) => (
  <div className="relative pl-8 md:pl-10 pb-12 group">
    {/* Timeline Line */}
    {!last && (
      <div className="absolute left-[7px] top-2 bottom-0 w-[2px] bg-white/10 group-hover:bg-yellow-500/50 transition-colors"></div>
    )}
    
    {/* Timeline Dot */}
    <div className="absolute left-0 top-2 w-4 h-4 rounded-full border-2 border-yellow-500 bg-black group-hover:bg-yellow-500 transition-colors shadow-[0_0_10px_rgba(234,179,8,0.3)]"></div>
    
    <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2">
      <span className="text-yellow-500 text-sm font-bold tracking-widest bg-yellow-500/10 px-3 py-1 rounded-full w-fit">
        {item.year}
      </span>
    </div>
    
    <h4 className="text-xl font-bold text-white mt-2 group-hover:text-yellow-500 transition-colors">{item.title}</h4>
    <h5 className="text-sm text-gray-400 mb-3">{item.subtitle}</h5>
    <p className="text-gray-500 text-sm leading-relaxed">{item.description}</p>
  </div>
);

export const Resume: React.FC = () => {
  return (
    <SectionContainer id="resume" title="RESUME">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
        
        {/* Education Column */}
        <div>
           <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
            <span className="w-8 h-1 bg-yellow-500 rounded-full"></span>
            Education
          </h3>
          <div className="mt-8">
            {education.map((item, index) => (
              <TimelineItem key={index} item={item} last={index === education.length - 1} />
            ))}
          </div>
        </div>

        {/* Experience Column */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
            <span className="w-8 h-1 bg-yellow-500 rounded-full"></span>
            Experience
          </h3>
          <div className="mt-8">
            {experience.map((item, index) => (
              <TimelineItem key={index} item={item} last={index === experience.length - 1} />
            ))}
          </div>
        </div>

      </div>
    </SectionContainer>
  );
};