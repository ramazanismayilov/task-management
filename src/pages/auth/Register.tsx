import React from "react";
import { Link } from "react-router-dom";

const Register: React.FC = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
            <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                <div className="text-center mb-6">
                    <h1 className="text-3xl font-bold text-indigo-600">TaskMaster</h1>
                    <p className="text-gray-600 mt-1 text-sm">Create an account ✨</p>
                </div>
                <form className="space-y-5">
                    <div>
                        <label className="text-sm font-medium text-gray-700">Full Name</label>
                        <input type="text" name="fullName" placeholder="Your full name" required
                            className="w-full mt-1 px-4 py-2 rounded-lg border border-gray-300 focus:ring-2
                            focus:ring-indigo-500 focus:border-indigo-500 outline-none"
                        />
                    </div>
                    <div>
                        <label className="text-sm font-medium text-gray-700">Email</label>
                        <input type="email" name="email" placeholder="you@example.com" required
                            className="w-full mt-1 px-4 py-2 rounded-lg border border-gray-300 focus:ring-2
                            focus:ring-indigo-500 focus:border-indigo-500 outline-none"
                        />
                    </div>
                    <div>
                        <label className="text-sm font-medium text-gray-700">Password</label>
                        <input type="password" name="password" placeholder="******" required
                            className="w-full mt-1 px-4 py-2 rounded-lg border border-gray-300 focus:ring-2
                            focus:ring-indigo-500 focus:border-indigo-500 outline-none"
                        />
                    </div>
                    <button type="submit" className="w-full py-2.5 font-medium bg-indigo-600 text-white 
                        rounded-lg hover:bg-indigo-700 transition">
                        Create Account
                    </button>
                </form>
                <p className="text-center text-sm text-gray-600 mt-5">
                    Already have an account?{" "}
                    <Link to="/auth/login" className="text-indigo-600 font-medium hover:underline">
                        Sign In
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Register;
