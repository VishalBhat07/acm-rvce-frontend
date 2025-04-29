import React from 'react'
import Hero from '@/components/hero/Hero'
import EventsAndFAQs from '@/components/EventsAndFAQs/EventsAndFAQs'
import Expectations from '@/components/expectations/Expectations'

const Page: React.FC = () => {
  return (
    <React.Fragment>
      <Hero />
      <EventsAndFAQs />
      <Expectations />
    </React.Fragment>
  )
}

export default Page;
