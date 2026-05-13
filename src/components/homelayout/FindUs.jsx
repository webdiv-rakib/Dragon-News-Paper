import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const FindUs = () => {
    return (
        <div className='pt-5'>
            <h1 className='font-semibold'>Find Us On</h1>
            <div>
                <div className="join join-vertical w-full">
                    <button className="btn join-item justify-start p-5">
                        <FaFacebook></FaFacebook>
                        Facebook</button>
                    <button className="btn join-item justify-start p-5">
                        <FaTwitter></FaTwitter>
                        Twitter</button>
                    <button className="btn join-item justify-start p-5">
                        <FaInstagram></FaInstagram>
                        Instagram</button>
                </div>
            </div>
        </div>
    );
};

export default FindUs;