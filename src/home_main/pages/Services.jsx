import React, { useContext } from "react";
import { motion } from "framer-motion";
import { DarkContext } from "../../utillls/context";
import { FaCode, FaLaptopCode, FaServer, FaMobile, FaPalette, FaRocket } from "react-icons/fa";

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.9 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

export default function Services() {
  const { dark } = useContext(DarkContext);

  const services = [
    {
      icon: FaCode,
      title: "Frontend Development",
      description: "Crafting responsive and interactive UIs using React, Next.js, Tailwind CSS, and Framer Motion for stunning user experiences.",
      gradient: "from-blue-500 to-cyan-500",
      bgGradient: dark !== "false" ? "from-blue-900/30 to-cyan-900/30" : "from-blue-50 to-cyan-50",
      borderColor: dark !== "false" ? "border-blue-700/50" : "border-blue-200",
    },
    {
      icon: FaLaptopCode,
      title: "Full-Stack Development",
      description: "End-to-end web solutions with modern technologies including REST APIs, React, Node.js, and MongoDB for complete applications.",
      gradient: "from-purple-500 to-pink-500",
      bgGradient: dark !== "false" ? "from-purple-900/30 to-pink-900/30" : "from-purple-50 to-pink-50",
      borderColor: dark !== "false" ? "border-purple-700/50" : "border-purple-200",
    },
    {
      icon: FaServer,
      title: "Backend Development",
      description: "Building secure, scalable APIs and server-side logic with Node.js, Express, and database integration for robust applications.",
      gradient: "from-green-500 to-emerald-500",
      bgGradient: dark !== "false" ? "from-green-900/30 to-emerald-900/30" : "from-green-50 to-emerald-50",
      borderColor: dark !== "false" ? "border-green-700/50" : "border-green-200",
    },
    {
      icon: FaMobile,
      title: "Responsive Design",
      description: "Creating mobile-first, responsive layouts that work seamlessly across all devices and screen sizes.",
      gradient: "from-orange-500 to-red-500",
      bgGradient: dark !== "false" ? "from-orange-900/30 to-red-900/30" : "from-orange-50 to-red-50",
      borderColor: dark !== "false" ? "border-orange-700/50" : "border-orange-200",
    },
    {
      icon: FaPalette,
      title: "UI/UX Design",
      description: "Designing clean, modern interfaces with attention to user experience, accessibility, and visual aesthetics.",
      gradient: "from-pink-500 to-rose-500",
      bgGradient: dark !== "false" ? "from-pink-900/30 to-rose-900/30" : "from-pink-50 to-rose-50",
      borderColor: dark !== "false" ? "border-pink-700/50" : "border-pink-200",
    },
    {
      icon: FaRocket,
      title: "Performance Optimization",
      description: "Optimizing applications for speed, SEO, and best practices to deliver lightning-fast user experiences.",
      gradient: "from-indigo-500 to-purple-500",
      bgGradient: dark !== "false" ? "from-indigo-900/30 to-purple-900/30" : "from-indigo-50 to-purple-50",
      borderColor: dark !== "false" ? "border-indigo-700/50" : "border-indigo-200",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`h-full mt-25 font-inter relative ${
        dark !== "false" ? "text-textwhite" : "text-textblack"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Section Title */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {/* Main Title with gradient underline */}
          <div className="relative inline-block mb-6">
            <h1 className="text-4xl sm:text-5xl font-black bg-gradient-to-r from-accent via-purple-500 to-pink-500 bg-clip-text text-transparent">
              MY SERVICES
            </h1>
            <motion.div
              className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-accent via-purple-500 to-pink-500 rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            />
          </div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-xl sm:text-2xl md:text-3xl font-bold mt-8 max-w-4xl mx-auto"
          >
            Building modern, clean, and functional web apps{" "}
            <span className="bg-gradient-to-r from-accent via-purple-500 to-pink-500 bg-clip-text text-transparent">
              from front to back
            </span>
          </motion.p>
        </motion.div>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={i}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={cardVariants}
                whileHover={{ 
                  scale: 1.05,
                  y: -10,
                  transition: { duration: 0.3 }
                }}
                className={`relative p-6 rounded-2xl backdrop-blur-sm border ${
                  service.borderColor
                } bg-gradient-to-br ${service.bgGradient} shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group cursor-pointer`}
              >
                {/* Animated gradient overlay on hover */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                />

                {/* Icon */}
                <div className="relative z-10">
                  <motion.div
                    className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${service.gradient} mb-4`}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Icon className="text-3xl text-white" />
                  </motion.div>

                  {/* Title */}
                  <h3 className="text-xl sm:text-2xl font-bold mb-3">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm sm:text-base leading-relaxed opacity-90">
                    {service.description}
                  </p>

                  {/* Decorative corner accent */}
                  <motion.div
                    className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${service.gradient} opacity-10 rounded-bl-full`}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.6, delay: i * 0.1 }}
                    viewport={{ once: true }}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-lg sm:text-xl mb-6">
            Ready to bring your ideas to life? Let's work together! 🚀
          </p>
          <motion.a
            href="#contact"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-accent via-purple-500 to-pink-500 text-white font-semibold rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get In Touch
          </motion.a>
        </motion.div>
      </div>
    </motion.div>
  );
}
