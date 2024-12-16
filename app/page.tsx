import { client } from '@/sanity/lib/client';
import HomeModule from './components/module/home';
import { QHomePage } from '@/sanity/lib/query';


async function getData() {
  const homepage = await client.fetch(QHomePage);
  return {
    homepage:homepage[0]
  }
}


export default async function Home() {
  const { homepage } = await getData()
  return (
    <>
      <HomeModule data={homepage}/>
    </>
  );
}