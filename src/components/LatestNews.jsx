import React from 'react';
import Marquee from "react-fast-marquee";
import { Link } from 'react-router';

const LatestNews = ({ newsItems }) => {
    // const { title } = newsItems;
    return (
        // Adjusted padding and gaps to be smaller on mobile devices and larger on desktops
        <div className='flex items-center gap-3 sm:gap-5 bg-base-200 p-2 sm:p-3'>
            {/* Added responsive text sizes and adjusted button sizing for smaller viewports */}
            <button className='text-xs sm:text-base text-base-100 bg-secondary btn px-3 sm:px-4 py-1 sm:py-2 min-h-0 h-auto rounded-none border-none'>
                Latest
            </button>
            <Marquee className='space-x-10' pauseOnHover speed={50}>
                {
                    // Added a fallback for the key format and responsive text spacing/sizing
                    newsItems?.map(news => (
                        <p 
                            className='mx-4 sm:mx-10 font-semibold text-sm sm:text-base whitespace-nowrap' 
                            key={news.id || news._id}
                        >
                            • {news.title}
                        </p>
                    ))
                }
            </Marquee>
        </div>
    );
};

export default LatestNews;