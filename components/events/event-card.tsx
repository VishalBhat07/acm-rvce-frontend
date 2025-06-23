import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { formatDate } from '@/lib/utils'
import { Calendar, MapPin } from 'lucide-react'
import type { EventsQueryResult } from '@/sanity.types'
import Link from 'next/link'

interface EventCardProps {
  event: EventsQueryResult[0]
}

export function EventCard({ event }: EventCardProps) {
  if (!event || !event.slug) {
    return null
  }

  return (
    <Card
      className="group flex h-full flex-col overflow-hidden transition-colors hover:bg-accent/40"
      key={event._id}
    >
      {event.imageUrl && (
        <Link href={`/events/${event.slug}`} className="block">
          <div className="relative h-48 w-full overflow-hidden">
            <Image
              src={event.imageUrl}
              alt={event.title || 'Event image'}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-background/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          </div>
        </Link>
      )}
      <CardHeader className="flex-1">
        <Link href={`/events/${event.slug}`} className="block">
          <CardTitle className="line-clamp-2 text-xl transition-colors group-hover:text-primary">
            {event.title}
          </CardTitle>
        </Link>
        <CardDescription className="flex flex-col gap-2 text-sm">
          {event.date && (
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <span>{formatDate(event.date)}</span>
            </div>
          )}
          {event.venue && (
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              <span>{event.venue}</span>
            </div>
          )}
        </CardDescription>
      </CardHeader>
      <CardContent>
        {event.description && (
          <p className="line-clamp-2 text-sm text-muted-foreground">
            {event.description}
          </p>
        )}
        {event.category && (
          <div className="mt-4">
            <span className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
              {event.category}
            </span>
          </div>
        )}
      </CardContent>
      {event.registrationLink && (
        <CardFooter className="pt-4">
          <Button
            variant="secondary"
            className="w-full transition-all hover:bg-primary hover:text-primary-foreground"
            asChild
          >
            <a
              href={event.registrationLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              Register Now
            </a>
          </Button>
        </CardFooter>
      )}
    </Card>
  )
}
