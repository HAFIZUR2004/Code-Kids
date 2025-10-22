// src/Pages/EditProfile.jsx
import React, { useContext, useState, useEffect } from "react";
import { AuthContext } from "../context/AuthContext";
import { toast } from "react-hot-toast";
import { FaUserCircle, FaEdit, FaSave } from "react-icons/fa";

const EditProfile = () => {
  const { user } = useContext(AuthContext);
  const [name, setName] = useState("");
  const [photo, setPhoto] = useState("");

  useEffect(() => {
    if (user) {
      setName(user.displayName || "");
      setPhoto(user.photoURL || "");
    }
  }, [user]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate profile update
    toast.success("Profile updated successfully!");
  };

  return (
    <div className="max-w-md mx-auto mt-12 bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 shadow-xl rounded-2xl p-8">
      <h2 className="text-3xl font-bold mb-8 text-center text-purple-700">
        <FaEdit className="inline mr-2" /> Edit Profile
      </h2>

      <div className="flex flex-col items-center mb-8 relative">
        {photo ? (
          <img
            src={photo}
            alt="Profile"
            className="w-28 h-28 rounded-full border-4 border-white shadow-lg object-cover"
          />
        ) : (
          <FaUserCircle className="w-28 h-28 text-gray-400 shadow-lg" />
        )}
        <div className="absolute bottom-0 right-0 bg-purple-600 text-white p-2 rounded-full shadow-md cursor-pointer hover:bg-purple-700 transition">
          <FaEdit />
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className="block text-gray-700 font-semibold mb-2">Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border border-purple-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400 shadow-sm"
            placeholder="Enter your name"
            required
          />
        </div>

        <div>
          <label className="block text-gray-700 font-semibold mb-2">Photo URL</label>
          <input
            type="text"
            value={photo}
            onChange={(e) => setPhoto(e.target.value)}
            className="w-full border border-purple-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400 shadow-sm"
            placeholder="Enter photo URL"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 rounded-xl hover:from-purple-600 hover:to-pink-600 transition-colors font-bold flex justify-center items-center gap-2"
        >
          <FaSave /> Save Changes
        </button>
      </form>
    </div>
  );
};

export default EditProfile;
