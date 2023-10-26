"use client";

import React from "react";
import { motion } from "framer-motion";

type Props = {};

function Projects({}: Props) {
  const projects = [1, 2, 3, 4, 5];
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
        {projects.map((project, i) => (
          <div
            className="w-screen flex-shrink-0 snap-center
           flex flex-col space-y-5 items-center justify-center 
           p-20 md:p-44 h-screen"
          >
            <motion.img
              initial={{
                y: -300,
                opacity: 0,
              }}
              transition={{
                duration: 1.2,
              }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              src="https://picsum.photos/600/300"
              alt=""
              className="w-[475px] h-[350px]"
            />
            <div className=" space-y-5 px-0 md:px-10 max-w-6xl ">
              <h4 className="text-2xl font font-semibold text-center tracking-wide">
                Project{" "}
                <span className=" text-red-500/50">
                  {i + 1} of {projects.length}
                </span>{" "}
                : ups clone{" "}
              </h4>
              <div className="flex flex-row space-x-5 items-center justify-center">
                <img
                  className="h-9 w-9 rounded-full"
                  src="https://picsum.photos/500/500"
                  alt="tech name"
                />
                <img
                  className="h-9 w-9 rounded-full"
                  src="https://picsum.photos/500/500"
                  alt="tech name"
                />
              </div>
              <p className="text-base text-center md:text-left px-6">
                {" "}
                project summary man
              </p>
            </div>
          </div>
        ))}
        {/* each project mapped out */}
      </div>

      <div className="w-full absolute top-[20%] bg-red-500/10 left-0 h-[400px] -skew-y-6 "></div>
    </motion.div>
  );
}

export default Projects;
