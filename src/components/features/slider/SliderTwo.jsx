/* import { Swiper, SwiperSlide } from "swiper/react";

import { useState } from "react";
import Cursor from "../../common/Cursor/Cursor";

import "swiper/css";
import { Autoplay } from "swiper/modules";

const SliderTwo = ({ images }) => {
  const [swiper, setSwiper] = useState(null);
  const [hoveredButton, setHoveredButton] = useState(null);

  const handleImageChange = (direction) => {
    if (swiper) {
      direction === "prev" ? swiper.slidePrev() : swiper.slideNext();
    }
  };

  const aspectRatio = 4 / 3;
  return (
    <>
      <Swiper
        loop={true}
        spaceBetween={0}
        slidesPerView={1}
        modules={[Autoplay]}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        className="second-slider"
        onSwiper={(swiper) => setSwiper(swiper)}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <div
              className="swiper-slide"
              style={{ paddingTop: `${100 / aspectRatio}%` }}
            >
              <img
                src={image}
                alt={`Slide ${index}`}
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </div>
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

export default SliderTwo;
 */
/*  */
import { Swiper, SwiperSlide } from "swiper/react";

import { useState, useEffect } from "react";
import Cursor from "../../common/cursor/Cursor";

import "swiper/css";
// import { Autoplay } from "swiper/modules";

const SliderTwo = ({ images }) => {
  const [swiper, setSwiper] = useState(null);
  const [hoveredButton, setHoveredButton] = useState(null);
  const [imagesOrientation, setImagesOrientation] = useState({});

  const handleImageChange = (direction) => {
    if (swiper) {
      direction === "prev" ? swiper.slidePrev() : swiper.slideNext();
    }
  };

  const loadImageOrientation = (image, index) => {
    const img = new Image();
    img.onload = () => {
      const orientation = img.width > img.height ? "horizontal" : "vertical";
      setImagesOrientation((prev) => ({ ...prev, [index]: orientation }));
    };
    img.src = image;
  };

  useEffect(() => {
    images.forEach(loadImageOrientation);
  }, [images]);

  return (
    <>
      <Swiper
        loop={true}
        spaceBetween={3}
        slidesPerView={1}
        centeredSlides={false}
        className="second-slider w-full"
        onSwiper={(swiper) => setSwiper(swiper)}
      >
        {images.map((image, index) => (
          <SwiperSlide
            key={index}
            style={{
              width: imagesOrientation[index] === "vertical" ? "50%" : "100%",
            }}
          >
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

export default SliderTwo;
