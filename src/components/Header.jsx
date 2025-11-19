import React from 'react';
import logo from "../assets/logo.png"       
import { format } from 'date-fns';

const Header = () => {
    return (
        <div>
            <div className="flex flex-col justify-center gap-3 items-center">
                <img src={logo} alt="" />
                <p className='text-accent'>Journalism Without Fear or Favour</p>
                <p className='font-semibold text-accent'>{format(new Date(), "EEEE, MMMM dd, yyyy")}</p>
            </div>
        </div>
    );
};

export default Header;