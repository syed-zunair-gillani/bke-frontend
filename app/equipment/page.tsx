'use client';

import { motion } from 'framer-motion';
import EquipmentCard from './components/EquipmentCard';
import { equipmentData } from './data/equipment';

export default function Equipment() {
  return (
    <main className="pt-24 pb-16 bg-[#0a0c10]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold mb-4 gradient-text">Our Equipment</h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Explore our range of specialized flatbed equipment designed to meet your transportation needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.values(equipmentData).map((equipment) => (
            <EquipmentCard
              key={equipment.id}
              title={equipment.title}
              description={equipment.shortDescription}
              image={equipment.image}
              href={`/equipment/${equipment.id}`}
              specs={equipment.specs.slice(0, 3)}
            />
          ))}
        </div>
      </div>
    </main>
  );
}