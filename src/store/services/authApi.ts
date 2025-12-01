import { createApi } from "@reduxjs/toolkit/query/react";
import baseQueryWithReauth from "./baseQuery";
import { endpoints } from "../../lib/config/endpoints";

export const authApi = createApi({
    reducerPath: "authApi",
    baseQuery: baseQueryWithReauth,
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (body) => ({
                url: endpoints.AUTH.LOGIN,
                method: "POST",
                body,
            }),
        })
    })
});

export const { useLoginMutation } = authApi;
