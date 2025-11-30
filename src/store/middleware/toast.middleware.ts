import { isRejected, isFulfilled, type Middleware } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

interface BackendResponse {
    success: boolean;
    statusCode: number;
    message: string;
    data?: any;
}

export const toastMiddleware: Middleware = () => (next) => (action) => {
    if (isFulfilled(action)) {
        let message = "Əməliyyat uğurludur";

        const payload = action.payload as BackendResponse;

        if (payload && typeof payload === "object" && "message" in payload) {
            message = payload.message;
        }

        toast.success(message);
    }

    if (isRejected(action)) {
        let error = "Xəta baş verdi";

        const payload = action.payload as BackendResponse | undefined;

        if (
            payload &&
            typeof payload === "object" &&
            payload.data &&
            typeof payload.data === "object" &&
            "message" in payload.data
        ) {
            error = payload.data.message;
        }
        toast.error(error);
    }

    return next(action);
};
