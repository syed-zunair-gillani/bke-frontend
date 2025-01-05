"use client"
// import { notFound } from "next/navigation";
import { client } from "@/sanity/lib/client";
import { singleService } from "@/sanity/lib/query";
import EquipmentModule from "@/app/components/module/equipment";
import { useEffect, useState } from "react";

export default function EquipmentPage({ params }: any) {
  const [service, setService] = useState();

  useEffect(() => {
    (async () => {
      const res = await client.fetch(singleService, { slug: params?.type });
      setService(res);
    })();
  }, []);

  // if (!service) {
  //   notFound();
  // }

  return <EquipmentModule data={service} />;
}
