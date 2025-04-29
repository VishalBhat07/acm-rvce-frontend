import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TeamData } from '@/lib/types/team';
import TeamMemberCard from './TeamMemberCard';
import { containerVariants } from '@/lib/config/animations';

interface TeamMembersGridProps {
  teamData: TeamData;
  selectedYear: string;
  activeTab: 'core' | 'junior';
}

const TeamMembersGrid: React.FC<TeamMembersGridProps> = ({ 
  teamData, 
  selectedYear, 
  activeTab 
}) => {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={`${selectedYear}-${activeTab}`}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit={{ opacity: 0 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
      >
        {teamData[selectedYear][activeTab].map((member, index) => (
          <TeamMemberCard 
            key={member.id}
            member={member}
            index={index}
          />
        ))}
      </motion.div>
    </AnimatePresence>
  );
};

export default TeamMembersGrid; 