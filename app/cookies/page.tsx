import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import styles from './cookies.module.css';
import { Cookie, Shield, Settings, Eye, Database, Globe, Clock, Check, AlertCircle, Info } from 'lucide-react';

export default function CookiePolicyPage() {
  const lastUpdated = "December 1, 2024";

  const cookieTypes = [
    {
      title: "Essential Cookies",
      icon: <Shield className={styles.cookieIcon} />,
      description: "These cookies are necessary for the website to function and cannot be switched off in our systems.",
      examples: ["Session management", "Authentication", "Security features"],
      retention: "Session or 1 year",
      canDisable: false,
      color: "essential"
    },
    {
      title: "Analytics Cookies",
      icon: <Database className={styles.cookieIcon} />,
      description: "These cookies help us understand how visitors interact with our website by collecting information anonymously.",
      examples: ["Google Analytics", "Page views", "User behavior tracking"],
      retention: "2 years",
      canDisable: true,
      color: "analytics"
    },
    {
      title: "Functional Cookies",
      icon: <Settings className={styles.cookieIcon} />,
      description: "These cookies enable enhanced functionality and personalization, such as remembering your preferences.",
      examples: ["Language preferences", "Theme settings", "Progress tracking"],
      retention: "1 year",
      canDisable: true,
      color: "functional"
    },
    {
      title: "Marketing Cookies",
      icon: <Globe className={styles.cookieIcon} />,
      description: "These cookies are used to deliver advertisements more relevant to you and your interests.",
      examples: ["Ad targeting", "Social media integration", "Marketing campaigns"],
      retention: "6 months to 2 years",
      canDisable: true,
      color: "marketing"
    }
  ];

  const cookieDetails = [
    {
      category: "Essential Cookies",
      cookies: [
        {
          name: "sessionid",
          purpose: "Maintains your login session",
          duration: "Session",
          type: "HTTP Cookie"
        },
        {
          name: "csrf_token",
          purpose: "Protects against cross-site request forgery",
          duration: "Session",
          type: "HTTP Cookie"
        },
        {
          name: "user_preferences",
          purpose: "Stores your account preferences",
          duration: "1 year",
          type: "HTTP Cookie"
        }
      ]
    },
    {
      category: "Analytics Cookies",
      cookies: [
        {
          name: "_ga",
          purpose: "Distinguishes unique users",
          duration: "2 years",
          type: "HTTP Cookie"
        },
        {
          name: "_gid",
          purpose: "Distinguishes unique users",
          duration: "24 hours",
          type: "HTTP Cookie"
        },
        {
          name: "_gat",
          purpose: "Throttles request rate",
          duration: "1 minute",
          type: "HTTP Cookie"
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
            <h1 className={styles.heroTitle}>Cookie Policy</h1>
            <p className={styles.heroSubtitle}>
              Learn about how IELTSAce uses cookies and similar technologies to enhance 
              your experience, analyze our website traffic, and improve our services.
            </p>
            <div className={styles.heroMeta}>
              <div className={styles.metaItem}>
                <Cookie className={styles.metaIcon} />
                <span>Last Updated: {lastUpdated}</span>
              </div>
              <div className={styles.metaItem}>
                <Shield className={styles.metaIcon} />
                <span>GDPR Compliant</span>
              </div>
            </div>
          </div>
          <div className={styles.heroVisual}>
            <div className={styles.cookieVisual}>
              <div className={styles.floatingCookie} data-type="main">
                <Cookie className={styles.visualIcon} />
              </div>
              <div className={styles.floatingCookie} data-type="shield">
                <Shield className={styles.visualIcon} />
              </div>
              <div className={styles.floatingCookie} data-type="settings">
                <Settings className={styles.visualIcon} />
              </div>
              <div className={styles.floatingCookie} data-type="analytics">
                <Database className={styles.visualIcon} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cookie Types Overview */}
      <section className={styles.typesSection}>
        <div className={styles.sectionContainer}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Types of Cookies We Use</h2>
            <p className={styles.sectionSubtitle}>
              We use different types of cookies to provide you with the best possible experience on our website.
            </p>
          </div>
          <div className={styles.cookieGrid}>
            {cookieTypes.map((type, index) => (
              <div key={index} className={`${styles.cookieCard} ${styles[type.color]}`}>
                <div className={styles.cardHeader}>
                  <div className={styles.iconWrapper}>
                    {type.icon}
                  </div>
                  <h3 className={styles.cardTitle}>{type.title}</h3>
                </div>
                <p className={styles.cardDescription}>{type.description}</p>
                <div className={styles.cardDetails}>
                  <div className={styles.detailItem}>
                    <Clock className={styles.detailIcon} />
                    <span>Retention: {type.retention}</span>
                  </div>
                  <div className={styles.detailItem}>
                    {type.canDisable ? (
                      <>
                        <Settings className={styles.detailIcon} />
                        <span>Can be disabled</span>
                      </>
                    ) : (
                      <>
                        <Shield className={styles.detailIcon} />
                        <span>Always active</span>
                      </>
                    )}
                  </div>
                </div>
                <div className={styles.cardExamples}>
                  <h4>Examples:</h4>
                  <ul>
                    {type.examples.map((example, i) => (
                      <li key={i}>
                        <Check className={styles.exampleIcon} />
                        {example}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What Are Cookies */}
      <section className={styles.explanationSection}>
        <div className={styles.sectionContainer}>
          <div className={styles.explanationContent}>
            <div className={styles.explanationText}>
              <h2>What Are Cookies?</h2>
              <p>
                Cookies are small text files that are placed on your device when you visit our website. 
                They help us provide you with a better experience by remembering your preferences, 
                analyzing how you use our site, and personalizing content.
              </p>
              <p>
                Most web browsers automatically accept cookies, but you can modify your browser settings 
                to decline cookies if you prefer. However, this may prevent you from taking full advantage 
                of our website&apos;s features.
              </p>
              <div className={styles.infoBox}>
                <Info className={styles.infoIcon} />
                <div>
                  <h4>Did you know?</h4>
                  <p>
                    The name &ldquo;cookie&rdquo; comes from &ldquo;magic cookie,&rdquo; a term used in computer science 
                    for a piece of data that a program receives and sends back unchanged.
                  </p>
                </div>
              </div>
            </div>
            <div className={styles.explanationVisual}>
              <div className={styles.cookieDiagram}>
                <div className={styles.browserBox}>
                  <Eye className={styles.browserIcon} />
                  <span>Your Browser</span>
                </div>
                <div className={styles.connectionLine}></div>
                <div className={styles.serverBox}>
                  <Database className={styles.serverIcon} />
                  <span>Our Website</span>
                </div>
                <div className={styles.cookieFlow}>
                  <Cookie className={styles.flowIcon} />
                  <span>Cookies</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cookie Details Table */}
      <section className={styles.detailsSection}>
        <div className={styles.sectionContainer}>
          <h2 className={styles.sectionTitle}>Detailed Cookie Information</h2>
          <p className={styles.sectionSubtitle}>
            Below is a comprehensive list of cookies we use, their purpose, and duration.
          </p>
          
          {cookieDetails.map((category, index) => (
            <div key={index} className={styles.categorySection}>
              <h3 className={styles.categoryTitle}>{category.category}</h3>
              <div className={styles.cookieTable}>
                <div className={styles.tableHeader}>
                  <div className={styles.headerCell}>Cookie Name</div>
                  <div className={styles.headerCell}>Purpose</div>
                  <div className={styles.headerCell}>Duration</div>
                  <div className={styles.headerCell}>Type</div>
                </div>
                {category.cookies.map((cookie, i) => (
                  <div key={i} className={styles.tableRow}>
                    <div className={styles.tableCell}>
                      <code className={styles.cookieName}>{cookie.name}</code>
                    </div>
                    <div className={styles.tableCell}>{cookie.purpose}</div>
                    <div className={styles.tableCell}>{cookie.duration}</div>
                    <div className={styles.tableCell}>{cookie.type}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Cookie Settings */}
      <section className={styles.settingsSection}>
        <div className={styles.sectionContainer}>
          <div className={styles.settingsContent}>
            <div className={styles.settingsText}>
              <h2>Manage Your Cookie Preferences</h2>
              <p>
                You have control over which cookies you accept. You can manage your preferences 
                through your browser settings or through our cookie preference center.
              </p>
              <div className={styles.settingsOptions}>
                <div className={styles.optionItem}>
                  <h4>Browser Settings</h4>
                  <p>Configure cookie settings directly in your web browser.</p>
                </div>
                <div className={styles.optionItem}>
                  <h4>Preference Center</h4>
                  <p>Use our cookie preference tool to customize your experience.</p>
                </div>
              </div>
            </div>
            <div className={styles.settingsActions}>
              <button className={styles.primaryButton}>
                <Settings className={styles.buttonIcon} />
                Cookie Preferences
              </button>
              <button className={styles.secondaryButton}>
                <Eye className={styles.buttonIcon} />
                View All Cookies
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className={styles.contactSection}>
        <div className={styles.sectionContainer}>
          <div className={styles.contactBox}>
            <div className={styles.contactHeader}>
              <AlertCircle className={styles.contactIcon} />
              <h2>Questions About Our Cookie Policy?</h2>
            </div>
            <p>
              If you have any questions about our use of cookies or this Cookie Policy, 
              please don&apos;t hesitate to contact us.
            </p>
            <div className={styles.contactDetails}>
              <div className={styles.contactItem}>
                <strong>Email:</strong> privacy@IELTSAce.com
              </div>
              <div className={styles.contactItem}>
                <strong>Response Time:</strong> Within 48 hours
              </div>
            </div>
            <div className={styles.contactNote}>
              <Info className={styles.noteIcon} />
              <span>We take your privacy seriously and are committed to protecting your personal information.</span>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
