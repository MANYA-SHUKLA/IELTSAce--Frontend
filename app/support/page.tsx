"use client";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingImages from '@/components/FloatingImages';
import styles from './support.module.css';
import { MessageCircle, Mail, Phone, Clock, Users, CheckCircle, Star, Zap, BookOpen, Video, FileText, Headphones, ArrowRight, Send, MapPin, Calendar } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function SupportPage() {
  const [activeTab, setActiveTab] = useState('contact');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    category: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const [formErrors, setFormErrors] = useState<string[]>([]);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
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
    if (!formData.subject.trim()) errors.push('Subject is required');
    if (!formData.category) errors.push('Category is required');
    if (!formData.message.trim()) errors.push('Message is required');
    
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
      
      console.log('Support form submitted:', formData);
      setShowSuccessPopup(true);
      
      // Reset form after successful submission
      setFormData({
        name: '',
        email: '',
        subject: '',
        category: '',
        message: ''
      });
      
      // Hide popup after 5 seconds
      setTimeout(() => setShowSuccessPopup(false), 5000);
      
    } catch (error) {
      console.error('Form submission error:', error);
      setFormErrors(['There was an error submitting your message. Please try again.']);
    } finally {
      setIsSubmitting(false);
    }
  };

  const supportMethods = [
    {
      icon: <MessageCircle className={styles.methodIcon} />,
      title: "Live Chat",
      description: "Instant help from our support team",
      responseTime: "2-5 minutes",
      availability: "24/7",
      action: "Start Chat",
      color: "green",
      features: ["Instant connection", "Screen sharing available", "File sharing", "Chat history saved"]
    },
    {
      icon: <Mail className={styles.methodIcon} />,
      title: "Email Support",
      description: "Detailed assistance with comprehensive responses",
      responseTime: "1-4 hours",
      availability: "24/7",
      action: "Send Email",
      color: "blue",
      features: ["Detailed responses", "Attachment support", "Priority queuing", "Follow-up tracking"]
    },
    {
      icon: <Phone className={styles.methodIcon} />,
      title: "Phone Support",
      description: "Direct conversation with our experts",
      responseTime: "Immediate",
      availability: "Mon-Fri, 9AM-6PM",
      action: "Call Now",
      color: "purple",
      features: ["One-on-one conversation", "Immediate resolution", "Expert guidance", "Callback service"]
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
      icon: <Star className={styles.statIcon} />
    },
    {
      number: "24/7",
      label: "Support Available",
      icon: <Zap className={styles.statIcon} />
    },
    {
      number: "50+",
      label: "Expert Instructors",
      icon: <Users className={styles.statIcon} />
    }
  ];

  const quickSolutions = [
    {
      icon: "📝",
      title: "Writing Feedback",
      description: "Get detailed feedback on your writing tasks",
      link: "/writing-feedback",
      color: "blue"
    },
    {
      icon: "🎤",
      title: "Speaking Practice",
      description: "Practice speaking with instant AI evaluation",
      link: "/speaking-practice",
      color: "green"
    },
    {
      icon: "📚",
      title: "Study Materials",
      description: "Access our comprehensive study resources",
      link: "/study-materials",
      color: "purple"
    },
    {
      icon: "⏰",
      title: "Schedule Session",
      description: "Book one-on-one time with an expert",
      link: "/book-session",
      color: "orange"
    }
  ];

  const commonIssues = [
    {
      category: "Technical Issues",
      issues: [
        {
          question: "Microphone not working in speaking practice",
          solution: "Check browser permissions and try using headphones",
          link: "/help/microphone"
        },
        {
          question: "Practice test not loading properly",
          solution: "Clear browser cache and refresh the page",
          link: "/help/loading"
        },
        {
          question: "Video lessons buffering or lagging",
          solution: "Check internet connection and try lower quality",
          link: "/help/video"
        }
      ]
    },
    {
      category: "Account & Access",
      issues: [
        {
          question: "Can't login to my account",
          solution: "Reset password or try social login options",
          link: "/help/login"
        },
        {
          question: "Subscription payment failed",
          solution: "Update payment method or contact support",
          link: "/help/payment"
        },
        {
          question: "Course access missing after payment",
          solution: "Refresh account or contact billing support",
          link: "/help/access"
        }
      ]
    },
    {
      category: "Study Support",
      issues: [
        {
          question: "Need help with study plan customization",
          solution: "Schedule a free consultation with our experts",
          link: "/help/study-plan"
        },
        {
          question: "Understanding band score feedback",
          solution: "Watch our band score explanation videos",
          link: "/help/band-scores"
        },
        {
          question: "Technical English vocabulary help",
          solution: "Access our specialized vocabulary resources",
          link: "/help/vocabulary"
        }
      ]
    }
  ];

  const supportTeam = [
    {
      name: "Sarah Chen",
      role: "Senior Support Specialist",
      expertise: "Technical Issues & Account Management",
      experience: "5 years",
      avatar: "SC",
      color: "blue"
    },
    {
      name: "Mike Rodriguez",
      role: "IELTS Expert Support",
      expertise: "Study Strategies & Band Score Improvement",
      experience: "8 years",
      avatar: "MR",
      color: "green"
    },
    {
      name: "Emily Watson",
      role: "Technical Support Lead",
      expertise: "Platform Issues & Feature Guidance",
      experience: "6 years",
      avatar: "EW",
      color: "purple"
    },
    {
      name: "David Kim",
      role: "Student Success Manager",
      expertise: "Study Plans & Progress Tracking",
      experience: "4 years",
      avatar: "DK",
      color: "orange"
    }
  ];

  const resources = [
    {
      icon: <BookOpen className={styles.resourceIcon} />,
      title: "Help Center",
      description: "Comprehensive guides and tutorials",
      link: "/help-center",
      count: "150+ articles"
    },
    {
      icon: <Video className={styles.resourceIcon} />,
      title: "Video Tutorials",
      description: "Step-by-step video guides",
      link: "/tutorials",
      count: "45 videos"
    },
    {
      icon: <FileText className={styles.resourceIcon} />,
      title: "FAQ",
      description: "Answers to common questions",
      link: "/faq",
      count: "80+ questions"
    },
    {
      icon: <Headphones className={styles.resourceIcon} />,
      title: "Webinars",
      description: "Live Q&A sessions with experts",
      link: "/webinars",
      count: "Weekly sessions"
    }
  ];

  return (
    <div className={styles.container}>
      <Navbar />
      
      {/* Hero Section */}
      <section className={styles.hero}>
        <FloatingImages theme="support" />
        <div className={styles.heroContent}>
          <div className={styles.heroText}>
            <h1 className={styles.heroTitle}>We&apos;re Here to Help</h1>
            <p className={styles.heroSubtitle}>
              Get expert support for your IELTS journey. Our team is dedicated to helping 
              you achieve your target band score with personalized assistance.
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
            <div className={styles.supportVisual}>
              <div className={styles.floatingElement} data-type="chat">
                <MessageCircle className={styles.elementIcon} />
                <span>Live Chat</span>
              </div>
              <div className={styles.floatingElement} data-type="email">
                <Mail className={styles.elementIcon} />
                <span>Email</span>
              </div>
              <div className={styles.floatingElement} data-type="phone">
                <Phone className={styles.elementIcon} />
                <span>Phone</span>
              </div>
              <div className={styles.supportCard}>
                <div className={styles.cardHeader}>
                  <h3>Quick Support</h3>
                  <Zap className={styles.zapIcon} />
                </div>
                <div className={styles.cardContent}>
                  <p>Need immediate assistance? Start a live chat with our team.</p>
                  <button className={styles.chatButton}>
                    <MessageCircle className={styles.buttonIcon} />
                    Start Live Chat
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Support Methods */}
      <section className={styles.methodsSection}>
        <div className={styles.sectionContainer}>
          <h2 className={styles.sectionTitle}>Get Support Your Way</h2>
          <p className={styles.sectionSubtitle}>
            Choose the support method that works best for you
          </p>
          <div className={styles.methodsGrid}>
            {supportMethods.map((method, index) => (
              <div key={index} className={styles.methodCard} data-color={method.color}>
                <div className={styles.methodHeader}>
                  <div className={styles.methodIconWrapper}>
                    {method.icon}
                  </div>
                  <div className={styles.methodInfo}>
                    <h3 className={styles.methodTitle}>{method.title}</h3>
                    <p className={styles.methodDescription}>{method.description}</p>
                  </div>
                </div>
                <div className={styles.methodDetails}>
                  <div className={styles.detailItem}>
                    <Clock className={styles.detailIcon} />
                    <span>Response: {method.responseTime}</span>
                  </div>
                  <div className={styles.detailItem}>
                    <Zap className={styles.detailIcon} />
                    <span>Available: {method.availability}</span>
                  </div>
                </div>
                <div className={styles.featuresList}>
                  <h4>Features:</h4>
                  <ul>
                    {method.features.map((feature, featureIndex) => (
                      <li key={featureIndex}>
                        <CheckCircle className={styles.featureIcon} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <button className={styles.actionButton}>
                  {method.action}
                  <ArrowRight className={styles.arrowIcon} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Solutions */}
      <section className={styles.solutionsSection}>
        <div className={styles.sectionContainer}>
          <h2 className={styles.sectionTitle}>Quick Solutions</h2>
          <p className={styles.sectionSubtitle}>
            Fast access to common support needs
          </p>
          <div className={styles.solutionsGrid}>
            {quickSolutions.map((solution, index) => (
              <a key={index} href={solution.link} className={styles.solutionCard} data-color={solution.color}>
                <div className={styles.solutionIcon}>{solution.icon}</div>
                <h3 className={styles.solutionTitle}>{solution.title}</h3>
                <p className={styles.solutionDescription}>{solution.description}</p>
                <div className={styles.solutionArrow}>
                  <ArrowRight className={styles.arrowIcon} />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Common Issues */}
      <section className={styles.contactSection}>
        <div className={styles.sectionContainer}>
          <div className={styles.contactTabs}>
            <button 
              className={`${styles.tabButton} ${activeTab === 'contact' ? styles.active : ''}`}
              onClick={() => setActiveTab('contact')}
            >
              Contact Support
            </button>
            <button 
              className={`${styles.tabButton} ${activeTab === 'issues' ? styles.active : ''}`}
              onClick={() => setActiveTab('issues')}
            >
              Common Issues
            </button>
          </div>

          <div className={styles.tabContent}>
            {activeTab === 'contact' && (
              <div className={styles.contactContent}>
                <div className={styles.formContainer}>
                  <h3 className={styles.formTitle}>Send us a Message</h3>
                  <p className={styles.formDescription}>
                    Fill out the form below and we&apos;ll get back to you as soon as possible.
                  </p>
                  <form className={styles.supportForm} onSubmit={handleSubmit}>
                    {formErrors.length > 0 && (
                      <div className={styles.errorMessages}>
                        {formErrors.map((error, index) => (
                          <div key={index} className={styles.errorMessage}>
                            {error}
                          </div>
                        ))}
                      </div>
                    )}
                    
                    <div className={styles.formRow}>
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
                        />
                      </div>
                    </div>
                    <div className={styles.formRow}>
                      <div className={styles.formGroup}>
                        <label htmlFor="subject">Subject *</label>
                        <input
                          type="text"
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleInputChange}
                          required
                          className={styles.formInput}
                        />
                      </div>
                      <div className={styles.formGroup}>
                        <label htmlFor="category">Category *</label>
                        <select
                          id="category"
                          name="category"
                          value={formData.category}
                          onChange={handleInputChange}
                          required
                          className={styles.formSelect}
                        >
                          <option value="">Select a category</option>
                          <option value="technical">Technical Issue</option>
                          <option value="billing">Billing & Payment</option>
                          <option value="course">Course Content</option>
                          <option value="account">Account Issue</option>
                          <option value="feedback">Feedback</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </div>
                    <div className={styles.formGroup}>
                      <label htmlFor="message">Message *</label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={6}
                        className={styles.formTextarea}
                        placeholder="Please describe your issue or question in detail..."
                      ></textarea>
                    </div>
                    <button 
                      type="submit" 
                      className={styles.submitButton}
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <div className={styles.spinner}></div>
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className={styles.buttonIcon} />
                          Send Message
                        </>
                      )}
                    </button>
                  </form>
                </div>
                <div className={styles.contactInfo}>
                  <h3 className={styles.contactTitle}>Other Ways to Reach Us</h3>
                  <div className={styles.contactMethods}>
                    <div className={styles.contactMethod}>
                      <Mail className={styles.contactIcon} />
                      <div>
                        <h4>Email Us</h4>
                        <p>shuklamanya99@gmail.com</p>
                        <span>Typically replies within 1-4 hours</span>
                      </div>
                    </div>
                    <div className={styles.contactMethod}>
                      <Phone className={styles.contactIcon} />
                      <div>
                        <h4>Call Us</h4>
                        <p>+91 8005586588</p>
                        <span>Mon-Fri, 9:00 AM - 6:00 PM GMT</span>
                      </div>
                    </div>
                    <div className={styles.contactMethod}>
                      <MapPin className={styles.contactIcon} />
                      <div>
                        <h4>Visit Us</h4>
                        <p>123 Education Street<br />Learning City, LC 12345</p>
                        <span>By appointment only</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'issues' && (
              <div className={styles.issuesContent}>
                <h3 className={styles.issuesTitle}>Common Issues & Solutions</h3>
                <p className={styles.issuesDescription}>
                  Quick answers to frequently encountered problems
                </p>
                <div className={styles.issuesGrid}>
                  {commonIssues.map((category, categoryIndex) => (
                    <div key={categoryIndex} className={styles.issueCategory}>
                      <h4 className={styles.categoryTitle}>{category.category}</h4>
                      <div className={styles.issuesList}>
                        {category.issues.map((issue, issueIndex) => (
                          <div key={issueIndex} className={styles.issueItem}>
                            <div className={styles.issueContent}>
                              <h5 className={styles.issueQuestion}>{issue.question}</h5>
                              <p className={styles.issueSolution}>{issue.solution}</p>
                            </div>
                            <a href={issue.link} className={styles.issueLink}>
                              Learn More
                              <ArrowRight className={styles.arrowIcon} />
                            </a>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Support Team */}
      <section className={styles.teamSection}>
        <div className={styles.sectionContainer}>
          <h2 className={styles.sectionTitle}>Meet Our Support Team</h2>
          <p className={styles.sectionSubtitle}>
            Get help from our dedicated team of IELTS experts
          </p>
          <div className={styles.teamGrid}>
            {supportTeam.map((member, index) => (
              <div key={index} className={styles.teamCard} data-color={member.color}>
                <div className={styles.memberAvatar} data-color={member.color}>
                  {member.avatar}
                </div>
                <div className={styles.memberInfo}>
                  <h3 className={styles.memberName}>{member.name}</h3>
                  <div className={styles.memberRole}>{member.role}</div>
                  <div className={styles.memberExpertise}>{member.expertise}</div>
                  <div className={styles.memberExperience}>
                    <Calendar className={styles.experienceIcon} />
                    <span>{member.experience} experience</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resources */}
      <section className={styles.resourcesSection}>
        <div className={styles.sectionContainer}>
          <h2 className={styles.sectionTitle}>Helpful Resources</h2>
          <p className={styles.sectionSubtitle}>
            Explore our self-help resources for quick answers
          </p>
          <div className={styles.resourcesGrid}>
            {resources.map((resource, index) => (
              <a key={index} href={resource.link} className={styles.resourceCard}>
                <div className={styles.resourceIconWrapper}>
                  {resource.icon}
                </div>
                <div className={styles.resourceContent}>
                  <h3 className={styles.resourceTitle}>{resource.title}</h3>
                  <p className={styles.resourceDescription}>{resource.description}</p>
                  <div className={styles.resourceCount}>{resource.count}</div>
                </div>
                <ArrowRight className={styles.resourceArrow} />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className={styles.sectionContainer}>
          <div className={styles.ctaContent}>
            <div className={styles.ctaText}>
              <h2 className={styles.ctaTitle}>Ready to Get Help?</h2>
              <p className={styles.ctaDescription}>
                Don&apos;t let questions hold you back. Our support team is here to ensure 
                you have the best possible IELTS preparation experience.
              </p>
              <div className={styles.ctaStats}>
                <div className={styles.ctaStat}>
                  <CheckCircle className={styles.ctaStatIcon} />
                  <span>98% customer satisfaction rate</span>
                </div>
                <div className={styles.ctaStat}>
                  <Clock className={styles.ctaStatIcon} />
                  <span>15-minute average response time</span>
                </div>
                <div className={styles.ctaStat}>
                  <Users className={styles.ctaStatIcon} />
                  <span>50+ expert instructors available</span>
                </div>
              </div>
            </div>
            <div className={styles.ctaActions}>
              <button className={styles.ctaPrimary}>
                <MessageCircle className={styles.ctaIcon} />
                Start Live Chat
              </button>
              <button className={styles.ctaSecondary}>
                <Phone className={styles.ctaIcon} />
                Call Support
              </button>
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
              ×
            </button>
            <div className={styles.popupIcon}>
              <CheckCircle />
            </div>
            <h3 className={styles.popupTitle}>Message Sent Successfully!</h3>
            <p className={styles.popupText}>
              Thank you for contacting us. We&apos;ve received your message and will get back to you within 24 hours.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}