import React from "react";
import { CiStar } from "react-icons/ci";
import { MdOutlineAttachMoney } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import 'animate.css';

const SkillCard = ({ skill }) => {
  const navigate = useNavigate();

  return (
    <div
      className="rounded-3xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden max-w-sm mx-auto cursor-pointer border border-[#456882]
      animate__animated animate__fadeInUp hover:animate__pulse"
      style={{ backgroundColor: "#234C6A", color: "#D2C1B6" }}
    >
      {/* Image Section */}
      <div className="relative">
        <img
          src={skill.image}
          alt={skill.skillName}
          className="w-full h-64 object-cover rounded-t-3xl border-b-4 border-[#1B3C53]"
        />
      </div>

      {/* Content Section */}
      <div className="p-5 text-center">
        {/* Skill Name */}
        <h2 className="text-lg font-semibold text-[#D2C1B6]">
          {skill.skillName}
        </h2>

        {/* Subtitle / Tagline */}
        <p className="text-[#D2C1B6] text-sm mt-1 opacity-80">
          Professional skill with top-rated reviews.
        </p>

        {/* Stats */}
        <div className="flex justify-center gap-6 mt-4 text-sm">
          <div className="flex items-center text-lg font-semibold gap-1 text-yellow-400">
            <CiStar />
            <span>{skill.rating.toFixed(1)}</span>
          </div>
          <div className="flex items-center text-lg font-semibold gap-1 text-green-400">
            <MdOutlineAttachMoney />
            <span>{skill.price}</span>
          </div>
        </div>

        {/* View Details Button */}
        <button
          onClick={() => navigate(`/skill/${skill.skillId}`)}
          className="mt-5 inline-flex items-center gap-2 bg-gradient-to-r from-[#1B3C53] to-[#234C6A] text-[#D2C1B6] px-6 py-2.5 rounded-full hover:scale-105 hover:shadow-lg transition-all duration-300"
        >
          View Details +
        </button>
      </div>
    </div>
  );
};

export default SkillCard;
