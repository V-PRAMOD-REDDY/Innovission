import React from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, ExternalLink, Download } from 'lucide-react';

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

interface PortfolioPreviewProps {
  data: PortfolioData;
}

const PortfolioPreview: React.FC<PortfolioPreviewProps> = ({ data }) => {
  const skillsArray = data.skills.split(',').map(skill => skill.trim()).filter(Boolean);
  const projectsArray = data.projects.split('\n').filter(Boolean);
  const experienceArray = data.experience.split('\n').filter(Boolean);
  const educationArray = data.education.split('\n').filter(Boolean);

  const getTemplateStyles = () => {
    switch (data.template) {
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

  return (
    <div className={`min-h-screen ${styles.bg} p-8`}>
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <header className={`${styles.card} rounded-2xl shadow-lg p-8 mb-8`}>
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
              {data.name || 'Your Name'}
            </h1>
            <p className={`text-xl md:text-2xl ${styles.accent} mb-6`}>
              {data.title || 'Your Professional Title'}
            </p>
            
            <div className="flex flex-wrap justify-center gap-6 text-gray-600">
              {data.email && (
                <div className="flex items-center">
                  <Mail className="h-5 w-5 mr-2" />
                  <span>{data.email}</span>
                </div>
              )}
              {data.phone && (
                <div className="flex items-center">
                  <Phone className="h-5 w-5 mr-2" />
                  <span>{data.phone}</span>
                </div>
              )}
              {data.location && (
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 mr-2" />
                  <span>{data.location}</span>
                </div>
              )}
            </div>
            
            <div className="flex justify-center gap-4 mt-6">
              {data.github && (
                <a href={data.github} className={`${styles.button} text-white px-4 py-2 rounded-lg flex items-center transition-colors`}>
                  <Github className="h-5 w-5 mr-2" />
                  GitHub
                </a>
              )}
              {data.linkedin && (
                <a href={data.linkedin} className={`${styles.button} text-white px-4 py-2 rounded-lg flex items-center transition-colors`}>
                  <Linkedin className="h-5 w-5 mr-2" />
                  LinkedIn
                </a>
              )}
              {data.website && (
                <a href={data.website} className={`${styles.button} text-white px-4 py-2 rounded-lg flex items-center transition-colors`}>
                  <ExternalLink className="h-5 w-5 mr-2" />
                  Website
                </a>
              )}
            </div>
          </div>
        </header>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="md:col-span-1 space-y-8">
            {/* About Section */}
            {data.about && (
              <section className={`${styles.card} rounded-xl shadow-lg p-6`}>
                <h2 className={`text-2xl font-bold ${styles.accent} mb-4`}>About Me</h2>
                <p className="text-gray-700 leading-relaxed">{data.about}</p>
              </section>
            )}

            {/* Skills Section */}
            {skillsArray.length > 0 && (
              <section className={`${styles.card} rounded-xl shadow-lg p-6`}>
                <h2 className={`text-2xl font-bold ${styles.accent} mb-4`}>Skills</h2>
                <div className="flex flex-wrap gap-2">
                  {skillsArray.map((skill, index) => (
                    <span
                      key={index}
                      className={`px-3 py-1 ${styles.accent} bg-opacity-10 rounded-full text-sm font-medium`}
                      style={{ backgroundColor: `${styles.accent.includes('blue') ? '#3B82F6' : styles.accent.includes('purple') ? '#8B5CF6' : styles.accent.includes('gray') ? '#6B7280' : '#000000'}15` }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </section>
            )}

            {/* Education Section */}
            {educationArray.length > 0 && (
              <section className={`${styles.card} rounded-xl shadow-lg p-6`}>
                <h2 className={`text-2xl font-bold ${styles.accent} mb-4`}>Education</h2>
                <div className="space-y-3">
                  {educationArray.map((edu, index) => (
                    <div key={index} className="text-gray-700">
                      {edu}
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>

          {/* Right Column */}
          <div className="md:col-span-2 space-y-8">
            {/* Experience Section */}
            {experienceArray.length > 0 && (
              <section className={`${styles.card} rounded-xl shadow-lg p-6`}>
                <h2 className={`text-2xl font-bold ${styles.accent} mb-6`}>Experience</h2>
                <div className="space-y-4">
                  {experienceArray.map((exp, index) => (
                    <div key={index} className="border-l-4 border-opacity-30 pl-4 text-gray-700" style={{ borderColor: styles.accent.includes('blue') ? '#3B82F6' : styles.accent.includes('purple') ? '#8B5CF6' : styles.accent.includes('gray') ? '#6B7280' : '#000000' }}>
                      {exp}
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Projects Section */}
            {projectsArray.length > 0 && (
              <section className={`${styles.card} rounded-xl shadow-lg p-6`}>
                <h2 className={`text-2xl font-bold ${styles.accent} mb-6`}>Projects</h2>
                <div className="space-y-4">
                  {projectsArray.map((project, index) => (
                    <div key={index} className="border-l-4 border-opacity-30 pl-4 text-gray-700" style={{ borderColor: styles.accent.includes('blue') ? '#3B82F6' : styles.accent.includes('purple') ? '#8B5CF6' : styles.accent.includes('gray') ? '#6B7280' : '#000000' }}>
                      {project}
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioPreview;