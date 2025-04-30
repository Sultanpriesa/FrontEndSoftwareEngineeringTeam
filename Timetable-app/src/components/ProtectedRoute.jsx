import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";

export default function ProtectedRoute({ requireAdmin = false, redirectTo = "/" }) {
  const { user, isAdmin } = useAuth();

  if (!user) {
    return <Navigate to={redirectTo} replace />;
  }
  if (requireAdmin && !isAdmin()) {
    return <Navigate to="/unauthorized" replace />;
  }
  return <Outlet />;
}
