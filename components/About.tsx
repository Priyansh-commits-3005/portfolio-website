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
        <p className=" text-base md:text-sm sm:text-xs">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
          iure nisi incidunt, fugiat eum libero dolorem aliquid et laborum
          deserunt ipsum ad tempora, eaque excepturi expedita aut nihil velit
          alias. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic
          asperiores possimus maxime facere libero exercitationem repellat
          dignissimos, ipsum doloribus deserunt debitis, animi illum facilis
          modi voluptas adipisci? Ad, similique exercitationem. Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Quas, illum eligendi.
          Nemo voluptatem, obcaecati voluptatibus porro amet quam. Deserunt
          dolor explicabo corrupti sint, iusto quas! Saepe, qui! Dolorum,
          molestias libero! Lorem ipsum, dolor sit amet consectetur adipisicing
          elit. Voluptatibus praesentium dignissimos omnis, culpa sed asperiores
          excepturi illo laboriosam dolorem eaque vero eveniet ipsam recusandae
          natus quia sint enim consequuntur tempore.
        </p>
      </div>
    </motion.div>
  );
}

export default About;
