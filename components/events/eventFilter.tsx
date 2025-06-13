"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface EventFilterProps {
  categories: string[];
  selectedCategory: string | null;
  onSelectCategory: (category: string | null) => void;
}

export function EventFilter({
  categories,
  selectedCategory,
  onSelectCategory,
}: EventFilterProps) {
  return (
    <motion.div
      className="flex flex-wrap gap-2"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
        className={cn(
          "inline-flex items-center rounded-full px-4 py-2 text-sm font-medium",
          "transition-all duration-200 ease-in-out",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
          "disabled:pointer-events-none disabled:opacity-50",
          selectedCategory === null
            ? "bg-primary text-primary-foreground shadow-md hover:bg-primary/90 hover:shadow-lg"
            : "bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground"
        )}
        onClick={() => onSelectCategory(null)}
      >
        All
      </motion.button>
      {categories.map((category) => (
        <motion.button
          key={category}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
          className={cn(
            "inline-flex items-center rounded-full px-4 py-2 text-sm font-medium",
            "transition-all duration-200 ease-in-out",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
            "disabled:pointer-events-none disabled:opacity-50",
            selectedCategory === category
              ? "bg-primary text-primary-foreground shadow-md hover:bg-primary/90 hover:shadow-lg"
              : "bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground"
          )}
          onClick={() => onSelectCategory(category)}
        >
          {category}
        </motion.button>
      ))}
    </motion.div>
  );
}
