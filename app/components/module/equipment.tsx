"use client"
import { motion } from 'framer-motion';
// import RelatedEquipment from '../../equipment/components/RelatedEquipment';
import {PortableText} from '@portabletext/react'

const EquipmentModule = ({data}:any) => {
  return (
    data?.title &&
    <>
      <main className="pt-24 pb-16 bg-[#0a0c10]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="card"
          >
            <h1 className="text-3xl font-bold mb-6 gradient-text">
              {data?.title}
            </h1>

            <div className="relative h-64 md:h-96 mb-8 rounded-lg overflow-hidden">
              <img
                src={data?.image?.asset?.url}
                alt={data?.title}
                className="object-cover w-full h-full"
              />
            </div>

            <section className='services_content'>
              <PortableText value={data?.content}/>
            </section>
          </motion.div>

          {/* <RelatedEquipment
            currentEquipment={data?.id}
            allEquipment={Object.values(equipmentData)}
          /> */}
        </div>
      </main>
    </>
  );
};

export default EquipmentModule;
