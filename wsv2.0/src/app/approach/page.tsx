'use client';

import { memo } from 'react';
import Navbar from '@/components/Navbar';
import {
  ApproachHero,
  ApproachPhilosophy,
  ApproachBlueprint,
  ApproachVerticals
} from '@/components/sections/approach';

const ApproachPage = memo(() => {
  return (
    <main className="min-h-screen relative overflow-hidden">
      <Navbar />
      
      <ApproachHero />

      <ApproachPhilosophy />

      <ApproachBlueprint />

      <ApproachVerticals />
    </main>
  );
});

ApproachPage.displayName = 'ApproachPage';

export default ApproachPage;