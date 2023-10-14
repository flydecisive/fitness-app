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

  // const [usersCourses, setUsersCourses] = useState();

  useEffect(() => {
    getUsersWorkouts().then((responseData) => {
      setUsersCoursesFromApi(responseData[uid].courses);
    });
  }, []);

  useEffect(() => {
    if (usersCoursesFromApi) {
      setIsUserCourse(usersCoursesFromApi.includes(id));
    }
  }, [usersCoursesFromApi]);

  // useEffect(() => {
  //   if (allCourses && usersCoursesFromApi) {
  //     const courses = [];
  //     for (let i = 0; i < allCourses.length; i++) {
  //       for (let j = 0; j < usersCoursesFromApi.length; j++) {
  //         if (allCourses[i]._id === usersCoursesFromApi[j]) {
  //           courses.push(allCourses[i]);
  //         }
  //       }
  //     }
  //     setUsersCourses(courses);
  //   }
  // }, [usersCoursesFromApi]);

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
    <DisallowedCourse course={course} />
  );
}

export default CoursePage;
