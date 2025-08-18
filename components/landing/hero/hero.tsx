import React from "react";
import { FaUniversity, FaUserGraduate, FaBookOpen, FaLaptopCode } from "react-icons/fa"; // importing icons

const Hero: React.FC = () => {
  return (
    <div className="relative overflow-hidden bg-white dark:bg-[var(--background)]">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-radial from-gray-200 to-transparent opacity-30 dark:from-[var(--color-3)]/10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-radial from-gray-100 to-transparent opacity-20 dark:from-[var(--color-1)]/10"></div>

      {/* Animated grid pattern */}
      <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-center opacity-5 animate-pulse-slow"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Text content */}
          <div className="w-full md:w-3/5 space-y-6 animate-fade-in">
            <div className="inline-block px-4 py-1.5 bg-gray-100 dark:bg-white/10 rounded-full backdrop-blur-sm transition-all duration-300 hover:bg-gray-200 dark:hover:bg-white/20 group cursor-pointer">
              <p className="text-sm font-medium text-black dark:text-white flex items-center">
                <span className="bg-[#0466c8] text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center mr-2">
                  ✦
                </span>
                <span>Join ACM RVCE Chapter</span>
                <span className="ml-2 transform transition-transform duration-300 group-hover:translate-x-1">→</span>
              </p>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black dark:text-white leading-tight">
              Empower Your <span className="text-[#0466c8] dark:text-[var(--primary)]">Tech Journey</span> With Us
            </h1>

            <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-2xl leading-relaxed">
              ACM RVCE brings you opportunities to learn, innovate, and connect with the global tech community. Join us to accelerate your growth in computing.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <button className="px-6 py-3 bg-[#0466c8] hover:bg-[#0353a4] text-white font-medium rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#0466c8]/50 dark:bg-blue-600 dark:hover:bg-blue-700 dark:shadow-blue-900/20 dark:shadow-md">
                Become a Member
              </button>
              <button className="px-6 py-3 bg-transparent border border-gray-400 dark:border-gray-600 hover:border-black dark:hover:border-white text-black dark:text-white font-medium rounded-lg transition-all duration-300 backdrop-blur-sm hover:bg-gray-100 dark:hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-gray-300 dark:focus:ring-gray-600">
                Learn More
              </button>
            </div>

            <div className="flex items-center gap-4 pt-6">
              <p className="text-sm text-gray-600 dark:text-gray-400">Trusted by students from</p>
              <div className="flex -space-x-2">
                {[FaUniversity, FaUserGraduate, FaBookOpen, FaLaptopCode].map((Icon, i) => (
                  <div key={i} className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 flex items-center justify-center text-black dark:text-white text-lg">
                    <Icon />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Image/Visual */}
          <div className="w-full md:w-2/5 animate-float">
            <div className="relative">
              {/* Updated shadow gradient for better dark mode appearance */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl blur-xl transform -rotate-3 scale-95"></div>
              <div className="relative bg-white dark:bg-[var(--card)] border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden p-1 shadow-md dark:shadow-[0_4px_15px_rgba(0,0,0,0.1)]">
                <div className="bg-gray-50 dark:bg-[var(--background)] rounded-lg overflow-hidden">
                  <img 
                    src="/landing/acm-landing.jpg" 
                    alt="ACM RVCE Activities" 
                    className="w-full h-auto rounded-lg transform transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute top-2 right-2 bg-[#0466c8] text-white text-xs font-bold px-3 py-1.5 rounded-lg shadow-md">
                    ACM RVCE
                  </div>
                </div>
              </div>

              {/* Improved floating badges for dark mode */}
              <div className="absolute -bottom-4 -left-4 bg-white dark:bg-gray-800 rounded-lg shadow-md shadow-gray-200 dark:shadow-[0_8px_30px_rgba(0,0,0,0.3)] p-3 transform rotate-3 animate-float" style={{ animationDelay: '0.5s' }}>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-[#0466c8]/10 dark:bg-blue-500/30 flex items-center justify-center text-[#0466c8] dark:text-blue-300">
                    🏆
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-black dark:text-white">20+ Events</p>
                    <p className="text-xs text-gray-600 dark:text-gray-300">Every Year</p>
                  </div>
                </div>
              </div>

              <div className="absolute -top-4 -right-4 bg-white dark:bg-gray-800 rounded-lg shadow-md shadow-gray-200 dark:shadow-[0_8px_30px_rgba(0,0,0,0.3)] p-3 transform -rotate-3 animate-float" style={{ animationDelay: '1s' }}>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-[#0466c8]/10 dark:bg-blue-500/30 flex items-center justify-center text-[#0466c8] dark:text-blue-300">
                    👥
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-black dark:text-white">500+ Members</p>
                    <p className="text-xs text-gray-600 dark:text-gray-300">Join the community</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;