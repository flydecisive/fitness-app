import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const coursesApi = createApi({
  reducerPath: "coursesApi",
  baseQuery: fetchBaseQuery({
    baseUrl:
      "https://fitness-pro-79801-default-rtdb.europe-west1.firebasedatabase.app/",
  }),
  endpoints: (builder) => ({
    getAllCourses: builder.query({
      query: () => "courses.json",
    }),
  }),
});
