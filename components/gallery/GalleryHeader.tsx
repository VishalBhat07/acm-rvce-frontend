"use client";

import SearchBar from "./SearchBar";

interface GalleryHeaderProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

export default function GalleryHeader({
  searchQuery,
  onSearchChange,
}: GalleryHeaderProps) {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8 pt-20 text-center">
      <h1 className="text-4xl font-bold mb-2">
        ACM RVCE GALLERY
      </h1>
      <p className="text-xl mb-8">Showcasing our events and activities</p>

      <div className="flex flex-col md:flex-row justify-center gap-4 mb-8">
        <SearchBar
          searchQuery={searchQuery}
          onSearchChange={onSearchChange}
        />
      </div>
    </div>
  );
} 