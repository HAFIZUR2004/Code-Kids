import React, { useEffect, useState } from "react";
import SkillCard from "./SkillCard";

const PopularSkills = () => {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    // Fetch JSON file from public folder
    fetch("/skills.json")
      .then((res) => res.json())
      .then((data) => setSkills(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <section className="max-w-6xl mx-auto px-4 py-10 bg-[#1B3C53] ">
      {/* Section Heading */}
      <h1 className="text-5xl font-bold text-center text-[#D2C1B6] mb-10">
        Kids Coding Picks
      </h1>

      {/* Skill Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {skills.map((skill) => (
          <SkillCard key={skill.skillId} skill={skill} />
        ))}
      </div>
    </section>
  );
};

export default PopularSkills;
