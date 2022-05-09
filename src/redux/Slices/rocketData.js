import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query'

export const rocketApi = createApi({
    reducerPath: 'rockets',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://api.spacexdata.com/v3/launches' }),
    endpoints: (builder) => ({
        getRockets: builder.query({
            query: () => {
                return {
                    method: 'GET'
                }
            }
        })
    }),
})

export const { useGetRocketsQuery } = rocketApi;