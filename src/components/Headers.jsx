import React, { useState } from 'react';
import { Menu, X, ChevronDown, UserCheck, Phone, Mail } from 'lucide-react';
import { Navigate, useNavigate } from 'react-router-dom';

export default function Headers() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navigate = useNavigate();
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      {/* Top Contact Bar */}
      <div className="hidden md:block" style={{ backgroundColor: '#c62828' }}>
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-2 text-sm text-white">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>+91 7984368507</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>info@alpha-ms.xyz</span>
              </div>
            </div>
            <div className="text-sm">
              Employee Management Made Simple
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            {/* <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#c62828' }}>
              <UserCheck className="w-6 h-6 text-white" />
            </div> */}
                    <img
  className="w-10 h-10 rounded-lg flex items-center justify-center transform scale-150 mix-blend-multiply mx-3"
  src="icon.svg"
  alt="Logo"

/>
   
          <div>
              <h1 className="text-2xl font-bold" style={{ color: '#c62828' }}>Alpha-MS</h1>
              <p className="text-xs text-gray-600">Management Software</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <a href="/" className="text-gray-700 hover:text-red-600 font-medium transition-colors duration-200">
              Home
            </a>
            
            {/* Features Dropdown */}
            <div className="relative">
              <button 
                onClick={toggleDropdown}
                className="flex items-center space-x-1 text-gray-700 hover:text-red-600 font-medium transition-colors duration-200"
              >
                <span>Features</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-100 py-2">
                  <a href="#attendance" className="block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-red-600 transition-colors">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 rounded bg-red-50 flex items-center justify-center">
                        <UserCheck className="w-4 h-4" style={{ color: '#c62828' }} />
                      </div>
                      <div>
                        <div className="font-medium">Attendance Tracking</div>
                        <div className="text-sm text-gray-500">Real-time monitoring</div>
                      </div>
                    </div>
                  </a>
                  <a href="#leave" className="block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-red-600 transition-colors">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 rounded bg-red-50 flex items-center justify-center">
                        <UserCheck className="w-4 h-4" style={{ color: '#c62828' }} />
                      </div>
                      <div>
                        <div className="font-medium">Leave Management</div>
                        <div className="text-sm text-gray-500">Streamlined requests</div>
                      </div>
                    </div>
                  </a>
                  <a href="#events" className="block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-red-600 transition-colors">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 rounded bg-red-50 flex items-center justify-center">
                        <UserCheck className="w-4 h-4" style={{ color: '#c62828' }} />
                      </div>
                      <div>
                        <div className="font-medium">Event Management</div>
                        <div className="text-sm text-gray-500">Organize & schedule</div>
                      </div>
                    </div>
                  </a>
                </div>
              )}
            </div>

            <a href="/plan-details" className="text-gray-700 hover:text-red-600 font-medium transition-colors duration-200">
              Pricing
            </a>
            <a href="/ComponyAbout" className="text-gray-700 hover:text-red-600 font-medium transition-colors duration-200">
              About
            </a>
            <a href="/ContactUs" className="text-gray-700 hover:text-red-600 font-medium transition-colors duration-200">
              Contact
            </a>
          </div>

          {/* Desktop CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <button className="px-4 py-2 text-gray-700 font-medium hover:text-red-600 transition-colors duration-200" onClick={() => navigate('Login')}>
              Login
            </button>
            <button 
              className="px-6 py-2 rounded-lg text-white font-medium transition-all duration-200 hover:shadow-lg transform hover:scale-105"
              style={{ backgroundColor: '#c62828' }}
              onClick={() => navigate('/Trail')}
            >
              Free Trial
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={toggleMenu}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-gray-700" />
            ) : (
              <Menu className="w-6 h-6 text-gray-700" />
            )}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="lg:hidden pb-4 border-t border-gray-100">
            <div className="pt-4 space-y-4">
              <a href="#home" className="block py-2 text-gray-700 hover:text-red-600 font-medium transition-colors duration-200">
                Home
              </a>
              
              {/* Mobile Features Section */}
              <div className="space-y-2">
                <div className="text-gray-900 font-semibold">Features</div>
                <a href="#attendance" className="block pl-4 py-2 text-gray-600 hover:text-red-600 transition-colors duration-200">
                  Attendance Tracking
                </a>
                <a href="#leave" className="block pl-4 py-2 text-gray-600 hover:text-red-600 transition-colors duration-200">
                  Leave Management
                </a>
                <a href="#events" className="block pl-4 py-2 text-gray-600 hover:text-red-600 transition-colors duration-200">
                  Event Management
                </a>
              </div>
              
              <a href="#pricing" className="block py-2 text-gray-700 hover:text-red-600 font-medium transition-colors duration-200">
                Pricing
              </a>
              <a href="#about" className="block py-2 text-gray-700 hover:text-red-600 font-medium transition-colors duration-200">
                About
              </a>
              <a href="#contact" className="block py-2 text-gray-700 hover:text-red-600 font-medium transition-colors duration-200">
                Contact
              </a>
              
              {/* Mobile CTA Buttons */}
              <div className="pt-4 space-y-3 border-t border-gray-100">
                <button className="w-full py-3 text-gray-700 font-medium hover:text-red-600 transition-colors duration-200">
                  Login
                </button>
                <button 
                  className="w-full py-3 rounded-lg text-white font-medium transition-all duration-200 hover:shadow-lg"
                  style={{ backgroundColor: '#c62828' }} onClick={() => navigate('/Trail')}
                >
                  Start Free Trial
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}