"use client";

interface SearchBarProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

export default function SearchBar({
  searchQuery,
  onSearchChange,
}: SearchBarProps) {
  return (
    <div className="relative">
      <input
        type="text"
        placeholder="Search events..."
        value={searchQuery}
        onChange={(e) => onSearchChange(e.target.value)}
        className="px-4 py-2 pl-10 rounded-full w-full md:w-64 border"
      />
      <span className="absolute left-3 top-2.5">🔍</span>
    </div>
  );
} 