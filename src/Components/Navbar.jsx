import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { FaSignOutAlt, FaEdit, FaEye, FaHome } from "react-icons/fa";
import { MdKeyboardArrowDown } from "react-icons/md";
import { useSpring, animated } from "@react-spring/web";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const [open, setOpen] = useState(false);

  // Dropdown animation
  const dropdownAnimation = useSpring({
    opacity: open ? 1 : 0,
    transform: open ? `translateY(0px)` : `translateY(-20px)`,
    pointerEvents: open ? "auto" : "none",
    config: { tension: 300, friction: 20 },
  });

  // Ripple Halo animation behind profile
  const haloAnimation = useSpring({
    from: { scale: 0.8, opacity: 0.6 },
    to: async (next) => {
      while (true) {
        await next({ scale: 1.4, opacity: 0 });
        await next({ scale: 0.8, opacity: 0.6 });
      }
    },
    config: { duration: 1500 },
  });

  return (
    <header className="bg-white shadow-md px-6 py-4 flex justify-between items-center sticky top-0 z-50">
      {/* Logo */}
      <Link
        to="/"
        className="text-2xl font-bold text-blue-600 tracking-wide hover:text-blue-800 transition"
      >
        CodeKids
      </Link>

      {/* Center Home */}
      <nav className="absolute left-1/2 transform -translate-x-1/2">
        <Link
          to="/"
          className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition text-lg font-semibold"
        >
          <FaHome />
          Home
        </Link>
      </nav>

      {/* Profile */}
      <div className="relative">
        {user ? (
          <>
            {/* Ripple Halo behind profile */}
            <animated.div
              style={haloAnimation}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full 
                         bg-gradient-to-r from-purple-500 to-pink-500 blur-2xl z-0"
            />

            {/* Profile Button */}
            <button
              onClick={() => setOpen(!open)}
              className="relative z-10 flex items-center gap-3 bg-blue-50 hover:bg-blue-100 px-3 py-2 rounded-full transition"
            >
              <img
                src={
                  user.photoURL ||
                  "https://cdn-icons-png.flaticon.com/512/149/149071.png"
                }
                alt="Profile"
                className="w-9 h-9 rounded-full border-2 border-blue-400"
              />
              <div className="flex flex-col text-left">
                <span className="text-gray-800 font-semibold text-sm">
                  {user.displayName || "User Name"}
                </span>
                <span className="text-gray-500 text-xs">
                  {user.email || "user@gmail.com"}
                </span>
              </div>
              <MdKeyboardArrowDown
                className={`text-gray-700 text-xl transition-transform ${
                  open ? "rotate-180" : ""
                }`}
              />
            </button>

            {/* Animated Dropdown Menu */}
            <animated.div
              style={dropdownAnimation}
              className="absolute right-0 mt-3 w-56 bg-white border border-gray-200 shadow-xl rounded-xl overflow-hidden z-50"
            >
              <Link
                to="/view-profile"
                className="flex items-center gap-3 px-4 py-2 hover:bg-blue-50 text-gray-700 hover:text-blue-600 transition"
                onClick={() => setOpen(false)}
              >
                <FaEye /> View Profile
              </Link>
              <Link
                to="/edit-profile"
                className="flex items-center gap-3 px-4 py-2 hover:bg-blue-50 text-gray-700 hover:text-blue-600 transition"
                onClick={() => setOpen(false)}
              >
                <FaEdit /> Edit Profile
              </Link>
              <button
                onClick={() => {
                  logout();
                  setOpen(false);
                }}
                className="flex w-full items-center gap-3 px-4 py-2 hover:bg-red-50 text-gray-700 hover:text-red-600 transition"
              >
                <FaSignOutAlt /> Logout
              </button>
            </animated.div>
          </>
        ) : (
          <Link
            to="/signup"
            className="bg-blue-600 text-white px-5 py-2 rounded-full hover:bg-blue-700 transition font-medium"
          >
            Signup
          </Link>
        )}
      </div>
    </header>
  );
};

export default Navbar;
