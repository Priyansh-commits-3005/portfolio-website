"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

type Props = {};

function About({}: Props) {
  const imglink = "https://picsum.photos/1280/1440";
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
      className=" flex relative flex-col h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className=" uppercase absolute top-24 tracking-[20px] text-2xl text-gray-500 ">
        About
      </h3>
      <motion.img
        initial={{
          x: -300,
          opacity: 0,
        }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.2 }}
        className=" -mb-20 md:mb-0 flex-shrink-0 w-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]"
        src={imglink}
        alt="profile pic second"
      />
      <div className="space-y-10 px-10 md:px-10">
        <h4 className=" text-4xl font-semibold">
          here is a <span className="text-red-500">little</span> background
        </h4>
        <p className="text-base">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
          iure nisi incidunt, fugiat eum libero dolorem aliquid et laborum
          deserunt ipsum ad tempora, eaque excepturi expedita aut nihil velit
          alias.
        </p>
      </div>
    </motion.div>
  );
}

export default About;
