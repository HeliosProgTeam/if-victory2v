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
          <a href="#aboutsection" className="nav__link">
            Про нас
          </a>
        </li>
        <li className="nav__item" {...other}>
          <a href="#contactssection" className="nav__link">
            Контакти
          </a>
        </li>
        <li className="nav__item">
          <BankAccounts
            // className={"nav__link nav__link--btn"}
          />
        </li>
      </ul>
    </div>
  );
};

export default Nav;
