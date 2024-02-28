import { Swiper, SwiperSlide } from "swiper/react";
import { useState } from "react";
import Cursor from "../../common/cursor/Cursor";

import "swiper/css";
import { Autoplay } from "swiper/modules";


const SliderProject = ({ images }) => {
  const [swiper, setSwiper] = useState(null);
  const [hoveredButton, setHoveredButton] = useState(null);

  const handleImageChange = (direction) => {
    if (swiper) {
      direction === "prev" ? swiper.slidePrev() : swiper.slideNext();
    }
  };

  return (
    <>
      <Swiper
        loop={true}
        spaceBetween={0}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        speed={700}
        onSwiper={(swiper) => setSwiper(swiper)}
        modules={[Autoplay]}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <img src={image} alt={`Slide ${index}`} />
          </SwiperSlide>
        ))}

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
      </Swiper>

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
};

export default SliderProject;
