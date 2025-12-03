import { useFormik } from "formik";
import { registerSchema } from "../lib/validation/auth.schema";
import { useNavigate } from "react-router-dom";
import { useRegiserMutation } from "../store/services/authApi";
import { useDispatch } from "react-redux";
import { setCredentials } from "../store/slices/auth.slice";

export function useRegister() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [register] = useRegiserMutation();

    const formik = useFormik({
        initialValues: {
            fullName: "",
            email: "",
            password: "",
        },
        validationSchema: registerSchema,
        onSubmit: async (values: any) => {
            const res = await register(values);
            dispatch(setCredentials(res));
            navigate("/auth/email-verification");
        },
    });

    return formik
}
