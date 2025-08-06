import React, { useContext } from "react";
import { motion } from "framer-motion";
import { DarkContext } from "../../utillls/context";
import MainTitle from "../components/ui/MainTitle";

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.3,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

export default function Services() {
  const { dark } = useContext(DarkContext);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 2 }}
      className={`h-full mt-25 font-inter  z-40 relative ${
        dark !== "false" ? "text-textwhite" : "text-textblack"
      }`}
    >
      {/* Background Images */}

      <motion.img
        initial={{
          opacity: 0,
        }}
        animate={{ opacity: 3 }}
        transition={{
          duration: 5,
        }}
        src="/home_icons/react.png"
        alt="React Icon"
        className="absolute left-0 mt-3 blur-sm sm:max-h-90 max-h-50"
      />
      <img
        src="/home_icons/nodejs.png"
        alt="Node.js Icon"
        className="absolute right-0 mt-3 sm:top-1/4 top-1/3 blur-sm max-h-90"
      />

      <img
        src="/home_icons/tailwind.png"
        alt="Tailwind Icon"
        className=" top-2/2 sm:top-11/16 absolute blur-sm md:h-[200px] sm:h-[100px] "
      />

      {/* Section Title */}
      <div className="h-[40%] flex flex-col justify-center gap-y-10">
        <div className="text-center">
          <MainTitle title={"MY SERVICES"} text={"main_title"} sm={"2xl"} />
        </div>

        <motion.h1
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-center text-transparent sm:text-4xl bg-gradient-to-r from-accent via-accent to-accent bg-clip-text"
        >
          Building modern, clean, and functional web apps <br /> from front to
          back
        </motion.h1>
      </div>

      {/* Service Cards */}
      <div className="flex flex-col text-center sm:flex-row h-[60%] justify-evenly sm:gap-x-4 px-2 xl:p-10">
        {[
          {
            title: "Frontend Development",
            description:
              "Crafting responsive and interactive UIs using HTML, CSS, JavaScript, React, Tailwind CSS, and Framer Motion.",
          },
          {
            title: "Full-Stack Web Development",
            description:
              "End-to-end solutions with modern technologies including REST APIs, React, Node.js, and MongoDB.",
          },
          {
            title: "Backend Development",
            description:
              "Creating secure, scalable APIs and server-side logic with Node.js and Express, integrated with MongoDB databases.",
          },
        ].map((service, i) => (
          <motion.div
            key={i}
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariants}
            className={`py-5 sm:border-2 ${
              dark !== "false" ? "border-white" : "border-secondary"
            } h-fit`}
          >
            <MainTitle title={service.title} text={"main_title"} sm={"2xl"} />
            <h1 className="font-bold sm:text-secondary_title">
              {service.description}
            </h1>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
