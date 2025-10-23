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
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Top Rated Providers</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {providers.map((provider) => (
            <div
              key={provider.id}
              className="relative bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition"
            >
              {/* Image as background */}
              <img
                src={provider.image}
                alt={provider.name}
                className="w-full h-64 object-cover"
              />

              {/* Overlay content */}
              <div className="p-4 bg-white">
                <h3 className="text-lg font-semibold flex items-center gap-1">
                  {provider.name}{" "}
                  {provider.isVerified && (
                    <FaCheckCircle className="text-green-500" />
                  )}
                </h3>
                <p className="text-gray-500 text-sm mb-4">
                  {provider.bio || provider.skills?.join(", ") || "No description"}
                </p>

                <div className="flex items-center justify-between text-gray-600 text-sm mb-2">
                  <div className="flex items-center gap-1">
                    <FaUser /> {provider.followers || 0}
                  </div>
                  <div className="flex items-center gap-1">
                    <FaRegFileAlt /> {provider.projects || 0}
                  </div>
                </div>

                <button className="w-full bg-blue-500 text-white py-2 rounded-full hover:bg-blue-600 transition">
                  Follow +
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopRatedProviders;
