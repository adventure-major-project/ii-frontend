
import { Hero } from "@/components";
import Introduction from "@/components/Introduction";
import CoverMaker from "@/components/CoverMaker";
import Contact from "@/components/Contact";
import AboutUs from "@/components/Aboutus";
import Mandw from "@/components/Mandw";
import ExptSetupPage from "@/components/ExptSetupPage";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <Introduction />
      <CoverMaker />
      <ExptSetupPage />
     <Mandw />
      <Contact />
      <AboutUs />
    </main>
  );
}
