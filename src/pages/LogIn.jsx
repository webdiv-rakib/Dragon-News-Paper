import React from 'react';
import { Link } from 'react-router';

const LogIn = () => {
    return (
        <div className="pt-10 flex justify-center items-center bg-[#F3F3F3] font-poppins">
            {/* Main Card Container */}
            <div className="bg-white w-full max-w-[600px] p-16 shadow-sm rounded-none">

                {/* Title */}
                <h2 className="text-2xl font-bold text-center text-[#403F3F] mb-10">
                    Login your account
                </h2>

                {/* Decorative Divider */}
                <div className="border-t border-[#E7E7E7] mb-10"></div>

                <form>
                    {/* Email Input Group */}
                    <div className="mb-6">
                        <label className="block font-semibold text-[#403F3F] mb-4">
                            Email address
                        </label>
                        <input
                            type="email"
                            name='email'
                            placeholder="Enter your email address"
                            className="w-full bg-[#F3F3F3] border-none rounded-md p-5 focus:outline-none placeholder:text-[#9F9F9F]"
                        />
                    </div>

                    {/* Password Input Group */}
                    <div className="mb-8">
                        <label className="block font-semibold text-[#403F3F] mb-4">
                            Password
                        </label>
                        <input
                            type="password"
                            name='password'
                            placeholder="Enter your password"
                            className="w-full bg-[#F3F3F3] border-none rounded-md p-5 focus:outline-none placeholder:text-[#9F9F9F]"
                        />
                    </div>

                    {/* Login Action */}
                    <div className="mt-8">
                        <button
                            type="button"
                            className="w-full bg-[#403F3F] text-white py-4 text-xl font-semibold rounded-md hover:bg-[#333232] transition-colors"
                        >
                            Login
                        </button>
                    </div>
                </form>

                {/* Redirect Link */}
                <p className="text-center mt-8 font-semibold text-[#706F6F]">
                    Dont't Have An Account ?{" "}
                    <Link to="/auth/register" className="text-[#F75B5F] hover:underline">
                        Register
                    </Link>
                </p>

            </div>
        </div>
    );
};

export default LogIn;