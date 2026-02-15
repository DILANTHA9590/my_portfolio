import React, { useContext, useState } from "react";
import { DarkContext } from "../../utillls/context";
import { motion } from "framer-motion";
import { FaCode, FaServer, FaDatabase, FaCloud, FaTools, FaGraduationCap } from "react-icons/fa";

export default function About() {
  const { dark } = useContext(DarkContext);
  const [activeTab, setActiveTab] = useState("frontend");

  // Skills data organized by category
  const skillsData = {
    frontend: {
      icon: FaCode,
      color: "from-blue-500 to-cyan-500",
      items: [
        { name: "JavaScript", level: 90 },
        { name: "React.js", level: 90 },
        { name: "Next.js", level: 85 },
        { name: "HTML5/CSS3", level: 90 },
        { name: "Tailwind CSS", level: 85 },
        { name: "Framer Motion", level: 80 },
      ]
    },
    backend: {
      icon: FaServer,
      color: "from-green-500 to-emerald-500",
      items: [
        { name: "Node.js", level: 95 },
        { name: "Express.js", level: 90 },
        { name: "TypeScript", level: 90 },
        { name: "NestJS", level: 85 },
        { name: "RESTful API Design", level: 95 },
        { name: "Authentication & RBAC", level: 95 },
      ]
    },
    database: {
      icon: FaDatabase,
      color: "from-purple-500 to-pink-500",
      items: [
        { name: "MongoDB", level: 90 },
        { name: "MySQL", level: 95 },
      ]
    },
    tools: {
      icon: FaTools,
      color: "from-orange-500 to-red-500",
      items: [
        { name: "Git & GitHub", level: 98 },
        { name: "Postman", level: 100 },
        { name: "Docker", level: 95 },
        { name: "Linux CLI", level: 90 },
        { name: "CI/CD (GitHub Actions)", level: 95 },
      ]
    }
  };

  return (
    <>
      <div
        className={`h-full font-inter mt-30 ${
          dark != "false" ? "text-textwhite" : "text-textblack"
        }`}
      >
        <div className="flex flex-col h-full px-4 pt-8 gap-y-13 max-w-7xl mx-auto">
          
          {/* About Me Section with Enhanced Design */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {/* Title with gradient underline */}
            <div className="relative inline-block mb-8">
              <h1 className="text-4xl sm:text-5xl font-black bg-gradient-to-r from-accent via-purple-500 to-pink-500 bg-clip-text text-transparent">
                ABOUT ME
              </h1>
              <motion.div
                className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-accent via-purple-500 to-pink-500 rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
              />
            </div>

            {/* Bio Card */}
            <motion.div
              className={`p-6 sm:p-8 rounded-2xl backdrop-blur-sm border ${
                dark != "false" 
                  ? "bg-gray-800/50 border-gray-700" 
                  : "bg-white/50 border-gray-200"
              } shadow-xl`}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <p className="text-base sm:text-lg leading-relaxed">
                Hi, I'm <span className="font-bold text-accent">Dilantha Nayanajith</span>—a Full-Stack Developer with a strong passion for architecting robust backends and scalable systems. While I enjoy building complete web applications, my primary focus lies in designing structured APIs, secure authentication flows, and high-performance business logic.
                <br/><br/>
                From engineering ERP-style systems to implementing fine-grained Role-Based Access Control (RBAC), I prioritize writing clean, maintainable, and production-ready code. I thrive at the intersection of security and scalability, continuously refining my approach to build reliable software that solves real-world problems.
              </p>
            </motion.div>
          </motion.div>

          {/* Skills Section with Tabs */}
          <motion.div
            className="mt-12"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {/* Title */}
            <div className="relative inline-block mb-8">
              <h1 className="text-4xl sm:text-5xl font-black bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">
                SKILLS
              </h1>
              <motion.div
                className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
              />
            </div>

            {/* Skill Tabs */}
            <div className="flex flex-wrap gap-3 mb-8">
              {Object.entries(skillsData).map(([key, data], index) => {
                const Icon = data.icon;
                return (
                  <motion.button
                    key={key}
                    onClick={() => setActiveTab(key)}
                    className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center gap-2 ${
                      activeTab === key
                        ? `bg-gradient-to-r ${data.color} text-white shadow-lg scale-105`
                        : dark != "false"
                        ? "bg-gray-800 text-gray-300 hover:bg-gray-700"
                        : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                    }`}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Icon className="text-xl" />
                    <span className="capitalize">{key}</span>
                  </motion.button>
                );
              })}
            </div>

            {/* Active Skill Content */}
            <motion.div
              key={activeTab}
              className={`p-6 sm:p-8 rounded-2xl ${
                dark != "false" 
                  ? "bg-gray-800/50 border border-gray-700" 
                  : "bg-white/50 border border-gray-200"
              } shadow-xl`}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
            >
              <div className="space-y-6">
                {skillsData[activeTab].items.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    <div className="flex mb-2">
                      <span className="font-semibold text-lg">{skill.name}</span>
                    </div>
                    <div className={`h-3 rounded-full overflow-hidden ${
                      dark != "false" ? "bg-gray-700" : "bg-gray-300"
                    }`}>
                      <motion.div
                        className={`h-full bg-gradient-to-r ${skillsData[activeTab].color} rounded-full`}
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: index * 0.1, ease: "easeOut" }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Technical Skills Overview */}
          <motion.div
            className="mt-12"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="relative inline-block mb-8">
              <h2 className="text-3xl sm:text-4xl font-black bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                TECHNICAL EXPERTISE
              </h2>
              <motion.div
                className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Frontend */}
              <motion.div
                className={`p-6 rounded-xl ${
                  dark != "false" 
                    ? "bg-gradient-to-br from-blue-900/30 to-cyan-900/30 border border-blue-700/50" 
                    : "bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-200"
                } backdrop-blur-sm`}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <FaCode className="text-3xl text-blue-400" />
                  <h3 className="text-xl font-bold">Frontend</h3>
                </div>
                <p className="text-sm sm:text-base">
                  <strong>Languages & Frameworks:</strong> HTML5, CSS3, JavaScript (ES6+), React.js, Next.js<br/>
                  <strong>Styling:</strong> Tailwind CSS, Framer Motion<br/>
                  <strong>Concepts:</strong> Responsive Design, Component Architecture
                </p>
              </motion.div>

              {/* Backend */}
              <motion.div
                className={`p-6 rounded-xl ${
                  dark != "false" 
                    ? "bg-gradient-to-br from-green-900/30 to-emerald-900/30 border border-green-700/50" 
                    : "bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200"
                } backdrop-blur-sm`}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <FaServer className="text-3xl text-green-400" />
                  <h3 className="text-xl font-bold">Backend</h3>
                </div>
                <p className="text-sm sm:text-base">
                  <strong>Frameworks:</strong> Node.js, NestJS, Express.js<br/>
                  <strong>Language:</strong> TypeScript<br/>
                  <strong>APIs:</strong> RESTful API Design<br/>
                  <strong>Auth & Security:</strong> JWT, RBAC<br/>
                  <strong>Payments:</strong> Stripe Integration
                </p>
              </motion.div>

              {/* Database */}
              <motion.div
                className={`p-6 rounded-xl ${
                  dark != "false" 
                    ? "bg-gradient-to-br from-purple-900/30 to-pink-900/30 border border-purple-700/50" 
                    : "bg-gradient-to-br from-purple-50 to-pink-50 border border-purple-200"
                } backdrop-blur-sm`}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <FaDatabase className="text-3xl text-purple-400" />
                  <h3 className="text-xl font-bold">Databases</h3>
                </div>
                <p className="text-sm sm:text-base">
                  <strong>NoSQL:</strong> MongoDB<br/>
                  <strong>SQL:</strong> MySQL <br />
                  <strong>Redis:(Caching / In-Memory Store)</strong>
                </p>
              </motion.div>

              {/* Cloud & Deployment */}
              <motion.div
                className={`p-6 rounded-xl ${
                  dark != "false" 
                    ? "bg-gradient-to-br from-orange-900/30 to-red-900/30 border border-orange-700/50" 
                    : "bg-gradient-to-br from-orange-50 to-red-50 border border-orange-200"
                } backdrop-blur-sm`}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <FaCloud className="text-3xl text-orange-400" />
                  <h3 className="text-xl font-bold">Cloud & Deployment</h3>
                </div>
                <p className="text-sm sm:text-base">
                  <strong>Platforms:</strong> AWS (EC2, S3), Vercel, Netlify, Render<br/>
                  <strong>DevOps:</strong> CI/CD Pipelines (GitHub Actions), Docker
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* Currently Learning Section */}
          <motion.div
            className="mt-12 mb-8"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="relative inline-block mb-8">
              <h2 className="text-3xl sm:text-4xl font-black bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent flex items-center gap-3">
                <FaGraduationCap className="text-yellow-400" />
                CONTINUOUS GROWTH
              </h2>
              <motion.div
                className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
              />
            </div>

            <div className={`p-6 sm:p-8 rounded-2xl ${
              dark != "false" 
                ? "bg-gradient-to-br from-yellow-900/20 to-orange-900/20 border border-yellow-700/50" 
                : "bg-gradient-to-br from-yellow-50 to-orange-50 border border-yellow-200"
            } backdrop-blur-sm shadow-xl`}>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <p className="text-sm sm:text-base leading-relaxed">
                  Continuously expanding my backend expertise through hands-on exploration of Python (FastAPI), Linux server environments, and containerized deployment workflows using Docker and CI/CD.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}
