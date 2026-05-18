import React, { use, useRef, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../provider/AuthProvider';

const LogIn = () => {
    const { signInUser, passwordReset } = use(AuthContext)
    const [error, setError] = useState('')
    const location = useLocation();
    const navigate = useNavigate();
    const emailRef = useRef()
    const handleLogin = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        // console.log(email, password)
        signInUser(email, password)
            .then(result => {
                const user = result.user;
                // console.log(user)
                navigate(`${location.state ? location.state : '/'}`)
            })
            .catch(error => {
                const errorCode = error.code;
                // const errorMessage = error.message;
                // alert(errorCode, errorMessage)
                setError(errorCode)
            })
    }

    const handleResetPassword = () => {
        const email = emailRef.current?.value;
        passwordReset(email)
            .then(() => {
                // Password reset email sent!
                // ..
                alert('Reset email send')
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
            });
    }
    return (
        <div className="pt-10 flex justify-center items-center bg-[#F3F3F3] font-poppins">
            {/* Main Card Container */}
            <div className="bg-white w-full max-w-150 p-16 shadow-sm rounded-none">

                {/* Title */}
                <h2 className="text-2xl font-bold text-center text-[#403F3F] mb-10">
                    Login your account
                </h2>

                {/* Decorative Divider */}
                <div className="border-t border-[#E7E7E7] mb-10"></div>

                <form onSubmit={handleLogin}>
                    {/* Email Input Group */}
                    <div className="mb-6">
                        <label className="block font-semibold text-[#403F3F] mb-4">
                            Email address
                        </label>
                        <input
                            ref={emailRef}
                            required
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
                            required
                            type="password"
                            name='password'
                            placeholder="Enter your password"
                            className="w-full bg-[#F3F3F3] border-none rounded-md p-5 focus:outline-none placeholder:text-[#9F9F9F]"
                        />
                    </div>
                    <div className="mb-2 text-right">
                        <a onClick={handleResetPassword} href="#" className="text-sm text-gray-400 hover:text-indigo-500">Forgot Password?</a>
                    </div>

                    {/* Login Action */}
                    <div className="mt-8">
                        <div>
                            {error && <p className='text-red-500'>{error}</p>}
                        </div>
                        <button
                            type="submit"
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