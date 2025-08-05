'use client';

import { memo } from 'react';
import Navbar from '@/components/Navbar';
import {
  AboutHero,
  AboutExpertise,
  AboutEcosystem
} from '@/components/sections/about';

const AboutPage = memo(() => {
  return (
    <main className="min-h-screen relative overflow-hidden">
      <Navbar />
      
      <AboutHero />

      <AboutExpertise />

      <AboutEcosystem />
    </main>
  );
});

AboutPage.displayName = 'AboutPage';

export default AboutPage;