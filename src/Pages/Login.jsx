import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import {
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../firebase.config";
import { toast } from "react-hot-toast";
import { useSpring, animated } from "@react-spring/web";
import { FaLock, FaEye, FaEyeSlash, FaEnvelope } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { TbLogin2 } from "react-icons/tb";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  // Card Animation
  const fadeInCard = useSpring({
    from: { opacity: 0, transform: "scale(0.9)" },
    to: { opacity: 1, transform: "scale(1)" },
    delay: 200,
  });

  // Title Animation
  const fadeInTitle = useSpring({
    from: { opacity: 0, transform: "translateY(-20px)" },
    to: { opacity: 1, transform: "translateY(0)" },
    delay: 300,
  });

  // Login Function
  const handleLogin = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      toast.error("⚠️ Please fill in both fields!");
      return;
    }

    try {
      await signInWithEmailAndPassword(auth, email, password);
      toast.success("🎉 Logged in successfully!");
      setTimeout(() => navigate(from, { replace: true }), 1500);
    } catch (error) {
      switch (error.code) {
        case "auth/invalid-email":
          toast.error("📧 Invalid email!");
          break;
        case "auth/user-not-found":
          toast.error("🙁 No account found.");
          break;
        case "auth/wrong-password":
          toast.error("🔒 Wrong password!");
          break;
        default:
          toast.error("⚠️ Something went wrong!");
      }
    }
  };

  // Google Login
  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      toast.success("🌈 Logged in with Google!");
      setTimeout(() => navigate(from, { replace: true }), 1500);
    } catch (error) {
      toast.error("⚠️ Google login failed!");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center 
      bg-gradient-to-br from-[#1B3C53] via-[#234C6A] to-[#456882] px-4">

      {/* Main Card */}
      <animated.div
        style={fadeInCard}
        className="max-w-md w-full bg-[#ffffffee] backdrop-blur-xl p-8 
        rounded-3xl shadow-2xl border border-[#D2C1B6]/30 
        transition hover:shadow-[0_0_25px_#D2C1B6]"
      >
        <animated.h2
          style={fadeInTitle}
          className="text-3xl font-bold mb-6 text-center 
          bg-gradient-to-r from-[#1B3C53] to-[#456882] bg-clip-text text-transparent"
        >
          Welcome Back
        </animated.h2>

        {/* Form */}
        <form onSubmit={handleLogin} className="flex flex-col gap-4">

          {/* Email Input */}
          <div className="relative group">
            <FaEnvelope className="absolute left-3 top-3.5 text-gray-400 group-focus-within:text-[#234C6A]" />
            <input
              type="email"
              placeholder="Your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border pl-10 pr-3 py-2 rounded-md w-full 
              bg-white/80 focus:bg-white 
              border-gray-300 focus:border-[#456882] 
              focus:ring-2 focus:ring-[#456882]/40 transition"
              required
            />
          </div>

          {/* Password Input */}
          <div className="relative group">
            <FaLock className="absolute left-3 top-3.5 text-gray-400 group-focus-within:text-[#234C6A]" />
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="border pl-10 pr-10 py-2 rounded-md w-full 
              bg-white/80 focus:bg-white 
              border-gray-300 focus:border-[#456882] 
              focus:ring-2 focus:ring-[#456882]/40 transition"
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

          {/* Forgot Password */}
          <div className="text-right">
            <button
              type="button"
              onClick={() => navigate("/forgot-password", { state: { email } })}
              className="text-sm text-[#234C6A] hover:underline"
            >
              Forgot Password?
            </button>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="py-2 rounded-md flex items-center justify-center gap-2 
            bg-gradient-to-r from-[#1B3C53] to-[#456882] text-white font-semibold
            hover:opacity-90 shadow-lg hover:shadow-xl transition 
            transform hover:scale-[1.02]"
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

        {/* Google Button */}
        <button
          onClick={handleGoogleLogin}
          className="w-full flex items-center justify-center gap-2 py-2 
          border border-gray-300 rounded-md hover:bg-gray-100 transition 
          transform hover:scale-[1.03]"
        >
          <FcGoogle className="text-2xl" />
          Continue with Google
        </button>

        {/* Sign Up Link */}
        <p className="mt-4 text-center text-sm text-gray-600">
          Don’t have an account?{" "}
          <Link to="/signup" className="text-[#234C6A] font-semibold hover:underline">
            Sign Up
          </Link>
        </p>
      </animated.div>
    </div>
  );
};

export default Login;
