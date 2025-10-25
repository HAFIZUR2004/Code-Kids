// src/Pages/ForgotPassword.jsx
import React, { useState } from "react";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../firebase.config";
import { toast } from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";
import { FaEnvelope } from "react-icons/fa";

const ForgotPassword = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Pre-fill email from Login page (if passed)
  const prefillEmail = location.state?.email || "";
  const [email, setEmail] = useState(prefillEmail);
  const [loading, setLoading] = useState(false);

  const handleReset = async (e) => {
    e.preventDefault();
    if (!email) return toast.error("📧 Please enter your email!");
    setLoading(true);

    try {
      await sendPasswordResetEmail(auth, email);
      toast.success("📨 Password reset email sent! Check your inbox.");
      setEmail("");
      setTimeout(() => navigate("/login"), 3000);
    } catch (error) {
      if (error.code === "auth/user-not-found") {
        toast.error("🙁 No user found with this email.");
      } else if (error.code === "auth/invalid-email") {
        toast.error("⚠️ Invalid email address.");
      } else {
        toast.error("⚠️ Something went wrong!");
      }
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-purple-100 px-4">
      <div className="max-w-md w-full bg-white p-8 rounded-2xl shadow-lg">
        <h2 className="text-2xl font-bold mb-6 text-center text-black">
          Reset Your Password
        </h2>

        <form onSubmit={handleReset} className="flex flex-col gap-4">
          {/* Email Field */}
          <div className="relative">
            <FaEnvelope className="absolute left-3 top-3.5 text-gray-400" />
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border pl-10 pr-3 py-2 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          {/* Reset Button */}
          <button
            type="submit"
            disabled={loading}
            className={`py-2 rounded-md text-white font-medium transition transform hover:scale-[1.02] ${
              loading
                ? "bg-blue-400 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-700"
            }`}
          >
            {loading ? "Sending..." : "Send Reset Link"}
          </button>
        </form>

        <p className="mt-4 text-center text-sm">
          Remember your password?{" "}
          <button
            onClick={() => navigate("/login")}
            className="text-blue-600 hover:underline"
          >
            Go back to Login
          </button>
        </p>
      </div>
    </div>
  );
};

export default ForgotPassword;
