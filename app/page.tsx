"use client";
import { AboutMe } from "@/components/AboutMe";
import { Contact } from "@/components/Contact";
import Copyright from "@/components/Copyright";
import Hero from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { SplashScreen } from "@/components/SplashScreen";
import Stack from "@/components/Stack";
import { Divider } from "@/components/UI/Divider";
import { FloatingNav } from "@/components/UI/FloatingNav";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { FaCode, FaHome, FaPhone, FaUser } from "react-icons/fa";
import { AnimatePresence, motion } from "framer-motion";

export default function Home() {
  const pathName = usePathname();
  const isHome = pathName === "/";
  const [isLoading, setIsLoading] = useState(isHome);

  const [, setShowSplash] = useState(true);

  useEffect(() => {
    if (isLoading) {
      setTimeout(() => {
        setIsLoading(false);
        
      }, 3000);
    }
  }, [isLoading]);

  return (
    <AnimatePresence>
      {isLoading && isHome ? (
        <SplashScreen setShowSplash={setShowSplash} />
      ) : (
        <motion.div
          className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-8 px-5"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1, transition: { duration: 0 } }}
          exit={{ opacity: 0, transition: { duration: 0.5 } }}
        >
          {/* Home Page Content */}
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
            <Contact />
            <Copyright />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
