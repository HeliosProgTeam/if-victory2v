import React from 'react'
import Logo from './logo.svg'

export const Header = ({...props}) => {
    return (
        <header className="header" {...props}>
            <div className="logo">
                <Logo/>
            </div>
            <div className="nav-wrapper">
                <ul className="nav">
                    <li className="nav-item">
                        <a href="#" className="nav-link">
                            Головна
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link">
                            Про нас
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link">
                            Контакти

                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link">
                            Реквiзити
                        </a>
                    </li>
                </ul>
            </div>
        </header>
    );
};
