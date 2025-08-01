import { sanityFetch } from '@/sanity/lib/fetch'
import { galleryItemsQuery } from '@/sanity/lib/queries'
import { GalleryItemsQueryResult } from '@/sanity.types'
import { GalleryPageClient } from '@/components/gallery/gallery-page-client'

export const revalidate = 600

export default async function Gallery() {
  const galleryItems = (await sanityFetch({
    query: galleryItemsQuery,
    stega: false,
  })) as GalleryItemsQueryResult

  return <GalleryPageClient galleryItems={galleryItems} />
} 