"use client";

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import ContactMe from "@/components/ContactMe";
import Link from "next/link";
import { HomeIcon } from "@heroicons/react/20/solid";
import SkillPage from "@/components/SkillPage";
export default function Home() {
  return (
    <div
      className=" bg-gray-950 overflow-y-scroll overflow-x-hidden
     text-white h-screen snap-y snap-mandatory overflow-scroll z-0 
      scrollbar scrollbar-trackgray-400/20  scrollbar-thumb-red-500/70 scrollbar-thin"
    >
      <title>Priyansh's portfolio</title>

      <Header />

      <section id="Hero" className=" snap-start ">
        <Hero />
      </section>

      <section id="About" className=" snap-center">
        <About />
      </section>

      <section id="Experience" className="snap-center">
        <Experience />
      </section>

      <section id="Skills" className="snap-start">
        <SkillPage />
      </section>

      <section id="Projects" className="snap-start">
        <Projects />
      </section>
      {/* contact me */}
      <section id="Contact" className="snap-start">
        <ContactMe />
      </section>

      <Link href="#Hero">
        <footer className="sticky bottom-4 w-full cursor-pointer">
          <div className="flex items-center justify-center">
            <HomeIcon className="h-10 w-10 rounded-full filter grayscale hover:grayscale-0 cursor-pointer opacity-60" />
          </div>
        </footer>
      </Link>
    </div>
  );
}
