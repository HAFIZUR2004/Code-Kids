import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Profile = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="max-w-lg mx-auto mt-10 bg-white shadow-md rounded-lg p-6 text-center">
      <img
        src={user?.photoURL || "https://via.placeholder.com/100"}
        alt="profile"
        className="w-24 h-24 rounded-full mx-auto border"
      />
      <h2 className="text-2xl font-semibold mt-4">{user?.displayName || "User"}</h2>
      <p className="text-gray-600">{user?.email}</p>
      <div className="mt-6">
        <p className="text-gray-700">
          Welcome to your profile dashboard. You can edit your profile anytime.
        </p>
      </div>
    </div>
  );
};

export default Profile;
