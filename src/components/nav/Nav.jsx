import React from "react";
import BankAccounts from "../bankAccounts/BankAccounts";

const Nav = ({ ...other }) => {
  return (
    <div className="nav">
      <ul className="nav__list">
        <li className="nav__item" {...other}>
          <a href="#mainhome" className="nav__link">
            Головна
          </a>
        </li>
        <li className="nav__item" {...other}>
          <a href="/report" className="nav__link">
            Про нас
          </a>
        </li>
        <li className="nav__item" {...other}>
          <a href="#contactssection" className="nav__link">
            Контакти

          </a>
        </li>
        <li className="nav__item">
          <BankAccounts />
        </li>
      </ul>
    </div>
      // fdfd
  );
};

export default Nav;
