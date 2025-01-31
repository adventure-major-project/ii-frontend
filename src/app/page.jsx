import Image from "next/image";
import { Hero } from "@/components";
import Introduction from "@/components/Introduction";
import CoverMaker from "@/components/CoverMaker";
import Contact from "@/components/Contact";
import AboutUs from "@/components/Aboutus";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <Introduction />
      <CoverMaker />
      <Contact />
      <AboutUs />
    </main>
  );
}
