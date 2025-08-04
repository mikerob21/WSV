'use client';

import { memo } from 'react';
import Navbar from '@/components/Navbar';
import {
  AboutHero,
  AboutLeadership,
  AboutOfferings,
  AboutEcosystem,
  AboutPartnership
} from '@/components/sections/about';

const AboutPage = memo(() => {
  return (
    <main className="min-h-screen relative overflow-hidden">
      <Navbar />
      
      <AboutHero />

      <AboutLeadership />

      <AboutOfferings />

      <AboutEcosystem />

      <AboutPartnership />
    </main>
  );
});

AboutPage.displayName = 'AboutPage';

export default AboutPage;