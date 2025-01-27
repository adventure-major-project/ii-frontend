import Image from "next/image";
import { Hero } from "@/components";
import Introduction from "@/components/Introduction";
import CoverMaker from "@/components/CoverMaker";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <Introduction />
      <CoverMaker />
    </main>
  );
}
