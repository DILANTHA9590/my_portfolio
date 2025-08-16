import React from "react";
import { MdOutlineFileDownload } from "react-icons/md";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useContext } from "react";
import { DarkContext } from "../../utillls/context";

export default function Home() {
  const { dark } = useContext(DarkContext);

  console.log("hello", dark);
  return (
    <div
      className={`flex flex-col justify-center h-full min-h-full px-4  font-inter sm:px-6 lg:px-8  mt-[15vh] ${
        dark != "false" ? "  text-textwhite" : " text-textblack"
      }`}
    >
      <div className="flex flex-col w-full gap-6 mx-auto sm:flex-row max-w-7xl sm:gap-8">
        {/* Text Section */}
        <div className="sm:w-[55%] flex flex-col justify-center items-start gap-y-5 sm:gap-y-8">
          <div className="text-xl font-bold leading-tight sm:text-main_title">
            <h1>HI, I'M DILANTHA NAYANAJITH!</h1>
            <h1>A STUDENT AND FULL STACK DEVELOPER</h1>
          </div>

          <div className="text-sm sm:text-description md:max-w-lg ">
            <h3>
              I’m a passionate student and full-stack developer focused on
              building modern, user-friendly web applications. I enjoy turning
              ideas into responsive, elegant digital experiences that feel great
              to use.
            </h3>
          </div>

          <div className="w-full max-w-xs sm:max-w-sm">
            <a
              href="/Dilantha_Nayanajith_Resume.pdf"
              download
              className="flex items-center justify-center h-12 p-4 font-semibold text-white transition rounded-lg w-50 gap-x-3 bg-accent hover:bg-purple-700"
            >
              <button>Download CV</button>
              <MdOutlineFileDownload className="text-xl" />
            </a>
          </div>
        </div>

        {/* Image Section */}
        <div className="sm:w-[45%] flex justify-center items-center h-[40vh] sm:h-auto mt-2">
          <div className="relative w-full  sm:max-w-[400px] md:max-w-[500px] aspect-square rounded-full bg-[#761E1E] justify-center items-center mt-64 sm:mt-0 ">
            <motion.img
              src="/propic.png"
              alt="user_logo"
              className=""
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            />
            <motion.img
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 2 }}
              src="/home_icons/framer.png"
              alt="framer_logo"
              className="absolute w-16 left-9 top-24 sm:w-20 md:w-24 animate-pulse"
            />

            <motion.img
              initial={{ x: -100, scale: 0.8, opacity: 0 }}
              animate={{ x: 0, scale: 1, opacity: 3 }}
              transition={{ duration: 2 }}
              src="/home_icons/react.png"
              alt="framer_logo"
              className="absolute top-0 right-0 hidden w-10 left-90 sm:w-20 md:w-24 sm:block animate-pulse"
            />
            <motion.img
              initial={{ x: -100, scale: 0.8, opacity: 0 }}
              animate={{ x: 0, scale: 1, opacity: 3 }}
              transition={{ duration: 2 }}
              src="/home_icons/react.png"
              alt="framer_logo"
              className="absolute w-10 right-10 top-5 sm:w-20 md:w-24 sm:hidden animate-pulse"
            />
            <motion.img
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 2 }}
              src="/home_icons/github.png"
              alt="framer_logo"
              className="absolute w-10 right-16 top-18 sm:w-20 md:w-24 sm:hidden animate-pulse"
            />

            <motion.img
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 2 }}
              src="/home_icons/nextjs.png"
              alt="framer_logo"
              className="absolute w-13 right-5 top-45 sm:w-20 md:w-25 sm:hidden animate-pulse"
            />

            <motion.img
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 2 }}
              src="/home_icons/nodejs.png"
              alt="framer_logo"
              className="absolute right-0 w-13 top-61 sm:w-20 md:w-25 sm:hidden animate-pulse"
            />
            <motion.img
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 2 }}
              src="/home_icons/mongo.png"
              alt="framer_logo"
              className="absolute w-10 -right-2 top-35 sm:w-20 md:w-25 sm:hidden animate-pulse"
            />

            <motion.img
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 2 }}
              src="/home_icons/tailwind.png"
              alt="framer_logo"
              className="absolute -right-2 w-15 top-18 sm:w-20 md:w-24 sm:hidden animate-pulse"
            />

            <motion.img
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 2 }}
              src="/home_icons/tailwind.png"
              alt="framer_logo"
              className="absolute -right-2 w-15 top-18 sm:w-20 md:w-24 sm:hidden animate-pulse"
            />

            <motion.img
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 2 }}
              src="/home_icons/github.png"
              alt="framer_logo"
              className="absolute hidden w-10 top-30 right-9 left-80 sm:w-20 md:w-24 sm:block animate-pulse"
            />

            <motion.img
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 2 }}
              src="/home_icons/nextjs.png"
              alt="framer_logo"
              className="absolute hidden top-70 right-12 sm:w-20 md:w-15 sm:block animate-pulse "
            />

            <img
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 2 }}
              src="/home_icons/nextjs.png"
              alt="framer_logo"
              className="absolute hidden top-70 right-12 sm:w-20 md:w-15 sm:block animate animate-pulse "
            />

            <motion.img
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 2 }}
              src="/home_icons/nodejs.png"
              alt="framer_logo"
              className="absolute hidden top-90 -right-0 sm:w-20 w-15 sm:block animate-pulse"
            />
            <motion.img
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 2 }}
              src="/home_icons/mongo.png"
              alt="framer_logo"
              className="absolute right-0 hidden w-20 top-60 md:w-15 sm:block animate-pulse"
            />
            <motion.img
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 2 }}
              src="/home_icons/tailwind.png"
              alt="framer_logo"
              className="absolute hidden -right-10 top-30 sm:w-20 md:w-24 sm:block animate-pulse"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
