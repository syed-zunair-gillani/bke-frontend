"use client";

import { motion } from "framer-motion";
import Button from "../../components/ui/Button";
import {
  TruckIcon,
  ShieldCheckIcon,
  ClockIcon,
} from "@heroicons/react/24/outline";
import { useRouter } from "next/navigation";
import { useContent } from "../../content/hooks/useContent";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import Link from "next/link";

const cardVariants = {
  initial: { opacity: 0, y: 20 },
  whileInView: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
  hover: {
    scale: 1.02,
    y: -5,
    transition: { duration: 0.3 },
  },
};

export default function HomeModule({ data }: any) {
  console.log("🚀 ~ HomeModule ~ data:", data);

  const router = useRouter();
  const { navigation } = useContent();

  return (
    <main className="bg-[#0a0c10]">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center section-padding gradient-section-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold mb-6 gradient-text"
          >
            {data?.hero_title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto"
          >
            {data?.h_short_info}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="space-x-4"
          >
            <Button onClick={() => router.push(`${data?.h_buttons?.[0]?.link}`)}>
              {data?.h_buttons?.[0]?.label}
            </Button>
            {data?.h_buttons?.[1] && (
              <Button
                variant="secondary"
                onClick={() => router.push(`${data?.h_buttons?.[1]?.link}`)}
              >
                {data?.h_buttons?.[1]?.label}
              </Button>
            )}
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 gradient-section-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {data?.h_feature_card?.map((item: any, idx: number) => {
              return (
                <motion.div
                  variants={cardVariants}
                  initial="initial"
                  whileInView="whileInView"
                  whileHover="hover"
                  key={idx}
                  viewport={{ once: true }}
                  className="card"
                >
                  <Image
                    src={item?.Icon?.asset?.url}
                    alt=""
                    width={48}
                    height={48}
                  />
                  <h3 className="text-xl font-semibold mb-3 mt-3">
                    {item?.title}
                  </h3>
                  <p className="text-gray-400">{item?.info}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 gradient-section-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
              Our Services
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Comprehensive flatbed solutions tailored to your specific needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {data?.services?.map((item: any, idx: number) => (
              <motion.div
                variants={cardVariants}
                initial="initial"
                whileInView="whileInView"
                whileHover="hover"
                viewport={{ once: true }}
                key={idx}
                className="card"
              >
                <h3 className="text-xl font-semibold mb-3">{item?.title}</h3>
                <p className="text-gray-400 mb-4">{item?.excerpt}</p>
                <Button
                  variant="secondary"
                  onClick={() =>
                    router.push(`/equipment/${item?.slug?.current}`)
                  }
                >
                  Learn More
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-section-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="card text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
              {data?.q_title}
            </h2>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              {data?.q_info}
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href={data?.q_buttons?.[0]?.link || ""}>
                <Button
                  onClick={() => router.push(`${data?.q_buttons?.[0]?.link}`)}
                >
                  {data?.q_buttons?.[0]?.label}
                </Button>
              </Link>
              {data?.q_buttons?.[1] && (
                <Link href={data?.q_buttons?.[1]?.link || ""}>
                  <Button
                    variant="secondary"
                    onClick={() => router.push(`${data?.q_buttons?.[1]?.link}`)}
                  >
                    {data?.q_buttons?.[1]?.label}
                  </Button>
                </Link>
              )}
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
