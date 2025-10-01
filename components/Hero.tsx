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
            <div className="transform rotate-1 lg:rotate-3 hover:rotate-0 transition duration-500">
              {/* Smartphone Frame */}
              <div className="relative w-72 h-[480px] bg-gradient-to-b from-slate-800 to-slate-900 rounded-[2.5rem] p-2 shadow-2xl">
                {/* Phone Notch */}
                <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-20 h-6 bg-black rounded-full"></div>
                
                {/* Screen */}
                <div className="w-full h-full bg-gradient-to-b from-slate-50 to-white rounded-[2rem] overflow-hidden relative">
                  {/* Status Bar */}
                  <div className="flex justify-between items-center px-6 py-3 bg-white border-b border-slate-100">
                    <div className="flex items-center space-x-2">
                      <div className="flex space-x-1">
                        <div className="w-1 h-1 bg-slate-400 rounded-full"></div>
                        <div className="w-1 h-1 bg-slate-400 rounded-full"></div>
                        <div className="w-1 h-1 bg-slate-600 rounded-full"></div>
                      </div>
                      <span className="text-xs font-medium text-slate-700">IELTS AI</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <span className="text-xs text-slate-600">100%</span>
                      <div className="w-6 h-3 border border-slate-400 rounded-sm">
                        <div className="w-full h-full bg-green-500 rounded-sm"></div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Chat Header */}
                  <div className="flex items-center space-x-3 px-4 py-4 bg-gradient-to-r from-emerald-500 to-sky-500">
                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                      <span className="text-lg">🤖</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-white font-semibold text-sm">IELTS Speaking AI</h3>
                      <div className="flex items-center space-x-1">
                        <div className="w-2 h-2 bg-green-300 rounded-full"></div>
                        <span className="text-white/80 text-xs">Online now</span>
                      </div>
                    </div>
                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs">📞</span>
                    </div>
                  </div>
                  
                  {/* Messages Area */}
                  <div className="flex-1 px-4 py-4 space-y-4 bg-slate-50">
                    {/* AI Message */}
                    <div className="flex items-start space-x-2">
                      <div className="w-8 h-8 bg-gradient-to-r from-emerald-500 to-sky-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-white text-xs">🤖</span>
                      </div>
                      <div className="max-w-[200px]">
                        <div className="bg-white p-3 rounded-2xl rounded-tl-md shadow-sm border border-slate-100">
                          <p className="text-sm text-slate-800">Welcome to your IELTS speaking test!</p>
                        </div>
                        <p className="text-xs text-slate-500 mt-1 ml-3">9:15 AM</p>
                      </div>
                    </div>
                    
                    {/* User Message */}
                    <div className="flex items-start space-x-2 justify-end">
                      <div className="max-w-[200px]">
                        <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-3 rounded-2xl rounded-tr-md shadow-sm">
                          <p className="text-sm text-white">Ready to begin my assessment.</p>
                        </div>
                        <div className="flex items-center justify-end mt-1 mr-3 space-x-1">
                          <p className="text-xs text-slate-500">9:15 AM</p>
                          <span className="text-blue-500 text-xs">✓✓</span>
                        </div>
                      </div>
                      <div className="w-8 h-8 bg-gradient-to-r from-orange-400 to-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-white text-xs">👤</span>
                      </div>
                    </div>
                    
                    {/* AI Message */}
                    <div className="flex items-start space-x-2">
                      <div className="w-8 h-8 bg-gradient-to-r from-emerald-500 to-sky-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-white text-xs">🤖</span>
                      </div>
                      <div className="max-w-[200px]">
                        <div className="bg-white p-3 rounded-2xl rounded-tl-md shadow-sm border border-slate-100">
                          <p className="text-sm text-slate-800">Describe a book that influenced you...</p>
                          <div className="flex items-center mt-2 space-x-1">
                            <span className="text-xs text-emerald-600 bg-emerald-50 px-2 py-1 rounded-full">🎯 Task 1</span>
                          </div>
                        </div>
                        <p className="text-xs text-slate-500 mt-1 ml-3">9:16 AM</p>
                      </div>
                    </div>
                    
                    {/* Typing Indicator */}
                    <div className="flex items-start space-x-2">
                      <div className="w-8 h-8 bg-gradient-to-r from-emerald-500 to-sky-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-white text-xs">🤖</span>
                      </div>
                      <div className="bg-white p-3 rounded-2xl rounded-tl-md shadow-sm border border-slate-100">
                        <div className="flex space-x-1">
                          <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce"></div>
                          <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                          <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Bottom Input Area */}
                  <div className="px-4 py-3 bg-white border-t border-slate-100">
                    <div className="flex items-center space-x-3">
                      <div className="flex-1 bg-slate-100 rounded-full px-4 py-2">
                        <p className="text-sm text-slate-500">🎤 Tap to record...</p>
                      </div>
                      <div className="w-10 h-10 bg-gradient-to-r from-emerald-500 to-sky-500 rounded-full flex items-center justify-center">
                        <span className="text-white">🎤</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Home Indicator */}
                <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-white/30 rounded-full"></div>
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