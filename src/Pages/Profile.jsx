import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { FaEnvelope, FaUser } from "react-icons/fa";
import { motion } from "framer-motion";

const Profile = () => {
  const { user } = useContext(AuthContext);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="max-w-lg mx-auto mt-16 p-8 rounded-3xl shadow-2xl bg-gradient-to-br from-[#456882] via-[#1B3C53] to-[#456882]"
    >
      {/* Profile Picture */}
      <div className="relative inline-block mb-6">
        <motion.img
          src={user?.photoURL || "https://via.placeholder.com/100"}
          alt="profile"
          className="w-28 h-28 rounded-full border-4 border-[#D2C1B6] shadow-xl object-cover"
          whileHover={{ scale: 1.15, rotate: 5, boxShadow: "0 0 25px #D2C1B6" }}
          transition={{ type: "spring", stiffness: 300 }}
        />
        <motion.div
          className="absolute bottom-0 right-0 bg-gradient-to-r from-[#D2C1B6] to-[#456882] text-[#1B3C53] p-2 rounded-full shadow-md cursor-pointer"
          whileHover={{ scale: 1.2, rotate: 360 }}
        >
          <FaUser />
        </motion.div>
      </div>

      {/* Name */}
      <h2 className="text-3xl md:text-4xl font-extrabold text-[#D2C1B6]">
        {user?.displayName || "User"}
      </h2>

      {/* Email */}
      <motion.p
        className="flex items-center justify-center text-[#D2C1B6]/80 mt-2 gap-2"
        whileHover={{ scale: 1.02 }}
      >
        <FaEnvelope /> {user?.email || "No email"}
      </motion.p>

      {/* Description */}
      <motion.div
        className="mt-6 text-[#D2C1B6]/80 text-base"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <p>
          Welcome to your profile dashboard. You can edit your profile anytime.
        </p>
      </motion.div>
    </motion.div>
  );
};

export default Profile;
