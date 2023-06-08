/* eslint-disable @next/next/no-img-element */
"use client";
import Link from "next/link";
import React from "react";

const Profile = () => {
  return (
    <div className="topIntro w-full">
      <img
        className="w-150 h-150 rounded-full my-2 mx-auto"
        src="https://source.unsplash.com/user/c_v_r/150x150"
        alt="프사"
      ></img>
      <h1 className="text-xl font-bold text-center">{`Hi, I'm Newl.`}</h1>
      <h4 className="text-lg font-bold text-center">Front-end engineer</h4>
      <h4 className="text-lg  text-center">시행착오 많은 주니어 🥔 뉼</h4>
      <div className="flex justify-center">
        <button
          type="button"
          className="my-2 text-white bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:focus:ring-yellow-900"
        >
          <Link href={"/Contact"}> Contact Me</Link>
        </button>
      </div>
    </div>
  );
};

export default Profile;
