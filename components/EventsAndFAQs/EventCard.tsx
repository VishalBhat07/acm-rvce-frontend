import React from "react";
import { Event } from "@/lib/config/eventsFAQS";

interface EventCardProps {
  event: Event;
  delay: number;
}

const EventCard: React.FC<EventCardProps> = ({ event, delay }) => (
  <div
    className="flex flex-col sm:flex-row gap-4 group hover:bg-[#f8fafc] dark:hover:bg-[var(--card-dark)] p-4 rounded-xl transition-all duration-300 transform hover:scale-[1.01] hover:shadow-xl"
    style={{ animationDelay: `${delay}ms` }}
  >
    <div className="sm:w-1/6 flex-shrink-0">
      <div className="relative rounded-lg overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0466c840] to-[#1282a230] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <img
          src={event.image}
          alt={event.title}
          className="w-full h-auto object-cover rounded-lg transform transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute top-2 right-2 bg-[#0466c8] text-white text-xs font-medium px-2 py-1 rounded-md">
          {event.category}
        </div>
      </div>
    </div>

    <div className="sm:w-5/6">
      <div className="flex flex-col sm:flex-row justify-between gap-2">
        <h3 className="text-lg font-semibold">{event.title}</h3>
        <span className="text-sm font-medium bg-[#1282a210] px-3 py-1 rounded-full">
          {event.date}
        </span>
      </div>
      <p className="mt-2 text-base leading-relaxed">{event.description}</p>

      <div className="mt-4 flex gap-3">
        <button className="text-sm font-medium text-[#0466c8] hover:text-[#034078] dark:hover:text-[#0466c8]/80 transition-colors duration-300">
          Learn more
        </button>
        <button className="text-sm font-medium text-white bg-[#0466c8] hover:bg-[#034078] dark:hover:bg-[#0466c8]/80 px-4 py-1 rounded-lg transition-all duration-300">
          Register
        </button>
      </div>
    </div>
  </div>
);

export default EventCard;
