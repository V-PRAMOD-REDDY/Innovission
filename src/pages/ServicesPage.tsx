import React from 'react';
import { Check, Star, Clock, Users, Shield, Heart, ArrowRight, ExternalLink } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import SectionTitle from '../components/SectionTitle';

import LoadingSpinner from '../components/LoadingSpinner';
import ErrorMessage from '../components/ErrorMessage';
import { useGoogleSheetsServices } from '../hooks/useGoogleSheets';

const ServicesPage = () => {
  const { services: servicesData, loading, error } = useGoogleSheetsServices();

  const openWhatsApp = () => {
    window.open('https://wa.me/919876543210?text=Hi', '_blank');
  };

  return (
    <>
      <PageHeader 
        title="INNOVISSION Services" 
        subtitle="Professional career services designed for students, freshers, and job seekers"
        backgroundImage="https://images.pexels.com/photos/1181377/pexels-photo-1181377.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      />

      {/* Hero CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary-900 to-primary-800 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Career?</h2>
          <p className="text-xl text-primary-100 mb-8 max-w-3xl mx-auto">
            Get professional resume, LinkedIn optimization, portfolio websites, and more at student-friendly prices!
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button 
              onClick={openWhatsApp}
              className="btn bg-green-500 text-white hover:bg-green-600 flex items-center justify-center"
            >
              Start on WhatsApp - Send "Hi"
              <ExternalLink className="ml-2 h-4 w-4" />
            </button>
            <a href="#services" className="btn bg-white text-primary-900 hover:bg-gray-100">
              View All Services
            </a>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="section-padding bg-white">
        <div className="container-custom">
          <SectionTitle 
            title="Our Services" 
            subtitle="Affordable, professional services designed specifically for students and job seekers"
            align="center"
          />
          
          {/* Loading State */}
          {loading && (
            <div className="flex justify-center items-center py-12">
              <LoadingSpinner size="lg" />
              <span className="ml-3 text-gray-600">Loading services from Google Sheets...</span>
            </div>
          )}

          {/* Error State */}
          {error && (
            <ErrorMessage 
              message={error} 
              className="mb-8"
            />
          )}
          
          {!loading && (
            <>
              {servicesData.length > 0 && (
                <div className="text-center mb-8">
                  <span className="text-sm text-green-600">
                  </span>
                </div>
              )}
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
                {/* Basic Resume Design */}
                <div className="card group hover:-translate-y-1 p-6 border-2 border-transparent hover:border-blue-200">
                  <div className="p-4 mb-4 inline-block bg-blue-50 rounded-xl text-blue-600">
                    <Check className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-900 group-hover:text-blue-600 transition-colors">
                    Resume Design
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Get a clean, professional 1-page resume designed just for you. Delivered in PDF format within 24 hours.
                  </p>
                  <div className="mb-4">
                    <span className="font-bold text-2xl text-blue-600">₹12</span>
                    <span className="text-gray-500 ml-1">only</span>
                  </div>
                  <ul className="text-sm text-gray-600 mb-6 space-y-2">
                    <li className="flex items-center">
                      <Check className="h-4 w-4 text-green-500 mr-2" />
                      Resume layout & formatting
                    </li>
                    <li className="flex items-center">
                      <Check className="h-4 w-4 text-green-500 mr-2" />
                      Skill highlights
                    </li>
                    <li className="flex items-center">
                      <Check className="h-4 w-4 text-green-500 mr-2" />
                      24-hour delivery
                    </li>
                  </ul>
                  <button 
                    onClick={openWhatsApp}
                    className="btn bg-blue-600 text-white hover:bg-blue-700 w-full"
                  >
                    Get Resume @ ₹12
                  </button>
                </div>

                {/* Premium Resume + LinkedIn */}
                <div className="card group hover:-translate-y-1 p-6 border-2 border-primary-500 relative">
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-primary-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                      ⭐ Most Popular
                    </span>
                  </div>
                  <div className="p-4 mb-4 inline-block bg-primary-50 rounded-xl text-primary-600 mt-4">
                    <Star className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-900 group-hover:text-primary-600 transition-colors">
                    Premium Resume + LinkedIn
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Stand out with a recruiter-friendly resume + optimized LinkedIn profile. Ideal for students & freshers.
                  </p>
                  <div className="mb-4">
                    <span className="font-bold text-2xl text-primary-600">₹25</span>
                    <span className="text-gray-500 ml-1">complete package</span>
                  </div>
                  <ul className="text-sm text-gray-600 mb-6 space-y-2">
                    <li className="flex items-center">
                      <Check className="h-4 w-4 text-green-500 mr-2" />
                      Summary writing
                    </li>
                    <li className="flex items-center">
                      <Check className="h-4 w-4 text-green-500 mr-2" />
                      Headline optimization
                    </li>
                    <li className="flex items-center">
                      <Check className="h-4 w-4 text-green-500 mr-2" />
                      ATS-ready formatting
                    </li>
                  </ul>
                  <button 
                    onClick={openWhatsApp}
                    className="btn btn-primary w-full"
                  >
                    Upgrade to Premium
                  </button>
                </div>

                {/* Portfolio Website */}
                <div className="card group hover:-translate-y-1 p-6 border-2 border-transparent hover:border-green-200">
                  <div className="p-4 mb-4 inline-block bg-green-50 rounded-xl text-green-600">
                    <Users className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-900 group-hover:text-green-600 transition-colors">
                    Portfolio Website
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Build your personal brand with a digital portfolio website. Mobile-friendly, SEO-ready, delivered in 48 hrs.
                  </p>
                  <div className="mb-4">
                    <span className="font-bold text-2xl text-green-600">₹149</span>
                    <span className="text-gray-500 ml-1">professional site</span>
                  </div>
                  <ul className="text-sm text-gray-600 mb-6 space-y-2">
                    <li className="flex items-center">
                      <Check className="h-4 w-4 text-green-500 mr-2" />
                      Mobile-friendly design
                    </li>
                    <li className="flex items-center">
                      <Check className="h-4 w-4 text-green-500 mr-2" />
                      SEO-ready
                    </li>
                    <li className="flex items-center">
                      <Check className="h-4 w-4 text-green-500 mr-2" />
                      48-hour delivery
                    </li>
                  </ul>
                  <button 
                    onClick={openWhatsApp}
                    className="btn bg-green-600 text-white hover:bg-green-700 w-full"
                  >
                    Build My Website
                  </button>
                </div>

                {/* Mini Project + Source Code */}
                <div className="card group hover:-translate-y-1 p-6 border-2 border-transparent hover:border-purple-200">
                  <div className="p-4 mb-4 inline-block bg-purple-50 rounded-xl text-purple-600">
                    <Check className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-900 group-hover:text-purple-600 transition-colors">
                    Mini Project + Source Code
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Need a project for college or interviews? Includes source code, explanation PDF, and interview Q&A.
                  </p>
                  <div className="mb-4">
                    <span className="font-bold text-2xl text-purple-600">₹49</span>
                    <span className="text-gray-500 ml-1">/ ₹99</span>
                  </div>
                  <ul className="text-sm text-gray-600 mb-6 space-y-2">
                    <li className="flex items-center">
                      <Check className="h-4 w-4 text-green-500 mr-2" />
                      Python, Web, Java, ML
                    </li>
                    <li className="flex items-center">
                      <Check className="h-4 w-4 text-green-500 mr-2" />
                      Complete source code
                    </li>
                    <li className="flex items-center">
                      <Check className="h-4 w-4 text-green-500 mr-2" />
                      Interview Q&A included
                    </li>
                  </ul>
                  <button 
                    onClick={openWhatsApp}
                    className="btn bg-purple-600 text-white hover:bg-purple-700 w-full"
                  >
                    Get Project with Code
                  </button>
                </div>

                {/* Posters & Invitations */}
                <div className="card group hover:-translate-y-1 p-6 border-2 border-transparent hover:border-orange-200">
                  <div className="p-4 mb-4 inline-block bg-orange-50 rounded-xl text-orange-600">
                    <Check className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-900 group-hover:text-orange-600 transition-colors">
                    Posters & Invitations
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Custom posters, birthday cards, ID cards & invitations delivered fast. Social-media ready designs.
                  </p>
                  <div className="mb-4">
                    <span className="font-bold text-2xl text-orange-600">from ₹29</span>
                    <span className="text-gray-500 ml-1">per design</span>
                  </div>
                  <ul className="text-sm text-gray-600 mb-6 space-y-2">
                    <li className="flex items-center">
                      <Check className="h-4 w-4 text-green-500 mr-2" />
                      24-hour delivery
                    </li>
                    <li className="flex items-center">
                      <Check className="h-4 w-4 text-green-500 mr-2" />
                      JPG & PNG formats
                    </li>
                    <li className="flex items-center">
                      <Check className="h-4 w-4 text-green-500 mr-2" />
                      Editable on request
                    </li>
                  </ul>
                  <button 
                    onClick={openWhatsApp}
                    className="btn bg-orange-600 text-white hover:bg-orange-700 w-full"
                  >
                    Order My Design
                  </button>
                </div>

                {/* WhatsApp Marketing Course */}
                <div className="card group hover:-translate-y-1 p-6 border-2 border-transparent hover:border-teal-200">
                  <div className="p-4 mb-4 inline-block bg-teal-50 rounded-xl text-teal-600">
                    <Check className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-900 group-hover:text-teal-600 transition-colors">
                    WhatsApp Marketing Course
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Learn how to grow your business using WhatsApp marketing strategies. Step-by-step videos included.
                  </p>
                  <div className="mb-4">
                    <span className="font-bold text-2xl text-teal-600">₹99</span>
                    <span className="text-gray-500 ml-1">lifetime access</span>
                  </div>
                  <ul className="text-sm text-gray-600 mb-6 space-y-2">
                    <li className="flex items-center">
                      <Check className="h-4 w-4 text-green-500 mr-2" />
                      Step-by-step videos
                    </li>
                    <li className="flex items-center">
                      <Check className="h-4 w-4 text-green-500 mr-2" />
                      Templates & automation
                    </li>
                    <li className="flex items-center">
                      <Check className="h-4 w-4 text-green-500 mr-2" />
                      No tech skills needed
                    </li>
                  </ul>
                  <button 
                    onClick={openWhatsApp}
                    className="btn bg-teal-600 text-white hover:bg-teal-700 w-full"
                  >
                    Start Learning WhatsApp Marketing
                  </button>
                </div>

                {/* Career Combo Kit */}
                <div className="card group hover:-translate-y-1 p-6 border-2 border-accent-500 relative bg-gradient-to-br from-accent-50 to-accent-100">
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-accent-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                      Best Value
                    </span>
                  </div>
                  <div className="p-4 mb-4 inline-block bg-accent-200 rounded-xl text-accent-700 mt-4">
                    <Check className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-900 group-hover:text-accent-600 transition-colors">
                    Career Combo Kit
                  </h3>
                  <p className="text-gray-600 mb-4">
                    All-in-One Bundle: Resume + LinkedIn + Portfolio + Projects + Job Updates. Best value for job seekers!
                  </p>
                  <div className="mb-4">
                    <span className="font-bold text-2xl text-accent-600">₹99</span>
                    <span className="text-gray-500 ml-1 line-through">₹300+</span>
                    <span className="bg-red-100 text-red-600 px-2 py-1 rounded text-xs ml-2">Save 70%</span>
                  </div>
                  <ul className="text-sm text-gray-600 mb-6 space-y-2">
                    <li className="flex items-center">
                      <Check className="h-4 w-4 text-green-500 mr-2" />
                      Everything included
                    </li>
                    <li className="flex items-center">
                      <Check className="h-4 w-4 text-green-500 mr-2" />
                      Job updates & tips
                    </li>
                    <li className="flex items-center">
                      <Check className="h-4 w-4 text-green-500 mr-2" />
                      Maximum savings
                    </li>
                  </ul>
                  <button 
                    onClick={openWhatsApp}
                    className="btn bg-accent-600 text-white hover:bg-accent-700 w-full"
                  >
                    Grab the Combo Kit
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      </section>

      {/* Why Choose INNOVISSION */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <SectionTitle 
            title="Why Choose INNOVISSION?" 
            subtitle="We understand students and provide exactly what you need to succeed"
            align="center"
          />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            <div className="card p-6 text-center hover:-translate-y-1 transition-transform">
              <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-green-100 text-green-600 mb-4">
                <Check className="h-8 w-8" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Affordable Student Pricing</h3>
              <p className="text-gray-600">
                Services starting from just ₹7 - designed specifically for student budgets and needs.
              </p>
            </div>
            
            <div className="card p-6 text-center hover:-translate-y-1 transition-transform">
              <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-blue-100 text-blue-600 mb-4">
                <Clock className="h-8 w-8" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Fast Turnaround Time</h3>
              <p className="text-gray-600">
                Most services delivered within 24-48 hours. No long waiting periods - get results quickly.
              </p>
            </div>
            
            <div className="card p-6 text-center hover:-translate-y-1 transition-transform">
              <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-purple-100 text-purple-600 mb-4">
                <Users className="h-8 w-8" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Designed by Career Experts</h3>
              <p className="text-gray-600">
                Created by professionals who understand what recruiters and employers are looking for.
              </p>
            </div>
            
            <div className="card p-6 text-center hover:-translate-y-1 transition-transform">
              <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-orange-100 text-orange-600 mb-4">
                <Heart className="h-8 w-8" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Multilingual Support</h3>
              <p className="text-gray-600">
                Support available in Telugu, Tamil, Kannada, and English - communicate in your preferred language.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <SectionTitle 
            title="How It Works" 
            subtitle="Simple 4-step process to get your professional services"
            align="center"
          />
          
          <div className="grid md:grid-cols-4 gap-8 mt-12">
            <div className="text-center">
              <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-primary-600 text-white mb-4 text-xl font-bold">
                1
              </div>
              <h3 className="text-lg font-semibold mb-2">📱 Send "Hi" on WhatsApp</h3>
              <p className="text-gray-600">
                Start by sending a simple "Hi" message to our WhatsApp number to begin the process.
              </p>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-primary-600 text-white mb-4 text-xl font-bold">
                2
              </div>
              <h3 className="text-lg font-semibold mb-2">Fill Google Form</h3>
              <p className="text-gray-600">
                We'll send you a Google Form to collect your details and requirements for the service.
              </p>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-primary-600 text-white mb-4 text-xl font-bold">
                3
              </div>
              <h3 className="text-lg font-semibold mb-2">Secure Payment</h3>
              <p className="text-gray-600">
                Make payment securely via Razorpay or UPI - safe and trusted payment methods.
              </p>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-primary-600 text-white mb-4 text-xl font-bold">
                4
              </div>
              <h3 className="text-lg font-semibold mb-2">Get Your Service</h3>
              <p className="text-gray-600">
                Receive your completed service via WhatsApp within the promised timeframe.
              </p>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <button 
              onClick={openWhatsApp}
              className="btn btn-primary text-lg px-8 py-3 flex items-center mx-auto"
            >
              Start Now - Send "Hi" on WhatsApp
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      {/* 
        <section className="py-16 bg-primary-50">
          <div className="container-custom">
        <SectionTitle 
          title="What Our Students Say" 
          subtitle="Real success stories from students who transformed their careers with INNOVISSION"
          align="center"
        />
        
        <div className="grid md:grid-cols-3 gap-8 mt-12">
          <div className="card p-6">
            <div className="flex items-center mb-4">
          <img 
            src="https://images.pexels.com/photos/3775534/pexels-photo-3775534.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
            alt="Student testimonial" 
            className="w-12 h-12 rounded-full object-cover mr-4"
          />
          <div>
            <h4 className="font-semibold">Priya Sharma</h4>
            <p className="text-sm text-gray-600">Final Year CSE Student</p>
          </div>
            </div>
            <p className="text-gray-600">
          "Got my resume done for just ₹7 and landed 3 interview calls within a week! The quality was amazing and delivery was super fast. Highly recommend INNOVISSION!"
            </p>
          </div>
          
          <div className="card p-6">
            <div className="flex items-center mb-4">
          <img 
            src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
            alt="Student testimonial" 
            className="w-12 h-12 rounded-full object-cover mr-4"
          />
          <div>
            <h4 className="font-semibold">Rahul Kumar</h4>
            <p className="text-sm text-gray-600">Fresher Software Developer</p>
          </div>
            </div>
            <p className="text-gray-600">
          "The Career Combo Kit was the best investment I made. Got everything I needed - resume, LinkedIn, portfolio, and even job updates. Worth every penny!"
            </p>
          </div>
          
          <div className="card p-6">
            <div className="flex items-center mb-4">
          <img 
            src="https://images.pexels.com/photos/3813345/pexels-photo-3813345.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
            alt="Student testimonial" 
            className="w-12 h-12 rounded-full object-cover mr-4"
          />
          <div>
            <h4 className="font-semibold">Neha Gupta</h4>
            <p className="text-sm text-gray-600">MBA Student</p>
          </div>
            </div>
            <p className="text-gray-600">
          "Needed a project for my final semester. INNOVISSION provided complete source code with explanation. Saved me weeks of work and got great grades!"
            </p>
          </div>
        </div>
          </div>
        </section>
      */}

      {/* Final CTA */}
      <section className="py-16 bg-gradient-to-r from-primary-900 to-primary-800 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Boost Your Career?</h2>
          <p className="text-xl text-primary-100 mb-8 max-w-3xl mx-auto">
            Join thousands of students who have transformed their careers with INNOVISSION. Start your journey today!
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button 
              onClick={openWhatsApp}
              className="btn bg-green-500 text-white hover:bg-green-600 text-lg px-8 py-3 flex items-center justify-center"
            >
              Send "Hi" on WhatsApp Now
              <ExternalLink className="ml-2 h-5 w-5" />
            </button>
            <a href="#services" className="btn bg-white text-primary-900 hover:bg-gray-100 text-lg px-8 py-3">
              View All Services
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesPage;