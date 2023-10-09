import React, { useContext } from "react";

export const CourseContext = React.createContext({
  course: undefined,
  setCourse: () => {},
});

export function useCourseContext() {
  const course = useContext(CourseContext);

  return course;
}
