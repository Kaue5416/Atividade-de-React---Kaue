
import React from "react";
import postitem from "../components/postitens";
import { posts } from "../data/posts";

export default function Home() {
  return (
    <main className="bg-gray-100 min-h-screen py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Feed do Instagram</h1>

      <div className="max-w-md mx-auto">
        {posts.map((post) => (
          <PostItem key={post.id} post={post} />
        ))}
      </div>
    </main>
  );
}



