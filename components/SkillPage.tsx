"use client";

import React from "react";
import Skill from "./Skill";
import { motion } from "framer-motion";

type Props = {};

function SkillPage({}: Props) {
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
      <div className="grid grid-cols-4 gap-5 ">
        <Skill
          imglink="/logos/tensorflow.png"
          Progress="40"
          directionLeft={false}
        />
        <Skill
          imglink="/logos/sklearn.png"
          Progress="70"
          directionLeft={false}
        />
        <Skill
          imglink="/logos/python.png"
          Progress="100"
          directionLeft={false}
        />
        <Skill
          imglink="/logos/mysql.png"
          Progress="100"
          directionLeft={false}
        />
        <Skill imglink="/logos/unity.webp" Progress="70" directionLeft={true} />
        <Skill imglink="/logos/cs.png" Progress="75" directionLeft={true} />
        <Skill
          imglink="/logos/unreal.png"
          Progress="50"
          directionLeft={false}
        />
        <Skill imglink="/logos/cpp.png" Progress="90" directionLeft={false} />
        <Skill imglink="/logos/next.jpg" Progress="50" directionLeft={true} />
        <Skill imglink="/logos/react.png" Progress="60" directionLeft={true} />
        <Skill imglink="/logos/TS.png" Progress="40" directionLeft={true} />
        <Skill
          imglink="/logos/tailwind.png"
          Progress="80"
          directionLeft={true}
        />
      </div>
    </motion.div>
  );
}

export default SkillPage;
