"use client";
import { client } from "@/sanity/lib/client";
import BlogModule from "../components/module/blogs";
import { QAllPostQuery } from "@/sanity/lib/query";
import { useEffect, useState } from "react";

export default function Blog() {
  const [blogs, setBlogs] = useState();

  useEffect(() => {
    (async () => {
      const blogsRes = await client.fetch(QAllPostQuery);
      setBlogs(blogsRes);
    })();
  }, []);
  return (
    <>
      <BlogModule data={blogs} />
    </>
  );
}
