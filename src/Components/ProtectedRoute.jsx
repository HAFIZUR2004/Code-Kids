import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const ProtectedRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    // Optional: loading spinner
    return <div>Loading...</div>;
  }

  if (!user) {
    // User logged in না থাকলে login page এ redirect
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  // User logged in থাকলে children render হবে
  return children;
};

export default ProtectedRoute;
