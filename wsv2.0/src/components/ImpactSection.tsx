'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import Image from 'next/image';

interface ImpactMetric {
  value: string;
  label: string;
  change: string;
  description: string;
}

export default function ImpactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [animatedValues, setAnimatedValues] = useState([0, 0, 0, 0]);

  const impactMetrics: ImpactMetric[] = [
    { value: "12", label: "Companies", change: "+3 in 2024", description: "Building the ecosystem" },
    { value: "200M+", label: "Views", change: "+150M YoY", description: "Amplifying stories" },
    { value: "$7.5M", label: "Revenue", change: "+85%", description: "Driving growth" },
    { value: "25+", label: "Partnerships", change: "+12 in 2024", description: "Creating impact" },
  ];

  useEffect(() => {
    if (isInView) {
      // Animation logic as in original
      const targetValues = [12, 200, 7.5, 25];
      // ... (keep original animation code)
    }
  }, [isInView]);

  return (
    <section ref={ref} className="py-12 px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto text-center mb-8">
        <h2 className="text-2xl font-bold text-neutral-900 mb-2">Impact</h2>
        <p className="text-base text-neutral-600">Resilience in action – measurable transformation.</p>
      </div>

      <div className="grid md:grid-cols-4 gap-6 mb-8">
        {impactMetrics.map((metric, index) => (
          <motion.div key={metric.label} /* animations as in original */>
            {/* Metric content as in original */}
          </motion.div>
        ))}
      </div>

      <div className="grid md:grid-cols-3 gap-4">
        {/* Gallery as in original, with added captions for emotion */}
        <div>
          <Image src="/images/gallery/drip-fc.webp" alt="Drip FC" width={400} height={225} className="rounded-lg" />
          <p className="text-sm mt-2">Culture that connects.</p>
        </div>
        {/* Repeat for other images */}
      </div>
    </section>
  );
}