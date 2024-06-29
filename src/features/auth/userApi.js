import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { userUrl } from '../../constant/constant';


export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({ baseUrl:userUrl}),
  endpoints: (builder) => ({

    userLogin: builder.mutation({
      query: (query) => ({
        url: '/login',
        body: query,
        method: 'POST'
      })
    }),
    userRegister: builder.mutation({
      query: (query) => ({
        url: '/signup',
        body: query,
        method: 'POST'
      })
    }),



  }),
});


export const { useUserLoginMutation,useUserRegisterMutation } = userApi;