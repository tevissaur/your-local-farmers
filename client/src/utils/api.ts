import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import request, {  gql, ClientError, GraphQLClient } from 'graphql-request'



const graphqlBaseQuery = ({ baseUrl }: { baseUrl: string }) => async ({ body }: { body: string }) => {
    try {
        const result = await request(baseUrl, body)
        return { data: result }
    } catch (error) {
        if (error instanceof ClientError) {
            return { error: { status: error.response.status, data: error } }
        }
        return { error: { status: 500, data: error }}
    }
}

export const api = createApi({
    baseQuery: graphqlBaseQuery({
        baseUrl: '/graphql'
    }),
    endpoints: () => ({})
})
