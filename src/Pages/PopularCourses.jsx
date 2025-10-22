import React from "react";

const popularCourses = [
  {
    id: 1,
    title: "Introduction to Python",
    image: "https://via.placeholder.com/300x200.png?text=Python",
    rating: 4.8,
    price: 49,
  },
  {
    id: 2,
    title: "Fun with HTML & CSS",
    image: "https://via.placeholder.com/300x200.png?text=HTML+%26+CSS",
    rating: 4.6,
    price: 39,
  },
  {
    id: 3,
    title: "Scratch Programming Basics",
    image: "https://via.placeholder.com/300x200.png?text=Scratch",
    rating: 4.9,
    price: 29,
  },
];

const PopularCourses = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Popular Courses for Kids
        </h2>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {popularCourses.map((course) => (
            <div
              key={course.id}
              className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              {/* Image */}
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-48 object-cover transform hover:scale-105 transition-transform duration-300"
              />

              {/* Content */}
              <div className="p-5 flex flex-col gap-2">
                <h3 className="text-xl font-semibold text-gray-800">
                  {course.title}
                </h3>

                {/* Rating */}
                <div className="flex items-center gap-2">
                  <p className="text-yellow-400 font-medium">
                    {'⭐'.repeat(Math.floor(course.rating))}
                  </p>
                  <span className="text-gray-500 text-sm">
                    ({course.rating.toFixed(1)})
                  </span>
                </div>

                {/* Price */}
                <p className="text-gray-700 font-semibold text-lg">
                  ${course.price}
                </p>

                {/* View Details Button */}
                <button className="mt-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold py-2 rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300">
                  View Details
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
