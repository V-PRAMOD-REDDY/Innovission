import React from 'react';
import { motion } from 'framer-motion';
import { Check, Star, Zap, Palette, Monitor } from 'lucide-react';

interface TemplateGalleryProps {
  selectedTemplate: string;
  onTemplateSelect: (template: string) => void;
}

const TemplateGallery: React.FC<TemplateGalleryProps> = ({ selectedTemplate, onTemplateSelect }) => {
  const templates = [
    {
      id: 'modern',
      name: 'Modern',
      description: 'Clean and professional with gradient backgrounds',
      preview: 'from-blue-50 to-indigo-100',
      accent: 'text-blue-600',
      icon: Monitor,
      features: ['Gradient backgrounds', 'Modern typography', 'Smooth animations']
    },
    {
      id: 'minimal',
      name: 'Minimal',
      description: 'Simple and elegant with focus on content',
      preview: 'from-white to-gray-50',
      accent: 'text-black',
      icon: Palette,
      features: ['Clean design', 'Typography focused', 'Fast loading']
    },
    {
      id: '3d',
      name: '3D Interactive',
      description: 'Eye-catching with 3D elements and animations',
      preview: 'from-purple-50 to-pink-100',
      accent: 'text-purple-600',
      icon: Zap,
      features: ['3D animations', 'Interactive elements', 'Modern effects'],
      premium: true
    },
    {
      id: 'animated',
      name: 'Animated',
      description: 'Dynamic with smooth transitions and micro-interactions',
      preview: 'from-green-50 to-teal-100',
      accent: 'text-green-600',
      icon: Star,
      features: ['Smooth transitions', 'Micro-interactions', 'Engaging UX'],
      premium: true
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {templates.map((template) => (
        <motion.div
          key={template.id}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className={`relative cursor-pointer rounded-xl border-2 transition-all duration-300 ${
            selectedTemplate === template.id
              ? 'border-primary-500 bg-primary-50 dark:bg-primary-900'
              : 'border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600'
          }`}
          onClick={() => onTemplateSelect(template.id)}
        >
          {/* Premium Badge */}
          {template.premium && (
            <div className="absolute -top-2 -right-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs font-bold px-2 py-1 rounded-full z-10">
              ⭐ Premium
            </div>
          )}

          {/* Selected Indicator */}
          {selectedTemplate === template.id && (
            <div className="absolute top-3 left-3 bg-primary-600 text-white rounded-full p-1 z-10">
              <Check className="h-3 w-3" />
            </div>
          )}

          <div className="p-6">
            {/* Template Preview */}
            <div className={`h-32 rounded-lg bg-gradient-to-br ${template.preview} mb-4 relative overflow-hidden`}>
              <div className="absolute inset-4">
                <div className="bg-white/80 backdrop-blur-sm rounded-lg p-3 mb-2">
                  <div className={`h-2 ${template.accent.replace('text-', 'bg-')} rounded mb-2`}></div>
                  <div className="h-1 bg-gray-300 rounded mb-1"></div>
                  <div className="h-1 bg-gray-300 rounded w-3/4"></div>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <div className="bg-white/60 rounded p-2">
                    <div className="h-1 bg-gray-400 rounded mb-1"></div>
                    <div className="h-1 bg-gray-400 rounded w-2/3"></div>
                  </div>
                  <div className="bg-white/60 rounded p-2">
                    <div className="h-1 bg-gray-400 rounded mb-1"></div>
                    <div className="h-1 bg-gray-400 rounded w-2/3"></div>
                  </div>
                </div>
              </div>

              {/* 3D Effect for 3D template */}
              {template.id === '3d' && (
                <div className="absolute inset-0 bg-gradient-to-r from-purple-400/20 to-pink-400/20 animate-pulse"></div>
              )}

              {/* Animation Effect for animated template */}
              {template.id === 'animated' && (
                <div className="absolute bottom-2 right-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-bounce"></div>
                </div>
              )}
            </div>

            {/* Template Info */}
            <div className="flex items-start justify-between mb-3">
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white flex items-center">
                  <template.icon className="h-4 w-4 mr-2" />
                  {template.name}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                  {template.description}
                </p>
              </div>
            </div>

            {/* Features */}
            <div className="space-y-1">
              {template.features.map((feature, index) => (
                <div key={index} className="flex items-center text-xs text-gray-500 dark:text-gray-400">
                  <div className="w-1 h-1 bg-gray-400 rounded-full mr-2"></div>
                  {feature}
                </div>
              ))}
            </div>

            {/* Premium Notice */}
            {template.premium && (
              <div className="mt-3 p-2 bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-900 dark:to-orange-900 rounded-lg">
                <p className="text-xs text-yellow-700 dark:text-yellow-200">
                  Premium template - Includes advanced animations and 3D effects
                </p>
              </div>
            )}
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default TemplateGallery;