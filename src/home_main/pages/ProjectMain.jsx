import React, { useContext, useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import Project from "../components/project/Project";
import Cetification from "../components/project/Cetification";
import NavBar from "../components/homelayout/NavBar";
import { DarkContext } from "../../utillls/context";

export default function ProjectMain() {
  const { dark, setDark } = useContext(DarkContext);
  const [selectButton, setSelectButton] = useState("project");
  return (
    <>
      <div
        className={`mt-[15vh] h-full   ${
          dark != "false" ? "bg-primary" : "bg-primary_white "
        }  `}
      >
        <div className="h-full">
          <div className="h-[10%]">
            <div className="flex items-center justify-start h-full font-bold gap-x-8 sm:text-main_title text-accent text-secondary_title">
              <Link
                to="/projects/"
                className={`${selectButton == "project" && "underline "} ${
                  dark != "false"
                    ? "bg-primary decoration-primary_white"
                    : "bg-primary_white  decoration-primary"
                }  `}
                onClick={() => {
                  setSelectButton("project");
                }}
              >
                Projects{" "}
              </Link>
              <Link
                className={`${selectButton == "cetifications" && " underline "}
                ${
                  dark != "false"
                    ? "bg-primary decoration-primary_white"
                    : "bg-primary_white  decoration-primary"
                }  }
                `}
                to="/projects/cetification"
                onClick={() => {
                  setSelectButton("cetifications");
                }}
              >
                Cetification
              </Link>
            </div>
          </div>

          <div className="sm:h-[75vh] h-full ">
            <Routes>
              <Route path="/" element={<Project />} />
              <Route path="cetification" element={<Cetification />} />

              {/* <Route path="pe" element={<SuspenseUi />} /> */}
            </Routes>
          </div>

          <div></div>
        </div>
      </div>
    </>
  );
}
