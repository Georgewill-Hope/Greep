import george from "@/public/pic-9.avif";
import Image from "next/image";

const About = () => {
  return (
    <div className="w-full flex flex-col lg:flex-row items-center gap-10 xl:gap-32 pt-20 lg:pt-32 lg:pb-32" id="about">
      <div className="relative h-[70vh] lg:flex-1/3 lg:ml-56 w-full">
        <Image
          src={george}
          alt="pics"
          fill
          className="object-cover object-center grayscale-75 border-b-4 lg:border-b-8 border-orange-400 lg:rounded-b-lg"
        />
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/40"/>
        <h2 className="text-2xl lg:text-5xl text-orange-400 absolute -top-10 left-3 lg:-left-56 font-bold text-shadow-black/20 text-shadow-lg">
          About <br /> Georgewill Hope
        </h2>
      </div>

      <div className="lg:flex-1/2 flex flex-col gap-6 lg:gap-10 text-foreground lg:text-lg px-4 lg:px-0">
        <div className="h-1 lg:h-2 w-52 bg-orange-400 rounded-full" />
        <p>
          Photograhper and curator based in Belguim.Being sensitive to details
          of everyday, my work revolves around floating moments and allegorical
          scenes. Nature, memory and family are notions that interest me in a
          symbolic form and their narrative power.
        </p>
        <p>
          Moreover, my humanist approach and idealisation of women set my apart
          from the other photographers, as my privileges the soul and the
          personality
        </p>
      </div>
    </div>
  );
};

export default About;
