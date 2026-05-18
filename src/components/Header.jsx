import React from 'react';
import logo from '../assets/logo.png';
import moment from 'moment';

const Header = () => {
    return (
        <div className='space-y-4 flex flex-col items-center text-center px-4'>
            {/* Logo Container - Fluidly scales from mobile to desktop */}
            <div className='pt-6 max-w-[280px] sm:max-w-[350px] md:max-w-[400px] w-full transition-all duration-200'>
                <img
                    src={logo}
                    alt="Dragoon News Logo"
                    className='w-full h-auto object-contain'
                />
            </div>

            {/* Meta Information Panel */}
            <div className='space-y-1.5'>
                {/* Authentic News Tagline */}
                <p className='text-sm sm:text-base font-normal text-[#706F6F] max-w-md mx-auto leading-relaxed'>
                    Journalism Without Fear or Favour
                </p>

                {/* Dynamic Responsive Date Stamp */}
                <p className='text-base sm:text-lg font-medium text-[#403F3F] capitalize'>
                    {moment().format("dddd, MMMM Do YYYY")}
                </p>
            </div>
        </div>
    );
};

export default Header;