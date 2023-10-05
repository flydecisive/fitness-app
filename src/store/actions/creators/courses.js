import { SET_CURRENT_COURSE, SET_ALL_COURSES } from "../types/courses";

export const setCurrentCourse = (currentCourse) => ({
  type: SET_CURRENT_COURSE,
  payload: { currentCourse },
});

export const setAllCourses = (allCourses) => ({
  type: SET_ALL_COURSES,
  payload: { allCourses },
});
