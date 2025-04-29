import React from "react";
import EventCard from "./EventCard";
import { Event } from "@/lib/config/eventsFAQS";

interface EventListProps {
  events: Event[];
}

const EventList: React.FC<EventListProps> = ({ events }) => (
  <div className="space-y-8">
    {events.map((event, index) => (
      <EventCard key={index} event={event} delay={index * 100} />
    ))}

    <div className="text-center pt-4">
      <button className="px-5 py-2 text-[#0466c8] dark:text-[var(--primary)] border border-[#0466c8] dark:border-[var(--primary)] rounded-lg hover:bg-[#0466c8] hover:text-white transition-all duration-300 text-sm font-medium">
        View All Events
      </button>
    </div>
  </div>
);

export default EventList;
