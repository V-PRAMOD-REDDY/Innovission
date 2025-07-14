import React, { useState } from 'react';
import { Eye, Download, Globe, Edit, Github, Zap, Share2, Code } from 'lucide-react';
import PortfolioPreview from './PortfolioPreview';

interface PortfolioData {
  name: string;
  title: string;
  email: string;
  phone: string;
  location: string;
  about: string;
  skills: string;
  experience: string;
  projects: string;
  education: string;
  github: string;
  linkedin: string;
  website: string;
  template: string;
}

const PortfolioGenerator: React.FC = () => {
  const [step, setStep] = useState<'form' | 'preview' | 'deploy'>('form');
  const [portfolioData, setPortfolioData] = useState<PortfolioData>({
    name: '',
    title: '',
    email: '',
    phone: '',
    location: '',
    about: '',
    skills: '',
    experience: '',
    projects: '',
    education: '',
    github: '',
    linkedin: '',
    website: '',
    template: 'modern'
  });

  const [deploymentStatus, setDeploymentStatus] = useState<'idle' | 'deploying' | 'success' | 'error'>('idle');
  const [deploymentUrl, setDeploymentUrl] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setPortfolioData(prev => ({ ...prev, [name]: value }));
  };

  const handleGeneratePortfolio = () => {
    setStep('preview');
  };

  const handleEditPortfolio = () => {
    setStep('form');
  };

  const generatePortfolioCode = () => {
    const skillsArray = portfolioData.skills.split(',').map(skill => skill.trim()).filter(Boolean);
    const projectsArray = portfolioData.projects.split('\n').filter(Boolean);
    const experienceArray = portfolioData.experience.split('\n').filter(Boolean);
    const educationArray = portfolioData.education.split('\n').filter(Boolean);

    const getTemplateStyles = () => {
      switch (portfolioData.template) {
        case 'modern':
          return {
            bg: 'bg-gradient-to-br from-blue-50 to-indigo-100',
            accent: 'text-blue-600',
            button: 'bg-blue-600 hover:bg-blue-700',
            card: 'bg-white/80 backdrop-blur-sm'
          };
        case 'professional':
          return {
            bg: 'bg-gray-50',
            accent: 'text-gray-800',
            button: 'bg-gray-800 hover:bg-gray-900',
            card: 'bg-white'
          };
        case 'creative':
          return {
            bg: 'bg-gradient-to-br from-purple-50 to-pink-100',
            accent: 'text-purple-600',
            button: 'bg-purple-600 hover:bg-purple-700',
            card: 'bg-white/90 backdrop-blur-sm'
          };
        case 'minimal':
          return {
            bg: 'bg-white',
            accent: 'text-black',
            button: 'bg-black hover:bg-gray-800',
            card: 'bg-gray-50'
          };
        default:
          return {
            bg: 'bg-gradient-to-br from-blue-50 to-indigo-100',
            accent: 'text-blue-600',
            button: 'bg-blue-600 hover:bg-blue-700',
            card: 'bg-white/80 backdrop-blur-sm'
          };
      }
    };

    const styles = getTemplateStyles();

    return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${portfolioData.name} - Portfolio</title>
    <meta name="description" content="${portfolioData.title} - ${portfolioData.about.substring(0, 150)}">
    <meta name="keywords" content="${skillsArray.join(', ')}">
    <meta property="og:title" content="${portfolioData.name} - Portfolio">
    <meta property="og:description" content="${portfolioData.about.substring(0, 150)}">
    <meta property="og:type" content="website">
    <script src="https://cdn.tailwindcss.com"></script>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <style>
        body { font-family: 'Inter', sans-serif; }
        .animate-fade-in { animation: fadeIn 0.6s ease-out; }
        .animate-slide-up { animation: slideUp 0.6s ease-out; }
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes slideUp { from { transform: translateY(20px); opacity: 0; } to { transform: translateY(0); opacity: 1; } }
    </style>
</head>
<body class="${styles.bg} min-h-screen">
    <div class="container mx-auto p-8 animate-fade-in">
        <!-- Header Section -->
        <header class="${styles.card} rounded-2xl shadow-lg p-8 mb-8 animate-slide-up">
            <div class="text-center">
                <h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-2">${portfolioData.name}</h1>
                <p class="${styles.accent} text-xl md:text-2xl mb-6">${portfolioData.title}</p>
                
                <div class="flex flex-wrap justify-center gap-6 text-gray-600 mb-6">
                    ${portfolioData.email ? `<div class="flex items-center"><span>📧</span><span class="ml-2">${portfolioData.email}</span></div>` : ''}
                    ${portfolioData.phone ? `<div class="flex items-center"><span>📱</span><span class="ml-2">${portfolioData.phone}</span></div>` : ''}
                    ${portfolioData.location ? `<div class="flex items-center"><span>📍</span><span class="ml-2">${portfolioData.location}</span></div>` : ''}
                </div>
                
                <div class="flex justify-center gap-4">
                    ${portfolioData.github ? `<a href="${portfolioData.github}" class="${styles.button} text-white px-4 py-2 rounded-lg transition-colors">GitHub</a>` : ''}
                    ${portfolioData.linkedin ? `<a href="${portfolioData.linkedin}" class="${styles.button} text-white px-4 py-2 rounded-lg transition-colors">LinkedIn</a>` : ''}
                    ${portfolioData.website ? `<a href="${portfolioData.website}" class="${styles.button} text-white px-4 py-2 rounded-lg transition-colors">Website</a>` : ''}
                </div>
            </div>
        </header>

        <div class="grid md:grid-cols-3 gap-8">
            <!-- Left Column -->
            <div class="md:col-span-1 space-y-8">
                ${portfolioData.about ? `
                <section class="${styles.card} rounded-xl shadow-lg p-6 animate-slide-up">
                    <h2 class="${styles.accent} text-2xl font-bold mb-4">About Me</h2>
                    <p class="text-gray-700 leading-relaxed">${portfolioData.about}</p>
                </section>` : ''}

                ${skillsArray.length > 0 ? `
                <section class="${styles.card} rounded-xl shadow-lg p-6 animate-slide-up">
                    <h2 class="${styles.accent} text-2xl font-bold mb-4">Skills</h2>
                    <div class="flex flex-wrap gap-2">
                        ${skillsArray.map(skill => `<span class="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">${skill}</span>`).join('')}
                    </div>
                </section>` : ''}

                ${educationArray.length > 0 ? `
                <section class="${styles.card} rounded-xl shadow-lg p-6 animate-slide-up">
                    <h2 class="${styles.accent} text-2xl font-bold mb-4">Education</h2>
                    <div class="space-y-3">
                        ${educationArray.map(edu => `<div class="text-gray-700">${edu}</div>`).join('')}
                    </div>
                </section>` : ''}
            </div>

            <!-- Right Column -->
            <div class="md:col-span-2 space-y-8">
                ${experienceArray.length > 0 ? `
                <section class="${styles.card} rounded-xl shadow-lg p-6 animate-slide-up">
                    <h2 class="${styles.accent} text-2xl font-bold mb-6">Experience</h2>
                    <div class="space-y-4">
                        ${experienceArray.map(exp => `<div class="border-l-4 border-blue-300 pl-4 text-gray-700">${exp}</div>`).join('')}
                    </div>
                </section>` : ''}

                ${projectsArray.length > 0 ? `
                <section class="${styles.card} rounded-xl shadow-lg p-6 animate-slide-up">
                    <h2 class="${styles.accent} text-2xl font-bold mb-6">Projects</h2>
                    <div class="space-y-4">
                        ${projectsArray.map(project => `<div class="border-l-4 border-blue-300 pl-4 text-gray-700">${project}</div>`).join('')}
                    </div>
                </section>` : ''}
            </div>
        </div>
    </div>
</body>
</html>`;
  };

  const handleDownloadCode = () => {
    const htmlContent = generatePortfolioCode();
    const blob = new Blob([htmlContent], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${portfolioData.name.replace(/\s+/g, '_')}_portfolio.html`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const handleDeploy = async (platform: 'netlify' | 'vercel' | 'github') => {
    setDeploymentStatus('deploying');
    
    // Simulate deployment process
    setTimeout(() => {
      const randomId = Math.random().toString(36).substring(7);
      const urls = {
        netlify: `https://${portfolioData.name.toLowerCase().replace(/\s+/g, '-')}-${randomId}.netlify.app`,
        vercel: `https://${portfolioData.name.toLowerCase().replace(/\s+/g, '-')}-${randomId}.vercel.app`,
        github: `https://${portfolioData.name.toLowerCase().replace(/\s+/g, '-')}.github.io`
      };
      
      setDeploymentUrl(urls[platform]);
      setDeploymentStatus('success');
      setStep('deploy');
    }, 3000);
  };

  if (step === 'preview') {
    return (
      <div className="min-h-screen bg-gray-100">
        {/* Preview Header */}
        <div className="bg-white shadow-sm border-b sticky top-0 z-50">
          <div className="container-custom py-4">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold text-gray-900">Portfolio Preview</h2>
              <div className="flex items-center gap-3">
                <button
                  onClick={handleEditPortfolio}
                  className="btn btn-outline flex items-center"
                >
                  <Edit className="h-4 w-4 mr-2" />
                  Edit Portfolio
                </button>
                <button
                  onClick={handleDownloadCode}
                  className="btn btn-secondary flex items-center"
                >
                  <Download className="h-4 w-4 mr-2" />
                  Download Code
                </button>
                <div className="relative">
                  <button
                    onClick={() => setStep('deploy')}
                    className="btn btn-primary flex items-center"
                  >
                    <Globe className="h-4 w-4 mr-2" />
                    Deploy Live
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Preview Content */}
        <div className="bg-gray-100 p-4">
          <div className="max-w-7xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <PortfolioPreview data={portfolioData} />
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (step === 'deploy') {
    return (
      <div className="min-h-screen bg-gray-50 py-16">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Deploy Your Portfolio</h2>
                <p className="text-gray-600">Choose a platform to deploy your portfolio live on the web</p>
              </div>

              {deploymentStatus === 'success' ? (
                <div className="text-center">
                  <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-green-100 text-green-600 mb-6">
                    <Globe className="h-8 w-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Portfolio Deployed Successfully!</h3>
                  <p className="text-gray-600 mb-6">Your portfolio is now live and accessible to everyone.</p>
                  
                  <div className="bg-gray-50 p-4 rounded-lg mb-6">
                    <p className="text-sm text-gray-600 mb-2">Your portfolio URL:</p>
                    <div className="flex items-center justify-center gap-2">
                      <code className="bg-white px-3 py-2 rounded border text-sm">{deploymentUrl}</code>
                      <button
                        onClick={() => navigator.clipboard.writeText(deploymentUrl)}
                        className="btn btn-outline btn-sm"
                      >
                        <Share2 className="h-4 w-4" />
                      </button>
                    </div>
                  </div>

                  <div className="flex justify-center gap-4">
                    <a
                      href={deploymentUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary"
                    >
                      View Live Portfolio
                    </a>
                    <button
                      onClick={() => setStep('preview')}
                      className="btn btn-outline"
                    >
                      Back to Preview
                    </button>
                  </div>
                </div>
              ) : deploymentStatus === 'deploying' ? (
                <div className="text-center">
                  <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-blue-100 text-blue-600 mb-6">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Deploying Your Portfolio...</h3>
                  <p className="text-gray-600">Please wait while we deploy your portfolio to the web.</p>
                </div>
              ) : (
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="card p-6 text-center hover:-translate-y-1 transition-transform">
                    <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-green-100 text-green-600 mb-4">
                      <Zap className="h-6 w-6" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">Netlify</h3>
                    <p className="text-gray-600 mb-4">Deploy instantly with automatic HTTPS and global CDN</p>
                    <button
                      onClick={() => handleDeploy('netlify')}
                      className="btn btn-primary w-full"
                    >
                      Deploy to Netlify
                    </button>
                  </div>

                  <div className="card p-6 text-center hover:-translate-y-1 transition-transform">
                    <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-black text-white mb-4">
                      <Zap className="h-6 w-6" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">Vercel</h3>
                    <p className="text-gray-600 mb-4">Deploy with edge functions and automatic optimization</p>
                    <button
                      onClick={() => handleDeploy('vercel')}
                      className="btn btn-primary w-full"
                    >
                      Deploy to Vercel
                    </button>
                  </div>

                  <div className="card p-6 text-center hover:-translate-y-1 transition-transform">
                    <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-gray-900 text-white mb-4">
                      <Github className="h-6 w-6" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">GitHub Pages</h3>
                    <p className="text-gray-600 mb-4">Host for free with GitHub's static site hosting</p>
                    <button
                      onClick={() => handleDeploy('github')}
                      className="btn btn-primary w-full"
                    >
                      Deploy to GitHub
                    </button>
                  </div>
                </div>
              )}

              {deploymentStatus === 'idle' && (
                <div className="text-center mt-8">
                  <button
                    onClick={() => setStep('preview')}
                    className="btn btn-outline"
                  >
                    Back to Preview
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="p-8">
              <div className="text-center mb-8">
                <h1 className="text-3xl font-bold text-gray-900 mb-4">Portfolio Generator</h1>
                <p className="text-gray-600">Create a stunning portfolio in minutes with our advanced generator</p>
              </div>

              <form className="space-y-8">
                {/* Personal Information */}
                <div>
                  <h2 className="text-xl font-semibold text-gray-900 mb-6">Personal Information</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={portfolioData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        placeholder="John Doe"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-2">
                        Professional Title <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="title"
                        name="title"
                        value={portfolioData.title}
                        onChange={handleInputChange}
                        required
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        placeholder="Software Engineer"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={portfolioData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        placeholder="john@example.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={portfolioData.phone}
                        onChange={handleInputChange}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        placeholder="+91 9876543210"
                      />
                    </div>

                    <div className="md:col-span-2">
                      <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-2">
                        Location
                      </label>
                      <input
                        type="text"
                        id="location"
                        name="location"
                        value={portfolioData.location}
                        onChange={handleInputChange}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        placeholder="Bangalore, India"
                      />
                    </div>
                  </div>
                </div>

                {/* About Section */}
                <div>
                  <h2 className="text-xl font-semibold text-gray-900 mb-6">About & Content</h2>
                  <div className="space-y-6">
                    <div>
                      <label htmlFor="about" className="block text-sm font-medium text-gray-700 mb-2">
                        About Me <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        id="about"
                        name="about"
                        value={portfolioData.about}
                        onChange={handleInputChange}
                        required
                        rows={4}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        placeholder="Write a brief introduction about yourself, your passion, and what drives you..."
                      ></textarea>
                    </div>

                    <div>
                      <label htmlFor="skills" className="block text-sm font-medium text-gray-700 mb-2">
                        Skills <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="skills"
                        name="skills"
                        value={portfolioData.skills}
                        onChange={handleInputChange}
                        required
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        placeholder="JavaScript, React, Node.js, Python, AWS (separate with commas)"
                      />
                    </div>

                    <div>
                      <label htmlFor="experience" className="block text-sm font-medium text-gray-700 mb-2">
                        Work Experience <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        id="experience"
                        name="experience"
                        value={portfolioData.experience}
                        onChange={handleInputChange}
                        required
                        rows={4}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        placeholder="Software Engineer at TechCorp (2022-Present)&#10;- Developed scalable web applications&#10;- Led a team of 5 developers&#10;&#10;Junior Developer at StartupXYZ (2020-2022)&#10;- Built responsive user interfaces"
                      ></textarea>
                    </div>

                    <div>
                      <label htmlFor="projects" className="block text-sm font-medium text-gray-700 mb-2">
                        Projects <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        id="projects"
                        name="projects"
                        value={portfolioData.projects}
                        onChange={handleInputChange}
                        required
                        rows={4}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        placeholder="E-commerce Platform - Built with React and Node.js&#10;- Implemented payment gateway integration&#10;- Achieved 99.9% uptime&#10;&#10;Task Management App - Mobile app using React Native&#10;- Real-time synchronization"
                      ></textarea>
                    </div>

                    <div>
                      <label htmlFor="education" className="block text-sm font-medium text-gray-700 mb-2">
                        Education
                      </label>
                      <textarea
                        id="education"
                        name="education"
                        value={portfolioData.education}
                        onChange={handleInputChange}
                        rows={3}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        placeholder="Bachelor of Technology in Computer Science&#10;XYZ University (2018-2022)&#10;CGPA: 8.5/10"
                      ></textarea>
                    </div>
                  </div>
                </div>

                {/* Social Links */}
                <div>
                  <h2 className="text-xl font-semibold text-gray-900 mb-6">Social Links</h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <label htmlFor="github" className="block text-sm font-medium text-gray-700 mb-2">
                        GitHub URL
                      </label>
                      <input
                        type="url"
                        id="github"
                        name="github"
                        value={portfolioData.github}
                        onChange={handleInputChange}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        placeholder="https://github.com/username"
                      />
                    </div>

                    <div>
                      <label htmlFor="linkedin" className="block text-sm font-medium text-gray-700 mb-2">
                        LinkedIn URL
                      </label>
                      <input
                        type="url"
                        id="linkedin"
                        name="linkedin"
                        value={portfolioData.linkedin}
                        onChange={handleInputChange}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        placeholder="https://linkedin.com/in/username"
                      />
                    </div>

                    <div>
                      <label htmlFor="website" className="block text-sm font-medium text-gray-700 mb-2">
                        Personal Website
                      </label>
                      <input
                        type="url"
                        id="website"
                        name="website"
                        value={portfolioData.website}
                        onChange={handleInputChange}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        placeholder="https://yourwebsite.com"
                      />
                    </div>
                  </div>
                </div>

                 {/* Template Selection */}
                <div>
                  <h2 className="text-xl font-semibold text-gray-900 mb-6">Choose Template</h2>
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    {[
                      { id: 'modern', name: 'Modern', color: 'from-blue-50 to-indigo-100' },
                      { id: 'professional', name: 'Professional', color: 'from-gray-50 to-gray-100' },
                      { id: 'creative', name: 'Creative', color: 'from-purple-50 to-pink-100' },
                      { id: 'minimal', name: 'Minimal', color: 'from-white to-gray-50' }
                    ].map((template) => (
                      <label key={template.id} className="cursor-pointer">
                        <input
                          type="radio"
                          name="template"
                          value={template.id}
                          checked={portfolioData.template === template.id}
                          onChange={handleInputChange}
                          className="sr-only"
                        />
                        <div className={`p-4 rounded-lg border-2 transition-all ${
                          portfolioData.template === template.id 
                            ? 'border-primary-500 bg-primary-50' 
                            : 'border-gray-200 hover:border-gray-300'
                        }`}>
                          <div className={`h-20 rounded bg-gradient-to-br ${template.color} mb-3`}></div>
                          <p className="text-sm font-medium text-center">{template.name}</p>
                        </div>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="flex justify-center">
                  <button
                    type="button"
                    onClick={handleGeneratePortfolio}
                    className="btn btn-primary text-lg px-8 py-3 flex items-center"
                  >
                    <Eye className="h-5 w-5 mr-2" />
                    Generate Portfolio Preview
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioGenerator;