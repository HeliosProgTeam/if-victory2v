import React from 'react';
import LogoImage from './logo.svg'


const Logo = () => {
    return (
        <div className={"logo"}>
            <LogoImage/>
            <span className="logo__title">
                IF-Victory
            </span>
        </div>
    );
};

export default Logo;