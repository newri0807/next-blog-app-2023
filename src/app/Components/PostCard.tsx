/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import { Post } from "../service/post";

interface PostCardProps {
  item: Post;
}

const PostCard = ({ item }: PostCardProps) => {
  return (
    <div className="my-2">
      <div className="rounded-md overflow-hidden shadow-md hover:shadow-xl">
        <img
          className="w-full"
          src={`/images/posts/${item.path}.png`}
          alt={`${item.title} pic`}
          width={300}
          height={200}
        />
        <div className="flex flex-col posts-center p-4">
          <time className="self-end text-gray-700">{item.date.toString()}</time>
          <h3 className="text-lg font-bold">{item.title}</h3>
          <p className="w-full truncate text-center">{item.description}</p>
          <span className="text-sm rounded-lg bg-green-100 px-2 my-2 w-[100px] m-auto text-center">
            {item.category}
          </span>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
