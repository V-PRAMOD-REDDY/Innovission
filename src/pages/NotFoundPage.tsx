import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Search, ArrowLeft } from 'lucide-react';

const NotFoundPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-16 bg-gray-50">
      <div className="max-w-md w-full text-center">
        <h1 className="text-9xl font-bold text-primary-600">404</h1>
        <h2 className="text-3xl font-semibold text-gray-900 mt-8 mb-4">Page Not Found</h2>
        <p className="text-gray-600 mb-8">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        
        <div className="space-y-4">
          <Link 
            to="/" 
            className="btn btn-primary w-full flex items-center justify-center"
          >
            <Home className="mr-2 h-5 w-5" />
            Back to Home
          </Link>
          
          <Link 
            to="#" 
            onClick={() => window.history.back()} 
            className="btn btn-outline w-full flex items-center justify-center"
          >
            <ArrowLeft className="mr-2 h-5 w-5" />
            Go Back
          </Link>
        </div>
        
        <div className="mt-12">
          <p className="text-gray-600 mb-4">Or try searching:</p>
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className="w-full p-3 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;