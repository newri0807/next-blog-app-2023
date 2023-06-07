"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import PostCard from "./PostCard";

const FilteredPosts = ({ posts, Categories }: any) => {
  const [data, setData] = useState([]);
  const [tabMenu, setTabMenu] = useState(["All Posts", ...Categories]);
  const [selectedCategory, setSelectedCategory] = useState(tabMenu[0]);

  useEffect(() => {
    if (selectedCategory === "All Posts") {
      setData(posts);
    } else {
      const filteredData = posts.filter(
        (item: any) => item.category === selectedCategory
      );
      setData(filteredData);
    }
  }, [selectedCategory]);

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
  };

  return (
    <div className="flex justify-between">
      <div className="w-[90%]">
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-1 sm:gap-4 md:gap-6 px-3">
          {data.map((item: any, index: number) => (
            <li
              key={index}
              className="col-span-1 sm:col-span-1 md:col-span-1 lg:col-span-1"
            >
              <Link href={`/Posts/${item.path}`}>
                <PostCard item={item} key={index} />
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="w-[10%] px-10">
        <ul className="flex flex-col justify-center text-center">
          <h1>Category</h1>
          <hr className="border-b-4 border-indigo-500 my-2" />
          {tabMenu.map((post: string) => (
            <li
              key={post}
              className={`my-1 cursor-pointer hover:text-indigo-500 hover:font-bold ${
                selectedCategory === post ? "font-bold text-indigo-500" : ""
              }`}
              onClick={() => handleCategoryClick(post)}
            >
              {post}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FilteredPosts;
