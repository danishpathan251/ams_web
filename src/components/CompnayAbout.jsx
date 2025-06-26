import React, { useState } from 'react';
import { 
  Users, 
  Target, 
  Award, 
  Heart, 
  Lightbulb, 
  Shield, 
  TrendingUp, 
  Globe, 
  Star,
  ChevronDown,
  ChevronUp,
  Menu,
  X
} from 'lucide-react';

export default function CompnayAbout() {
  const [expandedFaq, setExpandedFaq] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleFaq = (index) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "CEO & Founder",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b0c2?w=400&h=400&fit=crop&crop=face",
      description: "15+ years of industry experience leading innovative solutions."
    },
    {
      name: "Michael Chen",
      role: "CTO",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      description: "Technology visionary with expertise in scalable architecture."
    },
    {
      name: "Emily Rodriguez",
      role: "Head of Design",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
      description: "Award-winning designer focused on user-centered experiences."
    },
    {
      name: "David Kim",
      role: "Head of Marketing",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      description: "Strategic marketing leader driving brand growth and engagement."
    }
  ];

  const values = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Customer First",
      description: "We prioritize our customers' needs and success above all else, ensuring every interaction adds value."
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Innovation",
      description: "We continuously push boundaries and embrace new technologies to deliver cutting-edge solutions."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Integrity",
      description: "We maintain the highest standards of honesty and transparency in all our business practices."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Collaboration",
      description: "We believe in the power of teamwork and foster an environment of mutual respect and support."
    }
  ];

  const stats = [
    { number: "1+", label: "Years Experience" },
    { number: "100+", label: "Happy Clients" },
    { number: "200+", label: "Projects Completed" },
    { number: "10+", label: "Team Members" }
  ];

  const faqs = [
    {
      question: "What makes your company different?",
      answer: "We combine cutting-edge technology with personalized service, ensuring each client receives tailored solutions that drive real business results."
    },
    {
      question: "How long have you been in business?",
      answer: "We've been serving clients for over 10 years, building a reputation for excellence and innovation in our industry."
    },
    {
      question: "What industries do you serve?",
      answer: "We work across multiple industries including technology, healthcare, finance, retail, and manufacturing, adapting our expertise to each sector's unique needs."
    },
    {
      question: "How do you ensure quality?",
      answer: "We maintain rigorous quality standards through comprehensive testing, regular reviews, and continuous improvement processes."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Mobile Navigation */}
      <div className="lg:hidden bg-black text-white p-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">About Us</h1>
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
          <a href="#story" className="block py-2 hover:text-red-600">Our Story</a>
          <a href="#team" className="block py-2 hover:text-red-600">Team</a>
          <a href="#values" className="block py-2 hover:text-red-600">Values</a>
          <a href="#faq" className="block py-2 hover:text-red-600">FAQ</a>
        </div>
      )}

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-black via-gray-900 to-black text-white py-12 sm:py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6">
            About <span className="text-red-600">Us</span>
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto mb-8 px-4">
            We're passionate about creating innovative solutions that transform businesses and empower people to achieve their goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-red-600 hover:bg-red-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
              Learn More
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-black px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold transition-all duration-300">
              Contact Us
            </button>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-gray-50 py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-red-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 text-sm sm:text-base font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Our Story Section */}
      <div className="py-12 sm:py-16 lg:py-20" id="story">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black mb-6">
                Our <span className="text-red-600">Story</span>
              </h2>
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-6">
                Established in 2024, Alpha MS is a domestic Indian company headquartered in Vadodara, Gujarat. We began with a focused mission: to revolutionize attendance management for businesses of all sizes. What started as a local solution for companies in Vadodara has now expanded to serve clients worldwide.
              </p>
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-6">
                Alpha MS specializes in comprehensive attendance management software that seamlessly handles employee attendance tracking, leave request processing, and event management. Our innovative platform empowers organizations to streamline their HR operations while maintaining accuracy and efficiency in workforce management.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center">
                    <Award className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-gray-700 font-medium">Attendance Management</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center">
                    <TrendingUp className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-gray-700 font-medium">Leave & Event Processing</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-red-600 to-red-800 rounded-2xl p-8 sm:p-12 text-white">
                <Globe className="w-12 h-12 sm:w-16 sm:h-16 mb-6 mx-auto lg:mx-0" />
                <h3 className="text-xl sm:text-2xl font-bold mb-4 text-center lg:text-left">From Vadodara to Global</h3>
                <p className="text-red-100 leading-relaxed text-center lg:text-left">
                  Starting from our base in Vadodara, Gujarat, Alpha MS now serves clients globally with our cutting-edge attendance management solutions, transforming how organizations manage their workforce.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="bg-gray-50 py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black mb-4">
              Mission & <span className="text-red-600">Vision</span>
            </h2>
            <p className="text-gray-600 text-base sm:text-lg max-w-3xl mx-auto">
              Guiding principles that drive everything we do
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center mb-6">
                <Target className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-black mb-4">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To empower businesses and individuals with innovative technology solutions that drive growth, efficiency, and success. We strive to make complex technology simple and accessible for everyone.
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center mb-6">
                <Star className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-black mb-4">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                To be the global leader in innovative technology solutions, recognized for our commitment to excellence, integrity, and positive impact on the communities we serve.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="py-12 sm:py-16 lg:py-20" id="values">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black mb-4">
              Our <span className="text-red-600">Values</span>
            </h2>
            <p className="text-gray-600 text-base sm:text-lg max-w-3xl mx-auto">
              The core principles that guide our decisions and shape our culture
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <div className="text-white">
                    {value.icon}
                  </div>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-black mb-3">{value.title}</h3>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Team Section */}
      {/* <div className="bg-gray-50 py-12 sm:py-16 lg:py-20" id="team">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black mb-4">
              Meet Our <span className="text-red-600">Team</span>
            </h2>
            <p className="text-gray-600 text-base sm:text-lg max-w-3xl mx-auto">
              The talented individuals behind our success
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="w-24 h-24 rounded-full mx-auto mb-4 overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-black text-center mb-2">{member.name}</h3>
                <p className="text-red-600 font-medium text-center mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm text-center leading-relaxed">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div> */}

      {/* FAQ Section */}
      <div className="py-12 sm:py-16 lg:py-20" id="faq">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black mb-4">
              Frequently Asked <span className="text-red-600">Questions</span>
            </h2>
            <p className="text-gray-600 text-base sm:text-lg">
              Get answers to common questions about our company
            </p>
          </div>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors duration-200"
                >
                  <span className="text-base sm:text-lg font-semibold text-black">{faq.question}</span>
                  {expandedFaq === index ? (
                    <ChevronUp className="w-5 h-5 text-red-600" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-red-600" />
                  )}
                </button>
                {expandedFaq === index && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      {/* <div className="bg-gradient-to-r from-red-600 to-red-800 py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Ready to Work With Us?
          </h2>
          <p className="text-red-100 text-base sm:text-lg mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help transform your business with our innovative solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-red-600 hover:bg-gray-100 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
              Get Started
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-red-600 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold transition-all duration-300">
              Learn More
            </button>
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