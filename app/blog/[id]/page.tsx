"use client"
// import { notFound } from 'next/navigation';
import { client } from '@/sanity/lib/client';
import { singleBlog } from '@/sanity/lib/query';
import SingleBlog from '@/app/components/module/singleblog';
import { useEffect, useState } from 'react';


export default function BlogPost({ params }: any) {
  const [blog, setBlog] = useState()
  
  useEffect(() => {
    (async () => {
      const blog = await client.fetch(singleBlog, { slug: params?.id });
      setBlog(blog);
    })();
  }, []);


  // if (!blog) {
  //   notFound();
  // }

  return (
    <SingleBlog blog={blog}/>
  );
}
