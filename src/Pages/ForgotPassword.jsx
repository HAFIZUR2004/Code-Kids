// src/Pages/ForgotPassword.jsx
import React, { useState } from "react";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../firebase.config";
import { toast } from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";
import { FaEnvelope } from "react-icons/fa";
import { useSpring, animated } from "@react-spring/web";

const ForgotPassword = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const prefillEmail = location.state?.email || "";
  const [email, setEmail] = useState(prefillEmail);
  const [loading, setLoading] = useState(false);

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

  const fadeInForm = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    delay: 300,
  });

  const handleReset = async (e) => {
    e.preventDefault();
    if (!email) return toast.error("📧 Please enter your email!");
    setLoading(true);

    try {
      await sendPasswordResetEmail(auth, email);
      toast.success("📨 Password reset email sent! Check your inbox.");
      setEmail("");
      setTimeout(() => navigate("/login"), 2000);
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
    <div
      className="min-h-screen flex items-center justify-center px-4"
      style={{
        background: "linear-gradient(135deg, #1B3C53, #234C6A, #456882)",
      }}
    >
      <animated.div
        style={fadeInCard}
        className="max-w-md w-full bg-[#D2C1B6] p-8 rounded-2xl shadow-2xl border border-[#ffffff25]"
      >
        <animated.h2
          style={fadeInTitle}
          className="text-4xl font-extrabold text-center text-[#1B3C53] mb-8"
        >
          Reset Your Password
        </animated.h2>

        <animated.form
          style={fadeInForm}
          onSubmit={handleReset}
          className="flex flex-col gap-5"
        >
          {/* Email */}
          <div className="relative">
            <FaEnvelope className="absolute left-3 top-3.5 text-[#1B3C53]" />
            <input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-white border border-[#1B3C53]/30 pl-10 pr-3 py-2 rounded-md
              focus:ring-2 focus:ring-[#234C6A] outline-none"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className={`w-full py-2 rounded-lg font-semibold text-white shadow-lg transition transform hover:scale-[1.02] ${
              loading
                ? "bg-[#234C6A]/50 cursor-not-allowed"
                : "bg-gradient-to-r from-[#234C6A] to-[#1B3C53] hover:opacity-90"
            }`}
          >
            {loading ? "Sending..." : "Send Reset Link"}
          </button>
        </animated.form>

        {/* Back to Login */}
        <p className="mt-5 text-center text-[#1B3C53] font-medium">
          Remember your password?{" "}
          <button
            onClick={() => navigate("/login")}
            className="text-[#234C6A] underline font-semibold"
          >
            Go back to Login
          </button>
        </p>
      </animated.div>
    </div>
  );
};

export default ForgotPassword;
