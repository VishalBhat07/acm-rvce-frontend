'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { fadeInUpVariants, listItemVariants, socialButtonVariants } from '@/lib/config/animations';
import { cn } from '@/lib/utils';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Github, 
  Instagram,
  Facebook,
  Twitter,
  Youtube
} from 'lucide-react';

interface ContactInfoProps {
  title: string;
  items: Array<{
    icon: string;
    label: string;
    value: string;
    link?: string;
  }>;
  socialLinks: Array<{
    platform: string;
    url: string;
    icon: string;
  }>;
  className?: string;
}

const iconMap: Record<string, React.ReactNode> = {
  "MapPin": <MapPin className="h-5 w-5" />,
  "Mail": <Mail className="h-5 w-5" />,
  "Phone": <Phone className="h-5 w-5" />,
  "Linkedin": <Linkedin className="h-5 w-5" />,
  "Github": <Github className="h-5 w-5" />,
  "Instagram": <Instagram className="h-5 w-5" />,
  "Facebook": <Facebook className="h-5 w-5" />,
  "Twitter": <Twitter className="h-5 w-5" />,
  "Youtube": <Youtube className="h-5 w-5" />,
};

const ContactInfo: React.FC<ContactInfoProps> = ({
  title,
  items,
  socialLinks,
  className
}) => {
  return (
    <motion.div 
      className={cn("w-full", className)}
      variants={fadeInUpVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="bg-card/60 backdrop-blur-sm border border-border rounded-lg shadow-sm p-6">
        <motion.h3 
          className="text-2xl font-bold mb-6 text-foreground border-b border-border pb-3"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          {title}
        </motion.h3>

        <motion.ul 
          className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-y-6 mb-8"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.1
              }
            }
          }}
          initial="hidden"
          animate="visible"
        >
          {items.map((item, index) => (
            <motion.li 
              key={item.label} 
              className="flex items-start gap-3"
              variants={listItemVariants}
              custom={index}
              whileHover={{ x: 3 }}
              transition={{ type: "spring", stiffness: 400, damping: 15 }}
            >
              <div className="mt-1 bg-primary/10 p-2 rounded-full text-primary">
                {iconMap[item.icon]}
              </div>
              <div>
                <p className="font-medium text-sm text-muted-foreground">{item.label}</p>
                {item.link ? (
                  <motion.a
                    href={item.link}
                    className="text-foreground hover:text-primary transition-colors"
                    whileHover={{ x: 2 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    {item.value}
                  </motion.a>
                ) : (
                  <p className="text-foreground">{item.value}</p>
                )}
              </div>
            </motion.li>
          ))}
        </motion.ul>

        {socialLinks.length > 0 && (
          <motion.div 
            className="border-t border-border pt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <p className="text-sm font-medium mb-3 text-foreground">Connect with us</p>
            <div className="flex items-center gap-3">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.platform}
                  href={link.url}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-accent/70 p-2.5 rounded-full text-accent-foreground hover:text-primary hover:bg-accent transition-colors"
                  variants={socialButtonVariants}
                  whileHover="hover"
                  initial="rest"
                  aria-label={link.platform}
                >
                  {iconMap[link.icon]}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default ContactInfo; 