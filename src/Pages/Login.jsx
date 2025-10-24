import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { toast, Toaster } from "react-hot-toast";
import { auth } from "../firebase.config";
import { FaEnvelope, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { TbLogin2 } from "react-icons/tb";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  // Email/Password Login
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      toast.success("Login successful!", { duration: 3000 });
      navigate(from, { replace: true });
    } catch (error) {
      toast.error(error.message, { duration: 3500 });
    }
  };

  // Google Login
  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      toast.success("Login with Google successful!", { duration: 3000 });
      navigate(from, { replace: true });
    } catch (error) {
      toast.error(error.message, { duration: 3500 });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-purple-100 px-4">
      <Toaster position="top-center" reverseOrder={false} />
      <div className="max-w-md w-full bg-white p-8 rounded-2xl shadow-xl">
        <h2 className="text-3xl font-extrabold mb-6 text-center text-gray-800">Login</h2>

        {/* Login Form */}
        <form onSubmit={handleLogin} className="flex flex-col gap-4">
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

          {/* Login Button */}
          <button
            type="submit"
            className="bg-blue-600 text-white py-2 rounded-md flex items-center justify-center gap-2 hover:bg-blue-700 transition transform hover:scale-[1.02]"
          >
            <TbLogin2 className="text-lg" />
            Login
          </button>
        </form>

        {/* Forgot Password */}
        <p className="mt-4 text-center text-sm text-gray-600">
          Forgot your password?{" "}
          <Link to="/forgot-password" className="text-blue-600 hover:underline" state={{ email }}>
            Reset
          </Link>
        </p>

        {/* Signup Link */}
        <p className="mt-2 text-center text-sm text-gray-600">
          Don't have an account?{" "}
          <Link to="/signup" className="text-blue-600 hover:underline">
            Sign Up
          </Link>
        </p>

        {/* Divider */}
        <div className="flex items-center gap-3 my-5">
          <hr className="flex-1 border-gray-300" />
          <span className="text-gray-400 text-sm">or</span>
          <hr className="flex-1 border-gray-300" />
        </div>

        {/* Google Login */}
        <button
          onClick={handleGoogleLogin}
          className="w-full flex items-center justify-center gap-2 py-2 border border-gray-300 rounded-md hover:bg-gray-100 transition transform hover:scale-[1.03]"
        >
          <FcGoogle className="text-2xl" />
          <span>Continue with Google</span>
        </button>
      </div>
    </div>
  );
};

export default Login;
