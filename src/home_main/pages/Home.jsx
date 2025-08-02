import React from "react";
import { MdOutlineFileDownload } from "react-icons/md";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <div className="flex justify-center h-full text-white">
        <div className="w-[55%] flex flex-col justify-center items-start  gap-y-9">
          <div className="text-3xl font-bold">
            <h1>HI , I, M DILANTHA NAYANAJITH!</h1>
            <h1>A STUDENT AND FULL STACK DEVELOPER</h1>
          </div>

          <div>
            <h3 className="">
              I’m a passionate student and full-stack developer focused on
              building modern, user-friendly web applications. I enjoy turning
              ideas into responsive, elegant digital experiences that feel great
              to use.
            </h3>
          </div>
          <div className="bg-[#8B5CFF] max-w-3xl h-12 flex justify-center items-center p-4">
            <Link className="flex items-center justify-center gap-x-3">
              <h1>DOWNLOAD CV </h1>
              <MdOutlineFileDownload className="" />
            </Link>
          </div>
        </div>

        <div className="w-[45%] bg-amber-500 flex justify-center items-center">
          <div className="h-[465px] w-[500px] rounded-full bg-[#761E1E]"></div>
        </div>
      </div>
    </>
  );
}
