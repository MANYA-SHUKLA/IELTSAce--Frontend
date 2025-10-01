'use client';

import React from 'react';

interface FloatingImagesProps {
  theme?: 'education' | 'business' | 'tech' | 'success' | 'support' | 'default';
}

const FloatingImages: React.FC<FloatingImagesProps> = ({ theme = 'default' }) => {
  const getThemeImages = (theme: string) => {
    const baseImages = {
      education: [
        '📚', '🎓', '📝', '💡', '🌟', '✏️', '📖', '🔍'
      ],
      business: [
        '💼', '📊', '🎯', '💰', '🏆', '📈', '💎', '🌐'
      ],
      tech: [
        '💻', '⚙️', '🔧', '📱', '🌐', '🚀', '💡', '⭐'
      ],
      success: [
        '🏆', '🎉', '⭐', '✨', '🎯', '🌟', '💫', '🥇'
      ],
      support: [
        '🤝', '💬', '❓', '📞', '💙', '🎧', '✉️', '🆘'
      ],
      default: [
        '📚', '🎓', '⭐', '💡', '🌟', '✨', '🎯', '💫'
      ]
    };
    
    return baseImages[theme as keyof typeof baseImages] || baseImages.default;
  };

  const images = getThemeImages(theme);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {images.map((emoji, index) => (
        <div
          key={index}
          className={`floating-image floating-image-${index + 1} ${
            index % 2 === 0 ? 'float-animation' : 'float-reverse'
          } ${index % 3 === 0 ? 'gentle-spin' : ''}`}
          style={{
            fontSize: index % 4 === 0 ? '2.5rem' : '2rem',
            zIndex: 1,
            opacity: index % 3 === 0 ? 0.6 : 0.4,
            transform: `rotate(${index * 20}deg)`,
            filter: 'drop-shadow(0 0 10px rgba(0,0,0,0.1))',
          }}
        >
          {emoji}
        </div>
      ))}
      
      {/* Enhanced decorative elements */}
      <div className="floating-image floating-image-center gentle-spin opacity-20">
        <div className="w-24 h-24 rounded-full bg-gradient-to-r from-blue-400 via-purple-400 to-emerald-400 blur-sm"></div>
      </div>
      
      <div className="floating-image" style={{ top: '20%', right: '15%', zIndex: 1 }}>
        <div className="w-16 h-16 rounded-full bg-gradient-to-r from-orange-400 via-pink-400 to-purple-400 opacity-30 float-animation blur-sm"></div>
      </div>
      
      <div className="floating-image" style={{ top: '60%', right: '25%', zIndex: 1 }}>
        <div className="w-12 h-12 rounded-full bg-gradient-to-r from-green-400 to-blue-400 opacity-35 float-animation blur-sm"></div>
      </div>
      
      <div className="floating-image" style={{ bottom: '30%', left: '20%', zIndex: 1 }}>
        <div className="w-10 h-10 rounded-full bg-gradient-to-r from-yellow-400 to-orange-400 opacity-25 float-reverse blur-sm"></div>
      </div>
      
      <div className="floating-image" style={{ top: '40%', left: '10%', zIndex: 1 }}>
        <div className="w-14 h-14 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 opacity-30 gentle-spin blur-sm"></div>
      </div>
    </div>
  );
};

export default FloatingImages;