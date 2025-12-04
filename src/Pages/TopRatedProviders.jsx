import React, { useEffect, useState } from "react";
import { FaCheckCircle, FaUser, FaRegFileAlt } from "react-icons/fa";

const TopRatedProviders = () => {
  const [providers, setProviders] = useState([]);

  useEffect(() => {
    fetch("/providers.json")
      .then((res) => res.json())
      .then((data) => setProviders(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <section className="py-14 bg-[#1B3C53]">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-[#D2C1B6]">
          Top Rated Providers
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7 md:gap-10">
          {providers.map((provider) => (
            <div
              key={provider.id}
              className="rounded-2xl bg-gradient-to-br from-[#234C6A] to-[#1B3C53] shadow-xl border border-[#456882]/40 overflow-hidden hover:shadow-2xl hover:border-[#D2C1B6]/60 transition transform hover:-translate-y-2 cursor-pointer"
            >
              {/* Image */}
              <div className="overflow-hidden">
                <img
                  src={provider.image}
                  alt={provider.name}
                  className="w-full h-56 sm:h-60 md:h-64 object-cover transform hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col justify-between text-[#D2C1B6]">
                <h3 className="text-lg md:text-xl font-semibold flex items-center justify-center gap-2">
                  {provider.name}
                  {provider.isVerified && (
                    <FaCheckCircle className="text-green-400" />
                  )}
                </h3>

                <p className="text-[#D2C1B6]/80 text-sm mt-2 mb-4 text-center">
                  {provider.bio || provider.skills?.join(", ") || "No description"}
                </p>

                <div className="flex justify-center gap-6 text-[#D2C1B6] text-sm mb-4">
                  <div className="flex items-center gap-1">
                    <FaUser /> {provider.followers || 0}
                  </div>
                  <div className="flex items-center gap-1">
                    <FaRegFileAlt /> {provider.projects || 0}
                  </div>
                </div>

                {/* View Profile Button */}
                <a
                  href={provider.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-gradient-to-r from-[#456882] to-[#234C6A] text-white py-2.5 rounded-full text-center hover:scale-105 hover:shadow-xl transition-transform duration-300"
                >
                  View Profile +
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopRatedProviders;
