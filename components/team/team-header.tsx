import React from 'react';
import { motion } from 'framer-motion';

const TeamHeader: React.FC = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-center my-12"
    >
      <h1 className="text-4xl font-bold mb-4">Our Team</h1>
      <p className="text-lg max-w-2xl mx-auto text-muted-foreground">
        Meet the dedicated individuals behind ACM RVCE who work to foster innovation and growth in computing.
      </p>
    </motion.div>
  );
};

export default TeamHeader; 