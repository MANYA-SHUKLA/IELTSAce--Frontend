import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingImages from '@/components/FloatingImages';
import styles from './pricing.module.css';
import { Check, Star, Zap, Crown, Users, Award } from 'lucide-react';

export default function PricingPage() {
  const plans = [
    {
      id: 1,
      name: "Starter",
      description: "Perfect for beginners starting their IELTS journey",
      price: "$99",
      duration: "month",
      popular: false,
      icon: <Zap className={styles.planIcon} />,
      features: [
        "4 complete mock tests",
        "Basic speaking evaluation",
        "Writing task 1 evaluation",
        "Vocabulary builder",
        "Email support",
        "Progress tracking"
      ],
      buttonText: "Get Started",
      color: "blue"
    },
    {
      id: 2,
      name: "Pro",
      description: "Most popular choice for serious learners",
      price: "$199",
      duration: "month",
      popular: true,
      icon: <Crown className={styles.planIcon} />,
      features: [
        "8 complete mock tests",
        "Advanced AI speaking evaluation",
        "Writing task 1 & 2 evaluation",
        "Personalized study plan",
        "Priority email & chat support",
        "Band score prediction",
        "Expert video lessons",
        "Weekly progress reports"
      ],
      buttonText: "Choose Pro",
      color: "purple"
    },
    {
      id: 3,
      name: "Master",
      description: "Complete preparation with expert guidance",
      price: "$349",
      duration: "month",
      popular: false,
      icon: <Award className={styles.planIcon} />,
      features: [
        "Unlimited mock tests",
        "Premium AI speaking evaluation",
        "Writing evaluation with detailed feedback",
        "1-on-1 expert sessions (4/month)",
        "24/7 priority support",
        "Advanced band score analysis",
        "Custom study materials",
        "Exam strategy coaching",
        "Guaranteed score improvement"
      ],
      buttonText: "Go Master",
      color: "gold"
    }
  ];

  const features = [
    {
      icon: "🎯",
      title: "AI-Powered Evaluation",
      description: "Instant, accurate feedback on speaking and writing tasks"
    },
    {
      icon: "📊",
      title: "Detailed Analytics",
      description: "Track your progress with comprehensive performance reports"
    },
    {
      icon: "👨‍🏫",
      title: "Expert Instructors",
      description: "Learn from certified IELTS experts with proven results"
    },
    {
      icon: "🔄",
      title: "Flexible Learning",
      description: "Study at your own pace with 24/7 access to all materials"
    }
  ];

  const faqs = [
    {
      question: "Can I switch plans later?",
      answer: "Yes, you can upgrade or downgrade your plan at any time. The changes will be reflected in your next billing cycle."
    },
    {
      question: "Do you offer refunds?",
      answer: "We offer a 14-day money-back guarantee if you're not satisfied with our service. No questions asked."
    },
    {
      question: "How do the mock tests work?",
      answer: "Our mock tests simulate the real IELTS exam environment with timed sections and detailed performance analysis."
    },
    {
      question: "Is there a free trial?",
      answer: "Yes! We offer a 7-day free trial for all plans. You get full access to all features during the trial period."
    }
  ];

  return (
    <div className={styles.container}>
      <Navbar />
      
      {/* Hero Section */}
      <section className={styles.hero}>
        <FloatingImages theme="business" />
        <div className={styles.heroContent}>
          <div className={styles.heroBadge}>
            <Star className={styles.starIcon} />
            Trusted by 5,000+ Students
          </div>
          <h1 className={styles.heroTitle}>Simple, Transparent Pricing</h1>
          <p className={styles.heroSubtitle}>
            Choose the perfect plan for your IELTS journey. All plans include our proven methods 
            and are backed by our 14-day money-back guarantee.
          </p>
          <div className={styles.heroStats}>
            <div className={styles.stat}>
              <div className={styles.statNumber}>98%</div>
              <div className={styles.statLabel}>Success Rate</div>
            </div>
            <div className={styles.stat}>
              <div className={styles.statNumber}>7.5+</div>
              <div className={styles.statLabel}>Average Score</div>
            </div>
            <div className={styles.stat}>
              <div className={styles.statNumber}>24/7</div>
              <div className={styles.statLabel}>Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Toggle */}
      <section className={styles.toggleSection}>
        <div className={styles.toggleContainer}>
          <div className={styles.toggleWrapper}>
            <span className={styles.toggleLabel}>Monthly</span>
            <div className={styles.toggleSwitch}>
              <input type="checkbox" id="billing-toggle" className={styles.toggleInput} />
              <label htmlFor="billing-toggle" className={styles.toggleLabel}>
                <span className={styles.toggleSlider}></span>
              </label>
            </div>
            <span className={styles.toggleLabel}>
              Yearly <span className={styles.discountBadge}>Save 20%</span>
            </span>
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className={styles.pricingSection}>
        <div className={styles.sectionContainer}>
          <div className={styles.pricingGrid}>
            {plans.map((plan) => (
              <div 
                key={plan.id} 
                className={`${styles.pricingCard} ${plan.popular ? styles.popular : ''}`}
                data-color={plan.color}
              >
                {plan.popular && (
                  <div className={styles.popularBadge}>
                    <Crown className={styles.crownIcon} />
                    Most Popular
                  </div>
                )}
                
                <div className={styles.planHeader}>
                  <div className={styles.planIconWrapper}>
                    {plan.icon}
                  </div>
                  <h3 className={styles.planName}>{plan.name}</h3>
                  <p className={styles.planDescription}>{plan.description}</p>
                </div>

                <div className={styles.priceSection}>
                  <div className={styles.price}>
                    <span className={styles.priceAmount}>{plan.price}</span>
                    <span className={styles.priceDuration}>/{plan.duration}</span>
                  </div>
                  {plan.popular && (
                    <div className={styles.bestValue}>Best Value</div>
                  )}
                </div>

                <ul className={styles.featuresList}>
                  {plan.features.map((feature, index) => (
                    <li key={index} className={styles.featureItem}>
                      <Check className={styles.checkIcon} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className={`${styles.planButton} ${plan.popular ? styles.popularButton : ''}`}>
                  {plan.buttonText}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className={styles.featuresSection}>
        <div className={styles.sectionContainer}>
          <h2 className={styles.sectionTitle}>Everything You Need to Succeed</h2>
          <p className={styles.sectionSubtitle}>
            All plans include these powerful features to help you achieve your target band score
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

      {/* FAQ Section */}
      <section className={styles.faqSection}>
        <div className={styles.sectionContainer}>
          <h2 className={styles.sectionTitle}>Frequently Asked Questions</h2>
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
            <Users className={styles.ctaIcon} />
            <h2 className={styles.ctaTitle}>Ready to Start Your IELTS Journey?</h2>
            <p className={styles.ctaDescription}>
              Join thousands of successful students who achieved their dream scores with our proven methods. 
              Start with a 7-day free trial - no credit card required.
            </p>
            <div className={styles.ctaButtons}>
              <Link href="/free-trial" className={styles.primaryButton}>Start Free Trial</Link>
              <Link href="/free-trial" className={styles.secondaryButton}>Schedule a Demo</Link>
            </div>
            <div className={styles.ctaNote}>
              <Check className={styles.smallCheck} />
              14-day money-back guarantee • No hidden fees • Cancel anytime
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}