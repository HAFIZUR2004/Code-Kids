import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

const Hero = () => {
  return (
    <section className="w-full">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 7000, disableOnInteraction: false }}
        loop={true}
        className="h-[60vh] md:h-[70vh] lg:h-[80vh]" // Hero height responsive
      >
        <SwiperSlide>
          <div className="w-full h-full relative">
            <img
              src="https://cdn.magloft.com/github/swiper/images/page-001.jpg"
              alt="Slide 1"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col justify-center items-center text-center text-white px-4">
              <h1 className="text-3xl md:text-5xl font-bold mb-2">
                Welcome to CodeKids
              </h1>
              <p className="text-sm md:text-lg">
                Learn, Code, and Grow your skills!
              </p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="w-full h-full relative">
            <img
              src="https://cdn.magloft.com/github/swiper/images/page-002.jpg"
              alt="Slide 2"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col justify-center items-center text-center text-white px-4">
              <h1 className="text-3xl md:text-5xl font-bold mb-2">
                Explore New Horizons
              </h1>
              <p className="text-sm md:text-lg">
                Your journey to coding starts here.
              </p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="w-full h-full relative">
            <img
              src="https://cdn.magloft.com/github/swiper/images/page-003.jpg"
              alt="Slide 3"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col justify-center items-center text-center text-white px-4">
              <h1 className="text-3xl md:text-5xl font-bold mb-2">
                Build Your Future
              </h1>
              <p className="text-sm md:text-lg">
                Step by step learning experience.
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Hero;
