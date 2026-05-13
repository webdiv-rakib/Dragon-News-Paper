import React from 'react';
import swimming from '../../assets/swimming.png'
import classroom from '../../assets/class.png'
import playground from '../../assets/playground.png'

const Qzone = () => {
    return (
        <div className='pt-5 bg-base-200 p-5 mt-5'>
            <div>
                <h1 className='font-semibold'>Q Zone</h1>
            </div>
            <div className='grid grid-cols-1 gap-3'>
                <img src={swimming} alt="" />
                <img src={classroom} alt="" />
                <img src={playground} alt="" />
            </div>
        </div>
    );
};

export default Qzone;