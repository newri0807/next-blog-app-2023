/* eslint-disable react/no-children-prop */
/* eslint-disable @next/next/no-img-element */
import MarkDownPost from "@/app/Components/MarkDownPost";
import { getPostDetail } from "@/app/service/post";
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
  console.log(post);
  // eslint-disable-next-line react/no-children-prop
  return (
    <div className="rounded-md overflow-hidden shadow-md hover:shadow-xl">
      <img
        className="w-full max-h-[300px]"
        src={`/images/posts/${params.slug}.png`}
        alt={`${params.slug} pic`}
      />
      <div className="flex flex-col posts-center p-4">
        <MarkDownPost post={post} />
      </div>
    </div>
  );
};

export default page;
