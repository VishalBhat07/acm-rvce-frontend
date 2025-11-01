import React from "react";
import Hero from "@/components/landing/hero/hero";
import EventsAndFAQs from "@/components/landing/events-faq/events-faqs";
import Expectations from "@/components/expectations/Expectations";
import { client } from "@/sanity/lib/client";
import { topEventsQuery } from "@/sanity/lib/queries";
import { faqs } from "@/lib/config/eventsFAQS";

const Page = async () => {
  const events = await client.fetch(topEventsQuery);

  return (
    <React.Fragment>
      <Hero />
      <EventsAndFAQs events={events} faqs={faqs} />
      {/* <Expectations /> */}
    </React.Fragment>
  );
};

export default Page;
