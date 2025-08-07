import React, { useContext } from "react";
import { DarkContext } from "../../../utillls/context";
import { motion } from "framer-motion";

export default function Certification() {
  const { dark } = useContext(DarkContext);
  const imageNames = [
    "agile.png",
    "aws.png",
    "devoops.png",
    "docker.png",
    "linux.png",
    "mongo.png",
    "node_d.png",
    "node_s.png",
    "testing.png",
  ];

  return (
    <div
      className={`flex flex-col w-full h-full font-inter gap-y-5 font-bold ${
        dark !== "false" ? "text-primary_white" : "text-secondary"
      }`}
    >
      {/* Mobile View - Single Column */}
      <div className="flex flex-col items-center gap-4 md:hidden">
        {imageNames.map((img, index) => (
          <motion.div
            key={index}
            className="w-full max-w-xs p-4 rounded-lg shadow-md bg-white/10"
            whileHover={{ scale: 1.02 }}
          >
            <img
              src={`/my_cetifications/${img}`}
              alt={`Certification ${index + 1}`}
              className="object-contain w-full h-auto"
            />
          </motion.div>
        ))}
      </div>

      {/* Desktop View - Responsive Grid */}
      <div className="hidden gap-6 p-4 md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {imageNames.map((img, index) => (
          <motion.div
            key={index}
            className="flex items-center justify-center p-4 transition-shadow shadow-lg bg-white/10 rounded-xl hover:shadow-xl"
            whileHover={{ scale: 1.05 }}
          >
            <img
              src={`/my_cetifications/${img}`}
              alt={`Certification ${index + 1}`}
              className="object-contain w-auto max-h-40"
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
