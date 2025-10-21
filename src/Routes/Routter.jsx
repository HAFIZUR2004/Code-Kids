import { createBrowserRouter } from "react-router-dom"; // ⚠️ 'react-router-dom' ব্যবহার করা উচিত

import Homelayouts from "../layouts/Homelayouts";
import Signup from "../Pages/Signup";
import Login from "../Pages/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homelayouts />,
  },
  {
    path:"/signup",
    element:<Signup></Signup>,
  },
  {
    path:"/login",
    element:<Login></Login>,
  }
//   {
//     path: "/about",
//     element: <About />,
//   },
]);

export default router;

// codekids