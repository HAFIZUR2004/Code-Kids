import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import {
  FaSignOutAlt,
  FaEdit,
  FaUser,
  FaEye,
  FaHome,
} from "react-icons/fa";
import { MdKeyboardArrowDown } from "react-icons/md";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-white shadow-md px-6 py-4 flex justify-between items-center sticky top-0 z-50">
      {/* Left: Logo */}
      <Link
        to="/"
        className="text-2xl font-bold text-blue-600 tracking-wide hover:text-blue-800 transition"
      >
        CodeKids
      </Link>

      {/* Center: Home Button */}
      <nav className="absolute left-1/2 transform -translate-x-1/2">
        <Link
          to="/"
          className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition text-lg font-semibold"
        >
          <FaHome />
          Home
        </Link>
      </nav>

      {/* Right: Profile Section */}
      <div className="relative">
        {user ? (
          <>
            <button
              onClick={() => setOpen(!open)}
              className="flex items-center gap-3 bg-blue-50 hover:bg-blue-100 px-3 py-2 rounded-full transition"
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

            {/* Dropdown Menu */}
            {open && (
              <div className="absolute right-0 mt-3 w-56 bg-white border border-gray-200 shadow-xl rounded-xl overflow-hidden animate-fade-in">
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
              </div>
            )}
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
