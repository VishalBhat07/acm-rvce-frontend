"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import { GalleryItem } from './GalleryGrid';

interface MonthGroup {
  month: string;
  year: string;
  events: {
    [eventName: string]: {
      category: string;
      items: GalleryItem[];
    };
  };
}

interface TimelineViewProps {
  monthGroups: MonthGroup[];
  onItemClick: (item: GalleryItem) => void;
}

export default function TimelineView({ monthGroups, onItemClick }: TimelineViewProps) {
  if (monthGroups.length === 0) {
    return (
      <div className="text-center py-16">
        <p className="text-gray-500 dark:text-gray-400">No images found</p>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 pb-16">
      {monthGroups.map((monthGroup, monthIndex) => (
        <motion.div
          key={`${monthGroup.year}-${monthGroup.month}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: monthIndex * 0.1, duration: 0.4 }}
          className="mb-16 last:mb-0"
        >
          {/* Month Header */}
          <div className="sticky top-0 z-10 bg-white/80 dark:bg-black/80 backdrop-blur-sm py-4 mb-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
              {monthGroup.month} {monthGroup.year}
            </h2>
          </div>

          {/* Events in this month */}
          <div className="space-y-12">
            {Object.entries(monthGroup.events).map(([eventName, eventData], eventIndex) => {
              const imageCount = eventData.items.length;
              const eventDate = eventData.items[0]?.date || '';

              return (
                <motion.div
                  key={eventName}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: eventIndex * 0.05, duration: 0.3 }}
                  className="relative pl-8 border-l-2 border-sky-500/30"
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-0 top-0 -translate-x-1/2 w-4 h-4 rounded-full bg-sky-500 border-4 border-white dark:border-black" />

                  {/* Event Header */}
                  <div className="mb-4">
                    <div className="flex items-center gap-3 flex-wrap">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                        {eventName}
                      </h3>
                      <span className="px-3 py-1 text-xs font-semibold rounded-full bg-sky-100 dark:bg-sky-900/40 text-sky-800 dark:text-sky-300">
                        {eventData.category}
                      </span>
                    </div>
                    <div className="flex items-center gap-3 mt-2 text-sm text-gray-600 dark:text-gray-400">
                      <div className="flex items-center gap-1">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                        </svg>
                        <span>{eventDate}</span>
                      </div>
                      <span>•</span>
                      <div className="flex items-center gap-1">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                        </svg>
                        <span>{imageCount} photo{imageCount !== 1 ? 's' : ''}</span>
                      </div>
                    </div>
                  </div>

                  {/* Images Grid */}
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
                    {eventData.items.map((item, index) => (
                      <motion.div
                        key={item.id}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.03, duration: 0.2 }}
                        className="relative aspect-square rounded-lg overflow-hidden cursor-pointer group bg-gray-100 dark:bg-gray-800"
                        onClick={() => onItemClick(item)}
                      >
                        <Image 
                          src={item.src} 
                          alt={item.alt}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-110"
                          sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 20vw"
                        />
                        
                        {/* Hover Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent 
                          opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end p-3">
                          {item.description && (
                            <p className="text-white text-xs line-clamp-2">
                              {item.description}
                            </p>
                          )}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      ))}
    </div>
  );
}
