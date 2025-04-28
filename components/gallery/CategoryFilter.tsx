"use client";

import { Category } from "@/lib/config/gallery";

interface CategoryFilterProps {
  categories: Category[];
  selectedCategory: Category;
  onCategoryChange: (category: Category) => void;
}

export default function CategoryFilter({
  categories,
  selectedCategory,
  onCategoryChange,
}: CategoryFilterProps) {
  return (
    <div className="flex flex-wrap justify-center gap-2 mb-10">
      {categories.map(category => (
        <button
          key={category}
          onClick={() => onCategoryChange(category)}
          className={`px-4 py-1.5 rounded-full text-sm transition-all duration-300 
            ${selectedCategory === category 
              ? 'bg-blue-600 text-white'
              : 'bg-transparent border'}`}
        >
          {category}
        </button>
      ))}
    </div>
  );
} 