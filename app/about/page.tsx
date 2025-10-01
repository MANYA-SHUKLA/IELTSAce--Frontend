import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingImages from '@/components/FloatingImages';
import styles from './about.module.css';
import { Award, Users, Target, Star, Quote, Check, Play, Mail, Phone, MapPin } from 'lucide-react';

export default function AboutPage() {
  const stats = [
    {
      number: "5,000+",
      label: "Students Trained",
      icon: <Users className={styles.statIcon} />
    },
    {
      number: "98%",
      label: "Success Rate",
      icon: <Target className={styles.statIcon} />
    },
    {
      number: "7.5",
      label: "Average Band Score",
      icon: <Star className={styles.statIcon} />
    },
    {
      number: "50+",
      label: "Expert Instructors",
      icon: <Award className={styles.statIcon} />
    }
  ];

  const team = [
    {
      name: "Dr. Sarah Chen",
      role: "Founder & Head Instructor",
      experience: "15+ years IELTS experience",
      bio: "Former IELTS examiner with a PhD in Applied Linguistics. Sarah has helped thousands of students achieve their dream scores.",
      image: "SC",
      color: "blue"
    },
    {
      name: "Michael Rodriguez",
      role: "Speaking Specialist",
      experience: "12 years teaching experience",
      bio: "Specialized in pronunciation and fluency training. Michael's students consistently achieve 7.5+ in speaking.",
      image: "MR",
      color: "green"
    },
    {
      name: "Dr. Emily Watson",
      role: "Writing Coach",
      experience: "PhD in English Literature",
      bio: "Expert in academic writing with published research. Emily's structured approach helps students master writing tasks.",
      image: "EW",
      color: "purple"
    },
    {
      name: "James Kim",
      role: "AI Technology Lead",
      experience: "10+ years in EdTech",
      bio: "Leads our AI development team, creating innovative tools for personalized learning and instant feedback.",
      image: "JK",
      color: "orange"
    }
  ];

  const values = [
    {
      icon: "🎯",
      title: "Personalized Learning",
      description: "Every student gets a customized study plan based on their current level and target score."
    },
    {
      icon: "🤖",
      title: "Innovation First",
      description: "We leverage cutting-edge AI technology to provide instant, accurate feedback and insights."
    },
    {
      icon: "👨‍🏫",
      title: "Expert Guidance",
      description: "Learn from certified IELTS experts with proven track records and years of experience."
    },
    {
      icon: "💪",
      title: "Proven Results",
      description: "Our methods are backed by data and thousands of success stories from satisfied students."
    }
  ];

  const milestones = [
    {
      year: "2018",
      title: "IELTSAce Founded",
      description: "Started with a vision to revolutionize IELTS preparation"
    },
    {
      year: "2019",
      title: "AI Technology Integration",
      description: "Launched our first AI-powered speaking evaluation system"
    },
    {
      year: "2020",
      title: "1,000 Students",
      description: "Reached our first major milestone of 1,000 successful students"
    },
    {
      year: "2022",
      title: "Platform 2.0 Launch",
      description: "Completely redesigned platform with advanced analytics"
    },
    {
      year: "2023",
      title: "5,000+ Students",
      description: "Expanded our reach globally with students from 50+ countries"
    }
  ];

  return (
    <div className={styles.container}>
      <Navbar />
      
      {/* Hero Section */}
      <section className={styles.hero}>
        <FloatingImages theme="education" />
        <div className={styles.heroContent}>
          <div className={styles.heroText}>
            <h1 className={styles.heroTitle}>Transforming IELTS Preparation</h1>
            <p className={styles.heroSubtitle}>
              At IELTSAce, we combine cutting-edge technology with expert human guidance 
              to help students achieve their dream band scores. Founded by former IELTS 
              examiners, we understand what it takes to succeed.
            </p>
            <div className={styles.heroButtons}>
              <button className={styles.primaryButton}>
                <Play className={styles.buttonIcon} />
                Watch Our Story
              </button>
              <button className={styles.secondaryButton}>
                Meet Our Team
              </button>
            </div>
          </div>
          <div className={styles.heroVisual}>
            <div className={styles.visualCard}>
              <div className={styles.cardHeader}>
                <div className={styles.cardDots}>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
              <div className={styles.cardContent}>
                <div className={styles.successRate}>
                  <div className={styles.rateCircle}>
                    <span>98%</span>
                    <small>Success Rate</small>
                  </div>
                </div>
                <div className={styles.achievementList}>
                  <div className={styles.achievement}>
                    <Check className={styles.checkIcon} />
                    <span>5,000+ Students Trained</span>
                  </div>
                  <div className={styles.achievement}>
                    <Check className={styles.checkIcon} />
                    <span>7.5 Average Band Score</span>
                  </div>
                  <div className={styles.achievement}>
                    <Check className={styles.checkIcon} />
                    <span>50+ Expert Instructors</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className={styles.statsSection}>
        <div className={styles.sectionContainer}>
          <div className={styles.statsGrid}>
            {stats.map((stat, index) => (
              <div key={index} className={styles.statCard}>
                <div className={styles.statIconWrapper}>
                  {stat.icon}
                </div>
                <div className={styles.statNumber}>{stat.number}</div>
                <div className={styles.statLabel}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className={styles.missionSection}>
        <div className={styles.sectionContainer}>
          <div className={styles.missionContent}>
            <div className={styles.missionText}>
              <h2 className={styles.sectionTitle}>Our Mission</h2>
              <p className={styles.missionDescription}>
                To democratize high-quality IELTS preparation by making expert guidance 
                and cutting-edge technology accessible to students worldwide. We believe 
                that everyone deserves the opportunity to achieve their dreams of studying 
                or working abroad.
              </p>
              <div className={styles.missionQuote}>
                <Quote className={styles.quoteIcon} />
                <blockquote>
                  &ldquo;We don&apos;t just teach English; we build confidence and unlock opportunities.&rdquo;
                </blockquote>
                <cite>— Dr. Sarah Chen, Founder</cite>
              </div>
            </div>
            <div className={styles.missionImage}>
              <div className={styles.imagePlaceholder}>
                <div className={styles.floatingElement}></div>
                <div className={styles.floatingElement}></div>
                <div className={styles.floatingElement}></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className={styles.valuesSection}>
        <div className={styles.sectionContainer}>
          <h2 className={styles.sectionTitle}>Our Values</h2>
          <p className={styles.sectionSubtitle}>
            These core principles guide everything we do at IELTSAce
          </p>
          <div className={styles.valuesGrid}>
            {values.map((value, index) => (
              <div key={index} className={styles.valueCard}>
                <div className={styles.valueIcon}>{value.icon}</div>
                <h3 className={styles.valueTitle}>{value.title}</h3>
                <p className={styles.valueDescription}>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className={styles.teamSection}>
        <div className={styles.sectionContainer}>
          <h2 className={styles.sectionTitle}>Meet Our Expert Team</h2>
          <p className={styles.sectionSubtitle}>
            Learn from the best in the industry
          </p>
          <div className={styles.teamGrid}>
            {team.map((member, index) => (
              <div key={index} className={styles.teamCard} data-color={member.color}>
                <div className={styles.memberImage} data-color={member.color}>
                  {member.image}
                </div>
                <div className={styles.memberInfo}>
                  <h3 className={styles.memberName}>{member.name}</h3>
                  <div className={styles.memberRole}>{member.role}</div>
                  <div className={styles.memberExperience}>{member.experience}</div>
                  <p className={styles.memberBio}>{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className={styles.timelineSection}>
        <div className={styles.sectionContainer}>
          <h2 className={styles.sectionTitle}>Our Journey</h2>
          <p className={styles.sectionSubtitle}>
            From humble beginnings to industry leadership
          </p>
          <div className={styles.timeline}>
            {milestones.map((milestone, index) => (
              <div key={index} className={styles.timelineItem}>
                <div className={styles.timelineMarker}></div>
                <div className={styles.timelineContent}>
                  <div className={styles.timelineYear}>{milestone.year}</div>
                  <h3 className={styles.timelineTitle}>{milestone.title}</h3>
                  <p className={styles.timelineDescription}>{milestone.description}</p>
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
            <h2 className={styles.ctaTitle}>Ready to Start Your Success Story?</h2>
            <p className={styles.ctaDescription}>
              Join thousands of students who have transformed their futures with IELTSAce. 
              Let us help you achieve the band score you need for your dreams.
            </p>
            <div className={styles.ctaButtons}>
              <Link href="/free-trial" className={styles.ctaPrimary}>Start Free Trial</Link>
              <Link href="/contact" className={styles.ctaSecondary}>Contact Us</Link>
            </div>
            <div className={styles.contactInfo}>
              <div className={styles.contactItem}>
                <Mail className={styles.contactIcon} />
                <span>hello@IELTSAce.com</span>
              </div>
              <div className={styles.contactItem}>
                <Phone className={styles.contactIcon} />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className={styles.contactItem}>
                <MapPin className={styles.contactIcon} />
                <span>123 Education Street, Learning City</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}