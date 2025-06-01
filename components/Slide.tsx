"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { SwiperOptions } from "swiper/types";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";

import { slideItems } from "@/data";
import { FaCircleArrowLeft, FaCircleArrowRight } from "react-icons/fa6";
import { useRef } from "react";

const swiperParams: SwiperOptions = {
  breakpoints: {
    0: {
      slidesPerView: 1.2,
      spaceBetween: 2,
    },
    640: {
      slidesPerView: 2.2,
      spaceBetween: 5,
    },
    768: {
      slidesPerView: 2.5,
      spaceBetween: 10,
    },
    1024: {
      slidesPerView: 2.5,
      spaceBetween: 20,
    },
    1440: {
      slidesPerView: 3.5,
      spaceBetween: 20,
    },
  },
  speed: 1000,
  scrollbar: { draggable: true },
  modules: [Pagination, Navigation],
};

interface CardProps {
  id: number;
  img: string;
}

const Card = ({ img }: CardProps) => {
  return (
    <div className="relative h-[400px] lg:h-[500px] w-full">
      <Image
        src={img}
        alt="card-image"
        fill
        className="object-cover object-center border-4 border-slate-100/50 grayscale-25"
      />
    </div>
  );
};

const Slide = () => {
  const prevRef = useRef<null>(null);
  const nextRef = useRef<null>(null);
  return (
    <div>
      <div className="flex flex-col md:flex-row items-center justify-around my-7 md:my-10 lg:my-14 gap-7 md:gap-0">
        <p className="text-foreground  lg:text-lg text-center md:text-start px-2 md:px-0">
          I wanted to tell a story on the street. And while often in magazines
          the
          <br className="hidden md:flex" /> act of walkingis portrayed in a
          stereotyped and frankly boring way, this{" "}
          <br className="hidden md:flex" />
          is where looking to the future is for me, this is where the future is
          for me.
        </p>

        <div className="flex items-center gap-10">
          <button
            className="disabled:opacity-20 disabled:cursor-not-allowed cursor-pointer"
            ref={prevRef}
          >
            <FaCircleArrowLeft className="text-yellow-500 size-9 lg:size-12" />
          </button>

          <button
            className="disabled:opacity-20 disabled:cursor-not-allowed cursor-pointer"
            ref={nextRef}
          >
            <FaCircleArrowRight className="text-yellow-500 size-9 lg:size-12" />
          </button>
        </div>
      </div>
      <div className="w-full pl-1 md:pl-10 lg:pl-20 xl:pl-0">
        <Swiper
          {...swiperParams}
          navigation={{
            enabled: true,
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onBeforeInit={(swiper) => {
            if (swiper.params.navigation) {
              const navigation = swiper.params.navigation as {
                prevEl?: null;
                nextEl?: null;
              };

              navigation.prevEl = prevRef.current;
              navigation.nextEl = nextRef.current;
            }
          }}
        >
          {slideItems.map((item) => (
            <SwiperSlide key={item.id}>
              <Card {...item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Slide;
