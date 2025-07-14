import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  User, Mail, Phone, MapPin, Github, Linkedin, Globe, 
  Download, Eye, Palette, Monitor, Tablet, Smartphone,
  Save, Upload, Settings, Zap, Crown, Star, Award,
  CreditCard, CheckCircle, ExternalLink, Copy, Share2
} from 'lucide-react';
import PortfolioPreview from './PortfolioPreview';
import TemplateGallery from './TemplateGallery';
import PaymentModal from './PaymentModal';
import CertificateGenerator from './CertificateGenerator';

interface PortfolioData {
  // Personal Info
  name: string;
  title: string;
  bio: string;
  email: string;
  phone: string;
  location: string;
  profileImage: string;
  
  // Professional
  skills: string[];
  experience: string;
  projects: Array<{
    id: string;
    title: string;
    description: string;
    technologies: string[];
    liveUrl?: string;
    githubUrl?: string;
    image?: string;
  }>;
  education: string;
  
  // Social Links
  github: string;
  linkedin: string;
  website: string;
  twitter: string;
  
  // Settings
  template: string;
  language: 'en' | 'hi' | 'te';
  theme: 'light' | 'dark';
  customDomain?: string;
}

interface PortfolioBuilderProps {
  onSave?: (data: PortfolioData) => void;
}

const PortfolioBuilder: React.FC<PortfolioBuilderProps> = ({ onSave }) => {
  const [currentStep, setCurrentStep] = useState<'form' | 'preview' | 'payment' | 'success'>('form');
  const [activeTab, setActiveTab] = useState('personal');
  const [previewDevice, setPreviewDevice] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [showPayment, setShowPayment] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [portfolioUrl, setPortfolioUrl] = useState('');
  const [showCertificate, setShowCertificate] = useState(false);
  const [paymentData, setPaymentData] = useState<any>(null);
  
  const [portfolioData, setPortfolioData] = useState<PortfolioData>({
    name: '',
    title: '',
    bio: '',
    email: '',
    phone: '',
    location: '',
    profileImage: '',
    skills: [],
    experience: '',
    projects: [],
    education: '',
    github: '',
    linkedin: '',
    website: '',
    twitter: '',
    template: 'modern',
    language: 'en',
    theme: 'light',
  });

  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleInputChange = (field: keyof PortfolioData, value: any) => {
    setPortfolioData(prev => ({ ...prev, [field]: value }));
  };

  const handleSkillAdd = (skill: string) => {
    if (skill.trim() && !portfolioData.skills.includes(skill.trim())) {
      setPortfolioData(prev => ({
        ...prev,
        skills: [...prev.skills, skill.trim()]
      }));
    }
  };

  const handleSkillRemove = (skillToRemove: string) => {
    setPortfolioData(prev => ({
      ...prev,
      skills: prev.skills.filter(skill => skill !== skillToRemove)
    }));
  };

  const handleProjectAdd = () => {
    const newProject = {
      id: Date.now().toString(),
      title: '',
      description: '',
      technologies: [],
      liveUrl: '',
      githubUrl: '',
      image: ''
    };
    setPortfolioData(prev => ({
      ...prev,
      projects: [...prev.projects, newProject]
    }));
  };

  const handleProjectUpdate = (projectId: string, field: string, value: any) => {
    setPortfolioData(prev => ({
      ...prev,
      projects: prev.projects.map(project =>
        project.id === projectId ? { ...project, [field]: value } : project
      )
    }));
  };

  const handleProjectRemove = (projectId: string) => {
    setPortfolioData(prev => ({
      ...prev,
      projects: prev.projects.filter(project => project.id !== projectId)
    }));
  };

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setPortfolioData(prev => ({
          ...prev,
          profileImage: e.target?.result as string
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleLinkedInImport = async () => {
    // Simulate LinkedIn import
    setIsProcessing(true);
    setTimeout(() => {
      setPortfolioData(prev => ({
        ...prev,
        name: 'John Doe',
        title: 'Full Stack Developer',
        bio: 'Passionate developer with 3+ years of experience in building scalable web applications.',
        skills: ['React', 'Node.js', 'TypeScript', 'Python', 'AWS'],
        experience: 'Software Engineer at TechCorp (2021-Present)\n• Developed and maintained web applications\n• Led a team of 3 developers',
        linkedin: 'https://linkedin.com/in/johndoe'
      }));
      setIsProcessing(false);
    }, 2000);
  };

  const handleGitHubImport = async () => {
    // Simulate GitHub import
    setIsProcessing(true);
    setTimeout(() => {
      const sampleProjects = [
        {
          id: '1',
          title: 'E-commerce Platform',
          description: 'Full-stack e-commerce solution with React and Node.js',
          technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
          githubUrl: 'https://github.com/johndoe/ecommerce',
          liveUrl: 'https://myecommerce.com'
        },
        {
          id: '2',
          title: 'Task Management App',
          description: 'Collaborative task management tool with real-time updates',
          technologies: ['Vue.js', 'Express', 'Socket.io', 'PostgreSQL'],
          githubUrl: 'https://github.com/johndoe/taskmanager'
        }
      ];
      setPortfolioData(prev => ({
        ...prev,
        projects: sampleProjects,
        github: 'https://github.com/johndoe'
      }));
      setIsProcessing(false);
    }, 2000);
  };

  const handleSaveDraft = () => {
    localStorage.setItem('portfolioDraft', JSON.stringify(portfolioData));
    // Show success toast
  };

  const handleLoadDraft = () => {
    const draft = localStorage.getItem('portfolioDraft');
    if (draft) {
      setPortfolioData(JSON.parse(draft));
    }
  };

  const handlePreviewAndDeploy = () => {
    // Validate required fields
    if (!portfolioData.name || !portfolioData.title || !portfolioData.bio) {
      alert('Please fill in at least your name, title, and bio before proceeding.');
      return;
    }
    
    // Show payment modal immediately
    setShowPayment(true);
  };

  const handlePayment = async (payment: any) => {
    setIsProcessing(true);
    setPaymentData(payment);
    
    // Simulate portfolio deployment after successful payment
    setTimeout(() => {
      const randomId = Math.random().toString(36).substring(7);
      const url = payment.plan === 'premium' && portfolioData.customDomain 
        ? `https://${portfolioData.customDomain}.ontimeupdates.in`
        : `https://${portfolioData.name.toLowerCase().replace(/\s+/g, '-')}-${randomId}.netlify.app`;
      
      setPortfolioUrl(url);
      setCurrentStep('success');
      setIsProcessing(false);
      setShowPayment(false);
      
      // Show certificate for premium users
      if (payment.plan === 'premium') {
        setShowCertificate(true);
      }
    }, 3000);
  };

  const generatePortfolioCode = () => {
    // Generate complete HTML/CSS/JS code
    return `<!DOCTYPE html>
<html lang="${portfolioData.language}">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${portfolioData.name} - Portfolio</title>
    <meta name="description" content="${portfolioData.bio}">
    <!-- Complete portfolio code would be generated here -->
</head>
<body>
    <!-- Portfolio content -->
</body>
</html>`;
  };

  const handleDownload = () => {
    const code = generatePortfolioCode();
    const blob = new Blob([code], { type: 'application/zip' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${portfolioData.name.replace(/\s+/g, '_')}_portfolio.zip`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    // Show success toast
  };

  const sharePortfolio = () => {
    if (navigator.share) {
      navigator.share({
        title: `${portfolioData.name}'s Portfolio`,
        text: portfolioData.bio,
        url: portfolioUrl,
      });
    }
  };

  const tabs = [
    { id: 'personal', label: 'Personal Info', icon: User },
    { id: 'professional', label: 'Professional', icon: Award },
    { id: 'projects', label: 'Projects', icon: Zap },
    { id: 'social', label: 'Social Links', icon: Share2 },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  if (currentStep === 'success') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white rounded-2xl shadow-2xl p-8 max-w-2xl w-full text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring" }}
            className="inline-flex items-center justify-center h-20 w-20 rounded-full bg-green-100 text-green-600 mb-6"
          >
            <CheckCircle className="h-10 w-10" />
          </motion.div>
          
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Portfolio Created Successfully! 🎉</h2>
          <p className="text-gray-600 mb-8">Your professional portfolio is now live and ready to impress employers!</p>
          
          <div className="bg-gray-50 rounded-lg p-4 mb-6">
            <p className="text-sm text-gray-600 mb-2">Your portfolio URL:</p>
            <div className="flex items-center justify-center gap-2">
              <code className="bg-white px-3 py-2 rounded border text-sm flex-1">{portfolioUrl}</code>
              <button
                onClick={() => copyToClipboard(portfolioUrl)}
                className="btn btn-outline btn-sm"
              >
                <Copy className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Payment Success Info */}
          {paymentData && (
            <div className="bg-green-50 rounded-lg p-4 mb-6">
              <h3 className="text-lg font-semibold text-green-800 mb-2">Payment Successful!</h3>
              <p className="text-sm text-green-700">
                Plan: {paymentData.plan === 'premium' ? 'Premium Portfolio' : 'Basic Portfolio'} - ₹{paymentData.amount}
              </p>
              <p className="text-xs text-green-600 mt-1">
                Payment ID: {paymentData.paymentId}
              </p>
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <a
              href={portfolioUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary flex items-center justify-center"
            >
              <Eye className="h-4 w-4 mr-2" />
              View Live
            </a>
            <button
              onClick={handleDownload}
              className="btn btn-secondary flex items-center justify-center"
            >
              <Download className="h-4 w-4 mr-2" />
              Download Code
            </button>
            <button
              onClick={sharePortfolio}
              className="btn btn-outline flex items-center justify-center"
            >
              <Share2 className="h-4 w-4 mr-2" />
              Share
            </button>
          </div>

          {paymentData?.plan === 'premium' && (
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-6 mb-6">
              <h3 className="text-lg font-semibold mb-2">🎓 Premium Features Unlocked!</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>✅ Portfolio Analytics Dashboard</li>
                <li>✅ SEO Optimization</li>
                <li>✅ Social Media Preview Cards</li>
                <li>✅ Certificate of Completion</li>
                <li>✅ Custom Domain Access</li>
              </ul>
              <button
                onClick={() => setShowCertificate(true)}
                className="btn btn-primary btn-sm mt-4"
              >
                <Award className="h-4 w-4 mr-2" />
                Download Certificate
              </button>
            </div>
          )}

          {showCertificate && (
            <CertificateGenerator
              name={portfolioData.name}
              onClose={() => setShowCertificate(false)}
            />
          )}

          <button
            onClick={() => {
              setCurrentStep('form');
              setPaymentData(null);
              setPortfolioUrl('');
            }}
            className="text-primary-600 font-medium hover:text-primary-800"
          >
            Create Another Portfolio
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className={`min-h-screen ${isDarkMode ? 'dark bg-gray-900' : 'bg-gray-50'}`}>
      {/* Header */}
      <div className="bg-white dark:bg-gray-800 shadow-sm border-b sticky top-0 z-50">
        <div className="container-custom py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Portfolio Builder</h1>
              <div className="flex items-center space-x-2">
                <button
                  onClick={handleSaveDraft}
                  className="btn btn-outline btn-sm flex items-center"
                >
                  <Save className="h-4 w-4 mr-2" />
                  Save Draft
                </button>
                <button
                  onClick={handleLoadDraft}
                  className="btn btn-outline btn-sm"
                >
                  Load Draft
                </button>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              {/* Device Preview Toggle */}
              <div className="flex items-center space-x-2 bg-gray-100 dark:bg-gray-700 rounded-lg p-1">
                <button
                  onClick={() => setPreviewDevice('desktop')}
                  className={`p-2 rounded ${previewDevice === 'desktop' ? 'bg-white dark:bg-gray-600 shadow' : ''}`}
                >
                  <Monitor className="h-4 w-4" />
                </button>
                <button
                  onClick={() => setPreviewDevice('tablet')}
                  className={`p-2 rounded ${previewDevice === 'tablet' ? 'bg-white dark:bg-gray-600 shadow' : ''}`}
                >
                  <Tablet className="h-4 w-4" />
                </button>
                <button
                  onClick={() => setPreviewDevice('mobile')}
                  className={`p-2 rounded ${previewDevice === 'mobile' ? 'bg-white dark:bg-gray-600 shadow' : ''}`}
                >
                  <Smartphone className="h-4 w-4" />
                </button>
              </div>

              {/* Theme Toggle */}
              <button
                onClick={() => setIsDarkMode(!isDarkMode)}
                className="btn btn-outline btn-sm"
              >
                {isDarkMode ? '☀️' : '🌙'}
              </button>

              {/* Preview/Deploy Button */}
              <button
                onClick={handlePreviewAndDeploy}
                className="btn btn-primary flex items-center"
                disabled={isProcessing}
              >
                {isProcessing ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                    Processing...
                  </>
                ) : (
                  <>
                    <CreditCard className="h-4 w-4 mr-2" />
                    Preview & Deploy
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="container-custom py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Form Section */}
          <div className="space-y-6">
            {/* Progress Indicator */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold dark:text-white">Build Your Portfolio</h2>
                <div className="text-sm text-gray-500">
                  {Object.values(portfolioData).filter(Boolean).length}/15 fields completed
                </div>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                <div 
                  className="bg-primary-600 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${(Object.values(portfolioData).filter(Boolean).length / 15) * 100}%` }}
                ></div>
              </div>
            </div>

            {/* AI Import Options */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6">
              <h3 className="text-lg font-semibold mb-4 dark:text-white">🤖 Quick Import</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <button
                  onClick={handleLinkedInImport}
                  disabled={isProcessing}
                  className="btn btn-outline flex items-center justify-center"
                >
                  <Linkedin className="h-4 w-4 mr-2" />
                  Import from LinkedIn
                </button>
                <button
                  onClick={handleGitHubImport}
                  disabled={isProcessing}
                  className="btn btn-outline flex items-center justify-center"
                >
                  <Github className="h-4 w-4 mr-2" />
                  Import from GitHub
                </button>
              </div>
            </div>

            {/* Tab Navigation */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm">
              <div className="flex border-b dark:border-gray-700">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex-1 flex items-center justify-center px-4 py-3 text-sm font-medium ${
                      activeTab === tab.id
                        ? 'text-primary-600 border-b-2 border-primary-600'
                        : 'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'
                    }`}
                  >
                    <tab.icon className="h-4 w-4 mr-2" />
                    {tab.label}
                  </button>
                ))}
              </div>

              <div className="p-6">
                <AnimatePresence mode="wait">
                  {/* Personal Info Tab */}
                  {activeTab === 'personal' && (
                    <motion.div
                      key="personal"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="space-y-6"
                    >
                      {/* Profile Image Upload */}
                      <div className="text-center">
                        <div className="relative inline-block">
                          <div className="w-24 h-24 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center overflow-hidden">
                            {portfolioData.profileImage ? (
                              <img
                                src={portfolioData.profileImage}
                                alt="Profile"
                                className="w-full h-full object-cover"
                              />
                            ) : (
                              <User className="h-8 w-8 text-gray-400" />
                            )}
                          </div>
                          <button
                            onClick={() => fileInputRef.current?.click()}
                            className="absolute bottom-0 right-0 bg-primary-600 text-white rounded-full p-2 hover:bg-primary-700"
                          >
                            <Upload className="h-3 w-3" />
                          </button>
                          <input
                            ref={fileInputRef}
                            type="file"
                            accept="image/*"
                            onChange={handleImageUpload}
                            className="hidden"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                            Full Name *
                          </label>
                          <input
                            type="text"
                            value={portfolioData.name}
                            onChange={(e) => handleInputChange('name', e.target.value)}
                            className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 dark:bg-gray-700 dark:text-white"
                            placeholder="John Doe"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                            Professional Title *
                          </label>
                          <input
                            type="text"
                            value={portfolioData.title}
                            onChange={(e) => handleInputChange('title', e.target.value)}
                            className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 dark:bg-gray-700 dark:text-white"
                            placeholder="Full Stack Developer"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                            Email *
                          </label>
                          <input
                            type="email"
                            value={portfolioData.email}
                            onChange={(e) => handleInputChange('email', e.target.value)}
                            className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 dark:bg-gray-700 dark:text-white"
                            placeholder="john@example.com"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                            Phone
                          </label>
                          <input
                            type="tel"
                            value={portfolioData.phone}
                            onChange={(e) => handleInputChange('phone', e.target.value)}
                            className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 dark:bg-gray-700 dark:text-white"
                            placeholder="+91 9876543210"
                          />
                        </div>

                        <div className="md:col-span-2">
                          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                            Location
                          </label>
                          <input
                            type="text"
                            value={portfolioData.location}
                            onChange={(e) => handleInputChange('location', e.target.value)}
                            className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 dark:bg-gray-700 dark:text-white"
                            placeholder="Bangalore, India"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          Bio/About Me *
                        </label>
                        <textarea
                          value={portfolioData.bio}
                          onChange={(e) => handleInputChange('bio', e.target.value)}
                          rows={4}
                          className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 dark:bg-gray-700 dark:text-white"
                          placeholder="Write a compelling bio that showcases your passion and expertise..."
                        />
                      </div>
                    </motion.div>
                  )}

                  {/* Professional Tab */}
                  {activeTab === 'professional' && (
                    <motion.div
                      key="professional"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="space-y-6"
                    >
                      {/* Skills */}
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          Skills *
                        </label>
                        <div className="flex flex-wrap gap-2 mb-3">
                          {portfolioData.skills.map((skill, index) => (
                            <span
                              key={index}
                              className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-primary-100 text-primary-800 dark:bg-primary-900 dark:text-primary-200"
                            >
                              {skill}
                              <button
                                onClick={() => handleSkillRemove(skill)}
                                className="ml-2 text-primary-600 hover:text-primary-800"
                              >
                                ×
                              </button>
                            </span>
                          ))}
                        </div>
                        <input
                          type="text"
                          onKeyPress={(e) => {
                            if (e.key === 'Enter') {
                              e.preventDefault();
                              handleSkillAdd(e.currentTarget.value);
                              e.currentTarget.value = '';
                            }
                          }}
                          className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 dark:bg-gray-700 dark:text-white"
                          placeholder="Type a skill and press Enter"
                        />
                      </div>

                      {/* Experience */}
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          Work Experience
                        </label>
                        <textarea
                          value={portfolioData.experience}
                          onChange={(e) => handleInputChange('experience', e.target.value)}
                          rows={6}
                          className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 dark:bg-gray-700 dark:text-white"
                          placeholder="Software Engineer at TechCorp (2022-Present)&#10;• Developed scalable web applications&#10;• Led a team of 5 developers"
                        />
                      </div>

                      {/* Education */}
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          Education
                        </label>
                        <textarea
                          value={portfolioData.education}
                          onChange={(e) => handleInputChange('education', e.target.value)}
                          rows={4}
                          className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 dark:bg-gray-700 dark:text-white"
                          placeholder="Bachelor of Technology in Computer Science&#10;XYZ University (2018-2022)&#10;CGPA: 8.5/10"
                        />
                      </div>
                    </motion.div>
                  )}

                  {/* Projects Tab */}
                  {activeTab === 'projects' && (
                    <motion.div
                      key="projects"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="space-y-6"
                    >
                      <div className="flex items-center justify-between">
                        <h3 className="text-lg font-semibold dark:text-white">Projects</h3>
                        <button
                          onClick={handleProjectAdd}
                          className="btn btn-primary btn-sm"
                        >
                          Add Project
                        </button>
                      </div>

                      {portfolioData.projects.map((project, index) => (
                        <div key={project.id} className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                          <div className="flex items-center justify-between mb-4">
                            <h4 className="font-medium dark:text-white">Project {index + 1}</h4>
                            <button
                              onClick={() => handleProjectRemove(project.id)}
                              className="text-red-500 hover:text-red-700"
                            >
                              Remove
                            </button>
                          </div>

                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                Project Title
                              </label>
                              <input
                                type="text"
                                value={project.title}
                                onChange={(e) => handleProjectUpdate(project.id, 'title', e.target.value)}
                                className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 dark:bg-gray-700 dark:text-white"
                                placeholder="E-commerce Platform"
                              />
                            </div>

                            <div>
                              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                Technologies
                              </label>
                              <input
                                type="text"
                                value={project.technologies.join(', ')}
                                onChange={(e) => handleProjectUpdate(project.id, 'technologies', e.target.value.split(', '))}
                                className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 dark:bg-gray-700 dark:text-white"
                                placeholder="React, Node.js, MongoDB"
                              />
                            </div>

                            <div className="md:col-span-2">
                              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                Description
                              </label>
                              <textarea
                                value={project.description}
                                onChange={(e) => handleProjectUpdate(project.id, 'description', e.target.value)}
                                rows={3}
                                className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 dark:bg-gray-700 dark:text-white"
                                placeholder="Describe your project..."
                              />
                            </div>

                            <div>
                              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                Live URL
                              </label>
                              <input
                                type="url"
                                value={project.liveUrl}
                                onChange={(e) => handleProjectUpdate(project.id, 'liveUrl', e.target.value)}
                                className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 dark:bg-gray-700 dark:text-white"
                                placeholder="https://myproject.com"
                              />
                            </div>

                            <div>
                              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                GitHub URL
                              </label>
                              <input
                                type="url"
                                value={project.githubUrl}
                                onChange={(e) => handleProjectUpdate(project.id, 'githubUrl', e.target.value)}
                                className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 dark:bg-gray-700 dark:text-white"
                                placeholder="https://github.com/username/project"
                              />
                            </div>
                          </div>
                        </div>
                      ))}

                      {portfolioData.projects.length === 0 && (
                        <div className="text-center py-8 text-gray-500 dark:text-gray-400">
                          <Zap className="h-12 w-12 mx-auto mb-4 opacity-50" />
                          <p>No projects added yet. Click "Add Project" to get started!</p>
                        </div>
                      )}
                    </motion.div>
                  )}

                  {/* Social Links Tab */}
                  {activeTab === 'social' && (
                    <motion.div
                      key="social"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="space-y-6"
                    >
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                            GitHub URL
                          </label>
                          <input
                            type="url"
                            value={portfolioData.github}
                            onChange={(e) => handleInputChange('github', e.target.value)}
                            className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 dark:bg-gray-700 dark:text-white"
                            placeholder="https://github.com/username"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                            LinkedIn URL
                          </label>
                          <input
                            type="url"
                            value={portfolioData.linkedin}
                            onChange={(e) => handleInputChange('linkedin', e.target.value)}
                            className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 dark:bg-gray-700 dark:text-white"
                            placeholder="https://linkedin.com/in/username"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                            Personal Website
                          </label>
                          <input
                            type="url"
                            value={portfolioData.website}
                            onChange={(e) => handleInputChange('website', e.target.value)}
                            className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 dark:bg-gray-700 dark:text-white"
                            placeholder="https://yourwebsite.com"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                            Twitter URL
                          </label>
                          <input
                            type="url"
                            value={portfolioData.twitter}
                            onChange={(e) => handleInputChange('twitter', e.target.value)}
                            className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 dark:bg-gray-700 dark:text-white"
                            placeholder="https://twitter.com/username"
                          />
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {/* Settings Tab */}
                  {activeTab === 'settings' && (
                    <motion.div
                      key="settings"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="space-y-6"
                    >
                      {/* Template Selection */}
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-4">
                          Choose Template
                        </label>
                        <TemplateGallery
                          selectedTemplate={portfolioData.template}
                          onTemplateSelect={(template) => handleInputChange('template', template)}
                        />
                      </div>

                      {/* Language Selection */}
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          Portfolio Language
                        </label>
                        <select
                          value={portfolioData.language}
                          onChange={(e) => handleInputChange('language', e.target.value)}
                          className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 dark:bg-gray-700 dark:text-white"
                        >
                          <option value="en">English</option>
                          <option value="hi">Hindi</option>
                          <option value="te">Telugu</option>
                        </select>
                      </div>

                      {/* Theme Selection */}
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          Color Theme
                        </label>
                        <div className="grid grid-cols-2 gap-4">
                          <button
                            onClick={() => handleInputChange('theme', 'light')}
                            className={`p-4 border rounded-lg flex items-center justify-center ${
                              portfolioData.theme === 'light'
                                ? 'border-primary-500 bg-primary-50 dark:bg-primary-900'
                                : 'border-gray-300 dark:border-gray-600'
                            }`}
                          >
                            ☀️ Light Theme
                          </button>
                          <button
                            onClick={() => handleInputChange('theme', 'dark')}
                            className={`p-4 border rounded-lg flex items-center justify-center ${
                              portfolioData.theme === 'dark'
                                ? 'border-primary-500 bg-primary-50 dark:bg-primary-900'
                                : 'border-gray-300 dark:border-gray-600'
                            }`}
                          >
                            🌙 Dark Theme
                          </button>
                        </div>
                      </div>

                      {/* Custom Domain */}
                      <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900 dark:to-pink-900 rounded-lg p-6">
                        <div className="flex items-center mb-4">
                          <Crown className="h-5 w-5 text-purple-600 mr-2" />
                          <h3 className="font-semibold text-purple-900 dark:text-purple-100">Premium: Custom Domain</h3>
                        </div>
                        <p className="text-sm text-purple-700 dark:text-purple-200 mb-4">
                          Get a custom subdomain for your portfolio (e.g., yourname.innovission.in) with Premium plan!
                        </p>
                        <input
                          type="text"
                          value={portfolioData.customDomain || ''}
                          onChange={(e) => handleInputChange('customDomain', e.target.value)}
                          className="w-full p-3 border border-purple-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                          placeholder="yourname"
                        />
                        <p className="text-xs text-purple-600 mt-2">
                          Your portfolio will be available at: {portfolioData.customDomain || 'yourname'}.ontimeupdates.in
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>

          {/* Live Preview Section */}
          <div className="space-y-6">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold dark:text-white">Live Preview</h3>
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-gray-500">Auto-updating</span>
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                </div>
              </div>

              <div className={`border rounded-lg overflow-hidden ${
                previewDevice === 'desktop' ? 'w-full' :
                previewDevice === 'tablet' ? 'w-3/4 mx-auto' : 'w-1/2 mx-auto'
              }`}>
                <PortfolioPreview 
                  data={portfolioData} 
                  device={previewDevice}
                  isDarkMode={isDarkMode}
                />
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6">
              <h3 className="text-lg font-semibold mb-4 dark:text-white">Quick Actions</h3>
              <div className="space-y-3">
                <button
                  onClick={handlePreviewAndDeploy}
                  className="w-full btn btn-primary flex items-center justify-center"
                  disabled={isProcessing}
                >
                  {isProcessing ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                      Processing...
                    </>
                  ) : (
                    <>
                      <CreditCard className="h-4 w-4 mr-2" />
                      Deploy Portfolio (from ₹49)
                    </>
                  )}
                </button>
                <button
                  onClick={handleSaveDraft}
                  className="w-full btn btn-outline flex items-center justify-center"
                >
                  <Save className="h-4 w-4 mr-2" />
                  Save as Draft
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Payment Modal */}
      <PaymentModal
        isOpen={showPayment}
        onClose={() => setShowPayment(false)}
        onPayment={handlePayment}
        portfolioData={portfolioData}
      />
    </div>
  );
};

export default PortfolioBuilder;