"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useSite } from "@/app/config/hooks/useSite";

export default function Logo({ data }: any) {
  const { branding } = useSite();
  const { logo } = branding;

  return (
    <Link href="/">
      <motion.div
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.2 }}
        className="relative flex"
        style={{
          height: `${logo.height}px`,
          width: `${logo.width}px`,
          padding: `${logo.padding.y}px ${logo.padding.x}px`,
        }}
      >
        {data?.logo?.asset?.url && (
          <Image
            src={data?.logo?.asset?.url}
            alt={logo.alt}
            width={logo.width}
            height={logo.height}
            className="object-contain w-[110px]"
            priority
          />
        )}
      </motion.div>
    </Link>
  );
}
