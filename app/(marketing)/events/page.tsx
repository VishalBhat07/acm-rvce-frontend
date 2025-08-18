import { sanityFetch } from '@/sanity/lib/fetch'
import { eventsQuery } from '@/sanity/lib/queries'
import { EventsQueryResult } from '@/sanity.types'
import { EventPageClient } from '@/components/events/events-page-client'

// Revalidate all posts every 10 minutes
export const revalidate = 600

export default async function EventsPage() {
  const events = (await sanityFetch({
    query: eventsQuery,
    stega: false,
  }))

  return <EventPageClient events={events} />
}
