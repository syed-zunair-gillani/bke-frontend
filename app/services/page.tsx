"use client"
import ServicesModule from "@/app/components/module/services"
import { client } from "@/sanity/lib/client";
import { QServices } from "@/sanity/lib/query";
import { useEffect, useState } from "react";

export default  function Services() {
  const [services, setServices] = useState();
  
    useEffect(() => {
      (async () => {
        const res = await client.fetch(QServices);
        setServices(res);
      })();
    }, []);

  return (
    <>
      <ServicesModule data={services}/>
    </>
  );
}