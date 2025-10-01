"use client";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingImages from '@/components/FloatingImages';
import styles from './faq.module.css';
import { ChevronDown, Search, MessageCircle, Clock, Mail, Phone, BookOpen, Users, Target, Star, CheckCircle, HelpCircle } from 'lucide-react';
import { useState } from 'react';

export default function FAQPage() {
  const [openItems, setOpenItems] = useState<number[]>([]);
  const [searchTerm, setSearchTerm] = useState('');

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(item => item !== index)
        : [...prev, index]
    );
  };

  const faqCategories = [
    {
      name: "General Questions",
      description: "Basic information about IELTSAce and our services",
      icon: <HelpCircle className={styles.categoryIcon} />,
      color: "blue",
      questions: [
        {
          question: "What is IELTSAce and how is it different from other IELTS preparation platforms?",
          answer: "IELTSAce is a comprehensive IELTS preparation platform that combines cutting-edge AI technology with expert human instruction. Unlike other platforms, we offer personalized study plans, real-time feedback on speaking and writing, and access to certified IELTS examiners. Our unique approach has helped thousands of students achieve an average band score improvement of 2.1 points."
        },
        {
          question: "Do I need any special equipment or software to use IELTSAce?",
          answer: "All you need is a computer or smartphone with internet access. Our platform works on all modern web browsers. For speaking practice, a microphone is recommended, and for the best experience, we suggest using headphones. No additional software installation is required - everything runs in your browser."
        },
        {
          question: "Is IELTSAce suitable for both Academic and General Training IELTS?",
          answer: "Yes! IELTSAce offers comprehensive preparation materials for both Academic and General Training tests. While the listening and speaking sections are the same for both, we provide specialized materials for the different reading and writing tasks in each test type. You can specify your test type when you sign up to get tailored content."
        }
      ]
    },
    {
      name: "Courses & Pricing",
      description: "Information about our courses, pricing, and subscriptions",
      icon: <BookOpen className={styles.categoryIcon} />,
      color: "green",
      questions: [
        {
          question: "What's included in the free trial?",
          answer: "Our 7-day free trial gives you full access to all platform features, including: 2 complete practice tests, AI-powered speaking evaluation, writing task feedback, personalized study plan, and access to our learning materials. No credit card is required to start your trial, and you can cancel anytime before the trial ends."
        },
        {
          question: "Can I switch between different course plans?",
          answer: "Absolutely! You can upgrade or downgrade your plan at any time. When you upgrade, you'll get immediate access to the new features. When you downgrade, the changes will take effect at the start of your next billing cycle. We prorate any differences to ensure you only pay for what you use."
        },
        {
          question: "Do you offer discounts for students or group packages?",
          answer: "Yes, we offer a 20% student discount with valid student ID verification. We also provide group packages for institutions and study groups of 5+ students with discounts up to 35%. Contact our support team for more information about group pricing and educational partnerships."
        }
      ]
    },
    {
      name: "Technical Support",
      description: "Technical issues, platform usage, and troubleshooting",
      icon: <MessageCircle className={styles.categoryIcon} />,
      color: "purple",
      questions: [
        {
          question: "The speaking practice feature isn't working with my microphone. What should I do?",
          answer: "First, check that your microphone permissions are enabled in your browser settings. Make sure you're using a supported browser (Chrome, Firefox, Safari, or Edge). If issues persist, try these steps: 1) Clear your browser cache, 2) Test your microphone with other applications, 3) Use headphones with a built-in microphone for better quality. If problems continue, contact our support team for immediate assistance."
        },
        {
          question: "How do I reset my password if I've forgotten it?",
          answer: "Click on the 'Forgot Password' link on the login page. Enter your registered email address, and we'll send you a password reset link. The link will be valid for 2 hours. If you don't receive the email within 10 minutes, check your spam folder or contact our support team for help."
        },
        {
          question: "Can I use IELTSAce on multiple devices?",
          answer: "Yes, you can access your IELTSAce account on multiple devices. However, for security reasons, you can only be logged in on one device at a time. Your progress and materials sync automatically across all devices, so you can seamlessly switch between your computer, tablet, and smartphone."
        }
      ]
    },
    {
      name: "Study Materials & Practice",
      description: "Questions about learning resources and practice tests",
      icon: <Target className={styles.categoryIcon} />,
      color: "orange",
      questions: [
        {
          question: "How many practice tests are available on IELTSAce?",
          answer: "We currently offer over 50 full-length practice tests, with new tests added monthly. This includes 25 Academic tests, 15 General Training tests, and 10 section-specific practice sets. All tests are created by certified IELTS examiners and include detailed answer explanations and band score predictions."
        },
        {
          question: "How accurate is the AI band score prediction?",
          answer: "Our AI band score prediction is 95% accurate compared to human examiner scores. The system analyzes over 200 data points including vocabulary range, grammatical accuracy, fluency, pronunciation (for speaking), and task achievement (for writing). However, we recommend using it as a guide rather than an absolute score, and our expert instructors provide final verification for official practice tests."
        },
        {
          question: "Can I download study materials for offline use?",
          answer: "Yes, most of our study materials including PDF guides, vocabulary lists, and practice questions are available for download. Video lessons and interactive exercises require an internet connection. Downloaded materials are available in your account dashboard and can be accessed anytime, even without internet connection."
        }
      ]
    },
    {
      name: "Payment & Billing",
      description: "Billing questions, refunds, and payment methods",
      icon: <Users className={styles.categoryIcon} />,
      color: "red",
      questions: [
        {
          question: "What payment methods do you accept?",
          answer: "We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and bank transfers for certain regions. All payments are processed securely through encrypted connections. We don't store your payment information on our servers for added security."
        },
        {
          question: "What is your refund policy?",
          answer: "We offer a 14-day money-back guarantee for all paid plans. If you're not satisfied with our service within the first 14 days of your subscription, we'll provide a full refund, no questions asked. After 14 days, we offer prorated refunds for the remaining unused portion of your subscription if you cancel early."
        },
        {
          question: "Will I be notified before my subscription renews?",
          answer: "Yes, we send email notifications 7 days and 24 hours before your subscription automatically renews. You can turn off auto-renewal at any time from your account settings. If you cancel auto-renewal, you'll still have access to all features until the end of your current billing period."
        }
      ]
    },
    {
      name: "Account & Progress",
      description: "Account management and progress tracking",
      icon: <Star className={styles.categoryIcon} />,
      color: "teal",
      questions: [
        {
          question: "How long does it take to see improvement in my band score?",
          answer: "Most students see noticeable improvement within 2-4 weeks of consistent practice. However, the exact timeline depends on your starting level, target score, and study commitment. Students who follow our recommended study plan of 5+ hours per week typically achieve their target scores within 8-12 weeks."
        },
        {
          question: "Can I extend my subscription if I need more time to prepare?",
          answer: "Yes, you can extend your subscription at any time. We also offer flexible subscription lengths - you can choose monthly, quarterly, or annual plans. If you need more time close to your exam date, we recommend upgrading to a plan with more intensive features and expert support."
        },
        {
          question: "What happens to my progress if I cancel my subscription?",
          answer: "If you cancel your subscription, you'll retain access to all free materials and your progress data will be saved. If you resubscribe later, you can pick up right where you left off. We keep your account data for 2 years after cancellation in case you decide to return to your IELTS preparation journey."
        }
      ]
    }
  ];

  const popularQuestions = [
    {
      question: "How quickly can I improve my IELTS score with IELTSAce?",
      answer: "Most students improve by 0.5-1.0 bands within 4 weeks of consistent practice."
    },
    {
      question: "Do you offer one-on-one tutoring sessions?",
      answer: "Yes, we offer personalized tutoring sessions with certified IELTS experts."
    },
    {
      question: "Can I access IELTSAce on my mobile phone?",
      answer: "Yes, our platform is fully responsive and works on all mobile devices."
    },
    {
      question: "What makes your speaking evaluation different?",
      answer: "Our AI analyzes fluency, pronunciation, vocabulary, and grammar in real-time."
    }
  ];

  const supportStats = [
    {
      number: "15 min",
      label: "Average Response Time",
      icon: <Clock className={styles.statIcon} />
    },
    {
      number: "98%",
      label: "Satisfaction Rate",
      icon: <CheckCircle className={styles.statIcon} />
    },
    {
      number: "24/7",
      label: "Support Available",
      icon: <MessageCircle className={styles.statIcon} />
    },
    {
      number: "50+",
      label: "Expert Instructors",
      icon: <Users className={styles.statIcon} />
    }
  ];

  // Filter questions based on search term
  const filteredCategories = faqCategories.map(category => ({
    ...category,
    questions: category.questions.filter(q => 
      q.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      q.answer.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(category => category.questions.length > 0);

  return (
    <div className={styles.container}>
      <Navbar />
      
      {/* Hero Section */}
      <section className={styles.hero}>
        <FloatingImages theme="support" />
        <div className={styles.heroContent}>
          <div className={styles.heroText}>
            <h1 className={styles.heroTitle}>Frequently Asked Questions</h1>
            <p className={styles.heroSubtitle}>
              Find quick answers to common questions about IELTSAce. 
              Can&apos;t find what you&apos;re looking for? Our support team is here to help.
            </p>
            <div className={styles.heroStats}>
              {supportStats.map((stat, index) => (
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
          <div className={styles.heroVisual}>
            <div className={styles.faqVisual}>
              <div className={styles.floatingQuestion} data-type="general">
                <HelpCircle className={styles.questionIcon} />
                <span>General</span>
              </div>
              <div className={styles.floatingQuestion} data-type="courses">
                <BookOpen className={styles.questionIcon} />
                <span>Courses</span>
              </div>
              <div className={styles.floatingQuestion} data-type="technical">
                <MessageCircle className={styles.questionIcon} />
                <span>Technical</span>
              </div>
              <div className={styles.supportCard}>
                <div className={styles.cardHeader}>
                  <h3>Still Need Help?</h3>
                  <MessageCircle className={styles.supportIcon} />
                </div>
                <div className={styles.cardContent}>
                  <p>Our support team is ready to assist you with any questions.</p>
                  <div className={styles.supportContacts}>
                    <div className={styles.contactItem}>
                      <Mail className={styles.contactIcon} />
                      <span>help@IELTSAce.com</span>
                    </div>
                    <div className={styles.contactItem}>
                      <Phone className={styles.contactIcon} />
                      <span>+1 (555) 123-HELP</span>
                    </div>
                  </div>
                  <button className={styles.contactButton}>
                    Contact Support
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className={styles.searchSection}>
        <div className={styles.sectionContainer}>
          <div className={styles.searchContainer}>
            <Search className={styles.searchIcon} />
            <input 
              type="text"
              placeholder="Search for questions, topics, or keywords..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className={styles.searchInput}
            />
            {searchTerm && (
              <button 
                className={styles.clearButton}
                onClick={() => setSearchTerm('')}
              >
                Clear
              </button>
            )}
          </div>
          {searchTerm && (
            <div className={styles.searchResults}>
              Found {filteredCategories.reduce((acc, cat) => acc + cat.questions.length, 0)} results for &ldquo;{searchTerm}&rdquo;
            </div>
          )}
        </div>
      </section>

      {/* Popular Questions */}
      <section className={styles.popularSection}>
        <div className={styles.sectionContainer}>
          <h2 className={styles.sectionTitle}>Popular Questions</h2>
          <p className={styles.sectionSubtitle}>
            Quick answers to our most frequently asked questions
          </p>
          <div className={styles.popularGrid}>
            {popularQuestions.map((item, index) => (
              <div key={index} className={styles.popularCard}>
                <h3 className={styles.popularQuestion}>{item.question}</h3>
                <p className={styles.popularAnswer}>{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className={styles.categoriesSection}>
        <div className={styles.sectionContainer}>
          <h2 className={styles.sectionTitle}>Browse by Category</h2>
          <p className={styles.sectionSubtitle}>
            Find detailed answers organized by topic
          </p>
          
          {filteredCategories.length === 0 ? (
            <div className={styles.noResults}>
              <HelpCircle className={styles.noResultsIcon} />
              <h3>No results found</h3>
              <p>Try different keywords or browse our categories above</p>
            </div>
          ) : (
            <div className={styles.categoriesGrid}>
              {filteredCategories.map((category, categoryIndex) => (
                <div key={categoryIndex} className={styles.categoryCard} data-color={category.color}>
                  <div className={styles.categoryHeader}>
                    <div className={styles.categoryIconWrapper}>
                      {category.icon}
                    </div>
                    <div className={styles.categoryInfo}>
                      <h3 className={styles.categoryName}>{category.name}</h3>
                      <p className={styles.categoryDescription}>{category.description}</p>
                    </div>
                  </div>
                  <div className={styles.questionsList}>
                    {category.questions.map((item, questionIndex) => {
                      const globalIndex = categoryIndex * 10 + questionIndex;
                      return (
                        <div key={questionIndex} className={styles.questionItem}>
                          <button 
                            className={styles.questionButton}
                            onClick={() => toggleItem(globalIndex)}
                            aria-expanded={openItems.includes(globalIndex)}
                          >
                            <span className={styles.questionText}>{item.question}</span>
                            <ChevronDown className={`${styles.chevron} ${openItems.includes(globalIndex) ? styles.rotated : ''}`} />
                          </button>
                          <div className={`${styles.answer} ${openItems.includes(globalIndex) ? styles.open : ''}`}>
                            <div className={styles.answerContent}>
                              <p>{item.answer}</p>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Support CTA */}
      <section className={styles.supportSection}>
        <div className={styles.sectionContainer}>
          <div className={styles.supportContent}>
            <div className={styles.supportText}>
              <h2 className={styles.supportTitle}>Still Have Questions?</h2>
              <p className={styles.supportDescription}>
                Our dedicated support team is here to help you with any questions or concerns. 
                We&apos;re committed to providing you with the best possible IELTS preparation experience.
              </p>
              <div className={styles.supportFeatures}>
                <div className={styles.feature}>
                  <CheckCircle className={styles.featureIcon} />
                  <span>24/7 email support with 15-minute average response time</span>
                </div>
                <div className={styles.feature}>
                  <CheckCircle className={styles.featureIcon} />
                  <span>Live chat available during business hours</span>
                </div>
                <div className={styles.feature}>
                  <CheckCircle className={styles.featureIcon} />
                  <span>Expert advice from certified IELTS instructors</span>
                </div>
              </div>
            </div>
            <div className={styles.supportActions}>
              <button className={styles.supportPrimary}>
                <MessageCircle className={styles.actionIcon} />
                Start Live Chat
              </button>
              <button className={styles.supportSecondary}>
                <Mail className={styles.actionIcon} />
                Send Email
              </button>
              <button className={styles.supportTertiary}>
                <Phone className={styles.actionIcon} />
                Call Support
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}