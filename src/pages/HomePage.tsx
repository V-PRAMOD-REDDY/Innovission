import React from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, BookOpen, Users, Briefcase, Layout, Award, ChevronRight } from 'lucide-react';

import HeroSection from '../components/HeroSection';
import SectionTitle from '../components/SectionTitle';
import TestimonialSlider from '../components/TestimonialSlider';
import CourseCard from '../components/CourseCard';
import LoadingSpinner from '../components/LoadingSpinner';

import { useGoogleSheetsCourses } from '../hooks/useGoogleSheets';

// Importing local images
import ncatBanner from '../assets/images/home/ncat-banner.jpg';
// Optional: You can add these if you want to show icons
// import telegramIcon from '../assets/images/home/telegram.png';
// import discordIcon from '../assets/images/home/discord.png';

const HomePage = () => {
  const { courses: coursesData, loading } = useGoogleSheetsCourses();
  const featuredCourses = coursesData.slice(0, 3);

  return (
    <>
      <HeroSection
        title="Learn. Grow. Succeed."
        subtitle="Join India's premier skill development platform for students and job seekers."
        ctaText="Join Our Community"
        ctaLink="https://www.instagram.com/innovissio.n?igsh=OHoxZXdsb245bnpp"
        secondaryCtaText="Explore Courses"
        secondaryCtaLink="/courses"
      />

      {/* Quick Links */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            <Link to="/courses" className="card p-6 flex flex-col items-center text-center hover:border-primary-500 hover:border-2 transition-all">
              <BookOpen className="h-10 w-10 text-primary-600 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Courses</h3>
              <p className="text-gray-600 mb-4">Explore our wide range of courses</p>
              <span className="text-primary-600 font-medium mt-auto">View Courses</span>
            </Link>

            <Link to="/portfolio" className="card p-6 flex flex-col items-center text-center hover:border-primary-500 hover:border-2 transition-all">
              <Layout className="h-10 w-10 text-primary-600 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Portfolio Builder</h3>
              <p className="text-gray-600 mb-4">Create a stunning professional portfolio</p>
              <span className="text-primary-600 font-medium mt-auto">Build Portfolio</span>
            </Link>

            <Link to="/jobs" className="card p-6 flex flex-col items-center text-center hover:border-primary-500 hover:border-2 transition-all">
              <Briefcase className="h-10 w-10 text-primary-600 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Jobs & Career</h3>
              <p className="text-gray-600 mb-4">Find opportunities and career guidance</p>
              <span className="text-primary-600 font-medium mt-auto">Explore Jobs</span>
            </Link>

            <Link to="/community" className="card p-6 flex flex-col items-center text-center hover:border-primary-500 hover:border-2 transition-all">
              <Users className="h-10 w-10 text-primary-600 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Community</h3>
              <p className="text-gray-600 mb-4">Join our thriving learning community</p>
              <span className="text-primary-600 font-medium mt-auto">Join Now</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionTitle 
            title="Featured Courses" 
            subtitle="Expand your skills with our most popular courses"
            align="center"
          />

          {loading ? (
            <div className="flex justify-center items-center py-12">
              <LoadingSpinner size="lg" />
              <span className="ml-3 text-gray-600">Loading courses from Google Sheets...</span>
            </div>
          ) : (
            <>
              {featuredCourses.length > 0 && (
                <div className="text-center mb-8">
                  <span className="text-sm text-green-600">
                    
                  </span>
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {featuredCourses.map(course => (
                  <CourseCard key={course.id} course={course} />
                ))}
              </div>
            </>
          )}

          <div className="text-center mt-12">
            <Link to="/courses" className="btn btn-primary inline-flex items-center">
              View All Courses
              <ChevronRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialSlider />

      {/* NCAT Campaign Banner */}
      <section className="bg-gradient-to-r from-primary-900 to-primary-800 py-16">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-8 md:mb-0 md:max-w-xl">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                NCAT 2025 Preparation Campaign
              </h2>
              <p className="text-primary-100 text-lg mb-6">
                Join our comprehensive preparation program for the Naukri Campus Aptitude Test 2025. Expert guidance, mock tests, and personalized feedback.
              </p>
              <Link to="/events" className="btn bg-white text-primary-900 hover:bg-gray-100">
                Learn More
              </Link>
            </div>
            <div className="flex-shrink-0">
              <img 
                src={ncatBanner} 
                alt="NCAT Preparation" 
                className="w-full md:w-80 h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Join Community Section */}
      <section id="join" className="section-padding bg-white">
        <div className="container-custom">
          <div className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-2xl p-8 md:p-12 text-center">
            <SectionTitle 
              title="Join Our Learning Community" 
              subtitle="Connect with like-minded learners, get support, and accelerate your growth"
              align="center"
            />

            <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
              <a 
                href="https://whatsapp.com/channel/0029VaBH3MTB4hdN4CjPtM36" 
                className="btn btn-primary inline-flex items-center justify-center"
                target="_blank"
                rel="noopener noreferrer"
              >
                Join Whatsapp Community
                <ExternalLink className="ml-2 h-4 w-4" />
              </a>

              <a 
                href="https://www.instagram.com/innovissio.n?igsh=OHoxZXdsb245bnpp" 
                className="btn bg-[#5865F2] text-white hover:bg-[#4752C4] inline-flex items-center justify-center"
                target="_blank"
                rel="noopener noreferrer"
              >
                Join Instagram Community
                <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
