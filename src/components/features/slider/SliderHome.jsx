// SliderHome.jsx
import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "./Slider.css";
import "swiper/css";

import { Autoplay } from "swiper/modules";
import imagesData from "../../../data/images.json";
import Cursor from "../../common/cursor/Cursor";

function SliderHome({ isSliderVisible }) {
  const [swiper, setSwiper] = useState(null);
  const [hoveredButton, setHoveredButton] = useState(null);
  const [opacity, setOpacity] = useState(0);
  const [isMobile, setIsMobile] = useState(() => window.innerWidth <= 768);

  const handleImageChange = (direction) => {
    if (swiper) {
      direction === "prev" ? swiper.slidePrev() : swiper.slideNext();
    }
  };

  // +++ Fade effect +++
  useEffect(() => {
    setOpacity(isSliderVisible ? 1 : 0);
  }, [isSliderVisible]);

  // +++ Mobile navigation +++
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <Swiper
        style={{ opacity: opacity, transition: "opacity 0.5s linear" }}
        loop={true}
        spaceBetween={1500}
        slidesPerView={1}
        speed={1200}
        freeMode={isMobile}
        onSwiper={(swiper) => setSwiper(swiper)}
        modules={[Autoplay]}
        autoplay={
          isMobile
            ? {
                delay: 4000,
                disableOnInteraction: false,
              }
            : false
        }
        className="sliderHome h-full"
      >
        {imagesData.map((image, index) => (
          <SwiperSlide key={index} className={`${image["position"]}`}>
            {image.type === "image" ? (
              <img
                src={image.src}
                alt={image.alt}
                className={
                  image.orientation === "vertical" ? "vertical" : "horizontal"
                }
              />
            ) : (
              <div className="flex items-center justify-center h-screen bg-black">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  poster={image.poster}
                  className="h-3/4 border border-black rounded-[10px]"
                >
                  <source src={image.src} type="video/mp4" />
                </video>
              </div>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
      {!isMobile && (
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
    </>
  );
}

export default SliderHome;
