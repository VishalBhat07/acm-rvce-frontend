import { sanityFetch } from '@/sanity/lib/fetch'
import { moreEventsQuery } from '@/sanity/lib/queries'
import { EventCard } from './event-card'
import type { EventsQueryResult } from '@/sanity.types'

export default async function MoreEvents({ skip, limit }: { skip: string; limit: number }) {
  const events = await sanityFetch({
    query: moreEventsQuery,
    params: { skip, limit },
    stega: false,
  })

  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
      {events?.map((event: EventsQueryResult[0]) => (
        <EventCard key={event._id} event={event} />
      ))}
    </div>
  )
}
