/* eslint-disable react/jsx-key */
/* eslint-disable @next/next/no-img-element */
"use client";
import Link from "next/link";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Post } from "../service/post";
import PostCard from "../Components/PostCard";

type SliderProps = {
  notFeaturedPosts: Post[];
};

const Slider: React.FC<SliderProps> = ({ notFeaturedPosts }) => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
    },
  };
  return (
    <Carousel infinite autoPlay responsive={responsive} itemClass="m-2">
      {notFeaturedPosts &&
        notFeaturedPosts.map((item, index) => (
          <Link href={`/Posts/${item.path}`}>
            <PostCard item={item} key={index} />
          </Link>
        ))}
    </Carousel>
  );
};

export default Slider;
