import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { useNavigate } from "react-router-dom";

import img1 from "../assets/bannerimg1.webp";
import img2 from "../assets/bannerimg2.webp";
import img3 from "../assets/bannerimg3.png";

const Hero = () => {
  const navigate = useNavigate();

  const slides = [
    {
      img: img1,
      title: "🌈 Welcome to CodeKids",
      highlight: "CodeKids",
      subtitle: "Fun way to Learn, Code, and Create!",
      button: "Start Learning 🚀",
      buttonRoute: "/items", // Navigate to All Items
      buttonColors: "from-[#456882] to-[#234C6A]",
    },
    {
      img: img2,
      title: "✨ Explore the World of Code",
      subtitle: "Create games, stories, and apps — all while having fun!",
      button: "Explore Now 🌍",
      buttonRoute: "/explore", // Navigate to Explore page
      buttonColors: "from-[#1B3C53] to-[#456882]",
    },
    {
      img: img3,
      title: "🧠 Build Smart. Dream Big.",
      subtitle: "Step into the future with Code & Creativity!",
      button: "Join the Fun 💫",
      buttonRoute: "/items", // Navigate to All Items
      buttonColors: "from-[#234C6A] to-[#D2C1B6]",
    },
  ];

  return (
    <section className="w-full">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 6000, disableOnInteraction: false }}
        loop={true}
        className="h-[60vh] md:h-[70vh] lg:h-[75vh]"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="w-full h-full relative">
              <img
                src={slide.img}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover"
              />

              <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-[#D2C1B6] px-6">
                <h1 className="text-3xl md:text-5xl font-extrabold mb-4 drop-shadow-md">
                  {slide.title.split(" ").map((word, i) =>
                    word === slide.highlight ? (
                      <span key={i} className="text-[#456882]">
                        {word}{" "}
                      </span>
                    ) : (
                      word + " "
                    )
                  )}
                </h1>
                <p className="text-lg md:text-2xl font-light mb-6 drop-shadow-sm">
                  {slide.subtitle}
                </p>
                <button
                  onClick={() => navigate(slide.buttonRoute)} // navigate to page
                  className={`bg-gradient-to-r ${slide.buttonColors} px-6 py-3 rounded-full font-bold text-white text-lg shadow-lg hover:scale-105 transition-transform`}
                >
                  {slide.button}
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Hero;
