import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  createUserWithEmailAndPassword,
  updateProfile,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../firebase.config";
import { toast } from "react-hot-toast";
import { useSpring, animated } from "@react-spring/web";
import { FaUser, FaEnvelope, FaLock, FaEye, FaEyeSlash, FaPhotoVideo } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const Signup = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [photoURL, setPhotoURL] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  // Animations
  const fadeInCard = useSpring({
    from: { opacity: 0, transform: "translateY(20px)" },
    to: { opacity: 1, transform: "translateY(0)" },
    config: { tension: 150, friction: 18 },
  });

  const fadeInTitle = useSpring({
    from: { opacity: 0, transform: "translateY(-20px)" },
    to: { opacity: 1, transform: "translateY(0)" },
    config: { tension: 170, friction: 20 },
  });

  // Email/Password signup
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!/[A-Z]/.test(password) || !/[a-z]/.test(password) || password.length < 6) {
      toast.error("⚠️ Password must be at least 6 chars & include uppercase & lowercase letters.");
      return;
    }

    try {
      setLoading(true);
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(userCredential.user, { displayName: name, photoURL });
      toast.success("🎉 Signup successful! Welcome aboard.", { duration: 2000 });

      setTimeout(() => navigate("/"), 2200);
    } catch (error) {
      toast.error(error.message, { duration: 3000 });
    } finally {
      setLoading(false);
    }
  };

  // Google signup
  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      setLoading(true);
      await signInWithPopup(auth, provider);
      toast.success("🌈 Google signup successful! Welcome aboard.", { duration: 2000 });
      setTimeout(() => navigate("/"), 2200);
    } catch (error) {
      toast.error(error.message, { duration: 3000 });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-purple-100 px-4">
      <animated.div
        style={fadeInCard}
        className="w-full max-w-md bg-white p-6 sm:p-8 rounded-2xl shadow-lg"
      >
        <animated.h2
          style={fadeInTitle}
          className="text-3xl sm:text-4xl font-extrabold mb-6 text-center text-black"
        >
          Create Account
        </animated.h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          {/* Name */}
          <div className="relative">
            <FaUser className="absolute left-3 top-3.5 text-gray-400" />
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="border pl-10 pr-3 py-2 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          {/* Email */}
          <div className="relative">
            <FaEnvelope className="absolute left-3 top-3.5 text-gray-400" />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border pl-10 pr-3 py-2 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          {/* Photo URL */}
          <div className="relative">
            <FaPhotoVideo className="absolute left-3 top-3.5 text-gray-400" />
            <input
              type="text"
              placeholder="Photo URL (optional)"
              value={photoURL}
              onChange={(e) => setPhotoURL(e.target.value)}
              className="border pl-10 pr-3 py-2 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Password */}
          <div className="relative">
            <FaLock className="absolute left-3 top-3.5 text-gray-400" />
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="border pl-10 pr-10 py-2 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
            <button
              type="button"
              className="absolute right-3 top-3.5 text-gray-500"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>

          {/* Register Button */}
          <button
            type="submit"
            disabled={loading}
            className={`bg-blue-500 text-white flex items-center justify-center gap-2 py-2 rounded-md transition transform hover:scale-[1.02] ${
              loading ? "opacity-50 cursor-not-allowed" : "hover:opacity-90"
            }`}
          >
            {loading ? "Processing..." : "Register"}
          </button>
        </form>

        <p className="mt-4 text-center text-sm">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-600 hover:underline">
            Login
          </Link>
        </p>

        <div className="mt-4 text-center">
          <button
            onClick={handleGoogleLogin}
            disabled={loading}
            className={`flex items-center justify-center gap-2 px-4 py-2 bg-white border border-gray-300 text-gray-700 w-full rounded-md transition transform hover:scale-[1.03] ${
              loading ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-50"
            }`}
          >
            <FcGoogle className="text-2xl" />
            {loading ? "Processing..." : "Continue with Google"}
           
          </button>
        </div>
      </animated.div>
    </div>
  );
};

export default Signup;
