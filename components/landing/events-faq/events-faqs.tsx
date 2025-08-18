"use client";

import React, { useState } from "react";
import Tabs from "./tabs";
import EventList from "./events-list";
import FAQList from "./faq-list";
import { faqs } from "@/lib/config/eventsFAQS";
import { EventsQueryResult } from "@/sanity.types";

interface EventsAndFAQsProps {
  events: EventsQueryResult; 
}

const EventsAndFAQs: React.FC<EventsAndFAQsProps> = ({ events }) => {
  const [activeTab, setActiveTab] = useState<"events" | "faqs">("events");
  const [openFAQIndex, setOpenFAQIndex] = useState<number | null>(0);

  return (
    <div className="max-w-5xl mx-auto p-4">
      <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />

      <div className="fade-in-stagger">
        {activeTab === "events" ? (
          <EventList events={events} />
        ) : (
          <FAQList
            faqs={faqs}
            openFAQIndex={openFAQIndex}
            setOpenFAQIndex={setOpenFAQIndex}
          />
        )}
      </div>
    </div>
  );
};

export default EventsAndFAQs;
