'use client';

import { memo } from 'react';
import {
  ApproachHero,
  ApproachPhilosophy,
  ApproachBlueprint,
  ApproachVerticals
} from '@/components/sections/approach';

const ApproachPage = memo(() => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <ApproachHero />
      <ApproachPhilosophy />
      <ApproachBlueprint />
      <ApproachVerticals />
    </div>
  );
});

ApproachPage.displayName = 'ApproachPage';

export default ApproachPage;