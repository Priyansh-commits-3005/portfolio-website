import React from "react";
import { motion } from "framer-motion";

export default function BackgroundCircles() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1.0],
        scale: [1, 2, 2, 3, 1],
        borderRadius: ["20%", "20%", "50%", "80%", "20%"],
      }}
      transition={{ duration: 2.5 }}
      className=" relative flex justify-center items-center"
    >
      <div className=" absolute border border-[#333333] rounded-full h-[200px] w-[200px] mt-52 animate-ping" />
      <div className="border border-[#333333] rounded-full h-[175px] w-[175px] mt-52 absolute" />
      <div className="border border-[#333333] rounded-full h-[350px] w-[350px] mt-52 absolute" />
      <div className="border border-red-500 rounded-full h-[500px] w-[500px] mt-52 absolute animtate-pulse" />
      <div className="border border-[#333333] rounded-full h-[650px] w-[650px] mt-52 absolute" />
    </motion.div>
  );
}
