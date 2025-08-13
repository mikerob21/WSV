'use client';

import { memo } from 'react';
import {
  AboutHero,
  AboutExpertise,
  AboutEcosystem
} from '@/components/sections/about';

const AboutPage = memo(() => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <AboutHero />
      <AboutExpertise />
      <AboutEcosystem />
    </div>
  );
});

AboutPage.displayName = 'AboutPage';

export default AboutPage;