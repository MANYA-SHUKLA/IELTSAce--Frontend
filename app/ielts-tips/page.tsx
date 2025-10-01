import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingImages from '@/components/FloatingImages';
import styles from './ielts-tips.module.css';
import { Lightbulb, Target, Clock, TrendingUp, Star, BookOpen, Mic, Edit3, Headphones, CheckCircle, ArrowRight, Download, Share, Bookmark, Users } from 'lucide-react';

export default function IELTSTipsPage() {
  const featuredTips = [
    {
      id: 1,
      title: "7 Speaking Tips for Band 8+",
      description: "Expert strategies to improve fluency, pronunciation, and confidence in your speaking test.",
      category: "Speaking",
      readTime: "8 min read",
      level: "All Levels",
      author: "Michael Rodriguez",
      rating: 4.9,
      icon: <Mic className={styles.tipIcon} />,
      color: "blue",
      featured: true
    },
    {
      id: 2,
      title: "Writing Task 2: Structure for Success",
      description: "Learn the exact essay structure that examiners love and how to implement it effectively.",
      category: "Writing",
      readTime: "12 min read",
      level: "Intermediate",
      author: "Dr. Sarah Chen",
      rating: 4.8,
      icon: <Edit3 className={styles.tipIcon} />,
      color: "green",
      featured: true
    }
  ];

  const tipCategories = [
    {
      name: "Speaking Tips",
      description: "Improve fluency, pronunciation, and confidence",
      count: 28,
      icon: <Mic className={styles.categoryIcon} />,
      color: "blue",
      tips: [
        {
          title: "Use Fillers Naturally",
          description: "Learn how to use hesitation devices effectively without losing points",
          readTime: "5 min",
          level: "Beginner"
        },
        {
          title: "Expand Your Answers",
          description: "Techniques to develop your responses beyond simple answers",
          readTime: "7 min",
          level: "Intermediate"
        },
        {
          title: "Pronunciation Mastery",
          description: "Key sounds and intonation patterns that impress examiners",
          readTime: "10 min",
          level: "Advanced"
        }
      ]
    },
    {
      name: "Writing Tips",
      description: "Essay structures, vocabulary, and grammar",
      count: 32,
      icon: <Edit3 className={styles.categoryIcon} />,
      color: "green",
      tips: [
        {
          title: "Paragraph Structure",
          description: "The perfect paragraph formula for Task 1 and Task 2",
          readTime: "6 min",
          level: "Beginner"
        },
        {
          title: "Academic Vocabulary",
          description: "Essential words and phrases for high-scoring essays",
          readTime: "8 min",
          level: "Intermediate"
        },
        {
          title: "Complex Sentences",
          description: "How to write sophisticated sentences without errors",
          readTime: "9 min",
          level: "Advanced"
        }
      ]
    },
    {
      name: "Reading Tips",
      description: "Speed, comprehension, and question strategies",
      count: 24,
      icon: <BookOpen className={styles.categoryIcon} />,
      color: "purple",
      tips: [
        {
          title: "Skimming Techniques",
          description: "How to quickly identify main ideas and key information",
          readTime: "5 min",
          level: "Beginner"
        },
        {
          title: "Time Management",
          description: "Strategies to complete all questions within 60 minutes",
          readTime: "7 min",
          level: "Intermediate"
        },
        {
          title: "Inference Skills",
          description: "Reading between the lines for difficult questions",
          readTime: "8 min",
          level: "Advanced"
        }
      ]
    },
    {
      name: "Listening Tips",
      description: "Focus, prediction, and note-taking strategies",
      count: 18,
      icon: <Headphones className={styles.categoryIcon} />,
      color: "orange",
      tips: [
        {
          title: "Predict Answers",
          description: "How to anticipate what you'll hear before the audio plays",
          readTime: "4 min",
          level: "Beginner"
        },
        {
          title: "Note-Taking Systems",
          description: "Effective methods to capture key information quickly",
          readTime: "6 min",
          level: "Intermediate"
        },
        {
          title: "Accent Training",
          description: "Understanding different English accents in the test",
          readTime: "9 min",
          level: "Advanced"
        }
      ]
    }
  ];

  const quickTips = [
    {
      icon: "⏰",
      title: "Time Management",
      tip: "Always allocate time for planning in writing and checking your answers in reading."
    },
    {
      icon: "📝",
      title: "Answer Strategy",
      tip: "In reading and listening, if you're unsure, never leave a blank answer."
    },
    {
      icon: "🗣️",
      title: "Speaking Confidence",
      tip: "Speak at a natural pace - not too fast, not too slow. Practice with a timer."
    },
    {
      icon: "✍️",
      title: "Writing Structure",
      tip: "Follow the essay structure: Introduction, 2-3 body paragraphs, Conclusion."
    }
  ];

  const expertAdvice = [
    {
      title: "Vocabulary Building",
      description: "Learn vocabulary in context, not just individual words. Create sentences with new words.",
      author: "Dr. Sarah Chen",
      role: "Writing Specialist"
    },
    {
      title: "Pronunciation Practice",
      description: "Record yourself speaking and compare with native speakers. Focus on word stress and intonation.",
      author: "Michael Rodriguez",
      role: "Speaking Coach"
    },
    {
      title: "Reading Efficiency",
      description: "Don't read every word. Scan for keywords and understand the question requirements first.",
      author: "Emily Watson",
      role: "Reading Expert"
    }
  ];

  const stats = [
    {
      number: "2.1",
      label: "Average Band Improvement",
      icon: <TrendingUp className={styles.statIcon} />
    },
    {
      number: "98%",
      label: "Success Rate",
      icon: <Target className={styles.statIcon} />
    },
    {
      number: "5000+",
      label: "Students Helped",
      icon: <Users className={styles.statIcon} />
    },
    {
      number: "4.9/5",
      label: "User Rating",
      icon: <Star className={styles.statIcon} />
    }
  ];

  const commonMistakes = [
    {
      mistake: "Memorized Answers",
      solution: "Examiners can spot prepared answers. Focus on flexible templates instead.",
      section: "Speaking"
    },
    {
      mistake: "Off-topic Writing",
      solution: "Always answer the exact question asked, not what you wish was asked.",
      section: "Writing"
    },
    {
      mistake: "Spelling Errors",
      solution: "British and American spelling are both accepted, but be consistent.",
      section: "Writing"
    },
    {
      mistake: "Time Mismanagement",
      solution: "Practice with strict timing to build your speed and accuracy.",
      section: "All Sections"
    }
  ];

  const StarRating = ({ rating }: { rating: number }) => {
    return (
      <div className={styles.starRating}>
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`${styles.star} ${i < Math.floor(rating) ? styles.filled : ''}`}
          />
        ))}
        <span className={styles.ratingNumber}>{rating}</span>
      </div>
    );
  };

  return (
    <div className={styles.container}>
      <Navbar />
      
      {/* Hero Section */}
      <section className={styles.hero}>
        <FloatingImages theme="education" />
        <div className={styles.heroContent}>
          <div className={styles.heroText}>
            <h1 className={styles.heroTitle}>IELTS Success Tips & Strategies</h1>
            <p className={styles.heroSubtitle}>
              Unlock your full potential with expert IELTS tips and proven strategies. 
              Learn from certified instructors and boost your band score effectively.
            </p>
            <div className={styles.heroStats}>
              {stats.map((stat, index) => (
                <div key={index} className={styles.heroStat}>
                  <div className={styles.heroStatIcon}>{stat.icon}</div>
                  <div>
                    <div className={styles.heroStatNumber}>{stat.number}</div>
                    <div className={styles.heroStatLabel}>{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
            <div className={styles.heroButtons}>
              <button className={styles.primaryButton}>
                <Download className={styles.buttonIcon} />
                Download Tips PDF
              </button>
              <button className={styles.secondaryButton}>
                <Lightbulb className={styles.buttonIcon} />
                View All Tips
              </button>
            </div>
          </div>
          <div className={styles.heroVisual}>
            <div className={styles.tipsShowcase}>
              <div className={styles.floatingTip} data-type="speaking">
                <Mic className={styles.tipIcon} />
                <span>Speaking Tips</span>
              </div>
              <div className={styles.floatingTip} data-type="writing">
                <Edit3 className={styles.tipIcon} />
                <span>Writing Tips</span>
              </div>
              <div className={styles.floatingTip} data-type="reading">
                <BookOpen className={styles.tipIcon} />
                <span>Reading Tips</span>
              </div>
              <div className={styles.floatingTip} data-type="listening">
                <Headphones className={styles.tipIcon} />
                <span>Listening Tips</span>
              </div>
              <div className={styles.featuredTipCard}>
                <div className={styles.cardHeader}>
                  <h3>Pro Tip of the Day</h3>
                  <Lightbulb className={styles.lightbulbIcon} />
                </div>
                <div className={styles.cardContent}>
                  <p>&ldquo;In Writing Task 2, spend 5 minutes planning your essay structure before you start writing. This simple habit can improve your score by 0.5-1.0 bands.&rdquo;</p>
                  <div className={styles.tipAuthor}>
                    <span>— Dr. Sarah Chen, IELTS Examiner</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Tips Section */}
      <section className={styles.quickTipsSection}>
        <div className={styles.sectionContainer}>
          <h2 className={styles.sectionTitle}>Quick Win Tips</h2>
          <p className={styles.sectionSubtitle}>
            Implement these simple strategies for immediate improvement
          </p>
          <div className={styles.quickTipsGrid}>
            {quickTips.map((tip, index) => (
              <div key={index} className={styles.quickTipCard}>
                <div className={styles.tipIcon}>{tip.icon}</div>
                <h3 className={styles.tipTitle}>{tip.title}</h3>
                <p className={styles.tipText}>{tip.tip}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Tips */}
      <section className={styles.featuredSection}>
        <div className={styles.sectionContainer}>
          <h2 className={styles.sectionTitle}>Featured Expert Tips</h2>
          <p className={styles.sectionSubtitle}>
            Comprehensive guides from our most experienced instructors
          </p>
          <div className={styles.featuredGrid}>
            {featuredTips.map((tip) => (
              <div key={tip.id} className={styles.featuredCard} data-color={tip.color}>
                <div className={styles.cardHeader}>
                  <div className={styles.tipCategory}>
                    {tip.category}
                  </div>
                  <div className={styles.tipStats}>
                    <div className={styles.stat}>
                      <Clock className={styles.statIcon} />
                      <span>{tip.readTime}</span>
                    </div>
                    <StarRating rating={tip.rating} />
                  </div>
                </div>
                <div className={styles.tipContent}>
                  <div className={styles.tipIconWrapper}>
                    {tip.icon}
                  </div>
                  <h3 className={styles.tipTitle}>{tip.title}</h3>
                  <p className={styles.tipDescription}>{tip.description}</p>
                  <div className={styles.tipMeta}>
                    <div className={styles.metaItem}>
                      <span className={styles.author}>By {tip.author}</span>
                    </div>
                    <div className={styles.metaItem}>
                      <Target className={styles.metaIcon} />
                      <span>{tip.level}</span>
                    </div>
                  </div>
                </div>
                <div className={styles.cardActions}>
                  <button className={styles.readButton}>
                    Read Full Guide
                    <ArrowRight className={styles.arrowIcon} />
                  </button>
                  <div className={styles.actionButtons}>
                    <button className={styles.iconButton}>
                      <Bookmark className={styles.actionIcon} />
                    </button>
                    <button className={styles.iconButton}>
                      <Share className={styles.actionIcon} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className={styles.categoriesSection}>
        <div className={styles.sectionContainer}>
          <h2 className={styles.sectionTitle}>Tips by Category</h2>
          <p className={styles.sectionSubtitle}>
            Targeted advice for each section of the IELTS exam
          </p>
          <div className={styles.categoriesGrid}>
            {tipCategories.map((category, index) => (
              <div key={index} className={styles.categoryCard} data-color={category.color}>
                <div className={styles.categoryHeader}>
                  <div className={styles.categoryIconWrapper}>
                    {category.icon}
                  </div>
                  <div className={styles.categoryInfo}>
                    <h3 className={styles.categoryName}>{category.name}</h3>
                    <p className={styles.categoryDescription}>{category.description}</p>
                    <div className={styles.tipsCount}>{category.count} tips available</div>
                  </div>
                </div>
                <div className={styles.tipsList}>
                  {category.tips.map((tip, tipIndex) => (
                    <div key={tipIndex} className={styles.tipItem}>
                      <div className={styles.tipDetails}>
                        <h4 className={styles.tipTitle}>{tip.title}</h4>
                        <p className={styles.tipDescription}>{tip.description}</p>
                        <div className={styles.tipMeta}>
                          <span>{tip.readTime}</span>
                          <span>•</span>
                          <span>{tip.level}</span>
                        </div>
                      </div>
                      <button className={styles.readSmallButton}>
                        <ArrowRight className={styles.arrowIcon} />
                      </button>
                    </div>
                  ))}
                </div>
                <button className={styles.viewAllButton}>
                  View All {category.count} Tips
                  <ArrowRight className={styles.arrowIcon} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expert Advice */}
      <section className={styles.expertSection}>
        <div className={styles.sectionContainer}>
          <h2 className={styles.sectionTitle}>Advice from IELTS Experts</h2>
          <p className={styles.sectionSubtitle}>
            Direct insights from our team of certified IELTS instructors
          </p>
          <div className={styles.expertGrid}>
            {expertAdvice.map((advice, index) => (
              <div key={index} className={styles.expertCard}>
                <div className={styles.adviceContent}>
                  <h3 className={styles.adviceTitle}>{advice.title}</h3>
                  <p className={styles.adviceText}>{advice.description}</p>
                </div>
                <div className={styles.expertInfo}>
                  <div className={styles.expertName}>{advice.author}</div>
                  <div className={styles.expertRole}>{advice.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Common Mistakes */}
      <section className={styles.mistakesSection}>
        <div className={styles.sectionContainer}>
          <h2 className={styles.sectionTitle}>Common Mistakes to Avoid</h2>
          <p className={styles.sectionSubtitle}>
            Learn from others&apos; errors and maximize your score potential
          </p>
          <div className={styles.mistakesGrid}>
            {commonMistakes.map((mistake, index) => (
              <div key={index} className={styles.mistakeCard}>
                <div className={styles.mistakeHeader}>
                  <div className={styles.mistakeSection}>{mistake.section}</div>
                  <div className={styles.warningIcon}>⚠️</div>
                </div>
                <div className={styles.mistakeContent}>
                  <h3 className={styles.mistakeTitle}>{mistake.mistake}</h3>
                  <div className={styles.solution}>
                    <CheckCircle className={styles.checkIcon} />
                    <span>{mistake.solution}</span>
                  </div>
                </div>
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
              <h2 className={styles.ctaTitle}>Ready to Master IELTS?</h2>
              <p className={styles.ctaDescription}>
                Combine these expert tips with our comprehensive practice materials 
                and personalized coaching for maximum score improvement.
              </p>
              <div className={styles.ctaStats}>
                <div className={styles.ctaStat}>
                  <TrendingUp className={styles.ctaStatIcon} />
                  <span>2.1 average band improvement</span>
                </div>
                <div className={styles.ctaStat}>
                  <Target className={styles.ctaStatIcon} />
                  <span>98% student success rate</span>
                </div>
                <div className={styles.ctaStat}>
                  <Lightbulb className={styles.ctaStatIcon} />
                  <span>Expert-verified strategies</span>
                </div>
              </div>
            </div>
            <div className={styles.ctaActions}>
              <button className={styles.ctaPrimary}>
                <Download className={styles.ctaIcon} />
                Get All Tips PDF
              </button>
              <button className={styles.ctaSecondary}>
                <Users className={styles.ctaIcon} />
                Book Expert Session
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}