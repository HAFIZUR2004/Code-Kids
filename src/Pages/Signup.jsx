import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  createUserWithEmailAndPassword,
  updateProfile,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../firebase.config";
import { toast, Toaster } from "react-hot-toast";
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

  // React Spring Animations
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

    const uppercase = /[A-Z]/.test(password);
    const lowercase = /[a-z]/.test(password);
    if (!uppercase || !lowercase || password.length < 6) {
      toast.error(
        "⚠️ Password must be at least 6 characters and include both uppercase and lowercase letters.",
        { duration: 3500 }
      );
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(userCredential.user, { displayName: name, photoURL });
      toast.success("🎉 Signup successful! Welcome aboard.", { duration: 3000 });
      navigate("/"); // Redirect to Home page
    } catch (error) {
      toast.error(error.message, { duration: 3500 });
    }
  };

  // Google signup
  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      toast.success("🌈 Google signup successful! Welcome aboard.", { duration: 3000 });
      navigate("/"); // Redirect to Home page
    } catch (error) {
      toast.error(error.message, { duration: 3500 });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-purple-100 px-4">
      {/* Global Toaster */}
      <Toaster
        position="top-center"
        reverseOrder={false}
        toastOptions={{
          duration: 3500,
          style: {
            fontSize: "16px",
          },
        }}
      />

      <animated.div
        style={fadeInCard}
        className="max-w-md w-full bg-white p-8 rounded-2xl shadow-lg"
      >
        <animated.h2
          style={fadeInTitle}
          className="text-4xl font-extrabold mb-6 text-center text-black"
        >
          Create Account
        </animated.h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          {/* Name Field */}
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

          {/* Email Field */}
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

          {/* Photo URL Field */}
          <div className="relative">
            <FaPhotoVideo className="absolute left-3 top-3.5 text-gray-400" />
            <input
              type="text"
              placeholder="Photo URL"
              value={photoURL}
              onChange={(e) => setPhotoURL(e.target.value)}
              className="border pl-10 pr-3 py-2 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Password Field */}
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
            className="bg-blue-500 text-white flex items-center justify-center gap-2 py-2 rounded-md hover:opacity-90 transition transform hover:scale-[1.02]"
          >
            Register
          </button>
        </form>

        {/* Already have account */}
        <p className="mt-4 text-center text-sm">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-600 hover:underline">
            Login
          </Link>
        </p>

        {/* Continue with Google */}
        <div className="mt-4 text-center">
          <button
            className="flex items-center justify-center gap-2 px-4 py-2 bg-white border border-gray-300 text-gray-700 w-full rounded-md hover:bg-gray-50 transition transform hover:scale-[1.03]"
            onClick={handleGoogleLogin}
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
