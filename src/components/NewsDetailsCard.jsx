import React from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { Link } from 'react-router';

const NewsDetailsCard = ({ news }) => {
    // console.log(news);
    const { title, details, image_url, category_id } = news
    return (
        <div className='mt-5'>
            <div className="bg-white border border-[#E7E7E7] rounded-md p-8 max-w-212.5 mx-auto font-poppins">

                {/* Featured News Image */}
                <div className="w-full mb-6">
                    <img
                        src={image_url} // Placeholder image mimicking the laptop/mobile news graphic
                        alt="News feature"
                        className="w-full h-auto object-cover rounded-md"
                    />
                </div>

                {/* News Title */}
                <h2 className="text-2xl lg:text-3xl font-bold text-[#403F3F] leading-snug mb-4">
                    {title}
                </h2>

                {/* News Body / Content Paragraph */}
                <p className="text-sm text-[#706F6F] leading-relaxed mb-8 text-justify">
                    {details}
                </p>

                {/* Navigation Button */}
                <div className="flex justify-start">
                    <Link
                        to={`/category/${category_id}`}
                        className="inline-flex items-center gap-2 bg-[#D72050] text-white px-6 py-3 font-semibold rounded-none hover:bg-[#b81640] transition-colors text-base"
                    >
                        <FaArrowLeft className="text-sm" />
                        All news in this category
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default NewsDetailsCard;