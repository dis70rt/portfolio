import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import Stack from "@/components/Stack";
import { Divider } from "@/components/UI/Divider";
import { FloatingNav } from "@/components/UI/FloatingNav";
import { FaHome } from "react-icons/fa";

export default function Home() {
  return (
    <main
      className="relative bg-black-100 flex justify-center items-center
      flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={[{name: "Home", link: '/', icon: <FaHome/>}]} />
        <Hero/>
        <Stack/>
        <Divider/>
        {/* <Grid/> */}
        
      </div>
    </main>
  );
}
