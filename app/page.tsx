"use client"
import { useEffect, useState } from 'react';
import HomeModule from './components/module/home';
import { client } from '@/sanity/lib/client';
import { QHomePage } from '@/sanity/lib/query';

export default function Home() {
  const [homepage, setHomepage] = useState()
  
  useEffect(() => {
    (async () => {
     const res = await client.fetch(QHomePage);
      setHomepage(res?.[0]);
    })();
  }, []);


  return (
    <>
      <HomeModule data={homepage}/>
    </>
  );
}