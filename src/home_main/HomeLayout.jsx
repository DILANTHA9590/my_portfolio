import React from "react";
import "../app.css";
import { Link, Route, Routes } from "react-router-dom";

import About from "./pages/About";
import Services from "./pages/Services";
import Project from "./pages/Project";
import Contact from "./pages/Contact";
import Home from "./pages/Home";

export default function HomeLayout() {
  return (
    <>
      <div className="h-[100vh]  bg-[#0A101A] ">
        <div className="w-[80%] mx-auto">
          <div className="h-[15vh] bg-[#17263A] flex justify-between items-center text-white">
            <div>
              <h1
                className="font-bold"
                style={{ fontSize: "var(--title-1-text)" }}
              >
                DILANTHA
              </h1>
            </div>
            <div className="flex gap-5 font-bold">
              <Link to="/">HOME</Link>
              <Link to="/about">ABOUT</Link>
              <Link to="/services">SERVICES</Link>
              <Link to="/projects">PROJECTS</Link>
              <Link to="/contact">CONTACT</Link>
            </div>
            <div className="flex h-full items-center justify-center">
              <div>
                <img
                  src="/icons8-light-mode-78 (1).png"
                  alt="light mode icon"
                />
              </div>

              <div className="h-full w-27 bg-[#8B5CFF] flex flex-col justify-evenly items-center p-3 px-5">
                <div className="bg-black h-2 w-full"></div>
                <div className="bg-black h-2 w-full "></div>
                <div className="bg-black h-2 w-full"></div>
              </div>
            </div>
          </div>
          <div className="h-[85vh] bg-amber-600">
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
