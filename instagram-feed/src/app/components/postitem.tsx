// src/app/components/PostItem.tsx
import React from 'react';
import Image from 'next/image';

interface Post {
  username: string;
  avatarUrl: string;
  imageUrl: string;
  numberOfLikes: number;
  description: string;
}

const PostItem = ({ username, avatarUrl, imageUrl, numberOfLikes, description }: Post) => {
  return (
    <div className="bg-white rounded-lg shadow-md mb-6">
      {/* Header */}
      <div className="flex items-center p-4">
        <Image
          src={avatarUrl}
          alt={username}
          width={40}
          height={40}
          className="w-10 h-10 rounded-full mr-3"
        />
        <span className="font-semibold">{username}</span>
      </div>
      {/* Image */}
      <Image src={imageUrl} alt="Post" width={600} height={600} className="w-full" />

      {/* Footer */}
      <div className="p-4">
        <p className="font-semibold">{numberOfLikes} curtidas</p>
        <p>
          <span className="font-semibold">{username}</span> {description}
        </p>
      </div>
    </div>
  );
};

export default PostItem;
