'use client';

import { memo } from 'react';
import Navbar from '@/components/Navbar';
import {
  ApproachHero,
  ApproachStats,
  ApproachProcess,
  ApproachBlueprint,
  ApproachVerticals,
  ApproachPartnership
} from '@/components/sections/approach';

const ApproachPage = memo(() => {

  return (
    <main className="min-h-screen relative overflow-hidden">
      <Navbar />
      
      <ApproachHero />

      <ApproachStats />

      <ApproachProcess />

      <ApproachBlueprint />

      <ApproachVerticals />

      <ApproachPartnership />
    </main>
  );
});

ApproachPage.displayName = 'ApproachPage';

export default ApproachPage;