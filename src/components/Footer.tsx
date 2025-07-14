import { NavLink } from 'react-router-dom';
import { Facebook, Instagram, Linkedin,  Youtube } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-6">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center mb-6">
              {/* Removed GraduationCap */}
              <span className="text-xl font-bold">INNOVISSION</span>
            </div>
            <p className="text-gray-400 mb-6">
              Empowering students and job seekers to grow through courses, career support, and community.
            </p>
            <div className="flex space-x-4">
              
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <NavLink to="/" className="text-gray-400 hover:text-white transition-colors">Home</NavLink>
              </li>
              <li>
                <NavLink to="/about" className="text-gray-400 hover:text-white transition-colors">About Us</NavLink>
              </li>
              <li>
                <NavLink to="/courses" className="text-gray-400 hover:text-white transition-colors">Courses</NavLink>
              </li>
              <li>
                <NavLink to="/services" className="text-gray-400 hover:text-white transition-colors">Services</NavLink>
              </li>
              <li>
                <NavLink to="/contact" className="text-gray-400 hover:text-white transition-colors">Contact Us</NavLink>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Resources</h3>
            <ul className="space-y-3">
              <li>
                <NavLink to="/portfolio" className="text-gray-400 hover:text-white transition-colors">Portfolio Builder</NavLink>
              </li>
              <li>
                <NavLink to="/events" className="text-gray-400 hover:text-white transition-colors">Events & Campaigns</NavLink>
              </li>
              <li>
                <NavLink to="/community" className="text-gray-400 hover:text-white transition-colors">Community</NavLink>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Blog</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Contact</h3>
            <ul className="space-y-3 text-gray-400">
              <li>Email: vpr59@gmail.com</li>
              <li>Phone: +91 9441663905</li>
              <li>Address: Kuppam, AP, India</li>
              <li className="pt-4">
                <a href="#newsletter" className="btn btn-outline border-white text-white hover:bg-white hover:text-gray-900 w-full text-center">
                  Subscribe to Newsletter
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm">
              &copy; {currentYear} Innovission. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-500 hover:text-gray-400 text-sm">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-400 text-sm">
                Terms of Service
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-400 text-sm">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;