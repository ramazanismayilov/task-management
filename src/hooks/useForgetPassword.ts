import { useFormik } from "formik";
import { forgetPasswordSchema } from "../lib/validation/auth.schema";
import { useForgetPasswordMutation } from "../store/services/authApi";

export function useForgetPassword() {
    const [forgetPassword] = useForgetPasswordMutation();

    const formik = useFormik({
        initialValues: {
            email: "",
        },
        validationSchema: forgetPasswordSchema,
        onSubmit: async (values, { resetForm }) => {
            await forgetPassword({
                email: values.email,
                callbackURL: 'http://localhost:3000/forget-password.html',
            }).unwrap();

            resetForm();
        },
    });

    return { formik };
}
