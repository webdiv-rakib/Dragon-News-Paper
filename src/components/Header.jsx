import React from 'react';
import Marquee from "react-fast-marquee";
import logo from '../assets/logo.png'
import moment from 'moment';
const Header = () => {
    return (
        <div className='space-y-3'>
            <div className='flex justify-center pt-5'>
                <img src={logo} alt="" />
            </div>
            <div className='text-center'>
                <p className='text-accent'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique, dolore!</p>
                <p className='text-gray-600'>{moment().format("dddd, MMMM Do YYYY")}</p>
            </div>
        </div>
    );
};

export default Header;