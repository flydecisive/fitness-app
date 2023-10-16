/* eslint-disable react-hooks/exhaustive-deps */
import { useAllowedContext } from "../../contexts/allowed";
import AllowedCourse from "./allowed-course/allowed-course";
import { DisallowedCourse } from "./disallowed-course/disallowed-course";
import { useParams } from "react-router";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useCourseContext } from "../../contexts/course";
import { useState } from "react";
import { getUsersWorkouts } from "../../api";

function CoursePage() {
  const { isAllowed } = useAllowedContext();
  const params = useParams();
  const id = params.id;
  const uid = localStorage.getItem("uid");
  const allCourses = useSelector((store) => store.courses.allCourses);
  const { course, setCourse } = useCourseContext();
  const [usersCoursesFromApi, setUsersCoursesFromApi] = useState();
  const [isUserCourse, setIsUserCourse] = useState(false);
  const [nameInDB, setNameInDB] = useState();

  useEffect(() => {
    getUsersWorkouts().then((responseData) => {
      const keys = Object.keys(responseData);
      let data;
      for (let i = 0; i < keys.length; i++) {
        if (responseData[keys[i]]._id === uid) {
          setNameInDB(keys[i]);
          data = responseData[keys[i]];
        }
      }
      setUsersCoursesFromApi(data?.courses);
    });
  }, []);

  useEffect(() => {
    if (usersCoursesFromApi) {
      setIsUserCourse(usersCoursesFromApi.includes(id));
    }
  }, [usersCoursesFromApi]);

  useEffect(() => {
    if (allCourses) {
      allCourses.forEach((elem) => {
        if (elem._id === id) {
          setCourse(elem);
        }
      });
    }
  }, [allCourses]);

  return isAllowed && isUserCourse ? (
    <AllowedCourse course={course} />
  ) : (
    <DisallowedCourse
      course={course}
      nameInDB={nameInDB}
      usersCoursesFromApi={usersCoursesFromApi}
    />
  );
}

export default CoursePage;
