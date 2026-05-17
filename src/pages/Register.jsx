import React, { use, useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../provider/AuthProvider';

const Register = () => {
    const { createUser, setUser, updateUser } = use(AuthContext)
    const [passwordError, setPasswordError] = useState('');
    const navigate = useNavigate()
    const handleRegister = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const photo_url = e.target.photo.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        if (password.length < 5) {
            setPasswordError('Password Should be more than 6 charecter')
            return
        }
        else {
            setPasswordError('')
        }
        createUser(email, password)
            .then(result => {
                const user = result.user;
                updateUser({ displayName: name, photoURL: photo_url })
                    .then(() => {
                        setUser({ ...user, displayName: name, photoURL: photo_url });
                        navigate('/')
                    })
                    .catch(error => {
                        console.log(error)
                        setUser(user)
                    })
            })
            .catch(error => {
                console.log(error.message)
            })

    }
    return (
        <div className=" pt-10 flex justify-center items-center bg-[#F3F3F3] font-poppins">
            {/* Main Registration Card */}
            <div className="bg-white w-full max-w-150 p-16 shadow-sm rounded-none">

                {/* Title */}
                <h2 className="text-3xl font-bold text-center text-[#403F3F] mb-10">
                    Register your account
                </h2>

                {/* Decorative Divider */}
                <div className="border-t border-[#E7E7E7] mb-10"></div>

                <form onSubmit={handleRegister}>
                    {/* Your Name Input */}
                    <div className="mb-6">
                        <label className="block font-semibold text-[#403F3F] mb-4">
                            Your Name
                        </label>
                        <input
                            name='name'
                            type="text"
                            required
                            placeholder="Enter your name"
                            className="w-full bg-[#F3F3F3] border-none rounded-md p-5 focus:outline-none placeholder:text-[#9F9F9F]"
                        />
                    </div>

                    {/* Photo URL Input (with design placeholder) */}
                    <div className="mb-6">
                        <label className="block text-xl font-semibold text-[#403F3F] mb-4">
                            Photo URL
                        </label>
                        <input
                            required
                            name='photo'
                            type="text"
                            placeholder="Enter your password" // As seen in design
                            className="w-full bg-[#F3F3F3] border-none rounded-md p-5 focus:outline-none placeholder:text-[#9F9F9F]"
                        />
                    </div>

                    {/* Email Input */}
                    <div className="mb-6">
                        <label className="block text-xl font-semibold text-[#403F3F] mb-4">
                            Email
                        </label>
                        <input
                            required
                            name='email'
                            type="email"
                            placeholder="Enter your email address"
                            className="w-full bg-[#F3F3F3] border-none rounded-md p-5 focus:outline-none placeholder:text-[#9F9F9F]"
                        />
                    </div>

                    {/* Password Input */}
                    <div className="mb-6">
                        <label className="block text-xl font-semibold text-[#403F3F] mb-4">
                            Password
                        </label>
                        <input
                            required
                            name='password'
                            type="password"
                            placeholder="Enter your password"
                            className="w-full bg-[#F3F3F3] border-none rounded-md p-5 focus:outline-none placeholder:text-[#9F9F9F]"
                        />
                    </div>

                    {/* Terms & Conditions Checkbox */}
                    <div className="flex items-center gap-3 mb-8">
                        <input
                            required
                            type="checkbox"
                            className="w-5 h-5 accent-[#403F3F] border-[#CCCCCC] rounded"
                        />
                        <label className="text-lg font-normal text-[#706F6F]">
                            Accept <span className="font-semibold">Term & Conditions</span>
                        </label>
                    </div>
                    <div>
                        {passwordError && <p>{passwordError}</p>}
                    </div>
                    <p className="text-center mt-8 font-semibold text-[#706F6F]">
                        Already Have An Account ?{" "}
                        <Link to="/auth/login" className="text-[#F75B5F] hover:underline">
                            Login
                        </Link>
                    </p>

                    {/* Register Action Button */}
                    <div className="mt-8">
                        <button
                            type="submit"
                            className="w-full bg-[#403F3F] text-white py-4 text-xl font-semibold rounded-md hover:bg-[#333232] transition-colors"
                        >
                            Register
                        </button>
                    </div>
                </form>

            </div>
        </div>
    );
};

export default Register;