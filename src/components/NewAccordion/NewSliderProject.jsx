// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { useState, useEffect } from "react";
import Cursor from "../common/cursor/Cursor";

// Import Swiper styles
import "swiper/css";
import { Autoplay } from "swiper/modules";

const NewSliderProject = ({ className, images }) => {
  const [swiper, setSwiper] = useState(null);
  const [hoveredButton, setHoveredButton] = useState(null);
  const [isMobile, setIsMobile] = useState(() => window.innerWidth <= 768);

  // +++ Image chang +++
  const handleImageChange = (direction) => {
    if (swiper && images.length > 1) {
      direction === "prev" ? swiper.slidePrev() : swiper.slideNext();
    }
  };

  // +++ Mobile navigation +++
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // +++ Stop autoplay on slider video +++
  const allVideos = images.every((image) => image.type === "video");

  return (
    <Swiper
      className={`${className}`}
      loop={images.length > 1}
      spaceBetween={0}
      slidesPerView={1}
      modules={[Autoplay]}
      autoplay={
        !allVideos
          ? {
              delay: 3000,
              disableOnInteraction: false,
            }
          : false
      } // Désactive l'autoplay si toutes les entrées sont des vidéos
      speed={700}
      onSwiper={(swiper) => setSwiper(swiper)}
    >
      {images.map((img, index) => (
        <SwiperSlide key={index}>
          {img.type === "image" ? (
            <img
              className="w-full h-auto"
              src={img.src}
              alt={`Slide ${index}`}
            />
          ) : (
            <div className="w-full h-full p-5 bg-black">
              <video
                autoPlay
                loop
                muted
                playsInline
                poster={img.poster}
                className="rounded-[6px]"
              >
                <source src={img.src} type="video/mp4" />
              </video>
            </div>
          )}
        </SwiperSlide>
      ))}
      {!isMobile && images.length > 1 && (
        <>
          <button
            className="absolute left-0 top-0 z-10 h-full w-1/2 cursor-none"
            onMouseEnter={() => setHoveredButton("prev")}
            onMouseLeave={() => setHoveredButton(null)}
            onClick={() => handleImageChange("prev")}
          ></button>
          <button
            className="absolute right-0 top-0 z-10 h-full w-1/2 cursor-none"
            onMouseEnter={() => setHoveredButton("next")}
            onMouseLeave={() => setHoveredButton(null)}
            onClick={() => handleImageChange("next")}
          ></button>
          <Cursor
            text={
              hoveredButton === "prev"
                ? "Prev"
                : hoveredButton === "next"
                ? "Next"
                : ""
            }
          />
        </>
      )}
    </Swiper>
  );
};

export default NewSliderProject;
