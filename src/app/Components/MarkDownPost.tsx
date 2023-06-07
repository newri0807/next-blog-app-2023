"use client";
import React from "react";
import ReactMarkdown from "react-markdown";
import SyntaxHighlighter from "react-syntax-highlighter/dist/esm/default-highlight";
import { materialDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import remarkGfm from "remark-gfm";
import { Post, PostDetailData } from "../service/post";
import { BiCalendarAlt } from "react-icons/bi";

type postType = {
  post: PostDetailData;
};

const MarkDownPost = ({ post }: postType) => {
  const headingRenderer = (props: any) => {
    const level = props.level;
    const size = 24 - level * 2; // Calculate the font size based on heading level

    return React.createElement(
      `h${level}`,
      { style: { fontSize: `${size}px`, fontWeight: "bold" } },
      props.children
    );
  };
  return (
    <div>
      <div className="postInfoTop py-3 flex justify-between">
        <div className="">
          <h1 className="text-3xl font-extrabold">{post.title}</h1>
          <h4>{post.description}</h4>
          <hr className="border-b-4 border-indigo-500 my-5" />
        </div>
        <p className="blue flex gap-2 text-indigo-600">
          <BiCalendarAlt className="mt-[.25em] " />
          {post.date.toString()}
        </p>
      </div>

      <ReactMarkdown
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
              <code {...props}>{children}</code>
            );
          },
          h1: headingRenderer, // Customize rendering for h1 heading
          h2: headingRenderer, // Customize rendering for h2 heading
          h3: headingRenderer, // Customize rendering for h3 heading
        }}
      >
        {post.content}
      </ReactMarkdown>
    </div>
  );
};

export default MarkDownPost;
