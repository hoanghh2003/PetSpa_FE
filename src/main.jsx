import { RouterProvider, createBrowserRouter } from "react-router-dom";
// import MainLayout from "./layout/MainLayout";
import Home from "./pages/home/Home";
import ReactDOM from "react-dom/client";
import "./index.css";
import LoginPage from "./components/LoginPage/login";
import Register from "./components/Register/Register";
import ForgotPassword from "./components/Forgotpassword/ForgotPassword";
import ResetPassword from "./components/ResetPassword/ResetPassword";
import Petmanagement from "./components/Petmanagement/Petmanagement";
import HomePage from "./components/HomePage/HomePage";
import Service from "./components/Service/Service";
import Service_Details from "./components/Service_Details/Service_Details";
import Cart from "./components/Cart/Cart";
import MainLayout from "./layout/MainLayout";
//route
const router = createBrowserRouter([
  {
    element: <MainLayout/>,
    children: [
      {
        path: "/",
        element: <Home />,
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
        path: "/HOMEPage",
        element: <HomePage />,
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
        element: <Cart/>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
