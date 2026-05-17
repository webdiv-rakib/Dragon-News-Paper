import React from 'react';
import Marquee from "react-fast-marquee";
import { Link } from 'react-router';
const LatestNews = ({ newsItems }) => {
    // const { title } = newsItems;
    return (
        <div className='flex items-center gap-5 bg-base-200 p-3'>
            <button className='text-base-100 bg-secondary btn'>Latest</button>
            <Marquee className='space-x-10' pauseOnHover speed={50}>
                <p className='font-semibold'>I can be a React component, multiple React components, or just some text.</p>
                <p className='font-semibold'>I can be a React component, multiple React components, or just some text.</p>
                <p className='font-semibold'>I can be a React component, multiple React components, or just some text.</p>
                {/* {
                    newsItems?.map((news) => (
                        <p
                            key={news.id || news._id}
                            className='font-semibold text-[#403F3F] mx-10 text-base'
                        >
                            • {news.title}
                        </p>
                    ))
                } */}
                {
                    newsItems.map(news => <p className='mx-10 font-semibold' key={news.id}>{news.title}</p>)
                }
            </Marquee>
        </div>
    );
};

export default LatestNews;