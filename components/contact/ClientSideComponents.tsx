'use client';

import React from 'react';
import dynamic from 'next/dynamic';

// Dynamically import components with client-side logic
const AnimatedBackground = dynamic(
  () => import('@/components/ui/animated-background'),
  { ssr: false }
);

const ScrollToTop = dynamic(
  () => import('@/components/ui/scroll-to-top'),
  { ssr: false }
);

const ParticleCursor = dynamic(
  () => import('@/components/ui/particle-cursor'),
  { ssr: false }
);

export const ClientAnimatedBackground: React.FC<React.ComponentProps<typeof AnimatedBackground>> = (props) => {
  return <AnimatedBackground {...props} />;
};

export const ClientScrollToTop: React.FC<React.ComponentProps<typeof ScrollToTop>> = (props) => {
  return <ScrollToTop {...props} />;
};

export const ClientParticleCursor: React.FC<React.ComponentProps<typeof ParticleCursor>> = (props) => {
  return <ParticleCursor {...props} />;
}; 