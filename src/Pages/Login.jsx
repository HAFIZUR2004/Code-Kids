import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { toast } from "react-hot-toast";
import { auth } from "../firebase.config";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // redirect after login
  const from = location.state?.from?.pathname || "/";

  // Email/Password Login
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      toast.success("Login successful!");
      navigate(from, { replace: true });
    } catch (error) {
      toast.error(error.message);
    }
  };

  // Google Login
  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      console.log(result.user);
      toast.success("Login with Google successful!");
      navigate(from, { replace: true });
    } catch (error) {
      console.error(error);
      toast.error(error.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>

        {/* Login Form */}
        <form onSubmit={handleLogin} className="flex flex-col gap-4">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="border px-3 py-2 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
            <button
              type="button"
              className="absolute right-2 top-2 text-gray-500"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>

          <button
            type="submit"
            className="bg-blue-500 text-white py-2 rounded-md hover:opacity-90"
          >
            Login
          </button>
        </form>

        {/* Forgot Password Link */}
        <p className="mt-4 text-center text-sm">
          Forgot your password?{" "}
          <Link
            to="/forgot-password"
            className="text-blue-500 hover:underline"
            state={{ email }}
          >
            Reset
          </Link>
        </p>

        {/* Signup Link */}
        <p className="mt-2 text-center text-sm">
          Don't have an account?{" "}
          <Link to="/signup" className="text-blue-500 hover:underline">
            Sign Up
          </Link>
        </p>

        {/* Google Login */}
        <div className="mt-4 text-center">
          <button
            onClick={handleGoogleLogin}
            className="px-4 py-2 bg-red-500 text-white rounded-md hover:opacity-90"
          >
            Login with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;



