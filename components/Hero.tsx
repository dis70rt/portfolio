import React from "react";
import { Spotlight } from "./UI/spotlights";
import { TextGenerateEffect } from "./UI/text-generate-effect";
import { MagicButton } from "./UI/MagicButton";
import {
  FaEnvelope,
  FaFileAlt,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
} from "react-icons/fa";

import { ShimmerButton } from "./UI/ShimmerButton";

import { FaXTwitter } from "react-icons/fa6";

const Hero = () => {
  return (
    <div className="pb-10 pt-36">
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="top-10 left-full h-[80vh] w-[50vw]"
          fill="purple"
        />
        <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      <div className="h-screen w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.03] bg-grid-black/[0.2] flex items-center justify-center absolute top-0 left-0">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      </div>
      <div className="flex justify-center relative my-4 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <h2 className="uppercase tracking-widest text-[10px] lg:text-xs text-center text-blue-100 max-w-80">
            Likes to build dope shit
          </h2>

          <TextGenerateEffect className="text-center" words={""} />
          {/* <Cover>Saikat Das</Cover> */}

          <p className="tracking-widest text-center uppercase md:tracking-wider mb-4 text-xs text-neutral-400 md:text-sm md:py-3 lg:text-lg lg:py-3 lg:text-neutral-400">
            Student at IIT-BHU, Varanasi, India
          </p>

          <a href="#projects">
            <MagicButton
              title="Show my work"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>
          <div className="flex items-center justify-center space-x-5 p-10">
            <a
              href="https://dis70rt.github.io/resume/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ShimmerButton title="Resume" icon={<FaFileAlt />} />
            </a>
            <a
              href="https://instagram.com/saikat._"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="text-lg lg:text-2xl text-gray-400 hover:text-white hover:scale-125 transition-transform duration-200 cursor-pointer" />
            </a>
            <a
              href="https://linkedin.com/in/in-saikat"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="text-lg lg:text-2xl text-gray-400 hover:text-white hover:scale-125 transition-transform duration-200 cursor-pointer" />
            </a>
            <a
              href="https://github.com/dis70rt"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="text-lg lg:text-2xl text-gray-400 hover:text-white hover:scale-125 transition-transform duration-200 cursor-pointer" />
            </a>
            <a
              href="https://twitter.com/SaikatDas_"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaXTwitter className="text-lg lg:text-2xl text-gray-400 hover:text-white hover:scale-125 transition-transform duration-200 cursor-pointer" />
            </a>
            <a
              href="mailto:sd.saikat369@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaEnvelope className="text-lg lg:text-2xl text-gray-400 hover:text-white hover:scale-125 transition-transform duration-200 cursor-pointer" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
