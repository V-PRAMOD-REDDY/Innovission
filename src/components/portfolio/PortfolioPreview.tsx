import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Github, Linkedin, ExternalLink, Globe, Star } from 'lucide-react';

interface PortfolioData {
  name: string;
  title: string;
  bio: string;
  email: string;
  phone: string;
  location: string;
  profileImage: string;
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
  github: string;
  linkedin: string;
  website: string;
  twitter: string;
  template: string;
  language: 'en' | 'hi' | 'te';
  theme: 'light' | 'dark';
  customDomain?: string;
}

interface PortfolioPreviewProps {
  data: PortfolioData;
  device: 'desktop' | 'tablet' | 'mobile';
  isDarkMode?: boolean;
}

const PortfolioPreview: React.FC<PortfolioPreviewProps> = ({ data, device, isDarkMode = false }) => {
  const getTemplateStyles = () => {
    switch (data.template) {
      case 'modern':
        return {
          bg: isDarkMode ? 'bg-gray-900' : 'bg-gradient-to-br from-blue-50 to-indigo-100',
          accent: 'text-blue-600',
          button: 'bg-blue-600 hover:bg-blue-700',
          card: isDarkMode ? 'bg-gray-800' : 'bg-white/80 backdrop-blur-sm'
        };
      case 'minimal':
        return {
          bg: isDarkMode ? 'bg-gray-900' : 'bg-white',
          accent: 'text-black',
          button: 'bg-black hover:bg-gray-800',
          card: isDarkMode ? 'bg-gray-800' : 'bg-gray-50'
        };
      case '3d':
        return {
          bg: isDarkMode ? 'bg-gray-900' : 'bg-gradient-to-br from-purple-50 to-pink-100',
          accent: 'text-purple-600',
          button: 'bg-purple-600 hover:bg-purple-700',
          card: isDarkMode ? 'bg-gray-800' : 'bg-white/90 backdrop-blur-sm'
        };
      case 'animated':
        return {
          bg: isDarkMode ? 'bg-gray-900' : 'bg-gradient-to-br from-green-50 to-teal-100',
          accent: 'text-green-600',
          button: 'bg-green-600 hover:bg-green-700',
          card: isDarkMode ? 'bg-gray-800' : 'bg-white/85 backdrop-blur-sm'
        };
      default:
        return {
          bg: isDarkMode ? 'bg-gray-900' : 'bg-gradient-to-br from-blue-50 to-indigo-100',
          accent: 'text-blue-600',
          button: 'bg-blue-600 hover:bg-blue-700',
          card: isDarkMode ? 'bg-gray-800' : 'bg-white/80 backdrop-blur-sm'
        };
    }
  };

  const styles = getTemplateStyles();
  const textColor = isDarkMode ? 'text-white' : 'text-gray-900';
  const mutedTextColor = isDarkMode ? 'text-gray-300' : 'text-gray-600';

  const getDeviceScale = () => {
    switch (device) {
      case 'tablet': return 'scale-75';
      case 'mobile': return 'scale-50';
      default: return 'scale-100';
    }
  };

  const experienceArray = data.experience ? data.experience.split('\n').filter(Boolean) : [];
  const educationArray = data.education ? data.education.split('\n').filter(Boolean) : [];

  return (
    <div className={`${getDeviceScale()} origin-top transition-transform duration-300`}>
      <div className={`min-h-screen ${styles.bg} p-4 md:p-8 ${isDarkMode ? 'dark' : ''}`}>
        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          <motion.header 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className={`${styles.card} rounded-2xl shadow-lg p-6 md:p-8 mb-8`}
          >
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
              {/* Profile Image */}
              <div className="relative">
                <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-lg">
                  {data.profileImage ? (
                    <img
                      src={data.profileImage}
                      alt={data.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                      <span className="text-gray-400 text-2xl">👤</span>
                    </div>
                  )}
                </div>
                {data.template === '3d' && (
                  <div className="absolute -inset-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-75 blur-lg"></div>
                )}
              </div>

              {/* Basic Info */}
              <div className="flex-1 text-center md:text-left">
                <motion.h1 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className={`text-3xl md:text-4xl font-bold ${textColor} mb-2`}
                >
                  {data.name || 'Your Name'}
                </motion.h1>
                <motion.p 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className={`text-xl md:text-2xl ${styles.accent} mb-4`}
                >
                  {data.title || 'Your Professional Title'}
                </motion.p>
                <motion.p 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className={`${mutedTextColor} mb-6 leading-relaxed`}
                >
                  {data.bio || 'Write a compelling bio that showcases your passion and expertise...'}
                </motion.p>

                {/* Contact Info */}
                <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-6">
                  {data.email && (
                    <div className="flex items-center">
                      <Mail className={`h-4 w-4 ${styles.accent} mr-2`} />
                      <span className={`text-sm ${mutedTextColor}`}>{data.email}</span>
                    </div>
                  )}
                  {data.phone && (
                    <div className="flex items-center">
                      <Phone className={`h-4 w-4 ${styles.accent} mr-2`} />
                      <span className={`text-sm ${mutedTextColor}`}>{data.phone}</span>
                    </div>
                  )}
                  {data.location && (
                    <div className="flex items-center">
                      <MapPin className={`h-4 w-4 ${styles.accent} mr-2`} />
                      <span className={`text-sm ${mutedTextColor}`}>{data.location}</span>
                    </div>
                  )}
                </div>

                {/* Social Links */}
                <div className="flex justify-center md:justify-start gap-4">
                  {data.github && (
                    <a href={data.github} className={`${styles.button} text-white px-4 py-2 rounded-lg flex items-center transition-colors`}>
                      <Github className="h-4 w-4 mr-2" />
                      GitHub
                    </a>
                  )}
                  {data.linkedin && (
                    <a href={data.linkedin} className={`${styles.button} text-white px-4 py-2 rounded-lg flex items-center transition-colors`}>
                      <Linkedin className="h-4 w-4 mr-2" />
                      LinkedIn
                    </a>
                  )}
                  {data.website && (
                    <a href={data.website} className={`${styles.button} text-white px-4 py-2 rounded-lg flex items-center transition-colors`}>
                      <Globe className="h-4 w-4 mr-2" />
                      Website
                    </a>
                  )}
                </div>
              </div>
            </div>
          </motion.header>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Left Column */}
            <div className="md:col-span-1 space-y-8">
              {/* Skills Section */}
              {data.skills.length > 0 && (
                <motion.section 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 }}
                  className={`${styles.card} rounded-xl shadow-lg p-6`}
                >
                  <h2 className={`text-2xl font-bold ${styles.accent} mb-4`}>Skills</h2>
                  <div className="flex flex-wrap gap-2">
                    {data.skills.map((skill, index) => (
                      <motion.span
                        key={index}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.6 + index * 0.1 }}
                        className={`px-3 py-1 rounded-full text-sm font-medium ${
                          isDarkMode ? 'bg-gray-700 text-gray-200' : 'bg-gray-100 text-gray-800'
                        }`}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </motion.section>
              )}

              {/* Education Section */}
              {educationArray.length > 0 && (
                <motion.section 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7 }}
                  className={`${styles.card} rounded-xl shadow-lg p-6`}
                >
                  <h2 className={`text-2xl font-bold ${styles.accent} mb-4`}>Education</h2>
                  <div className="space-y-3">
                    {educationArray.map((edu, index) => (
                      <div key={index} className={mutedTextColor}>
                        {edu}
                      </div>
                    ))}
                  </div>
                </motion.section>
              )}
            </div>

            {/* Right Column */}
            <div className="md:col-span-2 space-y-8">
              {/* Experience Section */}
              {experienceArray.length > 0 && (
                <motion.section 
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 }}
                  className={`${styles.card} rounded-xl shadow-lg p-6`}
                >
                  <h2 className={`text-2xl font-bold ${styles.accent} mb-6`}>Experience</h2>
                  <div className="space-y-4">
                    {experienceArray.map((exp, index) => (
                      <div key={index} className={`border-l-4 border-opacity-30 pl-4 ${mutedTextColor}`} 
                           style={{ borderColor: styles.accent.includes('blue') ? '#3B82F6' : styles.accent.includes('purple') ? '#8B5CF6' : styles.accent.includes('green') ? '#10B981' : '#000000' }}>
                        {exp}
                      </div>
                    ))}
                  </div>
                </motion.section>
              )}

              {/* Projects Section */}
              {data.projects.length > 0 && (
                <motion.section 
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8 }}
                  className={`${styles.card} rounded-xl shadow-lg p-6`}
                >
                  <h2 className={`text-2xl font-bold ${styles.accent} mb-6`}>Projects</h2>
                  <div className="grid gap-6">
                    {data.projects.map((project, index) => (
                      <motion.div
                        key={project.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.9 + index * 0.1 }}
                        className={`border rounded-lg p-4 ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}
                      >
                        <div className="flex items-start justify-between mb-3">
                          <h3 className={`text-lg font-semibold ${textColor}`}>{project.title}</h3>
                          <div className="flex gap-2">
                            {project.liveUrl && (
                              <a
                                href={project.liveUrl}
                                className={`text-sm ${styles.accent} hover:underline flex items-center`}
                              >
                                <ExternalLink className="h-3 w-3 mr-1" />
                                Live
                              </a>
                            )}
                            {project.githubUrl && (
                              <a
                                href={project.githubUrl}
                                className={`text-sm ${styles.accent} hover:underline flex items-center`}
                              >
                                <Github className="h-3 w-3 mr-1" />
                                Code
                              </a>
                            )}
                          </div>
                        </div>
                        <p className={`${mutedTextColor} mb-3`}>{project.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className={`px-2 py-1 text-xs rounded ${
                                isDarkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-700'
                              }`}
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.section>
              )}
            </div>
          </div>

          {/* Footer */}
          <motion.footer 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="text-center mt-12 py-8"
          >
            <p className={`${mutedTextColor} text-sm`}>
              Built with ❤️ using INNOVISSION Portfolio Builder
            </p>
            {data.customDomain && (
              <p className={`${styles.accent} text-sm mt-2`}>
                🌐 {data.customDomain}.innovission.in
              </p>
            )}
          </motion.footer>
        </div>
      </div>
    </div>
  );
};

export default PortfolioPreview;