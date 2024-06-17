import { RouterProvider, createBrowserRouter } from "react-router-dom";
// import MainLayout from "./layout/MainLayout";
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
import Account from "./components/Account/Account";
import AccountSetting from "./components/Account/AccountSetting";
import PrivacyPolicyTerms from "./components/Register/policy";
import Logout from "./components/Logout/logout";
//route
const router = createBrowserRouter([
  {
    element: <MainLayout/>,
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
      {
        path: "/Account",
        element: <Account/>,
      },
      {
        path: "/AccountSetting",
        element: <AccountSetting/>,
      },
      {
        path: "/Pet",
        element: <Petmanagement/>,
      },
      {
        path: "/policy",
        element: <PrivacyPolicyTerms/>,
      },
      {
        path: "/logout",
        element: <Logout/>,
      },
    ],
  },
  
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
