import { createBrowserRouter } from "react-router-dom";

// Layouts
import Homelayouts from "../layouts/Homelayouts";

// Pages
import Signup from "../Pages/Signup";
import Login from "../Pages/Login";
import Profile from "../Pages/Profile";
import EditProfile from "../Pages/EditProfile";
import SkillDetails from "../Pages/SkillDetails";

// Components
import PopularSkills from "../Components/PopularSkills";
import SkillCard from "../Components/SkillCard";

// Route Protection
import ProtectedRoute from "../components/ProtectedRoute";
import PopularCourses from "../Pages/PopularCourses";
import Home from "../Pages/Home";
import ForgotPassword from "../Pages/ForgotPassword";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homelayouts />,
    children: [
      // Home / Popular Skills
      {
        path: "/",
        element: <Home />, // Home page showing PopularSkills + PopularCourses
      },

      // Profile
      {
        path: "/profile",
        element: <Profile />,
      },

      // Edit Profile
      {
        path: "/edit-profile",
        element: <EditProfile />,
      },

      // Protected Skill Details
      {
        path: "/skill/:skillId",
        element: (
          <ProtectedRoute>
            <SkillDetails />
          </ProtectedRoute>
        ),
      },
    ],
  },

  // Authentication
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  // Forgot Password
  {
    path: "/forgot-password",
    element: <ForgotPassword />,
  },


  // Skill Card (optional standalone page)
  {
    path: "/skillcard",
    element: <SkillCard />,
  },
]);

export default router;
