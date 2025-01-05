"use client";
import React from "react";
import CommentSection from "@/app/blog/components/CommentSection";
import {PortableText} from '@portabletext/react'


function formatDate(isoString:any) {
  const date = new Date(isoString);
  const options:any = { year: "numeric", month: "long", day: "numeric" };
  return date.toLocaleDateString("en-US", options);
}

const SingleBlog = ({ blog }:any) => {
  return (
    <main className="pt-24 pb-16 bg-[#0a0c10]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <article className="card">
          <div className="mb-6">
            <h1 className="text-3xl font-bold mb-4 gradient-text">
              {blog?.title}
            </h1>
            <div className="flex items-center justify-between text-gray-400">
              <span>By {blog?.writtenby}</span>
              <span>{formatDate(blog?._createdAt)}</span>
            </div>
          </div>

          <div className="prose prose-invert max-w-none">
            <PortableText value={blog?.content}/>
          </div>
        </article>

        <CommentSection id={blog?._id}/>
      </div>
    </main>
  );
};

export default SingleBlog;
