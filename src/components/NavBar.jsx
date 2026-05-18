import React, { use } from 'react';
import { Link, NavLink } from 'react-router';
import userIcon from '../assets/user.png'
import { AuthContext } from '../provider/AuthProvider';

const NavBar = () => {
    const { user, logOut } = use(AuthContext);
    const handleLogout = () => {
        logOut()
            .then(() => {
                alert('Successfully Logged Out')
            }).catch((error) => {
                console.log(error);
            });
    }
    const links = <>
        <ul><NavLink to='/'>Home</NavLink></ul>
        <ul><NavLink to='/about'>About</NavLink></ul>
        <ul><NavLink to='/career'>Career</NavLink></ul>
    </>
    return (
        // Changed flex container to stack vertically on mobile (flex-col) and spread horizontally on larger screens (sm:flex-row)
        <div className='flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0 w-full'>

            {/* Left Section: User display status remains centered or left-aligned depending on layout viewports */}
            <div className='text-center sm:text-left font-medium min-h-[24px]'>
                {
                    user && user.displayName
                }
            </div>

            {/* Center Section: Flexible navigation container with tailored small screen padding */}
            <div className='nav flex flex-wrap justify-center gap-4 sm:gap-5 font-semibold text-accent py-1'>
                {
                    links
                }
            </div>

            {/* Right Section: Mobile balanced profile layout alignment block */}
            <div className='login-btn flex items-center justify-center gap-3 w-full sm:w-auto'>
                <img className='rounded-full w-10 sm:w-12 h-10 sm:h-12 object-cover' src={`${user && user.photoURL ? user.photoURL : userIcon}`} alt="" />
                {
                    user ? (
                        <button onClick={handleLogout} className='btn btn-primary rounded-none px-8 sm:px-10 py-2 sm:py-3 min-h-0 h-auto text-sm sm:text-base'>Logout</button>
                    ) : (
                        <Link to='/auth/login' className='btn btn-primary rounded-none px-8 sm:px-10 py-2 sm:py-3 min-h-0 h-auto text-sm sm:text-base inline-block text-center'>Login</Link>
                    )
                }
            </div>
        </div>
    );
};

export default NavBar;