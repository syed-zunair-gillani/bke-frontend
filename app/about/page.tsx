import { client } from '@/sanity/lib/client';
import AboutModule from '../components/module/about';
import { QAbout } from '@/sanity/lib/query';

async function getData() {
  const aboutRes = await client.fetch(QAbout);
  return {
    about:aboutRes[0]
  }
}

export default async function About() {
  const { about } = await getData()
  return (
    <>
      <AboutModule data={about}/>
    </>
  );
}