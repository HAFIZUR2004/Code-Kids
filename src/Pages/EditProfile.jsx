// src/Pages/EditProfile.jsx
import React, { useContext, useState, useEffect } from "react";
import { AuthContext } from "../context/AuthContext";
import { toast } from "react-hot-toast";
import { FaUserCircle } from "react-icons/fa";

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
    <div className="max-w-md mx-auto mt-10 bg-white shadow-md rounded-lg p-6">
      <h2 className="text-2xl font-bold mb-6 text-center">Edit Profile</h2>

      <div className="flex flex-col items-center mb-6">
        {photo ? (
          <img
            src={photo}
            alt="Profile"
            className="w-24 h-24 rounded-full border object-cover"
          />
        ) : (
          <FaUserCircle className="w-24 h-24 text-gray-400" />
        )}
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-gray-600 font-medium mb-1">Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter your name"
            required
          />
        </div>

        <div>
          <label className="block text-gray-600 font-medium mb-1">Photo URL</label>
          <input
            type="text"
            value={photo}
            onChange={(e) => setPhoto(e.target.value)}
            className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter photo URL"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
        >
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default EditProfile;
