import React from "react";
import Logo from "../../components/logo/Logo";
import Nav from "../../components/nav/Nav";
import Phone from "../../components/phone/Phone"
import Social from "../../components/social/Social";


export const Header = ({...props}) => {
    return (
        <header className="header" {...props}>
            <div className="header__logo">
                <Logo/>
            </div>
            <div className="header__nav">
                <Nav/>
            </div>
            <div className="header__phone">
                <Phone phone="099 745 00 00"/>
            </div>
            {/*<div className="header__social">*/}
            {/*  <Social/>*/}
            {/*</div>*/}
        </header>
    );
};
