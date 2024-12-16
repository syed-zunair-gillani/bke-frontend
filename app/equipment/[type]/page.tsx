import { EquipmentType } from '../data/equipment';
import { notFound } from 'next/navigation';
import { client } from '@/sanity/lib/client';
import { singleService } from '@/sanity/lib/query';
import EquipmentModule from '@/app/components/module/equipment';

interface EquipmentPageProps {
  params: {
    type: EquipmentType;
  };
}

async function getData(slug:any) {
  const res = await client.fetch(singleService, { slug });
  return {
    service:res
  }
}


export default async function EquipmentPage({ params }: EquipmentPageProps) {
  const {service} = await getData(params?.type)

  if (!service) {
    notFound();
  }

  return (
    <EquipmentModule data={service}/>
  );
}