"use client";

import * as React from "react";
import { EventHeader } from "@/components/events/eventHeader";
import { EventFilter } from "@/components/events/eventFilter";
import { EventList } from "@/components/events/eventList";
import eventsData from "./events.json";

const eventConfig = {
  title: "Events",
  description: "Stay updated with ACM RVCE's latest events and activities.",
};

function getAllCategories(events: any[]) {
  const categories = new Set(events.map((event) => event.category));
  return Array.from(categories);
}

export default function EventsPage() {
  const [searchTerm, setSearchTerm] = React.useState("");
  const [selectedCategory, setSelectedCategory] = React.useState<string | null>(
    null
  );

  const allEvents = eventsData.events;
  const allCategories = getAllCategories(allEvents);

  const filteredEvents = React.useMemo(() => {
    return allEvents.filter((event) => {
      const matchesSearch =
        searchTerm === "" ||
        event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        event.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        event.category.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesCategory =
        selectedCategory === null || event.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [allEvents, searchTerm, selectedCategory]);

  return (
    <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
      <EventHeader
        title={eventConfig.title}
        description={eventConfig.description}
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
      />

      <div className="mb-8">
        <EventFilter
          categories={allCategories}
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
        />
      </div>

      <EventList events={filteredEvents} />
    </div>
  );
}
