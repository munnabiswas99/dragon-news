import React from 'react';
import logo from "../assets/logo.png"       

const Header = () => {
    return (
        <div>
            <div className="flex flex-col justify-center gap-3 items-center">
                <img src={logo} alt="" />
                <p>Journalism Without Fear or Favour</p>
            </div>
        </div>
    );
};

export default Header;