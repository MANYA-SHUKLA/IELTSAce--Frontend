import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingImages from '@/components/FloatingImages';
import styles from './courses.module.css';

export default function CoursesPage() {
  const courses = [
    {
      id: 1,
      title: "IELTS Academic Complete",
      level: "Advanced",
      duration: "8 weeks",
      lessons: "40+ lessons",
      price: "$299",
      originalPrice: "$399",
      features: [
        "Full speaking practice with AI feedback",
        "8 complete mock tests",
        "Writing task 1 & 2 evaluation",
        "Personalized study plan",
        "Expert instructor support",
        "Band score prediction"
      ],
      popular: true,
      color: "blue"
    },
    {
      id: 2,
      title: "IELTS General Training",
      level: "Intermediate",
      duration: "6 weeks",
      lessons: "30+ lessons",
      price: "$249",
      originalPrice: "$329",
      features: [
        "General writing task practice",
        "6 complete mock tests",
        "Speaking simulation tests",
        "Vocabulary building",
        "Reading strategies",
        "Listening practice tests"
      ],
      popular: false,
      color: "green"
    },
    {
      id: 3,
      title: "Speaking & Writing Focus",
      level: "All Levels",
      duration: "4 weeks",
      lessons: "20+ lessons",
      price: "$179",
      originalPrice: "$229",
      features: [
        "Daily speaking practice",
        "Writing task evaluation",
        "Pronunciation correction",
        "Grammar and vocabulary",
        "Instant AI feedback",
        "Flexible schedule"
      ],
      popular: false,
      color: "purple"
    },
    {
      id: 4,
      title: "Express Intensive",
      level: "Advanced",
      duration: "2 weeks",
      lessons: "15+ lessons",
      price: "$199",
      originalPrice: "$259",
      features: [
        "Rapid preparation",
        "5 full mock tests",
        "Priority feedback",
        "Exam strategies",
        "Time management",
        "Quick results focus"
      ],
      popular: true,
      color: "orange"
    }
  ];

  const features = [
    {
      icon: "🎯",
      title: "Personalized Learning",
      description: "Custom study plans based on your current level and target score"
    },
    {
      icon: "🤖",
      title: "AI-Powered Practice",
      description: "Instant feedback on speaking and writing with our advanced AI"
    },
    {
      icon: "👨‍🏫",
      title: "Expert Instructors",
      description: "Learn from certified IELTS experts with 10+ years experience"
    },
    {
      icon: "📊",
      title: "Progress Tracking",
      description: "Monitor your improvement with detailed analytics and reports"
    }
  ];

  return (
    <div className={styles.container}>
      <Navbar />
      
      {/* Hero Section */}
      <section className={styles.hero}>
        <FloatingImages theme="education" />
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>IELTS Preparation Courses</h1>
          <p className={styles.heroSubtitle}>
            Choose the perfect course to achieve your target band score. 
            Our proven methods have helped thousands of students succeed.
          </p>
          <div className={styles.heroStats}>
            <div className={styles.stat}>
              <div className={styles.statNumber}>98%</div>
              <div className={styles.statLabel}>Success Rate</div>
            </div>
            <div className={styles.stat}>
              <div className={styles.statNumber}>7.5</div>
              <div className={styles.statLabel}>Average Score</div>
            </div>
            <div className={styles.stat}>
              <div className={styles.statNumber}>5000+</div>
              <div className={styles.statLabel}>Students</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className={styles.featuresSection}>
        <div className={styles.sectionContainer}>
          <h2 className={styles.sectionTitle}>Why Our Courses Work</h2>
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

      {/* Courses Grid */}
      <section className={styles.coursesSection}>
        <div className={styles.sectionContainer}>
          <h2 className={styles.sectionTitle}>Choose Your Course</h2>
          <p className={styles.sectionSubtitle}>
            All courses include mock tests, expert feedback, and personalized support
          </p>
          
          <div className={styles.coursesGrid}>
            {courses.map((course) => (
              <div 
                key={course.id} 
                className={`${styles.courseCard} ${course.popular ? styles.popular : ''}`}
                data-color={course.color}
              >
                {course.popular && (
                  <div className={styles.popularBadge}>Most Popular</div>
                )}
                
                <div className={styles.courseHeader}>
                  <h3 className={styles.courseTitle}>{course.title}</h3>
                  <div className={styles.courseLevel}>{course.level}</div>
                </div>
                
                <div className={styles.courseMeta}>
                  <div className={styles.metaItem}>
                    <span className={styles.metaLabel}>Duration:</span>
                    <span className={styles.metaValue}>{course.duration}</span>
                  </div>
                  <div className={styles.metaItem}>
                    <span className={styles.metaLabel}>Lessons:</span>
                    <span className={styles.metaValue}>{course.lessons}</span>
                  </div>
                </div>
                
                <div className={styles.priceSection}>
                  <div className={styles.price}>
                    <span className={styles.currentPrice}>{course.price}</span>
                    <span className={styles.originalPrice}>{course.originalPrice}</span>
                  </div>
                  <div className={styles.discount}>Save 25%</div>
                </div>
                
                <ul className={styles.featuresList}>
                  {course.features.map((feature, index) => (
                    <li key={index} className={styles.featureItem}>
                      <span className={styles.checkmark}>✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <button className={styles.enrollButton}>
                  Enroll Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className={styles.sectionContainer}>
          <div className={styles.ctaContent}>
            <h2 className={styles.ctaTitle}>Not Sure Which Course is Right for You?</h2>
            <p className={styles.ctaDescription}>
              Take our free assessment test and get personalized course recommendations 
              based on your current level and goals.
            </p>
            <div className={styles.ctaButtons}>
              <button className={styles.primaryButton}>Take Free Assessment</button>
              <button className={styles.secondaryButton}>Book Consultation</button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}