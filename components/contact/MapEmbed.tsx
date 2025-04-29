'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface MapEmbedProps {
  embedUrl: string;
  title?: string;
  className?: string;
}

const MapEmbed: React.FC<MapEmbedProps> = ({
  embedUrl,
  title = "Location Map",
  className
}) => {
  return (
    <motion.div 
      className={cn("w-full rounded-lg overflow-hidden shadow-sm border border-border", className)}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.5,
        ease: [0.43, 0.13, 0.23, 0.96] 
      }}
      whileHover={{ 
        y: -5,
        boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)"
      }}
    >
      <motion.div 
        className="aspect-video w-full"
        whileHover={{ scale: 1.01 }}
        transition={{ type: "spring", stiffness: 200, damping: 30 }}
      >
        <iframe
          src={embedUrl}
          title={title}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full h-full"
        />
      </motion.div>
      
      {/* Caption with subtle animation */}
      <motion.div 
        className="p-2 bg-card text-center text-sm text-muted-foreground"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <p>R.V. College of Engineering, Mysore Road, Bengaluru</p>
      </motion.div>
    </motion.div>
  );
};

export default MapEmbed; 