"use client";

import * as HoverCard from "@radix-ui/react-hover-card";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export interface EventPreview {
  eventName: string;
  imageCount: number;
  latestImage?: string | null;
  date: string;
}

interface CategoryHoverCardProps {
  category: string;
  events: EventPreview[];
  isSelected: boolean;
  onClick: () => void;
}

export default function CategoryHoverCard({
  category,
  events,
  isSelected,
  onClick,
}: CategoryHoverCardProps) {
  // Don't show hover card for "View All"
  if (category === "View All" || events.length === 0) {
    return (
      <button
        onClick={onClick}
        className={`px-4 py-1.5 rounded-full text-sm transition-all duration-300 
          ${isSelected 
            ? 'bg-sky-500 text-white font-medium' 
            : 'bg-transparent text-gray-500 dark:text-gray-300 hover:text-sky-500 dark:hover:text-sky-400'}`}
      >
        {category}
      </button>
    );
  }

  return (
    <HoverCard.Root openDelay={200} closeDelay={100}>
      <HoverCard.Trigger asChild>
        <button
          onClick={onClick}
          className={`px-4 py-1.5 rounded-full text-sm transition-all duration-300 
            ${isSelected 
              ? 'bg-sky-500 text-white font-medium' 
              : 'bg-transparent text-gray-500 dark:text-gray-300 hover:text-sky-500 dark:hover:text-sky-400'}`}
        >
          {category}
        </button>
      </HoverCard.Trigger>
      
      <HoverCard.Portal>
        <HoverCard.Content
          className="z-50 w-80 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-4 shadow-xl"
          sideOffset={5}
        >
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              <div className="mb-3">
                <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-1">
                  Recent {category}
                </h3>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  {events.length} event{events.length !== 1 ? 's' : ''}
                </p>
              </div>
              
              <div className="space-y-2 max-h-64 overflow-y-auto">
                {events.slice(0, 5).map((event, index) => (
                  <motion.div
                    key={event.eventName}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="flex items-center gap-3 p-2 rounded-md hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                  >
                    {event.latestImage && (
                      <div className="relative w-12 h-12 rounded-md overflow-hidden flex-shrink-0">
                        <Image
                          src={event.latestImage}
                          alt={event.eventName}
                          fill
                          className="object-cover"
                        />
                      </div>
                    )}
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900 dark:text-white truncate">
                        {event.eventName}
                      </p>
                      <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
                        <span>{event.imageCount} photo{event.imageCount !== 1 ? 's' : ''}</span>
                        <span>•</span>
                        <span>{event.date}</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              {events.length > 5 && (
                <div className="mt-2 pt-2 border-t border-gray-200 dark:border-gray-700">
                  <p className="text-xs text-gray-500 dark:text-gray-400 text-center">
                    +{events.length - 5} more event{events.length - 5 !== 1 ? 's' : ''}
                  </p>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
          
          <HoverCard.Arrow className="fill-white dark:fill-gray-800" />
        </HoverCard.Content>
      </HoverCard.Portal>
    </HoverCard.Root>
  );
}
