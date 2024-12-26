"use client";
import React from "react";

import { WordRotate } from "./UI/Rotate";
import {
  FaGamepad,
  FaMap,
  FaMusic,
  FaUniversity,
} from "react-icons/fa";

const content = [
  {
    title: "Music Lover",
    description: "Always on the hunt for new artists.",
    icon: <FaMusic />,
  },
  {
    title: "Gaming Enthusiast",
    description:
      "Enjoy immersing myself in virtual worlds and sometimes some friendly competition.",
    icon: <FaGamepad />,
  },
  {
    title: "Travel Bug",
    description: "Exploring new cultures and places whenever I can.",
    icon: <FaMap />,
  },
];
export function AboutMe() {
  return (
    <section
      id="about"
      className="w-full max-w-6xl lg:mx-auto lg:px-6 px-0 flex flex-col lg:items-start lg:text-left"
    >
      <h1 className="heading text-4xl md:text-5xl font-bold lg:text-center mb-6">
        About <span className="text-purple">Me</span>
      </h1>
      <div className="lg:text-xl text-neutral-500 leading-relaxed sm:text-left mb-8">
        <p className="">
          Born in Jharkhand, India, I'm a 20-year-old college student with a
          sweet tooth for ice cream and a love for exploring new places. My
          dream is to give something meaningful to the world that has helped
          shape me into who I am today.
        </p>
      </div>
      <div className="h-[120px] overflow-hidden flex items-center justify-start text-left mb-8">
        <WordRotate items={content}></WordRotate>
      </div>
      <div className="flex items-center space-x-2 pb-16 rounded-lg shadow-md text-left">
        <FaUniversity className="text-xl" />
        <span className="text-lg font-bold tracking-wide text-gray-300">
          Bachelor's Student | IIT-BHU
        </span>
      </div>
    </section>
  );
}
