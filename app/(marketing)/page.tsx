import React from "react";

const Expectations: React.FC = () => {
  const events = [
    {
      date: "April 15, 2025",
      title: "CodeJam 5.0",
      description:
        "ACM RVCE presents CodeJam 5.0, our flagship coding competition where participants solve complex algorithmic challenges and compete for exciting prizes.",
    },
    {
      date: "March 21, 2025",
      title: "TechTalks",
      description:
        "Join us for a series of enlightening tech talks by industry experts and alumni. Learn about the latest trends in AI, cloud computing, and blockchain technology.",
    },
    {
      date: "February 8, 2025",
      title: "Hackoverflow",
      description:
        "A 24-hour hackathon where teams collaborate to build innovative solutions to real-world problems. Put your skills to the test and create something amazing!",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto px-6 py-8 bg-[#fff] text-[#0a1128] font-sans rounded-xl relative overflow-hidden mt-20 dark:bg-[var(--background)] dark:text-[var(--foreground)]">
      <div className="absolute top-0 right-0 w-56 h-56 bg-gradient-radial from-[#0466c814] to-transparent z-0 dark:from-[var(--color-1)]/10"></div>

      <h1 className="text-2xl md:text-3xl font-extrabold text-center mb-8 text-[#001f54] dark:text-[var(--primary)]">
        What you can expect
        <span className="absolute bottom-[-10px] left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-[#0466c8] to-[#1282a2] dark:from-[var(--color-1)] dark:to-[var(--color-2)] rounded"></span>
      </h1>

      <div className="flex flex-col gap-6 relative">
        {events.map((event, index) => (
          <div
            key={index}
            className="relative p-6 bg-[#fefcfb] text-[#0a1128] rounded-xl shadow-sm dark:bg-[var(--card)] dark:text-[var(--card-foreground)]"
          >
            <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-[#0466c8] to-[#1282a2] dark:from-[var(--color-1)] dark:to-[var(--color-2)] rounded-l-md"></div>
            <div className="absolute right-[-60px] bottom-[-60px] w-[160px] h-[160px] bg-gradient-radial from-[#1282a20d] to-transparent z-[-1] dark:from-[var(--color-3)]/10"></div>

            <div className="inline-block mb-2 text-[#1282a2] text-xs font-semibold tracking-wide px-3 py-1 bg-[#1282a214] rounded-full dark:text-[var(--primary)] dark:bg-[var(--primary)]/20">
              {event.date}
            </div>

            <div className="pl-3">
              <h2 className="text-xl font-bold mb-3 text-[#001f54] relative inline-block dark:text-[var(--primary)]">
                {event.title}
                <span className="absolute bottom-[-4px] left-0 w-0 h-0.5 bg-gradient-to-r from-[#0466c8] to-transparent dark:from-[var(--color-1)]"></span>
              </h2>
              <p className="text-[#034078] leading-relaxed text-base opacity-90 dark:text-[var(--secondary-foreground)]">
                {event.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Expectations;
