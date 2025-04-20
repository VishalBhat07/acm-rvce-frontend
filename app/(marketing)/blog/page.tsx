'use client'

import * as React from "react";
import { blogConfig, getAllTags } from "@/lib/config/blog";
import { BlogHeader } from "@/components/blog/blog-header";
import { BlogFilter } from "@/components/blog/blog-filter";
import { BlogList } from "@/components/blog/blog-list";

export default function BlogPage() {
  const [searchTerm, setSearchTerm] = React.useState("");
  const [selectedTag, setSelectedTag] = React.useState<string | null>(null);

  const allPosts = blogConfig.posts;
  const allTags = getAllTags(allPosts);

  const filteredPosts = React.useMemo(() => {
    return allPosts.filter(post => {
      const matchesSearch = 
        searchTerm === "" ||
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
      
      const matchesTag = 
        selectedTag === null || 
        post.tags.includes(selectedTag);

      return matchesSearch && matchesTag;
    });
  }, [allPosts, searchTerm, selectedTag]);

  return (
    <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
      <BlogHeader 
        title={blogConfig.title}
        description={blogConfig.description}
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
      />
      
      <BlogFilter 
        tags={allTags}
        selectedTag={selectedTag}
        onSelectTag={setSelectedTag}
      />
      
      <BlogList posts={filteredPosts} />
    </div>
  );
}
