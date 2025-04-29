'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { fadeInUpVariants, containerVariants, cardVariants } from '@/lib/config/animations';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  title: string;
  description: string;
  faqs: FAQItem[];
  className?: string;
}

const FAQSection: React.FC<FAQSectionProps> = ({
  title,
  description,
  faqs,
  className
}) => {
  return (
    <section className={cn("w-full", className)}>
      <div className="w-full max-w-4xl mx-auto">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.h2 
            className="text-2xl md:text-3xl font-bold mb-4 text-foreground"
            variants={fadeInUpVariants}
            initial="hidden"
            animate="visible"
          >
            {title}
          </motion.h2>
          <motion.p 
            className="text-muted-foreground"
            variants={fadeInUpVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.1 }}
          >
            {description}
          </motion.p>
        </motion.div>
        
        <motion.div 
          className="grid gap-6 md:grid-cols-2"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {faqs.map((faq, index) => (
            <motion.div 
              key={`faq-${index}`}
              className="bg-card/60 backdrop-blur-sm p-6 rounded-lg border border-border shadow-sm"
              variants={cardVariants}
              custom={index}
              whileHover={{ 
                y: -5, 
                boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)",
                borderColor: "var(--primary)"
              }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
            >
              <h3 className="text-lg font-semibold mb-2 text-foreground">{faq.question}</h3>
              <p className="text-muted-foreground">{faq.answer}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection; 