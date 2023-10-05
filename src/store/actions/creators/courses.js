import { SET_CURRENT_COURSE } from "../types/courses";

export const setAllCourses = (currentCourse) => ({
  type: SET_CURRENT_COURSE,
  payload: { currentCourse },
});
