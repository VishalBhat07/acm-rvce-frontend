"use client";

import React from 'react';
import { HeroSection } from '@/components/ui/hero-section-2';

const Hero: React.FC = () => {
  return (
    <HeroSection
      logo={{
        url: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=100&h=100&fit=crop&q=80",
        alt: "ACM RVCE Logo",
        text: "ACM RVCE"
      }}
      title={
        <>
          Empower Your <br />
          <span className="text-primary">Tech Journey</span>
        </>
      }
      subtitle="ACM RVCE brings you opportunities to learn, innovate, and connect with the global tech community. Join us to accelerate your growth in computing and shape the future of technology."
      callToAction={{
        text: "BECOME A MEMBER",
        href: "/register",
      }}
      backgroundImage="/landing/acm-landing.jpg"
      contactInfo={{
        website: "acm.rvce.edu.in",
        phone: "+91 (080) 4089-8989",
        address: "RV College of Engineering, Bengaluru",
      }}
    />
  );
};

export default Hero;