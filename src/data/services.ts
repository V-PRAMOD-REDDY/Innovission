import { ServiceProps } from '../components/ServiceCard';
import { File, Users, Briefcase, Laptop, MessageSquare, Code, Palette, BookOpen, Package } from 'lucide-react';
import React from 'react';

const servicesData: ServiceProps[] = [
  {
    id: 1,
    title: 'Basic Resume Design',
    description: 'Get a clean, professional 1-page resume designed just for you. Delivered in PDF format within 24 hours. Includes resume layout, formatting, and skill highlights.',
    icon: React.createElement(File, { className: 'h-6 w-6' }),
    link: '/services/basic-resume',
    price: 7,
  },
  {
    id: 2,
    title: 'Premium Resume + LinkedIn',
    description: 'Stand out with a recruiter-friendly resume + optimized LinkedIn profile. Ideal for students & freshers looking for maximum visibility. Includes summary writing, headline optimization & ATS-ready formatting.',
    icon: React.createElement(Users, { className: 'h-6 w-6' }),
    link: '/services/premium-resume-linkedin',
    price: 25,
  },
  {
    id: 3,
    title: 'Portfolio Website',
    description: 'Build your personal brand with a digital portfolio website. Host your resume, projects, and contact info on your own site! Mobile-friendly, SEO-ready, delivered in 48 hrs.',
    icon: React.createElement(Laptop, { className: 'h-6 w-6' }),
    link: '/services/portfolio-website',
    price: 149,
  },
  {
    id: 4,
    title: 'Mini Project + Source Code',
    description: 'Need a project for college or interviews? We\'ve got full solutions! Includes source code, explanation PDF, and interview Q&A. Available in Python, Web, Java, ML, and more!',
    icon: React.createElement(Code, { className: 'h-6 w-6' }),
    link: '/services/mini-project',
    price: 49,
  },
  {
    id: 5,
    title: 'Posters & Invitations',
    description: 'Custom posters, birthday cards, ID cards & invitations delivered fast. Social-media ready designs for events, college, and brands. Delivery: 24 hrs, JPG & PNG formats.',
    icon: React.createElement(Palette, { className: 'h-6 w-6' }),
    link: '/services/posters-invitations',
    price: 29,
  },
  {
    id: 6,
    title: 'WhatsApp Marketing Course',
    description: 'Learn how to grow your business using WhatsApp marketing strategies. Step-by-step videos, templates, and automation tools included. Lifetime access, no tech skills needed.',
    icon: React.createElement(MessageSquare, { className: 'h-6 w-6' }),
    link: '/services/whatsapp-marketing',
    price: 99,
  },
  {
    id: 7,
    title: 'Career Combo Kit',
    description: 'All-in-One Bundle: Resume + LinkedIn + Portfolio + Projects + Job Updates. Best value plan for job seekers and final-year students. Save more. Achieve faster.',
    icon: React.createElement(Package, { className: 'h-6 w-6' }),
    link: '/services/career-combo',
    price: 99,
  },
];

export default servicesData;