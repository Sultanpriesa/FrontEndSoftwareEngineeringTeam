import { useLocation, Navigate, Outlet } from "react-router-dom";
import useAuth from "../Hooks/UseAuth";

export default function RequireAuth({ allowedRoles }) {
  const { user } = useAuth();
  const location = useLocation();

  if (!user) {
    // Not logged in
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  // Role-based authorization
  if (allowedRoles && allowedRoles.length > 0) {
    // user.role can be a string or array depending on your backend
    const userRoles = Array.isArray(user.role) ? user.role : [user.role];
    const hasRole = allowedRoles.some(role => userRoles.includes(role));
    if (!hasRole) {
      // Not authorized for this route
      return <Navigate to="/unauthorized" replace />;
    }
  }

  return <Outlet />;
}
