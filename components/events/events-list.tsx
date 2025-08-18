import { motion, AnimatePresence } from 'framer-motion'
import type { EventsQueryResult } from '@/sanity.types'
import { EventCard } from './event-card'

interface EventListProps {
  events: EventsQueryResult
}

export function EventList({ events }: EventListProps) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      <AnimatePresence>
        {events.map((event) => {
          if (!event) {
            return null
          }
          return (
            <motion.div
              key={event._id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
            >
              <EventCard event={event} />
            </motion.div>
          )
        })}
      </AnimatePresence>
    </div>
  )
}

