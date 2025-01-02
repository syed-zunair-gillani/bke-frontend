import HomeModule from './components/module/home';

async function getData() {
  const res = await fetch(`${process.env.FRONTEND_URL}/api/homepage`, { next: { revalidate: 60 } })
  const pageRes = await res.json()
  return {
    homepage:pageRes?.data[0]
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