import React, { useContext, useEffect, useState } from "react";
import { Link, Route, Routes } from "react-router-dom";

import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import { AnimatePresence, motion } from "framer-motion";
import { DarkContext } from "../utillls/context";
import { MdOutlineDarkMode } from "react-icons/md";
import { CiLight } from "react-icons/ci";
import ProjectMain from "./pages/ProjectMain";
import NavBar from "./components/homelayout/NavBar";
import Experience from "./pages/Experience";
import { init } from "emailjs-com";

export default function HomeLayout() {
  // track active nav link
  const [line, setLine] = React.useState("HOME");
  // handle mobile menu show/hide
  const [show, setShowMenu] = React.useState(false);
  // show contact overlay on right side
  const [showContact, setShowContact] = useState(false);
  // dark mode state from context
  const { dark, setDark } = useContext(DarkContext);
  // set flag for controll overlay animation  z index
  const [flag, setFlag] = useState(true); // 1️⃣ initial state true

  // navigation links for top menu
  const navLinks = [
    { name: "HOME", path: "/" },
    { name: "ABOUT", path: "/about" },
    { name: "SERVICES", path: "/services" },
    { name: "PROJECTS", path: "/projects" },
    { name: "CONTACT", path: "/contact" },
    { name: "EXPERIENCE", path: "/experience" },
  ];

  // store dark mode value in local storage
  const handleDarkMode = (value) => {
    localStorage.setItem("darkmode", value);
  };

  // read dark mode value from local storage and set context
  function checkDarkMode() {
    const darkMode = localStorage.getItem("darkmode");
    if (darkMode !== "false") {
      setDark(darkMode);
    } else {
      setDark(darkMode);
    }
  }
  // put use effect for handle  overlay animation z iondex
  useEffect(() => {
    if (flag) {
      const timer = setTimeout(() => {
        setFlag(false);
      }, 2100);

      return () => clearTimeout(timer);
    }
  }, [flag]);

  return (
    <>
      {/* main layout wrapper */}
      <div
        className={`h-[100vh] overflow-hidden overflow-y-auto relative ${
          dark != "false" ? "bg-primary" : "bg-primary_white"
        } font-inter`}
      >
        <motion.div
          className={`absolute inset-0  flex h-full ${flag ? "z-50" : "z-0"}`}
        >
          <motion.div
            className="w-1/4 bg-accent "
            initial={{
              height: "100%",
            }}
            animate={{
              height: "0%",
            }}
            transition={{
              duration: 0.5,
            }}
          ></motion.div>
          <motion.div
            className="w-1/4 h-full bg-amber-500"
            initial={{
              height: "100%",
            }}
            animate={{
              height: "0%",
            }}
            transition={{
              duration: 1,
            }}
          ></motion.div>
          <motion.div
            className="w-1/4 h-full bg-amber-950"
            initial={{
              height: "100%",
            }}
            animate={{
              height: "0%",
            }}
            transition={{
              duration: 1.5,
            }}
          ></motion.div>
          <motion.div
            className="w-1/4 h-full bg-amber-100"
            initial={{
              height: "100%",
            }}
            animate={{
              height: "0%",
            }}
            transition={{
              duration: 2,
            }}
          ></motion.div>
        </motion.div>
        {/* fixed contact icons (left side bottom) */}
        <div className="fixed bottom-0 hidden text-white sm:block">
          <Link to="contact">
            <motion.img
              initial={{ x: -100 }}
              animate={{ x: 0 }}
              transition={{ duration: 0.5 }}
              src="/contact_image/gmail.png"
              className="w-13"
              alt=""
            />
          </Link>
          <Link to="https://github.com/DILANTHA9590" target="#">
            <motion.img
              initial={{ x: -100 }}
              animate={{ x: 0 }}
              transition={{ duration: 1 }}
              src="/contact_image/github.png"
              className="w-13"
              alt="github_icon"
            />
          </Link>
          <Link
            to="https://www.linkedin.com/in/dilantha-nayanajith-9a1545297/"
            target="#"
          >
            <motion.img
              initial={{ x: -100 }}
              animate={{ x: 0 }}
              transition={{ duration: 1.5 }}
              src="/contact_image/linkind.png"
              className="w-14"
              alt="linkIn icon"
            />
          </Link>
        </div>

        {/* main container */}
        <div className="sm:w-[80%] mx-auto relative">
          <div className="relative flex flex-col ">
            {/* fixed navbar */}
            <div className="fixed sm:w-[80%] w-[100%] z-60 top-0">
              <div
                className={`sm:h-[15vh] flex justify-between items-center relative ${
                  dark != "false"
                    ? "bg-secondary  text-white"
                    : "bg-secondary_white "
                }`}
              >
                {/* logo / name */}
                <div>
                  <Link className="text-xl font-bold sm:text-main_title" to="/">
                    DILANTHA
                  </Link>
                </div>

                {/* desktop menu links */}
                <div className="hidden sm:block">
                  <div className="flex gap-5 font-bold text-description ">
                    {navLinks.map((link) => (
                      <Link
                        key={link.name}
                        onClick={() => {
                          setLine(link.name);
                        }}
                        to={link.path}
                        className={`transition-colors hover:text-accent ${
                          line === link.name && "text-accent"
                        }`}
                      >
                        {link.name}
                      </Link>
                    ))}
                  </div>
                </div>

                {/* dark mode toggle + hamburger menu */}
                <div className="flex items-center justify-center h-full">
                  <div>
                    {dark != "false" ? (
                      <motion.div
                        initial={{ rotate: 0 }}
                        animate={{ rotate: 180 }}
                        onClick={() => {
                          handleDarkMode(false);
                          checkDarkMode();
                        }}
                      >
                        <CiLight className="h-20 w-15" />
                      </motion.div>
                    ) : (
                      <MdOutlineDarkMode
                        className="h-20 text-yellow-400 w-15"
                        onClick={() => {
                          handleDarkMode(true);
                          checkDarkMode();
                        }}
                      />
                    )}
                  </div>

                  {/* hamburger button */}
                  <div className="h-full p-4">
                    <div
                      className="flex flex-col items-center justify-center p-3 px-5 rounded-md cursor-pointer h-18 w-18 sm:h-full sm:w-27 bg-accent"
                      onClick={() => {
                        setShowMenu(!show), setShowContact(!showContact);
                      }}
                    >
                      {show ? (
                        // X icon (close menu)
                        <div className="relative w-6 h-6">
                          <div className="absolute top-1/2 left-0 w-full bg-black h-0.5 transform rotate-45 origin-center"></div>
                          <div className="absolute top-1/2 left-0 w-full bg-black h-0.5 transform -rotate-45 origin-center"></div>
                        </div>
                      ) : (
                        // Hamburger icon (three lines)
                        <div className="space-y-1.5 w-6">
                          <div className="w-full bg-black h-0.5"></div>
                          <div className="w-full bg-black h-0.5"></div>
                          <div className="w-full bg-black h-0.5"></div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* mobile menu dropdown */}
            <motion.div
              className={`fixed top-[15vh] left-0 w-full z-50 border-t-2 border-b-2 border-t-accent sm:hidden border-b-accent 
                ${!show && "hidden"}
                ${dark != "false" ? "bg-secondary" : "bg-secondary_white"}`}
              initial={false}
              animate={{ top: show ? "15vh" : "-100%" }}
            >
              <motion.div
                className={`flex flex-col items-center ${
                  dark !== "false" ? "text-primary_white" : "text-secondary"
                } justify-center h-full gap-5 p-3 font-bold text-description sm:hidden `}
              >
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    onClick={() => {
                      setLine(link.name);
                      setShowMenu(false);
                    }}
                    to={link.path}
                    className={`transition-colors hover:text-accent ${
                      line === link.name && "text-accent"
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
              </motion.div>
            </motion.div>
          </div>
          {/* main page content (routes switch here) */}
          <div className="h-[85vh] ">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="services" element={<Services />} />
              <Route path="projects/*" element={<ProjectMain />} />
              <Route path="contact" element={<Contact />} />
              <Route path="experience" element={<Experience />} />
              {/* <Route path="pe" element={<SuspenseUi />} /> */}
            </Routes>
          </div>
          {/* right side contact overlay animation */}
          <AnimatePresence>
            {showContact && (
              <motion.div
                className="absolute top-0 right-0 hidden sm:w-1/2 sm:block"
                initial={{}}
                animate={{}}
                transition={{
                  duration: 1,
                }}
                exit={{
                  opacity: 0,
                }}
              >
                <Contact />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </>
  );
}
