"use client";

import React from "react";
import { motion } from "framer-motion";
import ExperienceCard from "./ExperienceCard";

type Props = {};

export default function Experience({}: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 2,
      }}
      className=" h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute uppercase tracking-[10px] text-gray-500 top-16 text-xl">
        Experience
      </h3>

      <div className="w-full flex space-x-8 overflow-x-scroll p-12 snap-x snap-mandatory scrollbar scrollbar-trackgray-400/20  scrollbar-thumb-red-500/70 scrollbar-thin ">
        <ExperienceCard />
        <ExperienceCard />
        <ExperienceCard />
        <ExperienceCard />
        {/* experience cards */}
      </div>
    </motion.div>
  );
}
