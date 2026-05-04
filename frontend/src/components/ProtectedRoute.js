import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Navigate } from "react-router-dom";

function ProtectedRoute({ children, role }) {
  const { currentUser } = useContext(AuthContext);

  // 🔥 wait until localStorage loads
  if (!currentUser) {
    return <Navigate to="/login" />;
  }

  // 🔥 role check
  if (role && currentUser.role !== role) {
    return <Navigate to="/" />;
  }

  return children;
}

export default ProtectedRoute;