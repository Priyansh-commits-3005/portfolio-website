import React from "react";
import { motion } from "framer-motion";
import { once } from "events";

type Props = {};

export default function ExperienceCard({}: Props) {
  return (
    <article
      className="flex flex-col rounded-lg items-center space-y-7
     flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center
      bg-gray-900 p-10 hover:opacity-100 opacity-40 cursor-pointer 
      transition-opacity duration-200 overflow-hidden"
    >
      <motion.img
        initial={{
          y: -100,
          opacity: 0,
        }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
        className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover"
        src="https://picsum.photos/1280/1440"
        alt="experience card pic"
      />
      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light">job title</h4>
        <p className="font-bold text-2xl mt-1">company name</p>
        <div className="flex space-x-2 my-2 ">
          <img
            className="h-10 w-10 rounded-full"
            src="https://picsum.photos/500/500"
            alt="tech name"
          />
          <img
            className="h-10 w-10 rounded-full"
            src="https://picsum.photos/500/500"
            alt="tech name"
          />
          <img
            className="h-10 w-10 rounded-full"
            src="https://picsum.photos/500/500"
            alt="tech name"
          />
          {/* texch used */}
          {/*  */}
          {/*  */}
        </div>
        <p className="uppercase py-5 text-gray-300">start and end </p>
        <ul className="list-disc space-y-4 ml-5 text-lg ">
          <li>
            summary pointssummary pointssummary pointssummary pointssummary
            pointssummary points
          </li>
          <li>
            summary pointssummary pointssummary pointssummary pointssummary
            pointssummary points
          </li>
          <li>
            summary pointssummary pointssummary pointssummary pointssummary
            pointssummary points
          </li>
          <li>
            summary pointssummary pointssummary pointssummary pointssummary
            pointssummary points
          </li>
          <li>
            summary pointssummary pointssummary pointssummary pointssummary
            pointssummary points
          </li>
        </ul>
      </div>
    </article>
  );
}
