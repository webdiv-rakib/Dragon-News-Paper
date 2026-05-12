import React from 'react';
import SocialLogin from './SocialLogin';

const RightAside = () => {
    return (
        <div>
            <h1 className='font-semibold'>Login With</h1>
            <div>
                <SocialLogin></SocialLogin>
            </div>
        </div>
    );
};

export default RightAside;