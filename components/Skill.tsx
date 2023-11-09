"use client";

import { motion, progress } from "framer-motion";
import React from "react";

type Props = {
  directionLeft: boolean;
  imglink: string;
  Progress: string;
};

function Skill({ directionLeft, imglink, Progress }: Props) {
  return (
    <div
      className=" group relative flex 
    cursor-pointer"
    >
      <motion.img
        initial={{
          x: directionLeft ? -200 : 200,
          opacity: 0,
        }}
        transition={{ duration: 0.25 }}
        whileInView={{ opacity: 1, x: 0 }}
        src={imglink}
        alt="python logo"
        className="rounded-full border-gray-500 
         object-center object-scale-down w-20 h-20 xl:w-28 xl:h-28 
        filter 
        group-hover:grayscale transition 
        duration-300 ease-in-out "
      />
      <div
        className="absolute opacity-0 
      group-hover:opacity-80
      transition duration-300 ease-in-out
      group-hover:bg-white h-24 w-24 md:w-28
       md:h-28 xl:w-28 xl:h-28 
       rounded-full z-0"
      >
        <div
          className="flex items-center 
        justify-center h-full"
        >
          <p
            className="text-3xl font-bold
             text-black
             opacity-100"
          >
            {Progress}%
          </p>
        </div>
      </div>
    </div>
  );
}

export default Skill;
