'use client'

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"

interface BlogFilterProps {
  tags: string[];
  selectedTag: string | null;
  onSelectTag: (tag: string | null) => void;
}

export function BlogFilter({ tags, selectedTag, onSelectTag }: BlogFilterProps) {
  const allTags = ["View all", ...tags];

  return (
    <div className="mb-8 relative">
      <ScrollArea className="w-full whitespace-nowrap">
        <div className="flex space-x-3 pb-3 px-4 sm:px-6 lg:px-8">
          {allTags.map((tag) => {
            const isActive = (tag === "View all" && selectedTag === null) || tag === selectedTag;
            return (
              <Button
                key={tag}
                variant="ghost"
                size="sm"
                onClick={() => onSelectTag(tag === "View all" ? null : tag)}
                className={cn(
                  "h-8 rounded-full px-4 py-1 text-sm font-medium transition-colors",
                  isActive
                    ? "bg-primary text-primary-foreground hover:bg-primary/90 hover:text-primary-foreground"
                    : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                )}
              >
                {tag}
              </Button>
            );
          })}
        </div>
        <ScrollBar orientation="horizontal" className="h-2" />
      </ScrollArea>
    </div>
  );
} 