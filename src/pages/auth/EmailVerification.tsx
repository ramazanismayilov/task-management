import React from "react";

const EmailVerification: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold text-indigo-600">TaskMaster</h1>
          <p className="text-gray-600 mt-1 text-sm">Confirm email address 🔐</p>
          <p className="text-gray-500 text-xs mt-1">Enter the 6-digit code sent to your email</p>
        </div>
        <form className="space-y-6">
          <div className="flex justify-between">
            <input maxLength={1} className="w-12 h-12 text-center text-xl font-semibold border border-gray-300 
                rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none"
            />
          </div>
          <button type="submit" className="w-full py-2.5 font-medium bg-indigo-600 text-white
           rounded-lg hover:bg-indigo-700 transition">
            Verify Email
          </button>
        </form>
        <div className="text-center mt-5">
          <p className="text-sm text-gray-600">
            Didn't receive the code?{" "}
            <button className="text-indigo-600 hover:underline font-medium">Resend code</button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default EmailVerification;
