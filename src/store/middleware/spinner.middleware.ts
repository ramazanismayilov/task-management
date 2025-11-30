import { isPending, isFulfilled, isRejected, type Middleware } from "@reduxjs/toolkit";
import { startSpinner, stopSpinner } from "../slices/spinner.slice";

export const spinnerMiddleware: Middleware = () => (next) => (action) => {
    if (isPending(action)) next(startSpinner());
    if (isFulfilled(action) || isRejected(action)) next(stopSpinner());

    return next(action);
};
