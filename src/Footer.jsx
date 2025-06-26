import React from 'react';
import { Mail, Phone, MapPin, Clock, Users, Building, Store } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-red-700 to-red-800 text-white relative overflow-hidden">
      {/* Top border accent */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-white via-red-600 to-white"></div>
      
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <h2 className="text-3xl font-bold text-white mb-2">Alpha MS</h2>
              <p className="text-red-100 text-sm italic">Smart Attendance Management</p>
            </div>
            <p className="text-red-100 text-sm leading-relaxed mb-4">
              Streamline your business operations with our comprehensive attendance management solution for outlets, branches, and stores.
            </p>
            <div className="flex space-x-3">
              <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white hover:text-red-700 transition-all duration-300 cursor-pointer">
                <Building className="w-4 h-4" />
              </div>
              <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white hover:text-red-700 transition-all duration-300 cursor-pointer">
                <Store className="w-4 h-4" />
              </div>
              <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white hover:text-red-700 transition-all duration-300 cursor-pointer">
                <Users className="w-4 h-4" />
              </div>
            </div>
          </div>

          {/* Products & Features */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4 relative">
              Features
              <div className="absolute bottom-0 left-0 w-10 h-0.5 bg-white"></div>
            </h3>
            <ul className="space-y-2">
              {[
                'Real-time Attendance Tracking',
                'Multi-location Management',
                'Employee Scheduling',
                'Biometric Integration',
                'Mobile App Support',
                'Detailed Reports & Analytics'
              ].map((item, index) => (
                <li key={index} className="text-red-100 text-sm hover:text-white transition-colors duration-200 cursor-pointer flex items-center">
                  <span className="w-1.5 h-1.5 bg-white rounded-full mr-3"></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4 relative">
              Industries
              <div className="absolute bottom-0 left-0 w-10 h-0.5 bg-white"></div>
            </h3>
            <ul className="space-y-2">
              {[
                'Retail Outlets',
                'Chain Stores',
                'Business Branches',
                'Franchises',
                'Corporate Offices',
                'Multi-location Businesses'
              ].map((item, index) => (
                <li key={index} className="text-red-100 text-sm hover:text-white transition-colors duration-200 cursor-pointer flex items-center">
                  <span className="w-1.5 h-1.5 bg-white rounded-full mr-3"></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4 relative">
              Contact Us
              <div className="absolute bottom-0 left-0 w-10 h-0.5 bg-white"></div>
            </h3>
            <div className="space-y-3">
              <div className="flex items-center text-red-100 text-sm hover:text-white transition-colors duration-200">
                <Mail className="w-4 h-4 mr-3 text-white" />
                <span>info@alphams.xyz</span>
              </div>
              <div className="flex items-center text-red-100 text-sm hover:text-white transition-colors duration-200">
                <Phone className="w-4 h-4 mr-3 text-white" />
                <span>+91 (798) 436-8507</span>
              </div>
              <div className="flex items-center text-red-100 text-sm hover:text-white transition-colors duration-200">
                <MapPin className="w-4 h-4 mr-3 text-white" />
                <span>Business District, City</span>
              </div>
              <div className="flex items-center text-red-100 text-sm hover:text-white transition-colors duration-200">
                <Clock className="w-4 h-4 mr-3 text-white" />
                <span>24/7 Support Available</span>
              </div>
            </div>

            {/* CTA Button */}
            <div className="mt-6">
              <button className="bg-white text-red-700 px-6 py-2 rounded-lg font-medium text-sm hover:bg-red-50 transition-all duration-300 transform hover:scale-105">
                Get Free Demo
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/20 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            
            {/* Copyright */}
            <div className="text-red-100 text-sm">
              © 2025 Alpha Ms. All rights reserved. | Attendance Management Software
            </div>

            {/* Footer Links */}
            <div className="flex flex-wrap justify-center md:justify-end space-x-6 text-sm">
              {[
                'Privacy Policy',
                'Terms of Service',
                'Support',
                'Documentation',
                'API'
              ].map((link, index) => (
                <a
                  key={index}
                  href="#"
                  className="text-red-100 hover:text-white transition-colors duration-200"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-4 text-center">
            <p className="text-red-200 text-xs">
              Trusted by 500+ businesses worldwide for seamless attendance management across multiple locations
            </p>
          </div>
        </div>
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-20 h-20 border border-white/20 rounded-full"></div>
        <div className="absolute top-32 right-20 w-16 h-16 border border-white/20 rounded-full"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 border border-white/20 rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 border border-white/20 rounded-full"></div>
      </div>
    </footer>
  );
};

export default Footer;