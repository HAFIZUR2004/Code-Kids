import React from "react";
import { CiStar } from "react-icons/ci";
import { MdOutlineAttachMoney } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const SkillCard = ({ skill }) => {
  const navigate = useNavigate();

  return (
    <div className="bg-white rounded-3xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden max-w-sm mx-auto cursor-pointer border border-gray-100">

      {/* Image Section */}
      <div className="relative">
        <img
          src={skill.image}
          alt={skill.skillName}
          className="w-full h-64 object-cover"
        />
      </div>

      {/* Content Section */}
      <div className="p-5 text-center">
        {/* Skill Name */}
        <h2 className="text-lg font-semibold text-gray-800">
          {skill.skillName}
        </h2>

        {/* Subtitle / Tagline */}
        <p className="text-gray-500 text-sm mt-1">
          Professional skill with top-rated reviews.
        </p>

        {/* Stats */}
        <div className="flex justify-between gap-4 mt-4 text-gray-600 text-sm">
          <div className="flex items-center text-2xl font-bold gap-1">
            <span className=""><CiStar />
            </span>
            <span>{skill.rating.toFixed(1)}</span>
          </div>
          <div className="flex items-center text-2xl font-bold gap-1">
            <span><MdOutlineAttachMoney />
            </span>
            <span>{skill.price}</span>
          </div>
        </div>

        {/* Follow / View Button */}
        <button
          onClick={() => navigate(`/skill/${skill.skillId}`)}
          className="mt-5 inline-flex items-center gap-2 bg-gray-900 text-white px-6 py-2.5 rounded-full hover:bg-gray-800 transition-all"
        >
          View Details +
        </button>
      </div>
    </div>
  );
};

export default SkillCard;
