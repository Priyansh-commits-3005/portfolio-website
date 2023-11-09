"use client";

import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Header() {
  return (
    <>
      <header className=" sticky top-0 flex items-start justify-between max-w-5xl mx-auto z-20 p-5 xl:items-center scale-90">
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
          {/* social icons
        1.github
        2.hackerank
        3.codeforces
        4.linkedin
        5.itch.io */}
          <SocialIcon
            url="https://github.com/Priyansh-commits-3005"
            fgColor="grey"
            bgColor="transparent"
          />
          <SocialIcon
            url="https://twitter.com/DarkDancer30052"
            fgColor="grey"
            bgColor="transparent"
          />
          <SocialIcon
            url="https://www.linkedin.com/in/priyansh-pachauri-110652252/"
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
            href="#Contact"
            network="email"
            className=" cursor-pointer"
            fgColor="grey"
            bgColor="transparent"
          />
          <Link href="#Contact">
            <p className=" uppercase hidden md:inline-flex text-sm text-gray-400">
              get in touch
            </p>
          </Link>
        </motion.div>
      </header>
    </>
  );
}
