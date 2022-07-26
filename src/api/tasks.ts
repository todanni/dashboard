import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const tasksApi = createApi({
    reducerPath: 'tasksApi',
    tagTypes: ['Tasks'],
    baseQuery: fetchBaseQuery({
        baseUrl: `todanni.com/v1/`,
        prepareHeaders: (headers) => {
            headers.set('authorization', 'Cookie');
            return headers;
        },
        credentials: 'include', // The equivalent of "withCredentials" in axios
    }),
    endpoints: (builder) => ({
        tasks: builder.query<Task[], string>({
            query: (id:string) => `/tasks`,
            providesTags: ['Tasks'],
        }),
    }),
});

interface Task {}