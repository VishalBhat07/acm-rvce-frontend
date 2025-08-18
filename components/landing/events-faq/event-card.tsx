import React from "react";
import Image from "next/image";
import { formatDate } from '@/lib/utils';
import type { EventsQueryResult } from '@/sanity.types';

interface EventCardProps {
  event: EventsQueryResult[0];
  delay: number;
}

const EventCard: React.FC<EventCardProps> = ({ event, delay }) => {
  if (!event || !event.slug) {
    return null;
  }

  return (
    <div
      className="flex flex-col sm:flex-row gap-4 group hover:bg-[#f8fafc] dark:hover:bg-[var(--card-dark)] p-4 rounded-xl transition-all duration-300 transform hover:scale-[1.01] hover:shadow-xl"
      style={{ animationDelay: `${delay}ms` }}
    >
      {event.imageUrl && (
        <div className="sm:w-1/6 flex-shrink-0">
          <div className="relative w-full h-[200px] rounded-lg overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[#0466c840] to-[#1282a230] opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
            <Image
              src={event.imageUrl}
              alt={event.title || 'Event image'}
              fill
              className="object-cover rounded-lg transform transition-transform duration-500 group-hover:scale-110"
              sizes="(max-width: 640px) 100vw, 16.666667vw"
              priority
            />
            {event.category && (
              <div className="absolute top-2 right-2 bg-[#0466c8] text-white text-xs font-medium px-2 py-1 rounded-md z-20">
                {event.category}
              </div>
            )}
          </div>
        </div>
      )}

      <div className="sm:w-5/6">
        <div className="flex flex-col sm:flex-row justify-between gap-2">
          <h3 className="text-lg font-semibold">{event.title}</h3>
          {event.date && (
            <span className="text-sm font-medium bg-[#1282a210] px-3 py-1 rounded-full">
              {formatDate(event.date)}
            </span>
          )}
        </div>
        {event.description && (
          <p className="mt-2 text-base leading-relaxed">{event.description}</p>
        )}

        <div className="mt-4 flex gap-3">
          <button className="text-sm font-medium text-[#0466c8] hover:text-[#034078] dark:hover:text-[#0466c8]/80 transition-colors duration-300">
            Learn more
          </button>
          {event.registrationLink ? (
            <a
              href={event.registrationLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-white bg-[#0466c8] hover:bg-[#034078] dark:hover:bg-[#0466c8]/80 px-4 py-1 rounded-lg transition-all duration-300"
            >
              Register
            </a>
          ) : (
            <button className="text-sm font-medium text-white bg-[#0466c8] hover:bg-[#034078] dark:hover:bg-[#0466c8]/80 px-4 py-1 rounded-lg transition-all duration-300">
              Register
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default EventCard;
