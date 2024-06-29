import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { orderUrl } from '../../constant/constant';


export const orderApi = createApi({
  reducerPath: 'orderApi',
  baseQuery: fetchBaseQuery({
     baseUrl:orderUrl
    }),
  endpoints: (builder) => ({

    getAllOrders: builder.query({
      query: (query) => ({   
        url: '/',
        method: 'GET',
        headers: {
          Authorization: query
        }
      })
    }),
    getOrderById: builder.query({
      query: (query) => ({
        url: `/${query.id}`,
        method: 'GET',
        headers: {
          Authorization: query.token
        }
      })
    }),
    addOrder : builder.mutation({
      query: (query) => ({
        url: '/',
        body: query.body,
        method: 'POST',
        headers: {
          Authorization: query.token
        }
      })
    }),



  }),
});


export const {useAddOrderMutation, useGetAllOrdersQuery,useGetOrderByIdQuery } = orderApi;