import { Navigate } from "react-router-dom";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import ForgotPassword from "../pages/auth/ForgotPassword";
import ResetPassword from "../pages/auth/ResetPassword";
import EmailVerification from "../pages/auth/EmailVerification";

export const authRoutes = {
  path: "/auth",
  element: <AuthLayout />,
  children: [
    { path: "", element: <Navigate to="login" /> },
    { path: "login", element: <Login /> },
    { path: "register", element: <Register /> },
    { path: "forgot-password", element: <ForgotPassword /> },
    { path: "reset-password", element: <ResetPassword /> },
    { path: "email-verification", element: <EmailVerification /> },
  ],
};
