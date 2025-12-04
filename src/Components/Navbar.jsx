import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { MdKeyboardArrowDown } from "react-icons/md";
import { useSpring, animated } from "@react-spring/web";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const [logoOpen, setLogoOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  // Logo dropdown animation
  const logoAnimation = useSpring({
    opacity: logoOpen ? 1 : 0,
    transform: logoOpen ? "translateY(0)" : "translateY(-10px)",
    pointerEvents: logoOpen ? "auto" : "none",
    config: { tension: 220, friction: 18 },
  });

  // Profile dropdown animation
  const profileAnimation = useSpring({
    opacity: profileOpen ? 1 : 0,
    transform: profileOpen ? "translateY(0)" : "translateY(-10px)",
    pointerEvents: profileOpen ? "auto" : "none",
    config: { tension: 220, friction: 18 },
  });

  const navLinks = ["Home", "All Items", "About Us", "Contact", "Support"];

  // Function to get correct route for each link
  const getRoute = (item) => {
    if (item === "Home") return "/";
    if (item === "All Items") return "/items";
    if (item === "About Us") return "/about-us";
    if (item === "Contact") return "/contact";
    if (item === "Support") return "/support";
    return `/${item.toLowerCase().replace(" ", "-")}`;
  };

  return (
    <header className="sticky top-0 z-50 bg-[#1B3C53] shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <div className="relative">
          <button
            className="text-2xl font-bold text-[#D2C1B6] tracking-wide hover:text-white transition flex items-center md:cursor-default"
            onClick={() => setLogoOpen(!logoOpen)}
          >
            CodeKids
            <MdKeyboardArrowDown
              className={`ml-1 transition-transform md:hidden ${logoOpen ? "rotate-180" : ""}`}
            />
          </button>

          {/* Mobile dropdown */}
          <animated.div
            style={logoAnimation}
            className="absolute left-0 mt-3 w-48 bg-white border border-gray-200 shadow-xl rounded-xl overflow-hidden z-50 md:hidden"
          >
            {navLinks.map((item) => (
              <Link
                key={item}
                to={getRoute(item)}
                className="block px-4 py-2 hover:bg-blue-50 transition"
                onClick={() => setLogoOpen(false)}
              >
                {item}
              </Link>
            ))}
          </animated.div>
        </div>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6 text-[#D2C1B6] font-medium">
          {navLinks.map((item) => (
            <Link
              key={item}
              to={getRoute(item)}
              className="hover:text-white transition"
            >
              {item}
            </Link>
          ))}
        </nav>

        {/* Profile / Signup */}
        <div className="relative">
          {user ? (
            <>
              <button onClick={() => setProfileOpen(!profileOpen)} className="flex items-center">
                <img
                  src={user.photoURL || "https://cdn-icons-png.flaticon.com/512/149/149071.png"}
                  alt="Profile"
                  className="w-10 h-10 rounded-full border-2 border-[#D2C1B6] cursor-pointer"
                />
              </button>

              <animated.div
                style={profileAnimation}
                className="absolute right-0 mt-3 w-56 bg-white border border-gray-200 shadow-xl rounded-xl overflow-hidden z-50"
              >
                <Link
                  to="/view-profile"
                  className="block px-4 py-2 hover:bg-blue-50 transition"
                  onClick={() => setProfileOpen(false)}
                >
                  View Profile
                </Link>

                <Link
                  to="/edit-profile"
                  className="block px-4 py-2 hover:bg-blue-50 transition"
                  onClick={() => setProfileOpen(false)}
                >
                  Edit Profile
                </Link>

                <button
                  onClick={() => {
                    logout();
                    setProfileOpen(false);
                  }}
                  className="w-full text-left px-4 py-2 hover:bg-red-50 transition"
                >
                  Logout
                </button>
              </animated.div>
            </>
          ) : (
            <Link
              to="/signup"
              className="bg-[#456882] text-white px-5 py-2 rounded-full hover:bg-[#234C6A] transition font-medium"
            >
              Signup
            </Link>
          )}
        </div>

      </div>
    </header>
  );
};

export default Navbar;
