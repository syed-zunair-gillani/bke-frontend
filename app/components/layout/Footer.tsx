"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FaPhone, FaMapMarkerAlt, FaTwitter, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { useContent } from "@/app/content/hooks/useContent";
import { useTheme } from "@/app/theme/hooks/useTheme";
import { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client";
import { Qfooter } from "@/sanity/lib/query";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";

const footerVariants = {
  initial: { opacity: 0, y: 20 },
  whileInView: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

const socialVariants = {
  hover: {
    y: -3,
    scale: 1.1,
    transition: { duration: 0.2 },
  },
};

export default function Footer({ }: any) {
  const { company, footer } = useContent();
  const { colors } = useTheme();
  const [data, setData] = useState<any>();

  useEffect(() => {
    (async () => {
      const res = await client.fetch(Qfooter);
      setData(res[0]);
    })();
  }, []);

  return (
    <footer className="bg-[#1a1d25]/90 backdrop-blur-lg border-t border-gray-800/50 shadow-[0_-8px_12px_-1px_rgba(0,0,0,0.7),0_-4px_8px_-1px_rgba(0,0,0,0.2),0_0_15px_rgba(59,130,246,0.15)]">
      <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
          variants={footerVariants}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
        >
          {/* Company Info */}
          <div className="flex items-center space-x-4">
            <Link href="/">
              <motion.h3
                className="text-xl font-bold bg-gradient-to-r from-blue-500 to-blue-700 bg-clip-text text-transparent"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                {company.name}
              </motion.h3>
            </Link>
            <div className="flex space-x-4">
              {data?.social_icon?.map((item: any, idx: number) => (
                <motion.a
                  href={item?.link || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-500 transition-colors duration-300"
                  variants={socialVariants}
                  whileHover="hover"
                  key={idx}
                >
                  <Image
                    src={urlFor(item.icon?.asset?._ref).url()}
                    alt=""
                    width={20}
                    height={20}
                  />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="flex flex-wrap items-center justify-end gap-4 text-sm">
            {data?.right_nav?.map((item: any, idx: number) => (
              <motion.div
                className="flex items-center space-x-2 text-gray-400"
                whileHover={{ x: 5 }}
                key={idx}
              >
                <Image
                    src={urlFor(item.icon?.asset?._ref).url()}
                    alt=""
                    width={20}
                    height={20}
                  />
                <span><Link href={item?.link || "#"}>{item?.label}</Link></span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Copyright and Legal Links */}
        <motion.div
          className="mt-3 pt-3 border-t border-gray-800/50 text-center text-gray-400 text-sm"
          variants={footerVariants}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
        >
          <p className="">
            &copy; {new Date().getFullYear()} {data?.copyright_text}
            {data?.copyright_links?.map((link:any, index:any) => (
              <span key={link.link} className="ml-1">
                {index > 0 && " | "}
                <Link
                  href={link.link}
                  className="hover:text-blue-500 transition-colors duration-300"
                >
                  {link.label}
                </Link>
              </span>
            ))}
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
