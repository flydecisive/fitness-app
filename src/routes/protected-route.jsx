import { Navigate, Outlet } from "react-router-dom";

// протектед роут
// редирект на главную

function ProtectedRoute({ redirectPath = "/", isAllowed }) {
  if (!isAllowed) {
    return <Navigate to={redirectPath} replace />;
  }

  return <Outlet />;
}

export default ProtectedRoute;
