"use client";

import React from "react";
import Skill from "./Skill";
import { motion } from "framer-motion";

type Props = {};

function Skills({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex relative flex-col text-center 
    md:text-left xl:flex-row max-w-[1000] justify-center
    xl:px-10 min-h-screen xl:space-y-0 mx-auto 
    items-center"
    >
      <h3
        className="absolute uppercase 
      tracking-[12px] text-gray-500
       top-24 text-2xl"
      >
        Skills
      </h3>

      <h3
        className="absolute uppercase 
      tracking-[3px] text-gray-500
       top-36 text-sm"
      >
        Hover over a skill for current proficiency
      </h3>
      <div className="grid grid-cols-4 gap-5">
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
      </div>
    </motion.div>
  );
}

export default Skills;
