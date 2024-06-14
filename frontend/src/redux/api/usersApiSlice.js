// userApiSlice.js

import { apiSlice } from "./apiSlice";
import { USERS_URL } from "../constants";

export const userApiSlice = apiSlice.injectEndpoints({
   endpoints: (builder) => ({
      login: builder.mutation({
         query: (data) => ({
            url: `${USERS_URL}/auth`,
            method: "POST",
            body: data,
         }),
      }),
      register: builder.mutation({
         query: (userData) => ({
            url: `${USERS_URL}/register`,
            method: "POST",
            body: userData,
         }),
      }),
   }),
});

export const { useLoginMutation, useRegisterMutation } = userApiSlice;
