'use client';

import { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingImages from '@/components/FloatingImages';
import styles from './courses.module.css';

interface Game {
  id: number;
  title: string;
  thumbnail: string;
  short_description: string;
  game_url: string;
  genre: string;
  platform: string;
  publisher: string;
  developer: string;
  release_date: string;
  freetogame_profile_url: string;
}

export default function CoursesPage() {
  const [allGames, setAllGames] = useState<Game[]>([]);
  const [displayedGames, setDisplayedGames] = useState<Game[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const gamesPerPage = 10;

  // Fetch games from API
  useEffect(() => {
    const fetchGames = async () => {
      try {
        setLoading(true);
        setError(null);
        console.log('Fetching games from API...');
        const response = await fetch('/api/games');
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const games: Game[] = await response.json();
        console.log('Fetched games:', games.length);
        setAllGames(games);
        setDisplayedGames(games.slice(0, gamesPerPage));
      } catch (error) {
        console.error('Error fetching games:', error);
        setError(error instanceof Error ? error.message : 'Failed to fetch courses');
      } finally {
        setLoading(false);
      }
    };

    fetchGames();
  }, []);

  // Load more games
  const loadMoreGames = () => {
    setLoadingMore(true);
    setTimeout(() => {
      const nextPage = currentPage + 1;
      const startIndex = currentPage * gamesPerPage;
      const endIndex = nextPage * gamesPerPage;
      const newGames = allGames.slice(startIndex, endIndex);
      setDisplayedGames(prev => [...prev, ...newGames]);
      setCurrentPage(nextPage);
      setLoadingMore(false);
    }, 500); // Small delay for better UX
  };

  // Check if there are more games to load
  const hasMoreGames = displayedGames.length < allGames.length;

  // Convert game data to course format for display
  const getGameFeatures = (game: Game) => [
    `Genre: ${game.genre}`,
    `Platform: ${game.platform}`,
    `Publisher: ${game.publisher}`,
    `Developer: ${game.developer}`,
    `Released: ${game.release_date}`,
    "Free to Play"
  ];

  const getRandomPrice = () => {
    const prices = ["$99", "$149", "$199", "$249", "$299"];
    return prices[Math.floor(Math.random() * prices.length)];
  };

  const getRandomOriginalPrice = (price: string) => {
    const current = parseInt(price.replace('$', ''));
    return `$${current + 50}`;
  };

  const getRandomColor = () => {
    const colors = ["blue", "green", "purple", "orange"];
    return colors[Math.floor(Math.random() * colors.length)];
  };

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
          
          {loading ? (
            <div className={styles.loading}>
              <p>Loading courses...</p>
            </div>
          ) : error ? (
            <div className={styles.error}>
              <p>Error loading courses: {error}</p>
              <button onClick={() => window.location.reload()} className={styles.retryButton}>
                Retry
              </button>
            </div>
          ) : displayedGames.length === 0 ? (
            <div className={styles.noData}>
              <p>No courses available at the moment.</p>
            </div>
          ) : (
            <>
              <div className={styles.coursesGrid}>
                {displayedGames.map((game, index) => {
                  const price = getRandomPrice();
                  const originalPrice = getRandomOriginalPrice(price);
                  const color = getRandomColor();
                  const isPopular = index % 4 === 0; // Make every 4th course popular
                  
                  return (
                    <div 
                      key={game.id} 
                      className={`${styles.courseCard} ${isPopular ? styles.popular : ''}`}
                      data-color={color}
                    >
                      {isPopular && (
                        <div className={styles.popularBadge}>Most Popular</div>
                      )}
                      
                      <div className={styles.courseHeader}>
                        <h3 className={styles.courseTitle}>{game.title}</h3>
                        <div className={styles.courseLevel}>{game.genre}</div>
                      </div>
                      
                      <div className={styles.courseMeta}>
                        <div className={styles.metaItem}>
                          <span className={styles.metaLabel}>Platform:</span>
                          <span className={styles.metaValue}>{game.platform}</span>
                        </div>
                        <div className={styles.metaItem}>
                          <span className={styles.metaLabel}>Publisher:</span>
                          <span className={styles.metaValue}>{game.publisher}</span>
                        </div>
                      </div>
                      
                      <div className={styles.priceSection}>
                        <div className={styles.price}>
                          <span className={styles.currentPrice}>{price}</span>
                          <span className={styles.originalPrice}>{originalPrice}</span>
                        </div>
                        <div className={styles.discount}>Save 25%</div>
                      </div>
                      
                      <p className={styles.courseDescription}>
                        {game.short_description}
                      </p>
                      
                      <ul className={styles.featuresList}>
                        {getGameFeatures(game).map((feature, featureIndex) => (
                          <li key={featureIndex} className={styles.featureItem}>
                            <span className={styles.checkmark}>✓</span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                      
                      <button className={styles.enrollButton}>
                        Enroll Now
                      </button>
                    </div>
                  );
                })}
              </div>
              
              {hasMoreGames && (
                <div className={styles.loadMoreContainer}>
                  <button 
                    className={styles.loadMoreButton}
                    onClick={loadMoreGames}
                    disabled={loadingMore}
                  >
                    {loadingMore ? 'Loading...' : 'Load More'}
                  </button>
                  <p className={styles.loadMoreInfo}>
                    Showing {displayedGames.length} of {allGames.length} courses
                  </p>
                </div>
              )}
            </>
          )}
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