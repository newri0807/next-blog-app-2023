import Link from "next/link";
import React from "react";
import { BsGithub } from "react-icons/bs";
import { FaTwitterSquare, FaInstagramSquare } from "react-icons/fa";
import EmailSendForm from "../Components/EmailSendForm";

const page = () => {
  return (
    <div>
      <div className="mb-10 w-full">
        <h1 className="font-extrabold text-2xl mb-3 text-center">Contact Me</h1>
        <ul className="flex justify-center gap-3">
          <li>
            <Link href={"https://github.com/newri0807"} target="_blank">
              <BsGithub className="text-5xl hover:text-zinc-500" />
            </Link>
          </li>
          <li>
            <Link href={"https://twitter.com/Irwen215"} target="_blank">
              <FaTwitterSquare className="text-5xl hover:text-zinc-500" />
            </Link>
          </li>
          <li>
            <Link href={"https://www.instagram.com/_nm.87/"} target="_blank">
              <FaInstagramSquare className="text-5xl hover:text-zinc-500" />
            </Link>
          </li>
        </ul>
      </div>

      <div className="w-full emailSendContainer">
        <h1 className="font-extrabold text-3xl mb-3 text-center">
          Or send me an email
        </h1>
        <EmailSendForm />
      </div>
    </div>
  );
};

export default page;
