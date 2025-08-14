'use client';

import { memo, useMemo, useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Typography, Button } from '@/components/ui';
import { ScrollIndicator } from '@/components/business';
import type { BaseComponentProps } from '@/types';

interface VideoHeroSectionProps extends BaseComponentProps {
  videoSrc?: string;
  showScrollIndicator?: boolean;
  enableFloatingOrbs?: boolean;
  statistics?: Array<{
    value: string;
    label: string;
  }>;
}

// Memoized animation configurations
const HERO_ANIMATIONS = {
  title: {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 1, ease: "easeOut" }
  },
  subtitle: {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { delay: 0.4, duration: 0.8 }
  },
  buttons: {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { delay: 0.7, duration: 0.8 }
  }
} as const;

const VideoBackground = memo<{ src: string }>(({ src }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleCanPlay = () => {
      setIsLoaded(true);
      video.play().catch(() => {
        // Silently handle autoplay failures (common in some browsers)
      });
    };

    video.addEventListener('canplay', handleCanPlay);
    
    return () => {
      video.removeEventListener('canplay', handleCanPlay);
    };
  }, []);

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden">
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        style={{ transform: 'scale(1.02)' }} // Slight scale to prevent edge artifacts
      >
        <source src="https://res.cloudinary.com/ducuykhid/video/upload/v1754500559/copy_C8DB97E3-61AD-4016-A5F0-02347257FC20_hgh4vr.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      {/* Video overlay for text readability */}
      <div className="absolute inset-0 bg-black/40" />
      
      {/* Fallback background if video fails to load */}
      {!isLoaded && (
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700" />
      )}
    </div>
  );
});

VideoBackground.displayName = 'VideoBackground';

const VideoHeroTitle = memo(() => (
  <motion.div
    {...HERO_ANIMATIONS.title}
    className="mb-6"
  >
    <h1 className="text-xl md:text-2xl lg:text-3xl font-semibold text-white leading-relaxed tracking-normal">
      <span className="block mb-1">
        Powering the Future
      </span>
      <span className="block">
        of Soccer in America
      </span>
    </h1>
  </motion.div>
));

VideoHeroTitle.displayName = 'VideoHeroTitle';

const VideoHeroSubtitle = memo(() => (
  <motion.div {...HERO_ANIMATIONS.subtitle} className="mb-12">
    <p className="text-base md:text-lg max-w-3xl mx-auto text-white/90 leading-relaxed font-normal">
      White Sports Ventures invests in and incubates soccer ventures, leveraging media, AI, and community to drive growth across the entire soccer ecosystem.
    </p>
  </motion.div>
));

VideoHeroSubtitle.displayName = 'VideoHeroSubtitle';

const VideoHeroCTAButtons = memo(() => (
  <motion.div
    {...HERO_ANIMATIONS.buttons}
    className="flex flex-col sm:flex-row gap-4 justify-center"
  >
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="px-6 py-3 bg-white text-blue-900 hover:bg-blue-50 border-0 font-medium rounded-lg text-base transition-colors duration-300 shadow-lg"
    >
      Explore Portfolio
    </motion.button>

    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="px-6 py-3 border-2 border-white text-white hover:bg-white hover:text-blue-900 font-medium rounded-lg text-base transition-all duration-300"
    >
      Connect With Us
    </motion.button>
  </motion.div>
));

VideoHeroCTAButtons.displayName = 'VideoHeroCTAButtons';

export const VideoHeroSection = memo<VideoHeroSectionProps>(({
  videoSrc = 'https://res.cloudinary.com/ducuykhid/video/upload/v1754500559/copy_C8DB97E3-61AD-4016-A5F0-02347257FC20_hgh4vr.mp4',
  showScrollIndicator = true,
  className,
  ...props
}) => {
  // Filter out non-DOM props
  const { enableFloatingOrbs, statistics, ...domProps } = props;
  
  return (
    <section 
      className={`relative min-h-screen flex items-center justify-center overflow-hidden ${className || ''}`}
      {...domProps}
    >
      {/* Video Background */}
      <VideoBackground src={videoSrc} />

      {/* Logo Overlay - Elegantly Positioned */}
      <div className="absolute top-28 md:top-32 left-1/2 transform -translate-x-1/2 z-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative"
        >
          <div className="relative w-32 h-32 md:w-40 md:h-40">
            <Image
              src="/images/logo.webp"
              alt="White Sports Ventures Logo"
              fill
              className="object-contain drop-shadow-xl"
              sizes="160px"
              priority
            />
          </div>
        </motion.div>
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8 text-center flex flex-col justify-center min-h-screen">
        <div className="py-20 pt-40 md:pt-44">
          <VideoHeroTitle />
          <VideoHeroSubtitle />
          <VideoHeroCTAButtons />
        </div>
      </div>

      {/* Scroll Indicator */}
      {showScrollIndicator && (
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
          <div className="border-2 border-white/70 rounded-full flex justify-center w-6 h-10">
            <motion.div
              className="bg-white/70 rounded-full mt-2 w-1 h-3"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </div>
      )}
    </section>
  );
});

VideoHeroSection.displayName = 'VideoHeroSection';