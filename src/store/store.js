import { configureStore } from "@reduxjs/toolkit";
import courceReducer from "./reducers/courses";
import { coursesApi } from "../services/courses";

const store = configureStore({
  reducer: {
    [coursesApi.reducerPath]: coursesApi.reducer,
    courses: courceReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(coursesApi.middleware),
});

export default store;
