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
import {
  FaUser,
  FaEnvelope,
  FaLock,
  FaEye,
  FaEyeSlash,
  FaPhotoVideo,
} from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const Signup = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [photoURL, setPhotoURL] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  // Animations
  const fadeInCard = useSpring({
    from: { opacity: 0, transform: "translateY(30px)" },
    to: { opacity: 1, transform: "translateY(0)" },
    config: { tension: 160, friction: 20 },
  });

  const fadeInTitle = useSpring({
    from: { opacity: 0, transform: "translateY(-20px)" },
    to: { opacity: 1, transform: "translateY(0)" },
    delay: 150,
  });

  const fadeInFields = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    delay: 300,
  });

  // Signup handle
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!/[A-Z]/.test(password) || !/[a-z]/.test(password) || password.length < 6) {
      return toast.error(
        "⚠️ Password must be at least 6 chars and contain upper & lower letters."
      );
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(userCredential.user, { displayName: name, photoURL });
      toast.success("🎉 Signup successful!");
      setTimeout(() => navigate("/"), 2000);
    } catch (error) {
      toast.error(error.message);
    }
  };

  // Google signup
  const handleGoogleLogin = async () => {
    try {
      await signInWithPopup(auth, new GoogleAuthProvider());
      toast.success("🌈 Google signup successful!");
      setTimeout(() => navigate("/"), 2000);
    } catch (err) {
      toast.error(err.message);
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center px-4"
      style={{
        background: "linear-gradient(135deg, #1B3C53, #234C6A, #456882)",
      }}
    >
      {/* Card */}
      <animated.div
        style={fadeInCard}
        className="max-w-md w-full bg-[#D2C1B6] p-8 rounded-2xl shadow-2xl border border-[#ffffff25]"
      >
        {/* Title */}
        <animated.h2
          style={fadeInTitle}
          className="text-4xl font-extrabold text-center text-[#1B3C53] mb-8"
        >
          Create Account
        </animated.h2>

        <animated.form
          style={fadeInFields}
          onSubmit={handleSubmit}
          className="flex flex-col gap-5"
        >
          {/* Name */}
          <div className="relative">
            <FaUser className="absolute left-3 top-3.5 text-[#1B3C53]" />
            <input
              type="text"
              placeholder="Your Full Name"
              className="w-full bg-white border border-[#1B3C53]/30 pl-10 pr-3 py-2 rounded-md
              focus:ring-2 focus:ring-[#234C6A] outline-none"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          {/* Email */}
          <div className="relative">
            <FaEnvelope className="absolute left-3 top-3.5 text-[#1B3C53]" />
            <input
              type="email"
              placeholder="Email Address"
              className="w-full bg-white border border-[#1B3C53]/30 pl-10 pr-3 py-2 rounded-md
              focus:ring-2 focus:ring-[#234C6A] outline-none"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          {/* Photo URL */}
          <div className="relative">
            <FaPhotoVideo className="absolute left-3 top-3.5 text-[#1B3C53]" />
            <input
              type="text"
              placeholder="Profile Photo URL (optional)"
              className="w-full bg-white border border-[#1B3C53]/30 pl-10 pr-3 py-2 rounded-md
              focus:ring-2 focus:ring-[#234C6A] outline-none"
              value={photoURL}
              onChange={(e) => setPhotoURL(e.target.value)}
            />
          </div>

          {/* Password */}
          <div className="relative">
            <FaLock className="absolute left-3 top-3.5 text-[#1B3C53]" />
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Create Password"
              className="w-full bg-white border border-[#1B3C53]/30 pl-10 pr-10 py-2 rounded-md
              focus:ring-2 focus:ring-[#234C6A] outline-none"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-3.5 text-[#1B3C53]"
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-[#234C6A] to-[#1B3C53] text-white py-2 
            rounded-lg font-semibold shadow-lg hover:scale-[1.02] transition"
          >
            Register
          </button>
        </animated.form>

        <p className="mt-5 text-center text-[#1B3C53] font-medium">
          Already have an account?{" "}
          <Link to="/login" className="text-[#234C6A] underline">
            Login
          </Link>
        </p>

        <div className="mt-5">
          <button
            onClick={handleGoogleLogin}
            className="w-full flex items-center justify-center gap-2 py-2 bg-white border 
            border-[#1B3C53]/30 rounded-md hover:bg-[#fff8f3] transition font-semibold"
          >
            <FcGoogle className="text-2xl" />
            Continue with Google
          </button>
        </div>
      </animated.div>
    </div>
  );
};

export default Signup;
