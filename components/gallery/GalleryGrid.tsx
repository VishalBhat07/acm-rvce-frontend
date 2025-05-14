"use client";

import { motion, AnimatePresence } from 'framer-motion';
import { GalleryItem } from '@/lib/config/gallery';
import Image from 'next/image';

interface GalleryGridProps {
  items: GalleryItem[];
  onItemClick: (item: GalleryItem) => void;
}

export default function GalleryGrid({
  items,
  onItemClick,
}: GalleryGridProps) {
  return (
    <div className="max-w-7xl mx-auto px-4 pb-16">
      {items.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {items.map(item => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3 }}
                className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg cursor-pointer group"
                onClick={() => onItemClick(item)}
              >
                <div className="relative overflow-hidden aspect-video">
                  <Image 
                    src={item.src} 
                    alt={item.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    width={500}
                    height={500}
                  />
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent 
                    opacity-0 group-hover:opacity-100 transition-all duration-300 
                    translate-y-2 group-hover:translate-y-0 flex flex-col justify-end p-6">
                    <h3 className="text-white font-semibold text-lg leading-tight mb-1">{item.title}</h3>
                    <p className="text-gray-200 text-sm mb-2">{item.description}</p>
                    <div className="flex items-center mt-2">
                      <svg className="w-4 h-4 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-300 text-sm ml-1">{item.date}</span>
                    </div>
                    <span 
                      className="mt-2 inline-block px-2 py-1 text-xs font-medium rounded-full bg-blue-600 text-white"
                    >
                      {item.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-1 text-gray-900 dark:text-gray-100">
                    {item.title}
                  </h3>
                  <p className="text-sm opacity-75 text-gray-700 dark:text-gray-300">
                    {item.date}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      ) : (
        <div className="text-center py-16">
          <h3 className="text-2xl font-medium mb-2">No gallery items found</h3>
          <p>Try selecting a different category or adjusting your search.</p>
        </div>
      )}
    </div>
  );
} 