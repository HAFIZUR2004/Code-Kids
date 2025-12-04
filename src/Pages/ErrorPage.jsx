import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-[#1B3C53] to-[#234C6A] text-[#D2C1B6] px-4">
      
      {/* Animated 404 Number */}
      <motion.h1
        className="text-9xl md:text-[12rem] font-extrabold mb-6"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
      >
        404
      </motion.h1>

      {/* Error Text */}
      <motion.h2
        className="text-3xl md:text-4xl font-bold mb-4"
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        Oops! Page Not Found
      </motion.h2>

      {/* Description */}
      <motion.p
        className="mb-8 text-center max-w-md text-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.6 }}
      >
        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
      </motion.p>

      {/* Go Back Home Button */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.5 }}
      >
        <Link
          to="/"
          className="bg-[#D2C1B6] text-[#1B3C53] px-8 py-3 rounded-full font-semibold shadow-lg hover:bg-white hover:scale-105 transition-transform duration-300"
        >
          Go Back Home
        </Link>
      </motion.div>

      {/* Optional subtle floating animation */}
      <motion.div
        className="absolute bottom-10 w-32 h-32 rounded-full bg-[#D2C1B6]/20"
        animate={{ y: [0, -20, 0] }}
        transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
      />
    </div>
  );
};

export default ErrorPage;
