import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainLayout from "./layout/MainLayout";

import ReactDOM from "react-dom/client";
import "./index.css";
import LoginPage from "./components/LoginPage/login";
import Register from "./components/Register/Register";
import ForgotPassword from "./components/Forgotpassword/ForgotPassword";
import ResetPassword from "./components/ResetPassword/ResetPassword";
import Petmanagement from "./components/Petmanagement/Petmanagement";
import HomePage from "./components/HomePage/HomePage";
import ComfirmedEmail from "./components/ComfirmedEmail/ComfirmedEmail";
import Service from "./components/ServicePage/Service";
import Service_Details from "./components/Service_Details/Service_Detail";
import Cart from "./components/Carts/Cart";

import AccountInfoPage from "./components/ProfileUser/ProfileUser";

//route
const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/forgot-password",
        element: <ForgotPassword />,
      },
      {
        path: "/reset-password",
        element: <ResetPassword />,
      },
      {
        path: "/management-pet",
        element: <Petmanagement />,
      },
      {
        path: "/Service",
        element: <Service />,
      },
      {
        path: "/Service_Details",
        element: <Service_Details />,
      },
      {
        path: "/Cart",
        element: <Cart />,
      },
      {
        path: "/comfirmed-email",
        element: <ComfirmedEmail />,
      },
      {
        path: "/profile",
        element: <AccountInfoPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
