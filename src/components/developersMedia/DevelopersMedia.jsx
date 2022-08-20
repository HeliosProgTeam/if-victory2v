import React from 'react';
import Instagram from './instagram.svg'
import Twitter from './twitter.svg'
import Telegram from './telegram.svg'
import Github from './github.svg'


import Img from '../../components/Image'

const DevelopersMedia = () => {
    return (
        <div className={"developers"}>
            <span className={"developers__rights"}>
                © {(new Date().getFullYear())} Helios, Inc. All Rights reserved
            </span>
            <div className="developers__media">
                <div className="developers_item">
                    <a href="#">
                        <Img src={Instagram} alt={"media"}/>
                    </a>
                </div>
                <div className="developers_item">
                    <a href="#">
                        <Img src={Twitter} alt={"media"}/>
                    </a>
                </div>
                <div className="developers_item">
                    <a href="#">
                        <Img src={Telegram} alt={"media"}/>
                    </a>
                </div>
                <div className="developers_item">
                    <a href="#">
                        <Img src={Github} alt={"media"}/>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default DevelopersMedia;