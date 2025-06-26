import React, { useState } from 'react';
import { Download, CheckCircle, Smartphone, ArrowRight } from 'lucide-react';

export default function TrialDownloadApp() {
  const [isDownloaded, setIsDownloaded] = useState(false);
  const [downloadProgress, setDownloadProgress] = useState(0);

  const handleDownloadAPK = () => {
    // Simulate download progress
    setDownloadProgress(0);
    const interval = setInterval(() => {
      setDownloadProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsDownloaded(true);
          return 100;
        }
        return prev + 10;
      });
    }, 200);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">Start Your 7-Day Free Trial</h1>
          <p className="text-xl text-gray-600">Download our app and get instant access to all premium features</p>
        </div>

        {/* Main Content */}
        <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12">
          <div className="text-center">
            {/* Step Icon */}
            <div className="mb-8">
              <div className="w-24 h-24 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Download className="w-12 h-12 text-red-600" />
              </div>
              <h2 className="text-3xl font-bold text-black mb-4">Download Android APK</h2>
              <p className="text-lg text-gray-600 mb-8">Get started with our mobile app - no registration required to download!</p>
            </div>

            {/* Download Button */}
            {!isDownloaded && downloadProgress === 0 && (
              <button
                onClick={handleDownloadAPK}
                className="px-12 py-4 bg-red-600 text-white text-lg font-semibold rounded-lg hover:bg-red-700 transform hover:scale-105 transition-all duration-300 shadow-lg"
              >
                <Download className="w-6 h-6 inline mr-3" />
                Download APK File
              </button>
            )}

            {/* Download Progress */}
            {downloadProgress > 0 && downloadProgress < 100 && (
              <div className="max-w-md mx-auto">
                <div className="bg-gray-200 rounded-full h-4 mb-4">
                  <div 
                    className="bg-red-600 h-4 rounded-full transition-all duration-300"
                    style={{ width: `${downloadProgress}%` }}
                  ></div>
                </div>
                <p className="text-gray-600">Downloading... {downloadProgress}%</p>
              </div>
            )}

            {/* Download Complete */}
            {isDownloaded && (
              <div className="max-w-2xl mx-auto">
                <div className="bg-green-50 p-6 rounded-lg mb-8">
                  <CheckCircle className="w-12 h-12 text-green-600 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-green-800 mb-2">Download Complete!</h3>
                  <p className="text-green-700">APK file has been downloaded successfully. Install the app to continue.</p>
                </div>

                {/* Next Steps */}
                <div className="bg-red-50 p-8 rounded-lg">
                  <h3 className="text-xl font-bold text-black mb-6">What happens next?</h3>
                  
                  <div className="grid md:grid-cols-3 gap-6 text-left">
                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center font-bold text-sm">1</div>
                      <div>
                        <h4 className="font-semibold text-black mb-1">Install App</h4>
                        <p className="text-sm text-gray-600">Install the downloaded APK file on your Android device</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center font-bold text-sm">2</div>
                      <div>
                        <h4 className="font-semibold text-black mb-1">Signup as Admin</h4>
                        <p className="text-sm text-gray-600">Create your admin account directly in the app</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center font-bold text-sm">3</div>
                      <div>
                        <h4 className="font-semibold text-black mb-1">Choose Plan</h4>
                        <p className="text-sm text-gray-600">Select your 7-day free trial or any paid plan</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Features Section */}
        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Smartphone className="w-6 h-6 text-red-600" />
            </div>
            <h3 className="font-semibold text-black mb-2">Mobile Optimized</h3>
            <p className="text-sm text-gray-600">Designed specifically for Android devices with smooth performance</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-6 h-6 text-red-600" />
            </div>
            <h3 className="font-semibold text-black mb-2">7-Day Free Trial</h3>
            <p className="text-sm text-gray-600">Full access to all premium features for 7 days, no credit card required</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <ArrowRight className="w-6 h-6 text-red-600" />
            </div>
            <h3 className="font-semibold text-black mb-2">Easy Setup</h3>
            <p className="text-sm text-gray-600">Quick installation and setup process - get started in minutes</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Download className="w-6 h-6 text-red-600" />
            </div>
            <h3 className="font-semibold text-black mb-2">Direct Download</h3>
            <p className="text-sm text-gray-600">No app store required - download directly from our secure servers</p>
          </div>
        </div>

        {/* Trial Benefits */}
        <div className="mt-16 bg-black text-white rounded-2xl p-8 lg:p-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Why Start with Our Free Trial?</h2>
            <p className="text-gray-300 text-lg">Experience everything our platform has to offer, completely free for 7 days</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-3 text-red-400">✓ Full Feature Access</h3>
              <p className="text-gray-300">Access all premium features during your trial period</p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-3 text-red-400">✓ No Credit Card Required</h3>
              <p className="text-gray-300">Start your trial without any payment information</p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-3 text-red-400">✓ Cancel Anytime</h3>
              <p className="text-gray-300">No commitments - cancel before trial ends if not satisfied</p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-3 text-red-400">✓ Premium Support</h3>
              <p className="text-gray-300">Get help from our support team during your trial</p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-3 text-red-400">✓ Easy Plan Selection</h3>
              <p className="text-gray-300">Choose from multiple plans directly in the app</p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-3 text-red-400">✓ Instant Activation</h3>
              <p className="text-gray-300">Your trial starts immediately after signup in the app</p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-12 text-center text-gray-500">
          <p className="text-sm">
            By downloading our app, you agree to our Terms of Service and Privacy Policy. 
            The app requires Android 6.0 or higher.
          </p>
        </div>
      </div>
    </div>
  );
}