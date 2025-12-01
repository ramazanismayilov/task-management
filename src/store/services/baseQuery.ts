import { fetchBaseQuery, type FetchArgs, type FetchBaseQueryError } from "@reduxjs/toolkit/query";
import type { BaseQueryFn } from "@reduxjs/toolkit/query";
import { BASE_URL } from "../../lib/config/api";
import { logoutUser } from "../slices/auth.slice";
import { endpoints } from "../../lib/config/endpoints";

const baseQuery = fetchBaseQuery({
  baseUrl: BASE_URL,
  prepareHeaders: (headers) => {
    const token = localStorage.getItem("accessToken");
    if (token) headers.set("authorization", `Bearer ${token}`);
    return headers;
  },
});

const baseQueryWithReauth: BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError> = async (args, store, extraOptions) => {
  let result = await baseQuery(args, store, extraOptions);

  if (result.error?.status === 401) {
    const refreshToken = localStorage.getItem("refreshToken")
    if (!refreshToken) {
      store.dispatch(logoutUser())
      return {error: result.error}
    }

    const refreshResult = await baseQuery(
      {
        url: endpoints.AUTH.REFRESH_TOKEN,
        method: "POST",
        body: { refreshToken },
      },
      store,
      extraOptions
    );

    const newAccessToken = (refreshResult.data as any)?.data?.accessToken ?? null;
    if (newAccessToken) {
      localStorage.setItem("accessToken", newAccessToken);

      result = await baseQuery(args, store, extraOptions);
    } else {
      store.dispatch(logoutUser());
    }
  }

  return result;
};

export default baseQueryWithReauth;
