import { useAllowedContext } from "../../contexts/allowed";
import AllowedCourse from "./allowed-course/allowed-course";
import { DisallowedCourse } from "./disallowed-course/disallowed-course";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useCourseContext } from "../../contexts/course";

function CoursePage() {
  const { isAllowed } = useAllowedContext();
  const params = useParams();
  const id = params.id;
  const allCourses = useSelector((store) => store.courses.allCourses);
  // const [course, setCourse] = useState({});
  const { course, setCourse } = useCourseContext();

  useEffect(() => {
    if (allCourses) {
      allCourses.forEach((elem) => {
        if (elem._id === id) {
          setCourse(elem);
        }
      });
    }
  }, [allCourses]);

  return isAllowed ? (
    <AllowedCourse course={course} />
  ) : (
    <DisallowedCourse course={course} />
  );
}

export default CoursePage;
