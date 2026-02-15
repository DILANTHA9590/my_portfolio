import React, { useContext } from "react";
import { FaGithub } from "react-icons/fa";
import { FaExternalLinkAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { DarkContext } from "../../../utillls/context";
import { motion } from "framer-motion";
import { GiDuration } from "react-icons/gi";
export default function Project() {
  const { dark } = useContext(DarkContext);

  const projects = [
    {
      title: "Cosmetic E-commerce Website",
      image: "/project_images/cosmmatic_e_template.png",
      codeUrl: "https://github.com/DILANTHA9590/cbc-frontend",
      demoUrl: "https://cbc-frontend-five.vercel.app/",
      disableDemo: true,
    },
    {
      title: "Hotel Booking Website",
      image: "/project_images/Hotel_booking_template.png",
      codeUrl: "https://github.com/DILANTHA9590/Hotel-booking-frontend",
      demoUrl: "https://hotel-booking-frontend-eight.vercel.app/",
      disableDemo: true,
    },
    {
      title: "Your All-in-One Pet Care Website",
      image: "/project_images/vet_site_template.png",
      codeUrl: "https://github.com/DILANTHA9590/paws_care_frontend",
      demoUrl: "https://paws-care-frontend.vercel.app/",
      disableDemo: false,
    },
  ];

  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 3,
      }}
      transition={{
        duration: 1,
      }}
      className={`flex flex-col w-full h-full font-inter gap-y-5 font-bold ${
        dark !== "false" ? "text-primary_white" : "text-secondary "
      }`}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pb-6">
        {projects.map((project) => (
          <div
            key={project.title}
            className={`w-full h-full rounded-2xl overflow-hidden border ${
              dark != "false" ? "bg-secondary border-gray-700" : "bg-secondary_white border-gray-200"
            } shadow-lg transition-transform duration-300 hover:scale-[1.01]`}
          >
            <div className="w-full">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-56 object-cover"
                decoding="async"
                loading="lazy"
              />
            </div>
            <div className="flex flex-col items-center gap-4 p-4 text-center">
              <h1 className="text-lg sm:text-xl font-semibold">{project.title}</h1>
              <div className="flex items-center justify-center gap-8">
                <div className="flex flex-col items-center justify-center text-sm sm:text-base">
                  <FaGithub />
                  <Link target="#blank" to={project.codeUrl} className="underline">
                    View Code
                  </Link>
                </div>
                <div className="flex flex-col items-center justify-center text-sm sm:text-base">
                  <FaExternalLinkAlt />
                  {project.disableDemo ? (
                    <span className="opacity-60 cursor-not-allowed">Live Demo</span>
                  ) : (
                    <Link target="#blank" to={project.demoUrl} className="underline">
                      Live Demo
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
