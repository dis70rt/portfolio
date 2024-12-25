import { AboutMe } from "@/components/AboutMe";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import { Projects } from "@/components/Projects";
import Stack from "@/components/Stack";
import { Divider } from "@/components/UI/Divider";
import { FloatingNav } from "@/components/UI/FloatingNav";
import { FaHome, FaProjectDiagram } from "react-icons/fa";

export default function Home() {
  return (
    <main
      className="relative bg-black-100 flex justify-center items-center
      flex-col overflow-hidden mx-auto sm:px-8 px-5"
    >
      <div className="w-full">
        <FloatingNav
          navItems={[
            { name: "Home", link: "/", icon: <FaHome /> },
            { name: "Projects", link: "#projects", icon: <FaProjectDiagram /> },
            { name: "About Me", link: "#about", icon: <FaHome /> },
            { name: "Contact", link: "#contact", icon: <FaHome /> },
          ]}
        />
        <Hero />
        <Divider />
        <Stack />
        <Divider />
        <Projects />
        <Divider />
        <AboutMe />
        <Divider />
      </div>
    </main>
  );
}
