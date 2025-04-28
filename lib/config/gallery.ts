import images from '@/app/(marketing)/gallery/img.json';

export type Category = 'View All' | 'Hackathons' | 'Workshops' | 'Activities' | 'Competitions' | 'Seminars';

export interface GalleryItem {
  id: number;
  src: string;
  alt: string;
  category: string;
  title: string;
  date: string;
  description?: string;
}

export const categories: Category[] = [
  "View All", "Hackathons", "Workshops", "Activities", "Competitions", "Seminars"
];

export const galleryItems: GalleryItem[] = [
  { 
    id: 1, 
    src: images.img1, 
    alt: "Hackathon Event", 
    category: "Hackathons",
    title: "ACM Hackathon 2024",
    date: "March 15, 2024",
    description: "Annual coding marathon with participants from across the region competing to build innovative solutions."
  },
  { 
    id: 2, 
    src: images.img2, 
    alt: "AI Workshop", 
    category: "Workshops",
    title: "Introduction to Machine Learning",
    date: "February 22, 2024",
    description: "Hands-on workshop covering the basics of machine learning algorithms and practical applications."
  },
  { 
    id: 3, 
    src: images.img3, 
    alt: "Algorithms Session", 
    category: "Activities",
    title: "Advanced Graph Algorithms",
    date: "April 5, 2024",
    description: "Deep dive into complex graph algorithms and their real-world applications in computer science."
  },
  { 
    id: 4, 
    src: images.img4, 
    alt: "Beginners Workshop", 
    category: "Competitions",
    title: "Python for Beginners",
    date: "January 10, 2024",
    description: "Introduction to Python programming language for newcomers to the world of coding."
  },
  { 
    id: 5, 
    src: images.img5, 
    alt: "Community Meetup", 
    category: "Seminars",
    title: "ACM Community Networking Event",
    date: "March 30, 2024",
    description: "Networking opportunity for ACM members to connect with industry professionals and peers."
  },
  { 
    id: 6, 
    src: images.img6, 
    alt: "Competitive Programming", 
    category: "Competitions",
    title: "Code Rush Challenge",
    date: "February 15, 2024",
    description: "Fast-paced coding competition testing algorithmic thinking and problem-solving skills."
  },
  { 
    id: 7, 
    src: images.img1, 
    alt: "Web Development", 
    category: "Workshops",
    title: "Full Stack Development Workshop",
    date: "April 12, 2024",
    description: "Comprehensive workshop covering both frontend and backend technologies for web development."
  },
  { 
    id: 8, 
    src: images.img2, 
    alt: "ACM Session", 
    category: "Hackathons",
    title: "Introduction to ACM",
    date: "January 25, 2024",
    description: "Orientation session for new ACM members explaining the club's activities and opportunities."
  },
  { 
    id: 9, 
    src: images.img3, 
    alt: "React Workshop", 
    category: "Workshops",
    title: "React Native Workshop",
    date: "March 8, 2024",
    description: "Hands-on workshop for building cross-platform mobile applications using React Native."
  }
]; 