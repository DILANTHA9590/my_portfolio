import React, { useEffect, useState, useContext } from "react";
import { MdOutlineFileDownload } from "react-icons/md";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import { motion, useAnimation } from "framer-motion";
import { DarkContext } from "../../utillls/context";
import { ImSpinner2 } from "react-icons/im";

export default function Home() {
  const { dark } = useContext(DarkContext);
  const [cv, setCv] = useState(false); // CV temporarily disabled while updating
  const [typedText, setTypedText] = useState("");
  const fullText = "HI, I'M DILANTHA NAYANAJITH!";

  // Typing effect
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setTypedText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 80);
    return () => clearInterval(timer);
  }, []);

  // Tech stack icons with positions
  // Desktop / laptop positions (unchanged)
  const techIconsDesktop = [
    { src: "/home_icons/framer.png", alt: "Framer Motion", className: "absolute w-16 left-9 top-24 sm:w-20 md:w-24", delay: 0.2 },
    { src: "/home_icons/react.png", alt: "React.js", className: "absolute top-0 right-0 w-10 sm:w-20 md:w-24", delay: 0.4 },
    { src: "/home_icons/github.png", alt: "GitHub", className: "absolute w-10 top-38 left-92 sm:w-15 md:w-19", delay: 0.6 },
    { src: "/home_icons/icons8-nestjs-240.png", alt: "NestJS", className: "absolute w-14 right-85 top-50 sm:w-16 md:w-18", delay: 0.7 },
    { src: "/home_icons/nextjs.png", alt: "Next.js", className: "absolute top-70 right-12 sm:w-20 md:w-15", delay: 0.8 },
    { src: "/home_icons/nodejs.png", alt: "Node.js", className: "absolute top-90 right-0 sm:w-20 w-15", delay: 1.0 },
    { src: "/home_icons/mongo.png", alt: "MongoDB", className: "absolute right-0 w-20 top-60 md:w-15", delay: 1.2 },
    { src: "/home_icons/tailwind.png", alt: "Tailwind CSS", className: "absolute -right-10 top-30 sm:w-20 md:w-24", delay: 1.4 },
  ];

  // Mobile-specific positions (tighter around the portrait)
  const techIconsMobile = [
    { src: "/home_icons/react.png", alt: "React.js", className: "absolute w-11 right-45 top-8", delay: 0.3 },
    { src: "/home_icons/icons8-nestjs-240.png", alt: "NestJS", className: "absolute w-11 right-6 top-20", delay: 0.4 },
    { src: "/home_icons/nextjs.png", alt: "Next.js", className: "absolute w-15 right-5 top-36", delay: 0.5 },
    { src: "/home_icons/nodejs.png", alt: "Node.js", className: "absolute w-11 right-5 bottom-50", delay: 0.7 },
    { src: "/home_icons/mongo.png", alt: "MongoDB", className: "absolute w-11 left-2 bottom-35", delay: 0.9 },
    { src: "/home_icons/tailwind.png", alt: "Tailwind CSS", className: "absolute w-11 left-5 top-26", delay: 1.1 },
    { src: "/home_icons/framer.png", alt: "Framer Motion", className: "absolute w-11 left-7 top-44", delay: 1.3 },
  ];

  // Social links
  const socialLinks = [
    { icon: FaGithub, href: "https://github.com/DILANTHA9590", label: "GitHub" },
    { icon: FaLinkedin, href: "https://www.linkedin.com/in/dilantha-nayanajith-9a1545297/", label: "LinkedIn" },
    { icon: HiMail, href: "mailto:dilanthanayanajith@gmail.com", label: "Email" },
  ];

  return (
    <div
      className={`flex flex-col justify-center min-h-full px-4 font-inter sm:px-6 lg:px-8 pt-24 sm:pt-28 lg:pt-32 ${
        dark != "false" ? " text-textwhite" : " text-textblack"
      }`}
    >
      <div className="flex flex-col w-full gap-6 mx-auto sm:flex-row max-w-7xl sm:gap-8">
        {/* Text Section */}
        <div className="sm:w-[55%] flex flex-col justify-center items-start gap-y-5 sm:gap-y-8">
          {/* Main Title with Enhanced Styling */}
          <div className="space-y-3">
            {/* Greeting with typing effect */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="text-lg sm:text-xl font-medium text-accent"
            >
              👋 Hello, I'm
            </motion.div>
            
            {/* Name with gradient and typing effect */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="min-h-[1.5em] text-4xl sm:text-5xl md:text-6xl font-black leading-tight"
            >
              <span className="bg-gradient-to-r from-accent via-purple-500 to-pink-500 bg-clip-text text-transparent">
                {typedText}
              </span>
              <span className="animate-pulse text-accent">|</span>
            </motion.h1>
            
            {/* Role/Title with animated underline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="relative inline-block"
            >
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">
                <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  Software Engineering Student
                </span>
                <span className="mx-2">|</span>
                <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                  Full Stack Developer
                </span>
              </h2>
              
              {/* Animated underline */}
              <motion.div
                className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-accent via-purple-500 to-pink-500 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 0.8, delay: 0.8 }}
              />
            </motion.div>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="text-sm sm:text-base font-medium opacity-80 italic mt-2"
            >
              Crafting digital experiences with code & creativity ✨
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="text-sm sm:text-description md:max-w-lg"
          >
            <h3>
              I'm a passionate student and full-stack developer focused on
              building modern, user-friendly web applications. I enjoy turning
              ideas into responsive, elegant digital experiences that feel great
              to use.
            </h3>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.9 }}
            className="flex gap-4 items-center"
          >
            <a
              href="#"
              title="CV is being updated"
              className="flex items-center justify-center h-12 px-6 font-semibold text-white transition-all duration-300 rounded-lg gap-x-3 bg-gray-500 cursor-not-allowed"
            >
              <span>Updating CV</span>
              <ImSpinner2 className="text-lg animate-spin" />
            </a>

            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 1 + index * 0.1 }}
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className={`p-3 rounded-full transition-colors duration-300 ${
                    dark !== "false"
                      ? "bg-gray-700 hover:bg-accent text-white"
                      : "bg-gray-200 hover:bg-accent hover:text-white text-gray-700"
                  }`}
                  aria-label={social.label}
                >
                  <social.icon className="text-xl" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Image Section */}
        <div className="w-full sm:w-[45%] flex justify-center items-center min-h-[320px] sm:h-auto mt-6">
          <div className="relative w-full max-w-[360px] sm:max-w-[400px] md:max-w-[500px] aspect-square rounded-full bg-gradient-to-br from-[#761E1E] to-[#5a1616] justify-center items-center mt-6 sm:mt-0 shadow-2xl">
            {/* Profile Image */}
            <motion.img
              src="/propic1.png"
              alt="Dilantha Nayanajith - Full Stack Developer"
              className="relative z-10"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            />

            {/* Desktop/Laptop Tech Stack Icons */}
            {techIconsDesktop.map((icon, index) => (
              <motion.img
                key={`desktop-${icon.alt}-${index}`}
                src={icon.src}
                alt={icon.alt}
                className={`${icon.className} hidden sm:block`}
                initial={{ opacity: 0, scale: 0, rotate: -180 }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  rotate: 0,
                  y: [0, -10, 0],
                }}
                transition={{
                  opacity: { duration: 0.5, delay: icon.delay },
                  scale: { duration: 0.5, delay: icon.delay },
                  rotate: { duration: 0.8, delay: icon.delay },
                  y: {
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: icon.delay,
                  },
                }}
                whileHover={{ scale: 1.2, rotate: 360 }}
              />
            ))}

            {/* Mobile Tech Stack Icons */}
            {techIconsMobile.map((icon, index) => (
              <motion.img
                key={`mobile-${icon.alt}-${index}`}
                src={icon.src}
                alt={icon.alt}
                className={`${icon.className} sm:hidden`}
                initial={{ opacity: 0, scale: 0, rotate: -180 }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  rotate: 0,
                  y: [0, -10, 0],
                }}
                transition={{
                  opacity: { duration: 0.5, delay: icon.delay },
                  scale: { duration: 0.5, delay: icon.delay },
                  rotate: { duration: 0.8, delay: icon.delay },
                  y: {
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: icon.delay,
                  },
                }}
                whileHover={{ scale: 1.2, rotate: 360 }}
              />
            ))}

            {/* Decorative glow effect */}
            <motion.div
              className="absolute inset-0 rounded-full bg-accent opacity-20 blur-2xl"
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.2, 0.3, 0.2],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
