import React, { useContext, useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { DarkContext } from "../../../utillls/context";
import { motion, AnimatePresence } from "framer-motion";
import { MdOutlineDarkMode } from "react-icons/md";
import { CiLight } from "react-icons/ci";
import { HiX } from "react-icons/hi";

export default function NavBar() {
  const location = useLocation();
  const [showMenu, setShowMenu] = useState(false);
  const { dark, setDark } = useContext(DarkContext);

  const navLinks = [
    { name: "HOME", path: "/" },
    { name: "ABOUT", path: "/about" },
    { name: "SERVICES", path: "/services" },
    { name: "PROJECTS", path: "/projects" },
    { name: "CONTACT", path: "/contact" },
    { name: "EXPERIENCE", path: "/experience" },
  ];

  // Close menu when route changes
  useEffect(() => {
    setShowMenu(false);
  }, [location]);

  // Handle dark mode toggle
  const handleDarkMode = (isDark) => {
    setDark(isDark ? "true" : "false");
    localStorage.setItem("darkMode", isDark ? "true" : "false");
  };

  // Get active link based on current path
  const isActive = (path) => {
    if (path === "/" && location.pathname === "/") return true;
    if (path !== "/" && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <>
      {/* Navigation Bar */}
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-lg border-b ${
          dark != "false"
            ? "bg-secondary/95 border-gray-700 text-white"
            : "bg-secondary_white/95 border-gray-200 text-primary"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 sm:h-20">
            {/* Logo */}
            <Link to="/">
              <motion.h1
                className="text-xl sm:text-2xl md:text-3xl font-black bg-gradient-to-r from-accent via-purple-500 to-pink-500 bg-clip-text text-transparent cursor-pointer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                DILANTHA
              </motion.h1>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link key={link.name} to={link.path}>
                  <motion.div
                    className={`relative px-4 py-2 font-semibold text-sm transition-colors ${
                      isActive(link.path)
                        ? "text-accent"
                        : dark != "false"
                        ? "text-gray-300 hover:text-white"
                        : "text-gray-600 hover:text-primary"
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {link.name}
                    {isActive(link.path) && (
                      <motion.div
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-accent via-purple-500 to-pink-500"
                        layoutId="activeLink"
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 0.3 }}
                      />
                    )}
                  </motion.div>
                </Link>
              ))}
            </div>

            {/* Right Side Controls */}
            <div className="flex items-center gap-3">
              {/* Dark Mode Toggle */}
              <motion.button
                onClick={() => handleDarkMode(dark === "false")}
                className={`p-2 rounded-lg transition-colors ${
                  dark != "false"
                    ? "bg-gray-700 hover:bg-gray-600"
                    : "bg-gray-200 hover:bg-gray-300"
                }`}
                whileHover={{ scale: 1.1, rotate: 180 }}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                {dark != "false" ? (
                  <CiLight className="w-6 h-6 text-yellow-400" />
                ) : (
                  <MdOutlineDarkMode className="w-6 h-6 text-gray-700" />
                )}
              </motion.button>

              {/* Mobile Menu Button */}
              <motion.button
                onClick={() => setShowMenu(!showMenu)}
                className="lg:hidden p-2 rounded-lg bg-gradient-to-r from-accent via-purple-500 to-pink-500"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="w-6 h-6 flex items-center justify-center">
                  {showMenu ? (
                    <HiX className="w-5 h-5 text-white" />
                  ) : (
                    <div className="space-y-1.5">
                      <motion.div
                        className="w-5 h-0.5 bg-white"
                        animate={{ rotate: showMenu ? 45 : 0, y: showMenu ? 6 : 0 }}
                      />
                      <motion.div
                        className="w-5 h-0.5 bg-white"
                        animate={{ opacity: showMenu ? 0 : 1 }}
                      />
                      <motion.div
                        className="w-5 h-0.5 bg-white"
                        animate={{ rotate: showMenu ? -45 : 0, y: showMenu ? -6 : 0 }}
                      />
                    </div>
                  )}
                </div>
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {showMenu && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowMenu(false)}
            />

            {/* Mobile Menu */}
            <motion.div
              className={`fixed top-16 sm:top-20 left-0 right-0 z-40 lg:hidden overflow-hidden ${
                dark != "false" ? "bg-secondary" : "bg-secondary_white"
              }`}
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <div className="px-4 py-6 space-y-2 max-h-[70vh] overflow-y-auto">
                {navLinks.map((link, index) => (
                  <Link key={link.name} to={link.path}>
                    <motion.div
                      className={`relative p-4 rounded-xl font-semibold transition-all ${
                        isActive(link.path)
                          ? "bg-gradient-to-r from-accent via-purple-500 to-pink-500 text-white shadow-lg"
                          : dark != "false"
                          ? "bg-gray-800/50 text-gray-300 hover:bg-gray-700"
                          : "bg-white/50 text-gray-700 hover:bg-gray-200"
                      }`}
                      initial={{ x: -100, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      whileHover={{ scale: 1.02, x: 5 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <div className="flex items-center justify-between">
                        <span>{link.name}</span>
                        {isActive(link.path) && (
                          <motion.div
                            className="w-2 h-2 bg-white rounded-full"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ duration: 0.3 }}
                          />
                        )}
                      </div>
                    </motion.div>
                  </Link>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
