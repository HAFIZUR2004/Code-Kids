import React, { useEffect, useState } from "react";
import SkillCard from "./SkillCard";

const PopularSkills = () => {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    // fetch json file from public folder
    fetch("/skills.json")
      .then((res) => res.json())
      .then((data) => setSkills(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <section className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6 text-center">Popular Skills</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {skills.map((skill) => (
          <SkillCard key={skill.skillId} skill={skill} />
        ))}
      </div>
    </section>
  );
};

export default PopularSkills;
