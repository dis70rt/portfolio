import { PinContainer } from "./UI/Pin";
import { projects } from "@/data/index";

import Image from "next/image";

export const Projects = () => {
  return (
    <section id="projects">
      <div className="relative mb-28">
        <h1 className="heading">
          A small selection of{"\n"}
          <span className="text-purple">recent projects</span>
        </h1>
        {}
        <div className="flex flex-wrap justify-center items-center gap-16 mt-10">
          {projects.map((item) => (
            <div
              className="lg:min-h-[32.5rem] lg:h-[25rem] h-[20rem] flex mx-auto items-center justify-center sm:w-96 w-[80vw] mb-8"
              key={item.id}
            >
              <PinContainer title={item.link} href={item.href}>
                <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] lg:mb-10 mb-2">
                  <div
                    className="relative w-full h-full overflow-hidden lg:rounded-3xl"
                    style={{ backgroundColor: "#13162D" }}
                  >
                    <Image src="/bg.png" alt="bgimg" layout="fill"/>
                  </div>
                  {item.img ? (
                    <Image
                      src={item.img}
                      alt="cover"
                      layout="fill"
                      className="z-10 absolute bottom-0"
                    />
                  ) : null}
                </div>

                <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                  {item.title}
                </h1>

                <p
                  className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2"
                  style={{
                    color: "#BEC1DD",
                    margin: "1vh 0",
                  }}
                >
                  {item.des}
                </p>

                <div className="flex items-center justify-between mt-7 mb-3">
                  <div className="flex items-center">
                    {item.iconLists.map((icon, index) => (
                      <div className="p-2" key={index}>
                        {icon}
                      </div>
                    ))}
                  </div>
                </div>
              </PinContainer>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
