import ServicesModule from "@/app/components/module/services"
import { client } from "@/sanity/lib/client";
import { QServices } from "@/sanity/lib/query";

async function getData() {
  const res = await client.fetch(QServices);
  return {
    services:res
  }
}


export default async function Services() {
  const {services} = await getData()
  return (
    <>
      <ServicesModule data={services}/>
    </>
  );
}