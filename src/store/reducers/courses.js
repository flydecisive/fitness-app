import { SET_CURRENT_COURSE } from "../actions/types/courses";

const initialState = {
  currentCourse: [],
};

function courceReducer(state = initialState, action) {
  switch (action.type) {
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
