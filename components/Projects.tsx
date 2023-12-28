"use client";

import React from "react";
import { motion } from "framer-motion";
import Projectcard from "./Projectcard";

type Props = {};

function Projects({}: Props) {
  const projects = [1, 2];
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen relative flex 
    overflow-hidden flex-col text-left md:flex-row 
    max-w-full justify-evenly mx-auto items-center z-0"
    >
      <h3
        className="absolute top-20 uppercase 
      tracking-[10px] text-gray-500 text-xl"
      >
        Projects
      </h3>
      <div
        className="relative w-full flex 
      overflow-x-scroll overflow-y-hidden 
      snap-x snap-mandatory z-20 scrollbar 
      scrollbar-trackgray-400/20  
      scrollbar-thumb-red-500/70 pt-10"
      >
        <Projectcard
          projectname="Space Runner"
          imglink="/2dgame.jpg"
          techused={["/logos/unity.webp", "/logos/cs.png"]}
          summary="2D game in which the player has to overcome obstacles and reach the top but not without collecting space crystals "
        />
        <Projectcard
          projectname="Forest Fire predictor"
          imglink="/forestFire.jpg"
          techused={["/logos/python.png", "/logos/sklearn.png"]}
          summary="this projects predicts if a particular area of a forest is prone to forest fire based on certain input parameters"
        />
        <Projectcard
          projectname="Project Levitate"
          imglink="/projectlevitate.png"
          techused={["/logos/unity.webp", "/logos/cs.png"]}
          summary="A 3d Game where you have to go from start to end , going through many different obstacles and trecherous paths. this project is still under development"
        />

        {/* each project mapped out */}
      </div>

      <div className="w-full absolute top-[20%] bg-red-500/10 left-0 h-[400px] -skew-y-6 "></div>
    </motion.div>
  );
}

export default Projects;
