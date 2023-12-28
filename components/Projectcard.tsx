import { motion } from "framer-motion";

export default function Projectcard({
  projectname,
  imglink,
  techused,
  summary,
}: {
  projectname: string;
  imglink: string;
  techused: string[];
  summary: string;
}) {
  return (
    <div
      className="w-screen flex-shrink-0 snap-center
           flex flex-col space-y-5 items-center justify-center 
           p-20 md:p-44 h-screen"
    >
      <motion.img
        initial={{
          y: -300,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        src={imglink}
        alt=""
        className="w-[475px] h-[350px]"
      />
      <div className=" space-y-5 px-0 md:px-10 max-w-6xl ">
        <h4 className="text-2xl font font-semibold text-center tracking-wide">
          Project : {projectname}
        </h4>
        <div className="flex flex-row space-x-5 items-center justify-center">
          {techused.map((techused, key) => {
            return (
              <img
                key={1}
                className="h-9 w-10 rounded-full object-scale-down"
                src={techused}
                alt="tech name"
              />
            );
          })}
        </div>
        <p className="text-base text-center md:text-left px-6 font-sans">
          {" "}
          {summary}
        </p>
      </div>
    </div>
  );
}
