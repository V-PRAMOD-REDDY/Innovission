import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import LoadingSpinner from './LoadingSpinner';
import { useGoogleSheetsTestimonials } from '../hooks/useGoogleSheets';

const TestimonialSlider = () => {
  const { testimonials, loading, error } = useGoogleSheetsTestimonials();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const intervalRef = useRef<number | null>(null);

  const startAutoSlide = () => {
    intervalRef.current = window.setInterval(() => {
      nextSlide();
    }, 5000);
  };

  const stopAutoSlide = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };

  useEffect(() => {
    if (testimonials.length > 0) {
      startAutoSlide();
    }
    return () => stopAutoSlide();
  }, [testimonials]);

  const nextSlide = () => {
    if (isAnimating || testimonials.length === 0) return;
    setIsAnimating(true);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const prevSlide = () => {
    if (isAnimating || testimonials.length === 0) return;
    setIsAnimating(true);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  if (loading) {
    return (
      <div className="relative bg-primary-50 py-16 px-4 sm:px-6">
        <div className="container-custom">
          <div className="flex justify-center items-center py-12">
            <LoadingSpinner size="lg" />
            <span className="ml-3 text-gray-600">Loading testimonials...</span>
          </div>
        </div>
      </div>
    );
  }

  if (error || testimonials.length === 0) {
    return null; // Hide testimonials section if there's an error or no data
  }

  return (
    <div className="relative bg-primary-50 py-16 px-4 sm:px-6 overflow-hidden">
      <div className="container-custom relative z-10">
        <div className="text-center mb-8">
          <span className="text-sm text-green-600">
            ✓ Testimonials loaded from Google Sheets
          </span>
        </div>
        
        <div 
          className="max-w-4xl mx-auto transition-opacity duration-300"
          style={{ opacity: isAnimating ? 0.5 : 1 }}
        >
          <div className="relative p-6 md:p-10 bg-white rounded-2xl shadow-lg">
            <Quote className="absolute top-6 left-6 h-10 w-10 text-primary-200 opacity-60" />
            
            <div className="pt-8 md:pt-6 pl-0 md:pl-6">
              <p className="text-lg md:text-xl text-gray-700 mb-8">
                "{testimonials[currentIndex].content}"
              </p>
              
              <div className="flex items-center">
                <img 
                  src={testimonials[currentIndex].avatar} 
                  alt={testimonials[currentIndex].name}
                  className="w-14 h-14 rounded-full object-cover mr-4 border-2 border-primary-500"
                />
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">{testimonials[currentIndex].name}</h4>
                  <p className="text-primary-600">{testimonials[currentIndex].role}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex justify-center mt-8 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                stopAutoSlide();
                setCurrentIndex(index);
                startAutoSlide();
              }}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex ? 'bg-primary-600 scale-110' : 'bg-gray-300'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
        
        <div className="absolute top-1/2 -translate-y-1/2 left-4 md:left-10 z-10">
          <button
            onClick={() => {
              stopAutoSlide();
              prevSlide();
              startAutoSlide();
            }}
            className="bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-6 w-6 text-gray-700" />
          </button>
        </div>
        
        <div className="absolute top-1/2 -translate-y-1/2 right-4 md:right-10 z-10">
          <button
            onClick={() => {
              stopAutoSlide();
              nextSlide();
              startAutoSlide();
            }}
            className="bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-6 w-6 text-gray-700" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSlider;