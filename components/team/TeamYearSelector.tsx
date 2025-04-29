import React from 'react';
import { motion } from 'framer-motion';

interface TeamYearSelectorProps {
  years: string[];
  selectedYear: string;
  setSelectedYear: (year: string) => void;
}

const TeamYearSelector: React.FC<TeamYearSelectorProps> = ({ 
  years, 
  selectedYear, 
  setSelectedYear 
}) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3, duration: 0.5 }}
      className="flex justify-center mb-10"
    >
      <div className="inline-flex p-1 rounded-lg bg-card shadow-lg">
        {years.map((year) => (
          <button
            key={year}
            onClick={() => setSelectedYear(year)}
            className={`px-6 py-2 text-sm font-medium rounded-md transition-all duration-300 ${
              selectedYear === year 
                ? 'bg-primary text-primary-foreground shadow-md' 
                : 'hover:bg-accent hover:text-accent-foreground'
            }`}
          >
            {year}
          </button>
        ))}
      </div>
    </motion.div>
  );
};

export default TeamYearSelector; 