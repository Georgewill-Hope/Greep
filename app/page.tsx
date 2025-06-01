import About from "@/components/About";
import Exhibition from "@/components/Exhibition";
import Gallery from "@/components/Gallery";
import Hero from "@/components/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <div className="container mx-auto">
      <Hero />
      <About />
      <Gallery />
      <Exhibition />
    </div>
  );
}
