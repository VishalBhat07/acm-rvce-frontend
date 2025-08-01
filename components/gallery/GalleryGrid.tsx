"use client";

import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

export interface GalleryItem {
  id: string
  src: string
  alt: string
  category: string
  title: string
  date: string
  description?: string
}

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
                    <div className="flex items-center justify-between mt-2">
                      <div className="flex items-center">
                        <svg className="w-4 h-4 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-300 text-sm ml-1">{item.date}</span>
                      </div>
                      <span 
                        className="inline-block px-2 py-1 text-xs font-medium rounded-full bg-blue-600 text-white"
                      >
                        {item.category}
                      </span>
                    </div>
                  </div>
                </div>
                
                <div className="p-4">
                  <div className="flex items-center justify-between mb-2">
                                      
                  <h3 className="text-gray-900 dark:text-white font-semibold text-lg leading-tight mb-2 group-hover:text-blue-600 transition-colors duration-300">
                    {item.title}
                  </h3>
                    <div className="flex items-center text-gray-500 dark:text-gray-400">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm ml-1">{item.date}</span>
                    </div>
                  </div>

                  
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      ) : (
        <div className="text-center py-16">
          <div className="text-gray-500 dark:text-gray-400">
            <svg className="mx-auto h-12 w-12 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <p className="text-lg font-medium">No images found</p>
            <p className="text-sm">Try adjusting your search or filter criteria</p>
          </div>
        </div>
      )}
    </div>
  );
}
