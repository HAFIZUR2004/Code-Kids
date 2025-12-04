import React, { useContext, useState, useEffect } from "react";
import { AuthContext } from "../context/AuthContext";
import { toast } from "react-hot-toast";
import { FaUserCircle, FaEdit, FaSave } from "react-icons/fa";
import { updateProfile } from "firebase/auth";
import { auth } from "../firebase.config";
import { motion } from "framer-motion";

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateProfile(auth.currentUser, {
        displayName: name,
        photoURL: photo,
      });
      toast.success("Profile updated successfully!");
    } catch (error) {
      toast.error("Failed to update profile: " + error.message);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="max-w-md mx-auto mt-16 p-8   rounded-3xl shadow-2xl bg-gradient-to-br from-[#456882] via-[#1B3C53] to-[#456882]"
    >
      {/* Header */}
      <h2 className="text-3xl md:text-4xl font-extrabold mb-8 text-center text-[#D2C1B6] flex items-center justify-center gap-2">
        <FaEdit className="text-[#D2C1B6]" /> Edit Profile
      </h2>

      {/* Profile Picture */}
      <div className="flex flex-col  items-center mb-8 relative group">
        {photo ? (
          <motion.img
            src={photo}
            alt="Profile"
            className="w-28 h-28 rounded-full border-4 border-[#D2C1B6] shadow-xl object-cover"
            whileHover={{ scale: 1.15, rotate: 5, boxShadow: "0 0 25px #D2C1B6" }}
            transition={{ type: "spring", stiffness: 300 }}
          />
        ) : (
          <motion.div
            className="w-28 h-28 text-[#D2C1B6] shadow-lg flex items-center justify-center rounded-full text-6xl bg-[#1B3C53]"
            whileHover={{ scale: 1.15, boxShadow: "0 0 25px #D2C1B6" }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <FaUserCircle />
          </motion.div>
        )}
        <motion.div
          className="absolute bottom-0 right-0 bg-gradient-to-r from-[#D2C1B6] to-[#456882] text-[#1B3C53] p-2 rounded-full shadow-md cursor-pointer"
          whileHover={{ scale: 1.2, rotate: 360 }}
        >
          <FaEdit />
        </motion.div>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name */}
        <motion.div whileFocus={{ scale: 1.02 }}>
          <label className="block text-[#D2C1B6] font-semibold mb-2">Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-3 rounded-xl bg-[#1B3C53] text-[#D2C1B6] border-2 border-transparent focus:border-[#D2C1B6] shadow-lg placeholder-[#D2C1B6]/60 transition-all duration-300 hover:shadow-[#D2C1B6]/50"
            placeholder="Enter your name"
            required
          />
        </motion.div>

        {/* Photo URL */}
        <motion.div whileFocus={{ scale: 1.02 }}>
          <label className="block text-[#D2C1B6] font-semibold mb-2">Photo URL</label>
          <input
            type="text"
            value={photo}
            onChange={(e) => setPhoto(e.target.value)}
            className="w-full px-4 py-3 rounded-xl bg-[#1B3C53] text-[#D2C1B6] border-2 border-transparent focus:border-[#D2C1B6] shadow-lg placeholder-[#D2C1B6]/60 transition-all duration-300 hover:shadow-[#D2C1B6]/50"
            placeholder="Enter photo URL"
          />
        </motion.div>

        {/* Save Button */}
        <motion.button
          type="submit"
          className="w-full py-3 rounded-2xl font-bold flex justify-center items-center gap-3 text-[#1B3C53] bg-gradient-to-r from-[#D2C1B6] to-[#456882] shadow-lg hover:shadow-xl hover:scale-105 transition-all"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <FaSave /> Save Changes
        </motion.button>
      </form>
    </motion.div>
  );
};

export default EditProfile;
