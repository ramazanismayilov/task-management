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
        register: builder.mutation({
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
        }),
        resendOtp: builder.mutation({
            query: (body) => ({
                url: endpoints.AUTH.RESENDOTP,
                method: "POST",
                body,
            }),
        }),
        forgetPassword: builder.mutation({
            query: (body) => ({
                url: endpoints.AUTH.FORGETPASSWORD,
                method: "POST",
                body,
            }),
        })
    })
});

export const { useLoginMutation, useRegisterMutation, useVerifyOtpMutation, useResendOtpMutation, useForgetPasswordMutation } = authApi;
