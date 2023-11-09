"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

type Props = {};

function About({}: Props) {
  const imglink = "/aboutphoto.jpg";
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
      <h3 className=" uppercase absolute top-24 tracking-[15px] text-5xl text-gray-500 md:text-lg">
        About
      </h3>

      <motion.img
        initial={{
          x: -300,
          opacity: 0,
        }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.2 }}
        className=" -mb-20 md:mb-0 flex-shrink-0 w-52 rounded-full object-cover md:rounded-lg md:w-52 md:h-64 xl:w-[450px] xl:h-[550px]"
        src={imglink}
        alt="profile pic second"
      />
      <div className="space-y-10 px-10 md:px-10 overflow-y-scroll scrollbar-none ">
        <h4 className=" text-3xl md:text-xl font-semibold">
          here is a <span className="text-red-500">little</span> background
        </h4>
        <p className=" text-lg md:text-sm sm:text-xs">
          Greetings, I'm Priyansh Pachauri, a dedicated code enthusiast on a
          quest for knowledge! 🚀 I'm a tenacious student immersing myself in
          the dynamic realm of game development using Unity. With the power of
          code, I'm shaping immersive virtual experiences, from epic odysseys to
          cerebral conundrums, designed to both entertain and stimulate the
          intellect. But my curiosity doesn't stop at the boundaries of gaming.
          I'm currently embarking on a fascinating voyage into the realm of
          machine learning, where I orchestrate algorithms to conjure
          data-driven magic. In an era where artificial intelligence is
          revolutionizing our world, I'm committed to mastering its intricacies.
          Additionally, I indulge in app and web development, where I craft
          digital wonders one line of code at a time. The possibilities are
          boundless, and who knows what groundbreaking apps and websites will
          emerge from my endeavors? Embark on this exhilarating journey with me,
          as we transform creative visions into reality through the alchemy of
          code, one pixel and one line at a time. Together, we'll build, learn,
          and revel in the joy of intellectual exploration. 💡🎮🤖🌐
        </p>
      </div>
    </motion.div>
  );
}

export default About;
