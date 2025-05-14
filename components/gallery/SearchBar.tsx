"use client";

import { Search } from "lucide-react";

interface SearchBarProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

export default function SearchBar({
  searchQuery,
  onSearchChange,
}: SearchBarProps) {
  return (
    <div className="relative md:w-auto">
      <div className="flex w-full items-center gap-2 rounded-full border bg-background/50 p-1.5 backdrop-blur-sm shadow-sm sm:p-2 md:w-64">
        <Search className="ml-2 h-5 w-5 flex-shrink-0 text-muted-foreground" />
        <input
          type="text"
          placeholder="Search events..."
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          className="flex-grow appearance-none border-0 bg-transparent px-2 py-1 text-sm shadow-none focus:outline-none focus:ring-0"
        />
      </div>
    </div>
  );
} 