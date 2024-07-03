import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children, allowedRoles }) => {
  const userInfoString = localStorage.getItem("user-info");
  if (!userInfoString) {
    // Nếu không có thông tin người dùng, điều hướng đến trang đăng nhập hoặc trang khác
    return <Navigate to="/login" replace />;
  }

  const userInfo = JSON.parse(userInfoString);
  const role = userInfo.data.user.role;
  if (!allowedRoles.includes(role)) {
    // Nếu vai trò người dùng không được phép, điều hướng đến trang khác
    return <Navigate to="/" replace />;
  }

  // Nếu vai trò người dùng được phép, render component con
  return children;
};

export default ProtectedRoute;
