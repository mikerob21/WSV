'use client';

import { motion } from 'framer-motion';

export default function CallToActionSection() {
  return (
    <section className="py-12 px-6 lg:px-8 bg-blue-900 text-white text-center">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-2xl font-bold mb-4"
        >
          Join the Transformation
        </motion.h2>
        <p className="text-base mb-6">Partner with WSV to scale your soccer venture. Or dive into Jeremiah's story in The Athlete’s War.</p>
        <div className="flex justify-center gap-4">
          <button className="px-6 py-3 bg-white text-blue-900 rounded-lg font-medium">Invest with Us</button>
          <button className="px-6 py-3 border-2 border-white rounded-lg font-medium">Buy the Book</button>
        </div>
      </div>
    </section>
  );
}