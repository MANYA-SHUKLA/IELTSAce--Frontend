'use client';

import { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingImages from '@/components/FloatingImages';
import styles from './contact.module.css';
import { Mail, Phone, MapPin, Clock, MessageCircle, Send, CheckCircle, Users, Award, Star } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      alert('Please fill in all fields');
      return;
    }

    setIsSubmitting(true);
    
    try {
      // Simulate form submission (in real app, this would be an API call)
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      console.log('Form submitted:', formData);
      setIsSubmitted(true);
      
      // Reset form after successful submission
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      // Hide success message after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000);
      
    } catch (error) {
      console.error('Form submission error:', error);
      alert('There was an error submitting your message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };
  const contactMethods = [
    {
      icon: <Mail className={styles.contactMethodIcon} />,
      title: "Email Us",
      description: "We'll respond within 24 hours",
      details: "hello@IELTSAce.com",
      action: "mailto:hello@IELTSAce.com",
      color: "blue"
    },
    {
      icon: <Phone className={styles.contactMethodIcon} />,
      title: "Call Us",
      description: "Mon-Fri from 8am to 6pm",
      details: "+1 (555) 123-4567",
      action: "tel:+15551234567",
      color: "green"
    },
    {
      icon: <MapPin className={styles.contactMethodIcon} />,
      title: "Visit Us",
      description: "Come say hello at our office",
      details: "123 Education Street, Learning City",
      action: "#",
      color: "purple"
    },
    {
      icon: <MessageCircle className={styles.contactMethodIcon} />,
      title: "Live Chat",
      description: "Instant help from our team",
      details: "Start chatting now",
      action: "#",
      color: "orange"
    }
  ];

  const faqs = [
    {
      question: "How quickly do you respond to inquiries?",
      answer: "We typically respond to all inquiries within 2-4 hours during business hours, and within 24 hours maximum."
    },
    {
      question: "Do you offer free consultations?",
      answer: "Yes! We offer free 30-minute consultations to assess your current level and recommend the best course for you."
    },
    {
      question: "What are your business hours?",
      answer: "Our support team is available Monday to Friday, 8:00 AM to 8:00 PM (GMT), and Saturday, 9:00 AM to 5:00 PM."
    },
    {
      question: "Can I schedule a demo session?",
      answer: "Absolutely! You can schedule a free demo session to experience our teaching methods and platform firsthand."
    }
  ];

  const supportStats = [
    {
      number: "15 min",
      label: "Average Response Time"
    },
    {
      number: "98%",
      label: "Customer Satisfaction"
    },
    {
      number: "24/7",
      label: "Online Support"
    },
    {
      number: "50+",
      label: "Expert Instructors"
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
            <h1 className={styles.heroTitle}>Get in Touch</h1>
            <p className={styles.heroSubtitle}>
              Ready to start your IELTS journey? We&apos;re here to help you achieve your dream band score. 
              Contact us today for personalized guidance and support.
            </p>
            <div className={styles.heroStats}>
              {supportStats.map((stat, index) => (
                <div key={index} className={styles.heroStat}>
                  <div className={styles.heroStatNumber}>{stat.number}</div>
                  <div className={styles.heroStatLabel}>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          <div className={styles.heroVisual}>
            <div className={styles.contactCard}>
              <div className={styles.cardHeader}>
                <h3>Send us a Message</h3>
                <p>We&apos;ll get back to you ASAP</p>
              </div>
              <form className={styles.contactForm} onSubmit={handleSubmit}>
                {isMounted && isSubmitted && (
                  <div className={styles.successMessage}>
                    <CheckCircle className={styles.successIcon} />
                    <span>Thank you! Your message has been sent successfully. We&apos;ll get back to you within 24 hours.</span>
                  </div>
                )}
                
                <div className={styles.formGroup}>
                  <label htmlFor="name">Full Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Enter your full name"
                    className={styles.formInput}
                    required
                  />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="email">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Enter your email"
                    className={styles.formInput}
                    required
                  />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="subject">Subject</label>
                  <select 
                    id="subject" 
                    value={formData.subject}
                    onChange={handleInputChange}
                    className={styles.formSelect}
                    required
                  >
                    <option value="">Select an option</option>
                    <option value="general">General Inquiry</option>
                    <option value="course">Course Information</option>
                    <option value="technical">Technical Support</option>
                    <option value="billing">Billing Question</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="message">Message</label>
                  <textarea 
                    id="message" 
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us how we can help you..."
                    className={styles.formTextarea}
                    required
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
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className={styles.methodsSection}>
        <div className={styles.sectionContainer}>
          <h2 className={styles.sectionTitle}>Multiple Ways to Reach Us</h2>
          <p className={styles.sectionSubtitle}>
            Choose the contact method that works best for you
          </p>
          <div className={styles.methodsGrid}>
            {contactMethods.map((method, index) => (
              <a 
                key={index} 
                href={method.action}
                className={`${styles.methodCard} ${styles[method.color]}`}
              >
                <div className={styles.methodIconWrapper}>
                  {method.icon}
                </div>
                <div className={styles.methodContent}>
                  <h3 className={styles.methodTitle}>{method.title}</h3>
                  <p className={styles.methodDescription}>{method.description}</p>
                  <div className={styles.methodDetails}>{method.details}</div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Office Info */}
      <section className={styles.officeSection}>
        <div className={styles.sectionContainer}>
          <div className={styles.officeContent}>
            <div className={styles.officeInfo}>
              <h2 className={styles.sectionTitle}>Visit Our Office</h2>
              <p className={styles.officeDescription}>
                Come visit our modern learning center where innovation meets education. 
                Our friendly team is always ready to welcome you and discuss your IELTS goals.
              </p>
              
              <div className={styles.officeDetails}>
                <div className={styles.detailItem}>
                  <MapPin className={styles.detailIcon} />
                  <div>
                    <h4>Address</h4>
                    <p>123 Education Street<br />Learning City, LC 12345</p>
                  </div>
                </div>
                <div className={styles.detailItem}>
                  <Clock className={styles.detailIcon} />
                  <div>
                    <h4>Business Hours</h4>
                    <p>Monday - Friday: 8:00 AM - 8:00 PM<br />
                       Saturday: 9:00 AM - 5:00 PM<br />
                       Sunday: Closed</p>
                  </div>
                </div>
                <div className={styles.detailItem}>
                  <Phone className={styles.detailIcon} />
                  <div>
                    <h4>Emergency Contact</h4>
                    <p>+1 (555) 123-4567<br />
                       Available 24/7 for urgent matters</p>
                  </div>
                </div>
              </div>

              <div className={styles.featuresList}>
                <div className={styles.feature}>
                  <CheckCircle className={styles.featureIcon} />
                  <span>Free parking available</span>
                </div>
                <div className={styles.feature}>
                  <CheckCircle className={styles.featureIcon} />
                  <span>Wheelchair accessible</span>
                </div>
                <div className={styles.feature}>
                  <CheckCircle className={styles.featureIcon} />
                  <span>Free Wi-Fi throughout</span>
                </div>
              </div>
            </div>
            
            <div className={styles.officeMap}>
              <div className={styles.mapPlaceholder}>
                <div className={styles.mapOverlay}>
                  <h3>IELTSAce Learning Center</h3>
                  <p>123 Education Street, Learning City</p>
                  <button className={styles.mapButton}>
                    <MapPin className={styles.mapIcon} />
                    View on Google Maps
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className={styles.faqSection}>
        <div className={styles.sectionContainer}>
          <h2 className={styles.sectionTitle}>Frequently Asked Questions</h2>
          <p className={styles.sectionSubtitle}>
            Quick answers to common questions about our services and support
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

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className={styles.sectionContainer}>
          <div className={styles.ctaContent}>
            <div className={styles.ctaText}>
              <h2 className={styles.ctaTitle}>Still Have Questions?</h2>
              <p className={styles.ctaDescription}>
                Don&apos;t hesitate to reach out. Our team of IELTS experts is here to help 
                you every step of the way towards your dream band score.
              </p>
              <div className={styles.ctaStats}>
                <div className={styles.ctaStat}>
                  <Users className={styles.ctaStatIcon} />
                  <span>5,000+ Students Helped</span>
                </div>
                <div className={styles.ctaStat}>
                  <Award className={styles.ctaStatIcon} />
                  <span>98% Success Rate</span>
                </div>
                <div className={styles.ctaStat}>
                  <Star className={styles.ctaStatIcon} />
                  <span>4.9/5 Satisfaction</span>
                </div>
              </div>
            </div>
            <div className={styles.ctaActions}>
              <button className={styles.ctaPrimary}>
                <Phone className={styles.ctaIcon} />
                Call Now
              </button>
              <button className={styles.ctaSecondary}>
                <Mail className={styles.ctaIcon} />
                Email Us
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}