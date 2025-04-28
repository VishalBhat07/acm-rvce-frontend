"use client";

import React, { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { categories, galleryItems, GalleryItem, Category } from '@/lib/config/gallery';

import GalleryHeader from '@/components/gallery/GalleryHeader';
import CategoryFilter from '@/components/gallery/CategoryFilter';
import GalleryGrid from '@/components/gallery/GalleryGrid';
import ImageModal from '@/components/gallery/ImageModal';

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState<Category>("View All");
  const [filteredItems, setFilteredItems] = useState<GalleryItem[]>(galleryItems);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [mounted, setMounted] = useState(false);
  const { theme } = useTheme();
  
  useEffect(() => {
    setMounted(true);
  }, []);
  
  useEffect(() => {
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
    
    setFilteredItems(items);
  }, [selectedCategory, searchQuery]);

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, [selectedCategory]);

  const openModal = (image: GalleryItem) => {
    setSelectedImage(image);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

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
          const prevIndex = (currentIndex - 1 + filteredItems.length) % filteredItems.length;
          setSelectedImage(filteredItems[prevIndex]);
        }
        if (e.key === 'ArrowRight') {
          const currentIndex = filteredItems.findIndex(img => img.id === selectedImage.id);
          const nextIndex = (currentIndex + 1) % filteredItems.length;
          setSelectedImage(filteredItems[nextIndex]);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage, filteredItems]);

  if (!mounted) return <div />;

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
        isLoading={isLoading}
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