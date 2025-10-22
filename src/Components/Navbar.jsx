import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { FaUserCircle, FaSignOutAlt } from "react-icons/fa";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-white shadow p-4 flex justify-between items-center px-6 relative">
      {/* Left: Logo */}
      <Link to="/" className="font-bold text-xl text-blue-600">
        CodeKids
      </Link>

      {/* Center: Home */}
      <nav className="hidden md:flex gap-6">
        <Link
          to="/"
          className="text-gray-700 hover:text-blue-600 font-medium"
        >
          Home
        </Link>
      </nav>

      {/* Right: Profile */}
      <div className="relative">
        {user ? (
          <div>
            {/* Show Profile Button */}
            <button
              onClick={() => setOpen(!open)}
              className="px-3 py-1 bg-blue-500 text-white rounded"
            >
              Show Profile
            </button>

            {/* Dropdown */}
            {open && (
              <div className="absolute right-0 mt-2 bg-white shadow-lg rounded-lg w-60 border py-2 z-50">
                {/* User Info */}
                <div className="flex items-center gap-3 px-4 py-3 border-b">
                  {user.photoURL ? (
                    <img
                      src={user.photoURL}
                      alt="user"
                      className="w-12 h-12 rounded-full border"
                    />
                  ) : (
                    <FaUserCircle className="w-12 h-12 text-gray-600" />
                  )}
                  <div>
                    <p className="font-semibold">{user.displayName || "User"}</p>
                    <p className="text-sm text-gray-500">{user.email}</p>
                  </div>
                </div>

                {/* Actions */}
                <Link
                  to="/profile"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  onClick={() => setOpen(false)}
                >
                  View Profile
                </Link>
                <Link
                  to="/edit-profile"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  onClick={() => setOpen(false)}
                >
                  Edit Profile
                </Link>
                <button
                  onClick={() => {
                    logout();
                    setOpen(false);
                  }}
                  className="w-full text-left px-4 py-2 text-red-600 hover:bg-gray-100 flex items-center gap-2"
                >
                  <FaSignOutAlt /> Sign Out
                </button>
              </div>
            )}
          </div>
        ) : (
          <Link
            to="/signup"
            className="px-3 py-1 bg-blue-500 text-white rounded"
          >
            Signup
          </Link>
        )}
      </div>
    </header>
  );
};

export default Navbar;
