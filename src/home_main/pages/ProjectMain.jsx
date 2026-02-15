import React, { useContext, useState } from "react";
import { Link, Route, Routes, useLocation } from "react-router-dom";
import Project from "../components/project/Project";
import Cetification from "../components/project/Cetification";
import { DarkContext } from "../../utillls/context";
import { motion } from "framer-motion";
import { FaProjectDiagram, FaCertificate } from "react-icons/fa";

export default function ProjectMain() {
  const { dark } = useContext(DarkContext);
  const location = useLocation();
  const isProjectsPage = location.pathname === "/projects/" || location.pathname === "/projects";
  const isCertificationsPage = location.pathname.includes("/cetification");

  const tabs = [
    {
      name: "Projects",
      path: "/projects/",
      icon: FaProjectDiagram,
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      name: "Certifications",
      path: "/projects/cetification",
      icon: FaCertificate,
      gradient: "from-purple-500 to-pink-500",
    },
  ];

  return (
    <>
      <div
        className={`mt-[15vh] h-full font-inter ${
          dark != "false" ? "bg-primary" : "bg-primary_white"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 py-8 h-full">
          {/* Header Section with Enhanced Tabs */}
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Page Title */}
            <div className="relative inline-block mb-8">
              <h1 className="text-4xl sm:text-5xl font-black bg-gradient-to-r from-accent via-purple-500 to-pink-500 bg-clip-text text-transparent">
                MY WORK
              </h1>
              <motion.div
                className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-accent via-purple-500 to-pink-500 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 0.8, delay: 0.3 }}
              />
            </div>

            {/* Tab Navigation */}
            <div className="flex flex-wrap gap-4 mt-8">
              {tabs.map((tab, index) => {
                const Icon = tab.icon;
                const isActive = 
                  (tab.path === "/projects/" && isProjectsPage) || 
                  (tab.path.includes("cetification") && isCertificationsPage);

                return (
                  <Link to={tab.path} key={tab.name}>
                    <motion.div
                      className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center gap-3 ${
                        isActive
                          ? `bg-gradient-to-r ${tab.gradient} text-white shadow-lg scale-105`
                          : dark != "false"
                          ? "bg-gray-800 text-gray-300 hover:bg-gray-700"
                          : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                      }`}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Icon className="text-xl" />
                      <span>{tab.name}</span>
                      
                      {/* Active indicator */}
                      {isActive && (
                        <motion.div
                          className="w-2 h-2 bg-white rounded-full"
                          layoutId="activeTab"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ duration: 0.3 }}
                        />
                      )}
                    </motion.div>
                  </Link>
                );
              })}
            </div>
          </motion.div>

          {/* Content Section with Animation */}
          <motion.div
            className="h-auto min-h-[60vh]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Routes>
              <Route path="/" element={<Project />} />
              <Route path="cetification" element={<Cetification />} />
            </Routes>
          </motion.div>
        </div>
      </div>
    </>
  );
}
