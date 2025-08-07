import React, { useContext } from "react";
import { FaGithub } from "react-icons/fa";
import { FaExternalLinkAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { DarkContext } from "../../../utillls/context";
export default function Project() {
  const { dark, setDark } = useContext(DarkContext);
  return (
    <div
      className={`flex flex-col w-full h-full font-inter gap-y-5 ${
        dark !== "false" ? "text-primary_white" : "text-secondary "
      }`}
    >
      {/* 
        first 2 image */}
      <div className="flex flex-col gap-1 text-center sm:flex-row sm:gap-x-7 gap-y-4 sm:gap-0">
        {/* first Image  */}

        <div
          className={` bg-secondary ${
            dark != "false" ? "bg-secondary" : "bg-secondary_white"
          } `}
        >
          <div>
            <img
              src="/project_images/cosmmatic_e_template.png"
              alt=""
              className="w-7xl"
            />
          </div>
          <div>
            <h1>Cosmetic E-commerce Website</h1>
          </div>
          <div className="flex items-center text-center justify-evenly">
            <div className="flex flex-col items-center justify-center">
              <FaGithub className="" />
              <Link>Live Demo</Link>
            </div>
            <div className="flex flex-col items-center justify-center">
              <FaExternalLinkAlt />
              <Link>Live Demo</Link>
            </div>
          </div>
        </div>

        {/* second image  */}

        <div
          className={`text-center   ${
            dark != "false" ? "bg-secondary" : "bg-secondary_white"
          } `}
        >
          <div>
            <img
              src="/project_images/Hotel_booking_template.png"
              alt=""
              className="w-7xl"
            />
          </div>
          <div className="text-center ">
            <h1>Hotel Booking Website</h1>
          </div>
          <div className="flex items-center text-center justify-evenly ">
            <div className="flex flex-col items-center justify-center">
              <FaGithub className="" />
              <Link>Live Demo</Link>
            </div>
            <div className="flex flex-col items-center justify-center">
              <FaExternalLinkAlt />
              <Link>Live Demo</Link>
            </div>
          </div>
        </div>
      </div>
      {/* second 2 image */}
      <div className="flex flex-col gap-5 pb-5 mb-5 sm:flex-row ">
        {/* first image  */}
        <div
          className={`text-center  ${
            dark != "false" ? "bg-secondary" : "bg-secondary_white"
          } `}
        >
          <div>
            <img
              src="/project_images/portfolio_template.png"
              alt=""
              className="w-7xl"
            />
          </div>
          <div>
            <h1>My PortFolio site</h1>
          </div>
          <div className="flex items-center text-center justify-evenly">
            <div className="flex flex-col items-center justify-center">
              <FaGithub />
              <Link>View Code</Link>
            </div>
            <div className="flex flex-col items-center justify-center">
              <FaExternalLinkAlt />
              <Link>Live Demo</Link>
            </div>
          </div>
        </div>

        {/* second image  */}
        <div
          className={`bg-secondary   ${
            dark != "false" ? "bg-secondary" : "bg-secondary_white"
          } `}
        >
          <div>
            <img
              src="/project_images/vet_site_template.png"
              alt=""
              className="w-7xl"
            />
          </div>
          <div>
            <h1 className="text-center">Your All-in-One Pet Care Website</h1>
          </div>
          <div className="flex items-center text-center justify-evenly">
            <div className="flex flex-col items-center justify-center">
              <FaGithub />
              <Link>View Code</Link>
            </div>
            <div className="flex flex-col items-center justify-center">
              <FaExternalLinkAlt />
              <Link>Live Demo</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
