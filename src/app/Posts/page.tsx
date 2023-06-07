import React, { useState, useEffect } from "react";
import { getAllPosts } from "../service/post";
import FilteredPosts from "../Components/FilteredPosts";

const Page = async () => {
  const allPostsData = await getAllPosts();
  const featuredPosts = allPostsData.filter((post) => post.category);
  const uniqueCategories = Array.from(
    new Set(featuredPosts.map((post) => post.category))
  );

  return (
    <div className="flex justify-between">
      <FilteredPosts posts={allPostsData} Categories={uniqueCategories} />
    </div>
  );
};

export default Page;
