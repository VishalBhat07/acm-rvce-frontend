"use client";

import React, { useState } from "react";
import Tabs from "./Tabs";
import EventList from "./EventList";
import FAQList from "./FAQList";
import { events, faqs } from "@/lib/config/eventsFAQS";

const EventsAndFAQs: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"events" | "faqs">("events");
  const [openFAQIndex, setOpenFAQIndex] = useState<number | null>(0);

  return (
    <div className="max-w-5xl mx-auto p-4">
      <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />

      <div className="fade-in-stagger">
        {activeTab === "events" ? (
          <EventList events={events} />
        ) : (
          <FAQList faqs={faqs} openFAQIndex={openFAQIndex} setOpenFAQIndex={setOpenFAQIndex} />
        )}
      </div>
    </div>
  );
};

export default EventsAndFAQs;
