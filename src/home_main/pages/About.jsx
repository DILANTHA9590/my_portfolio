import React, { useContext } from "react";
import MainTitle from "../components/ui/MainTitle";
import { DarkContext } from "../../utillls/context";
import { motion } from "framer-motion";

export default function About() {
  const { dark, setDark } = useContext(DarkContext);

  return (
    <>
      <div
        className={`h-full font-inter mt-30 ${
          dark != "false" ? "text-textwhite" : "text-textblack"
        }`}
      >
        <div className="flex flex-col h-full px-4 pt-8 gap-y-13">
          <motion.div
            className="max-w-7xl"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 2 }}
            viewport={{ once: true }}
          >
            <MainTitle title={"ABOUT ME"} text={"main_title"} sm={"2xl"} />
            <h1 className="mt-5 sm:mt-10 sm:text-description">
              Hi, I’m Dilantha Nayanajith. I have completed my Higher Diploma in
              Computing and Software Engineering and I am currently waiting for
              my final results. After receiving the results, I will start the
              Top-Up year of my BSc (Hons) in Software Engineering at ICBT
              Campus – Cardiff Metropolitan University. I enjoy building
              full-stack web applications using the MERN stack and am
              continuously improving my skills with technologies like Next.js
              and AWS. I focus on creating user-friendly, responsive, and
              efficient web applications that offer smooth experiences for
              users. I’m passionate about writing clean code and solving
              problems effectively.
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 2 }}
            viewport={{ once: true }}
          >
            <MainTitle title={"SKILLS"} text={"main_title"} sm={"2xl"} />

            <div className="flex flex-col gap-5 mt-5 sm:mt-10 sm:text-description">
              {/* ----------------- Frontend ----------------- */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 2 }}
                viewport={{ once: true }}
              >
                <MainTitle
                  title="Frontend"
                  text={"secondary_title"}
                  sm={"xl"}
                />
                <h2 className="font-bold">
                  Languages & Frameworks:{" "}
                  <span className="font-normal">
                    HTML5, CSS3, JavaScript (ES6+), React.js, Next.js
                  </span>
                </h2>
                <h2 className="font-bold">
                  Styling & Animation:{" "}
                  <span className="font-normal">
                    Tailwind CSS, Framer Motion
                  </span>
                </h2>
                <h2>
                  Others:{" "}
                  <span className="font-normal">
                    Responsive Design, Component-based Architecture
                  </span>
                </h2>
              </motion.div>

              {/* ----------------- Backend ----------------- */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 2 }}
                viewport={{ once: true }}
              >
                <MainTitle title="Backend" text={"secondary_title"} sm={"xl"} />
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

              {/* ----------------- Databases ----------------- */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 2 }}
                viewport={{ once: true }}
              >
                <MainTitle
                  title="Databases"
                  text={"secondary_title"}
                  sm={"xl"}
                />
                <h2 className="font-bold">
                  NoSQL: <span className="font-normal">MongoDB</span>
                </h2>
              </motion.div>

              {/* ----------------- Tools ----------------- */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 2 }}
                viewport={{ once: true }}
              >
                <h1 className="font-bold">
                  Tools & Version Control:{" "}
                  <span className="font-normal">
                    Git, GitHub, VS Code, Postman
                  </span>
                </h1>
              </motion.div>

              {/* ----------------- Cloud & Deployment ----------------- */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 2 }}
                viewport={{ once: true }}
              >
                <MainTitle
                  title="Cloud & Deployment"
                  text={"secondary_title"}
                  sm={"xl"}
                />
                <h2>AWS (Basics), Vercel, Netlify, Render</h2>
                <h2>CI/CD Pipelines</h2>
              </motion.div>

              {/* ----------------- Learning ----------------- */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 2 }}
                viewport={{ once: true }}
              >
                <MainTitle
                  title="Currently Learning / Exploring"
                  text={"secondary_title"}
                  sm={"xl"}
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
          </motion.div>

          {/* Section Skills loading bar ----------------------------------------------> */}
          <div className="flex flex-col sm:flex-row ">
            <div
              className={`sm:w-[50%] h-[50vh] bg-secondary flex flex-col justify-evenly p-4 sm:rounded-tl-4xl sm:rounded-bl-4xl 
                 ${dark != "false" ? "" : "bg-secondary_white"}`}
            >
              <div>
                <h1>Java Script</h1>
                <div className="border">
                  <motion.div
                    className=" h-[10px] "
                    initial={{ width: "0%" }}
                    whileInView={{ width: "90%", backgroundColor: "#8B5CFF" }}
                    transition={{ duration: 2 }}
                  ></motion.div>
                </div>
              </div>
              <div>
                <h1>Node js</h1>
                <div className="border">
                  <motion.div
                    className=" h-[10px] "
                    initial={{ width: "0%" }}
                    whileInView={{ width: "80%", backgroundColor: "#8B5CFF" }}
                    transition={{ duration: 2 }}
                  ></motion.div>
                </div>
              </div>
              <div>
                <h1>React js</h1>
                <div className="border">
                  <motion.div
                    className=" h-[10px] "
                    initial={{ width: "0%" }}
                    whileInView={{ width: "90%", backgroundColor: "#8B5CFF" }}
                    transition={{ duration: 2 }}
                  ></motion.div>
                </div>
              </div>
              <div>
                <h1>java</h1>
                <div className="border">
                  <motion.div
                    className=" h-[10px] "
                    initial={{ width: "0%" }}
                    whileInView={{ width: "30%", backgroundColor: "#8B5CFF" }}
                    transition={{ duration: 2 }}
                  ></motion.div>
                </div>
              </div>
            </div>
            <div
              className={`  h-[50vh] sm:w-[50%] bg-secondary flex flex-col justify-evenly p-4 sm:rounded-tr-4xl sm:rounded-br-4xl  mt-5 sm:mt-0 mb-5
                 ${dark != "false" ? "" : "bg-secondary_white"}`}
            >
              <div>
                <h1>HTML</h1>
                <div className="border">
                  <motion.div
                    className=" h-[10px] "
                    initial={{ width: "0%" }}
                    whileInView={{ width: "90%", backgroundColor: "#8B5CFF" }}
                    transition={{ duration: 2 }}
                  ></motion.div>
                </div>
              </div>
              <div>
                <h1>CSS</h1>
                <div className="border">
                  <motion.div
                    className=" h-[10px] "
                    initial={{ width: "0%" }}
                    whileInView={{ width: "90%", backgroundColor: "#8B5CFF" }}
                    transition={{ duration: 2 }}
                  ></motion.div>
                </div>
              </div>
              <div>
                <h1>Tailwind CSS</h1>
                <div className="border">
                  <motion.div
                    className=" h-[10px] "
                    initial={{ width: "0%" }}
                    whileInView={{ width: "70%", backgroundColor: "#8B5CFF" }}
                    transition={{ duration: 2 }}
                  ></motion.div>
                </div>
              </div>
              <div>
                <h1>Figma</h1>
                <div className="border">
                  <motion.div
                    className=" h-[10px] "
                    initial={{ width: "0%" }}
                    whileInView={{ width: "60%", backgroundColor: "#8B5CFF" }}
                    transition={{ duration: 2 }}
                  ></motion.div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
