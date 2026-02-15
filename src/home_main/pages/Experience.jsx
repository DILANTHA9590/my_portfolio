import React, { useContext } from "react";
import { motion } from "framer-motion";
import { DarkContext } from "../../utillls/context";
import { FaBriefcase, FaCalendar, FaMapMarkerAlt, FaCode, FaGraduationCap } from "react-icons/fa";

export default function Experience() {
  const { dark } = useContext(DarkContext);

  const experiences = [
    {
      type: "work",
      title: "Associate Software Engineer",
      company: "Eyerax Technology",
      location: "Sri Lanka",
      period: "Feb 2026 – Present",
      description:
        "Promoted from Software Engineering Intern to Associate Software Engineer. Contributing to backend-focused development and scalable microservices using NestJS and TypeScript, while also supporting frontend feature implementation with React and Ant Design.",
      responsibilities: [
        "Developing and maintaining RESTful APIs and microservices",
        "Implementing authentication and authorization (JWT, RBAC)",
        "Designing modular backend architecture",
        "Working with relational databases and caching systems",
        "Building and enhancing frontend components using React & Ant Design",
        "Collaborating in team-based agile workflows",
      ],
      technologies: ["TypeScript", "NestJS", "MySQL", "Redis", "React", "Ant Design"],
      gradient: "from-blue-500 to-cyan-500",
      icon: FaBriefcase,
    },
    {
      type: "work",
      title: "Software Engineering Intern",
      company: "Eyerax Technology",
      location: "Sri Lanka",
      period: "Aug 2025 – Jan 2026",
      description:
        "Assisted in backend API development, debugging, and frontend integration tasks while gaining hands-on experience with production-level systems.",
      responsibilities: [
        "Implementing and testing REST APIs",
        "Debugging and resolving backend defects",
        "Supporting frontend integration and fixes",
        "Collaborating on code reviews and team workflows",
      ],
      technologies: ["Node.js", "NestJS", "React"],
      gradient: "from-purple-500 to-pink-500",
      icon: FaCode,
    },
  ];

  const education = [
    {
      degree: "BSc (Hons) in Software Engineering",
      institution: "Cardiff Metropolitan University (UK) — conducted at ICBT Campus",
      period: "2025 – 2026",
      status: "In Progress",
      description:
        "Currently completing the final year (Top-Up) with focus on software engineering principles, backend architecture, and modern web technologies.",
      gradient: "from-green-500 to-emerald-500",
    },
    {
      degree: "Higher Diploma in Computing and Software Engineering",
      institution: "ICBT Campus",
      period: "2023 – 2025",
      status: "Completed",
      description:
        "Comprehensive program covering full-stack development, database systems, and core software engineering fundamentals.",
      gradient: "from-orange-500 to-red-500",
    },
  ];

  return (
    <>
      <div
        className={`mt-[15vh] font-inter ${
          dark != "false" ? "bg-primary text-textwhite" : "bg-primary_white text-textblack"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 py-8">
          {/* Page Title */}
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative inline-block mb-6">
              <h1 className="text-4xl sm:text-5xl font-black bg-gradient-to-r from-accent via-purple-500 to-pink-500 bg-clip-text text-transparent">
                EXPERIENCE & EDUCATION
              </h1>
              <motion.div
                className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-accent via-purple-500 to-pink-500 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 0.8, delay: 0.3 }}
              />
            </div>
            <motion.p
              className="text-lg sm:text-xl mt-6 max-w-3xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              My journey as a developer and student, building skills and creating impactful projects.
            </motion.p>
          </motion.div>

          {/* Experience Section */}
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="relative inline-block mb-8">
              <h2 className="text-3xl sm:text-4xl font-black bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Work Experience
              </h2>
              <motion.div
                className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
              />
            </div>

            <div className="space-y-6 mt-8">
              {experiences.map((exp, index) => {
                const Icon = exp.icon;
                return (
                  <motion.div
                    key={index}
                    className={`relative p-6 sm:p-8 rounded-2xl backdrop-blur-sm border overflow-hidden group ${
                      dark != "false"
                        ? "bg-gray-800/50 border-gray-700"
                        : "bg-white/50 border-gray-200"
                    }`}
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.02 }}
                  >
                    {/* Gradient overlay on hover */}
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-r ${exp.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                    />

                    <div className="relative z-10">
                      {/* Header */}
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                        <div className="flex items-start gap-4">
                          <motion.div
                            className={`p-3 rounded-xl bg-gradient-to-r ${exp.gradient} flex-shrink-0`}
                            whileHover={{ rotate: 360 }}
                            transition={{ duration: 0.6 }}
                          >
                            <Icon className="text-2xl text-white" />
                          </motion.div>
                          <div>
                            <h3 className="text-xl sm:text-2xl font-bold">{exp.title}</h3>
                            <p className="text-base sm:text-lg font-semibold opacity-80">{exp.company}</p>
                          </div>
                        </div>
                        <div className="flex flex-col sm:text-right gap-1 text-sm sm:text-base opacity-70">
                          <div className="flex items-center gap-2">
                            <FaCalendar className="text-accent" />
                            <span>{exp.period}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <FaMapMarkerAlt className="text-accent" />
                            <span>{exp.location}</span>
                          </div>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-base sm:text-lg mb-4 leading-relaxed">
                        {exp.description}
                      </p>

                      {exp.responsibilities && exp.responsibilities.length > 0 && (
                        <div className="mb-4">
                          <h4 className="font-semibold mb-2">Key Responsibilities:</h4>
                          <ul className="list-disc list-inside space-y-1 text-base sm:text-lg">
                            {exp.responsibilities.map((item, idx) => (
                              <li key={idx}>{item}</li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, idx) => (
                          <motion.span
                            key={idx}
                            className={`px-3 py-1 rounded-lg text-sm font-semibold ${
                              dark != "false"
                                ? "bg-gray-700 text-gray-200"
                                : "bg-gray-200 text-gray-700"
                            }`}
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3, delay: idx * 0.05 }}
                            viewport={{ once: true }}
                            whileHover={{ scale: 1.1 }}
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Education Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="relative inline-block mb-8">
              <h2 className="text-3xl sm:text-4xl font-black bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent flex items-center gap-3">
                <FaGraduationCap className="text-purple-400" />
                Education
              </h2>
              <motion.div
                className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
              />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  className={`p-6 sm:p-8 rounded-2xl backdrop-blur-sm border ${
                    dark != "false"
                      ? "bg-gray-800/50 border-gray-700"
                      : "bg-white/50 border-gray-200"
                  } shadow-lg hover:shadow-2xl transition-all duration-300 group`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.03 }}
                >
                  {/* Status Badge */}
                  <motion.div
                    className={`inline-block px-4 py-2 rounded-full bg-gradient-to-r ${edu.gradient} text-white text-sm font-semibold mb-4`}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.2 + 0.2 }}
                    viewport={{ once: true }}
                  >
                    {edu.status}
                  </motion.div>

                  {/* Degree */}
                  <h3 className="text-xl sm:text-2xl font-bold mb-2">{edu.degree}</h3>
                  
                  {/* Institution */}
                  <p className="text-base sm:text-lg font-semibold opacity-80 mb-2">
                    {edu.institution}
                  </p>

                  {/* Period */}
                  <div className="flex items-center gap-2 text-sm opacity-70 mb-4">
                    <FaCalendar className="text-accent" />
                    <span>{edu.period}</span>
                  </div>

                  {/* Description */}
                  <p className="text-sm sm:text-base leading-relaxed">
                    {edu.description}
                  </p>

                  {/* Decorative gradient line */}
                  <motion.div
                    className={`h-1 bg-gradient-to-r ${edu.gradient} rounded-full mt-4`}
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    transition={{ duration: 0.8, delay: index * 0.2 + 0.4 }}
                    viewport={{ once: true }}
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Skills Summary */}
          <motion.div
            className={`mt-16 p-6 sm:p-8 rounded-2xl backdrop-blur-sm border ${
              dark != "false"
                ? "bg-gradient-to-br from-yellow-900/20 to-orange-900/20 border-yellow-700/50"
                : "bg-gradient-to-br from-yellow-50 to-orange-50 border-yellow-200"
            }`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl sm:text-3xl font-bold mb-4 bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
              💡 Key Strengths
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                "Full-Stack Development",
                "Responsive UI/UX Design",
                "RESTful API Development",
                "Database Management",
                "Modern JavaScript (ES6+)",
                "Problem Solving & Debugging",
              ].map((skill, idx) => (
                <motion.div
                  key={idx}
                  className="flex items-center gap-2"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                >
                  <span className="text-accent text-xl">✓</span>
                  <span className="font-semibold">{skill}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}
