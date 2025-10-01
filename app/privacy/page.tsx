import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import styles from './privacy.module.css';
import { Shield, Lock, Eye, User, FileText, Calendar, Mail } from 'lucide-react';

export default function PrivacyPolicyPage() {
  const lastUpdated = "December 1, 2024";

  const policySections = [
    {
      title: "Information We Collect",
      icon: <User className={styles.sectionIcon} />,
      content: [
        {
          subtitle: "Personal Information",
          description: "When you create an account, we collect information such as your name, email address, and password. If you purchase a subscription, we collect payment information through our secure payment processors."
        },
        {
          subtitle: "Learning Data",
          description: "We collect information about your learning progress, test scores, practice results, and study habits to personalize your learning experience and provide targeted feedback."
        },
        {
          subtitle: "Technical Information",
          description: "We automatically collect information about your device and how you use our services, including IP address, browser type, operating system, and usage patterns."
        },
        {
          subtitle: "Communication Data",
          description: "When you contact our support team or participate in surveys, we collect the content of those communications and your contact information."
        }
      ]
    },
    {
      title: "How We Use Your Information",
      icon: <Eye className={styles.sectionIcon} />,
      content: [
        {
          subtitle: "Service Delivery",
          description: "To provide, maintain, and improve our IELTS preparation services, including personalized learning paths and practice tests."
        },
        {
          subtitle: "Communication",
          description: "To send you important updates about your account, service changes, and educational content that may interest you."
        },
        {
          subtitle: "Personalization",
          description: "To customize your learning experience based on your progress, strengths, and areas needing improvement."
        },
        {
          subtitle: "Analytics & Research",
          description: "To analyze usage patterns and conduct research to improve our services and develop new features."
        },
        {
          subtitle: "Security & Compliance",
          description: "To protect our services, prevent fraud, and comply with legal obligations."
        }
      ]
    },
    {
      title: "Information Sharing",
      icon: <FileText className={styles.sectionIcon} />,
      content: [
        {
          subtitle: "Service Providers",
          description: "We share information with trusted third-party service providers who assist us in operating our platform, such as hosting, payment processing, and analytics services."
        },
        {
          subtitle: "Legal Requirements",
          description: "We may disclose information when required by law, to protect our rights, or to ensure the safety of our users and the public."
        },
        {
          subtitle: "Business Transfers",
          description: "In the event of a merger, acquisition, or sale of assets, user information may be transferred as part of that transaction."
        },
        {
          subtitle: "Aggregated Data",
          description: "We may share aggregated, anonymized data that does not identify individual users for research and analytical purposes."
        }
      ]
    },
    {
      title: "Data Security",
      icon: <Lock className={styles.sectionIcon} />,
      content: [
        {
          subtitle: "Encryption",
          description: "We use industry-standard encryption protocols (SSL/TLS) to protect your data during transmission and at rest."
        },
        {
          subtitle: "Access Controls",
          description: "Strict access controls ensure that only authorized personnel can access your personal information, and only for legitimate business purposes."
        },
        {
          subtitle: "Regular Audits",
          description: "We conduct regular security assessments and penetration testing to identify and address potential vulnerabilities."
        },
        {
          subtitle: "Data Retention",
          description: "We retain your personal information only for as long as necessary to provide our services and fulfill the purposes outlined in this policy."
        }
      ]
    },
    {
      title: "Your Rights",
      icon: <Shield className={styles.sectionIcon} />,
      content: [
        {
          subtitle: "Access & Correction",
          description: "You have the right to access and update your personal information through your account settings or by contacting us."
        },
        {
          subtitle: "Data Portability",
          description: "You can request a copy of your personal data in a structured, machine-readable format."
        },
        {
          subtitle: "Deletion",
          description: "You may request deletion of your personal information, subject to certain legal obligations we may have."
        },
        {
          subtitle: "Marketing Preferences",
          description: "You can opt-out of marketing communications at any time by using the unsubscribe link in our emails or adjusting your account settings."
        },
        {
          subtitle: "Cookies",
          description: "You can control cookies through your browser settings and our cookie preference center."
        }
      ]
    },
    {
      title: "International Data Transfers",
      icon: <Calendar className={styles.sectionIcon} />,
      content: [
        {
          subtitle: "Global Operations",
          description: "As a global platform, we may transfer and process your information in countries outside of your residence, including the United States."
        },
        {
          subtitle: "Protection Measures",
          description: "We ensure appropriate safeguards are in place for international data transfers, including standard contractual clauses and adequacy decisions."
        },
        {
          subtitle: "Your Consent",
          description: "By using our services, you consent to the transfer and processing of your information in countries where we operate."
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
            <h1 className={styles.heroTitle}>Privacy Policy</h1>
            <p className={styles.heroSubtitle}>
              Your privacy is important to us. This policy explains how we collect, use, 
              and protect your personal information when you use IELTSAce.
            </p>
            <div className={styles.heroMeta}>
              <div className={styles.metaItem}>
                <Calendar className={styles.metaIcon} />
                <span>Last Updated: {lastUpdated}</span>
              </div>
              <div className={styles.metaItem}>
                <FileText className={styles.metaIcon} />
                <span>Version 2.1</span>
              </div>
            </div>
          </div>
          <div className={styles.heroVisual}>
            <div className={styles.privacyVisual}>
              <div className={styles.floatingIcon} data-type="shield">
                <Shield className={styles.visualIcon} />
              </div>
              <div className={styles.floatingIcon} data-type="lock">
                <Lock className={styles.visualIcon} />
              </div>
              <div className={styles.floatingIcon} data-type="eye">
                <Eye className={styles.visualIcon} />
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
              {policySections.map((section, index) => (
                <a key={index} href={`#section-${index}`} className={styles.navItem}>
                  {section.icon}
                  <span>{section.title}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Policy Content */}
      <section className={styles.contentSection}>
        <div className={styles.sectionContainer}>
          <div className={styles.contentWrapper}>
            {/* Introduction */}
            <div className={styles.introduction}>
              <h2>Introduction</h2>
              <p>
                Welcome to IELTSAce. We are committed to protecting your privacy and ensuring 
                the security of your personal information. This Privacy Policy describes how 
                we collect, use, disclose, and safeguard your information when you use our 
                IELTS preparation platform.
              </p>
              <p>
                By accessing or using IELTSAce, you agree to the terms of this Privacy Policy. 
                If you do not agree with the terms, please do not access or use our services.
              </p>
            </div>

            {/* Policy Sections */}
            <div className={styles.policySections}>
              {policySections.map((section, sectionIndex) => (
                <div key={sectionIndex} id={`section-${sectionIndex}`} className={styles.policySection}>
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

            {/* Contact Information */}
            <div className={styles.contactSection}>
              <h2>Contact Us</h2>
              <p>
                If you have any questions, concerns, or requests regarding this Privacy Policy 
                or our data practices, please contact our Privacy Team:
              </p>
              <div className={styles.contactMethods}>
                <div className={styles.contactItem}>
                  <Mail className={styles.contactIcon} />
                  <div>
                    <h4>Email</h4>
                    <p>privacy@IELTSAce.com</p>
                  </div>
                </div>
                <div className={styles.contactItem}>
                  <FileText className={styles.contactIcon} />
                  <div>
                    <h4>Data Protection Officer</h4>
                    <p>Sarah Chen, DPO</p>
                  </div>
                </div>
              </div>
              <p className={styles.contactNote}>
                We typically respond to privacy-related inquiries within 48 hours.
              </p>
            </div>

            {/* Policy Updates */}
            <div className={styles.updatesSection}>
              <h2>Policy Updates</h2>
              <p>
                We may update this Privacy Policy from time to time to reflect changes in our 
                practices, technology, legal requirements, or other factors. When we make changes, 
                we will update the &ldquo;Last Updated&rdquo; date at the top of this policy and, where appropriate, 
                notify you through our services or by email.
              </p>
              <p>
                We encourage you to periodically review this Privacy Policy to stay informed about 
                how we are protecting your information.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}