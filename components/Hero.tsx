import Image from "next/image";
import bgImage from "@/public/pic-11.avif";
import leftImage from "@/public/pic-3.jpeg"
import centerImage from "@/public/pic-12.avif"
import rightImage from "@/public/pic-6.webp"
import Link from "next/link";

const Hero = () => {
  return (
    <section className="w-full flex flex-col lg:flex-row">
      <div className="lg:flex-1/3 xl:flex-1/2 relative w-full h-[60vh] lg:h-[100vh] ">
        <Image
          src={bgImage}
          alt="hero-img"
          fill
          className="object-cover object-center lg:object-bottom lg:rounded-xl"
          priority
        />
        
      </div>
      <div className="flex-1/2 flex flex-col lg:-ml-6 z-20 lg:pr-10 px-2 py-10 lg:py-0">
        <p className="xl:text-xl self-start lg:self-center text-orange-400  mb-12 font-semibold">
          #1 photo of the year winners
        </p>
        <h1 className="text-orange-400 dark:text-white self-center lg:self-start text-center lg:text-start text-4xl lg:text-6xl xl:text-7xl font-bold tracking-wider lg:tracking-normal mb-5 lg:mb-0">
          Photography <br className="hidden lg:flex" /> helps people{" "}
          <br className="hidden lg:flex" /> to see
        </h1>
        <p className="xl:text-lg self-center lg:self-end text-foreground tracking-wider text-center lg:text-start">
          From inspiring people's story to impactful{" "}
          <br className="hidden md:flex" /> messages. I create head-turning
          photograph <br className="hidden md:flex" /> that does the right thing
          in the right place, <br className="hidden md:flex" /> at the right
          time to unlock possibilities.
        </p>
        <div className="flex self-center mt-10">
          <div className="relative size-32 -rotate-12 -mr-14">
            <Image
              src={bgImage}
              alt="card-image"
              fill
              className="object-cover object-center rounded-lg grayscale-100 border-4"
            />
          </div>
          <div className="relative size-36 z-20">
            <Image
              src={centerImage}
              alt="card-image"
              fill
              className="object-cover object-center rounded-lg grayscale-75 border-4"
            />
          </div>
          <div className="relative size-32 rotate-12 -ml-14">
            <Image
              src={rightImage}
              alt="card-image"
              fill
              className="object-cover object-center rounded-lg grayscale-100 border-4"
            />
          </div>
          <div className="relative size-32 ml-10 hidden md:flex">
            <Image
              src={leftImage}
              alt="card-image"
              fill
              className="object-cover object-center rounded-lg grayscale-100 border-4"
            />
          </div>
        </div>
        <Link
          href="#contact"
          className="bg-orange-400 w-fit self-center px-10 py-4 rounded-lg font-semibold uppercase mt-10 lg:mt-7 text-sm lg:text-lg"
        >
          Contact Now!
        </Link>
      </div>
    </section>
  );
};

export default Hero;
