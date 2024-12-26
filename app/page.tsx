import { AboutMe } from "@/components/AboutMe";
import { Contact } from "@/components/Contact";
import Copyright, {  } from "@/components/Copyright";
import Hero from "@/components/Hero";
import { Projects } from "@/components/Projects";
import Stack from "@/components/Stack";
import { Divider } from "@/components/UI/Divider";
import { FloatingNav } from "@/components/UI/FloatingNav";
import { FaCode, FaHome, FaPhone, FaUser } from "react-icons/fa";

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
            { name: "Projects", link: "#projects", icon: <FaCode /> },
            { name: "About Me", link: "#about", icon: <FaUser /> },
            { name: "Contact", link: "#contact", icon: <FaPhone /> },
          ]}
        />
        <Hero />
        <Divider />
        <Stack />
        <Divider />
        <Projects />
        <Divider />
        <AboutMe />
        <Contact/>
        <Copyright/>
      </div>
    </main>
  );
}
