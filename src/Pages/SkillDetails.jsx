// src/Pages/SkillDetails.jsx
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-hot-toast";
import { FaUserTie, FaEnvelope, FaFolderOpen, FaDollarSign, FaStar, FaClock } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const SkillDetails = () => {
  const { skillId } = useParams();
  const [skill, setSkill] = useState(null);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    fetch("/skills.json")
      .then((res) => res.json())
      .then((data) => {
        const found = data.find((s) => s.skillId === parseInt(skillId));
        setSkill(found);
      })
      .catch((err) => console.error(err));

    AOS.init({ duration: 800, easing: "ease-in-out", once: true });
  }, [skillId]);

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Session booked successfully!");
    setName("");
    setEmail("");
  };

  if (!skill) return <p className="text-center py-10 text-gray-500">Loading...</p>;

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold text-center mb-8 text-gray-800" data-aos="fade-down">
        {skill.skillName}
      </h1>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Image */}
        <div className="md:w-1/2" data-aos="fade-right">
          <img
            src={skill.image}
            alt={skill.skillName}
            className="w-full h-72 md:h-full object-cover rounded-xl shadow-md"
          />
        </div>

        {/* Details & Form */}
        <div className="md:w-1/2 flex flex-col gap-4">
          {/* Skill Info */}
          <div className="bg-white p-6 rounded-xl shadow-md flex flex-col gap-3" data-aos="fade-left">
            <p className="flex items-center gap-2"><FaUserTie className="text-blue-500" /> <strong>Provider:</strong> {skill.providerName}</p>
            <p className="flex items-center gap-2"><FaEnvelope className="text-green-500" /> <strong>Email:</strong> {skill.providerEmail}</p>
            <p className="flex items-center gap-2"><FaFolderOpen className="text-purple-500" /> <strong>Category:</strong> {skill.category}</p>
            <p className="flex items-center gap-2"><FaDollarSign className="text-yellow-500" /> <strong>Price:</strong> ${skill.price}</p>
            <p className="flex items-center gap-2"><FaStar className="text-yellow-400" /> <strong>Rating:</strong> {skill.rating}</p>
            <p className="flex items-center gap-2"><FaClock className="text-red-500" /> <strong>Slots Available:</strong> {skill.slotsAvailable}</p>
            <p className="text-gray-700"><strong>Description:</strong> {skill.description}</p>
          </div>

          {/* Book Session Form */}
          <form onSubmit={handleSubmit} className="bg-white p-6 rounded-xl shadow-md flex flex-col gap-4" data-aos="fade-up">
            <h2 className="text-2xl font-semibold mb-2 text-gray-800">Book a Session</h2>
            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="border px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
            <button
              type="submit"
              className="bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold py-3 rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              Book Session
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SkillDetails;
