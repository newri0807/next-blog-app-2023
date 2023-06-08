"use client";
import React from "react";
import ReactMarkdown from "react-markdown";
import SyntaxHighlighter from "react-syntax-highlighter/dist/esm/default-highlight";
import { materialDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import { Post, PostDetailData } from "../service/post";
import { BiCalendarAlt } from "react-icons/bi";
import RandomItems from "./RandomItems";
import Image from "next/image";

type postType = {
  post: PostDetailData;
  allPostsData: Post[];
};

const MarkDownPost = ({ post, allPostsData }: postType) => {
  const headingRenderer = (props: any) => {
    const level = props.level;
    const size = 24 - level * 2; // Calculate the font size based on heading level

    return React.createElement(
      `h${level}`,
      {
        style: { fontSize: `${size}px`, fontWeight: "bold", margin: "10px 0" },
      },
      props.children
    );
  };

  // 현재 상세 페이지에 해당하는 데이터 제외
  const filteredData = allPostsData.filter((item) => item.path !== post.path);

  return (
    <div>
      <div className="postInfoTop py-3 flex justify-between px-4 mt-2">
        <div className="">
          <h1 className="text-3xl font-extrabold">{post.title}</h1>
          <h4>{post.description}</h4>
          <hr className="border-b-4 border-indigo-500 my-5" />
        </div>
        <p className="blue flex gap-2 text-indigo-600 font-bold">
          <BiCalendarAlt className="mt-[.25em] " />
          {post.date.toString()}
        </p>
      </div>

      <ReactMarkdown
        className="px-4 mb-10 markdown"
        rehypePlugins={[rehypeRaw]}
        remarkPlugins={[remarkGfm]}
        components={{
          code({ node, inline, className, children, ...props }) {
            const match = /language-(\w+)/.exec(className || "");
            return !inline && match ? (
              <SyntaxHighlighter
                language={match[1]}
                PreTag="div"
                {...props}
                style={materialDark}
              >
                {String(children).replace(/\n$/, "")}
              </SyntaxHighlighter>
            ) : (
              <code {...props} className={className}>
                {children}
              </code>
            );
          },
          h1: headingRenderer, // Customize rendering for h1 heading
          h2: headingRenderer, // Customize rendering for h2 heading
          h3: headingRenderer, // Customize rendering for h3 heading
          h4: headingRenderer, // Customize rendering for h4 heading
          h5: headingRenderer, // Customize rendering for h5 heading
          img: (image) => (
            <Image
              className="w-full max-h-60 object-cover"
              src={image.src || ""}
              alt={image.alt || ""}
              width={500}
              height={350}
            />
          ),
        }}
      >
        {post.content
          .replace(/\n\s\n\s/gi, "\n\n&nbsp;\n\n")
          .replace(/\*\*/gi, "@$_%!^")
          .replace(/\**\*/gi, "/")
          .replace(/@\$_%!\^/gi, "**")
          .replace(/<\/?u>/gi, "*")}
      </ReactMarkdown>

      {/* 랜덤으로 선택된 UI 컴포넌트 */}
      <RandomItems filteredData={filteredData} />
    </div>
  );
};

export default MarkDownPost;
