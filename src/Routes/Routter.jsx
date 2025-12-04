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
import HowItWorks from "../Pages/HowItWorks";
import TopRatedProviders from "../Pages/TopRatedProviders";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import Support from "../Pages/Support";
import AllItems from "../Pages/AllItems";
import Review from "../Pages/Review";
import ErrorPage from "../Pages/ErrorPage";
import ExplorePage from "../Pages/ExplorePage";


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

      {
        path: "/about-us",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/support",
        element: <Support />,
      },
      {
        path: "/items",
        element: <AllItems />,
      },

      // Profile
      {
        path: "/view-profile",
        element: <Profile />,
      },

      // Edit Profile
      {
        path: "/edit-profile",
        element: <EditProfile />,
      },
      // {
      //   path: "/edit-profile",
      //   element: <EditProfile />,
      // },

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
  }, {
    path: "*",
    element: <ErrorPage />,
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
  {
    path: "/explore",
    element: <ExplorePage />,
  },
  {
    path: "/howitworks",
    element: <HowItWorks></HowItWorks>,
  },
  {
    path: "/review",
    element: <Review></Review>,
  },
  {
    path: "/topRatedProviders",
    element: <TopRatedProviders></TopRatedProviders>,
  },
]);

export default router;
