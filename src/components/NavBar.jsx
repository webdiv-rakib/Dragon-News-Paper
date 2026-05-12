import React from 'react';
import { NavLink } from 'react-router';
import user from '../assets/user.png'

const NavBar = () => {
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
                <img src={user} alt="" />
                <button className='btn btn-primary rounded-none px-10'>Login</button>
            </div>
        </div>
    );
};

export default NavBar;