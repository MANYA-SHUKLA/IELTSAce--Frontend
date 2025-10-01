import { Mic, FileText, Brain, Users } from 'lucide-react';
import FloatingImages from './FloatingImages';

const Features = () => {
  const features = [
    {
      icon: <Mic className="h-8 w-8" />,
      title: "Speaking Practice",
      description: "Practice with AI-powered speaking tests and get instant feedback on pronunciation, fluency, and vocabulary.",
      color: "from-sky-500 to-sky-600"
    },
    {
      icon: <FileText className="h-8 w-8" />,
      title: "Mock Tests",
      description: "Full-length simulated IELTS tests with detailed band score analysis and personalized improvement suggestions.",
      color: "from-emerald-500 to-emerald-600"
    },
    {
      icon: <Brain className="h-8 w-8" />,
      title: "AI Band Score",
      description: "Our advanced AI accurately predicts your band score and identifies areas needing improvement.",
      color: "from-violet-500 to-violet-600"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Expert Instructors",
      description: "Learn from certified IELTS experts with 10+ years experience and proven track records.",
      color: "from-orange-500 to-orange-600"
    }
  ];

  return (
    <section className="py-20 bg-slate-50 relative overflow-hidden">
      <FloatingImages theme="tech" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            Why Choose <span className="bg-gradient-to-r from-sky-600 to-emerald-600 bg-clip-text text-transparent">IELTSAce</span>?
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Our comprehensive approach combines cutting-edge technology with expert guidance 
            to help you achieve your target band score faster.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-slate-200 overflow-hidden"
            >
              {/* Gradient Top Bar */}
              <div className={`h-2 bg-gradient-to-r ${feature.color}`}></div>
              
              <div className="p-4 sm:p-6">
                {/* Icon Container */}
                <div className={`inline-flex items-center justify-center p-2 sm:p-3 rounded-xl bg-gradient-to-r ${feature.color} text-white mb-4 group-hover:scale-110 transition duration-300`}>
                  <div className="w-6 h-6 sm:w-8 sm:h-8">
                    {feature.icon}
                  </div>
                </div>
                
                {/* Content */}
                <h3 className="text-lg sm:text-xl font-bold text-slate-800 mb-3 group-hover:text-sky-600 transition duration-300">
                  {feature.title}
                </h3>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  {feature.description}
                </p>
                
                {/* Hover Effect Line */}
                <div className={`absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r ${feature.color} group-hover:w-full transition-all duration-300`}></div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12 sm:mt-16">
          <div className="bg-gradient-to-r from-sky-50 to-emerald-50 rounded-2xl p-6 sm:p-8 border border-sky-200">
            <h3 className="text-xl sm:text-2xl font-bold text-slate-800 mb-4">
              Ready to Start Your IELTS Journey?
            </h3>
            <p className="text-sm sm:text-base text-slate-600 mb-6 max-w-2xl mx-auto">
              Join thousands of successful students who achieved their dream scores with our proven methods.
            </p>
            <button className="bg-gradient-to-r from-sky-600 to-emerald-600 text-white px-6 sm:px-8 py-3 rounded-xl font-bold hover:from-sky-700 hover:to-emerald-700 transition duration-300 shadow-lg hover:shadow-xl text-sm sm:text-base transform hover:scale-105">
              Get Started Today
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;