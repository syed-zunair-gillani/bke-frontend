'use client';

import { motion } from 'framer-motion';

export default function AboutModule({data}:any) {
  return (
    <main className="pt-24 pb-16 bg-[#0a0c10]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold mb-4 gradient-text">About Us</h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Your trusted partner in specialized flatbed transportation
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="card mb-8"
        >
          <h2 className="text-2xl font-semibold mb-4 text-blue-500">Our Story</h2>
          <p className="text-gray-400">
            Elite Flatbed Solutions has been a leader in specialized transportation services since our founding. 
            We've built our reputation on reliability, safety, and exceptional customer service.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="card"
        >
          <h2 className="text-2xl font-semibold mb-4 text-blue-500">Our Mission</h2>
          <p className="text-gray-400">
            To provide innovative and reliable flatbed transportation solutions while maintaining the highest 
            standards of safety and customer satisfaction in the industry.
          </p>
        </motion.div>
      </div>
    </main>
  );
}