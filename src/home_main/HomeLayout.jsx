import React, { useContext, useEffect, useState } from "react";
import { Link, Route, Routes, useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();

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

  // On large screens jump straight to Contact; on small toggle the menu
  const handlePrimaryButtonClick = () => {
    if (typeof window !== "undefined" && window.innerWidth >= 1024) {
      setLine("CONTACT");
      setShowMenu(false);
      setShowContact(false);
      navigate("/contact");
      return;
    }

    setShowContact(false);
    setShowMenu((prev) => !prev);
  };

  return (
    <>
      {/* main layout wrapper */}
      <div
        className={`min-h-screen overflow-x-hidden overflow-y-auto relative ${
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
            <div className="fixed sm:w-[80%] w-[100%] z-[110] top-0">
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
                      onClick={handlePrimaryButtonClick}
                    >
                      {show || showContact ? (
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
            {show && (
              <div className="fixed inset-0 z-[200] sm:hidden">
                {/* backdrop */}
                <div
                  className="absolute inset-0 bg-black/40 backdrop-blur-sm"
                  onClick={() => setShowMenu(false)}
                />
                {/* panel */}
                <motion.div
                  className={`absolute left-0 right-0 top-[72px] mx-3 rounded-2xl shadow-2xl border border-accent overflow-hidden ${
                    dark != "false" ? "bg-secondary text-primary_white" : "bg-secondary_white text-secondary"
                  }`}
                  initial={{ y: -220, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -220, opacity: 0 }}
                  transition={{ type: "spring", stiffness: 240, damping: 22 }}
                >
                  <div className="flex flex-col items-center justify-center gap-4 p-5 font-bold text-description">
                    {navLinks.map((link) => (
                      <Link
                        key={link.name}
                        onClick={() => {
                          setLine(link.name);
                          setShowMenu(false);
                        }}
                        to={link.path}
                        className={`w-full text-center py-2 rounded-lg transition-colors hover:text-accent ${
                          line === link.name && "text-accent"
                        }`}
                      >
                        {link.name}
                      </Link>
                    ))}
                  </div>
                </motion.div>
              </div>
            )}
          </div>
          {/* main page content (routes switch here) */}
          <div className="min-h-[calc(100vh-80px)] pb-12">
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
              <>
                {/* Backdrop overlay */}
                <motion.div
                  className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[100]"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  onClick={() => {
                    setShowContact(false);
                    setShowMenu(false);
                  }}
                />
                
                {/* Contact overlay panel */}
                <motion.div
                  className="fixed top-0 right-0 h-full w-full sm:w-1/2 lg:w-2/5 z-[101] overflow-y-auto shadow-2xl"
                  initial={{ x: "100%" }}
                  animate={{ x: 0 }}
                  exit={{ x: "100%" }}
                  transition={{ 
                    type: "spring",
                    damping: 25,
                    stiffness: 200,
                  }}
                >
                  <Contact />
                </motion.div>
              </>
            )}
          </AnimatePresence>
        </div>
      </div>
    </>
  );
}
