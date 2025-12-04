import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

// Sample categories / courses to explore
const exploreItems = [
  {
    id: 1,
    title: "Programming for Kids",
    description: "Learn Python, Scratch, and JavaScript in a fun way!",
    image: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg",
  },
  {
    id: 2,
    title: "Web Development",
    description: "HTML, CSS, and React projects for beginners.",
    image: "https://img.freepik.com/free-photo/programming-background-collage_23-2149901782.jpg",
  },
  {
    id: 3,
    title: "Game Development",
    description: "Create games using Scratch and JavaScript.",
    image: "https://pbs.twimg.com/profile_images/1080557016463147008/sPN7F0Dd_400x400.jpg",
  },
  {
    id: 4,
    title: "Robotics & AI",
    description: "Introduction to Robotics and AI for kids.",
    image: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
  },
];

const ExplorePage = () => {
  const navigate = useNavigate();

  return (
    <section className="py-16 bg-[#1B3C53] min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <h1 className="text-4xl md:text-5xl font-bold text-center text-[#D2C1B6] mb-12">
          Explore Now
        </h1>

        {/* Explore Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {exploreItems.map((item) => (
            <div
              key={item.id}
              className="bg-[#234C6A] rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer flex flex-col"
            >
              {/* Image */}
              <div className="flex justify-center items-center bg-[#1B3C53] p-4 h-48">
                <img src={item.image} alt={item.title} className="object-contain h-full" />
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col flex-1">
                <h3 className="text-xl font-semibold text-[#D2C1B6] mb-2">{item.title}</h3>
                <p className="text-[#D2C1B6]/80 mb-4 flex-1">{item.description}</p>
                <button
                  onClick={() => navigate(`/skill/${item.id}`)}
                  className="mt-auto flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#1B3C53] to-[#234C6A] text-[#D2C1B6] font-medium hover:scale-105 hover:shadow-lg transition-transform duration-300"
                >
                  Explore <FaArrowRight />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExplorePage;
