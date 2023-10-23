"use client";

import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";

export default function Header() {
  return (
    <header className=" sticky top-0 flex items-start justify-between max-w-7xl mx-auto z-20 p-5 xl:items-center">
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{ duration: 1 }}
        className=" flex flex-row items-center"
      >
        {/* social icons*/}
        <SocialIcon
          url="https://github.com/Priyansh-commits-3005"
          fgColor="grey"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://github.com/Priyansh-commits-3005"
          fgColor="grey"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://github.com/Priyansh-commits-3005"
          fgColor="grey"
          bgColor="transparent"
        />
      </motion.div>
      {/*for email*/}
      <motion.div
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{ duration: 1 }}
        className=" flex flex-row items-center text-gray-400 cursor-pointer"
      >
        <SocialIcon
          url=""
          network="email"
          className=" cursor-pointer"
          fgColor="grey"
          bgColor="transparent"
        />

        <p className=" uppercase hidden md:inline-flex text-sm text-gray-400">
          get in touch
        </p>
      </motion.div>
    </header>
  );
}
