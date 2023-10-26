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
    <div className=" h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden pt-16">
      <BackgroundCircles />
      <div className=" py-6 z-20">
        <Image
          className=" relative rounded-full w-24 h-24 mx-auto"
          src="https://picsum.photos/400/400"
          alt="Profile Picture"
          width={400}
          height={400}
        />
        <div>
          <h2 className=" text-base py-3 uppercase text-gray-700 tracking-wider">
            Game developer and machine learning engineer
          </h2>
          <h1 className="text-4xl lg:text-5xl font-semibold px-10">
            <span>{text}</span>
            <Cursor cursorColor="#ff0000" />
          </h1>
          <div className="pt-5 scale-90">
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
    </div>
  );
}
