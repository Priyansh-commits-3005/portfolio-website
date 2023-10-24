"use client";

import { useTypewriter, Cursor } from "react-simple-typewriter";
import Image from "next/image";
import BackgroundCircles from "./BackgroundCircles";
import Link from "next/link";
export default function Hero() {
  const prompts = ["hi", "have test words", " for now"];
  const [text, count] = useTypewriter({
    words: prompts,
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className=" h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden pt-4">
      <BackgroundCircles />
      <Image
        className=" relative rounded-full w-32 h-32 mx-auto object-cover"
        src="https://picsum.photos/400/400"
        alt="Profile Picture"
        width={400}
        height={400}
      />

      <div className="z-20">
        <h2 className=" text-lg uppercase text-gray-700 tracking-wider">
          Game developer and machine learning engineer
        </h2>
        <h1 className="text-5xl lg:text-6xl font-semibold px-10">
          <span>{text}</span>
          <Cursor cursorColor="#ff0000" />
        </h1>
        <div className="pt-5">
          <Link href="#About">
            <button className="heroButton">About</button>
          </Link>

          <Link href="#Experience">
            <button className="heroButton">Experience</button>
          </Link>
          <Link href="#Skills">
            <button className="heroButton">Skills</button>
          </Link>
          <Link href="#Projects">
            <button className="heroButton">Projects</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
