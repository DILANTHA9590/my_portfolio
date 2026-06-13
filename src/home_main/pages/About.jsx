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
      dark !== "false"
        ? "bg-gray-800/50 border-gray-700"
        : "bg-white/50 border-gray-200"
    } shadow-xl`}
initial={{ opacity: 0, scale: 0.95 }}
whileInView={{ opacity: 1, scale: 1 }}
transition={{ duration: 0.6, delay: 0.2 }}
viewport={{ once: true }}

>

```
<p className="text-base sm:text-lg leading-relaxed">
```

```
  Hi, I'm{" "}
  <span className="font-bold text-accent">
    Dilantha Nayanajith
  </span>
  , an Associate Software Engineer and Full-Stack Developer passionate
  about building scalable web applications and backend systems. I
  specialize in developing secure REST APIs, authentication and
  authorization systems, and modern full-stack solutions using React.js,
  Node.js, NestJS, and cloud technologies.

  <br />
  <br />

  With hands-on experience in ERP systems, microservices architecture,
  Docker-based deployments, and AWS infrastructure, I focus on delivering
  maintainable, production-ready software that solves real-world business
  problems. I continuously explore backend engineering, cloud
  technologies, and software architecture to build reliable and scalable
  applications.
</p>
```

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

{/* Architecture & Engineering Approach */}
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

```
<div className="flex items-center gap-3 mb-4">
```

```
  <FaCode className="text-3xl text-blue-400" />
  <h3 className="text-xl font-bold">Architecture & Engineering Approach</h3>
</div>

<div className="flex flex-wrap gap-2">
  {[
    "API First Design",
    "RBAC",
    "Dockerized Deployments",
    "Microservices",
  ].map((item) => (
    <span
      key={item}
      className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-400 text-sm font-medium"
    >
      {item}
    </span>
  ))}
</div>
```

</motion.div>

{/* Development Workflow */}
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

```
<div className="flex items-center gap-3 mb-4">
```

```
  <FaServer className="text-3xl text-green-400" />
  <h3 className="text-xl font-bold">Development Workflow</h3>
</div>

<div className="flex flex-wrap gap-2">
  {[
    "Git & GitHub",
    "Code Reviews",
    "Agile",
    "CI/CD",
    "API Testing",
    "Debugging",
  ].map((item) => (
    <span
      key={item}
      className="px-3 py-1 rounded-full bg-green-500/20 text-green-400 text-sm font-medium"
    >
      {item}
    </span>
  ))}
</div>
```

</motion.div>

{/* What I Focus On */}
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

```
<div className="flex items-center gap-3 mb-4">
```

```
  <FaDatabase className="text-3xl text-purple-400" />
  <h3 className="text-xl font-bold">What I Focus On</h3>
</div>

<div className="flex flex-wrap gap-2">
  {[
    "Full Stack",
    "System Design",
    "Cloud",
    "DevOps",
    "Scalable Apps",
  ].map((item) => (
    <span
      key={item}
      className="px-3 py-1 rounded-full bg-purple-500/20 text-purple-400 text-sm font-medium"
    >
      {item}
    </span>
  ))}
</div>
```

</motion.div>

{/* Deployment & Infrastructure */}
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

```
<div className="flex items-center gap-3 mb-4">
```

```
  <FaCloud className="text-3xl text-orange-400" />
  <h3 className="text-xl font-bold">Deployment & Infrastructure</h3>
</div>

<div className="flex flex-wrap gap-2">
  {[
    "Docker",
    "Nginx",
    "VPS",
    "AWS EC2",
    "Redis",
    "CI/CD",
  ].map((item) => (
    <span
      key={item}
      className="px-3 py-1 rounded-full bg-orange-500/20 text-orange-400 text-sm font-medium"
    >
      {item}
    </span>
  ))}
</div>
```

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
                Currently expanding my expertise in FastAPI, Linux server administration, advanced AWS services, system design, scalability, and distributed systems to strengthen my backend and cloud engineering capabilities.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}
