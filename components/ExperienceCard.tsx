import React from "react";
import { motion } from "framer-motion";
import { once } from "events";

type Props = {};

export default function ExperienceCard({}: Props) {
  return (
    <article
      className="flex flex-col rounded-lg items-center space-y-7
     flex-shrink-0 w-[400px] md:w-[500px] xl:w-[800px] xl:h-[525px] md:h-[500px] snap-center
      bg-gray-900 p-5 hover:opacity-100 opacity-40 cursor-pointer sm:
      transition-opacity duration-200 overflow-hidden overflow-y-scroll scrollbar scrollbar-none mt-3"
    >
      <motion.img
        initial={{
          y: -100,
          opacity: 0,
        }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
        className="w-24 h-24 rounded-full xl:w-[115px] xl:h-[115px] object-cover mt-3"
        src="https://picsum.photos/1280/1440"
        alt="experience card pic"
      />
      <div className="px-0 md:px-10">
        <h4 className="text-3xl font-light">job title</h4>
        <p className="font-bold text-xl mt-1">company name</p>
        <div className="flex space-x-2 my-1 ">
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
          <img
            className="h-9 w-9 rounded-full"
            src="https://picsum.photos/500/500"
            alt="tech name"
          />
          {/* texch used */}
          {/*  */}
          {/*  */}
        </div>
        <p className="uppercase py-4 text-gray-300">start and end </p>
        <ul className="list-disc space-y-2 ml-3 text-base">
          <li>summary points summary points summary points summary</li>
          <li>summary points summary points summary points</li>
          <li>summary pointssummary pointssummary points</li>
          <li>summary pointssummary pointssummary pointss</li>
          <li>summary pointssummary pointssummary points</li>
        </ul>
      </div>
    </article>
  );
}
