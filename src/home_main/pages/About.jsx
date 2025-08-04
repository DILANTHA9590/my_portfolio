import React, { useContext } from "react";
import { motion } from "framer-motion";
import MainTitle from "../components/ui/MainTitle";
import { DarkContext } from "../../utillls/context";

export default function About() {
  const { dark } = useContext(DarkContext);

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 2, ease: "easeOut" }, // 2s animation
    },
  };

  const sectionProps = {
    variants: fadeInUp,
    initial: "hidden",
    whileInView: "visible",
    viewport: { once: true, amount: 0.3 }, // only animate on scroll into view
  };

  return (
    <div
      className={`h-full font-inter ${
        dark !== "false" ? "text-textwhite" : "text-textblack"
      }`}
    >
      <div className="flex flex-col h-full px-4 pt-8 mx-auto gap-y-13 max-w-7xl">
        {/* ABOUT ME */}
        <motion.div {...sectionProps}>
          <MainTitle title="ABOUT ME" text="main_title" />
          <p className="mt-5 sm:mt-10 sm:text-description">
            Hi, I’m Dilantha Nayanajith. I have completed my Higher Diploma in
            Computing and Software Engineering and I am currently waiting for my
            final results. After receiving the results, I will start the Top-Up
            year of my BSc (Hons) in Software Engineering at ICBT Campus –
            Cardiff Metropolitan University. I enjoy building full-stack web
            applications using the MERN stack and am continuously improving my
            skills with technologies like Next.js and AWS. I focus on creating
            user-friendly, responsive, and efficient web applications that offer
            smooth experiences for users. I’m passionate about writing clean
            code and solving problems effectively.
          </p>
        </motion.div>

        {/* SKILLS SECTION */}
        <motion.div {...sectionProps}>
          <MainTitle title="SKILLS" text="main_title" />
        </motion.div>

        {/* FRONTEND */}
        <motion.div {...sectionProps}>
          <MainTitle title="Frontend" text="secondarytitle" />
          <h2 className="font-bold">
            Languages & Frameworks:{" "}
            <span className="font-normal">
              HTML5, CSS3, JavaScript (ES6+), React.js, Next.js
            </span>
          </h2>
          <h2 className="font-bold">
            Styling & Animation:{" "}
            <span className="font-normal">Tailwind CSS, Framer Motion</span>
          </h2>
          <h2>
            Others:{" "}
            <span className="font-normal">
              Responsive Design, Component-based Architecture
            </span>
          </h2>
        </motion.div>

        {/* BACKEND */}
        <motion.div {...sectionProps}>
          <MainTitle title="Backend" text="secondarytitle" />
          <h2 className="font-bold">
            Frameworks & Tools:{" "}
            <span className="font-normal">
              Node.js, Express.js, RESTful APIs
            </span>
          </h2>
          <h2>
            Authentication & Payment:{" "}
            <span className="font-normal">
              JWT Authentication, Stripe Integration
            </span>
          </h2>
        </motion.div>

        {/* DATABASES */}
        <motion.div {...sectionProps}>
          <MainTitle title="Databases" text="secondarytitle" />
          <h2 className="font-bold">
            NoSQL: <span className="font-normal">MongoDB</span>
          </h2>
        </motion.div>

        {/* TOOLS */}
        <motion.div {...sectionProps}>
          <MainTitle title="Tools & Version Control" text="secondarytitle" />
          <h2>
            <span className="font-normal">Git, GitHub, VS Code, Postman</span>
          </h2>
        </motion.div>

        {/* CLOUD */}
        <motion.div {...sectionProps}>
          <MainTitle title="Cloud & Deployment" text="secondarytitle" />
          <h2>AWS (Basics), Vercel, Netlify, Render</h2>
          <h2>CI/CD Pipelines</h2>
        </motion.div>

        {/* LEARNING */}
        <motion.div {...sectionProps}>
          <MainTitle
            title="Currently Learning / Exploring"
            text="secondarytitle"
          />
          <div className="flex flex-col gap-y-3">
            <h2 className="font-bold">
              Languages & Frameworks:{" "}
              <span className="font-normal">Python, Django, FastAPI</span>
            </h2>
            <h2 className="font-bold">
              Databases & OS:{" "}
              <span className="font-normal">
                Advanced MySQL, Linux (CLI, Server Configurations)
              </span>
            </h2>
            <h2 className="font-bold">
              Containerization & DevOps:{" "}
              <span className="font-normal">
                Docker (Advanced Usage), CI/CD Workflows
              </span>
            </h2>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
