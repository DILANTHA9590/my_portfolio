import React from "react";
import { MdOutlineFileDownload } from "react-icons/md";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="flex flex-col justify-center h-full min-h-full px-4 text-white font-inter sm:px-6 lg:px-8">
      <div className="flex flex-col w-full gap-6 mx-auto sm:flex-row max-w-7xl sm:gap-8">
        {/* Text Section */}
        <div className="sm:w-[55%] flex flex-col justify-center items-start gap-y-5 sm:gap-y-8">
          <div className="text-2xl font-bold leading-tight sm:text-main_title">
            <h1>HI, I'M DILANTHA NAYANAJITH!</h1>
            <h1>A STUDENT AND FULL STACK DEVELOPER</h1>
          </div>

          <div className="text-sm sm:text-description md:max-w-lg">
            <h3>
              I’m a passionate student and full-stack developer focused on
              building modern, user-friendly web applications. I enjoy turning
              ideas into responsive, elegant digital experiences that feel great
              to use.
            </h3>
          </div>

          <div className="w-full max-w-xs sm:max-w-sm">
            <Link
              to="/cv"
              className="flex items-center justify-center w-full h-12 p-4 font-semibold text-white transition rounded-lg gap-x-3 bg-accent hover:bg-purple-700"
            >
              <span>DOWNLOAD CV</span>
              <MdOutlineFileDownload className="text-xl" />
            </Link>
          </div>
        </div>

        {/* Image Section */}
        <div className="sm:w-[45%] flex justify-center items-center h-[40vh] sm:h-auto">
          <div className="relative w-full max-w-[300px] sm:max-w-[400px] md:max-w-[500px] aspect-square rounded-full bg-[#761E1E] overflow-hidden">
            {/* Uncomment and adjust image paths as needed */}
            {/* <img
              src="/home_icons/testuser.png"
              alt="user_logo"
              className="absolute w-20 -left-10 sm:w-24"
            />
            <img
              src="/home_icons/framer.png"
              alt="framer_logo"
              className="absolute w-16 left-9 top-24 sm:w-20 md:w-24"
            /> */}
          </div>
        </div>
      </div>
    </div>
  );
}
