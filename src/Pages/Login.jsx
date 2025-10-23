import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import {
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { toast } from "react-hot-toast";
import { auth } from "../firebase.config";
import { useSpring, animated } from "@react-spring/web";
import { FaLock, FaEye, FaEyeSlash, FaEnvelope, FaGoogle } from "react-icons/fa";
import { TbLogin2 } from "react-icons/tb";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  // Animation
  const fadeInTitle = useSpring({
    from: { opacity: 0, transform: "translateY(-20px)" },
    to: { opacity: 1, transform: "translateY(0px)" },
    config: { tension: 170, friction: 20 },
  });

  const fadeInCard = useSpring({
    from: { opacity: 0, transform: "translateY(20px)" },
    to: { opacity: 1, transform: "translateY(0)" },
    config: { tension: 150, friction: 18 },
  });

  // Email/Password Login
  const handleLogin = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      toast.error("⚠️ Please fill in both fields!");
      return;
    }

    try {
      await signInWithEmailAndPassword(auth, email, password);
      toast.success("🎉 Welcome back! You’ve logged in successfully.");
      navigate(from, { replace: true });
    } catch (error) {
      handleAuthError(error);
    }
  };

  // Google Login
  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      toast.success("🌈 Logged in with Google — Welcome!");
      navigate(from, { replace: true });
    } catch (error) {
      handleAuthError(error);
    }
  };

  // Error Handler
  const handleAuthError = (error) => {
    console.error(error);
    switch (error.code) {
      case "auth/invalid-email":
        toast.error("📧 Invalid email format! Please check again.");
        break;
      case "auth/user-not-found":
        toast.error("🙁 No account found with this email.");
        break;
      case "auth/wrong-password":
        toast.error("🔒 Password invalid! Try again carefully.");
        break;
      case "auth/popup-closed-by-user":
        toast.error("🚪 Google login window closed before finishing!");
        break;
      default:
        toast.error("⚠️ Something went wrong. Please try again!");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-purple-100 px-4">
      <animated.div
        style={fadeInCard}
        className="max-w-md w-full bg-white p-8 rounded-2xl shadow-lg"
      >
        {/* Animated Title */}
        <animated.h2
          style={fadeInTitle}
          className="text-3xl font-extrabold mb-6 text-center text-shadow-black"
        >
         Login Form
        </animated.h2>

        {/* Login Form */}
        <form onSubmit={handleLogin} className="flex flex-col gap-4">
          {/* Email Field */}
          <div className="relative">
            <FaEnvelope className="absolute left-3 top-3.5 text-gray-400" />
            <input
              type="email"
              placeholder="Your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border pl-10 pr-3 py-2 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          {/* Password Field */}
          <div className="relative">
            <FaLock className="absolute left-3 top-3.5 text-gray-400" />
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Your password"
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

          {/* Login Button with Icon */}
          <button
            type="submit"
            className="bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition flex items-center justify-center gap-2 transform hover:scale-[1.02]"
          >
            <TbLogin2 className="text-lg" />
            Login
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center gap-3 my-5">
          <hr className="flex-1 border-gray-300" />
          <span className="text-gray-500 text-sm">or</span>
          <hr className="flex-1 border-gray-300" />
        </div>

        {/* Google Login with Icon */}
        <button
          onClick={handleGoogleLogin}
          className="w-full flex items-center justify-center gap-2 py-2 border border-gray-300 rounded-md hover:bg-gray-100 transition transform hover:scale-[1.03]"
        >
           <FcGoogle className="text-2xl" />
          Continue with Google
        </button>

        {/* Links */}
        <p className="mt-4 text-center text-sm">
          Forgot your password?{" "}
          <Link
            to="/forgot-password"
            className="text-blue-600 hover:underline"
            state={{ email }}
          >
            Reset
          </Link>
        </p>

        <p className="mt-2 text-center text-sm">
          Don’t have an account?{" "}
          <Link to="/signup" className="text-blue-600 hover:underline">
            Sign Up
          </Link>
        </p>
      </animated.div>
    </div>
  );
};

export default Login;
