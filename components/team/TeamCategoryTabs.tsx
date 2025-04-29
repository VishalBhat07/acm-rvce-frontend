import React from 'react';
import { motion } from 'framer-motion';

interface TeamCategoryTabsProps {
  activeTab: 'core' | 'junior';
  setActiveTab: (tab: 'core' | 'junior') => void;
}

const TeamCategoryTabs: React.FC<TeamCategoryTabsProps> = ({ 
  activeTab, 
  setActiveTab 
}) => {
  return (
    <div className="flex justify-center mb-10">
      <div className="border-b border-border flex space-x-12">
        <button
          onClick={() => setActiveTab("core")}
          className={`pb-4 font-medium text-lg relative ${
            activeTab === "core" 
              ? "text-primary" 
              : "text-muted-foreground hover:text-foreground"
          }`}
        >
          Core Team
          {activeTab === "core" && (
            <motion.div
              className="absolute bottom-0 left-0 right-0 h-1 rounded-t-md bg-primary"
              layoutId="activeTab"
            />
          )}
        </button>
        <button
          onClick={() => setActiveTab("junior")}
          className={`pb-4 font-medium text-lg relative ${
            activeTab === "junior" 
              ? "text-primary" 
              : "text-muted-foreground hover:text-foreground"
          }`}
        >
          Junior Core
          {activeTab === "junior" && (
            <motion.div
              className="absolute bottom-0 left-0 right-0 h-1 rounded-t-md bg-primary"
              layoutId="activeTab"
            />
          )}
        </button>
      </div>
    </div>
  );
};

export default TeamCategoryTabs; 