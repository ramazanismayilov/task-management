import * as Yup from "yup";

export const loginSchema = Yup.object().shape({
    email: Yup.string()
        .email("Email is not in the correct format")
        .required("Email cannot be empty"),
    password: Yup.string()
        .min(6, "Password must be at least 6 characters long")
        .max(12, "Password can be a maximum of 12 characters")
        .required("Password cannot be empty"),
});

export const registerSchema = Yup.object().shape({
    fullName: Yup.string().required("Fullname cannot be empty"),
    email: Yup.string()
        .email("Email is not in the correct format")
        .required("Email cannot be empty"),
    password: Yup.string()
        .min(6, "Password must be at least 6 characters long")
        .max(12, "Password can be a maximum of 12 characters")
        .required("Password cannot be empty"),
});

export const verifyOtpSchema = Yup.object().shape({
    otpCode: Yup.string()
        .required("OtpCode cannot be empty")
        .length(6, "OtpCode must be exactly 6 digits"),
});