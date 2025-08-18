'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { fadeInUpVariants, imageVariants, sectionTitleVariants } from '@/lib/config/animations';

interface ContactHeroProps {
  title: string;
  subtitle: string;
  image: string;
  className?: string;
}

const ContactHero: React.FC<ContactHeroProps> = ({
  title,
  subtitle,
  image,
  className
}) => {
  return (
    <section 
      className={cn(
        "w-full overflow-hidden bg-gradient-to-b from-primary/5 to-background py-10 md:py-16",
        className
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-4 lg:gap-12  pl-20">
          <motion.div 
            className="w-full md:w-1/2 max-w-xl"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.2
                }
              }
            }}
          >
            <motion.h1 
              className="text-4xl md:text-5xl font-bold text-foreground leading-tight"
              variants={sectionTitleVariants}
            >
              {title}
            </motion.h1>
            
            <motion.p 
              className="mt-4 text-lg text-muted-foreground max-w-lg"
              variants={fadeInUpVariants}
              custom={1}
            >
              {subtitle}
            </motion.p>
            
            <motion.div 
              className="mt-5 h-1 w-20 bg-primary rounded-full"
              initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: 1, width: 80 }}
              transition={{ delay: 0.5, duration: 0.4 }}
            />
          </motion.div>
          
          <motion.div 
            className="relative w-full md:w-1/2 max-w-md aspect-square md:aspect-[4/3] lg:aspect-square"
            variants={imageVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="absolute -inset-1 md:-inset-2 bg-gradient-to-tr from-primary/30 to-transparent rounded-2xl transform rotate-2" />
            <div className="absolute inset-0 bg-card/30 backdrop-blur-sm border border-border rounded-2xl overflow-hidden transform -rotate-1 shadow-lg0">
              <Image
                src={"/about/about-acm-image.jpg"}
                alt="Contact"
                fill
                className="object-cover object-center"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactHero; 