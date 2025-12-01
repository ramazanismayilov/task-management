import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "./services/authApi";
import authReducer from "./slices/auth.slice";
import spinnerReducer from "./slices/spinner.slice";
import { spinnerMiddleware } from "./middleware/spinner.middleware";
import { toastMiddleware } from "./middleware/toast.middleware";

const preloadedAuth = {
    userId: Number(localStorage.getItem("userId")) || null,
    accessToken: localStorage.getItem("accessToken"),
    refreshToken: localStorage.getItem("refreshToken"),
};

export const store = configureStore({
    reducer: {
        [authApi.reducerPath]: authApi.reducer,
        auth: authReducer,
        spinner: spinnerReducer,
    },
    preloadedState: {
        auth: preloadedAuth
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(
            authApi.middleware,
            spinnerMiddleware,
            toastMiddleware
        ),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
