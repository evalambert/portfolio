// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { useState } from "react";
import Cursor from "../common/cursor/Cursor";
import "swiper/css";
import { Autoplay } from "swiper/modules";

const SliderProject = ({ className, images }) => {
  const [swiper, setSwiper] = useState(null);
  const [hoveredButton, setHoveredButton] = useState(null);

  // +++ Image change +++
  const handleImageChange = (direction) => {
    if (swiper && images.length > 1) {
      direction === "prev" ? swiper.slidePrev() : swiper.slideNext();
    }
  };

  // +++ Stop autoplay on slider video +++
  const allVideos = images.every((image) => image.type === "video");

  // +++ Autoplay config +++
  const autoplayConfig = !allVideos
  ? {
      delay: 3000,
      disableOnInteraction: false,
    }
    : false;
  // Désactivation de l'autoplay si le projet n'est pas ouvert ou si toutes les images sont des vidéos


  return (
    <Swiper
      className={`${className}`}
      loop={images.length > 1}
      spaceBetween={0}
      slidesPerView={1}
      loading="lazy"
      modules={[Autoplay]}
      autoplay={autoplayConfig} 
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
      {images.length > 1 && (
        <>
          <button
            className="absolute left-0 top-0 z-10 h-full w-1/2 cursor-none md:block hidden"
            aria-label="Previous slide"
            onMouseEnter={() => setHoveredButton("prev")}
            onMouseLeave={() => setHoveredButton(null)}
            onClick={() => handleImageChange("prev")}
          ></button>
          <button
            className="absolute right-0 top-0 z-10 h-full w-1/2 cursor-none md:block hidden"
            aria-label="Next slide"
            onMouseEnter={() => setHoveredButton("next")}
            onMouseLeave={() => setHoveredButton(null)}
            onClick={() => handleImageChange("next")}
          ></button>
          <Cursor
            className="md:block hidden"
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

export default SliderProject;
