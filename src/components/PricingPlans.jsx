import React, { useState } from 'react';
import { Check, Star, Zap, Crown } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function PricingPlans() {
  const [isYearly, setIsYearly] = useState(false);
const navigate = useNavigate();
  const plans = [
    {
      name: "Basic",
      icon: <Star className="w-5 h-5 sm:w-6 sm:h-6" />,
      monthlyPrice: 249,
      yearlyPrice: 2689,
      description: "Perfect for small teams getting started",
      features: [
        "Up to 10 employees",
        "Add only 1 stores",
        "Basic attendance tracking", 
        "Simple leave management",
        "Basic event scheduling",
        "Email support",
        "Mobile app access",
        "Standard reports"
      ],
      popular: false,
      color: "border-gray-200 hover:border-[#c22828]/30"
    },
    {
      name: "Pro",
      icon: <Zap className="w-5 h-5 sm:w-6 sm:h-6" />,
      monthlyPrice: 349,
      yearlyPrice: 3649,
      description: "Ideal for growing businesses",
      features: [
        "Up to 15 employees each store",
        "Add up to 2 stores",
        "Advanced attendance analytics",
        "Automated leave workflows",
        "Event management with notifications",
        "Priority support",
        "Custom reporting dashboard",
        "Integration with payroll systems",
        "Bulk operations",
        "Advanced permissions"
      ],
      popular: true,
      color: "border-[#c22828] ring-2 ring-[#c22828]"
    },
    {
      name: "Enterprise",
      icon: <Crown className="w-5 h-5 sm:w-6 sm:h-6" />,
      monthlyPrice: 499,
      yearlyPrice: 4999,
      description: "For large organizations with complex needs",
      features: [
        "Unlimited employees",
        "Maximum 5 Store",
        "AI-powered insights",
        "Custom leave policies",
        "Enterprise event management",
        "24/7 dedicated support",
        "White-label solution",
        "API access",
        "Single Sign-On (SSO)",
        "Advanced security features",
        "Custom integrations",
        "On-premise deployment option"
      ],
      popular: false,
      color: "border-gray-200 hover:border-[#c22828]/30"
    }
  ];

  const calculateSavings = (monthly, yearly) => {
    const monthlyCost = monthly * 12;
    const savings = monthlyCost - yearly;
    const percentage = Math.round((savings / monthlyCost) * 100);
    return percentage;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#c22828]/5 via-white to-[#c22828]/10 py-8 sm:py-12 lg:py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 bg-[#c22828] text-white px-3 sm:px-4 py-2 rounded-full text-sm font-medium mb-4 sm:mb-6">
            <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
            <span className="text-xs sm:text-sm">Alpha_MS Pricing Plans</span>
          </div>
          
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-[#c22828] to-[#a01f1f] bg-clip-text text-transparent mb-4 sm:mb-6 leading-tight">
            Choose Your Perfect Plan
          </h1>
          
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto mb-6 sm:mb-8 px-4 leading-relaxed">
            Streamline your workforce management with Alpha_MS - the complete solution for 
            <span className="font-semibold text-[#c22828]"> Attendance Tracking</span>, 
            <span className="font-semibold text-[#c22828]"> Leave Management</span>, and 
            <span className="font-semibold text-[#c22828]"> Event Management</span>
          </p>
          
          {/* Billing Toggle */}
          <div className="flex items-center justify-center gap-3 sm:gap-4 bg-gradient-to-r from-[#c22828]/10 to-[#c22828]/5 p-2 rounded-xl inline-flex border border-[#c22828]/20">
            <span className={`text-sm font-medium transition-colors ${!isYearly ? 'text-gray-900' : 'text-gray-500'}`}>
              Monthly
            </span>
            <button
              onClick={() => setIsYearly(!isYearly)}
              className="relative w-12 h-6 sm:w-14 sm:h-7 bg-[#c22828] rounded-full transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-[#c22828]/20"
            >
              <div className={`absolute top-0.5 sm:top-1 w-5 h-5 bg-white rounded-full transition-transform duration-300 ${isYearly ? 'translate-x-6 sm:translate-x-7' : 'translate-x-0.5 sm:translate-x-1'}`}></div>
            </button>
            <span className={`text-sm font-medium transition-colors ${isYearly ? 'text-gray-900' : 'text-gray-500'}`}>
              Yearly
            </span>
            {isYearly && (
              <span className="bg-green-100 text-green-800 text-xs font-bold px-2 sm:px-3 py-1 rounded-full ml-1 sm:ml-2">
                Save up to 25%
              </span>
            )}
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={plan.name}
              className={`relative bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 ${
                plan.popular ? 'scale-100 lg:scale-105 z-10 shadow-[#c22828]/20' : ''
              } ${plan.color} border-2 overflow-hidden group hover:shadow-[#c22828]/10`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-0 right-0 bg-[#c22828] text-white text-center py-2 sm:py-3 font-semibold text-xs sm:text-sm">
                  🎯 Most Popular Choice
                </div>
              )}
              
              <div className={`p-6 sm:p-8 ${plan.popular ? 'pt-12 sm:pt-16' : 'pt-6 sm:pt-8'}`}>
                {/* Plan Header */}
                <div className="flex items-center gap-3 mb-4 sm:mb-6">
                  <div className={`p-2 sm:p-3 rounded-xl ${plan.popular ? 'bg-[#c22828] text-white' : 'bg-gray-100 text-gray-700 group-hover:bg-[#c22828]/10 group-hover:text-[#c22828] transition-colors'}`}>
                    {plan.icon}
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900">{plan.name}</h3>
                    <p className="text-gray-600 text-xs sm:text-sm">{plan.description}</p>
                  </div>
                </div>

                {/* Pricing */}
                <div className="mb-6 sm:mb-8">
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
                      ₹{isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                    </span>
                    <span className="text-gray-600 text-sm sm:text-base">
                      /{isYearly ? 'year' : 'month'}
                    </span>
                  </div>
                  {isYearly && (
                    <div className="text-sm text-green-600 font-medium">
                      Save {calculateSavings(plan.monthlyPrice, plan.yearlyPrice)}% annually
                    </div>
                  )}
                </div>

                {/* Features */}
                <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <div className={`flex-shrink-0 w-4 h-4 sm:w-5 sm:h-5 rounded-full flex items-center justify-center mt-0.5 ${
                        plan.popular ? 'bg-[#c22828]' : 'bg-gray-200 group-hover:bg-[#c22828]/20'
                      } transition-colors`}>
                        <Check className={`w-2.5 h-2.5 sm:w-3 sm:h-3 ${plan.popular ? 'text-white' : 'text-gray-600 group-hover:text-[#c22828]'} transition-colors`} />
                      </div>
                      <span className="text-gray-700 leading-relaxed text-sm sm:text-base">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <button
                  className={`w-full py-3 sm:py-4 px-4 sm:px-6 rounded-xl font-semibold text-base sm:text-lg transition-all duration-300 ${
                    plan.popular
                      ? 'bg-[#c22828] text-white hover:bg-[#a01f1f] shadow-lg hover:shadow-xl transform hover:scale-105'
                      : 'bg-gray-100 text-gray-900 hover:bg-[#c22828] hover:text-white border-2 border-gray-200 hover:border-[#c22828] transform hover:scale-105'
                  }`}
                onClick={() => navigate('/Trail')}
                >
                  {plan.popular ? 'Start Free Trial' : 'Get Started'}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="text-center mt-12 sm:mt-16 space-y-4">
          <p className="text-gray-600 text-sm sm:text-base px-4">
            All plans include a <span className="font-semibold text-[#c22828]">7-day free trial</span> • No setup fees • Cancel anytime
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-xs sm:text-sm text-gray-500 px-4">
            <div className="flex items-center gap-2">
              <div className="w-2 sm:w-3 h-2 sm:h-3 bg-green-500 rounded-full"></div>
              99.9% Uptime SLA
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 sm:w-3 h-2 sm:h-3 bg-blue-500 rounded-full"></div>
              ISO 27001 Certified
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 sm:w-3 h-2 sm:h-3 bg-purple-500 rounded-full"></div>
              GDPR Compliant
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}