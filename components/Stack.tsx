import React from "react";
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaDatabase,
  FaRust,
  FaGit,
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
    <section id="stack" className="p-6 bg-transparent z-10 h-72">
      <div className="text-start capitalize font-bold text-white mb-8 lg:px-16">
        {/* <p>WHAT I WORK WITH</p> */}
        <TextGenerateEffect words={"What I work with"}></TextGenerateEffect>
      </div>
      <div className="flex flex-wrap justify-center items-center gap-6">
        {techStacks.map((tech, index) => (
          <div
            key={index}
            className="flex items-center gap-3 text-white text-sm font-medium transition-transform duration-300 transform hover:scale-110"
          >
            <div className="text-4xl transition-all duration-300">
              {tech.icon}
            </div>
            <p>{tech.name.toUpperCase()}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stack;
