import { Route, Routes } from "react-router";
import ProtectedRoute from "./protected-route";

function AppRoutes({ isAllowed }) {
  return (
    <Routes>
      <Route element={<ProtectedRoute isAllowed={isAllowed} />}>
        {/* Защищенные роуты */}
      </Route>
    </Routes>

    // Обычные роуты
  );
}

export default AppRoutes;
