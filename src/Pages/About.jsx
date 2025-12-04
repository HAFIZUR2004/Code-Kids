import React from "react";

const About = () => {
  return (
    <div className="min-h-screen -mb-13 bg-gradient-to-br from-[#1B3C53] via-[#234C6A] to-[#456882] px-6 py-16 text-[#D2C1B6]">
      
      <div className="max-w-5xl mx-auto text-center">
        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
          About CodeKids
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl opacity-90 max-w-3xl mx-auto">
          Empowering the next generation through creativity, technology, and hands-on learning.
        </p>
      </div>

      {/* Content Box */}
      <div className="max-w-4xl mx-auto mt-12 bg-white/10 backdrop-blur-md p-8 md:p-12 rounded-2xl shadow-lg border border-white/20">
        
        <h2 className="text-2xl font-bold mb-4">Who We Are</h2>
        <p className="opacity-90 leading-relaxed mb-6">
          CodeKids is a creative & fun learning platform designed for kids who want 
          to explore the world of coding, technology, and problem-solving. 
          Our mission is to make learning enjoyable, engaging, and accessible for everyone.
        </p>

        <h2 className="text-2xl font-bold mb-4">What We Do</h2>
        <p className="opacity-90 leading-relaxed mb-6">
          We provide interactive lessons, activity-based learning, and kid-friendly 
          digital content that enhances creativity and boosts logical thinking. 
          From beginner coding lessons to exciting tech challenges — we help kids 
          build confidence in the digital world.
        </p>

        <h2 className="text-2xl font-bold mb-4">Our Goal</h2>
        <p className="opacity-90 leading-relaxed">
          Our goal is simple:  
          <span className="font-bold"> make learning fun and the future brighter.</span>  
          Technology is the future, and we want every child to be ready for it.
        </p>
      </div>
    </div>
  );
};

export default About;
