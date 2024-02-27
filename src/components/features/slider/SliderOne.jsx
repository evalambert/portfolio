import { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "../src/index.css";
import imagesData from "../images.json";

function SliderOne() {
  const [currentIndex, setCurrentIndex] = useState(0); // Stock index image actuelle
  const swiperRef = useRef(null); // Référence pour accéder au composant Swiper

  // Function Changement d'image
  const handleImageChange = (newIndex) => {
    if (swiperRef.current) {
      const currentSlide = swiperRef.current.slides[currentIndex];
      const newSlide = swiperRef.current.slides[newIndex];

      if (currentSlide && newSlide) {
        currentSlide.querySelector("img").classList.add("invisible");
        newSlide.querySelector("img").classList.remove("invisible");

        swiperRef.current.slideTo(newIndex);
        setCurrentIndex(newIndex);
      }
    }
  };

  // Function image précédente
  const handlePreviousImage = () => {
    if (currentIndex > 0) {
      handleImageChange(currentIndex - 1);
    }
  };

  // Function image suivante
  const handleNextImage = () => {
    if (currentIndex < imagesData.length - 1) {
      handleImageChange(currentIndex + 1);
    }
  };

  return (
    <div className="relative h-screen">
      <Swiper
        modules={[EffectFade]}
        effect="fade"
        spaceBetween={50}
        slidesPerView={1}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        className="h-full"
      >
        {imagesData.map((image, index) => (
          <SwiperSlide key={index} className="flex justify-end">
            <img src={image.src} alt={image.alt} className="w-auto h-full" />
          </SwiperSlide>
        ))}
      </Swiper>
      <button
        className="absolute z-10 left-0 top-0 w-1/2 h-full cursor-pointer"
        onClick={handlePreviousImage}
      ></button>
      <button
        className="absolute z-10 right-0 top-0 w-1/2 h-full cursor-pointer"
        onClick={handleNextImage}
      ></button>
    </div>
  );
}

export default SliderOne;
