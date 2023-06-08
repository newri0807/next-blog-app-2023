/* eslint-disable react/no-children-prop */
/* eslint-disable @next/next/no-img-element */
import MarkDownPost from "@/app/Components/MarkDownPost";
import { getAllPosts, getPostDetail } from "@/app/service/post";
import React from "react";

type Props = {
  params: {
    slug: string; // slug는 폴더명;
  };
};

export async function generateMetadata({ params }: Props) {
  return {
    title: `Post Title: ${params.slug}`,
  };
}

const page = async ({ params }: Props) => {
  const post = await getPostDetail(params.slug);
  const allPostsData = await getAllPosts();

  return (
    <div className="rounded-md overflow-hidden shadow-md hover:shadow-xl ">
      <div
        className="w-full h-[300px] rounded-t-lg bg-cover bg-center"
        style={{ backgroundImage: `url('/images/posts/${params.slug}.png')` }}
      ></div>
      <div className="flex flex-col posts-center">
        <MarkDownPost post={post} allPostsData={allPostsData} />
      </div>
    </div>
  );
};

export default page;
