import { Route, Routes } from "react-router";
import ProtectedRoute from "./protected-route";
import { DisallowedCoursePage } from "../pages/disallowed-course/disallowed-course";
import MainPage from "../pages/main-page/main-page";
import AuthorizationPage from "../pages/authorization-page/authorization-page";
import ProfilePage from "../pages/profile-page/profile-page";
import CoursePage from "../pages/course-page/course-page";

function AppRoutes({ isAllowed }) {
  return (
    <Routes>
      <Route element={<ProtectedRoute isAllowed={isAllowed} />}>
        {/* Защищенные роуты */}
      </Route>
      <Route path="/course" element={<CoursePage />} />
      <Route path="/" element={<MainPage />} />
      <Route path="/login" element={<AuthorizationPage />} />
      <Route path="/registration" element={<AuthorizationPage />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/course/:id" element={<DisallowedCoursePage />} />
      {/* Обычные роуты */}
    </Routes>
  );
}

export default AppRoutes;
