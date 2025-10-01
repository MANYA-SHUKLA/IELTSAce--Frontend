import Link from 'next/link';
import FloatingImages from './FloatingImages';

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-slate-900 via-sky-900 to-emerald-900 text-white pt-16 md:pt-0 relative overflow-hidden">
      <FloatingImages theme="education" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 md:py-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Achieve Your <span className="text-orange-400">Dream</span> IELTS Score
            </h1>
            <p className="text-lg sm:text-xl text-slate-300 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Join thousands of successful students with our proven methods, 
              expert instructors, and AI-powered learning platform. 
              Get the band score you need for your future.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center lg:justify-start">
              <Link 
                href="/free-trial" 
                className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-bold text-base sm:text-lg hover:from-orange-600 hover:to-orange-700 transition duration-300 text-center shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                Start Free Trial
              </Link>
              <Link
                href="/free-materials"
                className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-bold text-base sm:text-lg hover:from-orange-600 hover:to-orange-700 transition duration-300 text-center shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                Free Materials
              </Link>
              <Link 
                href="/courses" 
                className="border-2 border-emerald-400 text-emerald-400 px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-bold text-base sm:text-lg hover:bg-emerald-400 hover:text-slate-900 transition duration-300 text-center"
              >
                View Courses
              </Link>
            </div>
            <div className="grid grid-cols-3 gap-4 pt-6 max-w-md mx-auto lg:mx-0">
              <div className="text-center">
                <div className="text-xl sm:text-2xl font-bold text-orange-400">98%</div>
                <div className="text-slate-400 text-xs sm:text-sm">Success Rate</div>
              </div>
              <div className="text-center">
                <div className="text-xl sm:text-2xl font-bold text-emerald-400">5,000+</div>
                <div className="text-slate-400 text-xs sm:text-sm">Students Trained</div>
              </div>
              <div className="text-center">
                <div className="text-xl sm:text-2xl font-bold text-sky-400">7.5</div>
                <div className="text-slate-400 text-xs sm:text-sm">Average Band Score</div>
              </div>
            </div>
          </div>

          {/* Right Content - Image/Illustration */}
          <div className="relative mt-8 lg:mt-0 max-w-md mx-auto lg:max-w-none">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 sm:p-6 transform rotate-1 lg:rotate-3 hover:rotate-0 transition duration-500">
              <div className="bg-white rounded-xl p-3 sm:p-4 shadow-2xl">
                <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-lg p-4 sm:p-6 space-y-4 sm:space-y-5">
                  {/* Chat Header */}
                  <div className="flex items-center justify-between border-b border-slate-200 pb-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-gradient-to-r from-emerald-500 to-sky-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-sm font-bold">AI</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-800 text-sm">IELTS Speaking Assistant</h4>
                        <div className="flex items-center space-x-1">
                          <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                          <span className="text-xs text-slate-500">Online</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex space-x-1">
                      <div className="w-3 h-3 bg-emerald-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-orange-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    </div>
                  </div>
                  
                  {/* Chat Messages */}
                  <div className="space-y-4">
                    {/* AI Message */}
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-gradient-to-r from-emerald-500 to-sky-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-white text-xs">🤖</span>
                      </div>
                      <div className="bg-gradient-to-r from-emerald-500 to-sky-500 text-white p-3 rounded-2xl rounded-tl-md max-w-xs shadow-lg">
                        <p className="text-sm sm:text-base font-medium">Welcome to your IELTS speaking test!</p>
                        <div className="flex items-center mt-2 space-x-1">
                          <div className="w-1 h-1 bg-white/60 rounded-full animate-pulse"></div>
                          <div className="w-1 h-1 bg-white/60 rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
                          <div className="w-1 h-1 bg-white/60 rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
                        </div>
                      </div>
                    </div>
                    
                    {/* User Message */}
                    <div className="flex items-start space-x-3 justify-end">
                      <div className="bg-white border border-slate-200 text-slate-800 p-3 rounded-2xl rounded-tr-md max-w-xs shadow-md">
                        <p className="text-sm sm:text-base">Ready to begin my assessment.</p>
                        <div className="flex justify-end mt-1">
                          <span className="text-xs text-slate-400">✓✓</span>
                        </div>
                      </div>
                      <div className="w-6 h-6 bg-gradient-to-r from-orange-400 to-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-white text-xs">👤</span>
                      </div>
                    </div>
                    
                    {/* AI Message */}
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-gradient-to-r from-emerald-500 to-sky-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-white text-xs">🤖</span>
                      </div>
                      <div className="bg-gradient-to-r from-emerald-500 to-sky-500 text-white p-3 rounded-2xl rounded-tl-md max-w-xs shadow-lg">
                        <p className="text-sm sm:text-base font-medium">Describe a book that influenced you...</p>
                        <div className="flex items-center mt-2 space-x-1">
                          <span className="text-xs text-white/80">🎯 Speaking Task</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Typing Indicator */}
                  <div className="flex items-center space-x-2 px-3 py-2 bg-white rounded-full border border-slate-200 w-fit">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                      <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                    </div>
                    <span className="text-xs text-slate-500">AI is analyzing...</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-3 py-1 sm:px-4 sm:py-2 rounded-full font-bold text-xs sm:text-sm shadow-lg">
              AI Powered
            </div>
            <div className="absolute -bottom-2 -left-2 sm:-bottom-4 sm:-left-4 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white px-3 py-1 sm:px-4 sm:py-2 rounded-full font-bold text-xs sm:text-sm shadow-lg">
              Live Classes
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;