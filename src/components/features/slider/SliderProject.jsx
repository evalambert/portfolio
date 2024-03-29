import { Swiper, SwiperSlide } from "swiper/react";
import { useState, useEffect } from "react";
import Cursor from "../../common/cursor/Cursor";

import "swiper/css";
import { Autoplay } from "swiper/modules";

const SliderProject = ({ images }) => {
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
  // Vérifier si toutes les entrées sont des vidéos pour annuler l'autoplay du slide

  return (
    <>
      <Swiper
        loop={images.length > 1}
        spaceBetween={0}
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
        {images.map((image, index) => {
          return (
            <SwiperSlide key={index}>
              {image.type === "image" ? (
                <img src={image.src} alt={`Slide ${index}`} />
              ) : (
                <div style={{ aspectRatio: "7 / 5" }} className="p-5 bg-black">
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    poster={image.poster}
                    className="rounded-[6px]"
                  >
                    <source src={image.src} type="video/mp4" />
                  </video>
                </div>
              )}
            </SwiperSlide>
          );
        })}
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
          </>
        )}
      </Swiper>
      {!isMobile && images.length > 1 && (
        <Cursor
          text={
            hoveredButton === "prev"
              ? "Prev"
              : hoveredButton === "next"
              ? "Next"
              : ""
          }
        />
      )}
    </>
  );
};

export default SliderProject;
