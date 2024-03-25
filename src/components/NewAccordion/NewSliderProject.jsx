// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

const NewSliderProject = ({ className, images }) => {
  return (
    <Swiper className={`${className}`} spaceBetween={0} slidesPerView={1}>
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
    </Swiper>
  );
};

export default NewSliderProject;
