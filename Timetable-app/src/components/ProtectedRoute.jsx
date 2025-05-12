import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function ProtectedRoute({ redirectTo = "/" }) {
  const { token } = useAuth();

  if (!token) {
    return <Navigate to={redirectTo} replace />;
  }

  return <Outlet />;
}
