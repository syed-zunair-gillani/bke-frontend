'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Button from '@/app/components/ui/Button';
import { useRouter } from 'next/navigation';

interface EquipmentCardProps {
  title: string;
  description: string;
  image: string;
  href: string;
  specs?: string[];
}

export default function EquipmentCard({ title, description, image, href, specs }: EquipmentCardProps) {
  const router = useRouter();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5 }}
      viewport={{ once: true }}
      className="card overflow-hidden"
    >
      <div className="relative h-48 mb-4">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover rounded-lg"
        />
      </div>
      <h3 className="text-xl font-semibold mb-3 text-blue-500">{title}</h3>
      <p className="text-gray-400 mb-4">{description}</p>
      {specs && (
        <ul className="text-gray-400 mb-4 space-y-1">
          {specs.map((spec, index) => (
            <li key={index} className="flex items-center">
              <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
              {spec}
            </li>
          ))}
        </ul>
      )}
      <Button onClick={() => router.push(href)}>Learn More</Button>
    </motion.div>
  );
}