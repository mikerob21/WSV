'use client';

import { memo } from 'react';
import PremiumPortfolio from '@/components/sections/portfolio/PremiumPortfolio';

const PortfolioPage = memo(() => {
  return <PremiumPortfolio />;
});

PortfolioPage.displayName = 'PortfolioPage';

export default PortfolioPage;