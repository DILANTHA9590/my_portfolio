import React from "react";
import { MdOutlineFileDownload } from "react-icons/md";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <div className="flex flex-col justify-center h-full text-white font-inter sm:flex-row">
        <div className="sm:w-[55%] flex flex-col justify-center items-start  sm:gap-y-9 gap-y-5 h-[60%] sm:h-auto">
          <div className="font-bold text-main_title">
            <h1 className="bg-pr">HI , I, M DILANTHA NAYANAJITH!</h1>
            <h1>A STUDENT AND FULL STACK DEVELOPER</h1>
          </div>

          <div>
            <h3 className="text-description">
              I’m a passionate student and full-stack developer focused on
              building modern, user-friendly web applications. I enjoy turning
              ideas into responsive, elegant digital experiences that feel great
              to use.
            </h3>
          </div>
          <div className="flex items-center justify-center h-12 max-w-3xl p-4 bg-accent">
            <Link className="flex items-center justify-center gap-x-3">
              <h1>DOWNLOAD CV </h1>
              <MdOutlineFileDownload className="" />
            </Link>
          </div>
        </div>

        <div className="sm:w-[45%] flex justify-center items-center h-[40%] sm:h-auto">
          <div className="h-full w-[500px] rounded-full bg-[#761E1E]  relative">
            {/* <img
              src="/home_icons/testuser.png"
              alt="user_logo"
              className="absolute -left-10"
            />

            <img
              src="/home_icons/framer.png"
              alt=""
              className=" w-[110px] h-[100px] top-25 absolute left-9"
            /> */}
          </div>
        </div>
      </div>
    </>
  );
}
