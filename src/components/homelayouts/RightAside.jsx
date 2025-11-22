import React, { use } from 'react';
import SocialLogin from './SocialLogin';
import FindUs from './FindUs';
import QZone from './QZone';
import { AuthContecxt } from '../../provider/AuthProvider';

const RightAside = () => {
    const {user} = use(AuthContecxt);
    return (
        <div className='space-y-5'>
            {!user && <SocialLogin></SocialLogin>}
            <FindUs></FindUs>
            <QZone></QZone>
        </div>
    );
};

export default RightAside;