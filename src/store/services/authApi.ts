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
        }),
        regiser: builder.mutation({
            query: (body) => ({
                url: endpoints.AUTH.REGISTER,
                method: "POST",
                body,
            }),
        }),
        verifyOtp: builder.mutation({
            query: (body) => ({
                url: endpoints.AUTH.VERIFYOTP,
                method: "POST",
                body,
            }),
        })
    })
});

export const { useLoginMutation, useRegiserMutation } = authApi;
