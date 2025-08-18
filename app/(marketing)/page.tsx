import React from "react";
import Hero from "@/components/hero/Hero";
import EventsAndFAQs from "@/components/EventsAndFAQs/EventsAndFAQs";
import Expectations from "@/components/expectations/Expectations";
import { client } from "@/sanity/lib/client";
import { topEventsQuery } from "@/sanity/lib/queries";

// Change to async component for Sanity data fetching
const Page = async () => {
  // Fetch events from Sanity
  const events = await client.fetch(topEventsQuery);

  return (
    <React.Fragment>
      <Hero />
      <EventsAndFAQs events={events} />
      {/* <Expectations /> */}
    </React.Fragment>
  );
};

export default Page;
