import React from "react";
import { useNavigate } from "react-router-dom";

const SkillCard = ({ skill }) => {
  const navigate = useNavigate(); // ← এইটা লাগবে

  return (
    <div className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer">
      {/* Image */}
      <div className="overflow-hidden">
        <img
          src={skill.image}
          alt={skill.skillName}
          className="w-full h-48 object-cover transform hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col gap-3">
        {/* Skill Name */}
        <h2 className="text-xl font-semibold text-gray-800">{skill.skillName}</h2>

        {/* Rating */}
        <div className="flex items-center gap-2">
          <p className="text-yellow-400 font-medium">{'⭐'.repeat(Math.floor(skill.rating))}</p>
          <span className="text-gray-500 text-sm">({skill.rating.toFixed(1)})</span>
        </div>

        {/* Price */}
        <p className="text-gray-700 font-semibold text-lg">${skill.price}</p>

        {/* View Details Button */}
        <button
          className="mt-2 bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition-colors"
          onClick={() => navigate(`/skill/${skill.skillId}`)} // ← navigate works now
        >
          View Details
        </button>
      </div>
    </div>
  );
};

export default SkillCard;
