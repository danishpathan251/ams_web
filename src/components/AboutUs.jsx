import React from 'react';
import { UserCheck, FileText, Calendar, Clock, Building, Users, CheckCircle, Award, Target, Zap } from 'lucide-react';

export default function AboutUs() {
  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full border-2 mb-6" style={{ borderColor: '#c62828', backgroundColor: '#fff5f5' }}>
            <span className="text-sm font-semibold" style={{ color: '#c62828' }}>About Alpha MS</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Revolutionizing Business 
            <span style={{ color: '#c62828' }}> Management</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Alpha MS is a comprehensive management software designed to streamline attendance tracking and workforce management for businesses of all sizes - from retail stores to multi-branch operations.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16">
          {/* Left Content */}
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Empowering Businesses Across Industries
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Whether you manage a single store, multiple branches, or a network of outlets, Alpha MS provides the tools you need to efficiently track employee attendance, manage leave requests, and coordinate events seamlessly.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                Our solution is built with modern businesses in mind, offering flexibility and scalability to grow with your organization while maintaining simplicity and ease of use.
              </p>
            </div>

            {/* Business Types */}
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center space-x-3 p-4 bg-white rounded-lg shadow-sm border border-gray-100">
                <Building className="w-8 h-8" style={{ color: '#c62828' }} />
                <div>
                  <div className="font-semibold text-gray-900">Retail Stores</div>
                  <div className="text-sm text-gray-500">Single & Multi-location</div>
                </div>
              </div>
              <div className="flex items-center space-x-3 p-4 bg-white rounded-lg shadow-sm border border-gray-100">
                <Users className="w-8 h-8" style={{ color: '#c62828' }} />
                <div>
                  <div className="font-semibold text-gray-900">Branch Networks</div>
                  <div className="text-sm text-gray-500">Centralized Management</div>
                </div>
              </div>
              <div className="flex items-center space-x-3 p-4 bg-white rounded-lg shadow-sm border border-gray-100">
                <Target className="w-8 h-8" style={{ color: '#c62828' }} />
                <div>
                  <div className="font-semibold text-gray-900">Outlets</div>
                  <div className="text-sm text-gray-500">Franchise Operations</div>
                </div>
              </div>
              <div className="flex items-center space-x-3 p-4 bg-white rounded-lg shadow-sm border border-gray-100">
                <Award className="w-8 h-8" style={{ color: '#c62828' }} />
                <div>
                  <div className="font-semibold text-gray-900">Enterprises</div>
                  <div className="text-sm text-gray-500">Large Organizations</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Features Visual */}
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
              <div className="text-center mb-8">
                <div className="w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4" style={{ backgroundColor: '#c62828' }}>
                  <UserCheck className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-2xl font-bold text-gray-900">Alpha MS Core</h4>
                <p className="text-gray-600">Complete Management Suite</p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center space-x-4 p-4 bg-red-50 rounded-lg">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#c62828' }}>
                    <UserCheck className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold text-gray-900">Attendance Management</div>
                    <div className="text-sm text-gray-600">Real-time tracking & reporting</div>
                  </div>
                  <CheckCircle className="w-5 h-5 text-green-500" />
                </div>

                <div className="flex items-center space-x-4 p-4 bg-red-50 rounded-lg">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#c62828' }}>
                    <FileText className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold text-gray-900">Leave Regulation</div>
                    <div className="text-sm text-gray-600">Automated approval workflows</div>
                  </div>
                  <CheckCircle className="w-5 h-5 text-green-500" />
                </div>

                <div className="flex items-center space-x-4 p-4 bg-red-50 rounded-lg">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#c62828' }}>
                    <Calendar className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold text-gray-900">Event Management</div>
                    <div className="text-sm text-gray-600">Schedule & coordinate activities</div>
                  </div>
                  <CheckCircle className="w-5 h-5 text-green-500" />
                </div>

                <div className="flex items-center space-x-4 p-4 bg-red-50 rounded-lg">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#c62828' }}>
                    <Clock className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold text-gray-900">Time Tracking</div>
                    <div className="text-sm text-gray-600">Precise work hour monitoring</div>
                  </div>
                  <CheckCircle className="w-5 h-5 text-green-500" />
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center">
              <Zap className="w-6 h-6" style={{ color: '#c62828' }} />
            </div>
            <div className="absolute -bottom-4 -left-4 w-10 h-10 rounded-lg bg-white shadow-lg flex items-center justify-center">
              <div className="w-5 h-5 rounded" style={{ backgroundColor: '#c62828' }}></div>
            </div>
          </div>
        </div>

        {/* Statistics Section */}
        <div className="bg-white rounded-2xl shadow-lg p-8 lg:p-12 mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Trusted by Businesses Worldwide</h3>
            <p className="text-gray-600 text-lg">Join thousands of companies that have streamlined their operations with Alpha MS</p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold mb-4" style={{ color: '#c62828' }}>100+</div>
              <div className="text-gray-600 font-medium">Active Businesses</div>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold mb-4" style={{ color: '#c62828' }}>5000+</div>
              <div className="text-gray-600 font-medium">Employees Managed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold mb-4" style={{ color: '#c62828' }}>99.9%</div>
              <div className="text-gray-600 font-medium">Uptime Guarantee</div>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold mb-4" style={{ color: '#c62828' }}>24/7</div>
              <div className="text-gray-600 font-medium">Customer Support</div>
            </div>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid lg:grid-cols-2 gap-12">
          <div className="bg-gradient-to-br from-red-50 to-white p-8 rounded-2xl border border-red-100">
            <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-6" style={{ backgroundColor: '#c62828' }}>
              <Target className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
            <p className="text-gray-600 leading-relaxed">
              To simplify workforce management for businesses by providing intuitive, reliable, and scalable software solutions that enhance productivity and streamline operations across all types of business environments.
            </p>
          </div>

          <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border border-gray-200">
            <div className="w-12 h-12 rounded-lg bg-gray-800 flex items-center justify-center mb-6">
              <Award className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
            <p className="text-gray-600 leading-relaxed">
              To become the leading management software platform that empowers businesses worldwide to efficiently manage their workforce, optimize operations, and achieve sustainable growth through innovative technology solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}