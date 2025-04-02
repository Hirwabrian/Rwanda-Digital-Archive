import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const ProtectedRoute = ({ allowedRoles, needsVerification = false }) => {
  const { currentUser, userRole, loading } = useAuth();

  if (loading) return <div className="p-4">Loading...</div>;

  if (!currentUser) return <Navigate to="/" replace />;

  // Handle routes that require completed verification
  if (needsVerification) {
    if (userRole === "general") {
      return <Navigate to="/pending-verification" replace />;
    }
    if (!allowedRoles?.includes(userRole)) {
      return <Navigate to="/home" replace />;
    }
  }

  // Handle regular protected routes
  if (allowedRoles && !allowedRoles.includes(userRole)) {
    return <Navigate to="/home" replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
