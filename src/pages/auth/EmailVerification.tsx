import React from "react";
import { useVerifyOtp } from "../../hooks/useVerifyOtp";
import { Input } from "antd";
import { useResendOtp } from "../../hooks/useResendOtp";

const EmailVerification: React.FC = () => {
  const { formik } = useVerifyOtp();
  const { handleResend } = useResendOtp();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold text-indigo-600">TaskMaster</h1>
          <p className="text-gray-600 mt-1 text-sm">Confirm email address 🔐</p>
          <p className="text-gray-500 text-xs mt-1">
            Enter the 6-digit code sent to your email
          </p>
        </div>
        <form onSubmit={formik.handleSubmit} className="space-y-6">
          <Input.OTP length={6} size="large" onChange={(value) => formik.setFieldValue("otpCode", value)}
            className="flex justify-center"
          />
          {formik.touched.otpCode && formik.errors.otpCode && (
            <p className="text-red-500 text-xs mt-1 text-center">
              {formik.errors.otpCode}
            </p>
          )}
          <button type="submit" className="w-full py-2.5 font-medium bg-indigo-600 text-white rounded-lg
           hover:bg-indigo-700 transition disabled:opacity-60 cursor-pointer">
            Verify Email
          </button>
        </form>
        <div className="text-center mt-5">
          <p className="text-sm text-gray-600">
            Didn't receive the code?{" "}
            <button onClick={handleResend} className="text-indigo-600 hover:underline font-medium cursor-pointer">
              Resend code
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default EmailVerification;
