import React from 'react';
import { FaRegBookmark, FaShareAlt, FaEye, FaStar } from 'react-icons/fa';
import { Link } from 'react-router';

const NewsCard = ({ news }) => {
    const {
        title,
        image_url,
        author,
        details,
        total_view,
        rating,
        id
    } = news;

    return (
        <div className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden">

            {/* Top Section */}
            <div className="flex items-center justify-between bg-gray-100 px-4 py-3">
                <div className="flex items-center gap-3">
                    <img
                        className="w-12 h-12 rounded-full object-cover"
                        src={author?.img}
                        alt={author?.name}
                    />

                    <div>
                        <h2 className="font-semibold text-gray-800">
                            {author?.name}
                        </h2>

                        <p className="text-sm text-gray-500">
                            {author?.published_date}
                        </p>
                    </div>
                </div>

                <div className="flex items-center gap-4 text-gray-500 text-lg">
                    <FaRegBookmark className="cursor-pointer" />
                    <FaShareAlt className="cursor-pointer" />
                </div>
            </div>

            {/* Body */}
            <div className="p-5">
                <h1 className="text-3xl font-bold leading-tight text-gray-800 mb-5">
                    {title}
                </h1>

                <img
                    className="w-full h-70 object-cover rounded-lg"
                    src={image_url}
                    alt={title}
                />

                <div className="mt-5 text-gray-600 leading-8">
                    <p>
                        {details?.length > 200
                            ? `${details.slice(0, 200)}...`
                            : details}
                    </p>

                    <Link to={`/news-details/${id}`} className="mt-2 text-orange-500 font-semibold hover:underline">
                        Read More
                    </Link>
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between border-t mt-6 pt-4">

                    {/* Rating */}
                    <div className="flex items-center gap-2">
                        <div className="flex text-orange-400 gap-1">
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                        </div>

                        <span className="font-semibold text-gray-700">
                            {rating?.number}
                        </span>
                    </div>

                    {/* Views */}
                    <div className="flex items-center gap-2 text-gray-500">
                        <FaEye />
                        <span>{total_view}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsCard;