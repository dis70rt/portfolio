import React from "react";
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaRust,
  FaGithub,
  FaDocker,
} from "react-icons/fa";
import { SiFirebase, SiFlutter } from "react-icons/si";
import { TextGenerateEffect } from "./UI/text-generate-effect";

const techStacks = [
  { name: "React", icon: <FaReact /> },
  { name: "Flutter", icon: <SiFlutter /> },
  { name: "Python", icon: <FaPython /> },
  { name: "Firebase", icon: <SiFirebase /> },
  { name: "Rust", icon: <FaRust /> },
  { name: "Node.js", icon: <FaNodeJs /> },
  { name: "Git", icon: <FaGithub /> },
  { name: "Docker", icon: <FaDocker /> },
];

const Stack = () => {
  return (
    <section id="stack" className="bg-transparent z-10 lg:h-72 h-52">
      <div className="sm:text-start lg:text-center capitalize lg:pb-6 lg:py-0 font-bold text-white mb-8 lg:mx-auto">
        <TextGenerateEffect words={"What I work with"}></TextGenerateEffect>
      </div>
      <div className="lg:max-w-6xl lg:mx-auto lg:-my-8 sm:-my-4 flex flex-wrap justify-center items-center gap-6 lg:gap-12">
        {techStacks.map((tech, index) => (
          <div
            key={index}
            className="flex items-center gap-2 text-white text-xs font-medium transition-transform duration-300 transform hover:scale-110 lg:gap-5 lg:text-lg"
          >
            <div className="text-xl lg:text-6xl transition-all duration-300">
              {tech.icon}
            </div>
            <p className="lg:text-xl text-sm">{tech.name.toUpperCase()}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stack;
