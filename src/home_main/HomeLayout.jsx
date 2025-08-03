import React from "react";
import { Link, Route, Routes } from "react-router-dom";

import About from "./pages/About";
import Services from "./pages/Services";
import Project from "./pages/Project";
import Contact from "./pages/Contact";
import Home from "./pages/Home";

export default function HomeLayout() {
  return (
    <>
      <div className="h-[100vh]  bg-primary font-inter">
        <div className="w-[80%] mx-auto">
          <div className="h-[15vh] bg-secondary flex justify-between items-center text-white">
            <div>
              <h1 className="font-bold text-main_title">DILANTHA</h1>
            </div>
            <div className="hidden sm:block">
              <div className="flex gap-5 font-bold text-description ">
                <Link to="/">HOME</Link>
                <Link to="/about">ABOUT</Link>
                <Link to="/services">SERVICES</Link>
                <Link to="/projects">PROJECTS</Link>
                <Link to="/contact">CONTACT</Link>
              </div>
            </div>
            <div className="flex items-center justify-center h-full">
              <div>
                <img
                  src="/icons8-light-mode-78 (1).png"
                  alt="light mode icon"
                />
              </div>

              <div className="flex flex-col items-center h-full p-3 px-5 w-27 bg-accent justify-evenly">
                <div className="w-full h-2 bg-black"></div>
                <div className="w-full h-2 bg-black "></div>
                <div className="w-full h-2 bg-black"></div>
              </div>
            </div>
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
