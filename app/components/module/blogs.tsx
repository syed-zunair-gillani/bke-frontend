'use client';

import { motion } from 'framer-motion';
import Button from '../../components/ui/Button';
import { useRouter } from 'next/navigation';
import { posts } from '@/app/blog/data/posts';

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


function formatDate(isoString:any) {
  const date = new Date(isoString);
  const options:any = { year: "numeric", month: "long", day: "numeric" };
  return date.toLocaleDateString("en-US", options);
}

export default function BlogModule({data}:any) {
  const router = useRouter();

  return (
    <main className="pt-24 pb-16 bg-[#0a0c10]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold mb-4 gradient-text">Industry Insights</h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Stay updated with the latest news and trends in flatbed transportation
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data?.map((post:any) => (
            <motion.div
              key={post.slug?.current}
              variants={cardVariants}
              initial="initial"
              whileInView="whileInView"
              whileHover="hover"
              viewport={{ once: true }}
              className="card"
            >
              <div className="mb-4">
                <span className="text-sm text-gray-400">{formatDate(post._createdAt)}</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-blue-500">{post.title}</h3>
              <p className="text-gray-400 mb-4">{post.excerpt}</p>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500">By {post.writtenby}</span>
                <Button 
                  variant="secondary"
                  onClick={() => router.push(`/blog/${post.slug?.current}`)}
                >
                  Read More
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}