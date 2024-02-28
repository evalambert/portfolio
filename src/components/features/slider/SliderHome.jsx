// SliderHome.jsx
import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import imagesData from "../../../data/images.json";
import Cursor from "../../common/cursor/Cursor";

function SliderHome({ isSliderVisible }) {
  const [swiper, setSwiper] = useState(null);
  const [hoveredButton, setHoveredButton] = useState(null);
  const [opacity, setOpacity] = useState(0);

  const handleImageChange = (direction) => {
    if (swiper) {
      direction === "prev" ? swiper.slidePrev() : swiper.slideNext();
    }
  };

  // +++ Fade effect +++
  useEffect(() => {
    setOpacity(isSliderVisible ? 1 : 0);
  }, [isSliderVisible]);

  return (
    <>
      <Swiper
        style={{ opacity: opacity, transition: "opacity 0.5s linear" }}
        loop={true}
        spaceBetween={1500}
        slidesPerView={1}
        speed={1200}
        onSwiper={(swiper) => setSwiper(swiper)}
        className="sliderHome h-full"
      >
        {imagesData.map((image, index) => (
          <SwiperSlide key={index} className={`${image["position"]}`}>
            <img
              src={image.src}
              alt={image.alt}
              className={
                image.orientation === "vertical" ? "vertical" : "horizontal"
              }
            />
          </SwiperSlide>
        ))}
      </Swiper>
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
  );
}

export default SliderHome;
