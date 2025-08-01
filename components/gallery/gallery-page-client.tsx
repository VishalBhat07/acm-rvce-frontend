'use client'

import * as React from 'react'
import GalleryHeader from '@/components/gallery/GalleryHeader'
import CategoryFilter from '@/components/gallery/CategoryFilter'
import GalleryGrid, { GalleryItem } from '@/components/gallery/GalleryGrid'
import ImageModal from '@/components/gallery/ImageModal'
import type { GalleryItemsQueryResult } from '@/sanity.types'

const galleryConfig = {
  title: 'ACM RVCE GALLERY',
  description: 'Showcasing our events and activities',
}

function getAllCategories(galleryItems: GalleryItemsQueryResult) {
  if (!galleryItems) return []
  const cats = new Set(galleryItems.map((item) => item.category).filter(Boolean) as string[])
  return Array.from(cats).sort()
}

// Convert Sanity data to GalleryItem format
function convertSanityToGalleryItem(sanityItem: GalleryItemsQueryResult[0]): GalleryItem | null {
  if (!sanityItem.imageUrl || !sanityItem.title || !sanityItem.category) {
    return null
  }
  
  return {
    id: sanityItem._id,
    src: sanityItem.imageUrl,
    alt: sanityItem.title,
    category: sanityItem.category,
    title: sanityItem.title,
    date: sanityItem.date ? new Date(sanityItem.date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }) : '',
    description: sanityItem.description || undefined
  }
}

interface GalleryPageClientProps {
  galleryItems: GalleryItemsQueryResult
}

export function GalleryPageClient({ galleryItems }: GalleryPageClientProps) {
  const [selectedCategory, setSelectedCategory] = React.useState<string>("View All")
  const [searchQuery, setSearchQuery] = React.useState("")
  const [selectedImage, setSelectedImage] = React.useState<GalleryItem | null>(null)

  // Convert Sanity data to GalleryItem format
  const convertedItems = React.useMemo(() => {
    return galleryItems
      .map(convertSanityToGalleryItem)
      .filter((item): item is GalleryItem => item !== null)
  }, [galleryItems])

  const availableCategories = React.useMemo(() => {
    const cats = getAllCategories(galleryItems)
    return ["View All", ...cats]
  }, [galleryItems])

  const filteredItems = React.useMemo(() => {
    let items = [...convertedItems]
    
    if (selectedCategory !== "View All") {
      items = items.filter(item => item.category === selectedCategory)
    }
    
    if (searchQuery.trim() !== "") {
      const query = searchQuery.toLowerCase()
      items = items.filter(item => 
        item.title.toLowerCase().includes(query) || 
        item.category.toLowerCase().includes(query) ||
        (item.description && item.description.toLowerCase().includes(query))
      )
    }
    return items
  }, [convertedItems, selectedCategory, searchQuery])

  const openModal = React.useCallback((image: GalleryItem) => {
    setSelectedImage(image)
    document.body.style.overflow = 'hidden'
  }, [])

  const closeModal = React.useCallback(() => {
    setSelectedImage(null)
    document.body.style.overflow = 'auto'
  }, [])

  const handlePrevImage = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (!selectedImage) return
    const currentIndex = filteredItems.findIndex(img => img.id === selectedImage.id)
    const prevIndex = (currentIndex - 1 + filteredItems.length) % filteredItems.length
    setSelectedImage(filteredItems[prevIndex])
  }

  const handleNextImage = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (!selectedImage) return
    const currentIndex = filteredItems.findIndex(img => img.id === selectedImage.id)
    const nextIndex = (currentIndex + 1) % filteredItems.length
    setSelectedImage(filteredItems[nextIndex])
  }

  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImage) {
        if (e.key === 'Escape') closeModal()
        if (e.key === 'ArrowLeft') {
          const currentIndex = filteredItems.findIndex(img => img.id === selectedImage.id)
          if (currentIndex === -1) return
          const prevIndex = (currentIndex - 1 + filteredItems.length) % filteredItems.length
          setSelectedImage(filteredItems[prevIndex])
        }
        if (e.key === 'ArrowRight') {
          const currentIndex = filteredItems.findIndex(img => img.id === selectedImage.id)
          if (currentIndex === -1) return
          const nextIndex = (currentIndex + 1) % filteredItems.length
          setSelectedImage(filteredItems[nextIndex])
        }
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [selectedImage, filteredItems, closeModal])

  return (
    <div className="w-full">
      <GalleryHeader 
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
      />
      
      <CategoryFilter
        categories={availableCategories}
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
      />
      
      <GalleryGrid
        items={filteredItems}
        onItemClick={openModal}
      />
      
      <ImageModal
        selectedImage={selectedImage}
        onClose={closeModal}
        onPrev={handlePrevImage}
        onNext={handleNextImage}
      />
    </div>
  )
}
