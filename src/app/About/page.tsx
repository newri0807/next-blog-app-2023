import React from "react";
import Profile from "../Components/Profile";

const page = () => {
  return (
    <div>
      <Profile />{" "}
      <section className="my-4 drop-shadow-lg bg-[#f3f3f5] text-center py-4">
        <h1 className="text-2xl font-bold my-2 w-full">Who am I?</h1>
        <p className="my-1  w-full">개발을 사랑하고픈(?) 프론트엔드 개발자</p>
        <p className="my-1  w-full">
          풀스텍 개발자를 목표로 하고 있는 주니어 말하는 감자
        </p>
        <br />
        <h1 className="text-2xl font-bold my-2 w-full">Career</h1>
        <p className="my-1  w-full">(주)카이토리 (~Now)</p>
        <p className="my-1  w-full">(주)블루아이(2020~2022)</p>
        <br />
        <h1 className="text-2xl font-bold my-2 w-full">Skills </h1>
        <p className="my-1  w-full">React, JavaScript, ASP.NET</p>
        <p className="my-1  w-full">Git, Productive Code</p>
        <p className="my-1  w-full">VS Code, Firebase, MS SQL</p>
      </section>
    </div>
  );
};

export default page;
