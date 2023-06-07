import Link from "next/link";
import React from "react";

function TopNavi() {
  return (
    <div className="flex justify-between p-4 items-center fixed top-0 left-0 z-50 bg-white w-full">
      <h1 className="font-bold text-2xl ">
        <Link href={"/"}>My Blog</Link>
      </h1>
      <ul className="flex gap-3">
        <li>
          <Link href={"/"}>Home</Link>
        </li>
        <li>
          <Link href={"/About"}>About</Link>
        </li>
        <li>
          <Link href={"/Posts"}>Posts</Link>
        </li>
        <li>
          <Link href={"/Contact"}>Contact</Link>
        </li>
      </ul>
    </div>
  );
}

export default TopNavi;
