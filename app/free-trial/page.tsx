'use client';

import { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingImages from '@/components/FloatingImages';
import styles from './free-trial.module.css';
import { Check, Star, Users, Target, Clock, Zap, Play, FileText, Headphones, Mic, BookOpen, ArrowRight, Shield, Award, CheckCircle, X } from 'lucide-react';

export default function FreeTrialPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    goalScore: '',
    testType: '',
    testDate: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const [formErrors, setFormErrors] = useState<string[]>([]);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    // Clear errors when user starts typing
    if (formErrors.length > 0) {
      setFormErrors([]);
    }
  };

  const validateForm = () => {
    const errors: string[] = [];
    
    if (!formData.name.trim()) errors.push('Full Name is required');
    if (!formData.email.trim()) errors.push('Email Address is required');
    if (!formData.email.includes('@')) errors.push('Please enter a valid email address');
    if (!formData.password.trim()) errors.push('Password is required');
    if (formData.password.length < 6) errors.push('Password must be at least 6 characters');
    
    return errors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const errors = validateForm();
    if (errors.length > 0) {
      setFormErrors(errors);
      return;
    }

    setIsSubmitting(true);
    setFormErrors([]);
    
    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      console.log('Free trial form submitted:', formData);
      setShowSuccessPopup(true);
      
      // Reset form after successful submission
      setFormData({
        name: '',
        email: '',
        password: '',
        goalScore: '',
        testType: '',
        testDate: ''
      });
      
      // Hide popup after 6 seconds
      setTimeout(() => setShowSuccessPopup(false), 6000);
      
    } catch (error) {
      console.error('Form submission error:', error);
      setFormErrors(['There was an error starting your trial. Please try again.']);
    } finally {
      setIsSubmitting(false);
    }
  };

  const trialFeatures = [
    {
      icon: <FileText className={styles.featureIcon} />,
      title: "2 Full Practice Tests",
      description: "Complete IELTS simulations with detailed scoring",
      color: "blue"
    },
    {
      icon: <Mic className={styles.featureIcon} />,
      title: "AI Speaking Evaluation",
      description: "Instant feedback on pronunciation and fluency",
      color: "green"
    },
    {
      icon: <Headphones className={styles.featureIcon} />,
      title: "Listening Practice",
      description: "Audio exercises with various accents",
      color: "purple"
    },
    {
      icon: <BookOpen className={styles.featureIcon} />,
      title: "Writing Feedback",
      description: "Expert evaluation of writing tasks",
      color: "orange"
    },
    {
      icon: <Target className={styles.featureIcon} />,
      title: "Personalized Study Plan",
      description: "Custom roadmap based on your goals",
      color: "red"
    },
    {
      icon: <Play className={styles.featureIcon} />,
      title: "Video Lessons",
      description: "Expert-led tutorials and strategies",
      color: "teal"
    }
  ];

  const successStats = [
    {
      number: "98%",
      label: "Success Rate",
      icon: <Target className={styles.statIcon} />
    },
    {
      number: "7.5",
      label: "Average Score",
      icon: <Star className={styles.statIcon} />
    },
    {
      number: "2.1",
      label: "Avg. Improvement",
      icon: <Zap className={styles.statIcon} />
    },
    {
      number: "5,000+",
      label: "Students",
      icon: <Users className={styles.statIcon} />
    }
  ];

  const trialBenefits = [
    {
      title: "No Credit Card Required",
      description: "Start instantly without any payment information"
    },
    {
      title: "Full Platform Access",
      description: "Experience all features without limitations"
    },
    {
      title: "Cancel Anytime",
      description: "No obligations, cancel before trial ends"
    },
    {
      title: "Expert Support Included",
      description: "Get help from our IELTS specialists"
    }
  ];

  const studentStories = [
    {
      name: "Sarah Chen",
      fromScore: "6.0",
      toScore: "8.5",
      duration: "8 weeks",
      story: "The free trial showed me exactly how the platform could help me improve. The AI speaking practice was a game-changer!",
      avatar: "SC",
      color: "blue"
    },
    {
      name: "Raj Patel",
      fromScore: "6.5",
      toScore: "7.5",
      duration: "6 weeks",
      story: "I was skeptical at first, but the personalized study plan and mock tests convinced me to continue.",
      avatar: "RP",
      color: "green"
    },
    {
      name: "Emily Johnson",
      fromScore: "7.0",
      toScore: "9.0",
      duration: "12 weeks",
      story: "Achieving a perfect score seemed impossible until I tried the free trial. The writing feedback was incredibly detailed.",
      avatar: "EJ",
      color: "purple"
    }
  ];

  const faqs = [
    {
      question: "What happens after the 7-day free trial?",
      answer: "After your trial ends, you can choose to continue with one of our affordable subscription plans. If you don't wish to continue, your account will automatically convert to a free account with limited access to basic features."
    },
    {
      question: "Do I need to enter credit card information?",
      answer: "No, we don't require any credit card information to start your free trial. You can explore all features risk-free for 7 days without any payment commitment."
    },
    {
      question: "Can I extend my free trial?",
      answer: "While we don't typically extend free trials, we occasionally offer extended trials during special promotions. Contact our support team if you need more time to evaluate our platform."
    },
    {
      question: "What features are included in the free trial?",
      answer: "Your free trial includes full access to all platform features: practice tests, AI speaking evaluation, writing feedback, video lessons, personalized study plans, and expert support."
    }
  ];

  return (
    <div className={styles.container}>
      <Navbar />
      
      {/* Hero Section */}
      <section className={styles.hero}>
        <FloatingImages theme="success" />
        <div className={styles.heroContent}>
          <div className={styles.heroText}>
            <div className={styles.heroBadge}>
              <Zap className={styles.badgeIcon} />
              7-Day Free Trial • No Credit Card Required
            </div>
            <h1 className={styles.heroTitle}>Start Your IELTS Journey Risk-Free</h1>
            <p className={styles.heroSubtitle}>
              Experience the complete IELTSAce platform for 7 days. Join thousands of students 
              who transformed their scores with our proven methods and expert guidance.
            </p>
            <div className={styles.heroStats}>
              {successStats.map((stat, index) => (
                <div key={index} className={styles.heroStat}>
                  <div className={styles.heroStatIcon}>{stat.icon}</div>
                  <div>
                    <div className={styles.heroStatNumber}>{stat.number}</div>
                    <div className={styles.heroStatLabel}>{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className={styles.heroForm}>
            <div className={styles.formCard}>
              <div className={styles.formHeader}>
                <h3 className={styles.formTitle}>Start Your Free Trial</h3>
                <p className={styles.formSubtitle}>Get full access for 7 days</p>
              </div>
              <form className={styles.trialForm} onSubmit={handleSubmit}>
                {formErrors.length > 0 && (
                  <div className={styles.errorMessages}>
                    {formErrors.map((error, index) => (
                      <div key={index} className={styles.errorMessage}>
                        {error}
                      </div>
                    ))}
                  </div>
                )}
                
                <div className={styles.formGroup}>
                  <label htmlFor="name">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className={styles.formInput}
                    placeholder="Enter your full name"
                  />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="email">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className={styles.formInput}
                    placeholder="Enter your email address"
                  />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="password">Create Password *</label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    required
                    className={styles.formInput}
                    placeholder="Create a secure password (min 6 characters)"
                  />
                </div>
                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label htmlFor="goalScore">Target Band Score</label>
                    <select
                      id="goalScore"
                      name="goalScore"
                      value={formData.goalScore}
                      onChange={handleInputChange}
                      className={styles.formSelect}
                    >
                      <option value="">Select target</option>
                      <option value="6.0">6.0</option>
                      <option value="6.5">6.5</option>
                      <option value="7.0">7.0</option>
                      <option value="7.5">7.5</option>
                      <option value="8.0">8.0+</option>
                    </select>
                  </div>
                  <div className={styles.formGroup}>
                    <label htmlFor="testType">Test Type</label>
                    <select
                      id="testType"
                      name="testType"
                      value={formData.testType}
                      onChange={handleInputChange}
                      className={styles.formSelect}
                    >
                      <option value="">Select type</option>
                      <option value="academic">Academic</option>
                      <option value="general">General Training</option>
                    </select>
                  </div>
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="testDate">Planned Test Date (Optional)</label>
                  <input
                    type="date"
                    id="testDate"
                    name="testDate"
                    value={formData.testDate}
                    onChange={handleInputChange}
                    className={styles.formInput}
                  />
                </div>
                <button 
                  type="submit" 
                  className={styles.submitButton}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <div className={styles.spinner}></div>
                      Starting Trial...
                    </>
                  ) : (
                    <>
                      <Zap className={styles.buttonIcon} />
                      Start My Free Trial
                    </>
                  )}
                </button>
                <div className={styles.formFooter}>
                  <div className={styles.securityNote}>
                    <Shield className={styles.securityIcon} />
                    <span>Your information is secure and encrypted</span>
                  </div>
                  <p className={styles.noCardNote}>
                    No credit card required • Cancel anytime
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className={styles.featuresSection}>
        <div className={styles.sectionContainer}>
          <h2 className={styles.sectionTitle}>Everything Included in Your Free Trial</h2>
          <p className={styles.sectionSubtitle}>
            Experience the complete IELTSAce platform with full access to all features
          </p>
          <div className={styles.featuresGrid}>
            {trialFeatures.map((feature, index) => (
              <div key={index} className={styles.featureCard} data-color={feature.color}>
                <div className={styles.featureIconWrapper}>
                  {feature.icon}
                </div>
                <h3 className={styles.featureTitle}>{feature.title}</h3>
                <p className={styles.featureDescription}>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className={styles.benefitsSection}>
        <div className={styles.sectionContainer}>
          <div className={styles.benefitsContent}>
            <div className={styles.benefitsText}>
              <h2 className={styles.sectionTitle}>Why Start with a Free Trial?</h2>
              <p className={styles.sectionSubtitle}>
                Discover how IELTSAce can transform your preparation without any risk
              </p>
              <div className={styles.benefitsList}>
                {trialBenefits.map((benefit, index) => (
                  <div key={index} className={styles.benefitItem}>
                    <Check className={styles.checkIcon} />
                    <div>
                      <h3 className={styles.benefitTitle}>{benefit.title}</h3>
                      <p className={styles.benefitDescription}>{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className={styles.trustIndicators}>
                <div className={styles.trustItem}>
                  <Award className={styles.trustIcon} />
                  <span>Certified IELTS Experts</span>
                </div>
                <div className={styles.trustItem}>
                  <Shield className={styles.trustIcon} />
                  <span>Secure & Private</span>
                </div>
                <div className={styles.trustItem}>
                  <Users className={styles.trustIcon} />
                  <span>5,000+ Success Stories</span>
                </div>
              </div>
            </div>
            <div className={styles.benefitsVisual}>
              <div className={styles.timeline}>
                <div className={styles.timelineItem}>
                  <div className={styles.timelineDot}></div>
                  <div className={styles.timelineContent}>
                    <h4>Day 1: Get Started</h4>
                    <p>Create account and take assessment test</p>
                  </div>
                </div>
                <div className={styles.timelineItem}>
                  <div className={styles.timelineDot}></div>
                  <div className={styles.timelineContent}>
                    <h4>Day 2-3: Explore Features</h4>
                    <p>Try speaking practice and writing evaluation</p>
                  </div>
                </div>
                <div className={styles.timelineItem}>
                  <div className={styles.timelineDot}></div>
                  <div className={styles.timelineContent}>
                    <h4>Day 4-6: Deep Practice</h4>
                    <p>Complete mock tests and video lessons</p>
                  </div>
                </div>
                <div className={styles.timelineItem}>
                  <div className={styles.timelineDot}></div>
                  <div className={styles.timelineContent}>
                    <h4>Day 7: Decide</h4>
                    <p>Choose to continue or cancel risk-free</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className={styles.storiesSection}>
        <div className={styles.sectionContainer}>
          <h2 className={styles.sectionTitle}>Success Stories from Free Trial Users</h2>
          <p className={styles.sectionSubtitle}>
            See how students transformed their scores after starting with our free trial
          </p>
          <div className={styles.storiesGrid}>
            {studentStories.map((story, index) => (
              <div key={index} className={styles.storyCard} data-color={story.color}>
                <div className={styles.storyHeader}>
                  <div className={styles.studentAvatar} data-color={story.color}>
                    {story.avatar}
                  </div>
                  <div className={styles.studentInfo}>
                    <h3 className={styles.studentName}>{story.name}</h3>
                    <div className={styles.scoreImprovement}>
                      <span className={styles.fromScore}>{story.fromScore}</span>
                      <ArrowRight className={styles.arrowIcon} />
                      <span className={styles.toScore}>{story.toScore}</span>
                    </div>
                    <div className={styles.studyDuration}>{story.duration}</div>
                  </div>
                </div>
                <p className={styles.storyText}>&ldquo;{story.story}&rdquo;</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className={styles.faqSection}>
        <div className={styles.sectionContainer}>
          <h2 className={styles.sectionTitle}>Frequently Asked Questions</h2>
          <p className={styles.sectionSubtitle}>
            Get answers to common questions about our free trial
          </p>
          <div className={styles.faqGrid}>
            {faqs.map((faq, index) => (
              <div key={index} className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>{faq.question}</h3>
                <p className={styles.faqAnswer}>{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className={styles.finalCtaSection}>
        <div className={styles.sectionContainer}>
          <div className={styles.finalCtaContent}>
            <div className={styles.ctaText}>
              <h2 className={styles.ctaTitle}>Ready to Transform Your IELTS Score?</h2>
              <p className={styles.ctaDescription}>
                Join thousands of successful students who started with our free trial. 
                Experience the difference expert guidance and AI-powered practice can make.
              </p>
              <div className={styles.ctaStats}>
                <div className={styles.ctaStat}>
                  <Clock className={styles.ctaStatIcon} />
                  <span>7 days full access</span>
                </div>
                <div className={styles.ctaStat}>
                  <Shield className={styles.ctaStatIcon} />
                  <span>No credit card required</span>
                </div>
                <div className={styles.ctaStat}>
                  <Zap className={styles.ctaStatIcon} />
                  <span>Start instantly</span>
                </div>
              </div>
            </div>
            <div className={styles.ctaActions}>
              <button className={styles.ctaPrimary}>
                <Zap className={styles.ctaIcon} />
                Start Free Trial Now
              </button>
              <div className={styles.ctaGuarantee}>
                <Shield className={styles.guaranteeIcon} />
                <span>100% risk-free • No obligations</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      
      {/* Success Popup */}
      {isMounted && showSuccessPopup && (
        <div className={styles.successPopup}>
          <div className={styles.popupContent}>
            <button 
              className={styles.popupClose}
              onClick={() => setShowSuccessPopup(false)}
            >
              <X size={18} />
            </button>
            <div className={styles.popupIcon}>
              <CheckCircle size={32} />
            </div>
            <h3 className={styles.popupTitle}>Trial Started Successfully!</h3>
            <p className={styles.popupText}>
              🎉 Welcome to IELTSAce! Your free 7-day trial is now active. 
              Your trial dashboard will be ready in <strong>5 minutes</strong>.
            </p>
            <div className={styles.popupFooter}>
              <div className={styles.nextSteps}>
                ✅ Check your email for login details<br />
                ✅ Access your personalized study plan<br />
                ✅ Start with your first practice test
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}