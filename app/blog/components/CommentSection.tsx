'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Button from '@/app/components/ui/Button';
import { client } from '@/sanity/lib/client';
// import {createClient} from '@sanity/client'

interface Comment {
  id: string;
  author: string;
  content: string;
  date: string;
}

export default function CommentSection({id}:any) {
  const [comments, setComments] = useState<Comment[]>([]);
  const [newComment, setNewComment] = useState({ author: '', content: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (newComment.author.trim() && newComment.content.trim()) {
      const comment: Comment = {
        id: Date.now().toString(),
        ...newComment,
        date: new Date().toLocaleDateString()
      };
      setComments([comment, ...comments]);
      setNewComment({ author: '', content: '' });
    }
    try {
      const res = await client.create({
        _type: 'comment', 
        blog: {   // use schema name 
          _type : "reference",
          _ref: id,
        },
        author: newComment?.author || "",
        content: newComment?.content || "",
      });
      
    } catch (err) {
      console.error(err)
    }
  };

  useEffect(()=>{
    (async()=>{
      const comments = await client.fetch(`*[ _type == "comment"]`);
      const filterComment = comments?.filter((item:any)=>item?.blog?._ref === id)
      setComments(filterComment)
    })()
  },[comments])


  function formatTimestampToDate(timestamp:any) {
    const date = new Date(timestamp);
    const month = date.getMonth() + 1; // getMonth() returns 0-based month
    const day = date.getDate();
    const year = date.getFullYear();
  
    return `${month}/${day}/${year}`;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="mt-12"
    >
      <h2 className="text-2xl font-bold mb-6 gradient-text">Comments</h2>

      {/* Comment Form */}
      <form onSubmit={handleSubmit} className="card mb-8">
        <div className="mb-4">
          <label htmlFor="author" className="block text-sm font-medium text-gray-300 mb-2">
            Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="author"
            value={newComment.author}
            onChange={(e) => setNewComment({ ...newComment, author: e.target.value })}
            required
            className="w-full rounded-lg bg-gray-800/50 border border-gray-700 text-gray-300 px-4 py-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="content" className="block text-sm font-medium text-gray-300 mb-2">
            Comment <span className="text-red-500">*</span>
          </label>
          <textarea
            id="content"
            value={newComment.content}
            onChange={(e) => setNewComment({ ...newComment, content: e.target.value })}
            required
            rows={4}
            className="w-full rounded-lg bg-gray-800/50 border border-gray-700 text-gray-300 px-4 py-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <Button>Post Comment</Button>
      </form>

      {/* Comments List */}
      <div className="space-y-6">
        {comments.length === 0 ? (
          <p className="text-gray-400 text-center">No comments yet. Be the first to comment!</p>
        ) : (
          comments.map((comment, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="card"
            >
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-semibold text-blue-500">{comment.author}</h3>
                <span className="text-sm text-gray-400">{formatTimestampToDate("2025-01-04T19:43:59Z")}</span>
              </div>
              <p className="text-gray-300">{comment.content}</p>
            </motion.div>
          ))
        )}
      </div>
    </motion.div>
  );
}