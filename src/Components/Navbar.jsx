import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar({ user, onLogout }) {
  const location = useLocation();

  return (
    <header className="bg-white shadow-sm sticky top-0 z-40">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Left Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold">
              CK
            </div>
            <div className="hidden sm:block">
              <span className="font-bold text-lg">CodeKids</span>
              <div className="text-xs text-slate-500">Learn · Play · Create</div>
            </div>
          </Link>

          {/* Center Nav: Logged in only */}
          {user && (
            <nav className="hidden md:flex md:items-center md:gap-2">
              <ul className="flex items-center gap-2">
                <li>
                  <Link
                    to="/"
                    className={`px-3 py-2 rounded hover:bg-slate-100 ${
                      location.pathname === "/" ? "font-semibold" : ""
                    }`}
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/profile"
                    className={`px-3 py-2 rounded hover:bg-slate-100 ${
                      location.pathname === "/profile" ? "font-semibold" : ""
                    }`}
                  >
                    My Profile
                  </Link>
                </li>
              </ul>
            </nav>
          )}

          {/* Right Auth Buttons */}
          <div className="flex items-center gap-3">
            {!user ? (
              <Link
                to="/signup"
                className="px-3 py-2 rounded-md bg-blue-500 text-white hover:opacity-95"
              >
                Signup
              </Link>
            ) : (
              <div className="flex items-center gap-3">
                {/* Avatar + Tooltip */}
                <button
                  title={user.displayName || user.email}
                  className="w-10 h-10 rounded-full overflow-hidden border-2 border-slate-200 shadow-sm"
                >
                  <img
                    src={
                      user.photoURL ||
                      `https://api.dicebear.com/6.x/initials/svg?seed=${encodeURIComponent(
                        user.displayName || user.email || "user"
                      )}`
                    }
                    alt={user.displayName || "User avatar"}
                    className="w-full h-full object-cover"
                  />
                </button>

                {/* Logout Button */}
                <button
                  onClick={onLogout}
                  className="px-3 py-2 rounded-md bg-red-50 text-red-600 border border-red-100 hover:bg-red-100"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
