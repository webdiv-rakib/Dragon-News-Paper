import React from 'react';
import SocialLogin from './SocialLogin';
import FindUs from './FindUs';
import Qzone from './Qzone';
import Advertise from './Advertise';

const RightAside = () => {
    return (
        <div>
            <h1 className='font-semibold'>Login With</h1>
            <div>
                <SocialLogin></SocialLogin>
            </div>
            <div>
                <FindUs></FindUs>
            </div>
            <div>
                <Qzone></Qzone>
            </div>
            <div>
                <Advertise></Advertise>
            </div>
        </div>
    );
};

export default RightAside;