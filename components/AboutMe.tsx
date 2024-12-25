"use client";
import React from "react";
import { Timeline } from "@/components/UI/Timeline";
import Image from "next/image";

import IIT_BHU_IMAGE from "@/public/iitbhu.jpg";
import IceCreamImage from "@/public/icecream.jpeg";

const content = [
  {
    title: "Education",
    description:
      "I am currently pursuing a B.Tech in Mining at IIT-BHU, Varanasi. I completed my high school education in my hometown, Dhanbad, Jharkhand. From 2020 to 2022, I studied at Delhi Public School, and prior to that, I attended De Nobili School from 2007 to 2020.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        <Image
          src={IIT_BHU_IMAGE.src}
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "What I Love",
    description:
      "Ice cream is one of my favorite treats! I also enjoy traveling to new places, watching movies and anime, and, most of all, playing story-mode games.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src={IceCreamImage.src}
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Experience",
    description:
      "While I don't have formal work experience yet, I'm eager to apply my skills in a real-world setting. I'm excited about the opportunity to learn and contribute, and I believe my enthusiasm and commitment will make me a valuable addition to any team.",
    content: null,
  },
];
export function AboutMe() {
  return (
    <section
      id="about"
      className="w-full max-w-6xl lg:mx-auto lg:px-6 px-0 flex flex-col lg:items-center"
    >
      <h1 className="heading text-4xl md:text-5xl font-bold lg:text-center mb-6">
        About <span className="text-purple">Me</span>
      </h1>
      <div className="lg:text-xl text-neutral-500 leading-relaxed sm:text-left mb-8">
        <p className="">
          I’m a 20-year-old college student from Jharkhand, India, with a love
          for ice cream and a passion for exploring new places. My dream is to
          build something meaningful of my own or give back to the world that
          has shaped me and helped me grow.
        </p>
      </div>

      <div className="overflow-y-auto rounded-xl h-96 border border-white/[0.1] mb-14 sm:mb-52">
        <Timeline content={content} />
      </div>
    </section>
  );
}
