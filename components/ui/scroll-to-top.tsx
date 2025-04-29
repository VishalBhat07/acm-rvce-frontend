'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import { ArrowUp } from 'lucide-react';

interface ScrollToTopProps {
  threshold?: number;
  right?: number;
  bottom?: number;
  className?: string;
}

const ScrollToTop: React.FC<ScrollToTopProps> = ({
  threshold = 300,
  right = 20,
  bottom = 20,
  className
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > threshold);
    };

    window.addEventListener('scroll', handleScroll);
    
    // Initial check
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [threshold]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          className={cn(
            "fixed z-50 p-3 rounded-full bg-primary text-primary-foreground shadow-lg hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2",
            className
          )}
          style={{ right: `${right}px`, bottom: `${bottom}px` }}
          onClick={scrollToTop}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          aria-label="Scroll to top"
        >
          <ArrowUp className="h-5 w-5" />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTop; 