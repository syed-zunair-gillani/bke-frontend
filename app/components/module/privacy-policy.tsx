'use client';

import { motion } from 'framer-motion';
import {PortableText} from '@portabletext/react'

export default async function PrivacyPolicyModule({data}:any) {
  return (
    <main className="pt-24 pb-16 bg-[#0a0c10]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="card"
        >
          <h1 className="text-3xl font-bold mb-8 gradient-text">{data?.hero_title}</h1>
          
          <div className="space-y-6 text-gray-300 services_content pp">
            <PortableText value={data?.content}/>
          </div>
        </motion.div>
      </div>
    </main>
  );
}