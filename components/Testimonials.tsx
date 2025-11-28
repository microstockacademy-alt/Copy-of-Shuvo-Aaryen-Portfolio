import React from 'react';
import { SectionContainer } from './SectionContainer';
import { Testimonial } from '../types';
import { Star, Quote } from 'lucide-react';

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'CEO at CreativeCorp',
    text: "Benjamin is a visionary designer. He completely transformed our brand identity with his modern approach. Highly recommended!",
    image: 'https://picsum.photos/100/100?random=10',
    rating: 5
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Marketing Director',
    text: "The photography session was seamless and the results were stunning. Ben has an incredible eye for lighting and composition.",
    image: 'https://picsum.photos/100/100?random=11',
    rating: 5
  },
  {
    id: 3,
    name: 'Emily Davis',
    role: 'Freelance Writer',
    text: "Professional, timely, and exceedingly creative. The website design exceeded all my expectations.",
    image: 'https://picsum.photos/100/100?random=12',
    rating: 5
  }
];

export const Testimonials: React.FC = () => {
  return (
    <SectionContainer id="testimonials" title="TESTIMONIALS">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((item) => (
          <div key={item.id} className="bg-black/30 backdrop-blur-sm border border-white/5 p-8 rounded-2xl relative group hover:border-yellow-500/30 transition-all duration-300">
             <div className="absolute top-6 right-6 text-white/5 group-hover:text-yellow-500/20 transition-colors">
               <Quote size={48} fill="currentColor" />
             </div>
            
            <div className="flex items-center gap-4 mb-6">
              <img 
                src={item.image} 
                alt={item.name} 
                className="w-14 h-14 rounded-full object-cover border-2 border-yellow-500/50"
              />
              <div>
                <h4 className="text-lg font-bold text-white">{item.name}</h4>
                <p className="text-xs text-gray-400 uppercase tracking-wide">{item.role}</p>
              </div>
            </div>

            <p className="text-gray-300 leading-relaxed mb-6 italic relative z-10">
              "{item.text}"
            </p>

            <div className="flex text-yellow-500 gap-1">
              {[...Array(item.rating)].map((_, i) => (
                <Star key={i} size={16} fill="currentColor" />
              ))}
            </div>
          </div>
        ))}
      </div>
    </SectionContainer>
  );
};