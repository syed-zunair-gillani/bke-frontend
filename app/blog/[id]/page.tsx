import { notFound } from 'next/navigation';
import { client } from '@/sanity/lib/client';
import { singleBlog } from '@/sanity/lib/query';
import SingleBlog from '@/app/components/module/singleblog';


async function getData(slug:any) {
  const blog = await client.fetch(singleBlog, { slug });
  return {
      blog
  }
}


export default async function BlogPost({ params }: any) {
  const {blog} = await getData(params?.id)

  if (!blog) {
    notFound();
  }

  return (
    <SingleBlog blog={blog}/>
  );
}
