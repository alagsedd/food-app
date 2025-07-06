import { createBrowserRouter } from "react-router-dom";
import HomePage from "../HomePage";
import ErrorPage from "../pages/ErrorPage";
import Layout from "../components/Layout";
import SignUpPage from "../pages/SignUpPage";
import FoodDetailsPage from "../pages/FoodDetailsPage";
import Login from "../pages/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "", element: <HomePage /> },
      { path: "sign-up", element: <SignUpPage /> },
      { path: "login", element: <Login /> },
      { path: "food-details/:name", element: <FoodDetailsPage /> },
    ],
  },
]);
export default router;
