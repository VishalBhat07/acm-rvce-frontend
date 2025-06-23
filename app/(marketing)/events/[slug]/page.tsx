import { sanityFetch } from '@/sanity/lib/fetch'
import { eventQuery, eventSlugsQuery } from '@/sanity/lib/queries'
import { notFound } from 'next/navigation'
import type { Metadata, ResolvingMetadata } from 'next'
import Link from 'next/link'
import { Suspense } from 'react'
import { PortableTextBlock } from 'next-sanity'
import { Button } from '@/components/ui/button'
import { Calendar, MapPin, Ticket } from 'lucide-react'

import Avatar from '@/components/blog/avatar-comp'
import CoverImage from '@/components/blog/cover-image'
import DateComponent from '@/components/blog/date'
import PortableText from '@/components/blog/portable-text'
import MoreEvents from '@/components/events/more-events'
import type { Event as SanityEvent } from '@/sanity.types'

// Re-define the Event type to correctly type the author field
type Event = Omit<SanityEvent, 'author' | 'mainImage' | 'body'> & {
  author?: { name?: string; picture?: string }
  body: PortableTextBlock[]
  imageUrl?: string | null
  date?: string | null
  venue?: string | null
  registrationLink?: string | null
}

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const event = (await sanityFetch({ query: eventQuery, params: await params, stega: false })) as Event
  const previousImages = (await parent).openGraph?.images || []

  return {
    authors: event?.author?.name ? [{ name: event?.author?.name }] : [],
    title: event?.title,
    description: event?.description,
  } satisfies Metadata
}

export async function generateStaticParams() {
  return (await sanityFetch({ query: eventSlugsQuery, perspective: 'published', stega: false })) as SanityEvent[]
}

export default async function EventPage({ params }: Props) {
  const event = (await sanityFetch({ query: eventQuery, params: await params })) as Event

  if (!event?._id) {
    return notFound()
  }

  return (
    <div className="container mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 ">
      <article>
        <h1 className="text-balance mb-12 text-6xl font-bold leading-tight tracking-tighter md:text-5xl md:leading-none lg:text-5xl">
          {event.title}
        </h1>
        <div className="hidden md:mb-12 md:block">
          {event.author?.picture && (
            <Avatar name={event.author.name} src={event.author.picture} />
          )}
        </div>
        <div className="">
          <div className="mb-6 block md:hidden">
            {event.author?.picture && (
              <Avatar name={event.author.name} src={event.author.picture} />
            )}
          </div>
          <div className="mb-6 text-lg">
            <div className="mb-4 flex flex-col gap-4 text-lg">
              {event.date && (
                <div className="flex items-center gap-2">
                  <Calendar className="h-5 w-5" />
                  <DateComponent dateString={event.date} />
                </div>
              )}
              {event.venue && (
                <div className="flex items-center gap-2">
                  <MapPin className="h-5 w-5" />
                  <span>{event.venue}</span>
                </div>
              )}
            </div>
            {event.registrationLink && (
              <Button asChild variant="default" size="lg">
                <Link
                  href={event.registrationLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Ticket className="mr-2 h-5 w-5" />
                  Register Now
                </Link>
              </Button>
            )}
          </div>
        </div>
        <div className="mb-8 sm:mx-0 md:mb-16">
          {event.imageUrl && <CoverImage src={event.imageUrl} priority />}
        </div>
        
        {event.body?.length && (
          <PortableText
            className="mx-auto max-w-7xl"
            value={event.body as PortableTextBlock[]}
          />
        )}
      </article>
      <aside>
        <hr className="border-accent-2 mb-24 mt-28" />
        <h2 className="mb-8 text-6xl font-bold leading-tight tracking-tighter md:text-5xl">
          More Events
        </h2>
        <Suspense>
          <MoreEvents skip={event._id} limit={2} />
        </Suspense>
      </aside>
    </div>
  )
}
