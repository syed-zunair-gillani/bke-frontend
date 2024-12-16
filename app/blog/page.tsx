import { client } from "@/sanity/lib/client";
import BlogModule from "../components/module/blogs";
import { QAllPostQuery } from "@/sanity/lib/query";

async function getData() {
  const blogsRes = await client.fetch(QAllPostQuery);
  return {
    blogs:blogsRes
  }
}

export default async function Blog() {
  const {blogs} = await getData()
  return (
    <>
      <BlogModule data={blogs}/>
    </>
  );
}