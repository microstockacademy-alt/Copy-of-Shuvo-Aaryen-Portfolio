import React from 'react';

export type SectionId = 'home' | 'about' | 'resume' | 'portfolio' | 'testimonials' | 'contact';

export interface NavItem {
  id: SectionId;
  label: string;
  icon: React.ReactNode;
}

export interface Project {
  id: number;
  title: string;
  category: 'Graphic Design' | 'Web Design' | 'Photography';
  image: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  text: string;
  image: string;
  rating: number;
}