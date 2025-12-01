import React from "react";
import { Link } from "react-router-dom";
import { useLogin } from "../../hooks/useLogin";

const Login: React.FC = () => {
  const formik = useLogin();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold text-indigo-600">TaskMaster</h1>
          <p className="text-gray-600 mt-1 text-sm">Welcome 👋</p>
        </div>
        <form className="space-y-5" onSubmit={formik.handleSubmit}>
          <div>
            <label className="text-sm font-medium text-gray-700">Email</label>
            <input type="email" name="email" placeholder="you@example.com"
              value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur}
              className="w-full mt-1 px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500"
            />
            {formik.touched.email && formik.errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {String(formik.errors.email)}
              </p>
            )}
          </div>
          <div>
            <label className="text-sm font-medium text-gray-700">Password</label>
            <input type="password" name="password" placeholder="*******"
              value={formik.values.password} onChange={formik.handleChange} onBlur={formik.handleBlur}
              className="w-full mt-1 px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500"
            />
            {formik.touched.password && formik.errors.password && (
              <p className="text-red-500 text-sm mt-1">
                {String(formik.errors.password)}
              </p>
            )}
            <div className="text-right mt-1">
              <Link to="/auth/forgot-password" className="text-xs text-indigo-600 hover:underline">
                Forgot Password?
              </Link>
            </div>
          </div>
          <button type="submit" className="w-full py-2.5 font-medium bg-indigo-600 text-white rounded-lg 
            hover:bg-indigo-700 transition cursor-pointer disabled:opacity-70" >
            Sign In
          </button>
        </form>
        <p className="text-center text-sm text-gray-600 mt-5">
          Don't have an account?{" "}
          <Link
            to="/auth/register"
            className="text-indigo-600 font-medium hover:underline"
          >
            Create Account
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
