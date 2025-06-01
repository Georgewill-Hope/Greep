import image1 from "@/public/pic-16.avif";
import image2 from "@/public/pic-17.avif";
import image3 from "@/public/pic-18.avif";

export interface NavbarProps {
  id: number;
  title: string;
  path: string;
}

export interface SlideType {
  id: number;
  img: any;
}

export const navItems: NavbarProps[] = [
  {
    id: 1,
    title: "About",
    path: "#about",
  },
  {
    id: 2,
    title: "Gallery",
    path: "#gallery",
  },
  {
    id: 3,
    title: "Exhibition",
    path: "#exhibition",
  },
  {
    id: 4,
    title: "Contact",
    path: "#contact",
  },
];

export const slideItems: SlideType[] = [
  {
    id: 1,
    img: image1,
  },
  {
    id: 2,
    img: image2,
  },
  {
    id: 3,
    img: image3,
  },
  {
    id: 4,
    img: image3,
  },
  {
    id: 5,
    img: image3,
  },
  {
    id: 6,
    img: image3,
  },
  {
    id: 7,
    img: image3,
  },
  {
    id: 8,
    img: image3,
  },
  {
    id: 9,
    img: image3,
  },
];
