import { useFormik } from "formik";
import { loginSchema } from "../lib/validation/auth.schema";
import { useNavigate } from "react-router-dom";
import { useLoginMutation } from "../store/services/authApi";
import { useDispatch } from "react-redux";
import { setCredentials } from "../store/slices/auth.slice";

export function useLogin() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [login] = useLoginMutation();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginSchema,
    onSubmit: async (values: any) => {
      const res = await login(values);
      dispatch(setCredentials(res));
      navigate("/");
    },
  });

  return formik
}
