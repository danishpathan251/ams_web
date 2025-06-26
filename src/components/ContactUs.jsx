import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, Menu, X } from 'lucide-react';

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Mobile Navigation */}
      <div className="lg:hidden bg-black text-white p-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">Contact</h1>
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="p-2"
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-black text-white p-4 space-y-4">
          <a href="#contact" className="block py-2 hover:text-red-500">Contact Info</a>
          <a href="#form" className="block py-2 hover:text-red-500">Send Message</a>
          <a href="#location" className="block py-2 hover:text-red-500">Location</a>
        </div>
      )}

      {/* Header Section */}
      <div className="bg-gradient-to-r from-black via-gray-900 to-black text-white py-8 sm:py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-2 sm:mb-4">
            Contact <span className="text-red-600">Us</span>
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-2xl mx-auto px-4">
            Get in touch with us. We're here to help and answer any questions you might have.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          
          {/* Contact Information */}
          <div className="space-y-6 lg:space-y-8" id="contact">
            <div className="text-center lg:text-left">
              <h2 className="text-2xl sm:text-3xl font-bold text-black mb-4 lg:mb-6">Get In Touch</h2>
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                We'd love to hear from you. Send us a message and we'll respond as soon as possible.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-4 sm:space-y-6">
              {/* Phone */}
              <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-2 sm:space-y-0 sm:space-x-4 p-4 rounded-lg hover:bg-gray-50 transition-all duration-300">
                <div className="flex-shrink-0 w-12 h-12 bg-red-600 rounded-full flex items-center justify-center">
                  <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <div className="text-center sm:text-left">
                  <h3 className="text-lg font-semibold text-black">Phone</h3>
                  <p className="text-gray-600 text-sm sm:text-base">+91 7984368507</p>
                  {/* <p className="text-gray-600 text-sm sm:text-base">+1 (555) 987-6543</p> */}
                </div>
              </div>

              {/* Email */}
              <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-2 sm:space-y-0 sm:space-x-4 p-4 rounded-lg hover:bg-gray-50 transition-all duration-300">
                <div className="flex-shrink-0 w-12 h-12 bg-red-600 rounded-full flex items-center justify-center">
                  <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <div className="text-center sm:text-left">
                  <h3 className="text-lg font-semibold text-black">Email</h3>
                  <p className="text-gray-600 text-sm sm:text-base break-all">contact@alpha-ms.xyz</p>
                  <p className="text-gray-600 text-sm sm:text-base break-all">support@alpha.xyz</p>
                </div>
              </div>

              {/* Address */}
              <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-2 sm:space-y-0 sm:space-x-4 p-4 rounded-lg hover:bg-gray-50 transition-all duration-300">
                <div className="flex-shrink-0 w-12 h-12 bg-red-600 rounded-full flex items-center justify-center">
                  <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <div className="text-center sm:text-left">
                  <h3 className="text-lg font-semibold text-black">Address</h3>
                  <p className="text-gray-600 text-sm sm:text-base">Gorwa</p>
                  <p className="text-gray-600 text-sm sm:text-base">Vadodara, Gujarat, 390016</p>
                </div>
              </div>

              {/* Business Hours */}
              <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-2 sm:space-y-0 sm:space-x-4 p-4 rounded-lg hover:bg-gray-50 transition-all duration-300">
                <div className="flex-shrink-0 w-12 h-12 bg-red-600 rounded-full flex items-center justify-center">
                  <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <div className="text-center sm:text-left">
                  <h3 className="text-lg font-semibold text-black">Business Hours</h3>
                  <p className="text-gray-600 text-sm sm:text-base">Monday - Friday: 9:00 AM - 6:00 PM</p>
                  <p className="text-gray-600 text-sm sm:text-base">Saturday: 10:00 AM - 4:00 PM</p>
                  <p className="text-gray-600 text-sm sm:text-base">Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-50 rounded-xl lg:rounded-2xl p-6 sm:p-8 shadow-lg" id="form">
            <h3 className="text-xl sm:text-2xl font-bold text-black mb-4 sm:mb-6 text-center lg:text-left">
              Send us a message
            </h3>
            
            {isSubmitted ? (
              <div className="text-center py-6 sm:py-8">
                <CheckCircle className="w-12 h-12 sm:w-16 sm:h-16 text-red-600 mx-auto mb-4" />
                <h4 className="text-lg sm:text-xl font-semibold text-black mb-2">Message Sent!</h4>
                <p className="text-gray-600 text-sm sm:text-base">Thank you for reaching out. We'll get back to you soon.</p>
              </div>
            ) : (
              <div className="space-y-4 sm:space-y-6">
                {/* Name and Email Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-black mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 sm:px-4 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent transition-all duration-300 text-sm sm:text-base"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-black mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 sm:px-4 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent transition-all duration-300 text-sm sm:text-base"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-black mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 sm:px-4 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent transition-all duration-300 text-sm sm:text-base"
                    placeholder="What is this regarding?"
                  />
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-black mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    className="w-full px-3 py-2 sm:px-4 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent transition-all duration-300 resize-none text-sm sm:text-base"
                    placeholder="Tell us more about your inquiry..."
                  />
                </div>

                {/* Submit Button */}
                <button
                  onClick={handleSubmit}
                  className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3 sm:py-4 px-4 sm:px-6 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center justify-center space-x-2 text-sm sm:text-base"
                >
                  <Send className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span>Send Message</span>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Map/Location Section
      <div className="bg-gray-100 py-8 sm:py-12 lg:py-16" id="location">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-black mb-2 sm:mb-4">Find Us</h2>
            <p className="text-gray-600 text-base sm:text-lg">Visit our office or get directions</p>
          </div>
          
     
          <div className="bg-gray-300 h-64 sm:h-80 lg:h-96 rounded-xl lg:rounded-2xl flex items-center justify-center shadow-lg">
            <div className="text-center p-4">
              <MapPin className="w-12 h-12 sm:w-16 sm:h-16 text-red-600 mx-auto mb-4" />
              <p className="text-lg sm:text-xl font-semibold text-black mb-2">Interactive Map</p>
              <p className="text-gray-600 text-sm sm:text-base">Map integration would go here</p>
            </div>
          </div>


          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mt-8 sm:mt-12">
            <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow duration-300">
              <Phone className="w-8 h-8 text-red-600 mx-auto mb-3" />
              <h4 className="font-semibold text-black mb-1">Call Us</h4>
              <p className="text-gray-600 text-sm">+1 (555) 123-4567</p>
            </div>
            
            <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow duration-300">
              <Mail className="w-8 h-8 text-red-600 mx-auto mb-3" />
              <h4 className="font-semibold text-black mb-1">Email Us</h4>
              <p className="text-gray-600 text-sm break-all">contact@company.com</p>
            </div>
            
            <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow duration-300 sm:col-span-2 lg:col-span-1">
              <MapPin className="w-8 h-8 text-red-600 mx-auto mb-3" />
              <h4 className="font-semibold text-black mb-1">Visit Us</h4>
              <p className="text-gray-600 text-sm">123 Business Street</p>
            </div>
          </div>
        </div>
      </div> */}

      {/* Footer */}
      {/* <footer className="bg-black text-white py-6 sm:py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-300 text-sm sm:text-base">
            © 2025 Your Company Name. All rights reserved.
          </p>
        </div>
      </footer> */}
    </div>
  );
}