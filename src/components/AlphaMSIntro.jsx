import React from 'react';
import { ChevronRight, Calendar, Clock, Users, Award, UserCheck, FileText } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function AlphaMSIntro() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4 py-8 lg:py-16">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Side - Content */}
                      <div className="space-y-6 lg:space-y-8 order-1 lg:order-1">
            {/* Header */}
            <div className="space-y-4">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-red-50 border border-red-200">
                <span className="text-sm font-medium text-red-900">Welcome to Innovation</span>
              </div>
              
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight">
                <span style={{ color: '#c62828' }}>Alpha MS</span>
                <br />
                <span className="text-gray-700">Software</span>
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed">
                Complete employee management solution for attendance tracking, leave management, and event coordination.
              </p>
            </div>

            {/* Features */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#c62828' }}>
                  <UserCheck className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Attendance Tracking</h3>
                  <p className="text-sm text-gray-600">Real-time employee attendance monitoring</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#c62828' }}>
                  <FileText className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Leave Management</h3>
                  <p className="text-sm text-gray-600">Streamlined leave requests and approvals</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#c62828' }}>
                  <Calendar className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Event Management</h3>
                  <p className="text-sm text-gray-600">Organize and schedule company events</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#c62828' }}>
                  <Clock className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Time Tracking</h3>
                  <p className="text-sm text-gray-600">Accurate work hours and productivity</p>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 py-6 border-t border-gray-200">
              <div className="text-center">
                <div className="text-2xl lg:text-3xl font-bold" style={{ color: '#c62828' }}>500+</div>
                <div className="text-sm text-gray-600">Employees Managed</div>
              </div>
              <div className="text-center">
                <div className="text-2xl lg:text-3xl font-bold" style={{ color: '#c62828' }}>99%</div>
                <div className="text-sm text-gray-600">Attendance Accuracy</div>
              </div>
              <div className="text-center">
                <div className="text-2xl lg:text-3xl font-bold" style={{ color: '#c62828' }}>50+</div>
                <div className="text-sm text-gray-600">Companies Trust</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg text-white font-medium transition-all duration-200 hover:shadow-lg transform hover:scale-105"
                style={{ backgroundColor: '#c62828' }}
                onClick={() => navigate('/Trail')}
              >
                Start Free Trial
                <ChevronRight className="ml-2 w-4 h-4" />
              </button>
              
              <button className="inline-flex items-center justify-center px-6 py-3 rounded-lg border-2 text-gray-700 font-medium transition-all duration-200 hover:bg-gray-50" style={{ borderColor: '#c62828' }}>
                View Demo
              </button>
            </div>
          </div>

          {/* Right Side - Mobile with Software UI */}
          <div className="order-2 lg:order-2">
            <div className="relative max-w-sm mx-auto">
              {/* Mobile Frame */}
              <div className="relative">
                {/* Phone Outline */}
                <div className="bg-gray-900 rounded-[2.5rem] p-2 shadow-2xl">
                  <div className="bg-black rounded-[2rem] p-1">
                    <div className="bg-white rounded-[1.5rem] overflow-hidden aspect-[9/19]">
                      {/* Status Bar */}
                      <div className="flex justify-between items-center px-4 py-2 bg-gray-50">
                        <div className="flex items-center space-x-1">
                          <div className="flex space-x-1">
                            <div className="w-1 h-1 rounded-full bg-gray-400"></div>
                            <div className="w-1 h-1 rounded-full bg-gray-400"></div>
                            <div className="w-1 h-1 rounded-full bg-gray-400"></div>
                          </div>
                        </div>
                        <div className="text-xs font-semibold text-gray-800">9:41</div>
                        <div className="flex items-center space-x-1">
                          <div className="w-4 h-2 border border-gray-400 rounded-sm">
                            <div className="w-3 h-1 bg-green-500 rounded-sm"></div>
                          </div>
                        </div>
                      </div>

                      {/* App Header */}
                      <div className="px-4 py-3" style={{ backgroundColor: '#c62828' }}>
                        <div className="flex items-center justify-between">
                          <h2 className="text-lg font-bold text-white">Alpha MS</h2>
                          <div className="w-8 h-8 rounded-full bg-white bg-opacity-20 flex items-center justify-center">
                            <UserCheck className="w-4 h-4 text-white" />
                          </div>
                        </div>
                        <p className="text-red-100 text-sm mt-1">Employee Management</p>
                      </div>

                      {/* Dashboard Content */}
                      <div className="p-4 space-y-4 bg-gray-50 flex-1">
                        {/* Stats Cards */}
                        <div className="grid grid-cols-2 gap-3">
                          <div className="bg-white rounded-lg p-3 shadow-sm">
                            <div className="text-xs text-gray-500">Present Today</div>
                            <div className="text-lg font-bold" style={{ color: '#c62828' }}>124</div>
                          </div>
                          <div className="bg-white rounded-lg p-3 shadow-sm">
                            <div className="text-xs text-gray-500">On Leave</div>
                            <div className="text-lg font-bold" style={{ color: '#c62828' }}>8</div>
                          </div>
                        </div>

                        {/* Attendance Chart */}
                        <div className="bg-white rounded-lg p-3 shadow-sm">
                          <div className="text-sm font-medium text-gray-700 mb-2">Weekly Attendance</div>
                          <div className="flex items-end justify-between h-16">
                            <div className="w-4 rounded-t" style={{ backgroundColor: '#c62828', height: '90%' }}></div>
                            <div className="w-4 rounded-t" style={{ backgroundColor: '#c62828', height: '85%' }}></div>
                            <div className="w-4 rounded-t" style={{ backgroundColor: '#c62828', height: '95%' }}></div>
                            <div className="w-4 rounded-t" style={{ backgroundColor: '#c62828', height: '80%' }}></div>
                            <div className="w-4 rounded-t" style={{ backgroundColor: '#c62828', height: '88%' }}></div>
                            <div className="w-4 bg-gray-200 rounded-t" style={{ height: '60%' }}></div>
                          </div>
                        </div>

                        {/* Menu Items */}
                        <div className="space-y-2">
                          <div className="bg-white rounded-lg p-3 shadow-sm flex items-center justify-between">
                            <div className="flex items-center space-x-3">
                              <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#c62828' }}>
                                <UserCheck className="w-4 h-4 text-white" />
                              </div>
                              <div>
                                <div className="text-sm font-medium text-gray-800">Attendance</div>
                                <div className="text-xs text-gray-500">Mark & Track</div>
                              </div>
                            </div>
                            <ChevronRight className="w-4 h-4 text-gray-400" />
                          </div>

                          <div className="bg-white rounded-lg p-3 shadow-sm flex items-center justify-between">
                            <div className="flex items-center space-x-3">
                              <div className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center">
                                <FileText className="w-4 h-4 text-gray-600" />
                              </div>
                              <div>
                                <div className="text-sm font-medium text-gray-800">Leave Requests</div>
                                <div className="text-xs text-gray-500">3 Pending</div>
                              </div>
                            </div>
                            <ChevronRight className="w-4 h-4 text-gray-400" />
                          </div>

                          <div className="bg-white rounded-lg p-3 shadow-sm flex items-center justify-between">
                            <div className="flex items-center space-x-3">
                              <div className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center">
                                <Calendar className="w-4 h-4 text-gray-600" />
                              </div>
                              <div>
                                <div className="text-sm font-medium text-gray-800">Events</div>
                                <div className="text-xs text-gray-500">Upcoming</div>
                              </div>
                            </div>
                            <ChevronRight className="w-4 h-4 text-gray-400" />
                          </div>
                        </div>
                      </div>

                      {/* Bottom Navigation */}
                      <div className="bg-white border-t border-gray-200 px-4 py-2">
                        <div className="flex justify-around">
                          <div className="p-2">
                            <div className="w-6 h-6 rounded" style={{ backgroundColor: '#c62828' }}></div>
                          </div>
                          <div className="p-2">
                            <div className="w-6 h-6 rounded bg-gray-300"></div>
                          </div>
                          <div className="p-2">
                            <div className="w-6 h-6 rounded bg-gray-300"></div>
                          </div>
                          <div className="p-2">
                            <div className="w-6 h-6 rounded bg-gray-300"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center">
                  <div className="w-6 h-6 rounded-full" style={{ backgroundColor: '#c62828' }}></div>
                </div>
                
                <div className="absolute -bottom-4 -left-4 w-10 h-10 rounded-lg bg-white shadow-lg flex items-center justify-center">
                  <div className="w-5 h-5 rounded bg-gradient-to-r" style={{ background: 'linear-gradient(45deg, #c62828, #e57373)' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}