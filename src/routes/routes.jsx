import { Route, Routes } from "react-router";
import ProtectedRoute from "./protected-route";
import MainPage from "../pages/main-page/main-page";
import AuthorizationPage from "../pages/authorization-page/authorization-page";
import ProfilePage from "../pages/profile-page/profile-page";
import { useAllowedContext } from "../contexts/allowed";
import CoursePage from "../pages/course-page/course-page";

function AppRoutes() {
  const { isAllowed } = useAllowedContext();

  return (
    <Routes>
      <Route element={<ProtectedRoute isAllowed={isAllowed} />}>
        <Route path="/profile" element={<ProfilePage />} />
      </Route>
      <Route path="/" element={<MainPage />} />
      <Route path="/login" element={<AuthorizationPage />} />
      <Route path="/registration" element={<AuthorizationPage />} />
      <Route path="/course/:id" element={<CoursePage />} />

      {/* <Route path="/course" element={<CoursePage />} />
      <Route path="/course/:id" element={<DisallowedCoursePage />} /> */}
    </Routes>
  );
}

export default AppRoutes;
