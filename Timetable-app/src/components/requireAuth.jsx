import { useLocation, Navigate, Outlet } from "react-router-dom";
import useAuth from "../Hooks/UseAuth";

export default function RequireAuth({ allowedRoles }) {
  const { user } = useAuth();
  const location = useLocation();

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  if (allowedRoles && allowedRoles.length > 0) {
    const userRoles = Array.isArray(user.role) ? user.role : [user.role];
    const hasRole = allowedRoles.some(role => userRoles.includes(role));
    if (!hasRole) {
      return <Navigate to="/unauthorized" replace />;
    }
  }

  return <Outlet />;
}
