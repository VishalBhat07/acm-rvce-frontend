import React from 'react';
import { motion } from 'framer-motion';
import { TeamMember } from '@/lib/types/team';
import { socialButtonVariants } from '@/lib/config/animations';
import { LinkedInIcon, GitHubIcon, EmailIcon } from './SocialIcons';

interface TeamMemberCardProps {
  member: TeamMember;
  index: number;
}

const TeamMemberCard: React.FC<TeamMemberCardProps> = ({ member, index }) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut"
      }
    })
  };

  return (
    <motion.div
      custom={index}
      variants={cardVariants}
      whileHover={{ y: -5 }}
      className="rounded-xl overflow-hidden shadow-lg bg-card border border-border"
    >
      <div className="h-56 relative overflow-hidden">
        <div className="w-full h-full relative">
          <img 
            src={member.image} 
            alt={member.name}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
      </div>

      <div className="p-6 relative">
        <h3 className="text-xl font-bold mb-1">{member.name}</h3>
        <p className="text-sm mb-4 text-muted-foreground">{member.role}</p>

        <div className="flex space-x-3">
          {member.linkedin && (
            <motion.a 
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-card hover:bg-blue-600 hover:text-white transition-colors duration-300 border border-border shadow-sm"
              variants={socialButtonVariants}
              initial="rest"
              whileHover="hover"
              aria-label="LinkedIn profile"
            >
              <LinkedInIcon />
            </motion.a>
          )}
          
          {member.github && (
            <motion.a 
              href={member.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-card hover:bg-gray-800 hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors duration-300 border border-border shadow-sm"
              variants={socialButtonVariants}
              initial="rest"
              whileHover="hover"
              aria-label="GitHub profile"
            >
              <GitHubIcon />
            </motion.a>
          )}
          
          {member.email && (
            <motion.a 
              href={`mailto:${member.email}`}
              className="p-2 rounded-full bg-card hover:bg-green-600 hover:text-white transition-colors duration-300 border border-border shadow-sm"
              variants={socialButtonVariants}
              initial="rest"
              whileHover="hover"
              aria-label="Email"
            >
              <EmailIcon />
            </motion.a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default TeamMemberCard; 