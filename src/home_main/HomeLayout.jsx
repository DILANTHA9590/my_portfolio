import React from "react";
import { Link, Route, Routes } from "react-router-dom";

import About from "./pages/About";
import Services from "./pages/Services";
import Project from "./pages/Project";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import { motion } from "framer-motion";

export default function HomeLayout() {
  const [line, setLine] = React.useState("HOME");
  const [show, setShowMenu] = React.useState(false);
  const navLinks = [
    { name: "HOME", path: "/" },
    { name: "ABOUT", path: "/about" },
    { name: "SERVICES", path: "/services" },
    { name: "PROJECTS", path: "/projects" },
    { name: "CONTACT", path: "/contact" },
  ];
  return (
    <>
      <div className="h-[100vh]  bg-primary font-inter">
        <div className="sm:w-[80%] mx-auto">
          <div className="relative flex flex-col ">
            <div className="sm:h-[15vh]  bg-secondary flex justify-between items-center text-white relative">
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
                  <img
                    src="/icons8-light-mode-78 (1).png"
                    alt="light mode icon"
                  />
                </div>

                <div className="h-full sm:p-1">
                  <div
                    className="flex flex-col items-center w-20 h-20 p-3 px-5 sm:h-full sm:w-27 bg-accent justify-evenly o"
                    onClick={() => setShowMenu(!show)}
                  >
                    <div className="w-full bg-black sm:h-2 h-1.5"></div>
                    <div className="w-full bg-black sm:h-2 h-1.5"></div>
                    <div className="w-full bg-black sm:h-2 h-1.5"></div>
                  </div>
                </div>
              </div>
            </div>
            <motion.div
              className="absolute w-full border-2 -bottom-61 border-t-accent sm:hidden"
              initial={false}
              animate={{ bottom: show ? "-251px" : "100px" }}
            >
              <motion.div className="flex flex-col items-center justify-center h-full gap-5 p-3 font-bold text-description sm:hidden bg-secondary">
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
              <Route path="projects" element={<Project />} />
              <Route path="contact" element={<Contact />} />

              {/* <Route path="pe" element={<SuspenseUi />} /> */}
            </Routes>
          </div>
        </div>
      </div>
    </>
  );
}
