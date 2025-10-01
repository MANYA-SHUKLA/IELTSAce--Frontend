'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingImages from '@/components/FloatingImages';
import styles from './blog.module.css';
import { Calendar, User, Clock, ArrowRight, Search, Tag, BookOpen, TrendingUp, Star, MessageCircle, CheckCircle, X } from 'lucide-react';

export default function BlogPage() {
  const [email, setEmail] = useState('');
  const [isSubscribing, setIsSubscribing] = useState(false);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const [emailError, setEmailError] = useState('');
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Clear previous errors
    setEmailError('');
    
    // Validation
    if (!email.trim()) {
      setEmailError('Email address is required');
      return;
    }
    
    if (!validateEmail(email.trim())) {
      setEmailError('Please enter a valid email address');
      return;
    }

    setIsSubscribing(true);
    
    try {
      // Simulate subscription process
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      console.log('Subscribed with email:', email);
      setShowSuccessPopup(true);
      setEmail('');
      setEmailError('');
      
      // Hide popup after 4 seconds
      setTimeout(() => setShowSuccessPopup(false), 4000);
      
    } catch (error) {
      console.error('Subscription error:', error);
      setEmailError('There was an error subscribing. Please try again.');
    } finally {
      setIsSubscribing(false);
    }
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    // Clear error when user starts typing
    if (emailError) {
      setEmailError('');
    }
  };
  const featuredPosts = [
    {
      id: 1,
      title: "10 Common IELTS Writing Mistakes and How to Avoid Them",
      excerpt: "Discover the most frequent errors students make in IELTS Writing Task 2 and learn proven strategies to eliminate them from your writing.",
      author: "Dr. Sarah Chen",
      date: "Dec 15, 2024",
      readTime: "8 min read",
      category: "Writing",
      image: "📝",
      featured: true,
      color: "blue"
    },
    {
      id: 2,
      title: "The Ultimate Guide to IELTS Speaking Part 2",
      excerpt: "Master the 2-minute talk with our comprehensive guide to structuring your response, using preparation time effectively, and impressing the examiner.",
      author: "Michael Rodriguez",
      date: "Dec 12, 2024",
      readTime: "6 min read",
      category: "Speaking",
      image: "🎤",
      featured: true,
      color: "green"
    }
  ];

  const blogPosts = [
    {
      id: 3,
      title: "How to Improve Your IELTS Listening Score in 30 Days",
      excerpt: "Practical exercises and daily routines that can significantly boost your listening comprehension and test performance.",
      author: "Emily Watson",
      date: "Dec 10, 2024",
      readTime: "5 min read",
      category: "Listening",
      image: "🎧",
      color: "purple"
    },
    {
      id: 4,
      title: "Vocabulary Building Strategies for Band 8+",
      excerpt: "Learn how to expand your academic vocabulary and use it effectively in all sections of the IELTS exam.",
      author: "Dr. Sarah Chen",
      date: "Dec 8, 2024",
      readTime: "7 min read",
      category: "Vocabulary",
      image: "📚",
      color: "orange"
    },
    {
      id: 5,
      title: "Time Management Tips for IELTS Reading",
      excerpt: "Strategies to help you complete all 40 questions within the 60-minute time limit while maintaining accuracy.",
      author: "James Kim",
      date: "Dec 5, 2024",
      readTime: "4 min read",
      category: "Reading",
      image: "⏰",
      color: "red"
    },
    {
      id: 6,
      title: "Understanding IELTS Band Scores: What Examiners Look For",
      excerpt: "A deep dive into the IELTS assessment criteria and how to meet the requirements for each band score level.",
      author: "Dr. Sarah Chen",
      date: "Dec 3, 2024",
      readTime: "10 min read",
      category: "Tips",
      image: "🎯",
      color: "teal"
    },
    {
      id: 7,
      title: "Common Pronunciation Mistakes and How to Fix Them",
      excerpt: "Identify and correct the pronunciation errors that could be costing you valuable marks in the speaking test.",
      author: "Michael Rodriguez",
      date: "Nov 30, 2024",
      readTime: "6 min read",
      category: "Speaking",
      image: "🗣️",
      color: "pink"
    },
    {
      id: 8,
      title: "The Role of Grammar in IELTS Writing Success",
      excerpt: "How grammatical range and accuracy impact your writing score and practical ways to improve your grammar.",
      author: "Emily Watson",
      date: "Nov 28, 2024",
      readTime: "8 min read",
      category: "Writing",
      image: "✍️",
      color: "indigo"
    }
  ];

  const popularPosts = [
    {
      id: 9,
      title: "IELTS vs TOEFL: Which Test Should You Take?",
      excerpt: "A comprehensive comparison to help you choose the right English proficiency test for your goals.",
      author: "James Kim",
      date: "Nov 25, 2024",
      readTime: "9 min read",
      category: "Guide",
      comments: 24,
      likes: 156
    },
    {
      id: 10,
      title: "7-Day IELTS Study Plan for Busy Professionals",
      excerpt: "An intensive study schedule designed for working individuals with limited time.",
      author: "Dr. Sarah Chen",
      date: "Nov 22, 2024",
      readTime: "5 min read",
      category: "Study Plan",
      comments: 18,
      likes: 89
    }
  ];

  const categories = [
    { name: "Writing", count: 24, color: "blue" },
    { name: "Speaking", count: 18, color: "green" },
    { name: "Reading", count: 15, color: "purple" },
    { name: "Listening", count: 12, color: "orange" },
    { name: "Vocabulary", count: 20, color: "red" },
    { name: "Tips", count: 28, color: "teal" }
  ];

  const tags = [
    "Band 9 Tips", "Study Plan", "Time Management", "Grammar", "Pronunciation", 
    "Mock Tests", "Academic Writing", "General Training", "Score Improvement", "Exam Day"
  ];

  return (
    <div className={styles.container}>
      <Navbar />
      
      {/* Hero Section */}
      <section className={styles.hero}>
        <FloatingImages theme="education" />
        <div className={styles.heroContent}>
          <div className={styles.heroText}>
            <h1 className={styles.heroTitle}>IELTS Pro Blog</h1>
            <p className={styles.heroSubtitle}>
              Expert tips, strategies, and insights to help you achieve your dream IELTS score. 
              Learn from our certified instructors and successful students.
            </p>
            <div className={styles.heroSearch}>
              <div className={styles.searchContainer}>
                <Search className={styles.searchIcon} />
                <input 
                  type="text" 
                  placeholder="Search articles, tips, and guides..."
                  className={styles.searchInput}
                />
                <button className={styles.searchButton}>Search</button>
              </div>
            </div>
            <div className={styles.heroStats}>
              <div className={styles.heroStat}>
                <BookOpen className={styles.heroStatIcon} />
                <div>
                  <div className={styles.heroStatNumber}>150+</div>
                  <div className={styles.heroStatLabel}>Articles</div>
                </div>
              </div>
              <div className={styles.heroStat}>
                <TrendingUp className={styles.heroStatIcon} />
                <div>
                  <div className={styles.heroStatNumber}>50K+</div>
                  <div className={styles.heroStatLabel}>Monthly Readers</div>
                </div>
              </div>
              <div className={styles.heroStat}>
                <Star className={styles.heroStatIcon} />
                <div>
                  <div className={styles.heroStatNumber}>4.9</div>
                  <div className={styles.heroStatLabel}>Rating</div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.heroVisual}>
            <div className={styles.floatingElements}>
              <div className={styles.floatingElement} data-type="writing">📝</div>
              <div className={styles.floatingElement} data-type="speaking">🎤</div>
              <div className={styles.floatingElement} data-type="reading">📚</div>
              <div className={styles.floatingElement} data-type="listening">🎧</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className={styles.featuredSection}>
        <div className={styles.sectionContainer}>
          <h2 className={styles.sectionTitle}>Featured Articles</h2>
          <p className={styles.sectionSubtitle}>
            Handpicked content to help you master the IELTS exam
          </p>
          <div className={styles.featuredGrid}>
            {featuredPosts.map((post) => (
              <article key={post.id} className={styles.featuredCard} data-color={post.color}>
                <div className={styles.featuredImage}>
                  <div className={styles.postImage}>{post.image}</div>
                  <div className={styles.categoryBadge}>{post.category}</div>
                </div>
                <div className={styles.featuredContent}>
                  <h3 className={styles.featuredTitle}>{post.title}</h3>
                  <p className={styles.featuredExcerpt}>{post.excerpt}</p>
                  <div className={styles.postMeta}>
                    <div className={styles.metaItem}>
                      <User className={styles.metaIcon} />
                      <span>{post.author}</span>
                    </div>
                    <div className={styles.metaItem}>
                      <Calendar className={styles.metaIcon} />
                      <span>{post.date}</span>
                    </div>
                    <div className={styles.metaItem}>
                      <Clock className={styles.metaIcon} />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  <button className={styles.readMoreButton}>
                    Read More
                    <ArrowRight className={styles.arrowIcon} />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className={styles.mainContent}>
        <div className={styles.sectionContainer}>
          <div className={styles.contentLayout}>
            {/* Blog Posts */}
            <div className={styles.postsSection}>
              <h2 className={styles.sectionTitle}>Latest Articles</h2>
              <div className={styles.postsGrid}>
                {blogPosts.map((post) => (
                  <article key={post.id} className={styles.postCard} data-color={post.color}>
                    <div className={styles.postHeader}>
                      <div className={styles.postImage}>{post.image}</div>
                      <div className={styles.categoryBadge}>{post.category}</div>
                    </div>
                    <div className={styles.postContent}>
                      <h3 className={styles.postTitle}>{post.title}</h3>
                      <p className={styles.postExcerpt}>{post.excerpt}</p>
                      <div className={styles.postMeta}>
                        <div className={styles.metaItem}>
                          <User className={styles.metaIcon} />
                          <span>{post.author}</span>
                        </div>
                        <div className={styles.metaItem}>
                          <Calendar className={styles.metaIcon} />
                          <span>{post.date}</span>
                        </div>
                        <div className={styles.metaItem}>
                          <Clock className={styles.metaIcon} />
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                      <button className={styles.readMoreButton}>
                        Read More
                        <ArrowRight className={styles.arrowIcon} />
                      </button>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <aside className={styles.sidebar}>
              {/* Popular Posts */}
              <div className={styles.sidebarWidget}>
                <h3 className={styles.widgetTitle}>
                  <TrendingUp className={styles.widgetIcon} />
                  Popular Posts
                </h3>
                <div className={styles.popularPosts}>
                  {popularPosts.map((post) => (
                    <div key={post.id} className={styles.popularPost}>
                      <h4 className={styles.popularTitle}>{post.title}</h4>
                      <div className={styles.popularMeta}>
                        <span>{post.date}</span>
                        <span>•</span>
                        <span>{post.readTime}</span>
                      </div>
                      <div className={styles.popularStats}>
                        <div className={styles.stat}>
                          <MessageCircle className={styles.statIcon} />
                          <span>{post.comments}</span>
                        </div>
                        <div className={styles.stat}>
                          <Star className={styles.statIcon} />
                          <span>{post.likes}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Categories */}
              <div className={styles.sidebarWidget}>
                <h3 className={styles.widgetTitle}>
                  <Tag className={styles.widgetIcon} />
                  Categories
                </h3>
                <div className={styles.categoriesList}>
                  {categories.map((category, index) => (
                    <div key={index} className={styles.categoryItem} data-color={category.color}>
                      <span className={styles.categoryName}>{category.name}</span>
                      <span className={styles.categoryCount}>({category.count})</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tags */}
              <div className={styles.sidebarWidget}>
                <h3 className={styles.widgetTitle}>Popular Tags</h3>
                <div className={styles.tagsCloud}>
                  {tags.map((tag, index) => (
                    <span key={index} className={styles.tag}>{tag}</span>
                  ))}
                </div>
              </div>

              {/* Newsletter */}
              <div className={styles.sidebarWidget}>
                <div className={styles.newsletterCard}>
                  <h3 className={styles.newsletterTitle}>Stay Updated</h3>
                  <p className={styles.newsletterText}>
                    Get the latest IELTS tips and strategies delivered to your inbox.
                  </p>
                  <form className={styles.newsletterForm} onSubmit={handleSubscribe}>
                    <div className={styles.inputWrapper}>
                      <input 
                        type="email" 
                        value={email}
                        onChange={handleEmailChange}
                        placeholder="Enter your email"
                        className={`${styles.newsletterInput} ${emailError ? styles.inputError : ''}`}
                        required
                      />
                      {emailError && (
                        <div className={styles.errorText}>{emailError}</div>
                      )}
                    </div>
                    <button 
                      type="submit" 
                      className={styles.newsletterButton}
                      disabled={isSubscribing || !email.trim()}
                    >
                      {isSubscribing ? 'Subscribing...' : 'Subscribe'}
                    </button>
                  </form>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className={styles.sectionContainer}>
          <div className={styles.ctaContent}>
            <h2 className={styles.ctaTitle}>Ready to Master IELTS?</h2>
            <p className={styles.ctaDescription}>
              Put these tips into practice with our expert-led courses and personalized coaching. 
              Join thousands of successful students today!
            </p>
            <div className={styles.ctaButtons}>
              <Link href="/free-trial" className={styles.ctaPrimary}>Start Free Trial</Link>
              <Link href="/pricing" className={styles.ctaSecondary}>Browse Courses</Link>
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
              <X size={16} />
            </button>
            <div className={styles.popupIcon}>
              <CheckCircle />
            </div>
            <h3 className={styles.popupTitle}>Successfully Subscribed!</h3>
            <p className={styles.popupText}>
              Thank you for subscribing! You&apos;ll receive the latest IELTS tips and strategies in your inbox.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}