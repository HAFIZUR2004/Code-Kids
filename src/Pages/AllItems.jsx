import React, { useState } from "react";

// Sample skills data
const skills = [
  {
    skillId: 1,
    skillName: "JavaScript Basics",
    providerName: "Sarah Lee",
    providerEmail: "sarah@codekids.com",
    price: 25,
    rating: 4.7,
    slotsAvailable: 5,
    description:
      "Master the fundamentals of JavaScript programming including variables, loops, functions, and basic DOM manipulation. Perfect for beginners.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpuYdLEzBvwemix8pwsncUkLLOQqnByncadg&s",
    category: "Programming",
  },
  {
    skillId: 2,
    skillName: "React for Beginners",
    providerName: "David Chen",
    providerEmail: "david@codekids.com",
    price: 30,
    rating: 4.9,
    slotsAvailable: 4,
    description:
      "Learn how to build interactive web applications using React. Components, state, props, hooks.",
    image:
      "https://assist-software.net/_next/image?url=https%3A%2F%2Fcdn.assist.ro%2Fs3fs-public%2Fimage-paragraph%2FReact%252520Basics%252520for%252520Beginners%252520in%2525202018%252520%252520ASSIST%252520Software%252520%252520Ioana%252520Ianovici%252520blog_0.png&w=3840&q=75",
    category: "Web Development",
  },

  {
    skillId: 3,
    skillName: "HTML & CSS Crash Course",
    providerName: "Emma Watson",
    providerEmail: "emma@codekids.com",
    price: 15,
    rating: 4.6,
    slotsAvailable: 6,
    description:
      "A comprehensive crash course on HTML and CSS to design and style web pages.",
    image: "https://img-c.udemycdn.com/course/750x422/92760_a459_10.jpg",
    category: "Web Development",
  },

  {
    skillId: 4,
    skillName: "Python Programming for Kids",
    providerName: "Michael Brown",
    providerEmail: "michael@codekids.com",
    price: 20,
    rating: 4.8,
    slotsAvailable: 5,
    description:
      "Fun and easy introduction to Python programming for kids.",
    image:
      "https://roboto.sg/blog/wp-content/uploads/2021/07/python-a-good-beginner-programming-language-for-kids.jpg",
    category: "Programming",
  },
];

const AllSkills = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortType, setSortType] = useState("none");
  const [searchText, setSearchText] = useState("");

  // FILTER + SEARCH + SORT
  const filteredSkills = skills
    .filter((skill) =>
      selectedCategory === "All" ? true : skill.category === selectedCategory
    )
    .filter((skill) =>
      skill.skillName.toLowerCase().includes(searchText.toLowerCase())
    )
    .sort((a, b) => {
      if (sortType === "price-asc") return a.price - b.price;
      if (sortType === "price-desc") return b.price - a.price;
      if (sortType === "rating-asc") return a.rating - b.rating;
      if (sortType === "rating-desc") return b.rating - a.rating;
      return 0;
    });

  const categories = ["All", "Programming", "Web Development", "Game Development"];

  return (
    <div className="min-h-screen bg-[#1B3C53] py-10 px-4">
      <h1 className="text-4xl font-bold text-center mb-10 text-[#D2C1B6]">
        All Skills / Courses
      </h1>

      {/* FILTER & SORT PANEL */}
      <div className="max-w-7xl mx-auto mb-10 grid grid-cols-1 md:grid-cols-3 gap-5">
        
        {/* CATEGORY FILTER */}
        <select
          className="p-3 rounded-lg bg-[#234C6A] text-[#D2C1B6] outline-none"
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          {categories.map((cat, index) => (
            <option key={index} value={cat}>
              {cat}
            </option>
          ))}
        </select>

        {/* SORTING */}
        <select
          className="p-3 rounded-lg bg-[#234C6A] text-[#D2C1B6] outline-none"
          onChange={(e) => setSortType(e.target.value)}
        >
          <option value="none">Sort By</option>
          <option value="price-asc">Price (Low → High)</option>
          <option value="price-desc">Price (High → Low)</option>
          <option value="rating-asc">Rating (Low → High)</option>
          <option value="rating-desc">Rating (High → Low)</option>
        </select>

        {/* SEARCH BAR */}
        <input
          type="text"
          placeholder="Search Skill..."
          className="p-3 rounded-lg bg-[#234C6A] text-[#D2C1B6] outline-none"
          onChange={(e) => setSearchText(e.target.value)}
        />
      </div>

      {/* SKILLS CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {filteredSkills.map((skill) => (
          <div
            key={skill.skillId}
            className="bg-[#234C6A] rounded-xl shadow-xl overflow-hidden transform transition hover:scale-105 hover:shadow-2xl duration-300"
          >
            <img
              src={skill.image}
              alt={skill.skillName}
              className="w-full h-56 object-cover"
            />
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-2 text-[#D2C1B6]">
                {skill.skillName}
              </h2>
              <p className="text-[#456882] mb-2 text-sm">{skill.description}</p>
              <p className="text-[#D2C1B6] mb-1">
                Provider: {skill.providerName} ({skill.providerEmail})
              </p>
              <p className="text-[#D2C1B6] mb-2">Category: {skill.category}</p>

              <div className="flex justify-between text-[#D2C1B6] text-sm mb-3">
                <p>Price: ${skill.price}</p>
                <p>Rating: {skill.rating} ⭐</p>
                <p>Slots: {skill.slotsAvailable}</p>
              </div>

              <button className="w-full bg-[#456882] hover:bg-[#234C6A] text-white px-4 py-2 rounded-full transition duration-300">
                Enroll Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllSkills;
