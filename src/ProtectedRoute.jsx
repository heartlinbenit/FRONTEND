// src/ProtectedRoute.jsx
import { Navigate } from "react-router-dom";
import { useAuth } from "./context/AuthContext"; // Make sure the path is correct for your useAuth context

export default function ProtectedRoute({ children }) {
  const { isAdminLoggedIn } = useAuth(); // Access auth context to check login status

  // If the user is not an admin, redirect them to the login page
  if (!isAdminLoggedIn) {
    return <Navigate to="/admin/login" />;
  }

  // If logged in as admin, render the children components (like AdminPage)
  return children;
}
