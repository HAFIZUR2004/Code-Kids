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

    AOS.init({ duration: 900, easing: "ease-in-out", once: true });
  }, [skillId]);

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("🎉 Session booked successfully!");
    setName("");
    setEmail("");
  };

  if (!skill)
    return <p className="text-center py-20 text-gray-400 text-xl animate-pulse">Loading...</p>;

  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      {/* Skill Title */}
      <h1
        className="text-5xl md:text-6xl font-extrabold text-center mb-16 text-gradient bg-gradient-to-r from-[#234C6A] to-[#456882] bg-clip-text text-transparent"
        data-aos="fade-down"
      >
        {skill.skillName}
      </h1>

      <div className="flex flex-col md:flex-row gap-12">
        {/* Skill Image */}
        <div
          className="md:w-1/2 rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500"
          data-aos="fade-right"
        >
          <img
            src={skill.image}
            alt={skill.skillName}
            className="w-full h-80 md:h-full object-cover rounded-3xl transform hover:scale-105 transition-all duration-500"
          />
        </div>

        {/* Skill Info & Booking */}
        <div className="md:w-1/2 flex flex-col gap-8">

          {/* Skill Info Card */}
          <div
            className="bg-white/90 backdrop-blur-md p-8 rounded-3xl shadow-xl hover:shadow-2xl border border-[#D2C1B6]/30 transition-all duration-300"
            data-aos="fade-left"
          >
            <h2 className="text-3xl font-bold text-[#1B3C53] mb-6 tracking-wide">Skill Details</h2>
            <div className="flex flex-col gap-4 text-gray-800 text-lg">
              <p className="flex items-center gap-3"><FaUserTie className="text-blue-500" /> <strong>Provider:</strong> {skill.providerName}</p>
              <p className="flex items-center gap-3"><FaEnvelope className="text-green-500" /> <strong>Email:</strong> {skill.providerEmail}</p>
              <p className="flex items-center gap-3"><FaFolderOpen className="text-purple-500" /> <strong>Category:</strong> {skill.category}</p>
              <p className="flex items-center gap-3"><FaDollarSign className="text-yellow-500" /> <strong>Price:</strong> ${skill.price}</p>
              <p className="flex items-center gap-3"><FaStar className="text-yellow-400" /> <strong>Rating:</strong> {skill.rating}</p>
              <p className="flex items-center gap-3"><FaClock className="text-red-500" /> <strong>Slots:</strong> {skill.slotsAvailable}</p>
              <p className="text-gray-700 mt-2 leading-relaxed"><strong>Description:</strong> {skill.description}</p>
            </div>
          </div>

          {/* Book Session Form */}
          <form
            onSubmit={handleSubmit}
            className="bg-gradient-to-br from-[#D2C1B6]/20 to-[#D2C1B6]/10 p-8 rounded-3xl shadow-xl flex flex-col gap-5 hover:shadow-2xl transition-all duration-300"
            data-aos="fade-up"
          >
            <h2 className="text-3xl font-bold text-[#1B3C53] mb-4">Book a Session</h2>

            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="border border-gray-300 px-5 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
              required
            />

            <input
              type="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border border-gray-300 px-5 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
              required
            />

            <button
              type="submit"
              className="bg-gradient-to-r from-[#234C6A] to-[#1B3C53] text-white font-semibold py-3 rounded-2xl shadow-lg hover:scale-105 hover:shadow-2xl transition-all duration-300"
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
