import { Route, Routes } from "react-router";
import ProtectedRoute from "./protected-route";
import { CoursePage } from "../pages/course/course";
import MainPage from "../pages/mainPage/MainPage";

function AppRoutes({ isAllowed }) {
  return (
    <Routes>
      <Route element={<ProtectedRoute isAllowed={isAllowed} />}>
        {/* Защищенные роуты */}
      </Route>
      <Route path="/" element={<MainPage />} />

      <Route path="course/:id" element={<CoursePage />} />
      {/* Обычные роуты */}
    </Routes>
  );
}

export default AppRoutes;
