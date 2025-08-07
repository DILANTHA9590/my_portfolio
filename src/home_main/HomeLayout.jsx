import React, { useContext } from "react";
import { Link, Route, Routes } from "react-router-dom";

import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import { motion } from "framer-motion";
import { DarkContext } from "../utillls/context";
import { MdOutlineDarkMode } from "react-icons/md";
import { CiLight } from "react-icons/ci";
import ProjectMain from "./pages/ProjectMain";
import NavBar from "./components/homelayout/NavBar";

export default function HomeLayout() {
  const [line, setLine] = React.useState("HOME");
  const [show, setShowMenu] = React.useState(false);

  const { dark, setDark } = useContext(DarkContext);
  const navLinks = [
    { name: "HOME", path: "/" },
    { name: "ABOUT", path: "/about" },
    { name: "SERVICES", path: "/services" },
    { name: "PROJECTS", path: "/projects" },
    { name: "CONTACT", path: "/contact" },
  ];

  const handleDarkMode = (value) => {
    localStorage.setItem("darkmode", value);
  };

  function checkDarkMode() {
    const darkMode = localStorage.getItem("darkmode");
    if (darkMode !== "false") {
      setDark(darkMode);
    } else {
      setDark(darkMode);
    }
  }

  return (
    <>
      <div
        className={`h-[100vh] overflow-hidden overflow-y-auto ${
          dark != "false" ? "bg-primary" : "bg-primary_white"
        } font-inter`}
      >
        <div className="sm:w-[80%] mx-auto">
          <div className="relative flex flex-col ">
            <div className="fixed sm:w-[80%] w-[100%] z-60 top-0">
              <div
                className={`sm:h-[15vh]  flex justify-between items-center relative    ${
                  dark != "false"
                    ? "bg-secondary  text-white"
                    : "bg-secondary_white "
                }`}
              >
                <div>
                  <h1 className="text-xl font-bold sm:text-main_title">
                    DILANTHA
                  </h1>
                </div>
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

                  <div className="h-full p-4">
                    <div
                      className="flex flex-col items-center justify-center p-3 px-5 rounded-md cursor-pointer h-18 w-18 sm:h-full sm:w-27 bg-accent"
                      onClick={() => setShowMenu(!show)}
                    >
                      {show ? (
                        // Improved X icon with smooth animation
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
            <motion.div
              className={`fixed top-[15vh] left-0 w-full z-50  border-t-2 border-b-2 border-t-accent sm:hidden border-b-accent 
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
          <div className="h-[85vh] ">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="services" element={<Services />} />
              <Route path="projects/*" element={<ProjectMain />} />
              <Route path="contact" element={<Contact />} />

              {/* <Route path="pe" element={<SuspenseUi />} /> */}
            </Routes>
          </div>
        </div>
      </div>
    </>
  );
}
