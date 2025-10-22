import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import img1 from "../assets/childhood-modern-technology-electronic-gadgets-concept-serious-handsome-schoolboy-stylish-clothes-holding-open-generic-laptop-with-confident-look-surfing-internet-while-doing-homework.jpg"
import img2 from "../assets/little-boy-participating-online-class.jpg"
import img3 from "../assets/little-boy-sitting-with-girl-classroom-playing-with-cube-puzzle.jpg"
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
        autoplay={{ delay: 6000, disableOnInteraction: false }}
        loop={true}
        className="h-[70vh] md:h-[80vh] lg:h-[85vh]"
      >
        {/* --- Slide 1 --- */}
        <SwiperSlide>
          <div className="w-full h-full relative">
            <img
              src={img1}
              alt="Slide 1"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#000000a6] to-[#0000004f] flex flex-col justify-center items-center text-center text-white px-6">
              <h1 className="text-3xl md:text-5xl font-extrabold mb-4 drop-shadow-lg">
                🌈 Welcome to <span className="text-yellow-300">CodeKids</span>
              </h1>
              <p className="text-lg md:text-2xl font-light mb-6">
                Fun way to <span className="text-blue-300 font-semibold">Learn, Code, and Create!</span>
              </p>
              <button className="bg-gradient-to-r from-pink-500 to-yellow-400 px-6 py-3 rounded-full font-bold text-white text-lg shadow-lg hover:scale-105 transition-transform">
                Start Learning 🚀
              </button>
            </div>
          </div>
        </SwiperSlide>

        {/* --- Slide 2 --- */}
        <SwiperSlide>
          <div className="w-full h-full relative">
            <img
              src={img2}
              alt="Slide 2"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#000000b8] to-[#00000050] flex flex-col justify-center items-center text-center text-white px-6">
              <h1 className="text-3xl md:text-5xl font-extrabold mb-4 drop-shadow-lg">
                ✨ Explore the World of Code
              </h1>
              <p className="text-lg md:text-xl mb-6">
                Create games, stories, and apps — all while having <span className="text-yellow-300 font-semibold">fun!</span>
              </p>
              <button className="bg-gradient-to-r from-blue-500 to-green-400 px-6 py-3 rounded-full font-bold text-white text-lg shadow-lg hover:scale-105 transition-transform">
                Explore Now 🌍
              </button>
            </div>
          </div>
        </SwiperSlide>

        {/* --- Slide 3 --- */}
        <SwiperSlide>
          <div className="w-full h-full relative">
            <img
              src={img3}
              alt="Slide 3"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#000000a6] to-[#0000004f] flex flex-col justify-center items-center text-center text-white px-6">
              <h1 className="text-3xl md:text-5xl font-extrabold mb-4 drop-shadow-lg">
                🧠 Build Smart. Dream Big.
              </h1>
              <p className="text-lg md:text-xl mb-6">
                Step into the future with <span className="text-pink-400 font-semibold">Code & Creativity!</span>
              </p>
              <button className="bg-gradient-to-r from-purple-500 to-pink-400 px-6 py-3 rounded-full font-bold text-white text-lg shadow-lg hover:scale-105 transition-transform">
                Join the Fun 💫
              </button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Hero;
