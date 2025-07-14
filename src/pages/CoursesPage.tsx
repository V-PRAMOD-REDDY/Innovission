import React, { useState, useEffect } from 'react';
import { Search, Filter, X } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import SectionTitle from '../components/SectionTitle';
import CourseCard from '../components/CourseCard';
import coursesData from '../data/courses';
import CourseSectionImage from '../Assets/CourseSection-img.webp'

const CoursesPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [selectedLevel, setSelectedLevel] = useState<string>('');
  const [selectedPrice, setSelectedPrice] = useState<string>('');
  const [filteredCourses, setFilteredCourses] = useState(coursesData);
  
  const categories = [...new Set(coursesData.map(course => course.category))];
  const levels = [...new Set(coursesData.map(course => course.level))];

  useEffect(() => {
    let result = coursesData;
    
    // Filter by search term
    if (searchTerm) {
      result = result.filter(course => 
        course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        course.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    // Filter by category
    if (selectedCategory) {
      result = result.filter(course => course.category === selectedCategory);
    }
    
    // Filter by level
    if (selectedLevel) {
      result = result.filter(course => course.level === selectedLevel);
    }
    
    // Filter by price
    if (selectedPrice) {
      if (selectedPrice === 'free') {
        result = result.filter(course => course.price === 'Free' || course.price === 0);
      } else if (selectedPrice === '9') {
        result = result.filter(course => course.price === 9);
      } else if (selectedPrice === '11') {
        result = result.filter(course => course.price === 11);
      } else if (selectedPrice === '21') {
        result = result.filter(course => course.price === 21);
      }
    }
    
    setFilteredCourses(result);
  }, [searchTerm, selectedCategory, selectedLevel, selectedPrice]);

  const resetFilters = () => {
    setSearchTerm('');
    setSelectedCategory('');
    setSelectedLevel('');
    setSelectedPrice('');
  };

  const hasActiveFilters = searchTerm || selectedCategory || selectedLevel || selectedPrice;

  return (
    <>
      <PageHeader 
        title="Explore Courses" 
        subtitle="Expand your knowledge and skills with our diverse range of courses"
        backgroundImage={CourseSectionImage}
      />

      {/* Filter Section */}
      <section className="py-12 bg-white">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row gap-6 mb-8">
            {/* Search Bar */}
            <div className="flex-1">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search courses..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full p-3 pl-12 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                {searchTerm && (
                  <button
                    onClick={() => setSearchTerm('')}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    <X className="h-4 w-4" />
                  </button>
                )}
              </div>
            </div>
            
            {/* Category Filter */}
            <div className="w-full lg:w-48">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              >
                <option value="">All Categories</option>
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>
            
            {/* Level Filter */}
            <div className="w-full lg:w-48">
              <select
                value={selectedLevel}
                onChange={(e) => setSelectedLevel(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              >
                <option value="">All Levels</option>
                {levels.map(level => (
                  <option key={level} value={level}>{level}</option>
                ))}
              </select>
            </div>
            
            {/* Price Filter */}
            <div className="w-full lg:w-48">
              <select
                value={selectedPrice}
                onChange={(e) => setSelectedPrice(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              >
                <option value="">All Prices</option>
                <option value="free">Free</option>
                <option value="9">₹9</option>
                <option value="11">₹11</option>
                <option value="21">₹21</option>
              </select>
            </div>
          </div>
          
          {/* Active Filters */}
          {hasActiveFilters && (
            <div className="flex items-center mb-6">
              <span className="text-gray-600 mr-2">Active Filters:</span>
              <div className="flex flex-wrap gap-2">
                {searchTerm && (
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-gray-100">
                    Search: {searchTerm}
                    <button onClick={() => setSearchTerm('')} className="ml-1 text-gray-500 hover:text-gray-700">
                      <X className="h-3 w-3" />
                    </button>
                  </span>
                )}
                
                {selectedCategory && (
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-gray-100">
                    Category: {selectedCategory}
                    <button onClick={() => setSelectedCategory('')} className="ml-1 text-gray-500 hover:text-gray-700">
                      <X className="h-3 w-3" />
                    </button>
                  </span>
                )}
                
                {selectedLevel && (
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-gray-100">
                    Level: {selectedLevel}
                    <button onClick={() => setSelectedLevel('')} className="ml-1 text-gray-500 hover:text-gray-700">
                      <X className="h-3 w-3" />
                    </button>
                  </span>
                )}
                
                {selectedPrice && (
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-gray-100">
                    Price: {selectedPrice === 'free' ? 'Free' : `₹${selectedPrice}`}
                    <button onClick={() => setSelectedPrice('')} className="ml-1 text-gray-500 hover:text-gray-700">
                      <X className="h-3 w-3" />
                    </button>
                  </span>
                )}
                
                <button 
                  onClick={resetFilters}
                  className="inline-flex items-center px-3 py-1 rounded-full text-sm text-primary-600 border border-primary-600 hover:bg-primary-50"
                >
                  Clear All
                </button>
              </div>
            </div>
          )}
          
          {/* Results Count */}
          <div className="flex justify-between items-center mb-8">
            <p className="text-gray-600">
              Showing {filteredCourses.length} of {coursesData.length} courses
            </p>
            
            <div className="flex items-center">
              <Filter className="h-5 w-5 text-gray-500 mr-2" />
              <span className="text-gray-600">Sort by:</span>
              <select
                className="ml-2 p-2 border-none text-primary-600 focus:outline-none focus:ring-0 bg-transparent"
              >
                <option value="popular">Most Popular</option>
                <option value="newest">Newest</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
            </div>
          </div>
          
          {/* Courses Grid */}
          {filteredCourses.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredCourses.map(course => (
                <CourseCard key={course.id} course={course} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16 bg-gray-50 rounded-lg">
              <p className="text-gray-600 text-lg mb-4">No courses found matching your criteria</p>
              <button 
                onClick={resetFilters}
                className="btn btn-primary"
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-50">
        <div className="container-custom">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 text-center">
            <SectionTitle 
              title="Can't find what you're looking for?" 
              subtitle="Suggest a course you'd like us to create or find an instructor for your specific needs"
              align="center"
            />
            
            <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
              <a href="#suggest" className="btn btn-primary">
                Suggest a Course
              </a>
              <a href="#instructor" className="btn btn-outline">
                Find an Instructor
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CoursesPage;