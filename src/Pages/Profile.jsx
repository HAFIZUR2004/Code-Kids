import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { FaEnvelope, FaUser } from "react-icons/fa";

const Profile = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="max-w-lg mx-auto mt-12 bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 shadow-xl rounded-2xl p-8 text-center">
      
      <div className="relative inline-block mb-6">
        <img
          src={user?.photoURL || "https://via.placeholder.com/100"}
          alt="profile"
          className="w-28 h-28 rounded-full border-4 border-white shadow-lg object-cover"
        />
        <div className="absolute bottom-0 right-0 bg-purple-600 text-white p-2 rounded-full shadow-md cursor-pointer hover:bg-purple-700 transition">
          <FaUser />
        </div>
      </div>

      <h2 className="text-3xl font-bold text-purple-700">{user?.displayName || "User"}</h2>
      <p className="flex items-center justify-center text-gray-700 mt-2 gap-2">
        <FaEnvelope /> {user?.email || "No email"}
      </p>

      <div className="mt-6 text-gray-700 text-base">
        <p>
          Welcome to your profile dashboard. You can edit your profile anytime.
        </p>
      </div>
    </div>
  );
};

export default Profile;
