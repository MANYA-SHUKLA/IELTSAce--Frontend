import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingImages from '@/components/FloatingImages';
import styles from './success-stories.module.css';
import { Star, Quote, Award, Target, Users, TrendingUp, Calendar, MapPin } from 'lucide-react';

export default function SuccessStoriesPage() {
  const featuredStories = [
    {
      id: 1,
      name: "Sarah Chen",
      fromScore: "6.0",
      toScore: "8.5",
      improvement: "2.5",
      course: "IELTS Academic Complete",
      duration: "8 weeks",
      country: "Canada",
      avatar: "SC",
      story: "I was struggling with my speaking and writing sections, consistently scoring around 6.0. The AI-powered speaking practice and detailed writing feedback from IELTSAce helped me identify my weak areas. My instructor provided personalized strategies that made all the difference.",
      achievements: ["Perfect 9.0 in Listening", "8.5 in Speaking", "8.0 in Writing"],
      color: "blue",
      featured: true
    },
    {
      id: 2,
      name: "Raj Patel",
      fromScore: "6.5",
      toScore: "7.5",
      improvement: "1.0",
      course: "IELTS General Training",
      duration: "6 weeks",
      country: "Australia",
      avatar: "RP",
      story: "As a working professional, I needed a flexible study schedule. The mock tests and expert feedback helped me improve my time management and exam strategies. The 24/7 support was invaluable for my busy schedule.",
      achievements: ["7.5 Overall Band", "8.0 in Reading", "7.0 in Writing"],
      color: "green",
      featured: true
    },
    {
      id: 3,
      name: "Emily Johnson",
      fromScore: "7.0",
      toScore: "9.0",
      improvement: "2.0",
      course: "Master Program",
      duration: "12 weeks",
      country: "United Kingdom",
      avatar: "EJ",
      story: "Achieving a perfect 9.0 seemed impossible until I joined IELTSAce. The 1-on-1 sessions with expert instructors and the comprehensive writing evaluations helped me refine my skills to perfection.",
      achievements: ["Perfect 9.0 Overall", "9.0 in Writing", "9.0 in Speaking"],
      color: "purple",
      featured: true
    }
  ];

  const successStories = [
    {
      id: 4,
      name: "Michael Brown",
      fromScore: "5.5",
      toScore: "7.0",
      improvement: "1.5",
      course: "Starter Program",
      duration: "10 weeks",
      country: "New Zealand",
      avatar: "MB",
      story: "From barely passing to achieving my dream score! The vocabulary builder and speaking simulations were game-changers for me.",
      color: "orange"
    },
    {
      id: 5,
      name: "Lisa Wang",
      fromScore: "6.5",
      toScore: "8.0",
      improvement: "1.5",
      course: "Pro Program",
      duration: "8 weeks",
      country: "United States",
      avatar: "LW",
      story: "The personalized study plan and weekly progress tracking kept me motivated. I never thought I could improve so much in such a short time!",
      color: "pink"
    },
    {
      id: 6,
      name: "Ahmed Hassan",
      fromScore: "6.0",
      toScore: "7.5",
      improvement: "1.5",
      course: "Speaking & Writing Focus",
      duration: "6 weeks",
      country: "UAE",
      avatar: "AH",
      story: "The AI speaking evaluation helped me overcome my pronunciation issues. My confidence improved dramatically after just a few weeks.",
      color: "teal"
    },
    {
      id: 7,
      name: "Maria Garcia",
      fromScore: "5.5",
      toScore: "7.5",
      improvement: "2.0",
      course: "Express Intensive",
      duration: "4 weeks",
      country: "Spain",
      avatar: "MG",
      story: "The intensive program was challenging but worth it. The mock tests prepared me perfectly for the real exam environment.",
      color: "indigo"
    },
    {
      id: 8,
      name: "David Kim",
      fromScore: "7.0",
      toScore: "8.5",
      improvement: "1.5",
      course: "Academic Complete",
      duration: "8 weeks",
      country: "South Korea",
      avatar: "DK",
      story: "The writing task evaluation service was exceptional. The detailed feedback helped me understand exactly what examiners look for.",
      color: "red"
    },
    {
      id: 9,
      name: "Sophie Martin",
      fromScore: "6.5",
      toScore: "8.0",
      improvement: "1.5",
      course: "General Training",
      duration: "6 weeks",
      country: "France",
      avatar: "SM",
      story: "The flexible schedule allowed me to balance work and study. The mobile app made it easy to practice anywhere, anytime.",
      color: "yellow"
    }
  ];

  const stats = [
    {
      number: "5,000+",
      label: "Success Stories",
      icon: <Users className={styles.statIcon} />
    },
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
      icon: <TrendingUp className={styles.statIcon} />
    }
  ];

  const achievementTypes = [
    {
      type: "Academic",
      count: "3,200+",
      description: "Students accepted to universities"
    },
    {
      type: "Immigration",
      count: "1,500+",
      description: "Successful visa applications"
    },
    {
      type: "Professional",
      count: "800+",
      description: "Career advancements achieved"
    },
    {
      type: "Scholarship",
      count: "500+",
      description: "Scholarships awarded"
    }
  ];

  const StarRating = ({ rating }: { rating: number }) => {
    return (
      <div className={styles.starRating}>
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`${styles.star} ${i < rating ? styles.filled : ''}`}
          />
        ))}
      </div>
    );
  };

  return (
    <div className={styles.container}>
      <Navbar />
      
      {/* Hero Section */}
      <section className={styles.hero}>
        <FloatingImages theme="success" />
        <div className={styles.heroContent}>
          <div className={styles.heroText}>
            <h1 className={styles.heroTitle}>Real Stories, Real Results</h1>
            <p className={styles.heroSubtitle}>
              Discover how thousands of students transformed their futures with IELTSAce. 
              Read their inspiring journeys from doubt to success.
            </p>
            <div className={styles.heroStats}>
              {stats.map((stat, index) => (
                <div key={index} className={styles.heroStat}>
                  <div className={styles.heroStatNumber}>{stat.number}</div>
                  <div className={styles.heroStatLabel}>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          <div className={styles.heroVisual}>
            <div className={styles.trophy}>
              <Award className={styles.trophyIcon} />
            </div>
            <div className={styles.floatingTestimonials}>
              <div className={styles.floatingCard}>
                <Quote className={styles.quoteIcon} />
                <p>&ldquo;From 6.0 to 8.5 in just 8 weeks!&rdquo;</p>
                <span>- Sarah Chen</span>
              </div>
              <div className={styles.floatingCard}>
                <Quote className={styles.quoteIcon} />
                <p>&ldquo;Achieved my dream score for UK university&rdquo;</p>
                <span>- Emily Johnson</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Stories */}
      <section className={styles.featuredSection}>
        <div className={styles.sectionContainer}>
          <h2 className={styles.sectionTitle}>Featured Success Stories</h2>
          <p className={styles.sectionSubtitle}>
            Inspiring journeys from our most remarkable students
          </p>
          <div className={styles.featuredGrid}>
            {featuredStories.map((story) => (
              <div key={story.id} className={styles.featuredCard} data-color={story.color}>
                <div className={styles.cardHeader}>
                  <div className={styles.studentInfo}>
                    <div className={styles.avatar} data-color={story.color}>
                      {story.avatar}
                    </div>
                    <div className={styles.studentDetails}>
                      <h3 className={styles.studentName}>{story.name}</h3>
                      <div className={styles.studentMeta}>
                        <MapPin className={styles.metaIcon} />
                        <span>{story.country}</span>
                        <Calendar className={styles.metaIcon} />
                        <span>{story.duration}</span>
                      </div>
                    </div>
                  </div>
                  <div className={styles.scoreImprovement}>
                    <div className={styles.scoreComparison}>
                      <span className={styles.fromScore}>{story.fromScore}</span>
                      <span className={styles.arrow}>→</span>
                      <span className={styles.toScore}>{story.toScore}</span>
                    </div>
                    <div className={styles.improvement}>+{story.improvement}</div>
                  </div>
                </div>

                <div className={styles.storyContent}>
                  <Quote className={styles.storyQuoteIcon} />
                  <p className={styles.storyText}>&ldquo;{story.story}&rdquo;</p>
                </div>

                <div className={styles.courseInfo}>
                  <span className={styles.courseBadge}>{story.course}</span>
                  <StarRating rating={5} />
                </div>

                <div className={styles.achievements}>
                  <h4>Key Achievements:</h4>
                  <div className={styles.achievementList}>
                    {story.achievements.map((achievement, index) => (
                      <div key={index} className={styles.achievementItem}>
                        <Award className={styles.achievementIcon} />
                        <span>{achievement}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievement Types */}
      <section className={styles.achievementsSection}>
        <div className={styles.sectionContainer}>
          <h2 className={styles.sectionTitle}>Where Our Students Succeed</h2>
          <p className={styles.sectionSubtitle}>
            IELTSAce students achieve their dreams across various goals and destinations
          </p>
          <div className={styles.achievementsGrid}>
            {achievementTypes.map((achievement, index) => (
              <div key={index} className={styles.achievementCard}>
                <div className={styles.achievementNumber}>{achievement.count}</div>
                <h3 className={styles.achievementType}>{achievement.type}</h3>
                <p className={styles.achievementDescription}>{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Success Stories */}
      <section className={styles.storiesSection}>
        <div className={styles.sectionContainer}>
          <h2 className={styles.sectionTitle}>More Success Stories</h2>
          <p className={styles.sectionSubtitle}>
            Join thousands of students who achieved their IELTS goals
          </p>
          <div className={styles.storiesGrid}>
            {successStories.map((story) => (
              <div key={story.id} className={styles.storyCard} data-color={story.color}>
                <div className={styles.cardHeader}>
                  <div className={styles.avatar} data-color={story.color}>
                    {story.avatar}
                  </div>
                  <div className={styles.studentInfo}>
                    <h3 className={styles.studentName}>{story.name}</h3>
                    <div className={styles.scoreComparison}>
                      <span className={styles.fromScore}>{story.fromScore}</span>
                      <span className={styles.arrow}>→</span>
                      <span className={styles.toScore}>{story.toScore}</span>
                    </div>
                  </div>
                </div>

                <div className={styles.storyExcerpt}>
                  <Quote className={styles.quoteIcon} />
                  <p>&ldquo;{story.story}&rdquo;</p>
                </div>

                <div className={styles.cardFooter}>
                  <div className={styles.courseInfo}>
                    <span>{story.course}</span>
                    <span>•</span>
                    <span>{story.duration}</span>
                  </div>
                  <div className={styles.improvementBadge}>
                    +{story.improvement}
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
              <h2 className={styles.ctaTitle}>Ready to Write Your Success Story?</h2>
              <p className={styles.ctaDescription}>
                Join thousands of students who transformed their futures with IELTSAce. 
                Your success story could be next!
              </p>
              <div className={styles.ctaStats}>
                <div className={styles.ctaStat}>
                  <Target className={styles.ctaStatIcon} />
                  <span>98% Success Rate</span>
                </div>
                <div className={styles.ctaStat}>
                  <Users className={styles.ctaStatIcon} />
                  <span>5,000+ Students</span>
                </div>
                <div className={styles.ctaStat}>
                  <TrendingUp className={styles.ctaStatIcon} />
                  <span>2.1 Average Improvement</span>
                </div>
              </div>
            </div>
            <div className={styles.ctaActions}>
              <button className={styles.ctaPrimary}>Start Free Trial</button>
              <button className={styles.ctaSecondary}>View Courses</button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}