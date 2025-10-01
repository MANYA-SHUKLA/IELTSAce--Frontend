import { Star, Quote } from 'lucide-react';
import FloatingImages from './FloatingImages';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Chen",
      score: "8.5",
      course: "Academic IELTS",
      avatar: "SC",
      text: "The AI speaking practice was incredible! It helped me improve my fluency and pronunciation. I went from 6.5 to 8.0 in speaking within 2 months.",
      color: "bg-sky-100 text-sky-600"
    },
    {
      id: 2,
      name: "Raj Patel",
      score: "7.5",
      course: "General Training",
      avatar: "RP",
      text: "The mock tests were exactly like the real exam. The detailed feedback helped me identify my weak areas and improve systematically.",
      color: "bg-emerald-100 text-emerald-600"
    },
    {
      id: 3,
      name: "Emily Johnson",
      score: "9.0",
      course: "Academic IELTS",
      avatar: "EJ",
      text: "Expert instructors provided personalized guidance that made all the difference. Their writing feedback helped me achieve a perfect 9.0!",
      color: "bg-violet-100 text-violet-600"
    }
  ];

  const StarRating = ({ rating }: { rating: number }) => {
    return (
      <div className="flex space-x-1">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`h-4 w-4 ${
              i < rating ? 'text-amber-400 fill-current' : 'text-slate-300'
            }`}
          />
        ))}
      </div>
    );
  };

  return (
    <section className="py-20 bg-slate-100 relative overflow-hidden">
      <FloatingImages theme="success" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            Success <span className="bg-gradient-to-r from-sky-600 to-emerald-600 bg-clip-text text-transparent">Stories</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Hear from our students who achieved their dream IELTS scores with our proven methods and expert guidance.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-slate-200 overflow-hidden"
            >
              <div className="p-4 sm:p-6">
                {/* Quote Icon */}
                <div className="flex justify-between items-start mb-4">
                  <Quote className="h-6 w-6 sm:h-8 sm:w-8 text-sky-100 transform -scale-x-100" />
                  <div className="text-right">
                    <div className="text-xl sm:text-2xl font-bold text-slate-800">{testimonial.score}</div>
                    <div className="text-xs sm:text-sm text-slate-500">Band Score</div>
                  </div>
                </div>

                {/* Testimonial Text */}
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6 italic">
                  &ldquo;{testimonial.text}&rdquo;
                </p>

                {/* Student Info */}
                <div className="flex items-center space-x-3 sm:space-x-4">
                  <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full ${testimonial.color} flex items-center justify-center font-bold text-sm sm:text-lg flex-shrink-0`}>
                    {testimonial.avatar}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2">
                      <h4 className="font-bold text-slate-800 text-sm sm:text-base truncate">{testimonial.name}</h4>
                      <div className="flex-shrink-0">
                        <StarRating rating={5} />
                      </div>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-500 truncate">{testimonial.course}</p>
                  </div>
                </div>
              </div>

              {/* Bottom accent */}
              <div className="h-1 bg-gradient-to-r from-sky-500 to-emerald-600"></div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-12 sm:mt-20 bg-white rounded-2xl shadow-lg border border-slate-200 overflow-hidden">
          <div className="grid grid-cols-2 md:grid-cols-4">
            <div className="text-center py-6 sm:py-8 border-r border-slate-200">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-sky-600">98%</div>
              <div className="text-slate-600 mt-1 sm:mt-2 text-sm sm:text-base">Success Rate</div>
            </div>
            <div className="text-center py-6 sm:py-8 md:border-r border-slate-200">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-emerald-600">5,000+</div>
              <div className="text-slate-600 mt-1 sm:mt-2 text-sm sm:text-base">Students Trained</div>
            </div>
            <div className="text-center py-6 sm:py-8 border-r border-t md:border-t-0 border-slate-200">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-violet-600">7.5</div>
              <div className="text-slate-600 mt-1 sm:mt-2 text-sm sm:text-base">Average Score</div>
            </div>
            <div className="text-center py-6 sm:py-8 border-t md:border-t-0 border-slate-200">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-orange-600">24/7</div>
              <div className="text-slate-600 mt-1 sm:mt-2 text-sm sm:text-base">Support Available</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;