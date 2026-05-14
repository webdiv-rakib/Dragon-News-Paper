import React, { use } from 'react';
import { Link, NavLink } from 'react-router';
import userIcon from '../assets/user.png'
import { AuthContext } from '../provider/AuthProvider';

const NavBar = () => {
    const { user } = use(AuthContext);
    const links = <>
        <ul><NavLink to='/'>Home</NavLink></ul>
        <ul><NavLink to='/about'>About</NavLink></ul>
        <ul><NavLink to='/career'>Career</NavLink></ul>
    </>
    return (
        <div className='flex justify-between items-center'>
            <div className=''>

            </div>
            <div className='nav flex gap-5 font-semibold text-accent'>
                {
                    links
                }
            </div>
            <div className='login-btn flex items-center gap-3'>
                <img className='rounded-full' src={userIcon} alt="" />
                <Link to='/auth/login' className='btn btn-primary rounded-none px-10'>Login</Link>
            </div>
        </div>
    );
};

export default NavBar;