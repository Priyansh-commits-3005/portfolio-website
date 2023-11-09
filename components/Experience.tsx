"use client";

import React from "react";
import { motion } from "framer-motion";
import ExperienceCard from "./ExperienceCard";

type Props = {};

export default function Experience({}: Props) {
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
      className=" h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute uppercase tracking-[10px] text-gray-500 top-16 text-xl">
        Experience
      </h3>

      <div className="w-full flex space-x-8 overflow-x-scroll p-12 snap-x snap-mandatory scrollbar scrollbar-trackgray-400/20  scrollbar-thumb-red-500/70 scrollbar-thin ">
        <ExperienceCard
          imglink="/logo.svg"
          jobtitle="Technical member -DS/ML"
          companyName="Gen-y"
          start="2023-04-01"
          end="currently working here"
          points={[
            "Team Gen-Y is a project-oriented, technology-based IT solution student team with the mission of integrating and advancing the best minds at SRMIST.",
            "Team Gen-Y is a project-oriented, technology-based IT solution student team with the mission of integrating and advancing the best minds at SRMIST.",
            "have also participated in Smart India Hackathon from this club",
          ]}
          techphoto1="logos/python.png"
          techphoto2="logos/unity.webp"
        />
        <ExperienceCard
          imglink="/gamedev.jpg"
          jobtitle="Technical member - Game programmer"
          companyName="GameDevCom SRM"
          start="2023-04-01"
          end="currently working here"
          points={[
            "GameDevcom is a game developers club ",
            "i have been a techincal member since april 2024 ",
            "i have made multiple 2d and 3d games and participated in game jams during the tenure",
          ]}
          techphoto1="logos/unreal.png"
          techphoto2="logos/unity.webp"
        />

        {/* experience cards */}
      </div>
    </motion.div>
  );
}
