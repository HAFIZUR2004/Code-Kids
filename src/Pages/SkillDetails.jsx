// src/Pages/SkillDetails.jsx
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-hot-toast";
import { FaUserTie, FaEnvelope, FaFolderOpen, FaDollarSign, FaStar, FaClock } from "react-icons/fa";
import { motion } from "framer-motion";

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
  }, [skillId]);

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Session booked successfully!");
    setName("");
    setEmail("");
  };

  if (!skill) return <p className="text-center py-10 text-gray-500">Loading...</p>;

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const formVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6 } },
  };

  return (
    <motion.div
      className="max-w-5xl mx-auto px-4 py-10"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">{skill.skillName}</h1>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Image */}
        <motion.div
          className="md:w-1/2"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src={skill.image}
            alt={skill.skillName}
            className="w-full h-72 md:h-full object-cover rounded-xl shadow-md"
          />
        </motion.div>

        {/* Details & Form */}
        <div className="md:w-1/2 flex flex-col gap-4">
          {/* Skill Info */}
          <motion.div
            className="bg-white p-6 rounded-xl shadow-md flex flex-col gap-3"
            variants={cardVariants}
          >
            <p className="flex items-center gap-2"><FaUserTie className="text-blue-500" /> <strong>Provider:</strong> {skill.providerName}</p>
            <p className="flex items-center gap-2"><FaEnvelope className="text-green-500" /> <strong>Email:</strong> {skill.providerEmail}</p>
            <p className="flex items-center gap-2"><FaFolderOpen className="text-purple-500" /> <strong>Category:</strong> {skill.category}</p>
            <p className="flex items-center gap-2"><FaDollarSign className="text-yellow-500" /> <strong>Price:</strong> ${skill.price}</p>
            <p className="flex items-center gap-2"><FaStar className="text-yellow-400" /> <strong>Rating:</strong> {skill.rating}</p>
            <p className="flex items-center gap-2"><FaClock className="text-red-500" /> <strong>Slots Available:</strong> {skill.slotsAvailable}</p>
            <p className="text-gray-700"><strong>Description:</strong> {skill.description}</p>
          </motion.div>

          {/* Book Session Form */}
          <motion.form
            onSubmit={handleSubmit}
            className="bg-white p-6 rounded-xl shadow-md flex flex-col gap-4"
            variants={formVariants}
          >
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
          </motion.form>
        </div>
      </div>
    </motion.div>
  );
};

export default SkillDetails;
