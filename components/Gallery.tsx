import Slide from "./Slide";


const Gallery = () => {

  return (
    <div className="w-full pt-20 lg:pb-32 flex flex-col" id="gallery">
      <div className="pl-4 lg:pl-0">
        <div className="bg-orange-300 w-44 h-5 md:h-9 opacity-20 -mb-5 md:-mb-7" />
        <h3 className="font-bold text-orange-400 text-3xl lg:text-5xl ml-14">
          My Gallery
        </h3>
      </div>
      
      <Slide />
    </div>
  );
};

export default Gallery;
