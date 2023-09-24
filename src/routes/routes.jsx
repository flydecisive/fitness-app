import { Route, Routes } from "react-router";
import ProtectedRoute from "./protected-route";
import { DisallowedCoursePage } from "../pages/disallowed-course/disallowed-course";
import MainPage from "../pages/mainPage/MainPage";
import AuthorizationPage from "../pages/authorization/authorization";
import ProfilePage from "../pages/profilePage/ProfilePage";

function AppRoutes({ isAllowed }) {
  return (
    <Routes>
      <Route element={<ProtectedRoute isAllowed={isAllowed} />}>
        {/* Защищенные роуты */}
      </Route>

      <Route path="/" element={<MainPage />} />
      <Route path="/login" element={<AuthorizationPage />} />
      <Route path="/register" element={<AuthorizationPage />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="course/:id" element={<CoursePage />} />
      {/* Обычные роуты */}
    </Routes>
  );
}

export default AppRoutes;
