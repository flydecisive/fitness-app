import { SET_CURRENT_COURSE, SET_ALL_COURSES } from "../actions/types/courses";

const initialState = {
  allCourses: [],
  currentCourse: [],
};

function courceReducer(state = initialState, action) {
  switch (action.type) {
    case SET_ALL_COURSES: {
      const { allCourses } = action.payload;

      return {
        ...state,
        allCourses,
      };
    }

    case SET_CURRENT_COURSE: {
      const { currentCourse } = action.payload;

      return {
        ...state,
        currentCourse,
      };
    }

    default:
      return state;
  }
}

export default courceReducer;
