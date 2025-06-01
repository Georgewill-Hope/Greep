import Image from "next/image";
import Image1 from "@/public/pic-15.avif";
import Image2 from "@/public/pic-14.avif";
import Image3 from "@/public/pic-18.avif";
import Image4 from "@/public/pic-17.avif";
import Image5 from "@/public/pic-16.avif";
import Image6 from "@/public/pic-19.avif";
import Image7 from "@/public/pic-20.avif";

const Exhibition = () => {
  return (
    <div className="w-full py-20 flex flex-col" id="exhibition">
      <div className="pl-4 lg:pl-0">
        <div className="bg-orange-300 w-44 h-5 md:h-9 opacity-20 -mb-5 md:-mb-7" />
        <h4 className="font-bold text-orange-400 text-3xl lg:text-5xl ml-14">
          Exhibitions
        </h4>
      </div>
      <p className="text-foreground mt-10 lg:mt-14 lg:text-lg self-center text-center md:text-start px-2 md:px-0">
        Allegories of the Visisble extends the conceptual, theoritical, and
        critical
        <br className="hidden md:flex"/>
        orientaions of "Currency" through a constellation of ideas on the
        mediatory
        <br className="hidden md:flex"/>
        status of the image and it's strategic possibilities for knowledge
      </p>
      <div className="min-h-[80vh] lg:min-h-[100vh] grid grid-cols-3 gap-1 md:gap-2 lg:gap-5 lg:px-5 mt-10 lg:mt-20">
        <div className="relative h-full w-full row-span-2  col-span-2 md:col-span-1">
          <Image
            src={Image1}
            alt="card-image"
            fill
            className="object-cover object-center border-4 border-slate-100/50 grayscale-25"
          />
        </div>
        <div className="relative h-full w-full md:row-span-1">
          <Image
            src={Image2}
            alt="card-image"
            fill
            className="object-cover object-center border-4 border-slate-100/50 grayscale-25"
          />
        </div>
        <div className="relative h-full w-full row-span-2 md:row-span-1">
          <Image
            src={Image3}
            alt="card-image"
            fill
            className="object-cover object-center border-4 border-slate-100/50 grayscale-25"
          />
        </div>
        <div className="relative h-full w-full lg:col-span-2">
          <Image
            src={Image4}
            alt="card-image"
            fill
            className="object-cover object-center border-4 border-slate-100/50 grayscale-25"
          />
        </div>
        <div className="relative h-full w-full md:row-span-2 lg:row-span-1">
          <Image
            src={Image5}
            alt="card-image"
            fill
            className="object-cover object-center border-4 border-slate-100/50 grayscale-25"
          />
        </div>
        <div className="relative h-full w-full">
          <Image
            src={Image6}
            alt="card-image"
            fill
            className="object-cover object-center border-4 border-slate-100/50 grayscale-25"
          />
        </div>
        <div className="relative h-full w-full col-span-2 md:col-span-1">
          <Image
            src={Image7}
            alt="card-image"
            fill
            className="object-cover object-center border-4 border-slate-100/50 grayscale-25"
          />
        </div>
      </div>
    </div>
  );
};

export default Exhibition;
