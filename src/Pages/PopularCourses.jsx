import React from "react";
import { FaStar, FaDollarSign } from "react-icons/fa"; // ⭐ & 💰 icons
import { TbChartBarPopular } from "react-icons/tb";

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
];

const PopularCourses = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        
          <h1 className="text-4xl font-bold text-center text-gray-800 mb-10">
          Popular Courses for Kids 
        </h1>
        
       

        {/* Courses Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {popularCourses.map((course) => (
            <div
              key={course.id}
              className="bg-white rounded-3xl border border-gray-100 shadow-md hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 overflow-hidden cursor-pointer"
            >
              {/* Image */}
              <div className="overflow-hidden">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-56 object-cover transform hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-6 text-center">
                <h3 className="text-lg font-semibold text-gray-800">
                  {course.title}
                </h3>

                {/* Rating & Price */}
                <div className="flex justify-center gap-6 mt-4 text-gray-600">
                  <div className="flex items-center gap-1">
                    <FaStar className="text-yellow-400" />
                    <span className="font-medium">{course.rating.toFixed(1)}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <FaDollarSign className="text-green-500" />
                    <span className="font-medium">{course.price}</span>
                  </div>
                </div>

                {/* Button */}
                <button className="mt-6 inline-flex items-center justify-center gap-2 bg-gray-900 text-white px-6 py-2.5 rounded-full hover:bg-gray-800 transition-all duration-300">
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
// hello 