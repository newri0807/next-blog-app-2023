"use client";
import React, { useEffect, useState } from "react";
import { Post } from "../service/post";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Link from "next/link";

type PostType = {
  filteredData: Post[];
};

function RandomItems({ filteredData }: PostType) {
  const [randomItems, setRandomItems] = useState<Post[]>([]);

  useEffect(() => {
    // 랜덤으로 두 개의 데이터 선택
    const randomIndexes: number[] = [];
    while (randomIndexes.length < 2) {
      const randomIndex = Math.floor(Math.random() * filteredData.length);
      if (!randomIndexes.includes(randomIndex)) {
        randomIndexes.push(randomIndex);
      }
    }

    // 선택된 데이터 설정
    const selectedItems = randomIndexes.map((index) => filteredData[index]);
    setRandomItems(selectedItems);
  }, [filteredData]);

  return (
    <div>
      {randomItems.length > 0 && (
        <div className="w-full h-[150px]  flex justify-between bottomRandomContianer">
          <div
            key={1}
            className="w-[50%] h-[150px] bg-cover bg-center relative item_bg"
            style={{
              backgroundImage: `url('/images/posts/${randomItems[0].path}.png')`,
            }}
          >
            <div className="absolute z-10 text-center text-white flex items-center w-full h-full">
              <div className="left w-[20%] flex justify-center">
                <Link href={`/Posts/${randomItems[0].path}`}>
                  <FaArrowLeft className="text-5xl text-yellow-300 wobble-horizontal" />
                </Link>
              </div>
              <div className="right  w-[80%]">
                <h2 className="font-extrabold text-xl flex justify-center">
                  {randomItems[0].title}
                </h2>
                <p>{randomItems[0].description}</p>
              </div>
            </div>
          </div>
          <div
            key={2}
            className="w-[50%] h-[150px]  bg-cover bg-center relative item_bg"
            style={{
              backgroundImage: `url('/images/posts/${randomItems[1].path}.png')`,
            }}
          >
            <div className="absolute z-10 text-center text-white flex items-center w-full h-full">
              <div className="left w-[80%]">
                <h2 className="font-extrabold text-xl flex justify-center">
                  {randomItems[1].title}
                </h2>
                <p>{randomItems[1].description}</p>
              </div>
              <div className="right w-[20%] flex justify-center ">
                <Link href={`/Posts/${randomItems[1].path}`}>
                  <FaArrowRight className="text-5xl  text-yellow-300 cursor-pointer wobble-horizontal" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default RandomItems;
