import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import styles from './terms.module.css';
import { FileText, Scale, User, CreditCard, AlertCircle, BookOpen } from 'lucide-react';

export default function TermsOfServicePage() {
  const lastUpdated = "December 1, 2024";

  const termsSections = [
    {
      title: "Account Registration",
      icon: <User className={styles.sectionIcon} />,
      content: [
        {
          subtitle: "Eligibility",
          description: "You must be at least 16 years old to use IELTSAce. By creating an account, you represent that you meet this age requirement and have the legal capacity to enter into this agreement."
        },
        {
          subtitle: "Account Security",
          description: "You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. Notify us immediately of any unauthorized use."
        },
        {
          subtitle: "Account Information",
          description: "You agree to provide accurate, current, and complete information during registration and to update such information to keep it accurate."
        }
      ]
    },
    {
      title: "Services and Features",
      icon: <BookOpen className={styles.sectionIcon} />,
      content: [
        {
          subtitle: "IELTS Preparation Services",
          description: "We provide IELTS preparation materials, practice tests, AI-powered evaluations, and learning resources. While we strive for accuracy, we cannot guarantee specific test outcomes."
        },
        {
          subtitle: "Service Modifications",
          description: "We reserve the right to modify, suspend, or discontinue any part of our services at any time, with or without notice."
        },
        {
          subtitle: "Technical Requirements",
          description: "You are responsible for ensuring you have the necessary equipment, software, and internet connection to access our services."
        }
      ]
    },
    {
      title: "Payments and Billing",
      icon: <CreditCard className={styles.sectionIcon} />,
      content: [
        {
          subtitle: "Subscription Plans",
          description: "We offer various subscription plans with different features. All fees are stated in your local currency and are exclusive of applicable taxes."
        },
        {
          subtitle: "Automatic Renewal",
          description: "Subscriptions automatically renew at the end of each billing period unless canceled at least 24 hours before the renewal date."
        },
        {
          subtitle: "Refund Policy",
          description: "We offer a 14-day money-back guarantee for new subscriptions. Refund requests must be submitted through our support system."
        },
        {
          subtitle: "Price Changes",
          description: "We may change subscription fees with 30 days' notice. Continued use after price changes constitutes acceptance of new rates."
        }
      ]
    },
    {
      title: "User Conduct",
      icon: <AlertCircle className={styles.sectionIcon} />,
      content: [
        {
          subtitle: "Prohibited Activities",
          description: "You agree not to: misuse our services, attempt to gain unauthorized access, distribute malware, spam other users, or engage in any illegal activities."
        },
        {
          subtitle: "Content Usage",
          description: "Our learning materials are for personal, non-commercial use only. You may not redistribute, sell, or modify our content without permission."
        },
        {
          subtitle: "Academic Integrity",
          description: "While we provide preparation materials, you must maintain academic integrity and not use our services to gain unfair advantages in official tests."
        }
      ]
    },
    {
      title: "Intellectual Property",
      icon: <FileText className={styles.sectionIcon} />,
      content: [
        {
          subtitle: "Our Content",
          description: "All content on IELTSAce, including text, graphics, logos, and software, is our property or licensed to us and protected by intellectual property laws."
        },
        {
          subtitle: "User Content",
          description: "You retain ownership of content you create, but grant us a license to use it for providing and improving our services."
        },
        {
          subtitle: "Limited License",
          description: "We grant you a limited, non-exclusive, non-transferable license to access and use our services for personal IELTS preparation purposes."
        }
      ]
    },
    {
      title: "Limitation of Liability",
      icon: <Scale className={styles.sectionIcon} />,
      content: [
        {
          subtitle: "Service Availability",
          description: "We strive to provide reliable services but cannot guarantee uninterrupted access. We are not liable for any downtime or service interruptions."
        },
        {
          subtitle: "Test Results",
          description: "While we aim to help you improve your IELTS skills, we cannot guarantee specific band scores. Your actual test results depend on various factors."
        },
        {
          subtitle: "Damages",
          description: "To the extent permitted by law, our total liability for any claims related to our services shall not exceed the amount you paid us in the past 12 months."
        }
      ]
    }
  ];

  return (
    <div className={styles.container}>
      <Navbar />
      
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <div className={styles.heroText}>
            <h1 className={styles.heroTitle}>Terms of Service</h1>
            <p className={styles.heroSubtitle}>
              Please read these terms carefully before using IELTSAce. These terms govern 
              your access to and use of our IELTS preparation services.
            </p>
            <div className={styles.heroMeta}>
              <div className={styles.metaItem}>
                <FileText className={styles.metaIcon} />
                <span>Last Updated: {lastUpdated}</span>
              </div>
              <div className={styles.metaItem}>
                <Scale className={styles.metaIcon} />
                <span>Legal Agreement</span>
              </div>
            </div>
          </div>
          <div className={styles.heroVisual}>
            <div className={styles.termsVisual}>
              <div className={styles.floatingIcon} data-type="file">
                <FileText className={styles.visualIcon} />
              </div>
              <div className={styles.floatingIcon} data-type="scale">
                <Scale className={styles.visualIcon} />
              </div>
              <div className={styles.floatingIcon} data-type="user">
                <User className={styles.visualIcon} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Navigation */}
      <section className={styles.navSection}>
        <div className={styles.sectionContainer}>
          <div className={styles.navContainer}>
            <h3 className={styles.navTitle}>Quick Navigation</h3>
            <div className={styles.navGrid}>
              {termsSections.map((section, index) => (
                <a key={index} href={`#section-${index}`} className={styles.navItem}>
                  {section.icon}
                  <span>{section.title}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Terms Content */}
      <section className={styles.contentSection}>
        <div className={styles.sectionContainer}>
          <div className={styles.contentWrapper}>
            {/* Introduction */}
            <div className={styles.introduction}>
              <h2>Agreement to Terms</h2>
              <p>
                Welcome to IELTSAce. These Terms of Service (&ldquo;Terms&rdquo;) govern your access to and 
                use of our website, services, and applications (collectively, the &ldquo;Services&rdquo;). 
                By accessing or using our Services, you agree to be bound by these Terms.
              </p>
              <p>
                If you are using our Services on behalf of an organization, you are agreeing to 
                these Terms for that organization and promising that you have the authority to 
                bind that organization to these Terms.
              </p>
              <div className={styles.importantNote}>
                <AlertCircle className={styles.importantIcon} />
                <div>
                  <strong>Important:</strong> These Terms include provisions that limit our liability 
                  and contain arbitration and class action waiver provisions that may affect your rights.
                </div>
              </div>
            </div>

            {/* Terms Sections */}
            <div className={styles.termsSections}>
              {termsSections.map((section, sectionIndex) => (
                <div key={sectionIndex} id={`section-${sectionIndex}`} className={styles.termsSection}>
                  <div className={styles.sectionHeader}>
                    <div className={styles.sectionIconWrapper}>
                      {section.icon}
                    </div>
                    <h2 className={styles.sectionTitle}>{section.title}</h2>
                  </div>
                  <div className={styles.sectionContent}>
                    {section.content.map((item, itemIndex) => (
                      <div key={itemIndex} className={styles.contentItem}>
                        <h3 className={styles.contentSubtitle}>{item.subtitle}</h3>
                        <p className={styles.contentDescription}>{item.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Additional Provisions */}
            <div className={styles.additionalSection}>
              <h2>Additional Provisions</h2>
              
              <div className={styles.provisionItem}>
                <h3>Termination</h3>
                <p>
                  We may suspend or terminate your access to our Services at any time for any reason, 
                  including if you violate these Terms. You may terminate your account at any time 
                  through your account settings.
                </p>
              </div>

              <div className={styles.provisionItem}>
                <h3>Governing Law</h3>
                <p>
                  These Terms shall be governed by the laws of the State of Delaware, without regard 
                  to its conflict of law provisions. Any disputes shall be resolved in the courts 
                  located in Delaware.
                </p>
              </div>

              <div className={styles.provisionItem}>
                <h3>Changes to Terms</h3>
                <p>
                  We may modify these Terms at any time. We will notify you of significant changes 
                  through our Services or by email. Continued use after changes constitutes acceptance 
                  of the modified Terms.
                </p>
              </div>

              <div className={styles.provisionItem}>
                <h3>Contact Information</h3>
                <p>
                  For questions about these Terms, please contact us at legal@IELTSAce.com. We typically 
                  respond to legal inquiries within 3 business days.
                </p>
              </div>
            </div>

            {/* Acceptance */}
            <div className={styles.acceptanceSection}>
              <div className={styles.acceptanceBox}>
                <h2>Acceptance of Terms</h2>
                <p>
                  By creating an account or using our Services, you acknowledge that you have read, 
                  understood, and agree to be bound by these Terms of Service and our Privacy Policy.
                </p>
                <div className={styles.acceptanceNote}>
                  <AlertCircle className={styles.acceptanceIcon} />
                  <span>If you do not agree to these Terms, please do not use our Services.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}