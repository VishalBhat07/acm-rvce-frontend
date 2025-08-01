"use client";

type Category = string;

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
              ? 'bg-sky-500 text-white font-medium' 
              : 'bg-transparent text-gray-500 dark:text-gray-300 hover:text-sky-500 dark:hover:text-sky-400'}`}
        >
          {category}
        </button>
      ))}
    </div>
  );
} 