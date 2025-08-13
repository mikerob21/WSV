'use client';

import { memo, useState, useMemo, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { portfolioData } from '@/data/portfolio';

interface SectorData {
  sector: string;
  count: number;
  companies: string[];
  percentage: number;
  color: string;
}

interface InteractiveSectorChartProps {
  onSectorHover?: (sector: SectorData | null) => void;
  onSectorClick?: (sector: SectorData) => void;
}

const InteractiveSectorChart = memo<InteractiveSectorChartProps>(({
  onSectorHover,
  onSectorClick
}) => {
  const chartRef = useRef(null);
  const isInView = useInView(chartRef, { once: true, amount: 0.3 });
  const [hoveredSector, setHoveredSector] = useState<string | null>(null);

  // Calculate sector data from portfolio
  const sectorData = useMemo(() => {
    const sectorMap = new Map<string, string[]>();
    
    portfolioData.forEach(company => {
      if (!sectorMap.has(company.type)) {
        sectorMap.set(company.type, []);
      }
      sectorMap.get(company.type)!.push(company.name);
    });

    const colors = [
      '#2563eb', // Blue-600
      '#4f46e5', // Indigo-600  
      '#0891b2', // Cyan-600
      '#059669', // Emerald-600
      '#dc2626', // Red-600
      '#7c3aed', // Violet-600
    ];

    return Array.from(sectorMap.entries()).map(([sector, companies], index) => ({
      sector,
      count: companies.length,
      companies,
      percentage: (companies.length / portfolioData.length) * 100,
      color: colors[index % colors.length]
    }));
  }, []);

  // Calculate donut chart paths
  const chartData = useMemo(() => {
    const size = 240;
    const strokeWidth = 40;
    const radius = (size - strokeWidth) / 2;
    const circumference = 2 * Math.PI * radius;
    
    let currentAngle = 0;
    
    return sectorData.map((sector) => {
      const angle = (sector.percentage / 100) * 360;
      const startAngle = currentAngle;
      const endAngle = currentAngle + angle;
      
      // Calculate path for donut segment
      const startAngleRad = (startAngle - 90) * (Math.PI / 180);
      const endAngleRad = (endAngle - 90) * (Math.PI / 180);
      
      const largeArcFlag = angle > 180 ? 1 : 0;
      
      const x1 = size/2 + radius * Math.cos(startAngleRad);
      const y1 = size/2 + radius * Math.sin(startAngleRad);
      const x2 = size/2 + radius * Math.cos(endAngleRad);
      const y2 = size/2 + radius * Math.sin(endAngleRad);
      
      const pathData = [
        `M ${size/2} ${size/2}`,
        `L ${x1} ${y1}`,
        `A ${radius} ${radius} 0 ${largeArcFlag} 1 ${x2} ${y2}`,
        'Z'
      ].join(' ');
      
      currentAngle += angle;
      
      return {
        ...sector,
        pathData,
        strokeDasharray: `${(sector.percentage / 100) * circumference} ${circumference}`,
        strokeDashoffset: 0
      };
    });
  }, [sectorData]);

  const handleSectorHover = (sector: SectorData | null) => {
    setHoveredSector(sector?.sector || null);
    onSectorHover?.(sector);
  };

  const handleSectorClick = (sector: SectorData) => {
    onSectorClick?.(sector);
  };

  return (
    <div ref={chartRef} className="relative">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-col lg:flex-row items-center gap-12"
      >
        {/* Interactive Donut Chart */}
        <div className="relative">
          <motion.svg
            width="240"
            height="240"
            className="transform -rotate-90"
            initial={{ rotate: -90 }}
            animate={isInView ? { rotate: -90 } : {}}
          >
            {/* Background circle */}
            <circle
              cx="120"
              cy="120"
              r="100"
              fill="none"
              stroke="var(--neutral-200)"
              strokeWidth="40"
            />
            
            {/* Sector segments */}
            {chartData.map((sector, index) => (
              <motion.g key={sector.sector}>
                <motion.path
                  d={sector.pathData}
                  fill={sector.color}
                  className="cursor-pointer transition-all duration-300"
                  style={{
                    opacity: hoveredSector && hoveredSector !== sector.sector ? 0.3 : 1,
                    filter: hoveredSector === sector.sector ? 'brightness(1.1)' : 'none'
                  }}
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ 
                    duration: 0.6, 
                    delay: index * 0.1,
                    ease: [0.16, 1, 0.3, 1]
                  }}
                  whileHover={{ 
                    scale: 1.05,
                    transition: { duration: 0.2 }
                  }}
                  onMouseEnter={() => handleSectorHover(sector)}
                  onMouseLeave={() => handleSectorHover(null)}
                  onClick={() => handleSectorClick(sector)}
                />
              </motion.g>
            ))}
          </motion.svg>
          
          {/* Center content */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="text-3xl font-black text-emphasis"
              >
                {portfolioData.length}
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.9, duration: 0.6 }}
                className="text-sm font-medium text-secondary"
              >
                Companies
              </motion.div>
            </div>
          </div>
        </div>

        {/* Sector Legend */}
        <div className="flex-1">
          <motion.h3
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="heading-secondary mb-6"
          >
            Portfolio Sectors
          </motion.h3>
          
          <div className="space-y-3">
            {sectorData.map((sector, index) => (
              <motion.div
                key={sector.sector}
                initial={{ opacity: 0, x: 20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ 
                  delay: 0.7 + (index * 0.1), 
                  duration: 0.6,
                  ease: [0.16, 1, 0.3, 1]
                }}
                className={`group cursor-pointer transition-all duration-300 ${
                  hoveredSector === sector.sector ? 'transform translate-x-2' : ''
                }`}
                onMouseEnter={() => handleSectorHover(sector)}
                onMouseLeave={() => handleSectorHover(null)}
                onClick={() => handleSectorClick(sector)}
              >
                <div className="card-sleek p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <motion.div
                        className="w-3 h-3 rounded-full"
                        style={{ backgroundColor: sector.color }}
                        animate={{
                          scale: hoveredSector === sector.sector ? 1.3 : 1,
                        }}
                        transition={{ duration: 0.2 }}
                      />
                      <div>
                        <div className="font-semibold text-emphasis">
                          {sector.sector}
                        </div>
                        <div className="text-xs text-secondary">
                          {sector.companies.join(', ')}
                        </div>
                      </div>
                    </div>
                    
                    <div className="text-right">
                      <div className="font-bold text-emphasis">
                        {sector.count}
                      </div>
                      <div className="text-xs text-secondary">
                        {sector.percentage.toFixed(1)}%
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
});

InteractiveSectorChart.displayName = 'InteractiveSectorChart';

export default InteractiveSectorChart;