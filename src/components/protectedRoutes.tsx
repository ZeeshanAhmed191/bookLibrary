import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const ProtectedRoute = () => {
  const { admin, loading } = useAuth();

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return admin ? <Outlet /> : <Navigate to="/uk-zadminpanel" replace />;
};

export default ProtectedRoute;