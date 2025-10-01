import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingImages from '@/components/FloatingImages';
import styles from './practice-tests.module.css';
import { Play, Clock, FileText, Download, BarChart3, Target, Users, Star, CheckCircle, ArrowRight, Timer, BookOpen, Headphones, Mic, Edit3 } from 'lucide-react';

export default function PracticeTestsPage() {
  const featuredTests = [
    {
      id: 1,
      title: "IELTS Academic Full Practice Test",
      description: "Complete simulated exam with all four sections. Get detailed feedback and band score prediction.",
      duration: "2 hours 45 min",
      questions: "80 questions",
      difficulty: "Advanced",
      takers: "8,742",
      averageScore: "7.2",
      rating: 4.8,
      type: "full",
      color: "blue",
      featured: true
    },
    {
      id: 2,
      title: "General Training Practice Test",
      description: "Complete test designed for General Training candidates with relevant topics and tasks.",
      duration: "2 hours 45 min",
      questions: "80 questions",
      difficulty: "Intermediate",
      takers: "6,351",
      averageScore: "6.8",
      rating: 4.7,
      type: "full",
      color: "green",
      featured: true
    }
  ];

  const testCategories = [
    {
      name: "Full-Length Tests",
      description: "Complete IELTS simulations with all sections",
      count: 12,
      icon: <FileText className={styles.categoryIcon} />,
      color: "blue",
      tests: [
        {
          title: "Academic Test #1",
          duration: "2h 45m",
          questions: "80",
          difficulty: "Advanced",
          takers: "5,234",
          updated: "2 weeks ago"
        },
        {
          title: "Academic Test #2",
          duration: "2h 45m",
          questions: "80",
          difficulty: "Advanced",
          takers: "4,187",
          updated: "1 month ago"
        },
        {
          title: "General Training #1",
          duration: "2h 45m",
          questions: "80",
          difficulty: "Intermediate",
          takers: "3,956",
          updated: "3 weeks ago"
        }
      ]
    },
    {
      name: "Listening Practice",
      description: "Audio-based tests with various accents and scenarios",
      count: 18,
      icon: <Headphones className={styles.categoryIcon} />,
      color: "purple",
      tests: [
        {
          title: "Listening Section 1 & 2",
          duration: "30m",
          questions: "20",
          difficulty: "Beginner",
          takers: "3,421",
          updated: "1 week ago"
        },
        {
          title: "Listening Section 3 & 4",
          duration: "30m",
          questions: "20",
          difficulty: "Advanced",
          takers: "2,876",
          updated: "2 weeks ago"
        },
        {
          title: "Accent Training Set",
          duration: "45m",
          questions: "30",
          difficulty: "Intermediate",
          takers: "2,134",
          updated: "5 days ago"
        }
      ]
    },
    {
      name: "Reading Practice",
      description: "Academic and General Training reading passages",
      count: 24,
      icon: <BookOpen className={styles.categoryIcon} />,
      color: "orange",
      tests: [
        {
          title: "Academic Reading #1",
          duration: "60m",
          questions: "40",
          difficulty: "Advanced",
          takers: "4,562",
          updated: "3 days ago"
        },
        {
          title: "General Training Reading",
          duration: "60m",
          questions: "40",
          difficulty: "Intermediate",
          takers: "3,789",
          updated: "1 week ago"
        },
        {
          title: "Speed Reading Practice",
          duration: "45m",
          questions: "30",
          difficulty: "Intermediate",
          takers: "2,945",
          updated: "2 weeks ago"
        }
      ]
    },
    {
      name: "Writing Practice",
      description: "Task 1 and Task 2 with expert evaluation",
      count: 16,
      icon: <Edit3 className={styles.categoryIcon} />,
      color: "red",
      tests: [
        {
          title: "Academic Writing Task 1",
          duration: "20m",
          questions: "1 task",
          difficulty: "Intermediate",
          takers: "3,124",
          updated: "4 days ago"
        },
        {
          title: "Academic Writing Task 2",
          duration: "40m",
          questions: "1 task",
          difficulty: "Advanced",
          takers: "2,867",
          updated: "1 week ago"
        },
        {
          title: "General Training Writing",
          duration: "60m",
          questions: "2 tasks",
          difficulty: "Intermediate",
          takers: "2,456",
          updated: "3 days ago"
        }
      ]
    },
    {
      name: "Speaking Practice",
      description: "Recorded responses with AI feedback",
      count: 15,
      icon: <Mic className={styles.categoryIcon} />,
      color: "teal",
      tests: [
        {
          title: "Speaking Part 1 Practice",
          duration: "15m",
          questions: "12 topics",
          difficulty: "Beginner",
          takers: "3,678",
          updated: "2 days ago"
        },
        {
          title: "Speaking Part 2 & 3",
          duration: "30m",
          questions: "8 topics",
          difficulty: "Advanced",
          takers: "2,934",
          updated: "1 week ago"
        },
        {
          title: "Full Speaking Test",
          duration: "45m",
          questions: "All parts",
          difficulty: "Intermediate",
          takers: "2,156",
          updated: "5 days ago"
        }
      ]
    }
  ];

  const testStats = [
    {
      number: "50,000+",
      label: "Tests Completed",
      icon: <FileText className={styles.statIcon} />
    },
    {
      number: "7.1",
      label: "Average Score",
      icon: <Target className={styles.statIcon} />
    },
    {
      number: "98%",
      label: "Accuracy Rate",
      icon: <CheckCircle className={styles.statIcon} />
    },
    {
      number: "4.8/5",
      label: "User Rating",
      icon: <Star className={styles.statIcon} />
    }
  ];

  const features = [
    {
      icon: "🎯",
      title: "Real Exam Simulation",
      description: "Tests designed to match the actual IELTS exam format and difficulty"
    },
    {
      icon: "📊",
      title: "Detailed Analytics",
      description: "Get comprehensive feedback on your performance and areas for improvement"
    },
    {
      icon: "⏱️",
      title: "Timed Practice",
      description: "Practice under real exam conditions with automatic timing"
    },
    {
      icon: "🔄",
      title: "Unlimited Attempts",
      description: "Take tests as many times as you need to track your progress"
    }
  ];

  const upcomingTests = [
    {
      date: "Dec 20, 2024",
      title: "Weekly Live Mock Test",
      time: "10:00 AM GMT",
      seats: "45/100",
      instructor: "Dr. Sarah Chen",
      type: "live"
    },
    {
      date: "Dec 22, 2024",
      title: "Writing Workshop Test",
      time: "2:00 PM GMT",
      seats: "23/50",
      instructor: "Emily Watson",
      type: "workshop"
    },
    {
      date: "Dec 24, 2024",
      title: "Speaking Practice Session",
      time: "4:00 PM GMT",
      seats: "67/100",
      instructor: "Michael Rodriguez",
      type: "speaking"
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
            <h1 className={styles.heroTitle}>IELTS Practice Tests</h1>
            <p className={styles.heroSubtitle}>
              Experience the real IELTS exam with our comprehensive practice tests. 
              Get instant scores, detailed feedback, and personalized improvement plans.
            </p>
            <div className={styles.heroStats}>
              {testStats.map((stat, index) => (
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
                <Play className={styles.buttonIcon} />
                Start Free Test
              </button>
              <button className={styles.secondaryButton}>
                <Download className={styles.buttonIcon} />
                Download Test Pack
              </button>
            </div>
          </div>
          <div className={styles.heroVisual}>
            <div className={styles.testInterface}>
              <div className={styles.interfaceHeader}>
                <div className={styles.windowControls}>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
                <div className={styles.timer}>
                  <Timer className={styles.timerIcon} />
                  <span>45:00</span>
                </div>
              </div>
              <div className={styles.interfaceContent}>
                <div className={styles.testSection}>
                  <h4>Reading Section</h4>
                  <div className={styles.questionProgress}>
                    <span>Question 12 of 40</span>
                    <div className={styles.progressBar}>
                      <div className={styles.progressFill}></div>
                    </div>
                  </div>
                  <div className={styles.passage}>
                    <p>The rapid development of technology has transformed how we communicate...</p>
                  </div>
                  <div className={styles.questions}>
                    <div className={styles.question}>
                      <span>12. What is the main purpose of the passage?</span>
                      <div className={styles.options}>
                        <label>
                          <input type="radio" name="q12" />
                          To criticize modern technology
                        </label>
                        <label>
                          <input type="radio" name="q12" />
                          To discuss communication changes
                        </label>
                        <label>
                          <input type="radio" name="q12" />
                          To promote social media use
                        </label>
                        <label>
                          <input type="radio" name="q12" />
                          To analyze historical trends
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.interfaceFooter}>
                <button className={styles.navButton}>Previous</button>
                <button className={styles.navButton}>Next</button>
                <button className={styles.submitButton}>Submit Test</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className={styles.featuresSection}>
        <div className={styles.sectionContainer}>
          <h2 className={styles.sectionTitle}>Why Practice With Our Tests?</h2>
          <p className={styles.sectionSubtitle}>
            Get the most realistic IELTS preparation experience available
          </p>
          <div className={styles.featuresGrid}>
            {features.map((feature, index) => (
              <div key={index} className={styles.featureCard}>
                <div className={styles.featureIcon}>{feature.icon}</div>
                <h3 className={styles.featureTitle}>{feature.title}</h3>
                <p className={styles.featureDescription}>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Tests */}
      <section className={styles.featuredSection}>
        <div className={styles.sectionContainer}>
          <h2 className={styles.sectionTitle}>Featured Practice Tests</h2>
          <p className={styles.sectionSubtitle}>
            Start with our most comprehensive and popular test simulations
          </p>
          <div className={styles.featuredGrid}>
            {featuredTests.map((test) => (
              <div key={test.id} className={styles.featuredCard} data-color={test.color}>
                <div className={styles.cardHeader}>
                  <div className={styles.testBadge}>
                    {test.type === 'full' ? 'Full Test' : 'Section Test'}
                  </div>
                  <div className={styles.testStats}>
                    <div className={styles.stat}>
                      <Users className={styles.statIcon} />
                      <span>{test.takers} takers</span>
                    </div>
                    <StarRating rating={test.rating} />
                  </div>
                </div>
                <div className={styles.testContent}>
                  <h3 className={styles.testTitle}>{test.title}</h3>
                  <p className={styles.testDescription}>{test.description}</p>
                  <div className={styles.testMeta}>
                    <div className={styles.metaItem}>
                      <Clock className={styles.metaIcon} />
                      <span>{test.duration}</span>
                    </div>
                    <div className={styles.metaItem}>
                      <FileText className={styles.metaIcon} />
                      <span>{test.questions}</span>
                    </div>
                    <div className={styles.metaItem}>
                      <Target className={styles.metaIcon} />
                      <span>{test.difficulty}</span>
                    </div>
                  </div>
                  <div className={styles.scoreInfo}>
                    <div className={styles.averageScore}>
                      Average Score: <strong>{test.averageScore}</strong>
                    </div>
                  </div>
                </div>
                <div className={styles.cardActions}>
                  <button className={styles.startButton}>
                    <Play className={styles.buttonIcon} />
                    Start Test Now
                  </button>
                  <button className={styles.previewButton}>
                    <FileText className={styles.buttonIcon} />
                    Preview Questions
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Test Categories */}
      <section className={styles.categoriesSection}>
        <div className={styles.sectionContainer}>
          <h2 className={styles.sectionTitle}>Practice Test Categories</h2>
          <p className={styles.sectionSubtitle}>
            Focus on specific skills or take complete simulated exams
          </p>
          <div className={styles.categoriesGrid}>
            {testCategories.map((category, index) => (
              <div key={index} className={styles.categoryCard} data-color={category.color}>
                <div className={styles.categoryHeader}>
                  <div className={styles.categoryIconWrapper}>
                    {category.icon}
                  </div>
                  <div className={styles.categoryInfo}>
                    <h3 className={styles.categoryName}>{category.name}</h3>
                    <p className={styles.categoryDescription}>{category.description}</p>
                    <div className={styles.testCount}>{category.count} tests available</div>
                  </div>
                </div>
                <div className={styles.testsList}>
                  {category.tests.map((test, testIndex) => (
                    <div key={testIndex} className={styles.testItem}>
                      <div className={styles.testDetails}>
                        <h4 className={styles.testTitle}>{test.title}</h4>
                        <div className={styles.testMeta}>
                          <span>{test.duration}</span>
                          <span>•</span>
                          <span>{test.questions}</span>
                          <span>•</span>
                          <span>{test.difficulty}</span>
                        </div>
                        <div className={styles.testStats}>
                          <span>{test.takers} takers</span>
                          <span className={styles.updated}>Updated {test.updated}</span>
                        </div>
                      </div>
                      <button className={styles.startSmallButton}>
                        <Play className={styles.playIcon} />
                      </button>
                    </div>
                  ))}
                </div>
                <button className={styles.viewAllButton}>
                  View All {category.count} Tests
                  <ArrowRight className={styles.arrowIcon} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Live Tests Section */}
      <section className={styles.liveSection}>
        <div className={styles.sectionContainer}>
          <div className={styles.liveContent}>
            <div className={styles.liveText}>
              <h2 className={styles.sectionTitle}>Upcoming Live Tests</h2>
              <p className={styles.sectionSubtitle}>
                Join our scheduled live test sessions with expert instructors
              </p>
              <div className={styles.liveTests}>
                {upcomingTests.map((test, index) => (
                  <div key={index} className={styles.liveTestCard}>
                    <div className={styles.testDate}>
                      <div className={styles.date}>{test.date}</div>
                      <div className={styles.time}>{test.time}</div>
                    </div>
                    <div className={styles.testInfo}>
                      <h3 className={styles.testTitle}>{test.title}</h3>
                      <div className={styles.testInstructor}>
                        with {test.instructor}
                      </div>
                      <div className={styles.testSeats}>
                        <Users className={styles.seatsIcon} />
                        <span>{test.seats} seats available</span>
                      </div>
                    </div>
                    <button className={styles.joinButton}>
                      Join Session
                    </button>
                  </div>
                ))}
              </div>
            </div>
            <div className={styles.liveVisual}>
              <div className={styles.liveBadge}>
                <div className={styles.liveIndicator}></div>
                <span>LIVE NOW</span>
              </div>
              <div className={styles.sessionInfo}>
                <h3>Weekly Mock Test in Progress</h3>
                <div className={styles.sessionStats}>
                  <div className={styles.stat}>
                    <Users className={styles.statIcon} />
                    <span>87 students participating</span>
                  </div>
                  <div className={styles.stat}>
                    <Clock className={styles.statIcon} />
                    <span>45 minutes remaining</span>
                  </div>
                </div>
                <button className={styles.joinLiveButton}>
                  <Play className={styles.buttonIcon} />
                  Join Live Test
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className={styles.sectionContainer}>
          <div className={styles.ctaContent}>
            <div className={styles.ctaText}>
              <h2 className={styles.ctaTitle}>Ready to Test Your Skills?</h2>
              <p className={styles.ctaDescription}>
                Take the first step towards your target band score. Our practice tests 
                provide the most accurate simulation of the real IELTS exam experience.
              </p>
              <div className={styles.ctaStats}>
                <div className={styles.ctaStat}>
                  <CheckCircle className={styles.ctaStatIcon} />
                  <span>Instant scoring and feedback</span>
                </div>
                <div className={styles.ctaStat}>
                  <BarChart3 className={styles.ctaStatIcon} />
                  <span>Detailed performance analytics</span>
                </div>
                <div className={styles.ctaStat}>
                  <Target className={styles.ctaStatIcon} />
                  <span>Personalized improvement plans</span>
                </div>
              </div>
            </div>
            <div className={styles.ctaActions}>
              <button className={styles.ctaPrimary}>
                <Play className={styles.ctaIcon} />
                Start Free Test
              </button>
              <button className={styles.ctaSecondary}>
                <Users className={styles.ctaIcon} />
                Join Live Session
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}