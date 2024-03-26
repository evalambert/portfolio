import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import Cursor from "../common/cursor/Cursor";

const NewSliderProject = ({ className, images, isOpen }) => {
  const [swiper, setSwiper] = useState(null);
  const [hoveredButton, setHoveredButton] = useState(null);

  // +++ Activate autoplay on open +++
  useEffect(() => {
    if (
      swiper &&
      swiper.autoplay &&
      swiper.autoplay.start &&
      swiper.autoplay.stop
    ) {
      if (isOpen) {
        swiper.autoplay.start();
      } else {
        swiper.autoplay.stop();
      }
    }
  }, [isOpen, swiper]);

  // +++ Stop autoplay on slider video +++
  const allVideos = images.every((image) => image.type === "video");
  const autoplayConfig = !allVideos
    ? { delay: 3000, disableOnInteraction: false }
    : false;

  // +++ Go to first slide when project is opened +++
  useEffect(() => {
    if (swiper && isOpen) {
      swiper.slideTo(0, 0);
    }
  }, [isOpen, swiper]);

  // +++ Image change +++
  const handleImageChange = (direction) => {
    if (swiper && images.length > 1) {
      direction === "prev" ? swiper.slidePrev() : swiper.slideNext();
    }
  };

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
            onMouseEnter={() => setHoveredButton("prev")}
            onMouseLeave={() => setHoveredButton(null)}
            onClick={() => handleImageChange("prev")}
          ></button>
          <button
            className="absolute right-0 top-0 z-10 h-full w-1/2 cursor-none md:block hidden"
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

export default NewSliderProject;
