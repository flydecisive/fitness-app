import styles from "./App.module.css";
import AppRoutes from "./routes/routes";
import { UserContext } from "./contexts/user";
import { AllowedContext } from "./contexts/allowed";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useGetAllCoursesQuery } from "./services/courses";
import { setAllCourses } from "./store/actions/creators/courses";

function App() {
  const [uid, setUid] = useState(localStorage.getItem("uid"));
  const [email, setEmail] = useState(localStorage.getItem("email"));
  const [isAllowed, setIsAllowed] = useState(email || uid ? true : false);
  const dispatch = useDispatch();
  const allCourses = useGetAllCoursesQuery().data;

  useEffect(() => {
    if (allCourses) {
      const courses = [];
      const keys = Object.keys(allCourses);
      keys.forEach((key) => courses.push(allCourses[key]));
      dispatch(setAllCourses(courses));
    }
  }, [allCourses]);

  return (
    <div className={styles.App}>
      <UserContext.Provider value={{ uid, setUid, email, setEmail }}>
        <AllowedContext.Provider value={{ isAllowed, setIsAllowed }}>
          <AppRoutes />
        </AllowedContext.Provider>
      </UserContext.Provider>
    </div>
  );
}

export default App;
