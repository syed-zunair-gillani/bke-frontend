'use client';

import { motion } from 'framer-motion';
import EquipmentCard from './EquipmentCard';
import { Equipment } from '../types';

interface RelatedEquipmentProps {
  currentEquipment: string;
  allEquipment: Equipment[];
}

export default function RelatedEquipment({ currentEquipment, allEquipment }: RelatedEquipmentProps) {
  const relatedEquipment = allEquipment
    .filter(equipment => equipment.id !== currentEquipment)
    .slice(0, 3);

  return (
    <section className="mt-16">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-2xl font-bold mb-8 gradient-text"
      >
        Related Equipment
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {relatedEquipment.map((equipment) => (
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
    </section>
  );
}