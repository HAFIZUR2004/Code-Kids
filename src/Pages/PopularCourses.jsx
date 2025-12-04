import React from "react";
import { FaStar, FaDollarSign } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const popularCourses = [
  {
    id: 1,
    title: "Introduction to Python",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1200px-Python-logo-notext.svg.png",
    rating: 4.8,
    price: 49,
  },
  {
    id: 2,
    title: "Fun with HTML & CSS",
    image:
      "https://img.freepik.com/free-photo/programming-background-collage_23-2149901782.jpg",
    rating: 4.6,
    price: 39,
  },
  {
    id: 3,
    title: "Scratch Programming Basics",
    image:
      "https://pbs.twimg.com/profile_images/1080557016463147008/sPN7F0Dd_400x400.jpg",
    rating: 4.9,
    price: 29,
  },
  {
    id: 4,
    title: "JavaScript for Kids",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
    rating: 4.7,
    price: 45,
  },
];

const PopularCourses = () => {
  const navigate = useNavigate(); // useNavigate hook

  return (
    <section className="py-16 bg-[#1B3C53]">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-[#D2C1B6] mb-12">
          Popular Courses for Kids
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
          {popularCourses.map((course) => (
            <div
              key={course.id}
              className="bg-[#234C6A] rounded-3xl border border-[#456882] shadow-md 
                         hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 
                         overflow-hidden cursor-pointer flex flex-col h-full"
            >
              <div className="overflow-hidden flex justify-center items-center bg-[#1B3C53] p-4">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-48 sm:h-52 md:h-56 lg:h-60 object-contain"
                />
              </div>

              <div className="p-4 sm:p-5 flex flex-col justify-between flex-1 text-center text-[#D2C1B6]">
                <h3 className="text-lg sm:text-xl font-semibold">{course.title}</h3>

                <div className="flex justify-center gap-4 sm:gap-6 mt-4 font-medium">
                  <div className="flex items-center gap-1 text-yellow-400">
                    <FaStar />
                    {course.rating.toFixed(1)}
                  </div>
                  <div className="flex items-center gap-1 text-green-400">
                    <FaDollarSign />
                    {course.price}
                  </div>
                </div>

                {/* View Details Button */}
                <button
                  onClick={() => navigate(`/skill/${course.id}`)} // Navigate to SkillDetails
                  className="mt-6 w-full bg-gradient-to-r from-[#1B3C53] to-[#234C6A] text-[#D2C1B6] 
                             px-6 py-2.5 rounded-full hover:scale-105 hover:shadow-lg transition-transform duration-300"
                >
                  View Details +
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularCourses;
