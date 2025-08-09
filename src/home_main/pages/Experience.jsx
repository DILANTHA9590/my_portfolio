import React from "react";

import { motion } from "framer-motion";

export default function Experience() {
  return (
    <>
      <div className="text-accent mt-[15vh] p-10 text-main_title">
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{
            opacity: 3,
          }}
          transition={{
            duration: 3,
          }}
          className="font-bold"
        >
          Experience section coming soon!
        </motion.h1>
      </div>
    </>
  );
}
