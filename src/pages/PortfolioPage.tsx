import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Star, Globe, Download, Eye, Crown, Award, Users, Palette } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import PortfolioBuilder from '../components/portfolio/PortfolioBuilder';

const PortfolioPage = () => {
  return (
    <>
      <PageHeader 
        title="Advanced Portfolio Builder" 
        subtitle="Create stunning, professional portfolios with AI-powered tools and premium templates"
        backgroundImage="https://images.pexels.com/photos/669996/pexels-photo-669996.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      />

      {/* Hero Features */}
      <section className="py-16 bg-gradient-to-br from-primary-50 to-secondary-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
            >
              Next-Generation Portfolio Builder
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-gray-600 max-w-3xl mx-auto"
            >
              Build professional portfolios with live preview, AI import, premium templates, and one-click deployment
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="card p-6 text-center hover:-translate-y-1 transition-transform"
            >
              <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-blue-100 text-blue-600 mb-4">
                <Eye className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Live Preview</h3>
              <p className="text-gray-600">
                See your portfolio update in real-time as you edit with responsive device previews
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="card p-6 text-center hover:-translate-y-1 transition-transform"
            >
              <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-purple-100 text-purple-600 mb-4">
                <Zap className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">AI Import</h3>
              <p className="text-gray-600">
                Auto-fill your portfolio using LinkedIn and GitHub profiles with AI-powered parsing
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="card p-6 text-center hover:-translate-y-1 transition-transform"
            >
              <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-green-100 text-green-600 mb-4">
                <Globe className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">One-Click Deploy</h3>
              <p className="text-gray-600">
                Deploy instantly to Netlify, Vercel, or GitHub Pages with automatic optimization
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="card p-6 text-center hover:-translate-y-1 transition-transform"
            >
              <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-orange-100 text-orange-600 mb-4">
                <Download className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Source Code</h3>
              <p className="text-gray-600">
                Download complete source code with clean, production-ready HTML, CSS, and JS
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Portfolio Builder Component */}
      <PortfolioBuilder />

      {/* Premium Features */}
      <section className="py-16 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center justify-center">
              <Crown className="h-8 w-8 text-purple-600 mr-3" />
              Premium Features
            </h2>
            <p className="text-xl text-gray-600">
              Unlock advanced features with our premium portfolio plans
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card p-6 border-2 border-purple-200 hover:border-purple-400 transition-colors">
              <div className="flex items-center mb-4">
                <Palette className="h-6 w-6 text-purple-600 mr-3" />
                <h3 className="text-lg font-semibold">3D & Animated Templates</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Eye-catching templates with 3D elements, smooth animations, and interactive components
              </p>
              <div className="bg-purple-100 rounded-lg p-3">
                <p className="text-sm text-purple-800">Premium Only</p>
              </div>
            </div>
            
            <div className="card p-6 border-2 border-purple-200 hover:border-purple-400 transition-colors">
              <div className="flex items-center mb-4">
                <Globe className="h-6 w-6 text-purple-600 mr-3" />
                <h3 className="text-lg font-semibold">Custom Domain</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Get your own custom subdomain (yourname.innovission.in) for professional branding
              </p>
              <div className="bg-purple-100 rounded-lg p-3">
                <p className="text-sm text-purple-800">yourname.innovission.in</p>
              </div>
            </div>
            
            <div className="card p-6 border-2 border-purple-200 hover:border-purple-400 transition-colors">
              <div className="flex items-center mb-4">
                <Award className="h-6 w-6 text-purple-600 mr-3" />
                <h3 className="text-lg font-semibold">Certificate & Analytics</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Get completion certificate and detailed portfolio analytics with visitor insights
              </p>
              <div className="bg-purple-100 rounded-lg p-3">
                <p className="text-sm text-purple-800">Track your success</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary-900 to-primary-800 text-white">
        <div className="container-custom text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Ready to Build Your Dream Portfolio?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-primary-100 mb-8 max-w-3xl mx-auto"
          >
            Join thousands of professionals who have transformed their careers with our advanced portfolio builder
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <a href="#portfolio-builder" className="btn bg-white text-primary-900 hover:bg-gray-100 text-lg px-8 py-3">
              Start Building Now
            </a>
            <a href="#templates" className="btn border-2 border-white text-white hover:bg-white/10 text-lg px-8 py-3">
              View Templates
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default PortfolioPage;