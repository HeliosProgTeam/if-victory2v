import React from 'react';
import BankAccounts from "../bankAccounts/BankAccounts";

const Nav = () => {
  return (
    <div className="nav">
      <ul className="nav__list">
        <li className="nav__item">
          <a href="#" className="nav__link">
            Головна
          </a>
        </li>
        <li className="nav__item">
          <a href="#" className="nav__link">
            Про нас
          </a>
        </li>
        <li className="nav__item">
          <a href="#" className="nav__link">
            Контакти
          </a>
        </li>
        <li className="nav__item">
          {/*<a href="#" className="nav__link">*/}
          {/*  Реквiзити*/}
          {/*</a>*/}
          <BankAccounts className={'nav__link nav__link--btn'}/>
        </li>
      </ul>
    </div>
  );
};

export default Nav;