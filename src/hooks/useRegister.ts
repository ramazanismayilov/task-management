import { useFormik } from "formik";
import { registerSchema } from "../lib/validation/auth.schema";
import { useNavigate } from "react-router-dom";
import { useRegisterMutation } from "../store/services/authApi";
import { useDispatch } from "react-redux";
import { setRegisteredUser } from "../store/slices/auth.slice";

export function useRegister() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [register] = useRegisterMutation();

    const formik = useFormik({
        initialValues: {
            fullName: "",
            email: "",
            password: "",
        },
        validationSchema: registerSchema,
        onSubmit: async (values: any, { resetForm }) => {
            const res = await register(values).unwrap();
            dispatch(setRegisteredUser(res));
            resetForm()
            navigate("/auth/email-verification");
        },
    });

    return formik
}
