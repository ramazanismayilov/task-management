import { useFormik } from "formik";
import { verifyOtpSchema } from "../lib/validation/auth.schema";
import { useNavigate } from "react-router-dom";
import { useVerifyOtpMutation } from "../store/services/authApi";
import { useDispatch } from "react-redux";
import { setVerifyOtp } from "../store/slices/auth.slice";

export function useVerifyOtp() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [verifyOtp] = useVerifyOtpMutation();

    const email = localStorage.getItem("email");

    const formik = useFormik({
        initialValues: {
            otpCode: "",
        },
        validationSchema: verifyOtpSchema,
        onSubmit: async (values) => {
            if (!/^\d{6}$/.test(values.otpCode)) return;

            const res = await verifyOtp({
                email,
                otpCode: Number(values.otpCode),
            }).unwrap();

            dispatch(setVerifyOtp(res));
            navigate("/auth/login");
        },

    });

    return { formik };
}
