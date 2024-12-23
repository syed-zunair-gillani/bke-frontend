import React from 'react'
import ContactUsModule from '../components/module/contact'
import { client } from '@/sanity/lib/client';
import { Qcontact } from '@/sanity/lib/query';


async function getData() {
  const res = await client.fetch(Qcontact);
  return {
    links:res[0]
  }
}

const Contact = async () => {
  const {links} = await getData()
  return (
    <>
    <ContactUsModule links={links}/>
    </>
  )
}

export default Contact