"use client";

import { useState } from "react";
import {
  FaHeart,
  FaRegHeart,
  FaRegComment,
  FaRegPaperPlane,
} from "react-icons/fa";

type Post = {
  id: number;
  username: string;
  avatarUrl: string;
  imageUrl: string;
  numberOfLikes: number;
  description: string;
};

export default function PostItem({ post }: { post: Post }) {
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(() => post.numberOfLikes); // inicializa corretamente

  const toggleLike = () => {
    if (liked) {
      setLikes((prev) => prev - 1);
    } else {
      setLikes((prev) => prev + 1);
    }
    setLiked((prev) => !prev);
  };

  return (
    <div className="bg-white max-w-md mx-auto rounded-md shadow-md mb-8 border">
      <div className="flex items-center justify-between p-4">
        <div className="flex items-center">
          <img
            src={post.avatarUrl}
            alt={`${post.username} avatar`}
            className="w-10 h-10 rounded-full mr-3"
          />
          <span className="font-semibold">{post.username}</span>
        </div>
        <button className="text-blue-500 font-semibold text-sm">SEGUIR</button>
      </div>

      <img src={post.imageUrl} alt="Post" className="w-full" />

      <div className="flex items-center px-4 py-2 space-x-4">
        <button
          onClick={toggleLike}
          aria-label="Curtir"
          aria-pressed={liked}
          className="transition-transform duration-200 hover:scale-110"
        >
          {liked ? <FaHeart color="#ef4444" /> : <FaRegHeart />}
        </button>
        <FaRegComment />
        <FaRegPaperPlane />
      </div>

      <div className="px-4">
        <p className="font-semibold">{likes} curtiram</p>
      </div>

      <div className="px-4 pb-4">
        <p>
          <span className="font-semibold">{post.username}</span>{" "}
          {post.description}
        </p>
      </div>
    </div>
  );
}

