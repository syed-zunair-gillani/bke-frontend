'use client';

import { motion } from 'framer-motion';
import Button from '../../components/ui/Button';
import { useRouter } from 'next/navigation';

const cardVariants = {
  initial: { opacity: 0, y: 20 },
  whileInView: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 }
  },
  hover: {
    scale: 1.02,
    y: -5,
    transition: { duration: 0.3 }
  }
};

export default function ServicesModule({ data }) {
  const router = useRouter();

  return (
    <main className="pt-24 pb-16 bg-[#0a0c10]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold mb-4 gradient-text">Our Services</h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Specialized flatbed transportation solutions tailored to your needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Flatbed Service Card */}
          {
            data?.map((item, idx) => (
              <motion.div
                variants={cardVariants}
                initial="initial"
                whileInView="whileInView"
                whileHover="hover"
                viewport={{ once: true }}
                className="card"
                key={idx}
              >
                <h3 className="text-xl font-semibold mb-4 text-blue-500">{item?.title}</h3>
                <p className="text-gray-400 mb-6">
                  {item?.excerpt}
                </p>
                <Button onClick={() => router.push(`/equipment/${item?.slug.current}`)}>Learn More</Button>
              </motion.div>
            ))
          }
        </div>
      </div>
    </main>
  );
}