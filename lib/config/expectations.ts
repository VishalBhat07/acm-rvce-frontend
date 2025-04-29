export interface Event {
    date: string;
    title: string;
    description: string;
    imageUrl?: string;
    location?: string;
    registrationUrl?: string;
    tags?: string[];
  }
  
  export interface ExpectationsConfig {
    title: string;
    description: string;
    events: Event[];
  }
  
  export const expectationsConfig: ExpectationsConfig = {
    title: "What you can expect",
    description: "Upcoming events and activities by ACM RVCE",
    events: [
      {
        date: "April 15, 2025",
        title: "CodeJam 5.0",
        description:
          "ACM RVCE presents CodeJam 5.0, our flagship coding competition where participants solve complex algorithmic challenges and compete for exciting prizes.",
        imageUrl: "/images/events/codejam.jpg",
        location: "Main Seminar Hall, RVCE",
        registrationUrl: "https://acmrvce.org/codejam",
        tags: ["Competition", "Coding", "Algorithms"]
      },
      {
        date: "March 21, 2025",
        title: "TechTalks",
        description:
          "Join us for a series of enlightening tech talks by industry experts and alumni. Learn about the latest trends in AI, cloud computing, and blockchain technology.",
        imageUrl: "/images/events/techtalks.jpg",
        location: "Virtual Event",
        registrationUrl: "https://acmrvce.org/techtalks",
        tags: ["Workshop", "Industry", "Technology"]
      },
      {
        date: "February 8, 2025",
        title: "Hackoverflow",
        description:
          "A 24-hour hackathon where teams collaborate to build innovative solutions to real-world problems. Put your skills to the test and create something amazing!",
        imageUrl: "/images/events/hackoverflow.jpg",
        location: "Innovation Center, RVCE",
        registrationUrl: "https://acmrvce.org/hackoverflow",
        tags: ["Hackathon", "Innovation", "Teamwork"]
      }
    ]
  };
  
  export const getAllEventTags = (events: Event[]): string[] => {
    const allTags = events.filter(event => event.tags).flatMap(event => event.tags as string[]);
    return Array.from(new Set(allTags)).sort();
  };