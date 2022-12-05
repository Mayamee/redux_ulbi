import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { IPost } from "../models/IPost";
export const postApi = createApi({
  reducerPath: "postApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000",
  }),
  tagTypes: ["Post"],
  endpoints: (builder) => ({
    fetchAllPosts: builder.query<IPost[], number>({
      query: (limit = 5) => ({
        url: "/posts",
        method: "GET",
        params: {
          _limit: limit,
        },
      }),
      providesTags: (result) => ["Post"],
    }),
    createPost: builder.mutation<IPost, IPost>({
      query: (body) => ({
        url: "/posts",
        method: "POST",
        body: body,
      }),
      invalidatesTags: ["Post"],
    }),
    updatePost: builder.mutation<IPost, IPost>({
      query: (body) => ({
        url: `/posts/${body.id}`,
        method: "PUT",
        body: body,
      }),
      invalidatesTags: ["Post"],
    }),
    deletePost: builder.mutation<IPost, IPost>({
      query: (body) => ({
        url: `/posts/${body.id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Post"],
    }),
  }),
});
