"use client";

import { useTypewriter, Cursor } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
export default function Hero() {
  const [text, count] = useTypewriter({
    words: ["hi", "have test words", " for now"],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className=" h-screen flex flex-col space-y-8 items-center justify-center text-center text-4xl overflow-hidden">
      <BackgroundCircles />
      <h1>
        <span>{text}</span>
        <Cursor cursorColor="#ff0000" />
      </h1>
    </div>
  );
}
