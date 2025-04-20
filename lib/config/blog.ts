export interface BlogPostAuthor {
  name: string;
}

export interface BlogPost {
  slug: string; 
  title: string;
  description: string; 
  date: string; 
  tags: string[]; 
  author: BlogPostAuthor;
  imageUrl: string; 
  // content?: string; 
}

export interface BlogConfig {
  title: string;
  description: string;
  posts: BlogPost[];
}

export const blogConfig: BlogConfig = {
  title: "ACM RVCE Blog",
  description: "Blogs",
  posts: [
    {
      slug: "intro-to-competitive-programming",
      title: "Getting Started with Competitive Programming",
      description: "A beginner's guide to the world of competitive programming, algorithms, and data structures.",
      date: "2024-07-20",
      tags: ["Algorithms", "Competitive Programming", "Beginners"],
      author: { name: "ACM RVCE Team" },
      imageUrl: "https://images.unsplash.com/photo-1565687981296-535f09db714e?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Placeholder - replace with relevant image
    },
    {
      slug: "rvce-hackathon-recap",
      title: "ACM GenAI Hackathon 2024: Recap",
      description: "Highlights from the latest hackathon, showcasing innovative projects and winners.",
      date: "2024-06-15",
      tags: ["Events", "RVCE", "Hackathon", "Innovation"],
      author: { name: "Event Organizers" },
      imageUrl: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Placeholder
    },
    {
        slug: "web-dev-workshop",
        title: "Mastering React: Workshop Insights",
        description: "Key takeaways and resources from our recent React development workshop.",
        date: "2024-05-25",
        tags: ["Web Dev", "React", "Workshop", "JavaScript"],
        author: { name: "Lead Mentor" },
        imageUrl: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Placeholder
    },
    {
        slug: "ai-ml-trends",
        title: "Top AI/ML Trends Shaping the Future",
        description: "Exploring the cutting-edge advancements in Artificial Intelligence and Machine Learning.",
        date: "2024-04-30",
        tags: ["AI", "Machine Learning", "Technology", "Trends"],
        author: { name: "Tech Lead" },
        imageUrl: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?q=80&w=2664&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Placeholder
    },
    {
      slug: "importance-of-open-source",
      title: "Why Contributing to Open Source Matters",
      description: "Discover the benefits of contributing to open-source projects for students and developers.",
      date: "2024-03-10",
      tags: ["Open Source", "Development", "Community"],
      author: { name: "Senior Member" },
      imageUrl: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Placeholder
    },
    {
      slug: "acm-membership-benefits",
      title: "Unlock Your Potential: Benefits of ACM Membership",
      description: "Learn about the advantages and opportunities that come with being an ACM member at RVCE.",
      date: "2024-02-01",
      tags: ["ACM", "RVCE", "Membership", "Students"],
      author: { name: "ACM RVCE Core Team" },
      imageUrl: "https://www.acm.org/binaries/content/gallery/acm/ctas/ambassadors-for-acm.jpg/ambassadors-for-acm.jpg/acm:desktopcta", // Placeholder
    }
  ]
};

export const getAllTags = (posts: BlogPost[]): string[] => {
  const allTags = posts.flatMap(post => post.tags);
  return Array.from(new Set(allTags)).sort();
}; 