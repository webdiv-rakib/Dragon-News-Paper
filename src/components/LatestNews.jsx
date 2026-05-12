import React from 'react';
import Marquee from "react-fast-marquee";
const LatestNews = () => {
    return (
        <div className='flex items-center gap-5 bg-base-200 p-3'>
            <button className='text-base-100 bg-secondary btn'>Latest</button>
            <Marquee className='space-x-10' pauseOnHover speed={50}>
                <p className='font-semibold'>I can be a React component, multiple React components, or just some text.</p>
                <p className='font-semibold'>I can be a React component, multiple React components, or just some text.</p>
                <p className='font-semibold'>I can be a React component, multiple React components, or just some text.</p>
            </Marquee>
        </div>
    );
};

export default LatestNews;