"use client";

import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { useTheme } from 'next-themes';
import { categories, galleryItems, GalleryItem, Category } from '@/lib/config/gallery';

import GalleryHeader from '@/components/gallery/GalleryHeader';
import CategoryFilter from '@/components/gallery/CategoryFilter';
import GalleryGrid from '@/components/gallery/GalleryGrid';
import ImageModal from '@/components/gallery/ImageModal';

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState<Category>("View All");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);
  const { theme } = useTheme();
  
  const filteredItems = useMemo(() => {
    let items = [...galleryItems];
    
    if (selectedCategory !== "View All") {
      items = items.filter(item => item.category === selectedCategory);
    }
    
    if (searchQuery.trim() !== "") {
      const query = searchQuery.toLowerCase();
      items = items.filter(item => 
        item.title.toLowerCase().includes(query) || 
        item.category.toLowerCase().includes(query)
      );
    }
    return items;
  }, [selectedCategory, searchQuery]);

  const openModal = useCallback((image: GalleryItem) => {
    setSelectedImage(image);
    document.body.style.overflow = 'hidden';
  }, [setSelectedImage]);

  const closeModal = useCallback(() => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  }, [setSelectedImage]);

  const handlePrevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!selectedImage) return;
    const currentIndex = filteredItems.findIndex(img => img.id === selectedImage.id);
    const prevIndex = (currentIndex - 1 + filteredItems.length) % filteredItems.length;
    setSelectedImage(filteredItems[prevIndex]);
  };

  const handleNextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!selectedImage) return;
    const currentIndex = filteredItems.findIndex(img => img.id === selectedImage.id);
    const nextIndex = (currentIndex + 1) % filteredItems.length;
    setSelectedImage(filteredItems[nextIndex]);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImage) {
        if (e.key === 'Escape') closeModal();
        if (e.key === 'ArrowLeft') {
          const currentIndex = filteredItems.findIndex(img => img.id === selectedImage.id);
          if (currentIndex === -1) return;
          const prevIndex = (currentIndex - 1 + filteredItems.length) % filteredItems.length;
          setSelectedImage(filteredItems[prevIndex]);
        }
        if (e.key === 'ArrowRight') {
          const currentIndex = filteredItems.findIndex(img => img.id === selectedImage.id);
          if (currentIndex === -1) return;
          const nextIndex = (currentIndex + 1) % filteredItems.length;
          setSelectedImage(filteredItems[nextIndex]);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage, filteredItems, closeModal]);

  return (
    <div className="w-full">
      <GalleryHeader 
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
      />
      
      <CategoryFilter
        categories={categories}
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
  );
} 