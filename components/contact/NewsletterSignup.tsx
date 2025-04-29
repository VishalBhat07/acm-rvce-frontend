'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { CheckCircle2, Send } from 'lucide-react';

interface NewsletterSignupProps {
  title: string;
  description: string;
  buttonText: string;
  placeholderText: string;
  successMessage: string;
  className?: string;
}

const NewsletterSignup: React.FC<NewsletterSignupProps> = ({
  title,
  description,
  buttonText,
  placeholderText,
  successMessage,
  className
}) => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [touched, setTouched] = useState(false);
  
  const isValidEmail = (email: string) => {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!isValidEmail(email)) {
      setTouched(true);
      return;
    }
    
    setStatus('submitting');
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Here you would normally send the data to your backend
      // const response = await fetch('/api/newsletter', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({ email }),
      // });
      
      // if (!response.ok) throw new Error('Subscription failed');
      
      setStatus('success');
    } catch (error) {
      console.error('Newsletter signup error:', error);
      setStatus('error');
    }
  };
  
  return (
    <div className={cn("relative", className)}>
      <motion.div 
        className="w-full max-w-2xl mx-auto bg-gradient-to-b from-primary/5 to-transparent border border-border rounded-lg shadow-sm p-6 md:p-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        whileHover={{ y: -5 }}
      >
        {status === 'success' ? (
          <motion.div 
            className="flex flex-col items-center justify-center text-center py-8"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            <CheckCircle2 className="w-12 h-12 mb-4 text-green-500" />
            <h3 className="text-2xl font-bold mb-2 text-foreground">Thank You!</h3>
            <p className="text-muted-foreground">{successMessage}</p>
          </motion.div>
        ) : (
          <>
            <div className="text-center mb-6">
              <motion.h3 
                className="text-2xl md:text-3xl font-bold mb-2 text-foreground"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                {title}
              </motion.h3>
              <motion.p 
                className="text-muted-foreground"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                {description}
              </motion.p>
            </div>
            
            <motion.form 
              onSubmit={handleSubmit}
              className="flex flex-col md:flex-row gap-3 mt-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="flex-grow">
                <Input
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (touched) setTouched(false);
                  }}
                  onBlur={() => setTouched(true)}
                  placeholder={placeholderText}
                  className={cn(
                    "w-full bg-background/60 h-12 px-4 rounded-md",
                    touched && !isValidEmail(email) && "border-destructive focus:border-destructive"
                  )}
                  aria-label="Email address"
                  disabled={status === 'submitting'}
                />
                {touched && !isValidEmail(email) && (
                  <motion.p 
                    className="text-sm text-destructive mt-1"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                  >
                    Please enter a valid email address
                  </motion.p>
                )}
              </div>
              
              <motion.div
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <Button
                  type="submit"
                  className="bg-primary text-primary-foreground min-h-12 px-6"
                  disabled={status === 'submitting'}
                >
                  {status === 'submitting' ? (
                    <span className="flex items-center gap-2">
                      <span className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
                      <span>Subscribing...</span>
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      <Send className="h-4 w-4" />
                      <span>{buttonText}</span>
                    </span>
                  )}
                </Button>
              </motion.div>
            </motion.form>
          </>
        )}
      </motion.div>
    </div>
  );
};

export default NewsletterSignup; 